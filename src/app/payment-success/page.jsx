// "use client";

// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import Link from "next/link";

// export default function PaymentSuccess() {
//   const params = useSearchParams();
//   const sessionId = params.get("session_id");

//   const [status, setStatus] = useState("Verifying payment...");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!sessionId) return;

//     const verifyPayment = async () => {
//       try {
//         const res = await fetch("/api/payment/verify", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ sessionId }),
//         });

//         const data = await res.json();
//         setStatus(`Payment status: ${data.status}`);
//       } catch (error) {
//         setStatus("Unable to verify payment. Please contact support.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     verifyPayment();
//   }, [sessionId]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-green-100 px-4">
//       <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
//         <div className="text-5xl mb-4">✅</div>

//         <h1 className="text-2xl font-bold text-slate-900">
//           Payment Successful
//         </h1>

//         <p className="mt-3 text-slate-600">
//           Thank you for your payment.
//         </p>

//         <div className="mt-4">
//           {loading ? (
//             <p className="text-sm text-slate-500 animate-pulse">
//               Verifying payment with Stripe...
//             </p>
//           ) : (
//             <p className="text-sm font-medium text-emerald-600">
//               {status}
//             </p>
//           )}
//         </div>

//         <Link
//           href="/"
//           className="inline-block mt-6 px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
//         >
//           Go to Home
//         </Link>
//       </div>
//     </div>
//   );
// }

import { Suspense } from "react";
import PaymentSuccessClient from "./PaymentSuccessClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentSuccessClient />
    </Suspense>
  );
}
