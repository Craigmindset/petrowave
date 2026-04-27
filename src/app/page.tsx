"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedReveal } from "@/components/animated-reveal";

export default function Home() {
  const [isCardOpen, setIsCardOpen] = useState(true);

  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#081426] px-6 py-24 text-white sm:py-28 lg:py-36">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(112deg,rgba(8,20,38,0.92),rgba(8,20,38,0.55)),url('/oilngas.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_0%_10%,rgba(244,122,48,0.3),transparent_35%),radial-gradient(circle_at_100%_90%,rgba(255,255,255,0.18),transparent_40%)]" />

        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <AnimatedReveal>
            <article className="max-w-3xl">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.12em] text-[#ffb082] sm:font-medium sm:text-base lg:text-xs">
                we at Petrowave Energy Limited
              </p>
              <h1 className="text-[1.8rem] font-bold leading-[0.95] tracking-tighter uppercase text-white sm:font-semibold sm:text-6xl sm:normal-case lg:text-6xl">
                <span className="mb-2 block whitespace-nowrap sm:mb-0">
                  Powering Progress
                </span>
                <span className="mb-2 block whitespace-nowrap sm:mb-0">
                  with proven
                </span>
                <span className="block whitespace-nowrap">
                  Energy Solutions
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-base font-semibold leading-7 tracking-[-0.01em] text-slate-200 sm:font-normal sm:text-lg">
                Petrolwave Energy Limited provides integrated procurement,
                upstream, downstream, offshore, and sustainability services for
                ambitious energy operators. We connect operational rigor with
                measurable long-term value.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#f47a30] px-4 py-3 text-xs font-semibold tracking-[-0.015em] text-[#162235] transition hover:bg-[#ff8a3d] sm:px-6 sm:text-sm"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/investors/investment-presentation"
                  className="inline-flex items-center justify-center rounded-full border border-white/35 px-4 py-3 text-xs font-semibold tracking-[-0.015em] text-white transition hover:bg-white/10 sm:px-6 sm:text-sm"
                >
                  Become a Partner
                </Link>
              </div>
            </article>
          </AnimatedReveal>

          <div className="relative flex items-start justify-end">
            <AnimatePresence mode="wait">
              {isCardOpen ? (
                <motion.div
                  key="card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <AnimatedReveal delay={0.15}>
                    <article className="grid gap-4 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
                      <div className="flex items-center justify-between gap-4">
                        <h2 className="text-sm md:text-xl font-semibold tracking-[-0.03em] text-white">
                          Built for modern energy projects
                        </h2>
                        <button
                          onClick={() => setIsCardOpen(false)}
                          className="ml-auto shrink-0 text-white/60 transition hover:text-white"
                          aria-label="Close card"
                        >
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      <p className="text-sm leading-6 tracking-[-0.01em] text-slate-100 ">
                        We align technical teams, strategic procurement, and
                        responsible governance to deliver stable execution in
                        high-pressure environments.
                      </p>
                      <div className="grid grid-cols-2 gap-3 pt-2 text-sm text-slate-100">
                        <div className="rounded-xl border border-white/20 bg-[#081426]/45 p-3">
                          <p className="text-sm font-semibold tracking-[-0.03em]">
                            Midstream
                          </p>
                          <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-300">
                            explore
                          </p>
                        </div>
                        <div className="rounded-xl border border-white/20 bg-[#081426]/45 p-3">
                          <p className="text-sm font-semibold tracking-[-0.03em]">
                            Downstream
                          </p>
                          <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-300">
                            learn more
                          </p>
                        </div>
                      </div>
                    </article>
                  </AnimatedReveal>
                </motion.div>
              ) : (
                <motion.button
                  key="icon"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setIsCardOpen(true)}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-xl transition hover:bg-white/20"
                  aria-label="Open card"
                >
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-3">
          {[
            {
              title: "Procurement Intelligence",
              body: "Data-backed sourcing, supplier quality controls, and schedule assurance for complex energy projects.",
            },
            {
              title: "Sustainable Operations",
              body: "Environmental and ESG frameworks integrated into execution, reporting, and stakeholder governance.",
            },
            {
              title: "Investor Readiness",
              body: "Transparent portfolio strategy, robust oversight, and disciplined capital deployment.",
            },
          ].map((card, index) => (
            <AnimatedReveal key={card.title} delay={index * 0.08}>
              <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
                <h2 className="text-xl font-semibold tracking-tight text-[#0b1a2e]">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm leading-6 tracking-[-0.01em] text-slate-700 sm:text-base">
                  {card.body}
                </p>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
