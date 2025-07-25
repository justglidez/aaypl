import React from "react";

export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-heading font-bold text-gold mb-4">
          Contact Us
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto mb-6">
          Reach out to All Africa Young Political Leaders (AAYPL) for inquiries, partnerships, feedback, or support. We value connections that move Africa forward!
        </p>
        <img
          src="/contact-hero.jpg"
          alt="Contact AAYPL"
          className="rounded-lg mx-auto shadow-lg w-full max-w-xl"
        />
      </section>
      {/* Contact Information */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow text-center">
          <h2 className="text-xl font-bold text-gold mb-2">Email</h2>
          <p>
            <a href="mailto:info@aaypl.org" className="text-navy font-semibold underline">
              info@aaypl.org
            </a>
          </p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow text-center">
          <h2 className="text-xl font-bold text-gold mb-2">Phone</h2>
          <p>
            <a href="tel:+2348000000000" className="text-navy font-semibold underline">
              +234 800 000 0000
            </a>
          </p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow text-center">
          <h2 className="text-xl font-bold text-gold mb-2">WhatsApp</h2>
          <p>
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy font-semibold underline"
            >
              Chat With Us
            </a>
          </p>
        </div>
      </section>
      {/* Contact Form */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gold mb-6 text-center">Send Us a Message</h2>
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
          <textarea
            placeholder="Your Message"
            className="p-4 rounded border border-gray-300 dark:border-gray-700 h-36"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-gold text-white rounded-full font-bold shadow hover:bg-gold/90 transition"
          >
            Send Message
          </button>
        </form>
        <p className="text-center mt-4 text-gray-500 text-sm">
          We usually reply within 24 hours. For urgent support, please use WhatsApp.
        </p>
      </section>
      {/* Office Locations */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gold mb-6">Our Offices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">Headquarters</h3>
            <p>Plot 101, Unity Avenue, Lagos, Nigeria</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">East Africa Office</h3>
            <p>Kenya Youth Center, Nairobi, Kenya</p>
          </div>
        </div>
      </section>
      {/* Social Media Links */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-bold text-gold mb-4">Connect With Us Online</h2>
        <div className="flex flex-wrap gap-6 justify-center mt-4">
          <a
            href="https://twitter.com/aaypl_org"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-white px-6 py-3 rounded-full font-bold hover:bg-gold/90 transition"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com/aaypl.org"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-white px-6 py-3 rounded-full font-bold hover:bg-gold/90 transition"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com/aaypl_org"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-white px-6 py-3 rounded-full font-bold hover:bg-gold/90 transition"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/aaypl"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-white px-6 py-3 rounded-full font-bold hover:bg-gold/90 transition"
          >
            LinkedIn
          </a>
        </div>
      </section>
      {/* Call to Action */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-bold font-heading mb-4 text-gold">
          Join The AAYPL Community
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 max-w-2xl mx-auto">
          Become part of Africa’s most dynamic youth leadership network. Register, volunteer, or partner with us today!
        </p>
        <a
          href="/registration"
          className="px-8 py-3 bg-gold text-white rounded-full font-bold shadow hover:bg-gold/90 transition"
        >
          Register Now
        </a>
      </section>
    </main>
  );
}