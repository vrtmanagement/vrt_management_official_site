"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const sampleItems = [
  {
    id: 1,
    category: "Article",
    title: "People",
    description: "Empower your team to achieve extraordinary results. From building high-performing teams to enhancing leadership capabilities, we ensure your people become your greatest asset in driving business success.",
    imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2340&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "Culture and Change",
    title: "Process",
    description: "Say goodbye to inefficiencies. Our tailored process optimization strategies streamline your operations, boost productivity, and ensure your systems scale seamlessly as your business grows.",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Playbook",
    title: "Strategies",
    description: "Create focused growth plans using data-driven insights and market trends. We design strategies tailored to your unique challenges, ensuring steady progress and measurable results.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2340&auto=format&fit=crop",
    cta: "Explore",
  },
];

const EnhancedCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Card className="relative overflow-hidden border-white/10 bg-neutral-900/40 p-0 shadow-sm transition-all duration-300">
        {/* Background Image with Scale Effect */}
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            backgroundImage: item.imageUrl
              ? `url(${item.imageUrl})`
              : "radial-gradient(1200px 500px at -10% -10%, rgba(99,102,241,0.25), transparent 40%), radial-gradient(800px 400px at 110% 110%, rgba(16,185,129,0.25), transparent 45%), linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Enhanced Overlay with Gradient Reveal */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-neutral-950/10 to-neutral-950/60"
          animate={{
            background: isHovered 
              ? "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.2), rgba(0,0,0,0.7))"
              : "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.1), rgba(0,0,0,0.6))"
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Animated Border Ring */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-xl"
          animate={{
            borderColor: isHovered ? "rgba(59, 130, 246, 0.5)" : "rgba(255, 255, 255, 0.1)",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-[6px] rounded-lg border border-white/10" />
          <span className="absolute -inset-px rounded-xl opacity-0 ring-1 ring-emerald-400/60 transition-opacity duration-300 group-hover:opacity-100" />
          
          {/* Corner runners with enhanced animation */}
          <motion.span 
            className="absolute left-4 top-4 h-0.5 w-10 origin-left rounded-full bg-red-400"
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span 
            className="absolute right-4 top-4 h-10 w-0.5 origin-top rounded-full bg-red-400"
            animate={{ scaleY: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          />
          <motion.span 
            className="absolute bottom-4 right-4 h-0.5 w-10 origin-right rounded-full bg-red-400"
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          />
          <motion.span 
            className="absolute bottom-4 left-4 h-10 w-0.5 origin-bottom rounded-full bg-red-400"
            animate={{ scaleY: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          />
        </motion.div>

        {/* Content with Enhanced Animations */}
        <div className="relative flex min-h-72 flex-col justify-end gap-3 p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="rounded-full bg-white/10 text-white">
              {item.category.toUpperCase()}
            </Badge>
          </div>

          <motion.h3 
            className="text-lg font-semibold leading-tight text-white sm:text-xl"
            animate={{
              y: isHovered ? -5 : 0,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {item.title}
          </motion.h3>

          {/* Description with Enhanced Reveal Animation */}
          <motion.p 
            className="line-clamp-3 max-w-prose text-sm text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            {item.description}
          </motion.p>

          {/* CTA Button with Slide Up Animation */}
          {item.cta && (
            <motion.div 
              className="mt-1 flex items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 20,
              }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <motion.button
                className="rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold text-emerald-950 hover:bg-emerald-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.cta}
              </motion.button>
            </motion.div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default function EnhancedCardGrid({ items = sampleItems, title = "Latest Insights" }) {
  return (
    <section className="mx-auto w-full">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="text-xl font-semibold text-white/90 text-center text-red-500">{title}</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <EnhancedCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
