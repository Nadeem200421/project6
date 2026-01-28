"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { restoreTheme } from "../redux/features/themeSlice";
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

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    router.push("/login");
  };

  return (
    <main className={`register-page ${darkMode ? "dark" : "light"}`}>
      <div className="register-card">
        <header className="register-header">
          <h1 className="register-title">Create Account</h1>
          <p className="register-subtitle">
            Join the community in a few steps
          </p>
        </header>

        {error && <p className="register-error">{error}</p>}

        <form onSubmit={handleSubmit} className="register-form">
          <label>
            <span>Full Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
            />
          </label>

          <label>
            <span>Email Address</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@email.com"
              required
            />
          </label>

          <label>
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </label>

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>

        <p className="register-login">
          Already have an account?
          <a href="/login">Login</a>
        </p>
      </div>
    </main>
  );
}
