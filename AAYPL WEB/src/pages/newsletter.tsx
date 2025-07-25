import React, { useState } from "react";
import Head from "next/head";

export default function NewsletterPage() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(null);
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    if (res.ok) setSuccess("You're now subscribed to our newsletter!");
  }

  return (
    <>
      <Head>
        <title>Newsletter | All Africa Young Political Leaders</title>
        <meta
          name="description"
          content="Subscribe to the AAYPL newsletter for the latest updates, news, and opportunities for young African leaders."
        />
      </Head>
      <main className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">

        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-gold/10 via-white to-gray-100 dark:from-gold/10 dark:via-gray-900 dark:to-gray-800 shadow-inner">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-extrabold text-gold mb-4">Join Our Newsletter</h1>
            <p className="text-xl mb-4">
              Stay in the loop with AAYPL’s latest news, programs, and opportunities for young African leaders.
            </p>
          </div>
        </section>

        {/* Newsletter Form */}
        <section className="py-12 max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gold mb-6 text-center">Subscribe Now</h2>
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
            <button className="px-6 py-3 bg-gold text-white rounded-full font-bold" type="submit">
              Subscribe
            </button>
            {success && <p className="text-green-600 font-semibold">{success}</p>}
          </form>
        </section>

        {/* Newsletter Benefits */}
        <section className="py-12 max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gold mb-6 text-center">Why Subscribe?</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Get first access to leadership programs and training sessions.</li>
            <li>Stay informed about policy changes and youth advocacy news.</li>
            <li>Connect with a network of young African change-makers.</li>
            <li>Receive exclusive opportunities, scholarships, and event invites.</li>
          </ul>
        </section>
      </main>
    </>
  );
}