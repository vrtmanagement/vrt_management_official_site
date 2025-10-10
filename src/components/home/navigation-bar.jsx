"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


const NavItem = ({ href, children, isActive }) => {
  return (
    <li className="h-full">
      <a
        href={href}
        className="relative flex items-center h-full px-5 text-white font-semibold text-sm"
      >
        {children}
      </a>
    </li>
  );
};

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  // track which mobile section is open; only one at a time
  const [openSection, setOpenSection] = useState(null);
  // desktop: only one dropdown open at a time via hover
  const [openDesktop, setOpenDesktop] = useState(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      {/* subtle gradient overlay similar to bain.com when over hero */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />

      <div className="relative container mx-auto">
        <div className="flex justify-between items-center h-16 md:h-[72px]">
          {/* Left: Brand placeholder (can be swapped with logo later) */}
          <a href="/" className="text-white font-bold tracking-wide text-sm md:text-base">
            VRT Management
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center h-full">
            <NavItem href="/">Home</NavItem>

            {/* Solution (with transparent card) */}
            <li
              className="relative h-full group"
              onMouseEnter={() => setOpenDesktop("solution")}
              onMouseLeave={() => setOpenDesktop(null)}
            >
              <button
                className="flex items-center h-full px-5 space-x-2 text-white font-semibold text-sm group-hover:text-white/90"
                aria-haspopup="true"
                aria-expanded={openDesktop === "solution"}
              >
                <span>Solution</span>
                <ChevronDown className={`h-4 w-4 transition-transform group-hover:rotate-180 ${openDesktop === "solution" ? "rotate-180" : "rotate-0"}`} />
              </button>
              {/* Dropdown card */}
              <div
                className={`${openDesktop === "solution" ? "visible opacity-100" : "invisible opacity-0 group-hover:visible group-hover:opacity-100"} transition-opacity duration-200 absolute top-full left-1/2 -translate-x-1/2 mt-3`}
              >
                <div className="w-[560px] rounded-lg border border-white/10 bg-black/60 backdrop-blur-md shadow-xl p-4 grid grid-cols-2 gap-4">
                  <Link href="/ega" className="block rounded-md p-4 hover:bg-white/5">
                    <p className="text-white font-semibold">EGA™</p>
                    <p className="text-white/70 text-xs mt-1">
                    Entrepreneur Growth Alliance</p>
                  </Link> 
                  <Link href="/ego" className="block rounded-md p-4 hover:bg-white/5">
                    <p className="text-white font-semibold">EGO™</p>
                    <p className="text-white/70 text-xs mt-1">Entrepreneurial Growth Operating System</p>
                  </Link>
                  <Link href="/entrepreneurs-edge" className="block rounded-md p-4 hover:bg-white/5">
                    <p className="text-white font-semibold">Entrepreneur’s EDGE™</p>
                    <p className="text-white/70 text-xs mt-1"> abc </p>
                  </Link>
                  <Link href="business-stages-of-growth" className="block rounded-md p-4 hover:bg-white/5">
                    <p className="text-white font-semibold">Business Stages of Growth</p>
                    <p className="text-white/70 text-xs mt-1">abc</p>
                  </Link>
                </div>
              </div>
            </li>

            {/* Resources (with transparent card) */}
            <li
              className="relative h-full group"
              onMouseEnter={() => setOpenDesktop("resources")}
              onMouseLeave={() => setOpenDesktop(null)}
            >
              <button
                className="flex items-center h-full px-5 space-x-2 text-white font-semibold text-sm group-hover:text-white/90"
                aria-haspopup="true"
                aria-expanded={openDesktop === "resources"}
              >
                <span>Resources</span>
                <ChevronDown className={`h-4 w-4 transition-transform group-hover:rotate-180 ${openDesktop === "resources" ? "rotate-180" : "rotate-0"}`} />
              </button>
              <div
                className={`${openDesktop === "resources" ? "visible opacity-100" : "invisible opacity-0 group-hover:visible group-hover:opacity-100"} transition-opacity duration-200 absolute top-full left-1/2 -translate-x-1/2 mt-3`}
              >
                <div className="w-[560px] rounded-lg border border-white/10 bg-black/60 backdrop-blur-md shadow-xl p-4 grid grid-cols-2 gap-4">
                  <Link href="/tools" className="block rounded-md p-4 hover:bg-white/5">
                    <p className="text-white font-semibold">Tools</p>
                    <p className="text-white/70 text-xs mt-1">abc</p>
                  </Link>
                  <Link href="case-studies" className="block rounded-md p-4 hover:bg-white/5">
                    <p className="text-white font-semibold">Case Studies</p>
                    <p className="text-white/70 text-xs mt-1">abc</p>
                  </Link>
                  <Link href="/videos" className="block rounded-md p-4 hover:bg-white/5">
                    <p className="text-white font-semibold">Videos</p>
                    <p className="text-white/70 text-xs mt-1">abc</p>
                  </Link>
                  <Link href="podcasts" className="block rounded-md p-4 hover:bg-white/5">
                    <p className="text-white font-semibold">Podcasts</p>
                    <p className="text-white/70 text-xs mt-1">abc</p>
                  </Link>
                </div>
              </div>
            </li>

            <NavItem href="/blogs">Blogs</NavItem>

            {/* About us (with transparent card) */}
            <li
              className="relative h-full group"
              onMouseEnter={() => setOpenDesktop("about")}
              onMouseLeave={() => setOpenDesktop(null)}
            >
              <button
                className="flex items-center h-full px-5 space-x-2 text-white font-semibold text-sm group-hover:text-white/90"
                aria-haspopup="true"
                aria-expanded={openDesktop === "about"}
              >
                <span>About us</span>
                <ChevronDown className={`h-4 w-4 transition-transform group-hover:rotate-180 ${openDesktop === "about" ? "rotate-180" : "rotate-0"}`} />
              </button>
              <div
                className={`${openDesktop === "about" ? "visible opacity-100" : "invisible opacity-0 group-hover:visible group-hover:opacity-100"} transition-opacity duration-200 absolute top-full left-1/2 -translate-x-1/2 mt-3`}
              >
                <div className="w-[560px] rounded-lg border border-white/10 bg-black/60 backdrop-blur-md shadow-xl p-4 grid grid-cols-2 gap-4">
                  <Link href="/who-we-are" className="block rounded-md p-4 hover:bg-white/5">
                    <p className="text-white font-semibold">Who We Are</p>
                    <p className="text-white/70 text-xs mt-1">abc</p>
                  </Link>
                  <Link href="/our-purpose-and-values" className="block rounded-md p-4 hover:bg-white/5">
                    <p className="text-white font-semibold">Our Purpose and Values</p>
                    <p className="text-white/70 text-xs mt-1">abc</p>
                  </Link>
                  <Link href="/our-team" className="block rounded-md p-4 hover:bg-white/5">
                    <p className="text-white font-semibold">Our Team</p>
                    <p className="text-white/70 text-xs mt-1">abc</p>
                  </Link>
                </div>
              </div>
            </li>
          </ul>

          {/* Right: Scroll cue (desktop) */}
          <a
            href="#madlib"
            className="hidden md:flex items-center space-x-2 text-white font-semibold text-sm"
          >
            <span>Scroll</span>
            <div className="w-7 h-7 rounded-full border border-white/50 flex items-center justify-center">
              <ChevronDown className="h-4 w-4" />
            </div>
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-sm text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label="Toggle menu"
            onClick={() => setOpen((p) => !p)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Panel */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/70 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto py-2">
            <ul className="flex flex-col py-2">
              <li>
                <a href="/" className="block px-4 py-3 text-white font-medium">Home</a>
              </li>

              {/* Solution nested */}
              <li className="border-t border-white/10">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-white font-medium"
                  onClick={() => setOpenSection((s) => (s === "solution" ? null : "solution"))}
                >
                  <span>Solution</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${openSection === "solution" ? "rotate-180" : "rotate-0"}`} />
                </button>
                {openSection === "solution" && (
                  <div className="pl-6 pb-2 space-y-1">
                    <Link href="ega" className="block px-4 py-2 text-white/90">EGA™</Link>
                    <Link href="ego" className="block px-4 py-2 text-white/90">EGO™</Link>
                    <Link href="entrepreneurs-edge" className="block px-4 py-2 text-white/90">Entrepreneur’s EDGE™</Link>
                    <Link href="business-stages-of-growth" className="block px-4 py-2 text-white/90">Business Stages of Growth</Link>
                  </div>
                )}
              </li>

              {/* Resources nested */}
              <li className="border-t border-white/10">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-white font-medium"
                  onClick={() => setOpenSection((s) => (s === "resources" ? null : "resources"))}
                >
                  <span>Resources</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${openSection === "resources" ? "rotate-180" : "rotate-0"}`} />
                </button>
                {openSection === "resources" && (
                  <div className="pl-6 pb-2 space-y-1">
                    <Link href="tools" className="block px-4 py-2 text-white/90">Tools</Link>
                    <Link href="case-studies" className="block px-4 py-2 text-white/90">Case Studies</Link>
                    <Link href="videos" className="block px-4 py-2 text-white/90">Videos</Link>
                    <Link href="podcasts" className="block px-4 py-2 text-white/90">Podcasts</Link>
                  </div>
                )}
              </li>

              <li className="border-t border-white/10">
                <Link href="/blogs" className="block px-4 py-3 text-white font-medium">Blogs</Link>
              </li>

              {/* About us nested */}
              <li className="border-t border-white/10">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-white font-medium"
                  onClick={() => setOpenSection((s) => (s === "about" ? null : "about"))}
                >
                  <span>About us</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${openSection === "about" ? "rotate-180" : "rotate-0"}`} />
                </button>
                {openSection === "about" && (
                  <div className="pl-6 pb-2 space-y-1">
                    <Link href="/who-we-are" className="block px-4 py-2 text-white/90">Who We Are</Link>
                    <Link href="/our-purpose-and-values" className="block px-4 py-2 text-white/90">Our Purpose and Values</Link>
                    <Link href="/our-team" className="block px-4 py-2 text-white/90">Our Team</Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;