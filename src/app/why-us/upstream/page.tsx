import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import { AnimatedReveal } from "@/components/animated-reveal";
import { buildMetadata } from "@/lib/metadata";

const pathname = "/why-us/upstream";

export const metadata = buildMetadata({
  title: "Upstream | PetrolLink",
  description:
    "Discover Petrowave Energy Limited upstream asset optimization services that improve performance, reduce downtime, and drive sustainable value.",
  pathname,
});

export default function UpstreamPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-white/10 px-6 py-20 text-white sm:py-24">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/upstream-petrowave.jpg"
            alt="Upstream operations and drilling optimization"
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
                Upstream Confidence From Planning to Production
              </h1>
              <p className="mt-5 text-base leading-7 tracking-tight text-slate-200 sm:text-lg">
                We help operators optimize upstream performance with measurable,
                data-backed strategies that strengthen productivity and
                long-term asset value.
              </p>
            </article>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-black px-6 py-8 sm:py-8 ">
        <div className="mx-auto w-full max-w-6xl">
          <AnimatedReveal>
            <h2 className="text-2xl font-semibold tracking-tight text-[#f7f5f4] sm:text-4xl text-center">
              Upstream Asset Optimization Services
            </h2>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-white px-6 pb-16 sm:pb-20 mt-10">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-stretch">
          <AnimatedReveal>
            <article>
              <p className="mt-4 whitespace-pre-line text-sm leading-7 tracking-tight text-slate-700 sm:text-base">
                {`At Petrowave Energy Limited, we help operators unlock the full value of their upstream assets through intelligent, data-driven optimization.

As a forward-thinking entrant in the energy sector, we combine technical expertise, modern digital tools, and disciplined execution to enhance production performance, reduce operating costs, and extend asset life-without the need for additional drilling.

Our approach is built on precision and adaptability. We assess each asset holistically, identifying inefficiencies across wells, reservoirs, and production systems, then deploy tailored solutions that deliver measurable results.`}
              </p>
            </article>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm transition duration-300 sm:hover:-translate-y-1 sm:hover:border-slate-300 sm:hover:shadow-md">
              <div className="relative h-full min-h-96 w-full">
                <Image
                  src="/upstream-petrowave.jpg"
                  alt="Upstream drilling and reporting operations"
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
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 sm:hover:-translate-y-1 sm:hover:border-slate-300 sm:hover:shadow-md">
              <div className="relative h-full min-h-120 w-full">
                <Image
                  src="/upstream-petrowave2.jpg"
                  alt="Petrowave upstream field team"
                  fill
                  className="object-cover"
                />
              </div>
            </article>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 sm:hover:-translate-y-1 sm:hover:border-slate-300 sm:hover:shadow-md sm:p-8">
              <div className="flex items-center gap-2">
                <CircleCheckBig className="h-5 w-5 text-[#f47a30]" />
                <h3 className="text-2xl font-semibold tracking-tight text-[#132640] sm:text-3xl">
                  What we deliver
                </h3>
              </div>

              <ul className="mt-5 grid grid-cols-1 gap-3 text-sm tracking-tight text-slate-700 sm:text-base md:grid-cols-2">
                {[
                  "Improved well and field productivity",
                  "Optimized reservoir recovery strategies",
                  "Reduced downtime and operational costs",
                  "Real-time performance monitoring and insights",
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
                {`We position ourselves not just as a service provider, but as a strategic partner-focused on driving sustainable value for operators and long-term returns for investors.

With a commitment to innovation and operational excellence, Petrowave Energy Limited is redefining how upstream performance is optimized in a rapidly evolving energy landscape.`}
              </p>
            </article>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-black px-6 py-16 sm:py-20 text-center justify-center">
        <div className="mx-auto w-full max-w-6xl ">
          <AnimatedReveal>
            <article className="rounded-2xl border border-white/15 bg-white/2 p-8 transition duration-300 sm:hover:-translate-y-1 sm:hover:border-white/30 sm:hover:bg-white/5">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                We are doing more for you
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 tracking-tight text-slate-200 sm:text-base ">
                Beyond optimization, we deliver strategic partnership, digital
                execution, and operational foresight that help energy operators
                scale with confidence in a changing market.
              </p>
            </article>
          </AnimatedReveal>
        </div>
      </section>
    </main>
  );
}
