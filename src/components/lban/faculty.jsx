"use client";

import * as React from "react";
import Image from "next/image";
import { BookOpen } from "lucide-react";
// Featured faculty member
const featuredFaculty = {
  name: "Rajesh Tedla",
  title: "Co-Faculty Director",
  role: "Founder & CEO, VRT Management Group",
  fullBio: `Rajesh Tedla is the Founder & CEO of VRT Management Group, a management consulting firm that helps organizations achieve sustainable growth and success. He is a recognized expert in the field of leadership development and organizational change, with a passion for helping organizations build high-performing cultures and drive sustainable growth.

Raj's influence extends globally as he coaches over 1420+ entrepreneurs, and his innovative programs, Entrepreneur Growth AllianceTM (EGA) and Entrepreneur Growth Operating SystemTM (EGOS), exemplify his commitment to small business growth.

His authority in the industry has earned him a place at prestigious forums, and his legacy is marked by exceptional leadership at GE Capital and a multifaceted education that includes a pursuit of a Doctorate in Business Administration specializing in Entrepreneurship Growth and Success. Raj's unwavering dedication and vision continue to shape the future of business growth.`,
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
          <h2
            id="faculty-heading"
            className="text-3xl font-bold text-[#1E3A5F] md:text-4xl"
          >
            Your Mentor
          </h2>
        </div>

        <div className="grid gap-8 md:gap-12 lg:grid-cols-[350px_1fr]">
          {/* Left Column - Image and Basic Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative mb-6 h-[420px] w-[320px] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/rajeshsirlbanpage.jpg"
                alt="Rajesh Tedla"
                width={320}
                height={400}
                className="object-cover"
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
                Areas of Expertise
              </h4>
              <ul className="space-y-2">
                {featuredFaculty.expertise.map((skill, index) => (
                  <li key={index} className="flex items-start text-base text-[#4A5568]">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600" />
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