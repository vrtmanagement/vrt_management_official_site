import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Linkedin, Mail, Instagram, Check, Book, GraduationCap } from 'lucide-react'

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
      heading: 'Journey with Rajesh Tedla (Raj) toward Unprecedented Business Growth',
      content:
        'In a world defined by constant change, only a few possess the vision and acumen to not just navigate, but to thrive amidst the shifting tides. Meet Rajesh Tedla (Raj), a true luminary whose remarkable career spanning over 35+ years stands as a testament to unwavering dedication and unparalleled expertise. Raj is not just a seasoned professional; he is a driving force behind transformative growth, a visionary CEO, and a trusted advisor to both emerging entrepreneurs and small business owners.',
    },
    sections: [
      {
        heading: 'A Visionary CEO and Trusted Advisor',
        content:
          'As the CEO of VRT Management Group, LLC, Raj’s leadership has orchestrated triumphs that redefine success. His unparalleled expertise in strategic planning, people transformation, and process refinement has guided numerous businesses towards unprecedented scales of achievement. With a fervent belief in the potential of small businesses, Raj serves as a beacon of inspiration and insight, illuminating paths toward enduring prosperity.',
      },
      {
        heading: 'Empowering Entrepreneurship on a Global Scale',
        content:
          'Raj’s influence extends far beyond boardrooms and businesses. He currently holds independent director roles on the boards of two rapidly expanding small businesses, a testament to his deep insights into fostering growth. But his impact goes even further, as he has personally coached and guided over 1376+ entrepreneurs and small business owners globally. His guidance isn’t just theoretical - it’s transformative, propelling these individuals toward profitable scalability and lasting success.',
      },
      {
        heading: 'Designing Tomorrow: Architect of Transformational Programs',
        content:
          'Raj’s insatiable hunger for knowledge has driven him to master the intricate art of strategic planning and business expansion. Drawing upon this wealth of wisdom, he has meticulously crafted groundbreaking growth initiatives tailored exclusively for small and medium businesses led by visionaries. His innovative programs, the Entrepreneur Growth AllianceTM (EGA) and the Entrepreneur Growth Operating SystemTM (EGOS), are living proof of his commitment to innovation and adaptability.',
      },
      {
        heading: 'A Respected Authority and Compelling Speaker',
        content:
          'Raj’s expertise has earned him a prominent seat at prestigious business forums, including Stanford University’s esteemed entrepreneurship development programs. His unique gift for distilling complex concepts into actionable insights has solidified his reputation as an industry authority. His wisdom serves as a guiding star for those in pursuit of transformative growth.',
      },
      {
        heading: 'A Legacy Woven in Excellence',
        content:
          'Prior to founding VRT Management Group, LLC, Raj held the esteemed role of Senior Vice- President/Marketing Growth Leader at GE Capital. His 12-plus years at GE were a testament to his exceptional leadership and unyielding commitment to excellence. Through pioneering global initiatives, he redefined processes, fostered innovation, and generated millions in additional revenue.',
      },
      {
        heading: 'A Multifaceted Education: A Scholar\'s Pursuit',
        content:
          'Raj’s journey of lifelong learning is rooted in a bachelor’s degree in mechanical engineering and a master’s degree in industrial engineering, forming the bedrock of his technical prowess. His MBA in strategy and management complements this foundation, while his collection of 22 certifications spans disciplines from human resources psychology to operational excellence.',
      },
      {
        heading: 'Crafting a Legacy: Pursuit of a Doctorate',
        content:
          'Raj’s dedication to personal and professional growth is exemplified by his pursuit of a Doctorate in Business Administration (DBA), specializing in Entrepreneurship Growth and Success. This academic journey underscores his commitment to honing his abilities to serve the business community even more effectively.',
      },
    ],
    programs: [
      {
        name: 'EGOS: Entrepreneur Growth Operating System™',
        description:
          'A unique program designed to develop the next generation of entrepreneurs and businesses who successfully transform their people and businesses for profitable growth.',
      },
      {
        name: 'Executive Leadership Team (ELT) Coaching',
        description:
          'A critical coaching program to transform CEO/Business owner and his/her C Suite executive leaders reach their full growth potential with tangible results and measurable effectiveness.'
      },
      {
        name: 'Executive Excellence Coaching',
        description:
          'A critical coaching program to transform C Suite, executive leaders, and managers reach their fullpotential one leader at a time.',
      },
      {
        name: 'EntrepreneurEDGE©',
        description:
          'A comprehensive program designed to give entrepreneurs the competitive edge they need to succeed in today\'s dynamic business environment.',
      },
      {
        name: 'Entrepreneur Growth Alliance™',
        description:
          'A collaborative platform that brings together entrepreneurs, providing resources, networking opportunities, and strategic support for business growth.',
      },
      {
        name: 'Integrated Problem Solving',
        description:
          'An innovative problem-solving method to help companies deliver faster, more successful businessresults.',
      },
      {
        name: 'LSS 4.0™',
        description:
          'A dynamic methodology to help companies harness the power of emotional intelligence and analytical tools to solve complex business problems.',
      },
      {
        name: 'Leadership Development for Human Resources (LDHR)',
        description:
          'An innovative program for future strategic HR leaders, focusing on developing the skills needed to transform HR into a strategic business partner.',
      },
    ],
    conclusion:
      'Rajesh Tedla (Raj) isn’t just a name, it’s a promise of growth, transformation, and success. With a potent blend of experience, expertise, and an unwavering commitment to progress, Raj stands as the catalyst that can propel individuals and organizations to their zenith. Discover the transformative power of his insights and experience by joining him on a journey toward unparalleled business growth and success. Connect with Rajesh Tedla (Raj) on LinkedIn and be part of a community that’s reshaping the landscape of business. Your path to success starts here.',
    cta: 'Embark on a journey of Growth with Rajesh Tedla (Raj)',
    linkedinCta: 'Connect with Rajesh Tedla (Raj) on LinkedIn',
    certifications: {
      businessCoach: [
        'GE / General Electric Certified Six Sigma Black Belt, Master Black Belt & Quality Leader',
        'John Maxwell Certified Coach, Trainer, and Speaker',
        'Certified Professional Behaviors Analyst',
        'Certified Professional Values Analyst',
        'Certified Professional TriMetrix Analyst',
        'Certified Professional DNA Analyst',
        'Certified Emotional Quotient Analyst',
        'Certified facilitator for Coach Clinic',
        'Certified facilitator for Career Coaching',
      ],
      trainTheTrainer: [
        'Lean and Six Sigma',
        'Change Acceleration Process',
        'Innovative Problem Solving',
        'Net Promoter Score and Voice of The Customer',
        'Facilitation Skills',
        'Strategic Marketing',
        'Job Benchmarking: “Hiring for Fit” solutions',
        'Behavioral Interviewing',
        'Job Benchmarking'
      ],
    },
    education: [
      {
        degree: 'Doctor of Business Administration (DBA)',
        specialization: 'Swiss School of Business and Management',
      },
      {
        degree: 'MBA Management',
        specialization: 'University of Illinois at Urbana-Champagne',
      },
      {
        degree: 'MS Industrial Technology',
        specialization: 'Alabama A&M University',
      },
      {
        degree: 'BE Mechanical Engineering',
        specialization: 'Osmania University, Hyderabad, India',
      },
      {
        degree: 'Diploma in Human Relations and Technical Speaking',
        specialization: 'Dale Carnegie Institute',
      },
      {
        degree: 'Core Essentials Coaching Program™',
        specialization: 'Coach University',
      },
      {
        degree: 'The Advanced Corporate Coaching Program™',
        specialization: 'Corporate Coach University',
      },
      {
        degree: 'Attended Several Management and Leadership Training Programs',
        specialization: 'GE Corporate University',
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
                <h1 className="text-2xl sm:text-3xl font-lora font-semibold text-[#1c2f1e] mb-2">
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
                <p className="text-xl sm:text-2xl font-lora font-semibold text-[#1c2f1e] italic leading-relaxed">
                  "{member.quote}"
                </p>
              </div>
            </div>

            {/* Introductory Section */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl sm:text-3xl font-lora font-semibold text-[#1c2f1e] mb-6">
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
                    <h2 className="text-xl sm:text-2xl font-lora font-semibold text-[#1c2f1e] mb-4">
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
              <h2 className="text-2xl sm:text-3xl font-lora font-semibold text-[#1c2f1e] mb-8">
                Transformational Programs
              </h2>
              <div className="space-y-6">
                {member.programs.map((program, index) => (
                  <div
                    key={index}
                    className={`${index > 0 ? 'pt-6 border-t border-gray-300' : ''}`}
                  >
                    <h3 className="text-lg font-lora font-semibold text-[#1c2f1e] mb-2 leading-tight">
                      {program.name}
                    </h3>
                    <p className="text-base text-[#555853] leading-relaxed">{program.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Focus Areas */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl sm:text-3xl font-lora font-semibold text-[#1c2f1e] mb-6">
                Focus Areas
              </h2>
              <p className="text-base sm:text-lg text-[#555853] leading-relaxed mb-8">
                Raj's passion and focus are on transforming small and medium businesses and their executives who want to take their business and their lives to the next level and has been actively working with business leaders and clients across 28 countries. His current focus areas are:
              </p>
              <div className="flex justify-center">
                <div className="relative w-full max-w-3xl h-auto">
                  <Image
                    src="/newsletter/product.png"
                    alt="Focus areas"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
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

            {/* Certifications Section */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl sm:text-3xl font-lora font-semibold text-[#1c2f1e] mb-8">
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
                  <h3 className="text-lg font-lora font-semibold text-[#1c2f1e] mb-4">
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
              <h2 className="text-2xl sm:text-3xl font-lora font-semibold text-[#1c2f1e] mb-8">
                Training & Education
              </h2>
              <div className="space-y-6">
                {member.education.map((edu, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-5 ${index > 0 ? 'pt-6 border-t border-gray-300' : ''}`}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <GraduationCap className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-semibold text-[#1c2f1e] leading-tight">{edu.degree}</p>
                      {edu.specialization && (
                        <p className="text-base text-[#555853] mt-1.5 leading-relaxed">{edu.specialization}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}

export default page
