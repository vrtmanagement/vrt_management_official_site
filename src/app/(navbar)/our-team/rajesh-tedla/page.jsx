import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Linkedin, Mail, Instagram, Check } from 'lucide-react'

const page = () => {
  const member = {
    name: 'Rajesh Tedla',
    role: 'CEO & Chief Transformation Officer',
    image: 'https://www.vrt9.net/edge/RajeshTedla.jpg',
    contact: {
      email: 'rajesh@vrtmanagementgroup.com',
      linkedin: 'https://www.linkedin.com/in/rajeshtedla/',
      instagram: 'https://instagram.com/rajesh_tedla',
    },
    quote: 'Empowering entrepreneurs and businesses to achieve unprecedented growth through transformative leadership and strategic innovation.',
    intro: {
      heading: 'Unprecedented Business Growth',
      content:
        'With a vision that transcends boundaries and an acumen honed over 35+ years of experience, Rajesh Tedla stands as a beacon of dedication and expertise. He is the driving force behind transformative growth, a visionary CEO, and a trusted advisor to entrepreneurs and small business owners worldwide.',
    },
    sections: [
      {
        heading: 'A Visionary CEO and Trusted Advisor',
        content:
          'As the CEO of VRT Management Group, Rajesh Tedla leads with unparalleled expertise in strategic planning, people transformation, and process refinement. His leadership has inspired countless small businesses to achieve unprecedented growth and success.',
      },
      {
        heading: 'Empowering Entrepreneurship on a Global Scale',
        content:
          'Through his role as an independent director and personal coaching, Rajesh has personally guided over 1,376+ entrepreneurs globally. His transformative guidance has helped businesses scale, innovate, and achieve sustainable growth across diverse industries and markets.',
      },
      {
        heading: 'Designing Tomorrow: Architect of Transformational Programs',
        content:
          'Driven by an insatiable pursuit of knowledge, Rajesh has crafted innovative growth initiatives that have revolutionized how entrepreneurs approach business development. He is the architect behind transformative programs including the Entrepreneur Growth Alliance™ (EGA) and the Entrepreneur Growth Operating System™ (EGOS), designed to empower businesses at every stage of their journey.',
      },
      {
        heading: 'A Respected Authority and Compelling Speaker',
        content:
          'Rajesh holds a prominent seat at prestigious business forums, including Stanford University\'s entrepreneurship programs. His ability to distill complex concepts into actionable insights has made him a sought-after speaker and thought leader in the entrepreneurial community.',
      },
      {
        heading: 'A Legacy Woven in Excellence',
        content:
          'Before founding VRT Management Group, Rajesh served as Senior Vice President/Marketing Growth Leader at GE Capital for over 12 years. During this tenure, he pioneered global initiatives that generated substantial revenue and transformed business operations across multiple continents.',
      },
      {
        heading: 'A Multifaceted Education: A Scholar\'s Pursuit',
        content:
          'Rajesh\'s educational foundation is as impressive as his professional achievements. He holds a Bachelor\'s in Mechanical Engineering, a Master\'s in Industrial Engineering, an MBA in Strategy and Management, and an astounding 22 certifications across various disciplines, demonstrating his commitment to continuous learning and excellence.',
      },
      {
        heading: 'Crafting a Legacy: Pursuit of a Doctorate',
        content:
          'Currently pursuing a Doctorate in Business Administration (DBA) specializing in Entrepreneurship Growth and Success, Rajesh continues to push the boundaries of knowledge, ensuring his methodologies remain at the forefront of business transformation.',
      },
    ],
    programs: [
      {
        name: 'EGOS: Entrepreneur Growth Operating System™',
        description:
          'A unique program for developing entrepreneurs and businesses, providing a comprehensive framework for sustainable growth and operational excellence.',
      },
      {
        name: 'Executive Leadership Team (ELT) Coaching',
        description:
          'A critical coaching program for CEOs/business owners and C-suite executives, focusing on strategic leadership and organizational transformation.',
      },
      {
        name: 'Executive Excellence Coaching',
        description:
          'A critical coaching program for C-suite, executive leaders, and managers, designed to elevate leadership capabilities and drive organizational success.',
      },
      {
        name: 'Entrepreneur\'s EDGE',
        description:
          'A comprehensive program designed to give entrepreneurs the competitive edge they need to succeed in today\'s dynamic business environment.',
      },
      {
        name: 'Entrepreneur Growth Alliance',
        description:
          'A collaborative platform that brings together entrepreneurs, providing resources, networking opportunities, and strategic support for business growth.',
      },
      {
        name: 'Integrated Problem Solving',
        description:
          'An innovative problem-solving method that combines analytical thinking with creative solutions to address complex business challenges.',
      },
      {
        name: 'LSS 4.0',
        description:
          'A dynamic methodology using emotional intelligence and analytical tools to drive organizational transformation and personal development.',
      },
      {
        name: 'Leadership Development for Human Resources (LDHR)',
        description:
          'An innovative program for future strategic HR leaders, focusing on developing the skills needed to transform HR into a strategic business partner.',
      },
    ],
    conclusion:
      'With a passion for transforming small and medium businesses, Rajesh has worked across 28 countries, leaving an indelible mark on the global entrepreneurial landscape. His dedication to empowering businesses and his innovative approach to growth have made him a catalyst for transformation worldwide.',
    cta: 'Embark on a journey of Growth with Rajesh Tedla (Raj)',
    linkedinCta: 'Connect with Rajesh Tedla (Raj) on LinkedIn',
    certifications: {
      businessCoach: [
        'Six Sigma Black Belt',
        'John Maxwell Certified Coach',
        'Professional Behaviors Analyst (DISC)',
        'Professional Values Analyst',
        'Professional TriMetrix HD Analyst',
        'Professional DNA Analyst',
        'Professional Emotional Quotient Analyst',
        'Certified Facilitator of The Coaching Clinic for Managers',
        'Certified Facilitator of Innovative Problem Solving',
      ],
      trainTheTrainer: [
        'Lean and Six Sigma',
        'Change Acceleration Process',
        'Innovative Problem Solving',
        'Leadership Development',
        'Strategic Planning',
        'Process Improvement',
        'Team Building',
        'Performance Management',
      ],
    },
    education: [
      {
        degree: 'DBA (Doctorate in Business Administration)',
        specialization: 'Entrepreneurship Growth and Success',
        status: 'In Progress',
      },
      {
        degree: 'MBA',
        specialization: 'Strategy and Management',
      },
      {
        degree: 'MS',
        specialization: 'Industrial Engineering',
      },
      {
        degree: 'BE',
        specialization: 'Mechanical Engineering',
      },
      {
        degree: 'Diploma',
        specialization: 'Various Leadership and Coaching Programs',
      },
    ],
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

              {/* Three Rounded Contact Buttons in a Row */}
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

                <a
                  href={member.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
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

            {/* Programs Section */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1c2f1e] mb-8">
                Transformational Programs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {member.programs.map((program, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg border border-[#ebe6dc] bg-[#f9f8f6] hover:bg-white transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-[#1c2f1e] mb-3">
                      {program.name}
                    </h3>
                    <p className="text-sm text-[#555853] leading-relaxed">{program.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Focus Areas */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1c2f1e] mb-8">
                Focus Areas
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-6 rounded-lg border border-[#ebe6dc] bg-[#f9f8f6]">
                  <div className="w-16 h-16 mx-auto mb-3 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">e</span>
                  </div>
                  <p className="text-sm font-semibold text-[#555853]">entrepreneur's EDGE</p>
                </div>
                <div className="text-center p-6 rounded-lg border border-[#ebe6dc] bg-[#f9f8f6]">
                  <div className="w-16 h-16 mx-auto mb-3 bg-red-500/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-600">e</span>
                  </div>
                  <p className="text-sm font-semibold text-[#555853]">
                    EGA Entrepreneur Growth Alliance™
                  </p>
                </div>
                <div className="text-center p-6 rounded-lg border border-[#ebe6dc] bg-[#f9f8f6]">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gray-800/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-800">e</span>
                  </div>
                  <p className="text-sm font-semibold text-[#555853]">
                    EGOS Entrepreneurial Growth Operating System™
                  </p>
                </div>
                <div className="text-center p-6 rounded-lg border border-[#ebe6dc] bg-[#f9f8f6]">
                  <div className="w-16 h-16 mx-auto mb-3 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-purple-600">TTI</span>
                  </div>
                  <p className="text-sm font-semibold text-[#555853]">TTI Success Insights</p>
                  <p className="text-xs text-[#9da496] mt-1">Value Added Associate</p>
                  <p className="text-xs text-[#9da496]">Authorized Provider</p>
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1c2f1e] mb-8">
                Business Coach Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-3">
                    {member.certifications.businessCoach.map((cert, index) => (
                      <li key={index} className="flex items-start gap-3 text-base text-[#555853]">
                        <span className="mt-2 w-2 h-2 rounded-full bg-red-600 flex-shrink-0" />
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1c2f1e] mb-4">
                    Train-the-Trainer Certifications
                  </h3>
                  <ul className="space-y-3">
                    {member.certifications.trainTheTrainer.map((cert, index) => (
                      <li key={index} className="flex items-start gap-3 text-base text-[#555853]">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1c2f1e] mb-8">
                Training & Education
              </h2>
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
                      {edu.status && (
                        <span className="inline-block mt-2 text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded">
                          {edu.status}
                        </span>
                      )}
                    </div>
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
