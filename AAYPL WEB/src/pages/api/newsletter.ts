import React, { useState } from "react";

export default function NewsletterPage() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) setSuccess("You're subscribed!");
  }

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Join Our Newsletter</h1>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          className="p-2 border rounded"
          placeholder="Name"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
        />
        <input
          className="p-2 border rounded"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
        />
        <button className="px-6 py-2 bg-gold text-white rounded font-bold" type="submit">
          Subscribe
        </button>
        {success && <p className="text-green-600">{success}</p>}
      </form>
    </main>
  );
}