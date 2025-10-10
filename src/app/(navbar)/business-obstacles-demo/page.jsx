import { BusinessObstacles } from '@/components/ui/business-obstacles';

export default function BusinessObstaclesDemoPage() {
  const handleCtaClick = () => {
    alert('Discovery call booking functionality would be implemented here!');
  };

  return (
    <div className="min-h-screen">
      {/* Main Business Obstacles Component */}
      <BusinessObstacles 
        onCtaClick={handleCtaClick}
      />
      
      {/* Additional Info Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Component Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This component showcases smooth animations and interactive elements designed to engage users and highlight business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Interactive Icons</h3>
              <p className="text-gray-600">Hover effects with scaling, rotation, and color transitions on circular icons.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Staggered Animations</h3>
              <p className="text-gray-600">Text characters animate in sequence for engaging visual effects.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Theme Integration</h3>
              <p className="text-gray-600">Uses white, black, and red color scheme to match your website theme.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
