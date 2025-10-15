"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "How much does Founder University cost?",
    answer: (
      <div className="space-y-4">
        <p>$500, after you are selected.</p>
        <p>
          <strong>
            If you attend all live sessions, you are eligible for a tuition
            refund.
          </strong>
        </p>
      </div>
    ),
  },
  {
    question: "What are the investment terms?",
    answer: (
      <p>
        Our Founder University standard investments are $25k for 2.5% or $125K
        for 7%. We make investments from the top 10% of companies per cohort.
      </p>
    ),
  },
  {
    question: "What happens if I need to skip a required session?",
    answer: (
      <p>
        Attendance is tracked at the company level. As long as one founder
        participates, the company gets credit for that session.
      </p>
    ),
  },
  {
    question: "I have customers and recurring revenue — should I apply?",
    answer: (
      <p>
        Congratulations! Yes, you can still apply. Coursework is self-guided so
        that you can focus on areas most relevant to your business and stage.
        Founders with traction report immense value from the program, including
        the content, the community, and the accountability. On average, half of
        the accepted companies have already generated revenue.
      </p>
    ),
  },
  {
    question: "Are there any prerequisites to attend Founder University?",
    answer: (
      <p>
        No. We prioritize teams of multiple builder founders. Builders may be
        developers, UI/UX designers, and/or growth hackers.
      </p>
    ),
  },
  {
    question: "When is the deadline to apply?",
    answer: (
      <p>
        You can apply to Founder University at any time. Upon acceptance,
        founders will be assigned to either the current or the next cohort.
      </p>
    ),
  },
  {
    question: "Who from the company can participate in Founder University?",
    answer: <p>All founders and co-founders are encouraged to participate!</p>,
  },
  {
    question: "Is Founder University in-person or remote?",
    answer: (
      <p>
        The program is remote, and the live sessions are on Zoom. However,
        select in-person sessions, including the kickoff, will be held in
        Austin, Texas (optional).
      </p>
    ),
  },
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