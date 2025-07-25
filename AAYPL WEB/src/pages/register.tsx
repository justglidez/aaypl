import React, { useState } from "react";
import Head from "next/head";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", country: "" });
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(null);
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    if (res.ok) setSuccess("Registration successful! Check your email for confirmation.");
  }

  return (
    <>
      <Head>
        <title>Register | All Africa Young Political Leaders</title>
        <meta
          name="description"
          content="Register to become a member of AAYPL and join Africa’s leading youth political movement."
        />
      </Head>
      <main className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        <section className="py-20 bg-gradient-to-br from-gold/10 via-white to-gray-100 dark:from-gold/10 dark:via-gray-900 dark:to-gray-800">
          <div className="max-w-md mx-auto px-4">
            <h1 className="text-4xl font-bold text-gold mb-6 text-center">Register</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                className="w-full p-3 rounded border border-gray-300"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              />
              <input
                className="w-full p-3 rounded border border-gray-300"
                placeholder="Your Email"
                type="email"
                required
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              />
              <input
                className="w-full p-3 rounded border border-gray-300"
                placeholder="Password"
                type="password"
                required
                value={form.password}
                onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
              />
              <input
                className="w-full p-3 rounded border border-gray-300"
                placeholder="Country"
                required
                value={form.country}
                onChange={e => setForm(f => ({ ...f, country: e.target.value }))}
              />
              <button className="px-6 py-3 bg-gold text-white rounded-full font-bold w-full" type="submit">
                Register
              </button>
              {success && <p className="text-green-600 font-semibold text-center">{success}</p>}
            </form>
            <div className="text-center mt-6">
              <span>Already have an account? </span>
              <a href="/profile" className="text-gold underline">Log in</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}