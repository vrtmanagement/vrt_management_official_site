import { HoverCardsDemo } from '@/components/ui/hover-cards-demo';
import EnhancedCardGrid from '@/components/ui/enhanced-cardgrid';

export default function HoverCardsDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Original Hover Cards Demo */}
      <HoverCardsDemo 
        title="Interactive Hover Cards"
        subtitle="Experience smooth animations and beautiful transitions on hover"
      />
      
      {/* Enhanced CardGrid Demo */}
      <div className="bg-neutral-900 py-16">
        <div className="container mx-auto px-8">
          <EnhancedCardGrid 
            title="Enhanced Business Cards"
          />
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-white p-8 mx-8 rounded-lg shadow-sm -mt-8 relative z-10">
        <h2 className="text-2xl font-semibold mb-6">Component Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Animation Effects</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Smooth lift animation on hover</li>
              <li>• Image scale effect</li>
              <li>• Gradient overlay reveal</li>
              <li>• Border highlight animation</li>
              <li>• Corner runner animations</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Customization</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Custom card data</li>
              <li>• Flexible styling</li>
              <li>• Hover event callbacks</li>
              <li>• Responsive design</li>
              <li>• Theme integration</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Integration</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• shadcn/ui compatible</li>
              <li>• Tailwind CSS v4 ready</li>
              <li>• Framer Motion powered</li>
              <li>• TypeScript/JavaScript support</li>
              <li>• Next.js optimized</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
