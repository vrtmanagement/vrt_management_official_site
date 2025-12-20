"use client";

import React from "react";
import { CalendarCheck, Landmark, PlusCircle, MapPin } from "lucide-react";
import Image from "next/image";

const VenueDetails = () => {
  return (
    <section id="venue" className="relative max-w-7xl mx-auto px-6 mb-32">
      <div className="relative">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-red-600 font-bold tracking-wider uppercase text-xs mb-3 block">
            The Venue
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
          style={{ fontFamily: "ebgaramond, serif" }}
          >
            Hosted in 
            <span className="text-red-600"> Texas</span>
          </h2>
        </div>

        {/* Main Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Side - Content */}
          <div className="space-y-8 relative">
            {/* Decorative accent line */}
            <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-red-400 to-red-300 rounded-full hidden lg:block"></div>

            <div className="space-y-8">
              {/* Date Section */}
              <div className="group relative">
                <div className="absolute -inset-1  rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white p-6 rounded-xl border-l-4 border-red-600 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                      <CalendarCheck className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-900 mb-1">
                        September 12-16, 2027
                      </h4>
                      <p className="text-slate-600 font-medium">
                        5 Full Days of Workshops & Tours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Venue Section */}
              <div className="group relative">
                <div className="absolute -inset-1  rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white p-6 rounded-xl border-l-4 border-red-600 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                      <MapPin className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-900 mb-1">
                        West Indies Central Sugar Cane Breeding Station
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:-translate-y-0.5">
                <MapPin className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
                <span>View Location</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-400 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity blur-xl"></div>
              </button>
            </div>
          </div>

          {/* Right Side - Image with Overlay Content */}
          <div className="relative lg:sticky lg:top-8">
            <div className="relative rounded-2xl overflow-hidden h-[350px] shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2664&auto=format&fit=crop"
                alt="Barbados Coast"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Official Partner</span>
                  </div>
                  <p className="font-bold text-2xl text-slate-900 mb-1">
                    ABC Resort
                  </p>
                  <p className="text-slate-600 font-medium">
                    Official Conference Hotel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueDetails;

