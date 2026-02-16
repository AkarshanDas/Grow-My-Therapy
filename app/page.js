import Link from 'next/link';

export default function EntryPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Internship Assignment: Stage 2
        </h1>
        <p className="text-lg text-slate-600">
          Welcome to my submission for <span className="font-semibold text-indigo-600">Grow My Therapy</span>. 
          Please select a version to review:
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Route 1: The Original Clone */}
        <Link href="/clone" className="group">
          <div className="h-full border-2 border-slate-200 bg-white p-8 rounded-2xl shadow-sm transition-all hover:border-indigo-500 hover:shadow-xl flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-50 transition-colors">
              <span className="text-2xl">📋</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">1. Original Clone</h2>
            <p className="text-slate-500 mb-6">
              A pixel-perfect reproduction of the Lilac Squarespace template, focusing on layout, spacing, and mobile responsiveness.
            </p>
            <span className="mt-auto inline-flex items-center text-indigo-600 font-semibold group-hover:translate-x-1 transition-transform">
              View Clone →
            </span>
          </div>
        </Link>

        {/* Route 2: The Redesign (Dr. Maya Reynolds) */}
        <Link href="/redesign" className="group">
          <div className="h-full border-2 border-slate-200 bg-white p-8 rounded-2xl shadow-sm transition-all hover:border-emerald-500 hover:shadow-xl flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-50 transition-colors">
              <span className="text-2xl">✨</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">2. Creative Redesign</h2>
            <p className="text-slate-500 mb-6">
              Personalized for Dr. Maya Reynolds. Featuring new branding, SEO-optimized copy, and a custom "Our Office" section.
            </p>
            <span className="mt-auto inline-flex items-center text-emerald-600 font-semibold group-hover:translate-x-1 transition-transform">
              View Redesign →
            </span>
          </div>
        </Link>
      </div>

      <footer className="mt-16 text-slate-400 text-sm">
        Built with Next.js & Tailwind CSS v3
      </footer>
    </main>
  );
}