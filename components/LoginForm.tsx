"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

const LoginForm = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
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
      onClose();
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

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md"
        onClick={onClose}
      ></div>
      <div className="relative z-10 p-8 w-full max-w-lg bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 rounded-lg shadow-lg glassmorphism">
        <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-6">
          Login
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {step === 1 ? (
            <>
              <div className="space-y-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email or Username
                </label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                  placeholder="Enter your email or username"
                />
              </div>
              <div>
                <Button
                  variant="default"
                  onClick={() => setStep(2)}
                  className="w-full py-2"
                >
                  Continue
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                    placeholder="Enter your password"
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
                          d="M15 12m0 0c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2zm0 0c1.104 0 2-.896 2-2s-.896-2-2-2-.896 2-2 2 2 .896 2 2zM3.05 7.05a9.971 9.971 0 0014.904 0M3.05 16.95a9.971 9.971 0 0114.904 0M12 20.485a9.971 9.971 0 01-9.95-7.535M12 3.515a9.971 9.971 0 019.95 7.535"
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
                          d="M15 12m0 0c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2zM3.05 7.05a9.971 9.971 0 0014.904 0M3.05 16.95a9.971 9.971 0 0114.904 0M12 20.485a9.971 9.971 0 01-9.95-7.535M12 3.515a9.971 9.971 0 019.95 7.535"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              {showGoogleAuth && (
                <div className="space-y-4">
                  <label
                    htmlFor="googlecode"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Google Authenticator Code
                  </label>
                  <input
                    type="text"
                    id="googlecode"
                    value={googlecode}
                    onChange={(e) => setGooglecode(e.target.value)}
                    className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                    placeholder="Enter your Google Authenticator code"
                  />
                </div>
              )}
              <div className="flex justify-center space-y-4">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  onChange={handleCaptchaChange}
                />
              </div>
              <div className="space-y-4">
                <Button
                  type="submit"
                  variant="default"
                  disabled={isLoading || !captchaVerified}
                  className="w-full py-2"
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </div>
              <div className="flex justify-between items-center mt-4">
                <a href="#" className="text-blue-500 hover:underline text-sm">
                  Forgot Password?
                </a>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-blue-500 hover:underline text-sm"
                >
                  Back
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>,
    document.body
  );
};

export default LoginForm;
