'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Linkedin, Mail, Award, GraduationCap, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const page = () => {
  const member = {
    name: 'Filson Thomas',
    role: 'Transformation Coach',
    image: '/our-team/Filson-thomas.jpg',
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
    <main className="bg-gradient-to-b from-gray-50 via-white to-gray-50 min-h-screen">
      {/* Hero Section - Clean Professional Design */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30L30 0L90 0L120 30L120 90L90 120L30 120L0 90Z' stroke='%23374151' stroke-width='2' fill='none' opacity='0.15'/%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' stroke='%23374151' stroke-width='1.5' fill='none' opacity='0.12'/%3E%3Cpath d='M90 0L120 30L90 60L60 30Z' stroke='%23374151' stroke-width='1.5' fill='none' opacity='0.12'/%3E%3Cpath d='M30 60L60 90L30 120L0 90Z' stroke='%23374151' stroke-width='1.5' fill='none' opacity='0.12'/%3E%3Cpath d='M90 60L120 90L90 120L60 90Z' stroke='%23374151' stroke-width='1.5' fill='none' opacity='0.12'/%3E%3Cpath d='M60 30L90 60L60 90L30 60Z' stroke='%23374151' stroke-width='1.5' fill='none' opacity='0.12'/%3E%3C/svg%3E")`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'repeat',
          backgroundSize: '300px 300px'
        }}
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-white/95 to-red-50/40" />
        </div>

        {/* Subtle Animated Accents */}
        <motion.div
          className="absolute top-40 right-20 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Content - Clean Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 lg:gap-20 items-center">
            {/* Left: Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col items-center lg:items-start"
            >
              {/* Profile Image */}
              <div className="relative w-full max-w-[380px] mb-8">
                {/* Subtle Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-100 via-red-50 to-transparent blur-3xl opacity-30" />
                
                {/* Image Container */}
                <div className="relative aspect-square rounded-full overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.12)]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover"
                    priority
                  />
                  {/* Subtle Overlay on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5"
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                {/* Decorative Accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-600 rounded-full opacity-10 blur-2xl" />
              </div>
            </motion.div>

            {/* Right: Name, Role & Intro */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col justify-center"
            >
              {/* Name and Role */}
              <div className="text-center lg:text-left w-full mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-lora font-bold text-[#1c2f1e] leading-tight">
                  {member.name}
                </h1>
                <div className="inline-flex items-center gap-3 mb-6">
                  <p className="text-lg font-semibold text-red-700">{member.role}</p>
                </div>
              </div>

              {/* Quote */}
              <div className="relative mb-8">
                <p className="text-xl sm:text-2xl font-lora italic text-[#1c2f1e] leading-relaxed">
                  "{member.quote}"
                </p>
              </div>

              {/* Intro Content */}
              <div className="relative mb-8">
                <h2 className="text-2xl sm:text-3xl font-lora font-bold text-[#1c2f1e] mb-4 leading-tight">
                  {member.intro.heading}
                </h2>
                <p className="text-base sm:text-lg text-[#555853] leading-relaxed">
                  {member.intro.content}
                </p>
                
                {/* Decorative Line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="h-1 bg-gradient-to-r from-red-600 via-red-400 to-transparent mt-6 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content - Full Width */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-12">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px',
          }}
        />

        <div className="space-y-8 relative z-10">
          {/* Main Content Sections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-[32px] border-2 border-[#ebe6dc] bg-white/95 backdrop-blur-sm p-8 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:shadow-[0_25px_80px_rgba(15,23,42,0.15)] transition-all duration-300 overflow-hidden"
          >
            {/* Decorative Background Element */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-40 -ml-48 -mb-48" />
            
            <div className="relative z-10 space-y-10">
              {member.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={index > 0 ? 'pt-10 border-t border-gradient-to-r from-transparent via-[#ebe6dc] to-transparent' : ''}
                >
                  {section.heading && (
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 mt-2">
                        <div className="w-3 h-3 rounded-full bg-red-600" />
                      </div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-lora font-bold text-[#1c2f1e]">
                        {section.heading}
                      </h2>
                    </div>
                  )}
                  <p className="text-base sm:text-lg text-[#555853] leading-relaxed pl-7">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="pt-6 ">
                <p className="text-xl font-bold text-[#1c2f1e] mb-6 font-lora">{member.cta}</p>
                <motion.a
                  href={member.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>{member.linkedinCta}</span>
                  <span className="text-xl">→</span>
                </motion.a>
              </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

export default page