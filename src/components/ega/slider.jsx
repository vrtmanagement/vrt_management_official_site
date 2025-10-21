"use client";
import React, { useEffect, useRef } from "react";

// LogoSlider component (embedded)
const LogoSlider = ({ direction = "left", images }) => {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const scrollSpeed = 1; // Adjust scroll speed

  useEffect(() => {
    const track = trackRef.current;

    // Duplicate images for seamless looping
    const duplicatedImages = [...images, ...images];

    // Clear existing content
    track.innerHTML = "";

    // Append duplicated images to the track
    duplicatedImages.forEach((src, index) => {
      const imgContainer = document.createElement("div");
      imgContainer.className = "h-full w-60 flex items-center justify-center"; // Center the image
      const img = document.createElement("img");
      img.src = src;
      img.alt = `Slide ${index}`;
      img.className = "w-48 h-24 object-cover"; // Use object-contain to fit the image within the container
      imgContainer.appendChild(img);
      track.appendChild(imgContainer);
    });

    const updateScroll = () => {
      const currentX =
        parseFloat(
          track.style.transform.replace("translateX(", "").replace("px)", "")
        ) || 0;

      // Move the track based on direction
      if (direction === "left") {
        track.style.transform = `translateX(${currentX - scrollSpeed}px)`;
      } else {
        track.style.transform = `translateX(${currentX + scrollSpeed}px)`;
      }

      // Reset the position when the first set of images has completely scrolled
      if (Math.abs(currentX) >= track.scrollWidth / 2) {
        track.style.transform = "translateX(0)";
      }

      animationRef.current = requestAnimationFrame(updateScroll);
    };

    animationRef.current = requestAnimationFrame(updateScroll);

    return () => cancelAnimationFrame(animationRef.current);
  }, [direction, images]);

  return (
    <div className="overflow-hidden mx-auto">
      <div className="relative bg-white mt-16 lg:mt-2 w-full overflow-hidden h-24 flex items-center">
        <div
          ref={trackRef}
          className="flex gap-10 w-max"
          style={{ transition: "transform 0s linear" }}
        ></div>
      </div>
    </div>
  );
};

// DualLogoSlider component (main component)
const DualLogoSlider = () => {
  // Define the images arrays
  const allImages = [
    "https://vrtmanagementgroup.com/wp-content/uploads/2023/09/Cynergy-Logo-1.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2023/09/STAAMP-Logo-2.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/002.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/015.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/004.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/001.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/005.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/007.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/027.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/009.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/010.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/011.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/012.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/013.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/014.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/003.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/016.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/017.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/021.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/020.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/022.png",
    "https://vrtmanagementgroup.com/wp-content/uploads/2022/04/023.png"
  ];

  // Split the images into two arrays
  const leftImages = allImages.slice(0, allImages.length / 2);
  const rightImages = allImages.slice(allImages.length / 2);

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