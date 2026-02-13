"use client";

const PAYMENT_URL = "https://vrtmanagementgroup.com/product/entrepreneur-growth-alliance/";
import { useRouter } from "next/navigation";

export default function PaymentSection() {
   const router = useRouter();
   const handleJoinProgram = () => {
    router.push('/ega/registration-form');
  };
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="border-2 border-red-500 rounded-2xl px-8 py-10 shadow-md">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
           Are You Ready to Register Your Spot in EGA<sup className="text-md align-super">©</sup>?
          </h2>

          </div>
          <div>
            <p className="text-lg md:text-xl text-center text-gray-700 mb-6">
            Complete your secure payment for the Entrepreneur Growth Alliance<sup className="text-xs align-super">©</sup> using the official VRT Management Group checkout link.
          </p>

          </div>
          <div>
            <div className="flex justify-center">
              <a
                href={PAYMENT_URL}
                className="ripple btn-pulse-scale inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer text-lg"
              >
                Proceed to Secure Payment
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-6 text-center space-y-4">
  <p className="text-gray-700 text-base md:text-lg">
    Still in doubt? Set up a 45-minute complimentary strategic call with Rajesh.
  </p>

  <button
    onClick={handleJoinProgram}
    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 
               text-white font-semibold px-6 py-3 rounded-xl shadow-md 
               transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
  >
    Book Free Strategy Call
  </button>
</div>

        </div>
      </div>
    </section>
  );
}

