import { MarqueeDemo } from '@/components/ui/marquee-demo';

export default function MarqueeDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Marquee Demo */}
      <MarqueeDemo />
      
      {/* Different Speed Demo */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center mb-8">
          <h2 className="text-3xl font-bold text-black mb-4">Fast Marquee</h2>
          <p className="text-gray-600">Speed: 15 seconds</p>
        </div>
        <MarqueeDemo 
          title=""
          subtitle=""
          speed={15}
        />
      </div>
      
      {/* Reverse Direction Demo */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center mb-8">
          <h2 className="text-3xl font-bold text-black mb-4">Reverse Direction</h2>
          <p className="text-gray-600">Moving right to left</p>
        </div>
        <MarqueeDemo 
          title=""
          subtitle=""
          direction="right"
          speed={25}
        />
      </div>
      
      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Marquee Component Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A flexible and customizable marquee component for displaying logos, testimonials, or any content in a smooth scrolling animation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Customizable Speed</h3>
              <p className="text-gray-600">Control animation speed with the speed prop (in seconds).</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Direction Control</h3>
              <p className="text-gray-600">Choose between left or right scrolling direction.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏸️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Pause on Hover</h3>
              <p className="text-gray-600">Optional pause functionality when users hover over the marquee.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
