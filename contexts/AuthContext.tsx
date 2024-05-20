"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: any;
  login: (
    username: string,
    password: string,
    googlecode: string,
    captcha: string
  ) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  
  const login = async (
    username: string,
    password: string,
    googlecode: string,
    captcha: string
  ) => {
    const requestPayload = { 
      googlecode,
      username, 
      email: username, // Assuming username is the same as email
      password, 
      captcha 
    };
    console.log("Login request payload:", requestPayload);

    const response = await fetch(`${process.env.NEXT_PUBLIC_HOMEAPI_URL}/api/v1/auth/login/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestPayload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Login error response:", errorData);
      throw new Error(errorData.message || "Login failed");
    }

    const data = await response.json();
    console.log("Login success response:", data);

    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);
    setUser(data.user);

    // Redirect to the dashboard or home page
    router.push("/");
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setUser(null);

    // Redirect to the login page
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
