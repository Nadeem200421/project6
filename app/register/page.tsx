"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, restoreTheme } from "../redux/features/themeSlice";
import type { RootState } from "../redux/store";
import { useRouter } from "next/navigation";
import "../styles/register.css";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const darkMode = useSelector(
    (state: RootState) => state.theme.mode === "dark"
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  /* Restore theme on mount */
  useEffect(() => {
    dispatch(restoreTheme());
  }, [dispatch]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    // API call normally happens here
    router.push("/login");
  };

  return (
    <main
      className={`register-page min-h-screen flex items-center justify-center px-4 ${
        darkMode ? "dark" : "light"
      }`}
    >
      {/* Theme Toggle */}
      <button
        className="theme-toggle absolute top-5 right-5"
        onClick={() => dispatch(toggleTheme())}
      >
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Card */}
      <div className="register-card w-full max-w-md p-6 sm:p-8 rounded-xl shadow-lg space-y-6">
        <div className="text-center space-y-1">
          <h1 className="register-title text-2xl sm:text-3xl font-bold">
            Create Account
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Join the community in a few steps
          </p>
        </div>

        {error && (
          <p className="register-error text-center text-red-500 text-sm">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="register-form space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="register-input w-full"
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="register-input w-full"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="register-input w-full"
          />

          <button type="submit" className="register-btn w-full">
            Register
          </button>
        </form>

        <p className="register-login text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="font-medium">
            Login
          </a>
        </p>
      </div>
    </main>
  );
}
