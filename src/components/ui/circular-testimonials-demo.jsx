import React from "react";
import { CircularTestimonials } from './circular-testimonials';

const testimonials = [
  {
    quote:
      "I was impressed by the food! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive. I'll definitely be back for more!",
    name: "Tamar Mendelson",
    designation: "Restaurant Critic",
    src:
      "https://vrtmanagementgroup.com/wp-content/uploads/2024/09/1521166523401.jpeg",
  },
  {
    quote:
      "This place exceeded all expectations! The atmosphere is inviting, and the staff truly goes above and beyond. I'll keep returning for more exceptional dining experience.",
    name: "Joe Charlescraft",
    designation: "Frequent Visitor",
    src:
      "https://vrtmanagementgroup.com/wp-content/uploads/2024/09/1672786254557.jpeg",
  },
  {
    quote:
      "Shining Yam is a hidden gem! The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
    name: "Martina Edelweist",
    designation: "Satisfied Customer",
    src:
      "https://vrtmanagementgroup.com/wp-content/uploads/2024/09/1568593417891.jpeg",
  },
  {
    quote:
      "The quality of service here is unmatched. Every detail was perfect, from the ambiance to the attention to customer needs. Truly exceptional!",
    name: "Sarah Johnson",
    designation: "Business Owner",
    src:
      "https://vrtmanagementgroup.com/wp-content/uploads/2024/09/1707775949387.jpeg",
  },
  
];

export const CircularTestimonialsDemo = () => (
  <section className="space-y-16">
    {/* Light testimonials section */}
    <div className="bg-[#f7f7fa] p-20 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
      <div
        className="items-center justify-center relative flex"
        style={{ maxWidth: "1456px" }}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#0a0a0a",
            designation: "#454545",
            testimony: "#171717",
            arrowBackground: "#141414",
            arrowForeground: "#f1f1f7",
            arrowHoverBackground: "#00A6FB",
          }}
          fontSizes={{
            name: "28px",
            designation: "20px",
            quote: "20px",
          }}
        />
      </div>
    </div>

    {/* Dark testimonials section
    <div className="bg-[#060507] p-16 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
      <div
        className="items-center justify-center relative flex"
        style={{ maxWidth: "1024px" }}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#f7f7ff",
            designation: "#e1e1e1",
            testimony: "#f1f1f7",
            arrowBackground: "#0582CA",
            arrowForeground: "#141414",
            arrowHoverBackground: "#f7f7ff",
          }}
          fontSizes={{
            name: "28px",
            designation: "20px",
            quote: "20px",
          }}
        />
      </div>
    </div> */}
  </section>
);

export default CircularTestimonialsDemo;
