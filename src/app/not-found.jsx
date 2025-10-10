"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-white" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(0,0,0,0.06),rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/5 via-transparent to-transparent" />

      {/* Content */}
      <section className="container px-6 md:px-10 pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl text-center text-neutral-900">
          <p className="text-neutral-500 font-semibold tracking-wider text-xs uppercase mb-3">Error 404</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">We couldn’t find that page</h1>
          <p className="mt-4 text-neutral-600 md:text-lg">
            The link may be broken or the page may have moved. Let’s get you back on track.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-neutral-800 transition"
            >
              Go to Homepage
            </Link>
            <Link
              href="/who-we-are"
              className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-900 px-5 py-3 text-sm font-semibold hover:bg-neutral-50 transition"
            >
              Learn about us
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <Link href="/ega" className="group rounded-lg border border-neutral-200 bg-white p-4 hover:bg-neutral-50 transition">
              <p className="font-semibold text-neutral-900">EGA™</p>
              <p className="text-neutral-600 text-sm mt-1">Entrepreneur Growth Alliance</p>
              <span className="text-neutral-500 text-xs mt-2 inline-block group-hover:underline">Explore</span>
            </Link>
            <Link href="/ego" className="group rounded-lg border border-neutral-200 bg-white p-4 hover:bg-neutral-50 transition">
              <p className="font-semibold text-neutral-900">EGO™</p>
              <p className="text-neutral-600 text-sm mt-1">Entrepreneurial Growth Operating System</p>
              <span className="text-neutral-500 text-xs mt-2 inline-block group-hover:underline">Explore</span>
            </Link>
            <Link href="/tools" className="group rounded-lg border border-neutral-200 bg-white p-4 hover:bg-neutral-50 transition">
              <p className="font-semibold text-neutral-900">Tools</p>
              <p className="text-neutral-600 text-sm mt-1">Frameworks and resources</p>
              <span className="text-neutral-500 text-xs mt-2 inline-block group-hover:underline">Explore</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


