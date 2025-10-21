'use client'
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';


const accordionData = [
    {
        weekNumber: 1,
        title: "Change or Die",
        content: {
            paragraphs: [
                "Entrepreneurs don’t fail because they lack knowledge; they fail because they keep repeating the same patterns. It’s a wake-up call for leaders who are stuck in routine, avoiding the critical changes their business needs to survive and grow.",
                "Change or Die™ helps you understand why change feels so uncomfortable and why your brain resists it, even when you know it’s the right move. It shows how your habits, behaviors, and outdated systems could be quietly dragging your business down. You’ll learn how to move past resistance, take ownership, and apply change in real, practical ways, before you’re forced to.",
                "Why is this module so important? Because what worked for your business even 6 months ago may not work tomorrow.And if you’re not actively changing, your business won’t just slow down, it’ll get left behind. This session helps you recognize that and gives you the tools to stay ahead, adapt faster, and lead stronger."
            ],
            bullets: [
                "Describe your short- and long-term strategy and how it relates to your planning and resourcing decisions",
                "Develop and implement sales, and marketing strategies that drive sustainable growth",
                "Define key financial metrics and describe how to use them to make informed decisions"
            ]
        }
    },
    {
        weekNumber: 2,
        title: "How to Build Trust with Stakeholders",
        content: {
            paragraphs: [
                "Most business problems, from missed deadlines to poor collaboration, can be traced back to one thing: lack of Trust. When Trust is low, everything slows down. Costs go up. Tensions rise. Even small tasks can turn into major bottlenecks. That's where Trust comes in; it helps you fix what's holding your business back.",
                "This session delves into what Trust truly means in a business context and how it can be built, lost, and rebuilt. You'll learn that Trust isn't just a soft skill; it's a measurable, actionable asset. You'll explore the Four Cores of Trust, Integrity, Intent, Capabilities, and Results and how they directly impact your influence, leadership, and performance. You'll also uncover the 13 Trust-Building Behaviors you can start applying immediately to strengthen relationships, increase team speed, and lower hidden costs.",
                "Why is this module so important? This module isn't just helpful; it's a game-changer. Because when Trust increases, speed rises, costs decrease, and results multiply. And that's not theory; it's a fact every growing business needs to master on building Trust."
            ],
            bullets: [
                "A framework to understand and build Trust at 5 levels, from self to society.",
                "Tools to improve Trust with your team, clients, partners, and the market.",
                "The 4 Cores of Trust: what they mean and how to strengthen each one.",
                "13 specific behaviors that grow Trust and reduce friction in your business.",
                "13 specific behaviors that grow Trust and reduce friction in your business."
            ]
        }
    },
    {
        weekNumber: 3,
        title: "Dynamic Communication",
        content: {
            paragraphs: [
                "Poor communication isn't just frustrating, it's expensive. Misunderstandings, unclear expectations, and reactive conversations drain productivity, create tension, and damage trust. Dynamic Communication shows entrepreneurs and leaders how to fix this at the roots by first understanding their own communication style and then learning how to adapt to others.",
                "This session is built around the Platinum Rule: Don't just treat people the way you want to be treated, treat them how they want to be treated. You'll explore your unique behavioral style using the DISC model, understand your natural vs. adapted communication tendencies, and learn how to read and respond to others effectively. This isn't about being polite, it's about increasing clarity, reducing conflict, and strengthening team trust through smarter, behavior-based communication.",
                "Why is this important? Because when you misread people, you lose time, energy, and trust. But when you communicate with clarity and intention, you create alignment. That means fewer misunderstandings, faster decisions, better teamwork and a business that moves forward without friction. This module gives you the tools to make that shift so your people feel understood, your teams run smoother, and your leadership creates real results."
            ],
            bullets: [
                "A deep understanding of your unique DISC profile and what it means in team dynamics.",
                "Tools to identify others' behavioral styles using observable signals like voice tone, body language, and pace.",
                "Communication strategies are tailored to different DISC types, so you know what to say, how to say it, and what to avoid.",
                "Practical tips to reduce misunderstandings, improve listening, and give feedback without friction.",
                "A mindset shifts from the Golden Rule to the Platinum Rule, critical for leading diverse teams with trust and clarity."
            ]
        }
    },
    {
        weekNumber: 4,
        title: "Seven Stages of Growth",
        content: {
            paragraphs: [
                "Most entrepreneurs run into chaos as their business grows not because they're doing something wrong, but because they don't realize their business is entering a new stage. What worked when you had 5 employees starts to break when you hit 25. And if you don't adjust how you lead, structure your team, or manage operations, growth can slow you down.",
                "This module gives you a clear roadmap through the 7 predictable stages that businesses typically move through as they grow, based on employee count, complexity, and leadership requirements. You'll learn about the 7 Stages of Growth, based on how complexity increases as your team grows. It also introduces key warning signs like Flood Zones (where communication breaks down) and Wind Tunnels (where roles and systems get out of sync). These are the hidden problem areas that most business owners don't see coming, this module helps you spot those issues early and fix them before they turn into bigger messes that slow everything down.",
                "Why is this important? Because every stage of growth comes with its own challenges and if you treat them all the same, you'll keep solving the wrong problems.This session gives you the clarity to lead your business with precision, adapt to change faster, and unlock the next level of sustainable growth."
            ],
            bullets: [
                "A clear picture of which growth stage you're in and what problems are normal at that level.",
                "TAn understanding of the 3 Growth Zones: Preparation, Performance, and Pressure and how each one affects your daily decisions.",
                "Tools to identify upcoming bottlenecks before they hit (like confusion, people drama, and lost productivity).",
                "A leadership map to shift your focus as your team grows so you stop doing everything and start leading smarter.",
                "A proven framework to scale without burnout, breakdowns, or guesswork."
            ]
        }
    },
    {
        weekNumber: 5,
        title: "Project Charters",
        content: {
            paragraphs: [
                "Businesses struggle not because they lack goals but because no one's clear on how to execute them. That's where projects get stuck, meetings go in circles, and accountability disappears. Understanding Project Charters helps you fix that fast.",
                "This module teaches you how to use a Project Charter, a one-page plan that lays out what, why, who, and how of any Project initiative. It helps you define a clear goal, assign ownership, set expectations, and create a timeline everyone understands. No confusion. No wasted effort. Just clarity that drives execution.",
                "Why is this important? Because without a clear charter, your team ends up guessing. And when people guess, projects drag, priorities shift, and momentum dies. This session gives you a plug-and-play tool to bring structure, clarity, and speed to every project, so things actually get done."
            ],
            bullets: [
                "A simple framework to turn ideas into structured, trackable projects",
                "Clarity on goals, ownership, deliverables, timelines, and how success will be measured",
                "A repeatable way to kickstart any business project without long documents or delays",
                "More productive meetings, stronger accountability, and faster decision-making",
                "Confidence to align your team around shared priorities and move projects forward"
            ]
        }
    },
    {
        weekNumber: 6,
        title: "One- and Three-Year Strategic Plan",
        content: {
            paragraphs: [
                "Entrepreneurs know where they want to go, but they struggle to get there because the steps aren't clear, and the team isn't aligned. 1- and 3-Year Strategic Planning provides a simple, structured approach to transforming your vision into a clear action plan.",
                "This module guides you through aligning your people, setting bold yet realistic 3-year goals, and developing a focused 1-year execution plan. You'll create One one-page strategic Plan that answers: What are we trying to achieve? Who's responsible? By when? And how will we track it? It's all about clarity, direction, and accountability, no fluff, just focused action.",
                "Because businesses don't grow from vague goals; they grow from focused execution. Without a strategic plan, you're left to guess. This module gives you structure, focus, and execution discipline so your team knows what to do, when to do it, and why it matters."
            ],
            bullets: [
                "A focused strategy plan for both 1-year and 3-year horizons.",
                "Complete clarity on team roles, goals, metrics, and execution timelines.",
                "A system to align your team, make better decisions, and track results every quarter."
            ]
        }
    },
    {
        weekNumber: 7,
        title: "Growth as a Process – Strategy Execution Calendar",
        content: {
            paragraphs: [
                "Businesses treat growth like a goal, but the truth is it's a process. That's why so many teams get stuck: they try to grow without a system. Growth As A Process teaches you how to build and follow a monthly execution rhythm that aligns your team, tracks real progress, and creates repeatable success.",
                "This session walks you through a Strategy Execution Calendar, month-by-month, from January to December. You'll follow a precise growth rhythm, building your strategy in January and aligning your people in March to tracking wins in June and reviewing results in December, so your entire team always knows what to do next. Everyone understands the focus for each month and how it connects to the bigger growth plan.",
                "Because growth doesn't happen in sprints, it occurs through discipline, structure, and consistency. This session helps you build that system, so your business doesn't grow once; it keeps growing all year.."
            ],
            bullets: [
                "A clear 12-month growth calendar that links strategy to execution.",
                "Defined responsibilities for leadership, operations, and execution teams.",
                "Monthly outcomes and actions to review, refine, and accelerate growth.",
                "A structured rhythm for planning, alignment, execution, and accountability."
            ]
        }
    },
    {
        weekNumber: 8,
        title: "Emotional Intelligence",
        content: {
            paragraphs: [
                "Emotions inevitably show up in business, whether we like it or not, in meetings, in feedback, in conflict, or team performance. The Emotional Intelligence module helps you lead through those moments with clarity, empathy, and confidence by understanding how emotions impact behavior and decision-making, both in yourself and others.",
                "This session breaks Emotional Intelligence into five practical components: Self-Awareness, Self-Regulation, Motivation, Social Awareness, and Social Regulation. You'll learn how to recognize when you're reacting emotionally, how to control your impulses, and how to read people better so you can lead smarter, not harder. This isn't about being soft. It's about using emotional clarity to build trust, reduce drama, and lead with real influence.",
                "Why is this important? Because emotional intelligence isn't a nice-to-have anymore, it's a competitive advantage. Leaders with high emotional intelligence (EQ) create safer work environments, make better decisions, and build stronger teams. This session provides you with the skills to do exactly that, intentionally, not by accident."
            ],
            bullets: [
                "Tools to recognize your own emotions in the moment and shift from reaction to response",
                "Practices to manage disruptive feelings and stay composed under pressure",
                "A framework to understand how your emotions affect others, especially in leadership roles"
            ]
        }
    },
    {
        weekNumber: 9,
        title: "Building Your Company Culture",
        content: {
            paragraphs: [
                "Leaders often overlook the culture but forget that culture is what drives results. When your team lacks clarity on purpose, values, or norms, everything slows down, engagement drops, confusion grows, and execution suffers. Culture Building Blocks help you fix that by creating alignment from the inside out.",
                "This module walks you through the five essential foundations of a strong, healthy culture: Purpose, Vision, Values, Accountabilities, and Norms. You'll define why your business exists (beyond making money), where it's going, how people are expected to behave, and what they're truly accountable for. You'll learn how to create those five essential foundations for your company.",
                "Why is this important? Because culture isn't what's written on the wall, it's what happens when no one is watching. This session gives you the building blocks to shape a culture where your people feel aligned, committed, and proud to be part of the mission."
            ],
            bullets: [
                "A step-by-step process to define your company's purpose so your team feels connected and inspired by why you exist.",
                "A practical way to craft a vision that brings clarity to long-term direction and everyday decision-making.",
                "A framework to identify values that reflect your leadership style and business philosophy.",
                "Tools to define clear accountabilities so everyone knows their role and takes ownership.",
                "A method to create norms that shape how your team communicates, collaborates, and behaves day in, day out."
            ]
        }
    },
    {
        weekNumber: 10,
        title: "Talent Management – Foundations for Recruiting and Execution Excellence",
        content: {
            paragraphs: [
                "Hiring someone with the right skills is only half the battle. If they don't fit the role, the culture, or your expectations, performance breaks down. Talent Management provides a proven system for recruiting, onboarding, and retaining top performers who truly align with your business.",
                "This module demonstrates how to establish a robust talent foundation, beginning with a 3D Job Profile that encompasses clear accountabilities, key performance indicators, and a psychometric blueprint for achieving role success. You'll learn how to structure interviews around technical, experiential, and behavioral fit. And once they're hired? You'll have a clear onboarding plan that aligns new employees to their roles, your culture, and your business goals.",
                "Why is this important? Because talent isn't just who you hire, it's how well you set them up to succeed. This session helps you eliminate guesswork in hiring, reduce turnover, and create a team that fits your business."
            ],
            bullets: [
                "Tools to assess candidates not just by resume, but by culture fit, role fit, and behavior fit",
                "A step-by-step process to conduct structured, high-impact interviews",
                "An onboarding system that sets expectations from day 1 through 90",
                "Clarity for both new and existing employees on what success looks like monthly, quarterly, and annually"
            ]
        }
    },

];

export default function AccordionSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex((currentOpenIndex) => (currentOpenIndex === index ? null : index));
    };

    return (
        <section className="relative  bg-background z-[30] mb-8">
            {/* Red Banner Section */}
            <div className="relative bg-red-700 py-16 px-6 lg:px-8 mb-16">
                {/* Black Gradient Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div> */}
                
                <div className="relative max-w-6xl mx-auto text-center"
                style={{ fontFamily: 'Lora, serif' }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-2">
                        Accelerate Your Business Growth with These
                        <br />
                        <span className="text-4xl md:text-5xl lg:text-5xl font-bold text-white">
                            Powerful workshop Modules
                        </span>
                    </h1>
                    
                    <p className="text-lg md:text-md text-white/90 max-w-4xl mx-auto leading-relaxed">
                        The EGA™ Workshop covers a range of focus areas to help you grow your business and leadership skills.
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 animate-fadeInUp text-center"
                    style={{ fontFamily: 'Lora, serif' }}
                >
                    Entrepreneurs Growth Alliance™ (EGA™)
                </h2>

                <div className="space-y-4">
                    {accordionData.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-md ${index === 0 ? 'animate-fadeInUp' :
                                index === 1 ? 'animate-fadeInUp animation-delay-200' :
                                    'animate-fadeInUp animation-delay-400'
                                }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-start gap-4 p-6 text-left hover:bg-gray-50/50 transition-colors duration-300 group"
                                style={{ fontFamily: 'Inter, serif' }}
                            >
                                <div className="flex-shrink-0">
                                    <span className="text-3xl md:text-4xl font-bold text-red-500 opacity-60">
                                        {String(item.weekNumber).padStart(2, '0')}
                                    </span>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">
                                        WEEK {item.weekNumber}
                                    </p>
                                    <h3 className={`text-lg md:text-xl font-bold mb-3 transition-colors duration-300 cursor-pointer leading-tight ${openIndex === index ? 'text-red-600' : 'text-primary group-hover:text-red-600'}`}>
                                        {item.title}
                                    </h3>

                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="pt-2 space-y-4 text-muted-foreground leading-relaxed">
                                            {item.content.paragraphs.map((paragraph, pIndex) => (
                                                <p key={pIndex} className="text-sm md:text-base">
                                                    {paragraph}
                                                </p>
                                            ))}

                                            {item.content.bullets && (
                                                <div className="pt-4">
                                                    <p className="font-semibold mb-3 text-sm md:text-base">By the end of this module, you will:</p>
                                                    <ul className="space-y-2">
                                                        {item.content.bullets.map((bullet, bIndex) => (
                                                            <li key={bIndex} className="flex items-start gap-3">
                                                                <span className="text-red-600 mt-1.5 flex-shrink-0 text-sm">•</span>
                                                                <span className="text-sm md:text-base">{bullet}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-shrink-0 ml-2">
                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-red-600' : 'text-muted-foreground'}
                                            }`}
                                    />
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
