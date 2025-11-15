import Image from 'next/image'
import Link from 'next/link'

const teamMembers = [
  {
    name: 'Rajesh (Raj) Tedla',
    role: 'CEO and Chief Transformation Coach',
    bio: 'Raj is a certified business coach and business transformation consultant with over 35+ years of experience.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80',
    slug: 'rajesh-tedla',
  },
  {
    name: 'Drew T Jackson',
    role: 'Principal Consultant',
    bio: 'Certified coach specializing in revenue growth, morale improvement, and talent retention for entrepreneurs.',
    image:
      'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&w=640&q=80',
    slug: 'drew-jackson',
  },
  {
    name: 'Filson Thomas',
    role: 'Principal Consultant',
    bio: 'Transformation Coach helping organizations create true missions, develop dynamic leadership, and nurture intentional growth.',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=640&q=80',
    slug: 'filson-thomas',
  },
  {
    name: 'Carl Neilson',
    role: 'Principal Consultant',
    bio: 'Professional Behavioral Analyst (DISC) and TriMetrix HD Analyst, specialized in behavioral analysis and manager coaching facilitation..',
    image:
      'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=640&q=80',
    slug: 'carl-neilson',
  },
  {
    name: 'Dr. Ajoy Basu',
    role: 'Principal Consultant',
    bio: 'Expert in accelerating successful product launches through identifying unmet customer needs and rapidly iterating to market scale.',
    image:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=640&q=80',
    slug: 'ajoy-basu',
  },
  {
    name: 'Don Gleason',
    role: 'Principal Consultant',
    bio: 'Leadership development specialist focused on helping entrepreneurs and small businesses achieve new heights through enhanced leadership capabilities.',
    image:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=640&q=80',
    slug: 'don-gleason',
  },
]

const page = () => {
  return (
    <main className="bg-gray-100 min-h-screen py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-semibold leading-tight text-[#1c2f1e] sm:text-4xl md:text-5xl">
            We are the people who make up Untitled UI
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#6b6e69] sm:text-lg">
            Our philosophy is simple; hire great people and give them the resources and support to do their best work.
          </p>
        </div>

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
    </main>
  )
}

export default page
