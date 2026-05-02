"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { PartnershipRequestModal } from "@/components/partnership-request-modal";

const strategyCards = [
  {
    title: "Procurement Partnership",
    description:
      "Collaborate on strategic sourcing frameworks, supplier quality controls, and contract execution that reduce cost leakage and strengthen reliability.",
    image: "/petro-truck-distribute.jpg",
  },
  {
    title: "Distribution Partnership",
    description:
      "Build scalable downstream routes with shared planning, terminal coordination, and delivery assurance for resilient market reach.",
    image: "/petrowave-drill-reporting.jpg",
  },
  {
    title: "Maintenance Partnership",
    description:
      "Co-develop preventive and corrective maintenance programs for critical assets to maximize uptime and improve long-term performance.",
    image: "/petrowave-reporting.jpg",
  },
];

const partnerLogos = [
  { label: "CS OILFIELD", src: "/client logos/cs-logo.svg" },
  { label: "GOT", src: "/client logos/GOT.jfif" },
  { label: "American Completions Tool", src: "/client logos/America.jfif" },
  { label: "Botil", src: "/client logos/botil.webp" },
  { label: "Neway Valves", src: "/client logos/newway.png" },
];

export function PartnershipContent() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="bg-slate-50">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#081426] px-6 py-20 text-white sm:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_0%_10%,rgba(244,122,48,0.28),transparent_35%),radial-gradient(circle_at_100%_90%,rgba(255,255,255,0.14),transparent_40%)]" />
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#ffb082]">
            Strategic Collaboration
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Strategic Partnership
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 tracking-tight text-slate-200 sm:text-lg">
            PETROWAVE Energy Limited is focused on delivering value-added
            services to her clients, hence, our focus includes developing
            strategic partnerships with innovative and technology driven
            companies in the area of our specialization, such as our partnership
            with CS OILFIELD, GOT, American Completions Tool, Botil, Neway
            Valves.
          </p>
        </div>
      </section>

      <section className="px-6 py-10 sm:py-12">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {partnerLogos.map((partner) => (
              <div
                key={partner.label}
                className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-4 transition hover:border-[#f47a30]"
              >
                <span className="sr-only">{partner.label}</span>
                <div className="relative h-12 w-40">
                  <Image
                    src={partner.src}
                    alt={partner.label}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold tracking-tight text-[#132640] sm:text-4xl">
              Three Strategy Partnership Areas
            </h2>
            <p className="mt-3 max-w-3xl text-sm tracking-tight text-slate-600 sm:text-base">
              Select the partnership lane that best aligns with your capability
              and growth plan.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {strategyCards.map((card) => (
              <motion.article
                key={card.title}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="relative mb-4 aspect-4/3 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-[#132640]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-6 tracking-tight text-slate-600 sm:text-base">
                  {card.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 sm:pb-20">
        <div className="mx-auto w-full max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-[#132640] sm:text-3xl">
            Build a Partnership That Delivers Results
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 tracking-tight text-slate-600 sm:text-base">
            Submit a partnership request and our strategy team will schedule an
            evaluation session to align priorities, define scope, and identify
            execution milestones.
          </p>
          <motion.button
            type="button"
            onClick={() => setOpenModal(true)}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.99 }}
            className="mt-6 inline-flex items-center rounded-xl bg-[#f47a30] px-6 py-3 text-sm font-semibold tracking-tight text-white transition hover:bg-[#ff8a3d]"
          >
            Partnership Request
          </motion.button>
        </div>
      </section>

      <PartnershipRequestModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </main>
  );
}
