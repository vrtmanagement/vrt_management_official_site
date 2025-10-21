"use client";
import { motion } from "framer-motion";

const assessments = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <path d="M12 6v6l4 2" strokeWidth="2"/>
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
            </svg>
        ),
        title: "TriMetrix HD Assessment",
        description: "Helps you deeply understand how you behave, what drives you, how you think, and what you're capable of, so you can lead with self-awareness, build the right team, and make better decisions faster."
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeWidth="2"/>
                <path d="M13 8H7" strokeWidth="2"/>
                <path d="M17 12H7" strokeWidth="2"/>
            </svg>
        ),
        title: "Emotional Intelligence Assessment",
        description: "Equips you to recognize, manage, and channel emotions, your own and your team's, so you lead with empathy, resolve conflict effectively, and build a culture of trust and resilience."
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3" strokeWidth="2"/>
                <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" strokeWidth="2"/>
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
            </svg>
        ),
        title: "TARGET Selling Insights",
        description: "Reveals how buyers make decisions and how you sell, so you can align your sales conversations to trust-based, high-conversion strategies that feel authentic and close more deals."
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/>
                <circle cx="9" cy="7" r="4" strokeWidth="2"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2"/>
            </svg>
        ),
        title: "Stages of Growth Assessment",
        description: "Identifies your current business growth stage and its hidden challenges, so you can focus on solving the right problems at the right time with the right leadership approach."
    }
];

const AssessmentCard = ({ assessment, index }) => {
    return (
        <motion.div
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -5 }}
        >
            <div className="flex flex-col items-center text-center space-y-6">
                {/* Icon with blue highlight */}
                <div className="relative">
                    <div className="text-gray-800">
                        {assessment.icon}
                    </div>
                    {/* Blue highlight circle */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 leading-tight">
                    {assessment.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                    {assessment.description}
                </p>
            </div>
        </motion.div>
    );
};


const AssessmentSection = () => {
    return (
        <section className="bg-white py-20 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
                            4 Key Assessment Components
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Powerful tools to unlock your leadership and business potential
                        </p>
                    </motion.div>

                    {/* 2x2 Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {assessments.map((assessment, index) => (
                            <AssessmentCard 
                                key={assessment.title} 
                                assessment={assessment} 
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AssessmentSection;