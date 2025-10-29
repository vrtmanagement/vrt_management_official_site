import React from "react";
import { sogData } from "./sog-data";
import SogCard from "./Sog-card";
const SogModel = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-auto py-20 bg-[#DAFAF3]">
        <span className="rounded-3xl text-[#0c0c0c] text-lg flex justify-center items-center gap-3 py-2 mb-6 border-zinc-200 small px-7">
          <img
            src="https://www.svgrepo.com/show/433484/focus-so.svg"
            alt="clients"
            className="w-6 h-6 inline-block"
          />
          The 7 Stages of Growth
        </span>
        <h1 className="lg:text-5xl text-[#0c0c0c] text-3xl gsans font-semibold text-center">
          The 7 Stages of Growth Model
        </h1>
        <p className="mt-6 px-2 text-zinc-800 text-md lg:text-xl small text-center">
          The 7 Stages of Growth Model is a framework for understanding how
          companies grow and the challenges they face as they grow.
        </p>
        <div className="grid  px-4 lg:px-10 mt-20 gap-12 w-full lg:grid-cols-7 ">
          {
            sogData.map((item) => (
              <SogCard
                key={item.id}
                color={item.color}
                height={item.height}
                textSize={item.textSize}
                zone={item.zone}
                id={item.id}
                title={item.title}
                stage={item.stage}
                employeeCount={item.employeeCount}
              />
            ))
          }
          
        </div>
        
      </div>
    </div>
  );
};

export default SogModel;
