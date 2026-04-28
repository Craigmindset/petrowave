import type { Metadata } from "next";
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import { AnimatedReveal } from "@/components/animated-reveal";

const pathname = "/why-us/downstream";

export const metadata: Metadata = {
  title: "Downstream | Petrowave",
  description:
    "Discover how Petrowave strengthens downstream operations through process optimization, reliable distribution, and high-performance facility support.",
  alternates: {
    canonical: pathname,
  },
};

export default function DownstreamPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-white/10 px-6 py-20 text-white sm:py-24">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/petro-truck-distribute.jpg"
            alt="Downstream fuel transport and distribution"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(6,16,30,0.88),rgba(6,16,30,0.56))]" />

        <div className="mx-auto w-full max-w-6xl">
          <AnimatedReveal>
            <article className="max-w-3xl">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Petroleum Products Marketing
              </h1>
              <p className="mt-5 text-base leading-7 tracking-tight text-slate-200 sm:text-lg">
                At Petrowave Energy Limited, we support downstream operators
                with practical, high-impact optimization across refining,
                storage, and product distribution.
              </p>
            </article>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-black px-6 py-8 sm:py-8">
        <div className="mx-auto w-full max-w-6xl">
          <AnimatedReveal>
            <h2 className="text-center text-2xl font-semibold tracking-tight text-[#f7f5f4] sm:text-2xl">
              Downstream Performance & Distribution Excellence
            </h2>
          </AnimatedReveal>
        </div>
      </section>

      <section className="mt-10 bg-white px-6 pb-16 sm:pb-20">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-stretch">
          <AnimatedReveal>
            <article>
              <p className="mt-4 whitespace-pre-line text-sm leading-7 tracking-tight text-slate-700 sm:text-base">
                {`Petrowave Energy Limited is committed to delivering dependable petroleum products marketing services, built on integrity, strong logistics capability, and a deep understanding of market dynamics. As a growing player in the energy sector, we are focused on bridging supply gaps and ensuring that high-quality petroleum products reach end-users efficiently and safely.`}
              </p>
              <p className="mt-2 whitespace-pre-line font-bold text-2xl leading-7 tracking-tight text-slate-700 sm:text-xl">
                {`Supply & Distribution Capability.`}
              </p>
              <p className="mt-4 whitespace-pre-line text-sm leading-7 tracking-tight text-slate-700 sm:text-base">
                {`Petrowave Energy Limited leverages a robust supply chain network designed for reliability and scalability. Our approach includes:`}
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-3 text-sm tracking-tight text-slate-700 sm:text-base md:grid-cols-2">
                <li className="flex items-center gap-2">
                  <CircleCheckBig className="h-10 w-10" />
                  Strategic Sourcing: Partnering with credible refineries and
                  suppliers to ensure product quality and availability
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheckBig className="h-10 w-10" />
                  Efficient Logistics: Coordinating marine, trucking, and depot
                  operations for timely delivery
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheckBig className="h-10 w-10" />
                  Storage & Handling: Ensuring safe and compliant storage
                  solutions that preserve product integrity
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheckBig className="h-10 w-10" />
                  Last-Mile Delivery: Reliable distribution channels that meet
                  client timelines and operational demands
                </li>
              </ul>
            </article>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
              <div className="relative h-full  min-h-90 md:min-h-120 w-full">
                <Image
                  src="/petrowave-fuel-pump.jpg"
                  alt="Downstream fueling and dispensing infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
            </article>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-stretch">
          <AnimatedReveal>
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative h-full  min-h-90 md:min-h-120 w-full">
                <Image
                  src="/petro-truck-distribute.jpg"
                  alt="Petrowave downstream distribution operations"
                  fill
                  className="object-cover"
                />
              </div>
            </article>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-2">
                <CircleCheckBig className="h-15 w-15 text-[#f47a30]" />
                <h3 className="text-sm font-semibold tracking-tight text-[#132640] sm:text-xl">
                  We specialize in the sourcing, supply, and distribution of a
                  wide range of refined petroleum products, including:
                </h3>
              </div>

              <ul className="mt-5 grid grid-cols-1 gap-3 text-sm tracking-tight text-slate-700 sm:text-base md:grid-cols-2">
                {[
                  "Premium Motor Spirit (PMS)",
                  "Automotive Gas Oil (AGO / Diesel)",
                  "Dual Purpose Kerosene (DPK)",
                  "Jet Fuel (ATK / Aviation Turbine Kerosene)",
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 whitespace-pre-line text-sm leading-7 tracking-tight text-slate-700 sm:text-base">
                {`Petrowave operates as a strategic downstream partner, helping operators strengthen reliability while improving service delivery across the value chain.

Our operations are structured to support bulk buyers, industrial clients, aviation operators, and retail distribution networks.`}
              </p>
            </article>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-black px-6 py-16 text-center sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <AnimatedReveal>
            <article className="rounded-2xl border border-white/15 bg-white/2 p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                Reliable energy delivery starts downstream
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 tracking-tight text-slate-200 sm:text-base">
                Beyond process optimization, we deliver operational clarity,
                compliance confidence, and distribution reliability that help
                energy businesses scale with consistency.
              </p>
            </article>
          </AnimatedReveal>
        </div>
      </section>
    </main>
  );
}
