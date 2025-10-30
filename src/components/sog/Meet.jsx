import React from "react";
import Link from "next/link";
import { LinkedinIcon, CheckCircle2 } from "lucide-react";
const Meet = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-100">
      {/* decorative blob removed for a cleaner light background */}
      {/* overlay heading centered at the top */}
      <div className="absolute inset-x-0 top-6 z-10 flex justify-center">
        <div className="pointer-events-auto text-center px-6">
          <h1 className="gsans text-3xl lg:text-4xl font-semibold text-[#0c0c0c]" style={{ fontFamily: 'Lora, serif' }}>
            Meet Your Masterful Thinking Expert Guide
          </h1>
          <h2 className="small text-md lg:text-xl mt-2 text-[#4b5563]" style={{ fontFamily: 'Inter, serif' }}>
            A Trusted Expert with Proven Success
          </h2>
        </div>
      </div>
      <div className="mx-auto max-w-6xl grid items-center gap-y-10 lg:grid-cols-5 pt-44">
        <div className="lg:col-span-3 p-6 py-16 lg:p-14">
          <h3 className="gsans text-3xl lg:text-5xl mt-5 font-semibold text-red-600" style={{ fontFamily: 'Lora, serif' }}>
            I'm Rajesh Tedla
          </h3>
          <p className="mt-4 small text-[15px] lg:text-lg text-[#4b5563] leading-7"
            style={{ fontFamily: 'Inter, serif' }}
          >
            With over 35 years of business excellence, I have partnered with
            entrepreneurs to achieve extraordinary growth and success, helping
            transform 1,400+ businesses. As a former Senior Vice President at
            General Electric (GE) and a Stanford Entrepreneurship expert, I
            specialize in People, Process, and Strategy transformation,
            empowering business leaders to scale effectively, overcome
            challenges, and realize their full potential with my proven
            strategies.
          </p>
          {/* badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "35+ Years Experience",
              "1400+ Businesses Transformed",
              "Ex‑SVP, GE",
              "Stanford Entrepreneurship Expert",
            ].map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-red-200/60 bg-white/80 px-3 py-1 text-xs text-[#374151] shadow-sm ring-1 ring-red-100/50 backdrop-blur-sm transition-colors hover:bg-white hover:ring-red-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                {label}
              </span>
            ))}
          </div>
          {/* <div className="bg-[#222222] flex justify-start items-center mt-20 lg:mt-14 relative w-full h-28 lg:h-20 rounded-3xl">
            <div className="bg-[#ffffff] flex  justify-center items-center absolute -top-5 left-4 w-32 lg:w-48 h-10 rounded-2xl">
              <h1 className="gsans text-[#0c0c0c] text-sm lg:text-lg ">
                Background
              </h1>
            </div>
            <h1 className="pl-5 text-md lg:text-lg text-[#ffffff] mt-2 small">
              Doctorate in Business Administration with a focus on
              Entrepreneurial Growth.
            </h1>
          </div> */}
          {/* <div className="bg-[#222222] flex justify-start items-center mt-12 relative w-full h-36 lg:h-28 rounded-3xl">
            <div className="bg-[#ffffff] flex  justify-center items-center absolute -top-5 left-4  w-32 lg:w-48 h-10 rounded-2xl">
              <h1 className="gsans text-[#0c0c0c] text-sm lg:text-lg ">
                Track Record
              </h1>
            </div>
            <h1 className="pl-5 text-md lg:text-lg text-[#ffffff] mt-2 small">
              Proven success stories from SMBs who have doubled their revenue
              and transformed their operations under his mentorship.
            </h1>
          </div> */}
          <div className="flex justify-center mt-12 gap-4 items-center lg:justify-start">
            <Link
              href="https://vrtmanagementgroup.com/rajesh-tedla/"
              className="cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="lg:text-lg text-sm cursor-pointer gap-3 w-fit bg-[#ff0000] h-12 small flex justify-center items-center rounded-full px-6 font-medium text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md">
                Know More
              </button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/rajeshtedla/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex justify-center items-center h-12 w-12 rounded-full border border-black/10 bg-white shadow-sm">
                <LinkedinIcon className="h-6 w-6 object-cover text-blue-600" />
              </span>
            </Link>
            <Link
              href="https://www.youtube.com/@vrt-management-group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex justify-center items-center h-12 w-12 rounded-full border border-black/10 bg-white shadow-sm">
                <img
                  src="https://www.svgrepo.com/show/354592/youtube-icon.svg"
                  alt="chat"
                  className="h-6 w-6 object-cover"
                />
              </span>{" "}
            </Link>
          </div>
        </div>
        <div className="lg:col-span-2 order-first lg:order-last p-6 lg:p-0">
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-3xl border border-black/10 bg-white shadow-xl lg:max-w-md lg:rounded-l-3xl lg:rounded-r-none">
            <img
              src="http://www.vrt9.net/edge/RajeshTedla.jpg"
              alt="meet"
              className="w-full h-80 lg:h-[68vh] object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/80 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet;
