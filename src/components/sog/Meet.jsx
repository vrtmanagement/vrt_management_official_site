import React from "react";
import Link from "next/link";
const Meet = () => {
  return (
    <div className="bg-[#0c0c0c] lg:h-screen ">
      <div className="grid items-center lg:grid-cols-5">
        <div className="lg:col-span-3 p-6 py-16  lg:p-20">
          <h1 className="gsans text-3xl lg:text-4xl font-semibold text-[#ffffff]">
            Meet Your Masterful Thinking Expert Guide
          </h1>
          <h1 className="small text-md lg:text-xl mt-2  text-[#ffffff]">
            A Trusted Expert with Proven Success
          </h1>
          <h1 className="gsans  text-3xl lg:text-5xl mt-5 font-semibold text-[#ff0000]">
            I'm Rajesh Tedla
          </h1>

          <p className="mt-8 small text-[15px] lg:text-lg text-[#aeaeae]">
            With over 35 years of business excellence, I have partnered with
            entrepreneurs to achieve extraordinary growth and success, helping
            transform 1,400+ businesses. As a former Senior Vice President at
            General Electric (GE) and a Stanford Entrepreneurship expert, I
            specialize in People, Process, and Strategy transformation,
            empowering business leaders to scale effectively, overcome
            challenges, and realize their full potential with my proven
            strategies.
          </p>
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
          <div className="flex justify-center mt-16 gap-6 items-center lg:justify-start">
            <Link
              href="https://vrtmanagementgroup.com/rajesh-tedla/"
              className="cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="lg:text-lg text-sm  cursor-pointer gap-3 w-fit  bg-[#ff0000] h-14 small flex justify-center items-center rounded-3xl px-6 font-medium text-white">
                Know More
                <img
                  src="https://www.vrt9.net/research/survey.svg"
                  alt=""
                  className="lg:w-5 w-4 h-4 lg:h-5 object-cover"
                />
              </button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/rajeshtedla/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex justify-center items-center  h-14 w-14">
                <img
                  src="https://www.vrt9.net/research/linkedin.svg"
                  alt="chat"
                  className="h-14 w-14 object-cover"
                />
              </span>
            </Link>
            <Link
              href="https://www.youtube.com/@vrt-management-group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex justify-center items-center  h-14  w-14">
                <img
                  src="https://www.svgrepo.com/show/354592/youtube-icon.svg"
                  alt="chat"
                  className=" h-14 w-14 object-cover "
                />
              </span>{" "}
            </Link>
          </div>
        </div>
        <div className="lg:col-span-2 order-first lg:order-last">
          <img
            src="http://www.vrt9.net/edge/RajeshTedla.jpg"
            alt="meet"
            className="w-full  h-96  lg:h-screen object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Meet;
