"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
const teamMembers = [
  {
    name: "Rajesh (Raj) Tedla",
    role: "CEO and Chief Transformation Coach",
    image: "https://vrtmanagementgroup.com/wp-content/uploads/2022/09/Rajesh-Tedla_VRT-180x180.png",
    bio: "Raj is a certified business coach and business transformation consultant with over 32 years of experience.",
    social: { linkedin: "#", twitter: "#", email: "sarah@company.com" },
  },
  {
    name: "Drew T Jackson",
    role: "Principal Consultant",
    image: "https://vrtmanagementgroup.com/wp-content/uploads/2023/01/Drew-T-Jackson_VRT-Management-180x180.jpg",
    bio: "Drew is a John C. Maxwell certified coach. He is competent in utilizing tools and training that help increase revenue, boost morale, and retain top talent for entrepreneurs.",
    social: { linkedin: "#", twitter: "#", email: "michael@company.com" },
  },
  {
    name: "Filson Thomas",
    role: "Principal Consultant",
    image: "https://vrtmanagementgroup.com/wp-content/uploads/2023/01/Filson-180x180.png",
    bio: "Filson is a Transformation Coach and helps organizations impact the world by inspiring them to create true missions, develop dynamic leadership, and nurture intentional growth. ",
    social: { linkedin: "#", twitter: "#", email: "emily@company.com" },
  },
  {
    name: "Dr. Ajoy Basu",
    role: "Principal Consultant",
    image: "https://vrtmanagementgroup.com/wp-content/uploads/2023/01/Ajoy-Basu_VRT-Management-180x180.jpeg",
    bio: "Dr. Ajoy is an expert in enabling organizations accelerate the launch of successful products. He focuses on identifying the unmet customer to develop a minimally viable product and then rapidly iterating to access the mass market",
    social: { linkedin: "#", twitter: "#", email: "david@company.com" },
  },
  {
    name: "Carl Neilson",
    role: "Principal Consultant",
    image: "https://vrtmanagementgroup.com/wp-content/uploads/2023/01/Carl-Neilson_VRT-Management-180x180.jpeg",
    bio: "Carl is a Certified Professional Behavioral Analyst (DISC), Professional Motivators Analyst, Professional TriMetrix HD Analyst and is a certified facilitator of The Coaching Clinic for Managers.",
    social: { linkedin: "#", twitter: "#", email: "olivia@company.com" },
  },
  {
    name: "Don Gleason",
    role: "Principal Consultant",
    image: "https://vrtmanagementgroup.com/wp-content/uploads/2023/01/Don-Gleason-180x180.jpg",
    bio: "Don believes that experiences are fundamental to developing leadership. His mission is to support entrepreneurs and small-businesses to achieve new heights through leadership capabilities.",
    social: { linkedin: "#", twitter: "#", email: "james@company.com" },
  },
];

export default function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--color-bain-red)] to-[var(--color-bain-red-dark)] bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            The brilliant minds behind our success, united by passion and purpose
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="relative overflow-hidden group cursor-pointer border border-border shadow-sm hover:shadow-md transition-shadow duration-300 bg-card p-0 gap-0">
                <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    animate={{ scale: hoveredIndex === index ? 1.05 : 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      priority={index < 3}
                    />
                  </motion.div>
                  
                  {/* Gradient overlay aligned to brand */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold ">{member.name}</h3>
                    <p className="text-xs sm:text-sm text-[var(--color-bain-red)] font-semibold tracking-wide">
                      {member.role}
                    </p>
                    <motion.p
                      className="text-sm text-gray-100/90 mb-4"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        height: hoveredIndex === index ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      /** Always show on mobile for better UX */
                      style={{
                        opacity: typeof window !== "undefined" && window.innerWidth < 640 ? 1 : undefined,
                        height: typeof window !== "undefined" && window.innerWidth < 640 ? "auto" : undefined,
                      }}
                    >
                      {member.bio}
                    </motion.p>
                    
                    {/* Social links */}
                    <motion.div
                      className="flex gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        y: hoveredIndex === index ? 0 : 10,
                      }}
                      transition={{ duration: 0.3 }}
                      /** Always visible on mobile */
                      style={{
                        opacity: typeof window !== "undefined" && window.innerWidth < 640 ? 1 : undefined,
                        transform: typeof window !== "undefined" && window.innerWidth < 640 ? "translateY(0)" : undefined,
                      }}
                    >
                      <a
                        href={member.social.linkedin}
                        className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center transition-colors border border-white/10"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center transition-colors border border-white/10"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center transition-colors border border-white/10"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
       {/* Meet the Team Section */}
       {otherMembers.length > 0 && (
          <section className="mt-16 sm:mt-20">
            <h2 className="mb-8 text-center text-2xl font-serif font-semibold text-[#1c2f1e] sm:text-3xl">
              Meet the Team
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {otherMembers.map((otherMember) => (
                <Link
                  key={otherMember.slug}
                  href={`/our-team/${otherMember.slug}`}
                  className="flex flex-col items-center rounded-[28px] border border-[#ebe6dc] bg-white p-6 text-center shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] hover:-translate-y-1 cursor-pointer"
                >
                  <div className="relative mb-6 h-40 w-40 overflow-hidden rounded-[24px] bg-[#f4f1ea]">
                    <Image
                      src={otherMember.image}
                      alt={otherMember.name}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#9da496]">
                    {otherMember.role}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-[#1f3422]">{otherMember.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#555853]">{otherMember.bio}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
    </section>
  );
}