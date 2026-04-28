"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Mail, Phone } from "lucide-react";
import { useState } from "react";

type ContactFormState = {
  firstName: string;
  lastName: string;
  companyName: string;
  contactNumber: string;
  email: string;
  message: string;
  contactAgreement: boolean;
  dataConsent: boolean;
};

const infoCards = [
  {
    title: "Email us",
    value: "info@petrowaveenergy.com",
    href: "mailto:info@petrowaveenergy.com",
    icon: Mail,
  },
  {
    title: "Phone Number",
    value: "+234 (0) 806 746 2711",
    href: "tel:+2348067462711",
    icon: Phone,
  },
  {
    title: "Headquarter",
    value:
      " 13 Mission Avenue, Peter Odili, Trans Amadi Industrial Layout, Port Harcourt, Rivers State, Nigeria",
    href: undefined,
    icon: Building2,
  },
];

export function ContactSection() {
  const initialForm: ContactFormState = {
    firstName: "",
    lastName: "",
    companyName: "",
    contactNumber: "",
    email: "",
    message: "",
    contactAgreement: false,
    dataConsent: false,
  };

  const [formData, setFormData] = useState<ContactFormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const messageWords = formData.message.trim()
    ? formData.message.trim().split(/\s+/).length
    : 0;

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
  const phoneValid = /^[+]?\d[\d\s()-]{6,}$/.test(
    formData.contactNumber.trim(),
  );

  const isFormValid =
    formData.firstName.trim().length > 1 &&
    formData.lastName.trim().length > 1 &&
    formData.companyName.trim().length > 1 &&
    phoneValid &&
    emailValid &&
    messageWords > 0 &&
    messageWords <= 500 &&
    formData.contactAgreement &&
    formData.dataConsent;

  const handleTextChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    if (name === "message") {
      const words = value.match(/\S+/g) ?? [];
      const nextMessage = words.slice(0, 500).join(" ");
      setFormData((prev) => ({ ...prev, message: nextMessage }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isFormValid || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData(initialForm);
    setShowToast(true);

    window.setTimeout(() => {
      setShowToast(false);
    }, 2500);
  };

  return (
    <main className="bg-slate-50 px-6 py-14 sm:py-16">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <section className="relative overflow-hidden rounded-2xl bg-[linear-gradient(120deg,#000000,#000000)] px-6 py-10 text-white shadow-sm sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute -left-16 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full border border-white/20" />
          <div className="pointer-events-none absolute -right-16 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full border border-white/20" />
          <div className="pointer-events-none absolute left-12 top-6 h-8 w-40 rounded-full border border-white/15" />
          <div className="pointer-events-none absolute right-12 bottom-7 h-8 w-48 rounded-full border border-white/15" />

          <div className="relative z-10">
            <span className="inline-flex rounded-full border border-white/35 bg-white/10 px-4 py-1 text-xs font-semibold tracking-tight text-white">
              WRITE TO US
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Get In Touch
            </h1>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-3xl font-bold tracking-tight text-[#132640]">
              Let&apos;s Talk!
            </h2>
            <p className="mt-3 text-sm tracking-tight text-slate-600 sm:text-base">
              Tell us about your project goals, procurement requirements, or
              operational priorities and our team will respond promptly.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="grid gap-1 text-sm font-medium tracking-tight text-slate-700">
                  First Name
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleTextChange}
                    className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm tracking-tight text-slate-800 outline-none transition focus:border-[#f47a30] focus:ring-2 focus:ring-[#f47a30]/20"
                  />
                </label>
                <label className="grid gap-1 text-sm font-medium tracking-tight text-slate-700">
                  Last Name
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleTextChange}
                    className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm tracking-tight text-slate-800 outline-none transition focus:border-[#f47a30] focus:ring-2 focus:ring-[#f47a30]/20"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="grid gap-1 text-sm font-medium tracking-tight text-slate-700">
                  Company Name
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleTextChange}
                    className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm tracking-tight text-slate-800 outline-none transition focus:border-[#f47a30] focus:ring-2 focus:ring-[#f47a30]/20"
                  />
                </label>
                <label className="grid gap-1 text-sm font-medium tracking-tight text-slate-700">
                  Contact Number
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleTextChange}
                    className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm tracking-tight text-slate-800 outline-none transition focus:border-[#f47a30] focus:ring-2 focus:ring-[#f47a30]/20"
                  />
                </label>
              </div>

              <label className="grid gap-1 text-sm font-medium tracking-tight text-slate-700">
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleTextChange}
                  className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm tracking-tight text-slate-800 outline-none transition focus:border-[#f47a30] focus:ring-2 focus:ring-[#f47a30]/20"
                />
              </label>

              <label className="grid gap-1 text-sm font-medium tracking-tight text-slate-700">
                Message
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleTextChange}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm tracking-tight text-slate-800 outline-none transition focus:border-[#f47a30] focus:ring-2 focus:ring-[#f47a30]/20"
                />
                <div className="flex items-center justify-between text-xs tracking-tight text-slate-500">
                  <span>Maximum 500 words</span>
                  <span>{messageWords}/500</span>
                </div>
                {showToast ? (
                  <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-semibold tracking-tight text-emerald-700 sm:text-sm">
                    Sent Successfully
                  </div>
                ) : null}
              </label>

              <div className="space-y-2 pt-1">
                <label className="flex items-start gap-2 text-xs tracking-tight text-slate-600 sm:text-sm">
                  <input
                    type="checkbox"
                    name="contactAgreement"
                    checked={formData.contactAgreement}
                    onChange={handleCheckChange}
                    className="mt-0.5 h-4 w-4 rounded-sm border-slate-300 text-[#f47a30] focus:ring-[#f47a30]/40"
                  />
                  <span>
                    I agree to receive communication related to my inquiry.
                  </span>
                </label>
                <label className="flex items-start gap-2 text-xs tracking-tight text-slate-600 sm:text-sm">
                  <input
                    type="checkbox"
                    name="dataConsent"
                    checked={formData.dataConsent}
                    onChange={handleCheckChange}
                    className="mt-0.5 h-4 w-4 rounded-sm border-slate-300 text-[#f47a30] focus:ring-[#f47a30]/40"
                  />
                  <span>
                    I consent to Petrowave Energy Limited processing my data
                    for support and response purposes.
                  </span>
                </label>
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                disabled={isSubmitting || !isFormValid}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#090400] px-4 py-3 text-sm font-semibold tracking-tight text-white shadow-sm transition hover:bg-[#ff8a3d] disabled:cursor-not-allowed disabled:bg-slate-400 disabled:opacity-80"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </article>

          <article className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Image
                src="/petrowave-contact2.jpg"
                alt="Professional energy specialist interacting with monitoring technology"
                width={1200}
                height={800}
                className="h-160 w-full object-cover sm:h-72 lg:h-100"
              />
            </div>

            <div className="space-y-3">
              {infoCards.map((card) => {
                const Icon = card.icon;

                return (
                  <motion.article
                    key={card.title}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 320, damping: 24 }}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f47a30]/15 text-[#f47a30]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold tracking-tight text-[#132640]">
                          {card.title}
                        </h3>
                        {card.href ? (
                          <a
                            href={card.href}
                            className="mt-1 inline-flex text-sm tracking-tight text-slate-700 transition hover:text-[#f47a30]"
                          >
                            {card.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm tracking-tight text-slate-700">
                            {card.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}

