"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Who should join the Entrepreneur Growth Alliance™ workshop?",
    answer: (
      <div className="space-y-4">
        <p>Ambitious entrepreneurs and small business owners who want proven strategies to scale their businesses, build high-performing teams, and drive sustainable growth.</p>
      </div>
    ),
  },
  {
    question: "What results can I expect from attending?",
    answer: (
      <p>
        You will gain actionable tools to systematize operations, improve leadership, align your team, and develop strategic plans for measurable business growth.
      </p>
    ),
  },
  {
    question: "Is the program suitable if my business is facing major challenges?",
    answer: (
      <p>
        Yes. The workshop equips you to diagnose your current business growth stage and provides frameworks to overcome common bottlenecks.
      </p>
    ),
  },
  {
    question: " What is included in the workshop?",
    answer: (
      <p>
        Comprehensive modules on team building, process optimization, leadership, strategic planning, talent management, and company culture, plus expert assessments and personalized mentorship.
      </p>
    ),
  },
  {
    question: "Are there options for both in-person and virtual sessions?",
    answer: (
      <p>
        Yes, you can choose from in-person workshops at select locations or virtual masterclasses—both formats deliver the full program experience.
      </p>
    ),
  },
  {
    question: "What if I miss a session?",
    answer: (
      <p>
        Don’t worry! All sessions are recorded, so you’ll have access to the recordings and can catch up anytime.
      </p>
    ),
  }
];

const FAQSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8 relative z-30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-semibold text-center mb-12 font-heading">
          FAQs
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem
              value={`item-${index + 1}`}
              key={index}
              className="border-b border-neutral-800"
            >
              <AccordionTrigger className="py-6 text-left text-lg hover:no-underline font-heading">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-neutral-300 font-body text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;