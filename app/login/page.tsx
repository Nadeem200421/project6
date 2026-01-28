"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { login } from "../redux/features/authSlice";
import { restoreTheme } from "../redux/features/themeSlice";
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
  const [showPassword, setShowPassword] = useState(false);
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

    if (!email.trim() || !password.trim()) {
      setError("All fields are required.");
      return;
    }

    setError("");
    dispatch(login({ email }));
  };

  return (
    <main className={`login-page ${darkMode ? "dark" : ""}`}>
      <section className="login-container">
        <div className="login-card">
          <header className="login-header">
            <h1 className="login-title">Welcome Back</h1>
            <p className="login-subtitle">Login to continue</p>
          </header>

          {error && <p className="login-error">{error}</p>}

          <form onSubmit={handleSubmit} className="login-form">
            <label>
              <span>Email Address</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@email.com"
                autoComplete="email"
              />
            </label>

            <label className="password-field">
              <span>Password</span>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </label>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          <footer className="login-footer">
            <p>
              Don’t have an account?
              <a href="/register"> Create one</a>
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}
