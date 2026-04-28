import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedReveal } from "@/components/animated-reveal";

const pathname = "/why-us/procurement";

export const metadata: Metadata = {
  title: "Procurement | Petrowave",
  description:
    "Explore Petrowave procurement and offshore services built for reliable execution, operational efficiency, and long-term value delivery.",
  alternates: {
    canonical: pathname,
  },
};

export default function ProcurementPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-white/10 px-6 py-20 text-white sm:py-24">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/procurement-petrowave.jpg"
            alt="Procurement and offshore operations"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(6,16,30,0.9),rgba(6,16,30,0.58))]" />

        <div className="mx-auto w-full max-w-6xl">
          <AnimatedReveal>
            <article className="max-w-3xl">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Procurement and Offshore Services
              </h1>
              <p className="mt-5 text-base leading-7 tracking-tight text-slate-200 sm:text-lg">
                Integrated support that keeps critical supply and offshore
                operations aligned, responsive, and execution-ready.
              </p>
            </article>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl items-stretch gap-8 lg:grid-cols-2">
          <AnimatedReveal>
            <article className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#132640] sm:text-3xl">
                Procurement Services
              </h2>
              <p className="mt-4 whitespace-pre-line text-sm leading-7 tracking-tight text-slate-700 sm:text-base">
                {`We provide end-to-end procurement solutions tailored to the oil and gas sector, ensuring that critical materials and equipment are delivered on time and to specification.

Our procurement scope includes:`}
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 tracking-tight text-slate-700 sm:text-base">
                <li>Sourcing of petroleum products and industrial materials</li>
                <li>
                  Supply of drilling, production, and maintenance equipment
                </li>
                <li>Vendor identification, evaluation, and management</li>
                <li>Contract negotiation and cost optimization</li>
                <li>Logistics coordination and delivery tracking</li>
              </ul>

              <p className="mt-5 text-sm leading-7 tracking-tight text-slate-700 sm:text-base">
                Our approach emphasizes quality, transparency, and efficiency,
                ensuring that every procurement process aligns with client
                objectives and industry standards.
              </p>
            </article>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <article className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#132640] sm:text-3xl">
                Offshore Services
              </h2>
              <p className="mt-4 whitespace-pre-line text-sm leading-7 tracking-tight text-slate-700 sm:text-base">
                {`Our offshore services are designed to support seamless operations across marine and production environments. We bring structure, coordination, and technical oversight to complex offshore activities.

Key offshore capabilities include:`}
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 tracking-tight text-slate-700 sm:text-base">
                <li>Offshore logistics and marine coordination</li>
                <li>Vessel support and scheduling</li>
                <li>Offshore intake and offtake operations</li>
                <li>Cargo supervision and transfer management</li>
                <li>Compliance with maritime and safety regulations</li>
              </ul>

              <p className="mt-5 text-sm leading-7 tracking-tight text-slate-700 sm:text-base">
                We work closely with trusted partners and experienced personnel
                to ensure safe, timely, and efficient offshore execution.
              </p>
            </article>
          </AnimatedReveal>
        </div>

        <AnimatedReveal delay={0.15}>
          <div className="mx-auto mt-10 flex w-full max-w-6xl justify-center">
            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-black px-6 py-3 text-sm font-semibold tracking-tight text-white transition hover:bg-slate-800 sm:text-base"
            >
              Contact us
            </Link>
          </div>
        </AnimatedReveal>
      </section>

      <section className="bg-black px-6 py-16 text-center sm:py-20">
        <div className="mx-auto w-full max-w-4xl">
          <AnimatedReveal>
            <article className="rounded-2xl border border-white/15 bg-white/2 p-8">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Our Commitment
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 tracking-tight text-slate-200 sm:text-base">
                At Petrowave Energy Limited, we are committed to delivering
                procurement and offshore services that drive operational
                success. Through strategic partnerships, disciplined execution,
                and a focus on long-term value, we position ourselves as a
                trusted partner to both clients and investors in the energy
                sector.
              </p>
            </article>
          </AnimatedReveal>
        </div>
      </section>
    </main>
  );
}
