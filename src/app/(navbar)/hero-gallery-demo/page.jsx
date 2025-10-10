import { HeroDemo1, HeroDemo2, HeroDemo3 } from '@/components/ui/hero-gallery-demo';
import EGAHeroGallery from '@/components/ega/HeroGallery';

export default function HeroGalleryDemoPage() {
  return (
    <div className="min-h-screen">
      {/* Demo 1 - Default Layout */}
      <div className="mb-8">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-center mb-4 text-black">Default Layout</h2>
          <p className="text-center text-gray-600 mb-8">5-cell grid with business images</p>
        </div>
        <HeroDemo1 />
      </div>
      
      {/* Demo 2 - Four Cells Layout */}
      <div className="mb-8">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-center mb-4 text-black">Four Cells Layout</h2>
          <p className="text-center text-gray-600 mb-8">4-cell grid with strategic business focus</p>
        </div>
        <HeroDemo2 />
      </div>
      
      {/* Demo 3 - Three Cells Layout */}
      <div className="mb-8">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-center mb-4 text-black">Three Cells Layout</h2>
          <p className="text-center text-gray-600 mb-8">3-cell grid with dark theme</p>
        </div>
        <HeroDemo3 />
      </div>
      
      {/* EGA Specific Demo */}
      <div className="mb-8">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-center mb-4 text-black">EGA™ Hero Gallery</h2>
          <p className="text-center text-gray-600 mb-8">EGA-specific hero gallery with mentorship program focus</p>
        </div>
        <EGAHeroGallery />
      </div>
      
      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Hero Gallery Scroll Animation Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A powerful hero section with scroll-triggered animations, dynamic grid layouts, and smooth transitions that create engaging user experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Responsive Grid</h3>
              <p className="text-gray-600">Adaptive grid layouts that work seamlessly across all device sizes with mobile-first design.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Scroll Animations</h3>
              <p className="text-gray-600">Smooth scroll-triggered animations with parallax effects and dynamic scaling.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Multiple Layouts</h3>
              <p className="text-gray-600">Three different grid variants (default, four cells, three cells) for various use cases.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
