"use client";

import * as React from "react";
import Image from "next/image";
import { BookOpen } from "lucide-react";

// Featured faculty member
const featuredFaculty = {
  name: "Laszlo Bock",
  title: "Co-Faculty Director",
  role: "Advisor, General Catalyst",
  imageSrc:
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/61127b32-6d11-4f18-b931-b75f475942d7-executive-berkeley-edu/assets/images/Laszlo_20Bock_20headshot_202025-19.jpg",
  shortBio: "Former Chief People Officer of Alphabet & Google",
  fullBio: `Laszlo Bock is an Advisor at General Catalyst and co-founder of Humu and Gretel.ai. He previously served as the Chief Human Resources Officer (CHRO) of Alphabet and Google, where he revolutionized workplace culture and employee engagement practices.

During his tenure at Google, Laszlo built one of the most innovative HR organizations in the world, growing the company from 6,000 to 72,000 employees across 70+ offices globally. His data-driven approach to people management and organizational development has influenced HR practices worldwide.

He is the author of the New York Times bestseller "Work Rules!: Insights from Inside Google That Will Transform How You Live and Lead," which has been translated into over 25 languages. Laszlo serves on the Board of the Stanford University Center for Advanced Study in the Behavioral Sciences and is a frequent speaker on leadership, culture, and the future of work.`,
  education: [
    "MBA, Yale School of Management",
    "BA, Pomona College"
  ],
  expertise: [
    "Organizational Culture & Change Management",
    "Data-Driven HR Strategy",
    "Leadership Development",
    "Employee Experience & Engagement",
    "Talent Acquisition & Retention"
  ]
};

export default function Faculty() {
  return (
    <section
      id="faculty"
      className="w-full bg-background py-12 md:py-20"
      aria-labelledby="faculty-heading"
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 flex items-center gap-3">
          <BookOpen className="h-8 w-8 text-brand-gold" aria-hidden="true" />
          <h2
            id="faculty-heading"
            className="text-3xl font-bold text-[#1E3A5F] md:text-4xl"
          >
            Faculty
          </h2>
        </div>

        <div className="grid gap-8 md:gap-12 lg:grid-cols-[350px_1fr]">
          {/* Left Column - Image and Basic Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative mb-6 h-[280px] w-[280px] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={featuredFaculty.imageSrc}
                alt={`Headshot of ${featuredFaculty.name}`}
                fill
                className="object-cover"
                sizes="280px"
                priority
              />
            </div>
            
            <div className="w-full text-center md:text-left">
              <div className="mb-3 inline-block rounded-md bg-accent px-4 py-1.5">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                  {featuredFaculty.title}
                </p>
              </div>
              
              <h3 className="mb-2 text-2xl font-bold text-[#1E3A5F] md:text-3xl">
                {featuredFaculty.name}
              </h3>
              
              <p className="mb-2 text-base font-semibold text-[#3B7EA1]">
                {featuredFaculty.role}
              </p>
              
              <p className="text-sm text-[#718096]">
                {featuredFaculty.shortBio}
              </p>
            </div>
          </div>

          {/* Right Column - Detailed Information */}
          <div className="flex flex-col space-y-6">
            <div>
              <h4 className="mb-4 text-xl font-semibold text-[#1E3A5F]">
                About
              </h4>
              <div className="space-y-4 text-base leading-relaxed text-[#4A5568]">
                {featuredFaculty.fullBio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="border-t border-[#E0E0E0] pt-6">
              <h4 className="mb-3 text-xl font-semibold text-[#1E3A5F]">
                Education
              </h4>
              <ul className="space-y-2">
                {featuredFaculty.education.map((edu, index) => (
                  <li key={index} className="flex items-start text-base text-[#4A5568]">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FDB515]" />
                    {edu}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[#E0E0E0] pt-6">
              <h4 className="mb-3 text-xl font-semibold text-[#1E3A5F]">
                Areas of Expertise
              </h4>
              <ul className="space-y-2">
                {featuredFaculty.expertise.map((skill, index) => (
                  <li key={index} className="flex items-start text-base text-[#4A5568]">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FDB515]" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}