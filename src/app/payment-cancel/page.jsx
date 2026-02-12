"use client";

import Link from "next/link";

export default function PaymentCancel() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-rose-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="text-5xl mb-4">❌</div>

        <h1 className="text-2xl font-bold text-slate-900">
          Payment Cancelled
        </h1>

        <p className="mt-3 text-slate-600">
          Your payment was not completed.
        </p>

        <p className="text-sm text-slate-500 mt-1">
          Don’t worry, you can try again anytime.
        </p>

        <Link
          href="/payment-test"
          className="inline-block mt-6 px-6 py-3 rounded-xl bg-rose-600 text-white font-semibold hover:bg-rose-700 transition"
        >
          Try Again
        </Link>
      </div>
    </div>
  );
}
