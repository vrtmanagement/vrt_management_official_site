import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Linkedin, Mail } from 'lucide-react'

const page = () => {
  const member = {
    name: 'Don Gleason',
    role: 'Principal Consultant',
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=640&q=80',
    contact: {
      email: 'don@vrtmanagementgroup.com',
      linkedin: 'https://www.linkedin.com/in/dongleason',
    },
    missionStatement: 'To support individuals and organizations to Achieve New Heights in their performance through personal growth in their leadership capabilities.',
    intro: {
      heading: '40 Years of Leadership Excellence',
      content:
        'During my 40 years of experience growing and advancing through leadership positions in the military and private sector, I focused on helping my teams grow to their potential. I gave them the challenge, fostered their development, provided the resources, cleared the path, and then encouraged their success. Each day I loved seeing each individual\'s thirst for personal growth and success increase as they achieved many personal and team awards plus top inspection ratings. With detailed two-way feedback and discussion, we each grew.',
    },
    sections: [
      {
        heading: 'A Molding Leadership Style',
        content:
          'Through these processes and experiences, broadened by multiple academic and professional certifications, I have molded my leadership style. I believe experiences are fundamental to developing leadership, but each person uses them uniquely to mold their personality and character. As each of my teams developed their style, they took on new opportunities to achieve success.',
      },
      {
        heading: 'Partnership for Growth',
        content:
          'I will leverage these experiences and my continued training to foster your growth. Together we can tackle any challenge or obstacle that is holding you or your organization back from achieving new heights of growth and success. That is why I joined the John Maxwell Team in 2015. John and his awesome mentorship team have a proven method of speaking, training and coaching that fosters my growth so I can help you.',
      },
    ],
    leadershipApproach: [
      {
        title: 'Challenge',
        description: 'Provide meaningful challenges that stretch capabilities and drive growth',
      },
      {
        title: 'Development',
        description: 'Foster continuous development through targeted training and mentorship',
      },
      {
        title: 'Resources',
        description: 'Ensure teams have the tools and resources needed to succeed',
      },
      {
        title: 'Clear the Path',
        description: 'Remove obstacles and barriers that impede progress and success',
      },
      {
        title: 'Encourage Success',
        description: 'Celebrate achievements and encourage continued excellence',
      },
      {
        title: 'Two-Way Feedback',
        description: 'Foster open dialogue and detailed feedback for mutual growth',
      },
    ],
    experience: [
      {
        sector: 'Military Leadership',
        description: 'Extensive leadership experience in military settings with proven track record of team development and top inspection ratings',
      },
      {
        sector: 'Private Sector',
        description: 'Advanced through leadership positions in private sector organizations, applying military leadership principles to business success',
      },
    ],
    affiliations: [
      {
        name: 'John Maxwell Team',
        role: 'Member since 2015',
        description: 'Part of the world\'s leading leadership development organization, utilizing proven methods of speaking, training, and coaching',
      },
    ],
    expertise: [
      'Leadership Development',
      'Team Building',
      'Performance Improvement',
      'Personal Growth Coaching',
      'Organizational Development',
      'Strategic Leadership',
      'Mentorship & Training',
      'Achievement Coaching',
    ],
    achievements: [
      {
        title: 'Top Inspection Ratings',
        description: 'Consistently achieved top inspection ratings through effective leadership and team development',
      },
      {
        title: 'Team & Individual Awards',
        description: 'Led teams to numerous personal and team awards, demonstrating exceptional leadership capabilities',
      },
      {
        title: '40 Years of Experience',
        description: 'Four decades of leadership experience across military and private sector environments',
      },
    ],
    conclusion:
      'With 40 years of leadership experience spanning military and private sector environments, Don Gleason brings a proven approach to developing leaders and teams. His mission to help individuals and organizations "Achieve New Heights" through personal growth in leadership capabilities, combined with his affiliation with the John Maxwell Team, makes him an invaluable partner for those seeking to unlock their full potential.',
    cta: 'Partner with Don Gleason to Achieve New Heights in Leadership',
    linkedinCta: 'Connect with Don Gleason on LinkedIn',
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
            {/* Mission Statement Section */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-serif font-semibold text-[#1c2f1e] italic leading-relaxed">
                  "{member.missionStatement}"
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

            {/* Leadership Approach Section */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1c2f1e] mb-8">
                Leadership Approach
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {member.leadershipApproach.map((approach, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg border border-[#ebe6dc] bg-[#f9f8f6] hover:bg-white transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-[#1c2f1e] mb-2">{approach.title}</h3>
                    <p className="text-base text-[#555853] leading-relaxed">{approach.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1c2f1e] mb-8">
                Experience & Background
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {member.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg border border-[#ebe6dc] bg-[#f9f8f6] hover:bg-white transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-[#1c2f1e] mb-2">{exp.sector}</h3>
                    <p className="text-base text-[#555853] leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Achievements Section */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1c2f1e] mb-8">
                Key Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

            {/* Affiliations Section */}
            <div className="rounded-[28px] border border-[#ebe6dc] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1c2f1e] mb-8">
                Professional Affiliations
              </h2>
              <div className="space-y-4">
                {member.affiliations.map((affiliation, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-lg border border-[#ebe6dc] bg-[#f9f8f6] hover:bg-white transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-600/10 flex items-center justify-center">
                      <span className="text-lg">✓</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-[#1c2f1e]">{affiliation.name}</p>
                      {affiliation.role && (
                        <p className="text-sm text-red-600 mt-1">{affiliation.role}</p>
                      )}
                      {affiliation.description && (
                        <p className="text-sm text-[#555853] mt-2 leading-relaxed">
                          {affiliation.description}
                        </p>
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