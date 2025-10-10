import { CircularTestimonialsDemo } from '@/components/ui/circular-testimonials-demo';

export default function TestimonialsDemoPage() {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Circular Testimonials Demo</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Experience our new circular testimonials component with smooth animations and responsive design.
        </p>
      </div>
      
      <CircularTestimonialsDemo />
      
      <div className="mt-16 p-8 bg-muted rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Usage Instructions</h2>
        <div className="space-y-4 text-sm">
          <p>
            <strong>Navigation:</strong> Use the arrow buttons or keyboard arrow keys to navigate between testimonials.
          </p>
          <p>
            <strong>Autoplay:</strong> The component automatically cycles through testimonials every 5 seconds.
          </p>
          <p>
            <strong>Responsive:</strong> The layout adapts to different screen sizes with optimized spacing.
          </p>
          <p>
            <strong>Customization:</strong> Colors, fonts, and autoplay behavior can be customized via props.
          </p>
        </div>
      </div>
    </div>
  );
}
