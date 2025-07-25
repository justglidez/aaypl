"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    // Replace with environment variables in production
    if (
      username === process.env.NEXT_PUBLIC_ADMIN_USER &&
      password === process.env.NEXT_PUBLIC_ADMIN_PASS
    ) {
      localStorage.setItem("adminUser", username);
      localStorage.setItem("adminPass", password);
      router.push("/admin/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h1 className="text-3xl font-bold text-gold mb-6 text-center">
          Admin Login
        </h1>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 rounded border"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded border"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && (
          <p className="text-red-600 mb-4 text-center">{error}</p>
        )}
        <button
          type="submit"
          className="w-full bg-gold text-white font-bold py-3 rounded hover:bg-gold/90 transition"
        >
          Login
        </button>
      </form>
    </main>
  );
}