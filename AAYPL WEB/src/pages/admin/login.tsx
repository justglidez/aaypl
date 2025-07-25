import React from "react";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <button
        className="px-6 py-2 bg-gold text-white rounded font-bold"
        onClick={() => signIn("credentials")}
      >
        Sign In
      </button>
    </main>
  );
}