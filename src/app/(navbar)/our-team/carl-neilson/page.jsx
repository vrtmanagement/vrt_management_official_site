import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Linkedin, Mail } from 'lucide-react'

const page = () => {
  const member = {
    name: 'Carl Nielson',
    role: 'Principal Consultant',
    image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=640&q=80',
    contact: {
      email: 'carl@vrtmanagementgroup.com',
      linkedin: 'https://www.linkedin.com/in/carlnielson',
    },
    intro: {
      heading: 'Strategic Human Capital Management Expert',
      content:
        'Carl Nielson has over 20 years of experience in the field of strategic human capital management and organization development including leadership development, team and professional development, coaching and talent acquisition. He successfully led a financial turnaround of a global nonprofit professional association and implemented human capital management best practices as Director of Human Resources for a large law firm that resulted in significant improvement in net profit, employee morale and talent retention.',
    },
    sections: [
      {
        heading: 'Transforming HR Operations for Fortune 100 Companies',
        content:
          'He also managed an across-the-board re-engineering project for the HR function of a Fortune 100 company resulting in millions of dollars in HR operational savings and increased HR effectiveness.',
      },
      {
        heading: 'Serving Diverse Business Clients',
        content:
          'Today, Nielson has a diverse group of Fortune 500, Inc 2500 and family-owned business clients that he assists in growing revenue, strengthening leadership talent and cross-functional teams and hiring the best talent using state-of-the-art tools and processes.',
      },
      {
        heading: 'Giving Back Through Community Service',
        content:
          'Nielson has served on several volunteer boards in key strategic and leadership positions. He also gives back in the form of community service using his expertise to assist high school and college students with career coaching using Career Coaching for Students, a program he developed in 2005 as founder and Chief Discovery Officer of Success Discoveries.',
      },
      {
        heading: 'Innovative Programs for Personal and Professional Growth',
        content:
          'He has created several programs for Success Discoveries including Success Discoveries for Couples (SDC), a program for use in premarital counseling, couples retreats and as a self-directed program. SDC has become a favorite unique and valued wedding gift for newlyweds.',
      },
      {
        heading: 'Recognition and Leadership',
        content:
          'Nielson has been recognized annually for the past 10 years by TTI Success Insights, a global assessment company, for his active and continuous community service and is a member of TTI\'s Visionary Partners Forum.',
      },
    ],
    certifications: [
      {
        name: 'Certified Professional Behavioral Analyst (DISC)',
        organization: 'DISC Certification',
      },
      {
        name: 'Professional Motivators Analyst',
        organization: 'TTI Success Insights',
      },
      {
        name: 'Professional TriMetrix HD Analyst',
        organization: 'TTI Success Insights',
      },
      {
        name: 'Certified Facilitator of The Coaching Clinic for Managers',
        organization: 'The Coaching Clinic',
      },
      {
        name: 'IAC Certified Relationship Coach',
        organization: 'International Association of Coaching',
      },
    ],
    programs: [
      {
        name: 'Career Coaching for Students',
        description:
          'A program developed in 2005 to assist high school and college students with career coaching, helping them discover their strengths and career paths.',
      },
      {
        name: 'Success Discoveries for Couples (SDC)',
        description:
          'A unique program for premarital counseling, couples retreats, and self-directed relationship development. SDC has become a favorite and valued wedding gift for newlyweds.',
      },
    ],
    expertise: [
      'Strategic Human Capital Management',
      'Organization Development',
      'Leadership Development',
      'Team Development',
      'Professional Development',
      'Coaching',
      'Talent Acquisition',
      'HR Re-engineering',
      'Behavioral Analysis (DISC)',
      'TriMetrix HD Assessment',
    ],
    achievements: [
      {
        title: 'Financial Turnaround',
        description: 'Successfully led financial turnaround of a global nonprofit professional association',
      },
      {
        title: 'HR Best Practices Implementation',
        description:
          'Implemented human capital management best practices resulting in significant improvement in net profit, employee morale and talent retention',
      },
      {
        title: 'Fortune 100 HR Re-engineering',
        description:
          'Managed re-engineering project resulting in millions of dollars in HR operational savings and increased HR effectiveness',
      },
      {
        title: 'Community Service Recognition',
        description:
          'Recognized annually for the past 10 years by TTI Success Insights for active and continuous community service',
      },
    ],
    conclusion:
      'With over 20 years of experience in strategic human capital management, Carl Nielson brings proven expertise in transforming organizations through effective HR practices, leadership development, and talent optimization. His commitment to community service and innovative program development has made him a trusted advisor to businesses of all sizes and a recognized leader in the field.',
    cta: 'Partner with Carl Nielson to Transform Your Human Capital Strategy',
    linkedinCta: 'Connect with Carl Nielson on LinkedIn',
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

            {/* Key Achievements Section */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1c2f1e] mb-8">
                Key Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {member.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg border border-[#ebe6dc] bg-[#f9f8f6] hover:bg-white transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-[#1c2f1e] mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-base text-[#555853] leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Programs Section */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1c2f1e] mb-8">
                Programs & Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {member.programs.map((program, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg border border-[#ebe6dc] bg-[#f9f8f6] hover:bg-white transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-[#1c2f1e] mb-3">{program.name}</h3>
                    <p className="text-sm text-[#555853] leading-relaxed">{program.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1c2f1e] mb-8">
                Certifications & Credentials
              </h2>
              <div className="space-y-4">
                {member.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg border border-[#ebe6dc] bg-[#f9f8f6] hover:bg-white transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-600/10 flex items-center justify-center">
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