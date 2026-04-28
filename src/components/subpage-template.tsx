import Image from "next/image";
import { AnimatedReveal } from "@/components/animated-reveal";
import { type SubPageContent } from "@/lib/site-data";

type SubPageTemplateProps = {
  content: SubPageContent;
  useHeroBackground?: boolean;
  heroBackgroundImage?: string;
  children?: React.ReactNode;
};

export function SubPageTemplate({
  content,
  useHeroBackground = false,
  heroBackgroundImage,
  children,
}: SubPageTemplateProps) {
  return (
    <main>
      {useHeroBackground ? (
        <section className="relative isolate overflow-hidden border-b border-white/10 px-6 py-20 text-white sm:py-24">
          <div className="absolute inset-0 -z-20">
            <Image
              src={heroBackgroundImage ?? content.image}
              alt={`${content.heading} visual representing PetrolLink operations`}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(6,16,30,0.9),rgba(6,16,30,0.58))]" />

          <div className="mx-auto w-full max-w-6xl">
            <AnimatedReveal>
              <article className="max-w-3xl">
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {content.heading}
                </h1>
                <p className="mt-5 text-base leading-7 tracking-tight text-slate-200 sm:text-lg">
                  {content.intro}
                </p>
              </article>
            </AnimatedReveal>
          </div>
        </section>
      ) : (
        <section className="relative isolate overflow-hidden border-b border-slate-300/20 bg-[#0a1628] px-6 py-20 text-white sm:py-24">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(244,122,48,0.22),transparent_50%),radial-gradient(circle_at_80%_10%,rgba(40,102,165,0.24),transparent_45%)]" />
          <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <AnimatedReveal>
              <article>
                <h1 className="max-w-2xl text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
                  {content.heading}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 tracking-[-0.01em] text-slate-200 sm:text-lg">
                  {content.intro}
                </p>
              </article>
            </AnimatedReveal>

            <AnimatedReveal delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/5">
                <Image
                  src={content.image}
                  alt={`${content.heading} visual representing PetrolLink operations`}
                  width={1280}
                  height={720}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </AnimatedReveal>
          </div>
        </section>
      )}

      {children}

      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[0.95fr_1.05fr]">
          <AnimatedReveal>
            <article>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#0b1a2e] sm:text-3xl">
                Operational priorities
              </h2>
              <p className="mt-4 text-base leading-7 tracking-[-0.01em] text-slate-700">
                PetrolLink combines engineering discipline, procurement
                reliability, and responsible governance to deliver sustainable
                energy outcomes. Every project framework is designed to support
                long-term performance and stakeholder confidence.
              </p>
            </article>
          </AnimatedReveal>

          <AnimatedReveal delay={0.12}>
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#132640]">
                Key focus areas
              </h3>
              <ul className="mt-4 space-y-3">
                {content.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 tracking-[-0.01em] text-slate-700 sm:text-base"
                  >
                    <span className="mt-2 inline-block size-2 rounded-full bg-[#f47a30]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </AnimatedReveal>
        </div>
      </section>
    </main>
  );
}
