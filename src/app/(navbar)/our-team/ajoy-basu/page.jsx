import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Linkedin, Mail } from 'lucide-react'

const page = () => {
  const member = {
    name: 'Dr. Ajoy Basu',
    role: 'Principal Consultant',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=640&q=80',
    contact: {
      email: 'ajoy@vrtmanagementgroup.com',
      linkedin: 'https://www.linkedin.com/in/ajoybasu',
    },
    intro: {
      heading: 'Accelerating Successful Product Launches',
      content:
        'Ajoy enables organizations accelerate launch of successful products in the medical device, the consumer goods, and alternate energy industries. He focuses on identifying unmet customer needs to develop a minimally viable product and then rapidly iterating to access the mass market. He continually strives to optimize the intersection of marketing, engineering, and manufacturing.',
    },
    sections: [
      {
        heading: 'A Proven Track Record with Industry Leaders',
        content:
          'He worked at GE, Covidien, and other companies for 18 years prior to starting alpha2infinity llc. His extensive corporate experience has provided him with deep insights into product development, market strategy, and cross-functional collaboration across multiple industries.',
      },
      {
        heading: 'Optimizing the Intersection of Disciplines',
        content:
          'Dr. Basu\'s unique approach focuses on optimizing the intersection of marketing, engineering, and manufacturing. By aligning these critical functions, he helps organizations reduce time-to-market, minimize development costs, and maximize product success rates.',
      },
    ],
    education: [
      {
        degree: 'PhD in Materials Science',
        specialization: 'University of Michigan',
      },
    ],
    companies: ['GE', 'Covidien', 'alpha2infinity llc'],
    industries: [
      'Medical Device',
      'Consumer Goods',
      'Alternate Energy',
    ],
    expertise: [
      'Product Launch Acceleration',
      'Market Strategy',
      'Minimally Viable Product (MVP) Development',
      'Rapid Iteration',
      'Cross-functional Optimization',
      'Marketing & Engineering Alignment',
      'Manufacturing Optimization',
      'Customer Needs Identification',
    ],
    services: [
      {
        name: 'Product Launch Strategy',
        description:
          'Comprehensive strategies to accelerate successful product launches from concept to market.',
      },
      {
        name: 'MVP Development & Iteration',
        description:
          'Identifying unmet customer needs and developing minimally viable products with rapid iteration cycles.',
      },
      {
        name: 'Cross-functional Optimization',
        description:
          'Aligning marketing, engineering, and manufacturing functions to optimize product development and launch processes.',
      },
    ],
    conclusion:
      'With 18 years of corporate experience at leading companies and a PhD in Materials Science, Dr. Ajoy Basu brings a unique blend of technical expertise and business acumen to help organizations successfully launch products across multiple industries. His focus on identifying unmet customer needs and optimizing cross-functional collaboration makes him an invaluable partner for companies seeking to accelerate their product development and market entry.',
    cta: 'Partner with Dr. Ajoy Basu to Accelerate Your Product Launch',
    linkedinCta: 'Connect with Dr. Ajoy Basu on LinkedIn',
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

            {/* Services Section */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1c2f1e] mb-8">
                Services & Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {member.services.map((service, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg border border-[#ebe6dc] bg-[#f9f8f6] hover:bg-white transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-[#1c2f1e] mb-3">{service.name}</h3>
                    <p className="text-sm text-[#555853] leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Experience Section */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1c2f1e] mb-8">
                Education & Experience
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#1c2f1e] mb-4">Education</h3>
                  <div className="space-y-4">
                    {member.education.map((edu, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-lg border border-[#ebe6dc] bg-[#f9f8f6]"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-600/10 flex items-center justify-center">
                          <span className="text-lg">📚</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-[#1c2f1e]">{edu.degree}</p>
                          {edu.specialization && (
                            <p className="text-sm text-[#555853] mt-1">{edu.specialization}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-6 border-t border-[#ebe6dc]">
                  <h3 className="text-lg font-semibold text-[#1c2f1e] mb-4">Corporate Experience</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {member.companies.map((company, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg border border-[#ebe6dc] bg-[#f9f8f6] hover:bg-white transition-colors text-center"
                      >
                        <p className="text-sm font-semibold text-[#1c2f1e]">{company}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-[#555853] mt-4">
                    18+ years of corporate experience prior to founding alpha2infinity llc
                  </p>
                </div>
              </div>
            </div>

            {/* Industries Section */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1c2f1e] mb-8">
                Industries Served
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {member.industries.map((industry, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-[#ebe6dc] bg-[#f9f8f6] hover:bg-white transition-colors text-center"
                  >
                    <p className="text-sm font-semibold text-[#1c2f1e]">{industry}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise Areas */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1c2f1e] mb-8">
                Areas of Expertise
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {member.expertise.map((area, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-[#ebe6dc] bg-[#f9f8f6] hover:bg-white transition-colors text-center"
                  >
                    <p className="text-sm font-semibold text-[#1c2f1e]">{area}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion & CTA */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
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
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page