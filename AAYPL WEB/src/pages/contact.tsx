import React, { useState } from "react";
import Head from "next/head";

const officeLocations = [
  {
    city: "Lagos, Nigeria",
    address: "Victoria Island, Lagos, Nigeria",
    email: "lagos@aaypl.org",
    phone: "+234-800-000-0000",
  },
  {
    city: "Nairobi, Kenya",
    address: "Westlands, Nairobi, Kenya",
    email: "nairobi@aaypl.org",
    phone: "+254-700-000-000",
  },
  {
    city: "Accra, Ghana",
    address: "Airport City, Accra, Ghana",
    email: "accra@aaypl.org",
    phone: "+233-300-000-000",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(null);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    if (res.ok) setSuccess("Thank you for contacting us! We’ll be in touch soon.");
  }

  return (
    <>
      <Head>
        <title>Contact Us | All Africa Young Political Leaders</title>
        <meta
          name="description"
          content="Get in touch with AAYPL. Contact our African offices, send us a message, or connect on social media."
        />
      </Head>
      <main className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">

        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-gold/10 via-white to-gray-100 dark:from-gold/10 dark:via-gray-900 dark:to-gray-800 shadow-inner">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-extrabold text-gold mb-4">Contact Us</h1>
            <p className="text-xl mb-4">
              We’d love to hear from you! Reach out with questions, feedback, or partnership opportunities.
            </p>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-12 max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gold mb-6">Our Offices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {officeLocations.map((office) => (
              <div
                key={office.city}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow"
              >
                <h3 className="font-bold text-lg mb-2">{office.city}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-1">{office.address}</p>
                <p className="mb-1">
                  <a href={`mailto:${office.email}`} className="text-gold underline">{office.email}</a>
                </p>
                <p className="text-gray-700 dark:text-gray-300">{office.phone}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gold mb-6 text-center">Send Us a Message</h2>
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
            <textarea
              className="w-full p-3 rounded border border-gray-300"
              placeholder="Message"
              rows={5}
              required
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            />
            <button className="px-6 py-3 bg-gold text-white rounded-full font-bold" type="submit">
              Send Message
            </button>
            {success && <p className="text-green-600 font-semibold">{success}</p>}
          </form>
        </section>

        {/* Social */}
        <section className="py-12">
          <div className="max-w-xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gold mb-4">Connect With Us</h2>
            <div className="flex gap-6 justify-center text-3xl">
              <a href="https://twitter.com/aaypl" target="_blank" rel="noopener noreferrer" title="Twitter" className="text-blue-400 hover:text-blue-600"><i className="fab fa-twitter"></i></a>
              <a href="https://facebook.com/aaypl" target="_blank" rel="noopener noreferrer" title="Facebook" className="text-blue-700 hover:text-blue-900"><i className="fab fa-facebook"></i></a>
              <a href="https://linkedin.com/company/aaypl" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-blue-900 hover:text-blue-700"><i className="fab fa-linkedin"></i></a>
              <a href="https://instagram.com/aaypl" target="_blank" rel="noopener noreferrer" title="Instagram" className="text-pink-600 hover:text-pink-800"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}