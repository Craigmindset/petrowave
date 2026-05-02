import Image from "next/image";
import { AnimatedReveal } from "@/components/animated-reveal";
import { buildMetadata } from "@/lib/metadata";

const pathname = "/why-us/sustainability";

export const metadata = buildMetadata({
  title: "Sustainability | Petrowave Energy Limited",
  description:
    "Explore how Petrowave Energy Limited integrates sustainability into responsible operations, value creation, and stakeholder outcomes.",
  pathname,
});

const sustainabilityObjectives = [
  "Integrate sustainability into our business strategy, culture, and daily operations.",
  "Diligently manage and minimize the environmental footprint of our activities.",
  "Promote responsible resource utilization, energy efficiency, and waste reduction.",
  "Uphold ethical practices and transparency in all business dealings.",
  "Encourage innovation and continuous improvement to enhance sustainable performance.",
  "Engage our employees, clients, and partners in achieving shared sustainability goals.",
];

export default function SustainabilityPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-white/10 px-6 py-20 text-white sm:py-24">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/petrowave-workers.jpg"
            alt="Petrowave field team at work"
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
                Sustainability
              </h1>
              <p className="mt-5 text-base leading-7 tracking-tight text-slate-200 sm:text-lg">
                Responsible operations that protect communities, strengthen
                resilience, and deliver lasting value.
              </p>
            </article>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <AnimatedReveal>
            <article>
              <h2 className="text-2xl font-semibold tracking-tight text-[#132640] sm:text-3xl">
                Our Sustainability Approach
              </h2>
              <p className="mt-4 text-base leading-7 tracking-tight text-slate-700">
                At Petrowave Energy Limited, our approach to sustainability is
                rooted in our commitment to creating a lasting positive impact
                on society, the environment, and the economy. We recognize that
                long-term business success depends on responsible operations
                that balance profitability with social and environmental
                stewardship.
              </p>
              <p className="mt-4 text-base leading-7 tracking-tight text-slate-700">
                We are dedicated to building a path toward sustainable economic
                growth, profitability, and value creation for all our
                stakeholders. Our operations are guided by principles of safety,
                responsibility, and accountability, ensuring that every decision
                contributes to the well-being of our people, communities, and
                the environment.
              </p>
            </article>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-black px-6 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <AnimatedReveal>
            <article className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Sustainability Objective
              </h2>
            </article>
          </AnimatedReveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sustainabilityObjectives.map((item, index) => (
              <AnimatedReveal key={item} delay={index * 0.06}>
                <article className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-100 transition duration-300 sm:hover:-translate-y-1 sm:hover:border-white/25 sm:hover:bg-white/10">
                  <p className="text-sm leading-6 tracking-tight sm:text-base">
                    {item}
                  </p>
                </article>
              </AnimatedReveal>
            ))}
          </div>

          <AnimatedReveal>
            <p className="mt-6 mx-auto max-w-3xl text-center text-sm leading-7 tracking-tight text-slate-200 sm:text-base">
              Through these commitments, Petrowave Energy Limited strives to
              deliver long-term value while contributing to a safer, cleaner,
              and more sustainable future for the communities and industries we
              serve.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-black px-6 py-16 text-center sm:py-20">
        <div className="mx-auto w-full max-w-4xl">
          <AnimatedReveal>
            <article className="rounded-2xl border border-white/15 bg-white/2 p-8">
              <p className="text-lg font-semibold tracking-tight text-white sm:text-2xl">
                Where responsibility ends for others, our commitment to quality,
                accountability, and performance begins.
              </p>
            </article>
          </AnimatedReveal>
        </div>
      </section>
    </main>
  );
}
