"use client";

const outreachTemplates = [
  {
    label: "LinkedIn Message",
    title: "Connection Request (Under 300 Characters)",
    body: `"Hi [Name], I'm a grad student at [University] studying [Major]. I've been following [Company] and have a few specific ideas on how I can add value to your team. Would you be open to a quick 10-minute call?"`,
    tip: "Always reference something specific about their company never send a generic message. Personalization is everything.",
  },
  {
    label: "Email Outreach",
    title: "Follow-Up Email Template",
    body: `"Dear [Name], I am a [year] student at [University] majoring in [Major]. After researching [Company], I noticed opportunities where my skills in [specific skill] could add real value particularly around [specific area]. I'd love to share a brief proposal. Would you be open to a 10-minute call? Book here: [Calendly link]"`,
    tip: "Always reference something specific about their company never send a generic message. Personalization is everything.",
  },
];

function OutreachTemplateCard({ template }) {
  return (
    <article className="h-full rounded-xl border border-[#f6eaea] bg-[#fff5f5] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md md:p-8">
      <p className="text-[15px] font-medium leading-none text-[#ff2a1f]">
        {template.label}
      </p>

      <h3 className="mt-5 text-[17px] font-medium leading-[1.35] text-black md:text-[18px]">
        {template.title}
      </h3>

      <p className="mt-4 text-[14px] leading-[1.22] text-[#4f4f4f] md:text-[15px]">
        {template.body}
      </p>

      <p className="mt-6 text-[14px] leading-[1.2] text-[#4f4f4f] md:text-[15px]">
        <span className="font-semibold text-[#ff2a1f]">VRT Tip:</span>{" "}
        {template.tip}
      </p>
    </article>
  );
}

export default function OutreachTemplatesSection() {
  return (
    <section className="w-full bg-white py-14 md:py-16">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 md:px-8">
        <div className="max-w-[560px]">
          <h2 className="text-[30px] font-bold leading-[1.08] text-black sm:text-[34px] md:text-[36px]">
            Proven Outreach Templates
            <span className="block text-[#ff1f14]">That Get Responses</span>
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-2 md:gap-6">
          {outreachTemplates.map((template) => (
            <OutreachTemplateCard key={template.label} template={template} />
          ))}
        </div>
      </div>
    </section>
  );
}
