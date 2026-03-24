"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoadingButton({
  href,
  external = false,
  onClick,
  delay = 400,
  className = "",
  spinnerColor = "text-white",
  children,
  style,
  disabled = false,
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handlePageShow = () => setLoading(false);
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  const handleClick = async () => {
    setLoading(true);

      // ✅ If custom onClick exists
      if (onClick) {
        await Promise.resolve(onClick());
      }

      // 👉 Handle anchor links (#)
  if (href?.startsWith("#")) {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => setLoading(false), delay); // ✅ reset loading
    return;
  }

    setTimeout(() => {
      if (external) {
        window.location.href = href;
      } else {
        router.push(href);
      }
    }, 400);
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading || disabled} 
      style={style}
      className={`relative inline-flex items-center justify-center disabled:cursor-not-allowed ${className}`}
    >
      {/* Button Text */}
      <span
        className={`transition-opacity duration-200 ${
          loading ? "opacity-30" : "opacity-100"
        }`}
      >
        {children}
      </span>

      {/* Spinner */}
      <span
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
          loading ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg
          className={`animate-spin h-5 w-5 ${spinnerColor}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            className="opacity-25"
          />
          <path
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            className="opacity-75"
          />
        </svg>
      </span>
    </button>
  );
}