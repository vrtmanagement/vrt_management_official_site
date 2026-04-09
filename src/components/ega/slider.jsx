"use client";
import React, { useEffect, useRef } from "react";

// LogoSlider component (embedded)
const LogoSlider = ({ direction = "left", images }) => {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const scrollSpeed = 1; // Adjust scroll speed

  useEffect(() => {
    const track = trackRef.current;
  
    const duplicatedImages = [...images, ...images];
    track.innerHTML = "";
  
    duplicatedImages.forEach((src, index) => {
      const imgContainer = document.createElement("div");
      imgContainer.className =
        "h-full w-[140px] sm:w-48 md:w-60 flex items-center justify-center";
  
      const img = document.createElement("img");
      img.src = src;
      img.alt = `Slide ${index}`;
      img.className =
        "w-[120px] sm:w-48 md:w-48 h-[56px] sm:h-24 object-contain";
  
      imgContainer.appendChild(img);
      track.appendChild(imgContainer);
    });
  
    let isPaused = false; // 👈 NEW
  
    const updateScroll = () => {
      if (!isPaused) { // 👈 ONLY RUN WHEN NOT PAUSED
        const currentX =
          parseFloat(
            track.style.transform
              .replace("translateX(", "")
              .replace("px)", "")
          ) || 0;
  
        if (direction === "left") {
          track.style.transform = `translateX(${currentX - scrollSpeed}px)`;
        } else {
          track.style.transform = `translateX(${currentX + scrollSpeed}px)`;
        }
  
        if (Math.abs(currentX) >= track.scrollWidth / 2) {
          track.style.transform = "translateX(0)";
        }
      }
  
      animationRef.current = requestAnimationFrame(updateScroll);
    };
  
    // 👇 HOVER EVENTS
    const parent = track.parentElement;
  
    const handleMouseEnter = () => {
      isPaused = true;
    };
  
    const handleMouseLeave = () => {
      isPaused = false;
    };
  
    parent.addEventListener("mouseenter", handleMouseEnter);
    parent.addEventListener("mouseleave", handleMouseLeave);
  
    animationRef.current = requestAnimationFrame(updateScroll);
  
    return () => {
      cancelAnimationFrame(animationRef.current);
      parent.removeEventListener("mouseenter", handleMouseEnter);
      parent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [direction, images]);  

  return (
    <div className="overflow-hidden mx-auto">
      <div className="relative bg-white mt-8 md:mt-16 w-full overflow-hidden h-16 sm:h-20 md:h-24 flex items-center">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-28 md:w-36 bg-gradient-to-r from-white via-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-28 md:w-36 bg-gradient-to-l from-white via-white to-transparent" />
        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-8 md:gap-10 w-max"
          style={{ transition: "transform 0s linear" }}
        ></div>
      </div>
    </div>
  );
};

// DualLogoSlider component (main component)
const DualLogoSlider = () => {
  // Define the images arrays
  const allImages = Array.from({ length: 11 }, (_, i) => 
    `/ega/company-logo/slide${i + 1}.png`
  );

  // Split the images into two arrays
  // const leftImages = allImages.slice(0, allImages.length / 2);
  // const rightImages = allImages.slice(allImages.length / 2);

  const leftImages = allImages;

  return (
    <div className="lg:space-y-5 space-y-3 mt-20 mb-20">
      {/* Heading and Description */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
        style={{ fontFamily: 'Lora, serif' }}
        >
          Companies We've Helped
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto"
        style={{ fontFamily: 'Inter, serif' }}
        >
          We've empowered entrepreneurs and small business owners worldwide to scale their businesses with our innovative services and proven growth strategies.
        </p>
      </div>
      
      <LogoSlider direction="left" images={leftImages} />
      {/* <LogoSlider direction="right" images={rightImages} /> */}
    </div>
  );
};

export default DualLogoSlider;