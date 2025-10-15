import Image from 'next/image';

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat z-30"
      style={{
        backgroundImage: "url(https://vrt9.net/ega/herob.webp)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 py-32 text-center text-white md:py-40 lg:py-52">
        <div className="mb-4 inline-flex items-center rounded-full bg-white/10 px-6 py-2 backdrop-blur-sm">
          <span className="text-sm font-medium tracking-wide text-white/90">
             Transform Your Business Journey
          </span>
        </div>
        
        <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        Entrepreneur Growth Alliance™
        </h1>
        <p className="mt-8 max-w-3xl font-body text-lg leading-relaxed text-white/95 md:text-xl">
        EGA Builds a Business that Grows with Clarity, Leads with Purpose, and Scale with Systems
        </p>
       

        <a
          href="https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1?month=2025-06"
          className="group mt-14 flex items-center gap-3 rounded-xl bg-red-500 px-12 py-5 font-body text-lg font-semibold text-white shadow-2xl shadow-[#4A90E2]/30 transition-all duration-300 hover:scale-105 hover:bg-red-600 hover:bg-red-600"
        >
          <span>Book Free 45-Min Strategy Call</span>
          <svg 
            className="h-5 w-5 transition-transform group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;