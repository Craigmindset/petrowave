import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  BadgeDollarSign,
  Briefcase,
  Handshake,
  MapPin,
  ShieldCheck,
  Timer,
  Users,
} from "lucide-react";
import { AnimatedReveal } from "@/components/animated-reveal";
import { buildMetadata } from "@/lib/metadata";

const pathname = "/why-us/competitive-edge";

export const metadata = buildMetadata({
  title: "Competitive Edge | PetrolLink",
  description:
    "Discover the eight pillars that define Petrowave Energy Limited's competitive edge in the Nigerian energy sector.",
  pathname,
});

const pillars = [
  {
    title: "Quality",
    body: "We adhere to rigorous engineering and technical standards to deliver superior results across every project phase.",
    Icon: BadgeCheck,
  },
  {
    title: "Integrity",
    body: "Transparency and ethical conduct are at the heart of our operations, fostering long-term trust with our stakeholders.",
    Icon: ShieldCheck,
  },
  {
    title: "Timely Delivery",
    body: "Our sophisticated logistics frameworks ensure that project milestones are met with precision and efficiency.",
    Icon: Timer,
  },
  {
    title: "Strategic Partnership",
    body: "We leverage professional collaborations to integrate international best practices with deep local market insights.",
    Icon: Handshake,
  },
  {
    title: "Competitive Pricing",
    body: "We provide cost-effective energy solutions by optimizing our supply chain and operational workflows.",
    Icon: BadgeDollarSign,
  },
  {
    title: "Professionalism",
    body: "Our team of seasoned industry veterans executes every task with high technical proficiency and responsibility.",
    Icon: Briefcase,
  },
  {
    title: "Local Content",
    body: "Based in Port Harcourt, we are deeply committed to utilizing Nigerian expertise and resources to fuel national prosperity.",
    Icon: MapPin,
  },
  {
    title: "Teamwork",
    body: "Success is a collective effort; we foster a collaborative environment where diverse skills converge to solve complex energy challenges.",
    Icon: Users,
  },
];

export default function CompetitiveEdgePage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-white/10 px-6 py-20 text-white sm:py-24">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/upstream-petrowave2.jpg"
            alt="Energy professionals collaborating on site"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(112deg,rgba(6,16,30,0.92),rgba(6,16,30,0.62))]" />

        <div className="mx-auto w-full max-w-6xl">
          <AnimatedReveal>
            <article className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ffb082]">
                Competitive Edge
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                Operational excellence with measurable value
              </h1>
              <p className="mt-5 text-base leading-7 tracking-tight text-slate-200 sm:text-lg">
                At PetroWave Energy Limited, our success is built on a
                foundation of operational excellence and an unwavering
                commitment to the highest industry standards. Our competitive
                edge is defined by a strategic blend of local expertise and
                global best practices, ensuring we remain a trusted leader in
                the Nigerian energy sector.
              </p>
            </article>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <AnimatedReveal>
            <article className="max-w-4xl">
              <h2 className="text-3xl font-semibold tracking-tight text-[#132640] sm:text-4xl">
                Eight pillars that drive value
              </h2>
              <p className="mt-4 text-sm leading-7 tracking-tight text-slate-700 sm:text-base">
                We distinguish ourselves through eight core pillars that drive
                value for our clients and partners.
              </p>
            </article>
          </AnimatedReveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => (
              <AnimatedReveal key={pillar.title} delay={index * 0.06}>
                <article className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 sm:hover:-translate-y-1 sm:hover:border-slate-300 sm:hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#f47a30] shadow-sm">
                      <pillar.Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-base font-semibold tracking-tight text-[#132640]">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 tracking-tight text-slate-600">
                    {pillar.body}
                  </p>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-5xl text-center">
          <AnimatedReveal>
            <article className="rounded-2xl border border-white/15 bg-white/5 p-8">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Built for long-term value creation
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 tracking-tight text-slate-200 sm:text-base">
                By integrating these principles into our core business model,
                PetroWave Energy Limited provides a stable, forward-thinking
                platform geared toward long-term value creation and industrial
                progress.
              </p>
              <Link
                href="/why-us/qhse-policy"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#f47a30] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#162235] transition hover:bg-[#ff8a3d] sm:text-sm"
              >
                Explore our QHSE Policy
              </Link>
            </article>
          </AnimatedReveal>
        </div>
      </section>
    </main>
  );
}
