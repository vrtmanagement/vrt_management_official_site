// "use client";

// export default function PaymentTest() {
//   const startTestPayment = async () => {
//     // TEMP values just for testing
//     const fakeFormId = "65f000000000000000000001"; // any 24-char string
//     const email = "testuser@gmail.com";

//     const res = await fetch("/api/payment/create-session", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         formId: fakeFormId,
//         email,
//       }),
//     });

//     const data = await res.json();

//     if (data.checkoutUrl) {
//       window.location.href = data.checkoutUrl;
//     } else {
//       alert("Failed to create Stripe session");
//     }
//   };

//   return (
//     <div style={{ padding: "40px" }} className="my-20">
//       <h1>Stripe Payment Test</h1>
//       <p>This is a test page to check Stripe integration.</p>

//       <button
//         onClick={startTestPayment}
//         style={{
//           padding: "12px 24px",
//           fontSize: "16px",
//           cursor: "pointer",
//         }}
//       >
//         Pay ₹499 (Test)
//       </button>
//     </div>
//   );
// }

"use client";

export default function PaymentTest() {
  const startTestPayment = async () => {
    const fakeFormId = "65f000000000000000000001";
    const email = "testuser@gmail.com";

    const res = await fetch("/api/payment/create-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formId: fakeFormId, email }),
    });

    const data = await res.json();

    if (data.checkoutUrl) {
      window.location.href = data.checkoutUrl;
    } else {
      alert("Failed to create Stripe session");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-black px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-2xl font-bold text-slate-900 text-center">
          Stripe Payment Test
        </h1>
        <p className="text-sm text-slate-500 text-center mt-2">
          Secure checkout powered by Stripe
        </p>

        {/* Pricing Box */}
        <div className="mt-6 bg-slate-50 rounded-xl p-4">
          <div className="flex justify-between text-sm text-slate-600">
            <span>EGA Program</span>
            <span>₹499</span>
          </div>

          <div className="h-px bg-slate-200 my-3" />

          <div className="flex justify-between text-base font-semibold text-slate-900">
            <span>Total</span>
            <span>₹499</span>
          </div>
        </div>

        {/* Pay Button */}
        <button
          onClick={startTestPayment}
          className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 active:scale-95"
        >
          Pay ₹499
        </button>

        {/* Info */}
        <p className="mt-4 text-xs text-center text-slate-500">
          💳 Test card: <span className="font-medium">4242 4242 4242 4242</span>
        </p>
      </div>
    </div>
  );
}
