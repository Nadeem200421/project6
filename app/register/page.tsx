"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/features/authSlice";
import type { RootState } from "../redux/store";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isLoggedIn
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (isLoggedIn) {
    router.push("/");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    dispatch(login({ email, name }));
    router.push("/");
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div className="card w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-center">
          Register
        </h1>

        {error && (
          <p className="text-sm text-red-500 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn-primary w-full">
            Register
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
