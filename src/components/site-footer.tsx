"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const whyUsLinks = [
  { label: "Procurement", href: "/why-us/procurement" },
  { label: "Upstream", href: "/why-us/upstream" },
  { label: "Downstream", href: "/why-us/downstream" },
  { label: "Offshore", href: "/why-us/offshore" },
];

const whoWeAreLinks = [
  { label: "We Started Well", href: "/who-we-are/we-started-well" },
  { label: "Oil & Gas Objective", href: "/who-we-are/oil-gas-objective" },
  { label: "About Petrowave", href: "/who-we-are/we-started-well" },
  { label: "Careers", href: "/careers" },
];

const partnerLinks = [
  { label: "Partnership", href: "/investors/partnership" },
  // {
  //   label: "Investment Portfolio",
  //   href: "/investors/investment-portfolio",
  // },
  // {
  //   label: "Corporate Governance",
  //   href: "/investors/our-corporate-governance",
  // },
  { label: "Media Files", href: "/investors/media-files" },
];

const supportLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Human Resources", href: "/why-us/human-resources" },
  { label: "Quote Request", href: "/request-quote" },
  { label: "Security", href: "/sustainability/esg-goals" },
];

const socialLinks = [
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.9 2h3.5l-7.6 8.7L23.8 22h-7l-5.5-7.2L4.8 22H1.2l8.1-9.3L.6 2h7.2l5 6.6L18.9 2zm-1.2 18h1.9L6.7 3.9H4.6L17.7 20z"
        />
      </svg>
    ),
  },

  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.9 8.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM5.1 9.9h3.6V20H5.1V9.9zM10.8 9.9h3.5v1.4h.1c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.3 4.4 5.4V20h-3.6v-4.4c0-1-.1-2.4-1.6-2.4-1.6 0-1.8 1.2-1.8 2.3V20h-3.6V9.9z"
        />
      </svg>
    ),
  },

  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM18.4 6.8a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4zM12 2.8c2.8 0 3.1 0 4.2.1 1 .1 1.6.2 2 .4.5.2.9.4 1.3.8.4.4.6.8.8 1.3.2.4.4 1 .4 2 .1 1.1.1 1.4.1 4.2s0 3.1-.1 4.2c-.1 1-.2 1.6-.4 2a3.3 3.3 0 0 1-2.1 2.1c-.4.2-1 .4-2 .4-1.1.1-1.4.1-4.2.1s-3.1 0-4.2-.1c-1-.1-1.6-.2-2-.4a3.3 3.3 0 0 1-2.1-2.1c-.2-.4-.4-1-.4-2C2.8 15.1 2.8 14.8 2.8 12s0-3.1.1-4.2c.1-1 .2-1.6.4-2 .2-.5.4-.9.8-1.3.4-.4.8-.6 1.3-.8.4-.2 1-.4 2-.4 1.1-.1 1.4-.1 4.2-.1zm0-1.8C9.1 1 8.8 1 7.7 1.1c-1.1.1-1.9.2-2.6.5a5 5 0 0 0-1.8 1.2A5 5 0 0 0 2.1 4.6c-.3.7-.4 1.5-.5 2.6C1.5 8.3 1.5 8.6 1.5 12s0 3.7.1 4.8c.1 1.1.2 1.9.5 2.6a5 5 0 0 0 1.2 1.8 5 5 0 0 0 1.8 1.2c.7.3 1.5.4 2.6.5 1.1.1 1.4.1 4.3.1s3.2 0 4.3-.1c1.1-.1 1.9-.2 2.6-.5a5 5 0 0 0 1.8-1.2 5 5 0 0 0 1.2-1.8c.3-.7.4-1.5.5-2.6.1-1.1.1-1.4.1-4.8s0-3.7-.1-4.8c-.1-1.1-.2-1.9-.5-2.6a5 5 0 0 0-1.2-1.8 5 5 0 0 0-1.8-1.2c-.7-.3-1.5-.4-2.6-.5C15.2 1 14.9 1 12 1z"
        />
      </svg>
    ),
  },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-sm tracking-tight text-white/85 transition-colors hover:text-[#f47a30]"
    >
      {label}
    </Link>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 260);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/15 bg-black py-14 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1.9fr]">
          <section className="space-y-5 text-center lg:pr-6 lg:text-left">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-3 lg:justify-start"
            >
              <Image
                src="/petrowave-logo.png"
                alt="Petrowave Energy Limited logo"
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <span className="text-base font-semibold tracking-tight text-white">
                Petrowave Energy Limited
              </span>
            </Link>

            <p className="text-justify justify-centermx-auto max-w-sm text-sm tracking-tight text-white/85 lg:mx-0">
              Petrowave Energy Limited provides integrated procurement,
              upstream, downstream, offshore, and sustainability services for
              ambitious energy operators. We connect operational rigor with
              measurable long-term value..
            </p>

            <nav
              aria-label="Social links"
              className="flex items-center justify-center gap-5 lg:justify-start"
            >
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/85 transition-colors hover:border-[#f47a30] hover:text-[#f47a30]"
                >
                  {social.icon}
                </Link>
              ))}
            </nav>
          </section>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:gap-x-10 lg:grid-cols-4 lg:gap-y-8">
            <nav aria-label="Why us links" className="space-y-3">
              <h2 className="text-sm font-semibold tracking-tight text-white">
                Why us
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {whyUsLinks.map((item) => (
                  <li key={item.label}>
                    <FooterLink href={item.href} label={item.label} />
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Who we are links" className="space-y-3">
              <h2 className="text-sm font-semibold tracking-tight text-white">
                Who we are
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {whoWeAreLinks.map((item) => (
                  <li key={item.label}>
                    <FooterLink href={item.href} label={item.label} />
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Partner links" className="space-y-2">
              <h2 className="text-sm font-semibold tracking-tight text-white">
                Partner with us
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {partnerLinks.map((item) => (
                  <li key={item.label}>
                    <FooterLink href={item.href} label={item.label} />
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Support links" className="space-y-2">
              <h2 className="text-sm font-semibold tracking-tight text-white">
                Support
              </h2>
              <ul className="space-y-2 sm:space-y-2">
                {supportLinks.map((item) => (
                  <li key={item.label}>
                    <FooterLink href={item.href} label={item.label} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-center">
          <p className="text-xs tracking-tight text-white/70">
            Â© {year} Petrowave Energy Limited. All rights reserved.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={handleScrollTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-lg shadow-black/35 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f47a30] hover:text-[#f47a30] ${
          showScrollTop
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </footer>
  );
}
