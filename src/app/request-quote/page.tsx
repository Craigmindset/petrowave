"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type QuoteFormState = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  serviceType: string;
  projectLocation: string;
  timeline: string;
  budget: string;
  details: string;
};

const initialForm: QuoteFormState = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  serviceType: "",
  projectLocation: "",
  timeline: "",
  budget: "",
  details: "",
};

export default function RequestQuotePage() {
  const router = useRouter();
  const [form, setForm] = useState<QuoteFormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 700));

    setShowToast(true);
    setForm(initialForm);

    setTimeout(() => {
      router.push("/");
    }, 1400);

    setIsSubmitting(false);
  };

  return (
    <main className="bg-slate-50 px-6 py-14 sm:py-20">
      <section className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="relative overflow-hidden bg-[#071325] p-8 text-white sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(244,122,48,0.35),transparent_35%),radial-gradient(circle_at_90%_90%,rgba(255,255,255,0.12),transparent_40%)]" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#ffb082]">
                Request A Quote
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Tell us your oil & gas project needs
              </h1>
              <p className="mt-4 max-w-md text-sm leading-7 tracking-tight text-slate-200 sm:text-base">
                Share your requirements and our team will review your scope,
                timeline, and operational priorities to provide a structured,
                competitive quote.
              </p>

              <ul className="mt-8 space-y-3 text-sm tracking-tight text-slate-200">
                <li>Procurement and supply-chain support</li>
                <li>Offshore and field operations planning</li>
                <li>Upstream and downstream execution alignment</li>
              </ul>
            </div>
          </aside>

          <div className="p-6 sm:p-8 lg:p-10">
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium tracking-tight text-slate-700">
                  Full Name
                  <input
                    required
                    name="fullName"
                    value={form.fullName}
                    onChange={onChange}
                    className="h-11 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
                  />
                </label>

                <label className="space-y-2 text-sm font-medium tracking-tight text-slate-700">
                  Company Name
                  <input
                    required
                    name="company"
                    value={form.company}
                    onChange={onChange}
                    className="h-11 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium tracking-tight text-slate-700">
                  Business Email
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    className="h-11 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
                  />
                </label>

                <label className="space-y-2 text-sm font-medium tracking-tight text-slate-700">
                  Phone Number
                  <input
                    required
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    className="h-11 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium tracking-tight text-slate-700">
                  Service Type
                  <select
                    required
                    name="serviceType"
                    value={form.serviceType}
                    onChange={onChange}
                    className="h-11 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
                  >
                    <option value="">Select service</option>
                    <option>Procurement</option>
                    <option>Offshore Services</option>
                    <option>Upstream Support</option>
                    <option>Downstream Operations</option>
                    <option>Integrated Project Support</option>
                  </select>
                </label>

                <label className="space-y-2 text-sm font-medium tracking-tight text-slate-700">
                  Project Location
                  <input
                    required
                    name="projectLocation"
                    value={form.projectLocation}
                    onChange={onChange}
                    className="h-11 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium tracking-tight text-slate-700">
                  Expected Timeline
                  <input
                    required
                    name="timeline"
                    value={form.timeline}
                    onChange={onChange}
                    placeholder="e.g. Q3 2026"
                    className="h-11 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
                  />
                </label>

                <label className="space-y-2 text-sm font-medium tracking-tight text-slate-700">
                  Budget Range
                  <input
                    required
                    name="budget"
                    value={form.budget}
                    onChange={onChange}
                    placeholder="e.g. USD 100k - 500k"
                    className="h-11 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
                  />
                </label>
              </div>

              <label className="space-y-2 text-sm font-medium tracking-tight text-slate-700">
                Project Details
                <textarea
                  required
                  name="details"
                  value={form.details}
                  onChange={onChange}
                  rows={5}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-500"
                  placeholder="Share the scope, deliverables, and technical requirements..."
                />
              </label>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                className="inline-flex items-center rounded-xl bg-black px-6 py-3 text-sm font-semibold tracking-tight text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {isSubmitting ? "Submitting..." : "Submit Quote Request"}
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showToast ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="fixed bottom-6 left-1/2 z-60 -translate-x-1/2 rounded-xl bg-[#132640] px-5 py-3 text-sm font-semibold tracking-tight text-white shadow-xl"
          >
            Quote Submitted Successfully
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}
