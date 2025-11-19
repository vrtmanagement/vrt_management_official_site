import { Analytics } from '@vercel/analytics/next';
import "./globals.css";
// import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
// import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import HMRErrorHandler from "@/components/HMRErrorHandler";
import ConditionalLayout from "@/components/ConditionalLayout";

export const metadata = {
  title: "VRT",
  description: "VRT Management Group, LLC",
};


export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <HMRErrorHandler />
        {/* <ErrorReporter /> */}
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
        <Analytics />
        <Toaster />
        {/* <VisualEditsMessenger /> */}
      </body>
    </html>
  );
}