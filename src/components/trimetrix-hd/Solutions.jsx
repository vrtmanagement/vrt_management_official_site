"use client";

import { Users, TrendingUp, Globe, ShieldCheck, Target, Check } from "lucide-react";

const capabilities = [
  {
    icon: Users,
    title: "Build High-Performing Teams",
    description: "Advanced matching algorithms and structured evaluation frameworks"
  },
  {
    icon: TrendingUp,
    title: "Accelerate Professional Growth",
    description: "Data-driven insights powered by behavioral science, not assumptions"
  },
  {
    icon: Globe,
    title: "Establish Universal Development Framework",
    description: "Company-wide standardization for consistent talent evolution"
  },
  {
    icon: ShieldCheck,
    title: "Mitigate Organizational Challenges",
    description: "Proactively address retention, alignment, and engagement concerns"
  },
  {
    icon: Target,
    title: "Cultivate Next-Gen Leadership",
    description: "Strategic coaching with personalized competency enhancement"
  }
];

const supportServices = [
  "Custom-Branded Assessment Solutions",
  "Recruitment Frameworks & Evaluation Protocols",
  "Interactive Development Workshops & Resources",
  "On-Demand Video Training Modules",
  "Comprehensive Certification Programs"
];

export default function Solutions() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Capabilities */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-semibold text-primary">Our Capabilities</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Transform Your Organization
              </h2>
              <p className="text-lg text-muted-foreground">
                Leverage science-backed methodologies to unlock your team's full potential
              </p>
            </div>

            <div className="space-y-4">
              {capabilities.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Support Services */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full">
                <span className="text-sm font-semibold text-accent">Support Services</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Comprehensive Implementation Support
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to successfully deploy and maximize your investment
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 space-y-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              {supportServices.map((service, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <p className="text-base font-medium leading-relaxed group-hover:text-primary transition-colors">
                    {service}
                  </p>
                </div>
              ))}

              <div className="pt-6 border-t border-border">
                <div className="bg-primary/5 rounded-lg p-6 space-y-3">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                    Premium Partnership Benefits
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Gain access to dedicated account management, priority support channels, and exclusive early access to new features and methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
