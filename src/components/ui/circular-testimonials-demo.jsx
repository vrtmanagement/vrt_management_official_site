import React from "react";
import { CircularTestimonials } from './circular-testimonials';

// const testimonials = [
//   {
//     quote:
//       "I was impressed by the food! And I could really tell that they use high-quality ingredients. The staff was friendly and attentive. I'll definitely be back for more!",
//     name: "Tamar Mendelson",
//     designation: "Restaurant Critic",
//     src:
//       "https://vrtmanagementgroup.com/wp-content/uploads/2024/09/1521166523401.jpeg",
//   },
//   {
//     quote:
//       "This place exceeded all expectations! The atmosphere is inviting, and the staff truly goes above and beyond. I'll keep returning for more exceptional dining experience.",
//     name: "Joe Charlescraft",
//     designation: "Frequent Visitor",
//     src:
//       "https://vrtmanagementgroup.com/wp-content/uploads/2024/09/1672786254557.jpeg",
//   },
//   {
//     quote:
//       "Shining Yam is a hidden gem! The impeccable service and overall attention to detail created a memorable experience. I highly recommend it!",
//     name: "Martina Edelweist",
//     designation: "Satisfied Customer",
//     src:
//       "https://vrtmanagementgroup.com/wp-content/uploads/2024/09/1568593417891.jpeg",
//   },
//   {
//     quote:
//       "The quality of service here is unmatched. Every detail was perfect, from the ambiance to the attention to customer needs. Truly exceptional!",
//     name: "Sarah Johnson",
//     designation: "Business Owner",
//     src:
//       "https://vrtmanagementgroup.com/wp-content/uploads/2024/09/1707775949387.jpeg",
//   },
  
// ];

const testimonials = [
  {
    quote:
      "Raj is a tremendous asset and contributor to any company that taps into his experience with human capital and principles of Lean Six Sigma. I was fortunate to have worked closely with Raj including my first 'value stream mapping'.",
    name: "Gary J. Kopczyk",
    designation: "",
    src: "/main-page/section9/img1.jpeg",
  },
  {
    quote:
      "Thanks to Rajesh’s mentorship, our business grew by 130%! Our leadership team is aligned, and we have clarity and vision like never before.",
    name: "Francesco Pagano",
    designation: "",
    src: "/main-page/section9/img2.png",
  },
  {
    quote:
      "Raj is a very talented transformational coach, trainer and Business consultant. I had attended his program and the way he explained the concepts was really great. The traits of leadership and the CHANGE was explained in a brilliant way.",
    name: "Rohit Nagpal",
    designation: "",
    src: "/main-page/section9/img3.png",
  },
];

export const CircularTestimonialsDemo = () => (
<section className="space-y-16 mt-14 md:mt-0 md:pt-0">
    {/* Light testimonials section */}
    <div className="bg-[#f7f7fa] sm:p-2  md:p-20 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
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
