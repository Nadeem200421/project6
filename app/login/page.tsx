"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { login } from "../redux/features/authSlice";
import { toggleTheme, restoreTheme } from "../redux/features/themeSlice";
import type { RootState } from "../redux/store";

import "../styles/login.css";

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isLoggedIn
  );

  const darkMode = useSelector(
    (state: RootState) => state.theme.mode === "dark"
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Restore theme
  useEffect(() => {
    dispatch(restoreTheme());
  }, [dispatch]);

  // Redirect if logged in
  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/");
    }
  }, [isLoggedIn, router]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    dispatch(login({ email }));
  };

  return (
    <main className={`login-page ${darkMode ? "dark" : "light"}`}>

      {/* Login Card */}
      <section className="login-container">
        <div className="login-card">
          <header className="login-header">
            <h1 className="login-title">Welcome Back</h1>
            <p className="login-subtitle">
              Login to continue
            </p>
          </header>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="email"
              placeholder="Email address"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />

            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />

            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          <footer className="login-footer">
            <p>
              Don’t have an account?{" "}
              <a href="/register" className="register-link">
                Create one
              </a>
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}
