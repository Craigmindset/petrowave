import Image from "next/image";
import Link from "next/link";
import { AnimatedReveal } from "@/components/animated-reveal";
import { buildMetadata } from "@/lib/metadata";
import { subPageContent } from "@/lib/site-data";

const pathname = "/who-we-are/we-started-well";
const content = subPageContent[pathname];

export const metadata = buildMetadata({
  title: content.title,
  description: content.description,
  pathname,
});

export default function WeStartedWellPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-white/10 px-6 py-20 text-white sm:py-24">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/petrowave-about-us.jpg"
            alt="Petrowave team and operational environment"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(112deg,rgba(6,16,30,0.9),rgba(6,16,30,0.58))]" />

        <div className="mx-auto w-full max-w-6xl">
          <AnimatedReveal>
            <article className="max-w-3xl">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {content.heading}
              </h1>
              <p className="mt-5 text-base leading-7 tracking-tight text-slate-200 sm:text-lg">
                {content.intro}
              </p>
            </article>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-stretch">
          <AnimatedReveal>
            <article>
              <h2 className="text-2xl font-semibold tracking-tight text-[#0b1a2e] sm:text-3xl">
                About Us
              </h2>
              <p className="mt-4 text-base leading-7 tracking-tight text-slate-700 text-justify">
                Petrowave Energy Limited is a proudly Nigerian oil and gas
                company headquartered in Port Harcourt, at the heart of one of
                Africa’s most vital energy hubs. We are committed to delivering
                reliable, efficient, and responsible energy solutions across the
                upstream, midstream, and downstream sectors. With a strong
                understanding of regional dynamics and global industry
                standards, Petrowave combines technical expertise with
                operational discipline to support the evolving needs of the
                energy market.
              </p>

              <p className="mt-4 text-base leading-7 tracking-tight text-slate-700 text-justify">
                Our strength lies in our people, our processes, and our
                unwavering focus on excellence. Petrowave Energy Limited brings
                together experienced professionals with deep industry knowledge,
                enabling us to execute projects with precision, safety, and
                consistency. We prioritize quality in every phase of our
                operations, from exploration support and logistics to supply and
                infrastructure services. By maintaining strict compliance with
                regulatory frameworks and international best practices, we
                ensure that our partners receive dependable and transparent
                service at every stage.
              </p>

              <Link
                href="/who-we-are/oil-gas-objective"
                className="mt-6 inline-flex items-center rounded-xl bg-[#f47a30] px-5 py-3 text-sm font-semibold tracking-tight text-white transition hover:bg-[#ff8a3d]"
              >
                Our Objectives
              </Link>
            </article>
          </AnimatedReveal>

          <AnimatedReveal delay={0.12}>
            <article className="overflow-hidden rounded-2xl  ">
              <div className="relative h-full min-h-[500px] w-full">
                <Image
                  src="/about.petrowave22.png"
                  alt="Petrowave professionals collaborating in the field"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </article>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <AnimatedReveal>
            <h2 className="text-3xl font-semibold tracking-tight text-[#132640] sm:text-4xl">
              Mission, Vision and Goals
            </h2>
          </AnimatedReveal>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Mission",
                body: "Deliver dependable, safety-led energy solutions through disciplined execution, transparent governance, and strategic collaboration.",
                hoverClass: "hover:bg-emerald-50 hover:border-emerald-200",
              },
              {
                title: "Vision",
                body: "Be the most trusted energy partner across procurement, operations, and sustainability by setting the benchmark for service excellence.",
                hoverClass: "hover:bg-rose-50 hover:border-rose-200",
              },
              {
                title: "Goals",
                body: "Accelerate project performance, strengthen local and global partnerships, and drive measurable long-term value for stakeholders.",
                hoverClass: "hover:bg-emerald-50 hover:border-emerald-200",
              },
            ].map((item, index) => (
              <AnimatedReveal key={item.title} delay={index * 0.08}>
                <article
                  className={`h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 ${item.hoverClass}`}
                >
                  <h3 className="text-xl font-semibold tracking-tight text-[#132640]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 tracking-tight text-slate-700 sm:text-base">
                    {item.body}
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
