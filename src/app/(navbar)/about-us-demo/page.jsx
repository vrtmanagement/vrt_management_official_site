import { DemoOne } from '@/components/ui/about-us-demo';

export default function AboutUsDemoPage() {
  return (
    <div className="min-h-screen">
      {/* Main About Us Section */}
      <DemoOne />
      
      {/* Additional Info Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">About Us Section Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive about us section with service showcases, interactive elements, and a professional call-to-action designed to engage visitors and build trust.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Professional CTA</h3>
              <p className="text-gray-600">Clean, professional call-to-action section with clear value proposition and multiple action options.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Service Showcase</h3>
              <p className="text-gray-600">Interactive service cards with hover effects and staggered animations.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Parallax Effects</h3>
              <p className="text-gray-600">Background elements with parallax scrolling and floating animations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
