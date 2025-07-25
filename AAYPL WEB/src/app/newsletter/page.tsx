import React from "react";

export default function NewsletterPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-heading font-bold text-gold mb-4">
          AAYPL Newsletter
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto mb-6">
          Get the latest news, updates, opportunities, and stories from All Africa Young Political Leaders (AAYPL) delivered to your inbox every month!
        </p>
        <img
          src="/newsletter-hero.jpg"
          alt="AAYPL Newsletter"
          className="rounded-lg mx-auto shadow-lg w-full max-w-xl"
        />
      </section>
      {/* Signup Form */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gold mb-6 text-center">
          Subscribe Today
        </h2>
        <form className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg max-w-xl mx-auto grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded border border-gray-300 dark:border-gray-700"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded border border-gray-300 dark:border-gray-700"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-gold text-white rounded-full font-bold shadow hover:bg-gold/90 transition"
          >
            Subscribe
          </button>
        </form>
        <p className="text-center mt-4 text-gray-500 text-sm">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </section>
      {/* Previous Editions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gold mb-8">Past Editions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">June 2025 Edition</h3>
            <p className="mb-2">Highlights from the Pan-African Youth Summit, leadership opportunities, and member spotlights.</p>
            <a href="/newsletter/june-2025" className="text-gold font-bold">Read Online</a>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">May 2025 Edition</h3>
            <p className="mb-2">Policy news, partner events, and stories from AAYPL chapters across Africa.</p>
            <a href="/newsletter/may-2025" className="text-gold font-bold">Read Online</a>
          </div>
        </div>
      </section>
      {/* Why Subscribe */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gold mb-6">Why Subscribe?</h2>
        <ul className="list-disc ml-8 text-lg mb-6">
          <li>Be first to know about major AAYPL events and opportunities</li>
          <li>Get exclusive leadership tips and resources</li>
          <li>Read inspiring stories from youth political leaders</li>
          <li>Access policy analysis and youth advocacy updates</li>
          <li>Connect with a continental network of changemakers</li>
        </ul>
      </section>
      {/* Call to Action */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-bold font-heading mb-4 text-gold">
          Join Africa’s Youth Leadership Movement!
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 max-w-2xl mx-auto">
          Subscribe to the AAYPL newsletter and stay connected with the latest news, events, and opportunities for Africa’s next generation of leaders.
        </p>
        <a
          href="/registration"
          className="px-8 py-3 bg-gold text-white rounded-full font-bold shadow hover:bg-gold/90 transition"
        >
          Become a Member
        </a>
      </section>
    </main>
  );
}