"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Users } from "lucide-react";

const events = [
    {
        id: 1,
        title: "Digital Transformation Summit 2025",
        date: "March 15-17, 2025",
        location: "New York, NY",
        description: "Join industry leaders and innovators as we explore the future of digital transformation in consulting. Discover cutting-edge strategies, emerging technologies, and proven methodologies that drive business success.",
        attendees: "500+ Attendees",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
        highlights: [
            "Keynote speakers from Fortune 500 companies",
            "Interactive workshops and masterclasses",
            "Networking with industry pioneers"
        ]
    },
    {
        id: 2,
        title: "Strategic Leadership Forum",
        date: "June 8-10, 2025",
        location: "San Francisco, CA",
        description: "An exclusive gathering focused on strategic consulting excellence and leadership development. Learn from top consultants about driving organizational change and creating lasting impact in today's competitive landscape.",
        attendees: "300+ Attendees",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
        highlights: [
            "C-suite executive panels",
            "Case study presentations",
            "Private consulting sessions"
        ]
    }
];

export default function EventsSection() {
    return (
        <section className="py-20 md:py-32 bg-background overflow-hidden relative z-30">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Upcoming Session Dates
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Let's discuss your unique business challenges and how we can develop tailored solutions that lead to real results.
                    </p>
                </motion.div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                             <motion.div
                                 whileHover={{ y: -6 }}
                                 transition={{ duration: 0.4, ease: "easeOut" }}
                                 className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-gray-200/50"
                             >
                                {/* Event Image */}
                                <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.6 }}
                                        className="w-full h-full"
                                    >
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>

                                     

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Event Content */}
                                <div className="p-6 sm:p-8">
                                     {/* Date & Location */}
                                     <div className="flex flex-wrap gap-4 mb-5">
                                         <motion.div
                                             whileHover={{ x: 3 }}
                                             className="flex items-center gap-2 text-sm text-gray-600"
                                         >
                                             <Calendar className="w-4 h-4 text-gray-700" />
                                             <span className="font-medium">{event.date}</span>
                                         </motion.div>
                                         <motion.div
                                             whileHover={{ x: 3 }}
                                             className="flex items-center gap-2 text-sm text-gray-600"
                                         >
                                             <MapPin className="w-4 h-4 text-gray-700" />
                                             <span className="font-medium">{event.location}</span>
                                         </motion.div>
                                     </div>

                                     {/* Title */}
                                     <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 leading-tight group-hover:text-gray-700 transition-colors duration-300">
                                         {event.title}
                                     </h3>

                                    {/* Description */}
                                    {/* <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                                        {event.description}
                                    </p> */}

                                     {/* Highlights */}
                                     <ul className="space-y-3 mb-6">
                                         {event.highlights.map((highlight, idx) => (
                                             <motion.li
                                                 key={idx}
                                                 initial={{ opacity: 0, x: -20 }}
                                                 whileInView={{ opacity: 1, x: 0 }}
                                                 viewport={{ once: true }}
                                                 transition={{ duration: 0.4, delay: idx * 0.1 }}
                                                 className="flex items-start gap-3 text-sm"
                                             >
                                                 <motion.div
                                                     whileHover={{ rotate: 90 }}
                                                     transition={{ duration: 0.3 }}
                                                     className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-700 flex-shrink-0"
                                                 />
                                                 <span className="text-gray-600">{highlight}</span>
                                             </motion.li>
                                         ))}
                                     </ul>

                                     {/* Footer */}
                                     <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                                         <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                                             <Users className="w-4 h-4 text-gray-700" />
                                             <span>{event.attendees}</span>
                                         </div>

                                         <motion.button
                                             whileHover={{ x: 5 }}
                                             whileTap={{ scale: 0.95 }}
                                             className="flex items-center gap-2 text-sm font-semibold text-gray-900 group/btn hover:text-gray-600 transition-colors duration-300 border-b border-transparent hover:border-gray-300 pb-1"
                                         >
                                             <span>Register Now</span>
                                             <ArrowRight className="w-4 h-4" />
                                         </motion.button>
                                     </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}