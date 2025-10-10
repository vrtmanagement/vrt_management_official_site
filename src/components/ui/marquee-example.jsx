import { Marquee } from './marquee';

// Example usage component showing how to integrate Marquee into your existing pages
export const MarqueeExample = () => {
  const logos = [
    "Company A", "Company B", "Company C", "Company D", "Company E"
  ];

  return (
    <div className="w-full bg-white py-12">
      <div className="container mx-auto px-4 text-center mb-8">
        <h2 className="text-2xl font-bold text-black mb-2">Our Partners</h2>
        <p className="text-gray-600">Trusted by leading organizations worldwide</p>
      </div>
      
      <Marquee speed={20} pauseOnHover={true}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="relative h-full w-fit mx-8 flex items-center justify-center"
          >
            <div className="bg-gray-100 px-6 py-3 rounded-lg">
              <span className="text-lg font-semibold text-gray-700">{logo}</span>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeExample;
