import React from 'react'

const Quote = () => {
  return (
    <section className="relative flex min-h-[45vh] items-center justify-center bg-white px-4 py-16 text-slate-800">
      <div className="absolute inset-x-10 top-14 h-16 rounded-full bg-slate-200/40 blur-2xl sm:inset-x-40" />

      <div className="relative max-w-6xl">
        {/* Decorative opening quote */}
        <div className="mb-6 flex justify-center">
          <svg
            className="h-12 w-12 text-red-500 opacity-20 md:h-16 md:w-16"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
          </svg>
        </div>

        <div className="relative rounded-2xl bg-gradient-to-br from-slate-50 to-white p-8 text-center shadow-lg ring-1 ring-slate-200/50 md:p-16">
          {/* Subtle accent line at top */}
          <div className="absolute top-0 left-1/2 h-1 w-32 -translate-x-1/2 rounded-b-full bg-gradient-to-r from-transparent via-red-500 to-transparent" />

          <blockquote className="relative font-serif text-2xl font-light leading-relaxed text-slate-800 md:text-3xl md:leading-relaxed">
            "We believe breakthrough results come from embracing change, driving meaningful action, and maintaining integrity while empowering entrepreneurs to build thriving, scalable businesses."
          </blockquote>

          {/* Decorative element */}
          <div className="mx-auto mt-10 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-500" />
            <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-500" />
          </div>

          <cite className="mt-8 block text-sm font-medium tracking-wider text-red-600">
            VRT Management Group
          </cite>
        </div>
      </div>
    </section>
  )
}

export default Quote