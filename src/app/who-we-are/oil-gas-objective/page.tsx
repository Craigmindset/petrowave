import Link from "next/link";
import { BarChart3, Gauge, Handshake, Leaf, ShieldCheck } from "lucide-react";
import { SubPageTemplate } from "@/components/subpage-template";
import { AnimatedReveal } from "@/components/animated-reveal";
import { buildMetadata } from "@/lib/metadata";
import { subPageContent } from "@/lib/site-data";

const pathname = "/who-we-are/oil-gas-objective";
const content = subPageContent[pathname];

export const metadata = buildMetadata({
  title: content.title,
  description: content.description,
  pathname,
});

export default function OilGasObjectivePage() {
  const focusAreas = [
    {
      title: "Production Continuity",
      body: "We align technical workflows and operational planning to sustain output quality and reduce avoidable downtime across the value chain.",
      Icon: Gauge,
      open: true,
    },
    {
      title: "Operational Integrity",
      body: "Our teams apply rigorous safety, compliance, and asset-integrity standards to protect people, infrastructure, and long-term value.",
      Icon: ShieldCheck,
      open: true,
    },
    {
      title: "Data-Driven Decisions",
      body: "We use performance metrics and market intelligence to guide procurement, maintenance, and field execution priorities.",
      Icon: BarChart3,
      open: false,
    },
    {
      title: "Sustainability Alignment",
      body: "Environmental responsibility is integrated into our project lifecycle through measurable controls and reporting frameworks.",
      Icon: Leaf,
      open: false,
    },
    {
      title: "Collaborative Partnerships",
      body: "We co-create practical delivery models with stakeholders to accelerate project milestones and strengthen ecosystem resilience.",
      Icon: Handshake,
      open: false,
    },
  ];

  return (
    <SubPageTemplate
      content={content}
      useHeroBackground
      heroBackgroundImage="/petrowave-drill-reporting.jpg"
      showOperationalPriorities={false}
    >
      <section className="bg-slate-50 px-6 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <AnimatedReveal>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 sm:hover:-translate-y-1 sm:hover:border-slate-300 sm:hover:shadow-md">
              <h2 className="text-2xl font-semibold tracking-tight text-[#132640] sm:text-3xl">
                Strategic Focus Areas
              </h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {focusAreas.map((item) => (
                  <details
                    key={item.title}
                    className="group rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition duration-300 hover:border-[#f47a30]"
                    open={item.open}
                  >
                    <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-semibold tracking-tight text-[#132640]">
                      <item.Icon className="h-4 w-4 text-[#f47a30]" />
                      {item.title}
                    </summary>
                    <p className="mt-3 text-sm leading-6 tracking-tight text-slate-700 sm:text-base">
                      {item.body}
                    </p>
                  </details>
                ))}
              </div>
            </article>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-white px-6 pb-16 sm:pb-20">
        <div className="mx-auto w-full max-w-6xl">
          <AnimatedReveal delay={0.08}>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 sm:hover:-translate-y-1 sm:hover:border-slate-300 sm:hover:shadow-md sm:p-8">
              <h2 className="text-3xl font-semibold tracking-tight text-[#132640] sm:text-4xl">
                We are building Industry goals
              </h2>
              <p className="mt-4 text-sm leading-7 tracking-tight text-slate-700 sm:text-base">
                Petrowave Energy Limited is building collaborative goals that
                strengthen sustainable oil and gas outcomes across operations,
                procurement, and technical delivery. By working with partners,
                regulators, and communities, we develop practical frameworks
                that balance productivity with environmental stewardship and
                long-term industry resilience.
              </p>
              <p className="mt-4 text-sm leading-7 tracking-tight text-slate-700 sm:text-base">
                Our objective is to shape a more reliable and responsible energy
                future through disciplined execution, transparent governance,
                and shared accountability. This approach helps position the
                industry for durable growth while responding to evolving market,
                compliance, and sustainability expectations.
              </p>
            </article>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-white px-6 pb-16 sm:pb-20">
        <div className="mx-auto w-full max-w-4xl text-center">
          <AnimatedReveal>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm leading-7 tracking-tight text-slate-700 sm:text-base">
                Ready to see how our services translate these objectives into
                measurable outcomes?
              </p>
              <Link
                href="/services"
                className="mt-5 inline-flex items-center rounded-xl bg-[#f47a30] px-5 py-3 text-sm font-semibold tracking-tight text-white transition hover:bg-[#ff8a3d]"
              >
                Explore Our Services
              </Link>
            </article>
          </AnimatedReveal>
        </div>
      </section>
    </SubPageTemplate>
  );
}
