import Image from "next/image";
import {
  AlertTriangle,
  BadgeCheck,
  HeartPulse,
  Leaf,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { AnimatedReveal } from "@/components/animated-reveal";
import { buildMetadata } from "@/lib/metadata";

const pathname = "/hse-safety";

export const metadata = buildMetadata({
  title: "HSE Safety Policy | Petrowave Energy Limited",
  description:
    "Review Petrowave Energy Limited's Quality, Health, Safety, and Environment policy guiding responsible operations.",
  pathname,
});

const policyPillars = [
  {
    title: "Quality Assurance",
    body: "Deliver services that meet or exceed client requirements through rigorous planning, compliance, and continuous improvement.",
    Icon: BadgeCheck,
  },
  {
    title: "Health & Safety",
    body: "Protect people and assets with proactive risk management, safe work practices, and a culture of accountability.",
    Icon: HeartPulse,
  },
  {
    title: "Environmental Stewardship",
    body: "Minimize environmental impact by managing resources responsibly, reducing waste, and preventing incidents.",
    Icon: Leaf,
  },
  {
    title: "Regulatory Compliance",
    body: "Align operations with applicable laws, industry standards, and ethical business practices across all projects.",
    Icon: ShieldCheck,
  },
  {
    title: "Incident Prevention",
    body: "Identify and mitigate hazards early through inspections, training, and performance monitoring.",
    Icon: AlertTriangle,
  },
  {
    title: "Continuous Improvement",
    body: "Measure performance, capture lessons learned, and strengthen controls to elevate QHSE outcomes.",
    Icon: TrendingUp,
  },
];

export default function HseSafetyPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-white/10 px-6 py-20 text-white sm:py-24">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/safety.jpg"
            alt="HSE oversight and safety monitoring"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(112deg,rgba(6,16,30,0.9),rgba(6,16,30,0.58))]" />

        <div className="mx-auto w-full max-w-6xl">
          <AnimatedReveal>
            <article className="max-w-3xl">
              <div className="flex items-center gap-2 text-white">
                <ShieldCheck className="h-5 w-5" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  HSE Safety
                </p>
              </div>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                HSE Safety Policy
              </h1>
              <p className="mt-5 text-base leading-7 tracking-tight text-slate-200 sm:text-lg">
                Our Quality, Health, Safety, and Environment policy <br />
                guides every decision to protect people, assets, and the
                environment.
              </p>
            </article>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-black px-6 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <AnimatedReveal>
            <article className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Our commitments
              </h2>
              <p className="mt-4 text-base leading-7 tracking-tight text-slate-200">
                Petrowave Energy Limited is committed to delivering services
                responsibly, safely, and with uncompromising quality. Our QHSE
                framework is embedded in daily operations, from planning and
                procurement to execution and closeout.
              </p>
            </article>
          </AnimatedReveal>

          <div className="mt-8 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {policyPillars.map((pillar, index) => (
              <AnimatedReveal key={pillar.title} delay={index * 0.06}>
                <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm transition duration-300 sm:hover:-translate-y-1 sm:hover:border-[#f47a30] sm:hover:bg-white/10 sm:hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white">
                      <pillar.Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-base font-semibold tracking-tight text-white transition-colors sm:group-hover:text-[#f47a30]">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 tracking-tight text-slate-200">
                    {pillar.body}
                  </p>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
