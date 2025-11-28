import Image from 'next/image'
import Link from 'next/link'
import { TestimonialsSection } from '@/components/ui/testimonials-with-marquee'

const teamMembers = [
  {
    name: 'Rajesh (Raj) Tedla',
    role: 'CEO, VRT Management Group, LLC',
    bio: 'Rajesh Tedla is a certified business coach and business transformation consultant with 36 years of experience.',
    image: '/our-team/image.png',
    slug: 'rajesh-tedla',
  },
  {
    name: 'Drew T Jackson',
    role: 'Principal Consultant',
    bio: 'Certified coach specializing in revenue growth, morale improvement, and talent retention for entrepreneurs.',
    image: '/our-team/drew-jackson.jpg',
    slug: 'drew-jackson',
  },
  {
    name: 'Filson Thomas',
    role: 'Principal Consultant',
    bio: 'Transformation Coach helping organizations create true missions, develop dynamic leadership, and nurture intentional growth.',
    image: '/our-team/Filson-thomas.jpg',
    slug: 'filson-thomas',
  },
  {
    name: 'Carl Neilson',
    role: 'Principal Consultant',
    bio: 'Professional Behavioral Analyst (DISC) and TriMetrix HD Analyst, specialized in behavioral analysis and manager coaching facilitation..',
    image: '/our-team/carl-nielson.jpg',
    slug: 'carl-neilson',
  },
  {
    name: 'Dr. Ajoy Basu',
    role: 'Principal Consultant',
    bio: 'Expert in accelerating successful product launches through identifying unmet customer needs and rapidly iterating to market scale.',
    image: '/our-team/ajaoy-bosu.png',
    slug: 'ajoy-basu',
  },
  {
    name: 'Don Gleason',
    role: 'Principal Consultant',
    bio: 'Leadership development specialist focused on helping entrepreneurs and small businesses achieve new heights through enhanced leadership capabilities.',
    image: '/our-team/don-gleason.jpg',
    slug: 'don-gleason',
  },
]

const testimonials = [
  {
    author: {
      name: "Sarah Johnson",
      handle: "@sarahjohnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Working with VRT Management transformed our business strategy. Their expert guidance helped us achieve 150% revenue growth in just 12 months.",
  },
  {
    author: {
      name: "Michael Chen",
      handle: "@michaelchen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The leadership development program was exactly what our team needed. We've seen remarkable improvements in team cohesion and productivity.",
  },
  {
    author: {
      name: "Emily Rodriguez",
      handle: "@emilyrod",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "VRT's business transformation approach is methodical and results-driven. They helped us identify and overcome critical growth barriers."
  },
  {
    author: {
      name: "David Thompson",
      handle: "@davidthompson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "The coaching sessions provided invaluable insights into scaling our operations. Highly recommend their services to any growing business."
  },
  {
    author: {
      name: "Jessica Martinez",
      handle: "@jessicam",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "From day one, VRT showed a deep understanding of our challenges. Their tailored solutions have been instrumental in our success."
  }
]

const page = () => {
  return (
    <main className="min-h-screen">
      {/* Top Section with Gray Background */}
      <div className="bg-gray-100 pb-16 sm:pb-20">
        {/* Red Banner Section */}
        <div 
          className="relative bg-red-700 py-20 md:py-24 lg:py-24 px-6 lg:px-8 overflow-hidden"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30L30 0L90 0L120 30L120 90L90 120L30 120L0 90Z' stroke='white' stroke-width='2' fill='none' opacity='0.15'/%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' stroke='white' stroke-width='1.5' fill='none' opacity='0.12'/%3E%3Cpath d='M90 0L120 30L90 60L60 30Z' stroke='white' stroke-width='1.5' fill='none' opacity='0.12'/%3E%3Cpath d='M30 60L60 90L30 120L0 90Z' stroke='white' stroke-width='1.5' fill='none' opacity='0.12'/%3E%3Cpath d='M90 60L120 90L90 120L60 90Z' stroke='white' stroke-width='1.5' fill='none' opacity='0.12'/%3E%3Cpath d='M60 30L90 60L60 90L30 60Z' stroke='white' stroke-width='1.5' fill='none' opacity='0.12'/%3E%3C/svg%3E")`,
            backgroundPosition: 'right center',
            backgroundRepeat: 'repeat',
            backgroundSize: '300px 300px'
          }}
        >

          <div className="relative max-w-6xl mx-auto text-center mt-10 z-10" >
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: 'Lora, serif' }}
            >
              Meet Our Team
            </h1>

            <p className="text-lg md:text-md text-white/90 max-w-4xl mx-auto leading-relaxed">
            A team of consultants committed to solving complex problems and accelerating your growth.
            </p>
          </div>
        </div>
        
        {/* Team Members Grid */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Link
                key={member.name}
                href={`/our-team/${member.slug}`}
                className="flex flex-col items-center rounded-[28px] border border-[#ebe6dc] bg-white p-6 text-center shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative mb-6 h-40 w-40 overflow-hidden rounded-[24px] bg-[#f4f1ea]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-3 text-xl font-semibold text-[#1f3422]">{member.name}</h3>
                <p className="text-sm font-semibold  text-red-600">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#555853]">{member.bio}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Testimonials Section with White Background */}
      <div className="bg-white">
        <TestimonialsSection 
          title="Trusted by business leaders worldwide"
          description="Join hundreds of businesses who have transformed their operations with our expert consulting services"
          testimonials={testimonials}
        />
      </div>
    </main>
  )
}

export default page
