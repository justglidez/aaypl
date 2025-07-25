import React from "react";

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-heading font-bold text-gold mb-4">
          AAYPL Blog & Insights
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto mb-6">
          Explore thought leadership, news, stories, and analysis from young political leaders across Africa. Stay informed, inspired, and engaged with the latest from AAYPL.
        </p>
        <img
          src="/blog-hero.jpg"
          alt="AAYPL Blog"
          className="rounded-lg mx-auto shadow-lg w-full max-w-xl"
        />
      </section>
      {/* Featured Posts */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gold mb-8">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example featured post */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
            <img
              src="/blog/leadership.jpg"
              alt="Leadership in Africa"
              className="rounded mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-bold mb-2">Leadership Lessons from Africa’s Young Trailblazers</h3>
            <p className="text-gray-700 dark:text-gray-200 mb-2">
              Discover how young leaders are driving change, overcoming challenges, and shaping the future of African politics.
            </p>
            <a href="/blog/leadership" className="text-gold font-bold">Read More</a>
          </div>
          {/* Another featured post */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
            <img
              src="/blog/youth-voice.jpg"
              alt="Youth Voices"
              className="rounded mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-bold mb-2">Amplifying Youth Voices in Policy Making</h3>
            <p className="text-gray-700 dark:text-gray-200 mb-2">
              How AAYPL members are influencing policy decisions through advocacy, research, and action.
            </p>
            <a href="/blog/youth-voice" className="text-gold font-bold">Read More</a>
          </div>
        </div>
      </section>
      {/* Latest Posts */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gold mb-8">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example blog cards */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow flex flex-col">
            <h3 className="text-lg font-bold mb-2">From Elections to Empowerment</h3>
            <p className="text-gray-700 dark:text-gray-200 mb-2">
              A look at recent elections and youth participation across the continent.
            </p>
            <a href="/blog/elections" className="text-gold font-bold mt-auto">Read More</a>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow flex flex-col">
            <h3 className="text-lg font-bold mb-2">Women Leading Change</h3>
            <p className="text-gray-700 dark:text-gray-200 mb-2">
              Highlighting the achievements of young women in African politics.
            </p>
            <a href="/blog/women-change" className="text-gold font-bold mt-auto">Read More</a>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow flex flex-col">
            <h3 className="text-lg font-bold mb-2">Tech & Governance</h3>
            <p className="text-gray-700 dark:text-gray-200 mb-2">
              How technology is transforming the political landscape for Africa’s youth.
            </p>
            <a href="/blog/tech-governance" className="text-gold font-bold mt-auto">Read More</a>
          </div>
        </div>
      </section>
      {/* Categories & Tags */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gold mb-6">Categories</h2>
        <div className="flex flex-wrap gap-4 mb-4">
          <span className="bg-gold text-white px-4 py-2 rounded-full font-semibold">Leadership</span>
          <span className="bg-gold text-white px-4 py-2 rounded-full font-semibold">Policy</span>
          <span className="bg-gold text-white px-4 py-2 rounded-full font-semibold">Events</span>
          <span className="bg-gold text-white px-4 py-2 rounded-full font-semibold">Youth Voices</span>
          <span className="bg-gold text-white px-4 py-2 rounded-full font-semibold">Innovation</span>
        </div>
      </section>
      {/* Call to Action */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-bold font-heading mb-4 text-gold">
          Contribute & Share Your Story
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 max-w-2xl mx-auto">
          Are you a young African leader with insights, experiences, or analysis to share? Submit your article and be featured on the AAYPL blog!
        </p>
        <a
          href="/contact"
          className="px-8 py-3 bg-gold text-white rounded-full font-bold shadow hover:bg-gold/90 transition"
        >
          Submit Your Article
        </a>
      </section>
    </main>
  );
}