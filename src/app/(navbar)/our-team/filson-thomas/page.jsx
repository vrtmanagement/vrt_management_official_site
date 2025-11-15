import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Linkedin, Mail } from 'lucide-react'

const page = () => {
  const member = {
    name: 'Filson Thomas',
    role: 'Transformation Coach',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=640&q=80',
    contact: {
      email: 'filson@vrtmanagementgroup.com',
      linkedin: 'https://www.linkedin.com/in/filsonthomas',
    },
    quote: 'We are people of value adding value to others resulting in growth and transformation.',
    intro: {
      heading: 'A Journey of Transformation and Leadership',
      content:
        'It was this awareness that propelled Filson to start his journey as a Leadership coach and Personal Growth Trainer, after about 20-year long stint in the corporate world. With an intense passion for organizational development, he helps leaders make a difference by inspiring and empowering them to live more purposefully, lead more effectively and influence more deliberately.',
    },
    sections: [
      {
        heading: 'Empowering Organizations Through Transformational Leadership',
        content:
          'As a Transformation Coach, he also helps organizations impact the world by inspiring them to create true mission, develop dynamic leadership, and nurture intentional growth. An ever-passionate proponent of Transformational leadership, Filson has garnered the reputation as a "Change Agent" for many agencies and corporations in America, with struggling governance.',
      },
      {
        heading: 'A Global Corporate Journey',
        content:
          'A Master in Computer Science and a Certified Project Management Professional with PMI, Filson started his corporate journey as an IT Professional in India. After gaining international experiences through various projects and assignments in the Middle East and Europe, he landed in the land of opportunities, America, where he marked stellar accomplishments by leading many high caliber and high performance teams in top-flight corporates.',
      },
      {
        heading: 'Executive Leadership with Maxwell Leadership',
        content:
          'Filson functions as an Executive Director with Maxwell Leadership Certified Team, world\'s top leadership development company. He also has led and served on numerous non-profit boards in leadership positions.',
      },
      {
        heading: 'A Life of Purpose and Service',
        content:
          'With a Master of Divinity as well, Filson is a loving husband to his better half, Reney, and a proud father to their son Josiah. Filson never misses to utilize his passion for Coaching, Training & Speaking, even in his social life. Apart from business organizations, he designs programs for social groups, teams, churches etc., in the areas of leadership development, influence, communication, and strategic planning. He designs programs unique to their needs and the results they are looking to achieve.',
      },
    ],
    education: [
      {
        degree: 'Master of Divinity',
        specialization: 'Theological Studies',
      },
      {
        degree: 'Master of Computer Science',
        specialization: 'Computer Science',
      },
    ],
    certifications: [
      {
        name: 'Certified Project Management Professional (PMP)',
        organization: 'PMI (Project Management Institute)',
      },
      {
        name: 'Executive Director',
        organization: 'Maxwell Leadership Certified Team',
      },
    ],
    expertise: [
      'Leadership Development',
      'Influence',
      'Communication',
      'Strategic Planning',
      'Organizational Development',
      'Transformational Leadership',
    ],
    conclusion:
      'With over 20 years of corporate experience and a passion for transformational leadership, Filson brings a unique blend of technical expertise, spiritual wisdom, and leadership acumen to help individuals and organizations achieve their highest potential. His commitment to adding value to others has made him a trusted "Change Agent" for organizations seeking meaningful transformation.',
    cta: 'Partner with Filson Thomas to Transform Your Leadership and Organization',
    linkedinCta: 'Connect with Filson Thomas on LinkedIn',
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
            {/* Quote Section */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-serif font-semibold text-[#1c2f1e] italic leading-relaxed">
                  "{member.quote}"
                </p>
              </div>
            </div>

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

            {/* Education & Certifications Section */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1c2f1e] mb-8">
                Education & Certifications
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
                  <h3 className="text-lg font-semibold text-[#1c2f1e] mb-4">Certifications</h3>
                  <div className="space-y-4">
                    {member.certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-lg border border-[#ebe6dc] bg-[#f9f8f6]"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center">
                          <span className="text-lg">✓</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-[#1c2f1e]">{cert.name}</p>
                          {cert.organization && (
                            <p className="text-sm text-[#555853] mt-1">{cert.organization}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Expertise Areas */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1c2f1e] mb-8">
                Areas of Expertise
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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