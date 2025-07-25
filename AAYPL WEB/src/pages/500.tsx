import Link from "next/link";

export default function ServerError() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-7xl font-bold text-red-600 mb-4">500</h1>
      <p className="text-xl mb-4">Server error. Please try again later.</p>
      <Link href="/" className="px-6 py-2 bg-gold text-white rounded-full font-semibold shadow hover:bg-gold/90 transition">
        Back to Home
      </Link>
    </main>
  );
}