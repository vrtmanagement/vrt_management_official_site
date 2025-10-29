import React from "react";
import Link from "next/link";
const LastCta = () => {
  return (
    <div>
      <div className="flex flex-col py-20  lg:h-screen bg-[#ff0000]/10 px-4 lg:px-20  mx-auto  justify-center items-center">
        <span className="lg:text-3xl text-2xl text-center  lg:mt-0  small text-[#0c0c0c]">
          Special Giveaway!
        </span>

        <h1 className="text-center lg:max-w-6xl tracking-wide mt-16 mb-10 mx-auto small font-semibold text-2xl lg:text-6xl dark:text-[#ffffff] text-[#ff0000]">
          Take Your Transformation Further With 45 minute Strategy Call
        </h1>

        <p className="mt-6 text-[#0c0c0c] lg:max-w-4xl small text-md  lg:text-2xl text-center">
          Get a complementary access to our 7 Stages of Growth Assessment by
          participating in the above survey - an essential tool to pinpoint
          where your business stands and how to unlock its full potential.{" "}
        </p>
        <Link
          href="https://vrt9.net/ega/contact-us/"
          className="text-lg gap-3 w-fit mt-14 bg-[#ff0000] h-14 small flex justify-center items-center rounded-3xl px-6 font-medium text-white"
        >
          Book Your Free 45-Minute Strategy Session Now
          <img
            src="https://www.vrt9.net/research/survey.svg"
            alt=""
            className="w-5 h-5 object-cover"
          />
        </Link>
      </div>
    </div>
  );
};

export default LastCta;
