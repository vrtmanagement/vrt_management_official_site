"use client";
import Image from "next/image";
import LoadingButton from "@/components/ui/LoadingButton"


export default function ReadtToCTA() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden mt-20">

      {/* GIF Background */}
      <div className="absolute inset-0">
        <Image
          src="/main-page/section9/yourgif.gif"
          alt="Section 9 Animation"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center   px-4 bg-black/20">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
          Ready to be our next success story?
        </h2>
        <p className="text-white text-base md:text-lg max-w-2xl mb-4">
          Schedule your 45-minute strategic call today and take the first step toward transforming your business.
        </p>
        <LoadingButton
  href="https://calendly.com/rajeshtedla/growth-advisory-call-with-rajesh-tedla-clone-1?month=2026-03"
  external
  spinnerColor="text-white"
  className="mt-6 bg-red-500 text-white px-10 py-3 rounded-lg font-semibold hover:bg-gray-200 cursor-pointer hover:text-black transition"
>
  Schedule Now
</LoadingButton>
      </div>

    </div>
  );
}