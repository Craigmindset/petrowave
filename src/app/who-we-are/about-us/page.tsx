import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Crown,
  Flame,
  RefreshCw,
  ShieldCheck,
  Users,
} from "lucide-react";
import { AnimatedReveal } from "@/components/animated-reveal";
import { buildMetadata } from "@/lib/metadata";
import { subPageContent } from "@/lib/site-data";

const pathname = "/about-us";
const content = subPageContent[pathname];

const coreValues = [
  {
    title: "Accountability",
    body: "We take ownership of our actions and deliver on our commitments with integrity, transparency, and professionalism.",
    Icon: ShieldCheck,
  },
  {
    title: "Resilience",
    body: "We remain focused and determined, overcoming challenges with strength, innovation, and a results-driven mindset.",
    Icon: Flame,
  },
  {
    title: "Adaptability",
    body: "We embrace change, leverage creativity, and apply smart solutions to meet evolving industry and client needs.",
    Icon: RefreshCw,
  },
  {
    title: "Diversity & Inclusion",
    body: "We value the unique contributions of every individual and promote an inclusive environment where ideas and perspectives thrive.",
    Icon: Users,
  },
  {
    title: "Excellence",
    body: "We consistently pursue the highest standards of quality, performance, and service delivery in everything we do.",
    Icon: Award,
  },
  {
    title: "Leadership",
    body: "We lead through innovation, expertise, and example - inspiring our people, partners, and industry to achieve greater success.",
    Icon: Crown,
  },
];

export const metadata = buildMetadata({
  title: content.title,
  description: content.description,
  pathname,
});

export default function AboutUsPage() {
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
                Petrowave Energy Limited is a fast-growing indigenous company
                committed to delivering quality, value-driven, and
                cost-effective solutions to the Oil and Gas industry. With a
                strong focus on innovation, safety, and sustainability, we
                provide a comprehensive range of services across the upstream,
                midstream, and downstream sectors, ensuring operational
                excellence that consistently meets and exceeds the highest
                industry standards. Our mission is to create long-term value for
                our clients, partners, and stakeholders through efficient,
                reliable, and forward-thinking energy solutions.
              </p>

              <p className="mt-4 text-base leading-7 tracking-tight text-slate-700 text-justify">
                Backed by a team of highly qualified and experienced
                professionals, Petrowave Energy Limited brings together deep
                expertise in Drilling, Well Intervention, Engineering,
                Construction & Installation, Maintenance, Procurement and
                Consultancy Services. We combine technical excellence with
                global best practices to deliver solutions that enhance
                performance, optimize operations, and ensure sustainable energy
                delivery. Our operations are built on the principles of Total
                Quality Management (TQM) emphasizing strict compliance with
                international codes, classification rules, and regulatory
                requirements that guarantee safety, quality, and reliability in
                every project.
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
            <article className="overflow-hidden rounded-2xl">
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

      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <AnimatedReveal>
            <article className="max-w-4xl">
              <p className="text-base leading-7 tracking-tight text-slate-700 sm:text-lg">
                Through our commitment to excellence, innovation, and continuous
                improvement, Petrowave Energy Limited has earned a solid
                reputation and commendable track record within the Energy and
                Oil & Gas sectors. We continue to expand our capabilities,
                leveraging advanced technology, strategic partnerships, and a
                results-driven approach to support our clients in achieving
                operational success while contributing to the sustainable growth
                of the energy industry in Nigeria and beyond.
              </p>
              <p className="mt-4 text-sm italic leading-7 tracking-tight text-slate-600 sm:text-base">
                Responsibility is the baseline. Excellence is our standard.
              </p>
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
                  className={`h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${item.hoverClass}`}
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

      <section className="bg-black px-6 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <AnimatedReveal>
            <article className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Core Values
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                CORE VALUES
              </h2>
              <p className="mt-4 text-sm leading-7 tracking-tight text-slate-200 sm:text-base">
                At Petrowave Energy Limited, our core values define our culture,
                guide our decisions, and drive our commitment to excellence in
                every project we undertake. All operations are in line with the
                vision of becoming Africa's leading independent and responsible
                energy generation company.
              </p>
            </article>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-black px-6 pb-16 sm:pb-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, index) => (
              <AnimatedReveal key={value.title} delay={index * 0.06}>
                <article className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 sm:hover:-translate-y-1 sm:hover:border-white/25 sm:hover:bg-white/10">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white">
                      <value.Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-base font-semibold tracking-tight text-white">
                      {value.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 tracking-tight text-slate-200">
                    {value.body}
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
