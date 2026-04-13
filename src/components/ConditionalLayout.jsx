"use client";

import { usePathname } from "next/navigation";
import NavigationHeader from "@/components/home/navigation-header";
import Footer from "@/components/home/Footer";
import { SiteScheduleProvider } from "@/contexts/SiteScheduleContext";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const hideNavAndFooter = pathname?.startsWith("/newsletter");

  return (
    <SiteScheduleProvider>
      {!hideNavAndFooter && <NavigationHeader />}
      {children}
      {!hideNavAndFooter && <Footer />}
    </SiteScheduleProvider>
  );
}

