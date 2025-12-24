"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useRouter } from "next/navigation";

export default function PostClassifiedPage() {
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isLoggedIn
  );
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  if (!isLoggedIn) {
    return (
      <div className="py-20 text-center">
        <p className="text-red-500 text-lg">
          Please login first to post a classified.
        </p>
        <button
          className="mt-4 btn-primary"
          onClick={() => router.push("/login")}
        >
          Go to Login
        </button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !price) {
      setError("Please fill in all fields.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Your classified has been posted successfully!");
    // Here you would normally send data to backend, but we use dummy only

    // Reset form
    setTitle("");
    setDescription("");
    setPrice("");
  };

  return (
    <div className="py-10 flex justify-center">
      <div className="card w-full max-w-lg space-y-6">
        <h1 className="text-2xl font-bold text-center">Post a Classified</h1>

        {error && (
          <p className="text-sm text-red-500 text-center">{error}</p>
        )}

        {success && (
          <p className="text-sm text-green-500 text-center">{success}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Description"
            className="input h-32 resize-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="number"
            placeholder="Price (₹)"
            className="input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <button type="submit" className="btn-primary w-full">
            Post Classified
          </button>
        </form>
      </div>
    </div>
  );
}
