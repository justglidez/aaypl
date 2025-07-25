import React from "react";

export default function AimsObjectivesPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-heading font-bold text-gold mb-4">
          Aims & Objectives of AAYPL
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto mb-6">
          Discover the driving purposes and actionable goals behind All Africa Young Political Leaders. Our vision for a united, empowered, and democratic Africa is realized through clear aims and impactful objectives.
        </p>
        <img
          src="/aims-hero.jpg"
          alt="Aims and Objectives"
          className="rounded-lg mx-auto shadow-lg w-full max-w-xl"
        />
      </section>
      {/* Aims Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gold mb-8">Our Aims</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow flex flex-col items-center">
            <img src="/icons/unite.svg" alt="Unite" className="w-12 h-12 mb-3" />
            <h3 className="text-xl font-bold mb-2">Unite Young Political Leaders Across Africa</h3>
            <p className="text-gray-700 dark:text-gray-200 text-center">
              Building a strong, collaborative network for young political actors from diverse backgrounds to share ideas and solutions to challenges across the continent.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow flex flex-col items-center">
            <img src="/icons/democracy.svg" alt="Promote Democracy" className="w-12 h-12 mb-3" />
            <h3 className="text-xl font-bold mb-2">Promote Democratic Values & Good Governance</h3>
            <p className="text-gray-700 dark:text-gray-200 text-center">
              Championing democratic principles, transparency, accountability, and rule of law, ensuring young leaders become ambassadors of ethical leadership.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow flex flex-col items-center">
            <img src="/icons/empower.svg" alt="Empower Youth" className="w-12 h-12 mb-3" />
            <h3 className="text-xl font-bold mb-2">Empower Youth Participation in Politics</h3>
            <p className="text-gray-700 dark:text-gray-200 text-center">
              Breaking barriers to youth engagement in political processes and advocating for greater inclusion of young people at all levels of decision-making.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow flex flex-col items-center">
            <img src="/icons/leadership.svg" alt="Leadership Capacity" className="w-12 h-12 mb-3" />
            <h3 className="text-xl font-bold mb-2">Strengthen Leadership Capacity</h3>
            <p className="text-gray-700 dark:text-gray-200 text-center">
              Offering mentorship, policy education, and leadership training to develop the knowledge and skills of young political leaders as agents of transformation.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow flex flex-col items-center">
            <img src="/icons/policy.svg" alt="Policy Influence" className="w-12 h-12 mb-3" />
            <h3 className="text-xl font-bold mb-2">Influence Policy & Advocate for Youth-Friendly Legislation</h3>
            <p className="text-gray-700 dark:text-gray-200 text-center">
              Engaging in dialogue with policymakers, institutions, and civil society to push for policies addressing youth priorities: employment, education, innovation, climate action, and social justice.
            </p>
          </div>
        </div>
      </section>
      {/* Objectives Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gold mb-8">Our Objectives</h2>
        <div className="space-y-12">
          <div className="flex items-start space-x-5">
            <img src="/icons/forum.svg" alt="Forums" className="w-10 h-10 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Create Forums & Summits</h3>
              <p>
                Facilitate exchange of ideas, build partnerships, and develop continental strategies for political advancement among young leaders.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-5">
            <img src="/icons/training.svg" alt="Training" className="w-10 h-10 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Provide Training & Mentorship</h3>
              <p>
                Organize workshops, training programs, and mentorship opportunities focused on political strategy, governance, diplomacy, and civic responsibility.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-5">
            <img src="/icons/collaboration.svg" alt="Collaboration" className="w-10 h-10 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Collaborate with Key Institutions</h3>
              <p>
                Partner with African Union organs, national governments, youth organizations, and international partners to promote youth political representation.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-5">
            <img src="/icons/support.svg" alt="Support Youth" className="w-10 h-10 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Support Youth Candidacy & Leadership</h3>
              <p>
                Encourage youth leadership in political parties, electoral processes, and public service roles.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-5">
            <img src="/icons/database.svg" alt="Database" className="w-10 h-10 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Establish A Leader Database</h3>
              <p>
                Document contributions of young African political leaders to the continent’s democratic development.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-5">
            <img src="/icons/campaign.svg" alt="Campaign" className="w-10 h-10 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Campaign Against Violence & Marginalization</h3>
              <p>
                Lead campaigns against political violence, voter suppression, corruption, and marginalization of youth and women in political processes.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-5">
            <img src="/icons/innovation.svg" alt="Innovation" className="w-10 h-10 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Foster Innovation & Policy Research</h3>
              <p>
                Support inclusive governance and sustainable development through policy research, innovation, and advocacy for youth-driven solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Storytelling / Impact Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gold mb-6">The AAYPL Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Continental Summits</h3>
            <p>
              Since our inception, AAYPL has hosted annual summits bringing together thousands of young political leaders to share knowledge, build alliances, and advocate for change.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Policy Influence</h3>
            <p>
              Our policy dialogues have directly impacted youth legislation in several African countries, with members leading successful campaigns for employment and education reforms.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Grassroots Mobilization</h3>
            <p>
              Regional chapters have mobilized youth in local communities, driving voter registration, civic education, and anti-violence initiatives.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Leadership Training</h3>
            <p>
              Hundreds of young leaders have benefited from our mentorship, training workshops, and leadership bootcamps, accelerating their impact in public service.
            </p>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="mb-16 flex flex-col items-center">
        <h2 className="text-3xl font-bold font-heading mb-4 text-gold">
          Be Part of Our Mission
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 max-w-2xl text-center">
          Join AAYPL and contribute to a new era of youth-led governance and transformation in Africa. Every action counts, every voice matters. Together, we shape the future!
        </p>
        <a
          href="/registration"
          className="px-8 py-3 bg-gold text-white rounded-full font-bold shadow hover:bg-gold/90 transition"
        >
          Register & Get Involved
        </a>
      </section>
    </main>
  );
}