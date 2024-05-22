"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ReCAPTCHA from "react-google-recaptcha";
import { useAuth } from "@/contexts/AuthContext";

export default function Component() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [googlecode, setGooglecode] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [showGoogleAuth, setShowGoogleAuth] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      console.log("Attempting to login with:", {
        email,
        password,
        googlecode,
        captcha,
      });
      await login(email, password, googlecode, captcha);
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptcha(value || "");
    setCaptchaVerified(!!value);
  };

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="relative hidden bg-gray-800 lg:block">
        <Image
          alt="Cryptocurrency Exchange"
          className="object-cover w-full"
          fill
          src="/placeholder.svg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Unlock the Future
            <br />
            of Digital Finance{"\n                "}
          </h1>
          <p className="mt-4 max-w-md text-lg text-gray-300 md:text-xl lg:text-2xl">
            Join our secure and trusted cryptocurrency exchange platform today
            and embark on a journey towards financial freedom and innovation.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              className="bg-indigo-500 hover:bg-indigo-600 transition-colors"
              size="lg"
              variant="default"
            >
              Get Started
            </Button>
            <Button
              className="border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white transition-colors"
              size="lg"
              variant="outline"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
        <div className="w-full max-w-md space-y-6">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 md:text-4xl">
              Sign in to your account
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label className="sr-only" htmlFor="email">
                Email address
              </Label>
              <Input
                autoComplete="email"
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 bg-white focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 transition-colors dark:border-gray-600 dark:text-gray-50 dark:placeholder-gray-400 dark:bg-gray-950"
                id="email"
                name="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
              />
            </div>
            <div className="relative">
              <Label className="sr-only" htmlFor="password">
                Password
              </Label>
              <Input
                autoComplete="current-password"
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 bg-white focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 transition-colors dark:border-gray-600 dark:text-gray-50 dark:placeholder-gray-400 dark:bg-gray-950"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type={showPassword ? "text" : "password"}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                {showPassword ? (
                  <svg
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.875 18.825a10.05 10.05 0 001.675-3.825m0-5.5A10.05 10.05 0 0013.875 5.175m-3.75 3.5A10.05 10.05 0 005.175 5.175m0 9.65a10.05 10.05 0 003.825 1.675M12 3.75a8.25 8.25 0 018.25 8.25 8.25 8.25 0 01-16.5 0A8.25 8.25 0 0112 3.75zM12 15a3 3 0 100-6 3 3 0 000 6z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.982 8.962a12.042 12.042 0 0014.57 0M4.03 15.38A9.953 9.953 0 011.61 12a9.953 9.953 0 012.42-3.38m0 6.76A9.953 9.953 0 0012 20a9.953 9.953 0 007.97-3.62m-7.97 3.62A9.953 9.953 0 004.03 15.38z"
                    />
                  </svg>
                )}
              </button>
            </div>
            {showGoogleAuth && (
              <div className="space-y-4">
                <Label htmlFor="googlecode" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Google Authenticator Code
                </Label>
                <Input
                  type="text"
                  id="googlecode"
                  value={googlecode}
                  onChange={(e) => setGooglecode(e.target.value)}
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 bg-white focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 transition-colors dark:border-gray-600 dark:text-gray-50 dark:placeholder-gray-400 dark:bg-gray-950"
                  placeholder="Enter your Google Authenticator code"
                />
              </div>
            )}
            <div className="flex justify-center space-y-4 mt-4 mb-4">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={handleCaptchaChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Input
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 bg-white ring-offset-white focus:ring-indigo-600 transition-colors dark:border-gray-600 dark:text-indigo-600 dark:bg-gray-950 dark:ring-offset-gray-950"
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                />
                <Label
                  className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
                  htmlFor="remember-me"
                >
                  Remember me
                </Label>
              </div>
              <div className="text-sm">
                <Link
                  className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors dark:text-indigo-400 dark:hover:text-indigo-300"
                  href="#"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <Button
              className="w-full rounded-md bg-indigo-500 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition-colors"
              type="submit"
              disabled={isLoading || !captchaVerified}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
            <div />
          </form>
        </div>
      </div>
    </div>
  );
}