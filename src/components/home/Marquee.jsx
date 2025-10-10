"use client";
import { Marquee } from "@/components/ui/marquee"

const CompanyLogos = {
  horizon: () => (
    <div className="flex items-center justify-center h-16 w-48">
      <img 
        src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Horizon Service Company" 
        className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
      />
    </div>
  ),
  superior: () => (
    <div className="flex items-center justify-center h-16 w-48">
      <img 
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Superior Sign and Lighting" 
        className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
      />
    </div>
  ),
  medpro: () => (
    <div className="flex items-center justify-center h-16 w-48">
      <img 
        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Medpro Group" 
        className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
      />
    </div>
  ),
  diageo: () => (
    <div className="flex items-center justify-center h-16 w-48">
      <img 
        src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Diageo" 
        className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
      />
    </div>
  ),
  charter: () => (
    <div className="flex items-center justify-center h-16 w-48">
      <img 
        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Charter Oak Equity" 
        className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
      />
    </div>
  ),
  seabold: () => (
    <div className="flex items-center justify-center h-16 w-48">
      <img 
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Seabold Folding Box" 
        className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
      />
    </div>
  ),
  relgo: () => (
    <div className="flex items-center justify-center h-16 w-48">
      <img 
        src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Relgo" 
        className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
      />
    </div>
  ),
  biologics: () => (
    <div className="flex items-center justify-center h-16 w-48">
      <img 
        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Biologics" 
        className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
      />
    </div>
  ),
  microsoft: () => (
    <div className="flex items-center justify-center h-16 w-48">
      <img 
        src="https://images.unsplash.com/photo-1633419463015-9b4b4438f3d4?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Microsoft" 
        className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
      />
    </div>
  ),
};

export default function MarqueeSection({ 
  title = "Trusted by Leading Organizations",
  subtitle = "Our expertise spans across multiple industries and business functions",
  speed = 30,
  direction = "left",
  pauseOnHover = true,
  className = ""
}) {
  const logos = [
    CompanyLogos.horizon, 
    CompanyLogos.superior, 
    CompanyLogos.medpro, 
    CompanyLogos.diageo,
    CompanyLogos.charter,
    CompanyLogos.seabold,
    CompanyLogos.relgo,
    CompanyLogos.biologics,
    CompanyLogos.microsoft
  ];

  return (
    <section className={`w-full bg-white py-16 ${className}`}>
      <div className="container mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl font-bold text-black mb-4">{title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      </div>
      
      <Marquee speed={speed} direction={direction} pauseOnHover={pauseOnHover}>
        {logos.map((Logo, index) => (
          <div
            key={index}
            className="relative h-full w-fit mx-8 flex items-center justify-start"
          >
            <Logo />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
