import React from "react";

export default function EventsPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-heading font-bold text-gold mb-4">
          AAYPL Events & Summits
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto mb-6">
          Join the movement! Experience impactful events, leadership summits, workshops and campaigns uniting young political leaders across Africa.
        </p>
        <img
          src="/events-hero.jpg"
          alt="AAYPL Events"
          className="rounded-lg mx-auto shadow-lg w-full max-w-xl"
        />
      </section>
      {/* Upcoming Events */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gold mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example event cards */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow flex flex-col">
            <h3 className="text-xl font-bold mb-2">2025 Pan-African Youth Leadership Summit</h3>
            <p className="text-gray-700 dark:text-gray-200 mb-2">
              Date: August 15-18, 2025<br />
              Location: Abuja, Nigeria
            </p>
            <p>
              Bringing together over 500 young leaders, government officials, and mentors for keynote speeches, workshops, and networking. 
            </p>
            <a href="/registration" className="text-gold font-bold mt-4">Register Now</a>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow flex flex-col">
            <h3 className="text-xl font-bold mb-2">AAYPL Policy Dialogue Series</h3>
            <p className="text-gray-700 dark:text-gray-200 mb-2">
              Date: September 10, 2025<br />
              Location: Virtual
            </p>
            <p>
              Join top youth policy advocates and experts for a pan-African dialogue on “Youth in Governance: Challenges & Opportunities.”
            </p>
            <a href="/events/policy-dialogue" className="text-gold font-bold mt-4">Learn More</a>
          </div>
        </div>
      </section>
      {/* Past Events */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gold mb-8">Past Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">2024 African Youth Summit</h3>
            <p>Over 2,000 participants, 40 speakers, and 20 workshops held in Johannesburg, South Africa.</p>
            <a href="/events/2024-summit" className="text-gold font-bold mt-2">View Recap</a>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">Nigerian State WhatsApp Group Activation</h3>
            <p>Successful creation of WhatsApp support groups for all 36 Nigerian states, including special regional campaigns.</p>
            <a href="/events/whatsapp-groups" className="text-gold font-bold mt-2">Join Your State Group</a>
          </div>
        </div>
      </section>
      {/* How to Participate */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gold mb-6">How to Get Involved</h2>
        <ul className="list-disc ml-8 text-lg mb-6">
          <li>Register for upcoming summits, workshops, or webinars</li>
          <li>Volunteer as an event organizer or speaker</li>
          <li>Partner with AAYPL for national and regional youth events</li>
          <li>Share your own event to be featured on our platform</li>
          <li>Join WhatsApp and Telegram groups for live updates</li>
        </ul>
        <a
          href="/registration"
          className="px-8 py-3 bg-gold text-white rounded-full font-bold shadow hover:bg-gold/90 transition"
        >
          Register for Events
        </a>
      </section>
      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gold mb-6">Participant Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
            <p className="italic">“Attending the Pan-African Youth Summit was life-changing. I met leaders from 12 countries and launched my own youth initiative.”</p>
            <span className="block text-right text-gold font-bold mt-4">— Fatima, Kenya</span>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
            <p className="italic">“The WhatsApp group helped me connect with mentors and gain support for my political campaign.”</p>
            <span className="block text-right text-gold font-bold mt-4">— Samuel, Nigeria</span>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-bold font-heading mb-4 text-gold">
          Host or Sponsor an Event
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 max-w-2xl mx-auto">
          Want to make an impact? Partner with AAYPL to host youth-oriented programs, sponsor leadership initiatives, or facilitate grassroots campaigns.
        </p>
        <a
          href="/contact"
          className="px-8 py-3 bg-gold text-white rounded-full font-bold shadow hover:bg-gold/90 transition"
        >
          Contact Event Team
        </a>
      </section>
    </main>
  );
}