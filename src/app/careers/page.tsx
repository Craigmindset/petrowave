import { AnimatedReveal } from "@/components/animated-reveal";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Careers | PetrolLink",
  description:
    "Join PetrolLink and build a career in high-impact energy projects across procurement, operations, engineering, and sustainability.",
  pathname: "/careers",
});

export default function CareersPage() {
  return (
    <main>
      <section className="bg-[#0a1628] px-6 py-20 text-white sm:py-24">
        <div className="mx-auto w-full max-w-4xl">
          <AnimatedReveal>
            <article>
              <h1 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                Careers at PetrolLink
              </h1>
              <p className="mt-5 text-base leading-7 tracking-[-0.01em] text-slate-200 sm:text-lg">
                We hire curious professionals who thrive in technically
                demanding environments and care about safe, responsible
                execution.
              </p>
            </article>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid w-full max-w-5xl gap-5 md:grid-cols-2">
          {[
            "Project engineers and planners",
            "Supply chain and procurement specialists",
            "HSE and sustainability analysts",
            "Operations and offshore support teams",
          ].map((item, index) => (
            <AnimatedReveal key={item} delay={index * 0.07}>
              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-lg font-semibold tracking-[-0.02em] text-[#11253f]">
                  {item}
                </h2>
                <p className="mt-2 text-sm leading-6 tracking-[-0.01em] text-slate-700">
                  Build expertise with multidisciplinary teams delivering
                  measurable impact across the energy value chain.
                </p>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
