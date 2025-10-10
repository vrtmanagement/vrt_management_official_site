import React from "react";
import { HoverCard } from './hover-card';

const CARD_DATA = [
  {
    id: "card-1",
    title: "Mountain Adventure",
    description: "Explore breathtaking mountain landscapes and discover hidden trails in pristine wilderness.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2340&auto=format&fit=crop"
  },
  {
    id: "card-2",
    title: "Ocean Serenity",
    description: "Experience the calming beauty of crystal clear waters and endless horizons.",
    imageUrl: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2326&auto=format&fit=crop"
  },
  {
    id: "card-3",
    title: "Forest Escape",
    description: "Immerse yourself in lush greenery and find peace among ancient trees.",
    imageUrl: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2332&auto=format&fit=crop"
  }
];

export const HoverCardsDemo = ({ 
  title = "Discover Amazing Places",
  subtitle = "Hover over each card to reveal more details",
  cards = CARD_DATA,
  className = ""
}) => {
  return (
    <div className={`min-h-screen w-full bg-gray-50 p-8 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            {title}
          </h1>
          <p className="text-lg text-gray-600">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <HoverCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverCardsDemo;
