import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Linkedin, Mail } from 'lucide-react'

const page = () => {
  const member = {
    name: 'Drew Jackson',
    role: 'Principal Consultant',
    image: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&w=640&q=80',
    contact: {
      email: 'drew@vrtmanagementgroup.com',
      linkedin: 'https://www.linkedin.com/in/drewjackson',
    },
    intro: {
      heading: 'A Trusted Partner to Industry Leaders',
      content:
        'I help leaders and managers at small businesses with 50-400 employees create leaders team members love to follow. As a John C. Maxwell certified coach, I’m able to utilize tools and training that help increase revenue, boost morale, and retain top talent.',
    },
    sections: [
      {
        heading: 'Proven Results That Drive Growth',
        content:
          'I’ve spent the last 15 years serving clients including: Chick-Fil-A, Colonial Bank, Habitat For Humanity, LendersOne, Lennox, Medical City Fort Worth, Metro Anesthesia, Pinnacle Bank, Plaza Home Mortgage.',
      },
      {
        content:
          'Chick-fil-A works with me because I help them increase sales by 20% year over year. Top Lennox Dealers work with me because I help them gain buy-in from their team and build leaders that enable them to grow exponentially.',
      },
    ],
    clients: [
      'Chick-Fil-A',
      'Colonial Bank',
      'Habitat For Humanity',
      'LendersOne',
      'Lennox',
      'Medical City Fort Worth',
      'Metro Anesthesia',
      'Pinnacle Bank',
      'Plaza Home Mortgage',
    ],
    results: [
      {
        client: 'Chick-fil-A',
        achievement: '20% year-over-year sales increase',
      },
      {
        client: 'Top Lennox Dealers',
        achievement: 'Gained team buy-in and built leaders for exponential growth',
      },
    ],
    conclusion:
      'With 15 years of experience and a John C. Maxwell certification, I bring proven methodologies and tools that transform leadership teams and drive measurable business results. My approach focuses on creating leaders that inspire, motivate, and deliver exceptional outcomes.',
    cta: 'Partner with Drew Jackson to Transform Your Leadership Team',
    linkedinCta: 'Connect with Drew Jackson on LinkedIn',
  }

  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Hero Section with Back Button */}
      <div className="bg-white border-b border-[#ebe6dc]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/our-team"
            className="inline-flex items-center gap-2 text-sm text-[#6b6e69] hover:text-[#1c2f1e] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Team</span>
          </Link>
        </div>
      </div>

      {/* Main Content - Full Width */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 lg:gap-12">
          {/* Left Column - Profile Image & Contact */}
          <div className="lg:sticky lg:top-4 lg:self-start lg:h-fit">
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              {/* Profile Image - Circular */}
              <div className="relative w-full max-w-[320px] mx-auto mb-8">
                <div className="relative aspect-square rounded-full overflow-hidden bg-[#f4f1ea] shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Name and Role */}
              <div className="text-center mb-8">
                <h1 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1c2f1e] mb-2">
                  {member.name}
                </h1>
                <p className="text-sm font-semibold text-red-600">{member.role}</p>
              </div>

              {/* Contact Buttons */}
              <div className="flex justify-center gap-3">
                <a
                  href={`mailto:${member.contact.email}`}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg"
                  title="Email"
                >
                  <Mail className="w-5 h-5 text-white" />
                </a>

                <a
                  href={member.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Introductory Section */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1c2f1e] mb-6">
                {member.intro.heading}
              </h2>
              <p className="text-base sm:text-lg text-[#555853] leading-relaxed">
                {member.intro.content}
              </p>
            </div>

            {/* Main Content Sections */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <div className="space-y-10">
                {member.sections.map((section, index) => (
                  <div key={index} className={index > 0 ? 'pt-10 border-t border-[#ebe6dc]' : ''}>
                    <h2 className="text-xl sm:text-2xl font-serif font-semibold text-[#1c2f1e] mb-4">
                      {section.heading}
                    </h2>
                    <p className="text-base sm:text-lg text-[#555853] leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Clients Section */}
            {/* <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1c2f1e] mb-8">
                Trusted by Industry Leaders
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {member.clients.map((client, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-[#ebe6dc] bg-[#f9f8f6] hover:bg-white transition-colors text-center"
                  >
                    <p className="text-sm font-semibold text-[#1c2f1e]">{client}</p>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Results Section */}
            {/* <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1c2f1e] mb-8">
                Proven Results
              </h2>
              <div className="space-y-6">
                {member.results.map((result, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg border border-[#ebe6dc] bg-[#f9f8f6] hover:bg-white transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-[#1c2f1e] mb-2">{result.client}</h3>
                    <p className="text-base text-[#555853] leading-relaxed">{result.achievement}</p>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Conclusion & CTA */}
            {/* <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <p className="text-base sm:text-lg text-[#555853] leading-relaxed mb-6">
                {member.conclusion}
              </p>
              <div className="pt-6 border-t border-[#ebe6dc]">
                <p className="text-lg font-semibold text-[#1c2f1e] mb-4">{member.cta}</p>
                <a
                  href={member.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-semibold text-red-600 hover:text-red-700 transition-colors"
                >
                  {member.linkedinCta}
                  <span>→</span>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default page