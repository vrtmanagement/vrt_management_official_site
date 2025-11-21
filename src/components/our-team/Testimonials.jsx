import { TestimonialSlider } from '@/components/ui/testimonial-slider'

const testimonials = [
  {
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    quote:
      'Working with this team has been transformative for our business. Their expertise and dedication helped us achieve unprecedented growth.',
    name: 'Sarah Johnson',
    role: 'CEO, Tech Innovations Inc.',
  },
  {
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    quote:
      'The consultants provided invaluable insights and guidance throughout our transformation journey. Highly professional and results-driven.',
    name: 'Michael Chen',
    role: 'Founder, Startup Ventures',
  },
  {
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    quote:
      'Their strategic approach and deep understanding of business challenges made all the difference. We couldn\'t have done it without them.',
    name: 'Emily Rodriguez',
    role: 'COO, Global Solutions Group',
  },
]

const Testimonials = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 overflow-hidden bg-gray-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-15"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f3422] mb-4"
            style={{ fontFamily: 'Lora, serif' }}
          >
            What Our Clients Say
          </h2>
          <p className="text-lg text-[#555853] max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with our team.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="mt-[64px] flex justify-center px-4 sm:px-12">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </div>
    </section>
  )
}

export default Testimonials

