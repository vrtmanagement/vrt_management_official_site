"use client";

import React from "react";

export default function Newsletter() {
  return (
    <section className="relative bg-black text-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide">
              Fuel Your Growth – Join Our Newsletter Today
            </h3>
          </div>

          {/* Right Column - Button */}
          <div className="flex justify-end">
            <a
              href="https://visitor.r20.constantcontact.com/manage/optin?v=001blP8nn1OmoUPgtQBt-FsrTF7orry2AQpLtEBbM6oQRjMTU0R1ccS29aFPOCC0jTGggLvnZvQ_xWKNkdEXEJpAzdq_cCuiqjE-EobSqeZXY865KssgwPwwnyWEj9GpT1eWECgVAa36hIiZIcNC1npSQMvF85BBczM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-red-600 text-white font-semibold hover:bg-red-600 transition-all duration-300"
            >
              Register for updates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

