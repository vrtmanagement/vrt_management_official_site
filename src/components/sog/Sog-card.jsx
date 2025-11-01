import React from "react";

const SogCard = ({ id, stage, topValue, textSize, zone, color, height, title, employeeCount }) => {
  return (
    <div className="w-full  p-4 lg:p-0">
      {/* Stage Card */}
      <div className="w-full h-auto py-3 flex flex-col items-center rounded-3xl justify-between bg-red-600">
        <h1 className="text-white uppercase gsans text-lg sm:text-2xl font-bold">
          {stage}
        </h1>
        <div className="border border-zinc-200 my-2 w-full"></div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white mt-2 uppercase small text-base sm:text-xl">
            Employees
          </h1>
          <h1 className="text-white mt-3 uppercase gsans text-2xl sm:text-3xl font-bold">
            {employeeCount}
          </h1>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-[#0c0c0c] mt-6 text-center uppercase gsans text-lg sm:text-xl font-bold">
        {title}
      </h1>

      {/* Zone Card */}
      <div
        style={{ 
          backgroundColor: color,
          height: `${Number(height) * 4}px`,
          minHeight: `${Number(height) * 4}px`
        }}
        className="w-full flex mt-6 sm:mt-28 py-4 justify-center items-center rounded-3xl relative"
      >
        {/* Vertical Text */}
        <div className={`absolute -top-[55svh]   lg:top-14 -left-6 transform -translate-x-1/2 rotate-90 whitespace-nowrap`}>
          <h1 className="text-black text-base lg:text-lg uppercase tracking-wide gsans font-bold">
            {zone}
          </h1>
        </div>

        {/* Content inside the div */}
        <h1 className={`text-white uppercase gsans font-bold ${
          textSize === '2xl' ? 'text-2xl' :
          textSize === '3xl' ? 'text-3xl' :
          textSize === '4xl' ? 'text-4xl' :
          textSize === '5xl' ? 'text-5xl' :
          textSize === '6xl' ? 'text-6xl' :
          'text-2xl'
        }`}>
          {id}
        </h1>
      </div>
    </div>
  );
};

export default SogCard;