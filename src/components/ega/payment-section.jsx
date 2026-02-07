"use client";

const PAYMENT_URL = "https://vrtmanagementgroup.com/product/entrepreneur-growth-alliance/";

export default function PaymentSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="border-2 border-red-500 rounded-2xl px-8 py-10 shadow-md">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
              Ready to Confirm Your Spot in EGA™?
            </h2>
          </div>
          <div>
            <p className="text-lg md:text-xl text-center text-gray-700 mb-6">
              Complete your secure payment for the Entrepreneur Growth Alliance™ using the official VRT Management Group checkout link.
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
        </div>
      </div>
    </section>
  );
}

