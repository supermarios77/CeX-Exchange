"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const LoginForm = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { login } = useAuth();
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [googlecode, setGooglecode] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [showGoogleAuth, setShowGoogleAuth] = useState(false); // Add this state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      // Pass all necessary arguments
      await login(emailOrUsername, password, googlecode, captcha);
      onClose();
    } catch (err) {
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
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative z-10 p-8 w-full max-w-md bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">
          Login to CeX Exchange
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {step === 1 ? (
            <>
              <div>
                <label
                  htmlFor="emailOrUsername"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email or Username
                </label>
                <input
                  type="text"
                  id="emailOrUsername"
                  value={emailOrUsername}
                  onChange={(e) => setEmailOrUsername(e.target.value)}
                  required
                  className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                  placeholder="Enter your email or username"
                />
              </div>
              <div>
                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
                >
                  Continue
                </Button>
              </div>
            </>
          ) : (
            <>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>
              {showGoogleAuth && (
                <div>
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
              <div>
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={handleCaptchaChange}
                />
              </div>
              <div>
                <Button
                  type="submit"
                  disabled={isLoading || !captchaVerified}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </div>
              <div className="text-sm text-center">
                <a href="#" className="text-blue-500 hover:underline">
                  Forgot Password?
                </a>
              </div>
              <div className="text-sm text-center">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-blue-500 hover:underline"
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
