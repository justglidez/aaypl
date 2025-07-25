import React from "react";

export default function RegistrationPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-heading font-bold text-gold mb-4">
          Join AAYPL – Registration Portal
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto mb-6">
          Become a member of All Africa Young Political Leaders (AAYPL) and connect with a vibrant network of youth leaders, policy makers, and changemakers across Africa!
        </p>
        <img
          src="/register-hero.jpg"
          alt="AAYPL Registration"
          className="rounded-lg mx-auto shadow-lg w-full max-w-xl"
        />
      </section>
      {/* Registration Form */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gold mb-6 text-center">
          Membership Registration Form
        </h2>
        <form className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg max-w-xl mx-auto grid gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 rounded border border-gray-300 dark:border-gray-700"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-4 rounded border border-gray-300 dark:border-gray-700"
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="p-4 rounded border border-gray-300 dark:border-gray-700"
            required
          />
          <input
            type="text"
            placeholder="Country"
            className="p-4 rounded border border-gray-300 dark:border-gray-700"
            required
          />
          <input
            type="text"
            placeholder="State/Province"
            className="p-4 rounded border border-gray-300 dark:border-gray-700"
          />
          <input
            type="text"
            placeholder="Organization/Institution (Optional)"
            className="p-4 rounded border border-gray-300 dark:border-gray-700"
          />
          <select
            className="p-4 rounded border border-gray-300 dark:border-gray-700"
            required
          >
            <option value="">Interest Area</option>
            <option value="leadership">Leadership</option>
            <option value="policy">Policy Advocacy</option>
            <option value="events">Events & Campaigns</option>
            <option value="communications">Communications</option>
            <option value="volunteering">Volunteering</option>
          </select>
          <textarea
            placeholder="Why do you want to join AAYPL? (Optional)"
            className="p-4 rounded border border-gray-300 dark:border-gray-700 h-36"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-gold text-white rounded-full font-bold shadow hover:bg-gold/90 transition"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4 text-gray-500 text-sm">
          Your data is safe with us. Registration is free. We reserve the right to verify entries.
        </p>
      </section>
      {/* Why Join Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gold mb-6">Why Join AAYPL?</h2>
        <ul className="list-disc ml-8 text-lg mb-6">
          <li>Access exclusive events, summits, and training workshops</li>
          <li>Connect with a continental network of young leaders</li>
          <li>Get leadership and policy mentorship</li>
          <li>Participate in impactful campaigns and projects</li>
          <li>Shape the future of youth in African politics</li>
        </ul>
      </section>
      {/* WhatsApp Groups Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gold mb-6">Join Your State WhatsApp Group</h2>
        <p className="mb-4">
          Connect with fellow members in your state for updates, opportunities, and collaboration.
        </p>
        <a
          href="/events/whatsapp-groups"
          className="px-8 py-3 bg-gold text-white rounded-full font-bold shadow hover:bg-gold/90 transition"
        >
          WhatsApp Groups Directory
        </a>
      </section>
      {/* Call to Action */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-bold font-heading mb-4 text-gold">
          Already a Member?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 max-w-2xl mx-auto">
          Log in to your dashboard to manage your profile, register for events, and connect with other members.
        </p>
        <a
          href="/login"
          className="px-8 py-3 bg-gold text-white rounded-full font-bold shadow hover:bg-gold/90 transition"
        >
          Member Login
        </a>
      </section>
    </main>
  );
}