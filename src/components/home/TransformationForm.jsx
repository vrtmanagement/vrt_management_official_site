 "use client";

import React from "react";

export default function TransformationForm() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-red-600 mb-4"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Transformation Begins Here
        </h2>

        <p className="text-center text-sm text-gray-700 mb-8">
        Don’t just dream about growth, make it a reality. The Entrepreneur Growth Alliance (EGA <sup>©</sup>) has helped 1000s of entrepreneurs scale their businesses faster and smarter. Now it’s your turn!
        </p>

        <div className="bg-gray-50 rounded-xl shadow-md p-8">
          <form className="space-y-6" action="#" method="post">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">First name *</label>
                <input className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Last name *</label>
                <input className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white" />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Email id *</label>
              <input type="email" className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white" />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Job title *</label>
              <input className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white" />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Organization name *</label>
              <input className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white" />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">No of employee *</label>
              <input className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white" />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Recent Annual Sales Revenue *</label>
              <input className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white" />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Phone number</label>
              <input className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white" />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">Message</label>
              <textarea className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white h-28" />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-12 rounded-full shadow-md transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}


