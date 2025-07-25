import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-7xl font-bold text-gold mb-4">404</h1>
      <p className="text-xl mb-4">Page not found. Please check the address.</p>
      <Link href="/" className="px-6 py-2 bg-gold text-white rounded-full font-semibold shadow hover:bg-gold/90 transition">
        Back to Home
      </Link>
    </main>
  );
}