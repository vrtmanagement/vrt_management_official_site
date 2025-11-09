"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function TenantHighlights() {
  return (
    <section className="relative bg-white py-12 md:py-16 lg:py-20" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center">
            Tenant Highlights
          </h2>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Greenway Steel */}
            <div className="space-y-6">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                  alt="Greenway Steel team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-black">
                  Greenway Steel
                </h3>
                <div className="space-y-3 text-base text-gray-700 leading-relaxed">
                  <p>
                    "Greenway Steel and our team have been fortunate to grow our business from founding to today while residing and working from The EDGE. We started with shared office space and as we generated revenue and team members came on board we moved to a private office. Throughout our time at The EDGE, we've been supported by a dedicated staff and inspired by other start up teams.
                  </p>
                  <p>
                    The EDGE Facility provides us with reliable office services, Wi-Fi, printing and mail, as well as access to the conference room when necessary. Most importantly, we have been inspired by others that we meet and share the facility with us and that are sharing their story and experiences. There is so much to learn when starting up a business and when sharing space with others having experienced much too, we can't help but get ideas that have moved our business forward."
                  </p>
                  <p className="font-semibold">– Randy Charles</p>
                </div>
              </div>
            </div>

            {/* City Detect */}
            <div className="space-y-6">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop"
                  alt="City Detect team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-black">
                  City Detect
                </h3>
                <div className="space-y-3 text-base text-gray-700 leading-relaxed">
                  <p>
                    "As a startup founder with both hardware and software components, having a dedicated home base is essential. The EDGE has been transformative for our growth, providing the perfect environment for building our camera systems and holding key investor meetings. I've worked with Dr. Welbourne, and her team, Kim, Jenni, Sabrina, and Earl all go above and beyond to support the entrepreneurs. They've been invaluable advocates, supporting us at every stage. Not to sound like a commercial but The EDGE offers incredible value. The University of Alabama and The City of Tuscaloosa did an awesome job with the facility- great co-working spaces, nice private offices, and then you don't have to worry about the administrative hassles of dealing with internet and water bills. It's more than just a workspace; it's a great up-and-coming entrepreneurial community where people want to see each other succeed. The EDGE has truly been a pivotal resource, enabling us to focus on innovation and growth."
                  </p>
                  <p className="font-semibold">-Gavin Baum-Blake</p>
                </div>
              </div>
            </div>
          </div>

          {/* View Edge Members Button */}
          <div className="flex justify-center pt-8">
            <a
              href="https://aei.culverhouse.ua.edu/members/"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-red-600 text-black font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 group"
            >
              <span>View Edge members</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

