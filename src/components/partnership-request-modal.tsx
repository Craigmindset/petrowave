"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";

type PartnershipRequestModalProps = {
  open: boolean;
  onClose: () => void;
};

type PartnershipForm = {
  name: string;
  email: string;
  position: string;
  company: string;
  website: string;
  partnershipType: string;
  requestDate: string;
  meetingType: string;
};

const initialForm: PartnershipForm = {
  name: "",
  email: "",
  position: "",
  company: "",
  website: "",
  partnershipType: "",
  requestDate: "",
  meetingType: "",
};

const partnershipOptions = [
  "Procurement",
  "Distribution",
  "Maintenances",
  "Human Resources",
  "DPR Supply",
  "Environmental Cleaning",
  "Others",
  "Types of Partnership",
];

export function PartnershipRequestModal({
  open,
  onClose,
}: PartnershipRequestModalProps) {
  const [form, setForm] = useState<PartnershipForm>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const isValid =
    form.name.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) &&
    form.position.trim() &&
    form.company.trim() &&
    form.website.trim() &&
    form.partnershipType &&
    form.requestDate &&
    form.meetingType;

  const updateField = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setForm(initialForm);
    setShowToast(true);

    window.setTimeout(() => {
      setShowToast(false);
    }, 2200);
  };

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-[#02060bcc] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 z-60 flex max-h-[90dvh] w-[95vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:w-[92vw]"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-black px-5 py-4 sm:px-6">
              <h3 className="text-xl font-semibold tracking-tight text-white">
                Partnership Form
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-white/25 p-2 text-white/80 transition hover:text-white"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form
              onSubmit={onSubmit}
              className="space-y-4 overflow-y-auto p-5 sm:p-6"
            >
              {showToast ? (
                <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-semibold tracking-tight text-emerald-700">
                  Submitted Successfully
                </div>
              ) : null}

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="grid gap-1 text-sm font-medium tracking-tight text-slate-700 sm:col-span-2">
                  Names
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    className="h-11 rounded-xl border border-slate-200 px-3 text-sm outline-none transition focus:border-[#f47a30] focus:ring-2 focus:ring-[#f47a30]/20"
                  />
                </label>

                <label className="grid gap-1 text-sm font-medium tracking-tight text-slate-700">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={updateField}
                    className="h-11 rounded-xl border border-slate-200 px-3 text-sm outline-none transition focus:border-[#f47a30] focus:ring-2 focus:ring-[#f47a30]/20"
                  />
                </label>

                <label className="grid gap-1 text-sm font-medium tracking-tight text-slate-700">
                  Position
                  <input
                    type="text"
                    name="position"
                    value={form.position}
                    onChange={updateField}
                    className="h-11 rounded-xl border border-slate-200 px-3 text-sm outline-none transition focus:border-[#f47a30] focus:ring-2 focus:ring-[#f47a30]/20"
                  />
                </label>

                <label className="grid gap-1 text-sm font-medium tracking-tight text-slate-700">
                  Company
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={updateField}
                    className="h-11 rounded-xl border border-slate-200 px-3 text-sm outline-none transition focus:border-[#f47a30] focus:ring-2 focus:ring-[#f47a30]/20"
                  />
                </label>

                <label className="grid gap-1 text-sm font-medium tracking-tight text-slate-700">
                  Company Website
                  <input
                    type="url"
                    name="website"
                    value={form.website}
                    onChange={updateField}
                    className="h-11 rounded-xl border border-slate-200 px-3 text-sm outline-none transition focus:border-[#f47a30] focus:ring-2 focus:ring-[#f47a30]/20"
                  />
                </label>

                <label className="grid gap-1 text-sm font-medium tracking-tight text-slate-700">
                  Partnership Area
                  <div className="relative min-w-0">
                    <select
                      name="partnershipType"
                      value={form.partnershipType}
                      onChange={updateField}
                      className="h-11 w-full min-w-0 appearance-none truncate rounded-xl border border-slate-200 bg-white px-3 pr-10 text-sm outline-none transition focus:border-[#f47a30] focus:ring-2 focus:ring-[#f47a30]/20"
                    >
                      <option value="">Choose area</option>
                      {partnershipOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                  </div>
                </label>

                <label className="grid gap-1 text-sm font-medium tracking-tight text-slate-700">
                  Request Date
                  <input
                    type="date"
                    name="requestDate"
                    value={form.requestDate}
                    onChange={updateField}
                    className="h-11 rounded-xl border border-slate-200 px-3 text-sm outline-none transition focus:border-[#f47a30] focus:ring-2 focus:ring-[#f47a30]/20"
                  />
                </label>

                <label className="grid gap-1 text-sm font-medium tracking-tight text-slate-700 sm:col-span-2">
                  Meeting Type
                  <div className="relative min-w-0">
                    <select
                      name="meetingType"
                      value={form.meetingType}
                      onChange={updateField}
                      className="h-11 w-full min-w-0 appearance-none truncate rounded-xl border border-slate-200 bg-white px-3 pr-10 text-sm outline-none transition focus:border-[#f47a30] focus:ring-2 focus:ring-[#f47a30]/20"
                    >
                      <option value="">Select meeting type</option>
                      <option value="Virtual">Virtual</option>
                      <option value="Physical">Physical</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                  </div>
                </label>
              </div>

              <motion.button
                type="submit"
                disabled={!isValid || isSubmitting}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f47a30] px-4 py-3 text-sm font-semibold tracking-tight text-white transition hover:bg-[#ff8a3d] disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white" />
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </motion.button>
            </form>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
