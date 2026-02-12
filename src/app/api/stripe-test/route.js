export async function GET() {
  return Response.json({
    stripeSecret: !!process.env.STRIPE_SECRET_KEY,
    stripePublic: !!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  });
}
