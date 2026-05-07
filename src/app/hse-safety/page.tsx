import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  FileBadge,
  Leaf,
  Recycle,
  ShieldCheck,
  Target,
  Users,
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

const managementCommitments = [
  {
    text: "Providing safe and healthy working environments to prevent work-related injuries, illnesses, and incidents.",
    Icon: ShieldCheck,
  },
  {
    text: "Identifying, eliminating, and controlling hazards and occupational risks to as low as reasonably practicable levels.",
    Icon: AlertTriangle,
  },
  {
    text: "Protecting the environment through pollution prevention, sustainable resource management, and responsible waste disposal.",
    Icon: Leaf,
  },
  {
    text: "Ensuring compliance with all relevant statutory, regulatory, and industry requirements as well as client-specific QHSE standards.",
    Icon: FileBadge,
  },
  {
    text: "Delivering products and services that consistently meet or exceed customer expectations and contractual obligations.",
    Icon: CheckCircle2,
  },
  {
    text: "Continuously improving the effectiveness of our Integrated QHSE Management System through regular monitoring, audits, and reviews.",
    Icon: BarChart3,
  },
  {
    text: "Promoting a culture of consultation, communication, and active participation among all employees and stakeholders on QHSE matters.",
    Icon: Users,
  },
];

const alignmentCommitments = [
  {
    text: "QHSE considerations are embedded in every stage of our planning, execution, and decision-making processes.",
    Icon: ClipboardCheck,
  },
  {
    text: "All employees are trained, competent, and empowered to carry out their duties safely and responsibly.",
    Icon: ShieldCheck,
  },
  {
    text: "Waste and emissions are minimized through reduction, reuse, recycling, and controlled disposal practices.",
    Icon: Recycle,
  },
  {
    text: "Hazardous materials are properly handled, stored, and disposed of in line with regulatory and industry best practices.",
    Icon: AlertTriangle,
  },
  {
    text: "The company’s operations are aligned with international QHSE standards - ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018.",
    Icon: FileBadge,
  },
  {
    text: "Clear QHSE objectives and measurable performance targets are established, monitored, and reviewed regularly to drive continual improvement.",
    Icon: Target,
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
            <article className="mx-auto max-w-6xl">
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-3xl">
                QUALITY, HEALTH, SAFETY & ENVIRONMENTAL (QHSE) POLICY
              </h1>
            </article>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <AnimatedReveal>
            <article className="mx-auto max-w-5xl lg:text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-[#132640] sm:text-3xl">
                QHSE
              </h2>
              <p className="mt-4 text-sm leading-7 tracking-tight text-slate-700 sm:text-base">
                At Petrowave Energy Limited, our mission is to deliver superior
                services while maintaining the highest standards of Quality,
                Health, Safety, and Environmental (QHSE) performance across all
                our operations. We are deeply committed to ensuring that every
                activity from engineering, project management, procurement,
                construction/fabrication, installation, commissioning, and
                maintenance is executed responsibly, safely, and sustainably
                within the Energy, Oil & Gas industries.
              </p>
              <p className="mt-4 text-sm leading-7 tracking-tight text-slate-700 sm:text-base">
                We believe that the well-being of our people, clients, partners,
                and the protection of our environment are core to our business
                success. Our goal is to achieve zero harm to people, assets, and
                the environment through proactive risk management, strong
                leadership commitment, and a culture of continuous improvement.
              </p>
            </article>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-black px-6 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <AnimatedReveal>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Petrowave Energy Limited’s Management is fully committed to:
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {managementCommitments.map((item, index) => (
                  <AnimatedReveal
                    key={item.text}
                    delay={index * 0.04}
                    offsetX="var(--reveal-x)"
                    offsetY={0}
                    className={
                      index % 2 === 0
                        ? "[--reveal-x:-24px] sm:[--reveal-x:0px]"
                        : "[--reveal-x:24px] sm:[--reveal-x:0px]"
                    }
                  >
                    <article className="group flex h-full gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 sm:hover:-translate-y-1 sm:hover:border-[#f47a30] sm:hover:bg-white/10">
                      <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition group-hover:border-[#f47a30] group-hover:text-[#f47a30]">
                        <item.Icon className="h-5 w-5" />
                      </span>
                      <p className="text-sm leading-6 tracking-tight text-slate-200 sm:text-base">
                        {item.text}
                      </p>
                    </article>
                  </AnimatedReveal>
                ))}
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <AnimatedReveal>
            <article>
              <p className="text-sm leading-6 tracking-tight text-slate-700">
                In alignment with these commitments,
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#132640]">
                Petrowave Energy Limited
              </h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {alignmentCommitments.map((item, index) => (
                  <AnimatedReveal
                    key={item.text}
                    delay={index * 0.04}
                    offsetX="var(--reveal-x)"
                    offsetY={0}
                    className={
                      index % 2 === 0
                        ? "[--reveal-x:-24px] sm:[--reveal-x:0px]"
                        : "[--reveal-x:24px] sm:[--reveal-x:0px]"
                    }
                  >
                    <article className="flex h-full gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 sm:hover:-translate-y-1 sm:hover:border-[#f47a30]">
                      <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-[#132640]">
                        <item.Icon className="h-5 w-5" />
                      </span>
                      <p className="text-sm leading-6 tracking-tight text-slate-700 sm:text-base">
                        {item.text}
                      </p>
                    </article>
                  </AnimatedReveal>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 tracking-tight text-slate-700 sm:text-base">
                Through these principles, Petrowave Energy Limited reaffirms its
                unwavering commitment to operational excellence, safety
                leadership, and environmental stewardship ensuring sustainable
                growth and long-term value for all stakeholders.
              </p>
            </article>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-white px-6 pb-16 sm:pb-20">
        <div className="mx-auto w-full max-w-6xl">
          <AnimatedReveal>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight text-[#132640] sm:text-3xl">
                Learn more about Petrowave Energy Limited
              </h2>
              <p className="mt-3 text-sm leading-7 tracking-tight text-slate-700 sm:text-base">
                Discover our story, leadership, and the values that guide our
                operations.
              </p>
              <Link
                href="/who-we-are/about-us"
                className="mt-6 inline-flex items-center rounded-full bg-[#f47a30] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#162235] transition hover:bg-[#ff8a3d] sm:text-sm"
              >
                About Us
              </Link>
            </article>
          </AnimatedReveal>
        </div>
      </section>
    </main>
  );
}
