"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

interface AuthContextType {
  user: any;
  login: (
    emailOrUsername: string,
    password: string,
    googlecode?: string,
    captcha?: string
  ) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  const login = async (
    emailOrUsername: string,
    password: string,
    googlecode?: string,
    captcha?: string
  ) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailOrUsername,
          password,
          googlecode,
          captcha,
        }),
      });

      const text = await response.text(); // Read response as text

      try {
        const data = JSON.parse(text); // Try to parse response as JSON

        if (!response.ok) {
          console.error("Login error:", data);
          throw new Error(data.message || "Login failed");
        }

        const decodedToken = jwtDecode(data.token);
        setUser(decodedToken);
      } catch (e) {
        console.error("Response is not valid JSON:", text);
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
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
