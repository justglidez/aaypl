"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [auth, setAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const username = localStorage.getItem("adminUser");
    const password = localStorage.getItem("adminPass");
    if (
      username === process.env.NEXT_PUBLIC_ADMIN_USER &&
      password === process.env.NEXT_PUBLIC_ADMIN_PASS
    ) {
      setAuth(true);
    } else {
      router.push("/admin/login");
    }
  }, [router]);

  if (!auth) return null;

  // Example: long-scroll dashboard with multiple sections/tabs
  return (
    <main className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-heading font-bold mb-10 text-gold text-center">
        Admin Dashboard
      </h1>
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-navy">Platform Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow text-center">
            <span className="text-5xl font-bold text-gold">5,000+</span>
            <p className="text-lg mt-2">Registered Members</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow text-center">
            <span className="text-5xl font-bold text-gold">100+</span>
            <p className="text-lg mt-2">Events Created</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow text-center">
            <span className="text-5xl font-bold text-gold">20,000+</span>
            <p className="text-lg mt-2">Blog Views</p>
          </div>
        </div>
      </section>
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-navy">Manage Blog Posts</h2>
        {/* Add Blog CRUD components here */}
        <p>Admin can add, edit, or delete blog posts. Use a WYSIWYG editor for rich content!</p>
      </section>
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-navy">Manage Events</h2>
        {/* Add Events CRUD components here */}
        <p>Admin can create, update, or remove upcoming and past events.</p>
      </section>
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-navy">Manage WhatsApp Groups</h2>
        {/* CRUD for WhatsApp group links by state */}
        <p>Assign WhatsApp groups for Nigerian states and other regions.</p>
      </section>
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-navy">View Registered Members</h2>
        {/* Table of members, with filters/search */}
        <p>See all registration data, filter by state/country, export as CSV.</p>
      </section>
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-navy">Statistics Panel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">New Signups (Last 7 Days)</h3>
            <span className="text-3xl text-gold font-bold">123</span>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">Blog Engagement</h3>
            <span className="text-3xl text-gold font-bold">2,345</span>
          </div>
        </div>
      </section>
      <section className="mb-16 text-center">
        <button
          className="px-8 py-3 bg-gold text-white rounded-full font-bold shadow hover:bg-gold/90 transition"
          onClick={() => {
            localStorage.removeItem("adminUser");
            localStorage.removeItem("adminPass");
            router.push("/admin/login");
          }}
        >
          Logout
        </button>
      </section>
    </main>
  );
}