// import Stripe from "stripe";
// import connectDB from "@/config/db";
// import Payment from "@/models/Payment";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function POST(request) {
//   try {
//     await connectDB();

//     const { formId, email } = await request.json();

//     if (!formId || !email) {
//       return Response.json(
//         { error: "formId and email required" },
//         { status: 400 }
//       );
//     }

//     const amount = 49900; // ₹499

//     const session = await stripe.checkout.sessions.create({
//       mode: "payment",
//       payment_method_types: ["card"],
//       customer_email: email,
//       line_items: [
//         {
//           price_data: {
//             currency: "inr",
//             product_data: {
//               name: "EGA Program Registration",
//             },
//             unit_amount: amount,
//           },
//           quantity: 1,
//         },
//       ],
//       success_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment-cancel`,
//     });

//     await Payment.create({
//       formId,
//       email,
//       amount,
//       stripeSessionId: session.id,
//     });

//     return Response.json({ checkoutUrl: session.url });
//   } catch (error) {
//     console.error("Stripe error:", error.message);
//     return Response.json(
//       { error: "Failed to create Stripe session" },
//       { status: 500 }
//     );
//   }
// }

import Stripe from "stripe";
import connectDB from "@/config/db";
import Payment from "@/models/Payment";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    await connectDB();

    const { formId, email } = await request.json();

    if (!formId || !email) {
      return Response.json(
        { error: "formId and email are required" },
        { status: 400 }
      );
    }

    // Amount in smallest currency unit
    // INR: 49900 = ₹499
    // USD: 49900 = $499
    const amount = 49900;
    const currency = "inr"; // change to "usd" for US

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: "EGA Program Registration",
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment-cancel`,
      metadata: {
        formId,
        email,
      },
    });

    // 🔐 Create DB record BEFORE redirect
    await Payment.create({
      formId,
      email,
      amount,
      currency,
      stripeSessionId: session.id,
      stripePaymentIntentId: session.payment_intent,
      paymentStatus: "pending",
    });

    return Response.json({ checkoutUrl: session.url });
  } catch (error) {
    console.error("❌ Stripe error:", error);
    return Response.json(
      { error: "Failed to create Stripe session" },
      { status: 500 }
    );
  }
}
