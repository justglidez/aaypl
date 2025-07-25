import React from "react";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      {/* Hero Section */}
      <section className="mb-16 flex flex-col items-center">
        <img src="/logo.png" alt="AAYPL Logo" className="w-32 h-32 mb-6" />
        <h1 className="text-5xl font-heading font-bold text-gold mb-4 text-center">
          About All Africa Young Political Leaders (AAYPL)
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-200 text-center max-w-3xl">
          The All Africa Young Political Leaders (AAYPL) is Africa’s leading continental platform dedicated to connecting, empowering, and amplifying the voices of emerging political leaders. We foster development, good governance, and dialogue to shape a more inclusive, democratic, and progressive Africa for all.
        </p>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="mb-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-navy mb-3">Mission</h2>
          <p>Unite, empower and amplify Africa’s young political leaders to drive inclusive governance and transformation.</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-navy mb-3">Vision</h2>
          <p>A future where African youth are not just participants but key architects of the continent’s political future.</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-navy mb-3">Core Values</h2>
          <ul className="list-disc ml-4">
            <li>Democratic participation</li>
            <li>Good governance</li>
            <li>Inclusivity</li>
            <li>Transparency</li>
            <li>Empowerment</li>
          </ul>
        </div>
      </section>

      {/* History Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-heading mb-6 text-gold">Our Story</h2>
        <p className="text-lg mb-4">
          Founded in 2021 by visionary African youth leaders, AAYPL began as a movement to address the lack of youth representation in politics. Through grassroots mobilization, continental summits, and partnerships with national governments, AAYPL has grown rapidly to become a beacon for democratic renewal.
        </p>
        <p className="text-lg mb-4">
          Today, AAYPL represents thousands of young leaders from diverse backgrounds, all united by the goal of a transformed Africa. Our history is marked by successful events, policy dialogues, and impactful projects that have shaped national and continental conversations on youth empowerment and leadership.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">2021</h3>
            <p>Establishment and inaugural summit in Lagos, Nigeria, gathering youth leaders from 18 African nations.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">2022</h3>
            <p>Expansion to East and Central Africa; launch of mentorship programs and online training for aspiring politicians.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">2023</h3>
            <p>Partnerships with AU, ECOWAS, and youth organizations; AAYPL named Top Youth Political Network by UNDP Africa.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">2024</h3>
            <p>Launch of the AAYPL digital platform, connecting thousands of young leaders across the continent.</p>
          </div>
        </div>
      </section>

      {/* Structure Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-heading mb-6 text-gold">Organizational Structure</h2>
        <ul className="list-disc ml-8 text-lg">
          <li>Continental Executive Board</li>
          <li>Regional Chapters (West, East, Central, Southern, North Africa)</li>
          <li>National Representatives</li>
          <li>Advisory Council</li>
          <li>Special Committees (Policy, Events, Communications)</li>
        </ul>
        <p className="mt-6 text-md">
          Each structure ensures broad representation and effective delivery of our mission and objectives throughout Africa.
        </p>
      </section>

      {/* Impact Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-heading mb-6 text-gold">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow flex flex-col items-center">
            <span className="text-5xl font-bold text-gold">30+</span>
            <span className="text-lg mt-2">African countries represented</span>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow flex flex-col items-center">
            <span className="text-5xl font-bold text-gold">5,000+</span>
            <span className="text-lg mt-2">Active young political leaders</span>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow flex flex-col items-center">
            <span className="text-5xl font-bold text-gold">100+</span>
            <span className="text-lg mt-2">Events, summits, & trainings</span>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold font-heading mb-6 text-gold">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow flex flex-col items-center">
            <img src="/team/precious.jpg" alt="Precious Badeji" className="w-24 h-24 rounded-full mb-3" />
            <h3 className="text-xl font-bold">Precious Badeji</h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">Founder & President</span>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow flex flex-col items-center">
            <img src="/team/amina.jpg" alt="Amina Abdullahi" className="w-24 h-24 rounded-full mb-3" />
            <h3 className="text-xl font-bold">Amina Abdullahi</h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">Vice President, East Africa</span>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow flex flex-col items-center">
            <img src="/team/john.jpg" alt="John Mensah" className="w-24 h-24 rounded-full mb-3" />
            <h3 className="text-xl font-bold">John Mensah</h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">Head of Policy</span>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mb-16 flex flex-col items-center">
        <h2 className="text-3xl font-bold font-heading mb-4 text-gold">Join the Movement</h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 max-w-2xl text-center">
          Are you a young African passionate about leadership, governance, and transformation? Become part of AAYPL to connect, learn, and lead.
        </p>
        <a href="/registration" className="px-8 py-3 bg-gold text-white rounded-full font-bold shadow hover:bg-gold/90 transition">
          Register Now
        </a>
      </section>
    </main>
  );
}