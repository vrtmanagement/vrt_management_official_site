// import Stripe from "stripe";
// import connectDB from "@/config/db";
// import Payment from "@/models/Payment"; // use your payment model
// import { headers } from "next/headers";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function POST(req) {
//   const body = await req.text();
//   const signature = headers().get("stripe-signature");

//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(
//       body,
//       signature,
//       process.env.STRIPE_WEBHOOK_SECRET
//     );
//   } catch (err) {
//     console.error("❌ Webhook signature verification failed:", err.message);
//     return new Response("Webhook Error", { status: 400 });
//   }

//   await connectDB();

//   try {
//     switch (event.type) {
//       case "checkout.session.completed": {
//         const session = event.data.object;

//         await Payment.findOneAndUpdate(
//           { stripeSessionId: session.id },
//           {
//             paymentStatus: "paid",
//             paidAt: new Date(),
//           }
//         );

//         break;
//       }

//       case "checkout.session.expired": {
//         const session = event.data.object;

//         await Payment.findOneAndUpdate(
//           { stripeSessionId: session.id },
//           { paymentStatus: "cancelled" }
//         );

//         break;
//       }

//       case "payment_intent.payment_failed": {
//         const intent = event.data.object;

//         await Payment.findOneAndUpdate(
//           { stripePaymentIntentId: intent.id },
//           { paymentStatus: "failed" }
//         );

//         break;
//       }

//       default:
//         console.log(`Unhandled event type: ${event.type}`);
//     }

//     return new Response("OK", { status: 200 });
//   } catch (error) {
//     console.error("❌ Webhook DB error:", error);
//     return new Response("Webhook handler failed", { status: 500 });
//   }
// }

import Stripe from "stripe";
import connectDB from "@/config/db";
import Payment from "@/models/Payment";
import { headers } from "next/headers";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  await connectDB();

  const body = await req.text();
  const signature = headers().get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;

        await Payment.findOneAndUpdate(
          { stripeSessionId: session.id },
          {
            paymentStatus: "paid",
            stripePaymentIntentId: session.payment_intent,
          }
        );

        break;
      }

      case "checkout.session.expired": {
        const session = event.data.object;

        await Payment.findOneAndUpdate(
          { stripeSessionId: session.id },
          { paymentStatus: "expired" }
        );

        break;
      }

      case "payment_intent.payment_failed": {
        const intent = event.data.object;

        await Payment.findOneAndUpdate(
          { stripePaymentIntentId: intent.id },
          { paymentStatus: "failed" }
        );

        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return new Response(JSON.stringify({ received: true }), { status: 200 });
  } catch (error) {
    console.error("❌ Webhook DB error:", error);
    return new Response("Webhook handler failed", { status: 500 });
  }
}
