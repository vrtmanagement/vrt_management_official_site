"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Is the strategy call really complementary?",
    answer: (
      <div className="space-y-4">
        <p>Yes. It’s a working session designed to deliver clarity and next steps.</p>
      </div>
    ),
  },
  {
    question: "What if I’m not sure what the real problem is?",
    answer: (
      <p>
        That’s exactly what we diagnose—then we prioritize what matters most.
      </p>
    ),
  },
  {
    question: "Do you work with any industry?",
    answer: (
      <p>
        VRT is focused on USA-based SMBs and entrepreneurs. If you’re scaling complexity—people,
        operations, execution—this applies.
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
    question: "Will you give me a plan even if I don’t join EGA™?",
    answer: (
      <p>
        You’ll leave the call with clearer priorities and next actions either way.
      </p>
    ),
  }
];

const FAQSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8 relative z-30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-semibold text-center mb-12 font-heading"
          style={{ fontFamily: 'Lora, serif' }}
        >
          FAQs
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem
              value={`item-${index + 1}`}
              key={index}
              className="border-b border-neutral-800"
              style={{ fontFamily: 'Inter, serif' }}
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