import React from "react";
import { HoverCard } from './hover-card';

// Example usage component showing how to integrate HoverCard into your existing pages
export const HoverCardExample = () => {
  const exampleCard = {
    id: "example-1",
    title: "Business Growth",
    description: "Transform your business with our proven strategies and expert guidance. Achieve sustainable growth and maximize your potential.",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop"
  };

  return (
    <div className="max-w-md mx-auto">
      <HoverCard 
        card={exampleCard}
        className="shadow-xl"
        onHover={(isHovered) => {
          console.log('Card hovered:', isHovered);
        }}
      />
    </div>
  );
};

export default HoverCardExample;
