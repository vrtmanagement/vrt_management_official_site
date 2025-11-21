'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Linkedin, Mail, Instagram, Check, Book, GraduationCap, Award, Users, Target, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const page = () => {
  const member = {
    name: 'Rajesh Tedla',
    role: 'CEO, VRT Management Group, LLC',
    image: '/our-team/est.jpg',
    contact: {
      email: 'coachrajesh@vrt9.com',
      linkedin: 'https://www.linkedin.com/in/rajeshtedla',
    },
    quote: 'Empowering entrepreneurs and businesses to achieve unprecedented growth through transformative leadership and strategic innovation.',
    intro: {
      heading: 'Journey with Rajesh Tedla (Raj) toward Unprecedented Business Growth',
      content:
        'In a world defined by constant change, only a few possess the vision and acumen to not just navigate, but to thrive amidst the shifting tides. Meet Rajesh Tedla (Raj), a true luminary whose remarkable career spanning over 36 years stands as a testament to unwavering dedication and unparalleled expertise. Raj is not just a seasoned professional; he is a driving force behind transformative growth, a visionary CEO, and a trusted advisor to both emerging entrepreneurs and small business owners.',
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
          'Raj’s influence extends far beyond boardrooms and businesses. He currently holds independent director roles on the boards of two rapidly expanding small businesses, a testament to his deep insights into fostering growth. But his impact goes even further, as he has personally coached and guided over 1,420+ entrepreneurs and small business owners globally. His guidance isn’t just theoretical - it’s transformative, propelling these individuals toward profitable scalability and lasting success.',
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
            {/* Left: Profile Image & Contact */}
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
                    style={{ objectPosition: 'center 20%' }}
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

            {/* Right: Name, Role & Quote Section */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col justify-center"
            >
              {/* Name and Role */}
              <div className="text-center lg:text-left w-full mb-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-lora font-bold text-[#1c2f1e] mb-4 leading-tight">
                  {member.name}
                </h1>
                <div className="inline-flex items-center gap-3  mb-6">
                  <p className="text-lg font-semibold text-red-700">{member.role}</p>
                </div>
              </div>

              {/* Quote */}
              <div className="relative">
                
                {/* Quote Text */}
                <div className="relative">
                <div className="relative mb-8">
                <p className="text-xl sm:text-2xl font-lora italic text-[#1c2f1e] leading-relaxed">
                  "{member.quote}"
                </p>
              </div>
                  
                  {/* Decorative Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="h-1 bg-gradient-to-r from-red-600 via-red-400 to-transparent mt-8 rounded-full"
                  />
                </div>

              {/* Contact Buttons */}
              <div className="flex gap-4 justify-center lg:justify-start mt-8">
                <motion.a
                  href={`mailto:${member.contact.email}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                  title="Email"
                >
                  <Mail className="w-6 h-6 text-white" />
                </motion.a>

                <motion.a
                  href={member.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                  title="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </motion.a>
              </div>

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

          {/* Introductory Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[32px] border-2 border-[#ebe6dc] bg-white/95 backdrop-blur-sm p-8 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:shadow-[0_25px_80px_rgba(15,23,42,0.15)] transition-all duration-300 overflow-hidden"
          >
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-30 -mr-32 -mt-32" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-12 bg-gradient-to-b from-red-600 to-red-400 rounded-full" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-lora font-bold text-[#1c2f1e]">
                  {member.intro.heading}
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#555853] leading-relaxed pl-4">
                {member.intro.content}
              </p>
            </div>
          </motion.div>

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
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 mt-2">
                      <div className="w-3 h-3 rounded-full bg-red-600" />
                    </div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-lora font-bold text-[#1c2f1e]">
                      {section.heading}
                    </h2>
                  </div>
                  <p className="text-base sm:text-lg text-[#555853] leading-relaxed pl-7">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Programs Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-[32px] border-2 border-[#ebe6dc] bg-gradient-to-br from-white to-red-50/30 p-8 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:shadow-[0_25px_80px_rgba(15,23,42,0.15)] transition-all duration-300 overflow-hidden"
          >
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-lora font-bold text-[#1c2f1e]">
                  Transformational Programs
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {member.programs.map((program, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#ebe6dc] shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-red-600" />
                      </div>
                      <h3 className="text-lg font-lora font-bold text-[#1c2f1e] leading-tight">
                        {program.name}
                      </h3>
                    </div>
                    <p className="text-base text-[#555853] leading-relaxed pl-5">{program.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-[32px] border-2 border-[#ebe6dc] bg-white/95 backdrop-blur-sm p-8 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:shadow-[0_25px_80px_rgba(15,23,42,0.15)] transition-all duration-300 overflow-hidden"
          >
            {/* Decorative Background Element */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-red-50/50 to-transparent" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-8 h-8 text-red-600" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-lora font-bold text-[#1c2f1e]">
                  Focus Areas
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#555853] leading-relaxed mb-8 pl-12">
                Raj's passion and focus are on transforming small and medium businesses and their executives who want to take their business and their lives to the next level and has been actively working with business leaders and clients across 28 countries. His current focus areas are:
              </p>
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full max-w-3xl h-auto rounded-2xl overflow-hidden shadow-xl border-2 border-[#ebe6dc]"
                >
                  <Image
                    src="/our-team/focus.png"
                    alt="Focus areas"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>


          {/* Conclusion & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-[32px] border-2 border-red-200 bg-gradient-to-br from-red-50/50 via-white to-red-50/30 p-8 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:shadow-[0_25px_80px_rgba(15,23,42,0.15)] transition-all duration-300 overflow-hidden"
          >
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-5">
            </div>
            
            <div className="relative z-10">
              <p className="text-base sm:text-lg text-[#555853] leading-relaxed mb-8">
                {member.conclusion}
              </p>
              <div className="pt-6 border-t border-red-200">
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
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative rounded-[32px] border-2 border-[#ebe6dc] bg-white/95 backdrop-blur-sm p-8 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:shadow-[0_25px_80px_rgba(15,23,42,0.15)] transition-all duration-300 overflow-hidden"
          >
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-50 to-transparent rounded-full blur-3xl opacity-30 -mr-48 -mt-48" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <Award className="w-8 h-8 text-red-600" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-lora font-bold text-[#1c2f1e]">
                  Business Coach Certifications
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#ebe6dc]">
                  <ul className="space-y-4">
                    {member.certifications.businessCoach.map((cert, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="flex items-start gap-3 text-base text-[#555853]"
                      >
                        <span className="mt-2 w-2.5 h-2.5 rounded-full bg-red-600 flex-shrink-0 shadow-sm" />
                        <span className="leading-relaxed">{cert}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#ebe6dc]">
                  <div className="flex items-center gap-2 mb-6">
                    <Users className="w-5 h-5 text-red-600" />
                    <h3 className="text-xl font-lora font-bold text-[#1c2f1e]">
                      Train-the-Trainer Certifications
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {member.certifications.trainTheTrainer.map((cert, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="flex items-start gap-3 text-base text-[#555853]"
                      >
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{cert}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative rounded-[32px] border-2 border-[#ebe6dc] bg-gradient-to-br from-white to-gray-50/50 p-8 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(15,23,42,0.12)] hover:shadow-[0_25px_80px_rgba(15,23,42,0.15)] transition-all duration-300 overflow-hidden"
          >
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <GraduationCap className="w-8 h-8 text-red-600" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-lora font-bold text-[#1c2f1e]">
                  Training & Education
                </h2>
              </div>
              <div className="space-y-6">
                {member.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                    className={`flex items-start gap-5 bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-[#ebe6dc] hover:shadow-md transition-all duration-300 ${index > 0 ? 'mt-6' : ''}`}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center border-2 border-red-200">
                        <GraduationCap className="w-6 h-6 text-red-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-bold text-[#1c2f1e] leading-tight font-lora">{edu.degree}</p>
                      {edu.specialization && (
                        <p className="text-base text-[#555853] mt-2 leading-relaxed">{edu.specialization}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

export default page
