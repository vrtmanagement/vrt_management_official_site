import Link from "next/link";
import { Globe, Mail, Phone } from "lucide-react";

const contactItems = [
  {
    title: "Call Us Directly",
    description:
      "Speak with a VRT consultant who will answer your questions and map out your next steps.",
    linkLabel: "+1 (203) 304-1918",
    href: "tel:+12033041918",
    icon: Phone,
  },
  {
    title: "Send Us an Email",
    description:
      "Send us your questions, your background, and your goals, we'll respond with a personalized plan.",
    linkLabel: "coachrajesh@vrt9.com",
    href: "mailto:coachrajesh@vrt9.com",
    icon: Mail,
  },
  // {
  //   title: "Visit Our Website",
  //   description:
  //     "Learn more about VRT Management Group's programs, research-backed frameworks, and coaching approach.",
  //   linkLabel: "www.vrt9.net",
  //   href: "https://www.vrt9.net",
  //   icon: Globe,
  // },
];

function ContactItem({ item }) {
  const Icon = item.icon;

  return (
    <article className="group">
      <Link
        href={item.href}
        target={item.href.startsWith("https") ? "_blank" : undefined}
        rel={item.href.startsWith("https") ? "noreferrer" : undefined}
        className="flex items-start gap-4 rounded-2xl transition duration-300 hover:translate-x-1 hover:brightness-110 md:max-lg:gap-3"
      >
        <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_12px_30px_rgba(255,255,255,0.18)] md:max-lg:h-10 md:max-lg:w-10">
          <Icon className="h-6 w-6 text-[#ff1f10] md:max-lg:h-5 md:max-lg:w-5" strokeWidth={2.15} />
        </div>

        <div className="max-w-[295px] md:max-lg:max-w-[240px]">
          <h3 className="text-[22px] font-bold leading-none text-white md:max-lg:text-[18px]">
            {item.title}
          </h3>

          <p className="mt-3 text-[16px] leading-[1.25] text-white/88 md:max-lg:mt-2 md:max-lg:text-[13px]">
            {item.description}
          </p>

          <span className="mt-3 inline-block text-[16px] font-medium leading-none text-white underline underline-offset-[3px] decoration-white/80 md:max-lg:mt-2 md:max-lg:text-[13px]">
            {item.linkLabel}
          </span>
        </div>
      </Link>
    </article>
  );
}

export default function CTASection() {
  return (
    <section className="w-full bg-white py-14 md:py-16">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(90deg,#c30f19_0%,#ff3e15_50%,#c11018_100%)] px-8 py-10 shadow-[0_26px_70px_rgba(199,28,28,0.18)] md:px-14 md:py-12 md:max-lg:px-8 md:max-lg:py-8 lg:px-20 lg:py-14">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-[42%] bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.09),transparent_62%)]" />
            <div className="absolute inset-y-0 left-[28%] w-[22%] bg-[radial-gradient(circle_at_50%_50%,rgba(255,166,87,0.28),transparent_70%)] blur-2xl" />
            <div className="absolute inset-y-0 right-0 w-[38%] bg-[linear-gradient(270deg,rgba(112,0,5,0.16),transparent)]" />
            <div className="absolute left-[4%] top-0 h-full w-[220px] rotate-[10deg] bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-50 blur-[2px]" />
            <div className="absolute left-[17%] top-[-8%] h-[140%] w-[120px] rotate-[20deg] bg-[linear-gradient(180deg,transparent,rgba(255,124,85,0.2),transparent)] opacity-60 blur-[3px]" />
          </div>

          <div className="relative grid items-center gap-10 md:max-lg:gap-7 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:gap-14">
            <div className="max-w-[510px] md:max-lg:max-w-none">
              <h2 className="text-[42px] font-bold leading-[1.02] tracking-[-0.02em] text-white sm:text-[48px] md:max-lg:text-[30px]">
                Ready to Start?
              </h2>

              <p className="mt-4 max-w-[430px] text-[23px] font-medium leading-[1.12] text-white/95 sm:text-[24px] md:max-lg:mt-3 md:max-lg:max-w-none md:max-lg:text-[18px]">
                Have Questions? VRT Management Group Is Here to Help.
              </p>

              <p className="mt-5 max-w-[500px] text-[18px] leading-[1.18] text-white/90 sm:text-[19px] md:max-lg:mt-4 md:max-lg:max-w-none md:max-lg:text-[14px] md:max-lg:leading-[1.28]">
                Whether you&apos;re just starting out or already have a company
                in mind our team is ready to answer your questions and guide
                you through every step of creating your own internship.
              </p>

              {/* <Link
                href="/contact-us"
                className="mt-8 inline-flex min-h-[58px] items-center justify-center rounded-full bg-white px-8 text-[17px] font-semibold text-[#ff2213] shadow-[0_20px_34px_rgba(140,7,14,0.22)] transition duration-300 hover:scale-105 hover:shadow-[0_22px_38px_rgba(140,7,14,0.28)]"
              >
                Get Started With VRT Today
              </Link> */}
            </div>

            <div className="flex flex-col gap-7 md:max-lg:grid md:max-lg:grid-cols-2 md:max-lg:gap-5 lg:pl-2">
              {contactItems.map((item) => (
                <ContactItem key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
