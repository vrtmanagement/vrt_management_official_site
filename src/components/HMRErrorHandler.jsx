"use client";

import { useEffect } from "react";

export default function HMRErrorHandler() {
  useEffect(() => {
    // Suppress HMR WebSocket errors in development
    if (typeof window !== "undefined") {
      const originalError = console.error;
      const originalWarn = console.warn;

      // Override console.error to filter out HMR errors
      console.error = (...args) => {
        const errorMessage = args[0]?.toString() || "";
        if (
          errorMessage.includes("unrecognized HMR message") ||
          errorMessage.includes("HMR") ||
          errorMessage.includes("WebSocket")
        ) {
          // Silently ignore HMR-related errors
          return;
        }
        originalError.apply(console, args);
      };

      // Override console.warn to filter out HMR warnings
      console.warn = (...args) => {
        const warnMessage = args[0]?.toString() || "";
        if (
          warnMessage.includes("unrecognized HMR message") ||
          warnMessage.includes("HMR") ||
          warnMessage.includes("WebSocket")
        ) {
          // Silently ignore HMR-related warnings
          return;
        }
        originalWarn.apply(console, args);
      };

      // Handle unhandled promise rejections
      const handleUnhandledRejection = (event) => {
        const errorMessage = event.reason?.message || event.reason?.toString() || "";
        if (
          errorMessage.includes("unrecognized HMR message") ||
          errorMessage.includes("HMR") ||
          errorMessage.includes("WebSocket")
        ) {
          event.preventDefault();
          return;
        }
      };

      window.addEventListener("unhandledrejection", handleUnhandledRejection);

      // Cleanup
      return () => {
        console.error = originalError;
        console.warn = originalWarn;
        window.removeEventListener("unhandledrejection", handleUnhandledRejection);
      };
    }
  }, []);

  return null;
}

