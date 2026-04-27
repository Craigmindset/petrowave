import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0b1422] px-6 py-10 text-slate-200">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="text-sm tracking-[-0.015em] text-slate-300">
          © {year} PetrolLink. Built for resilient energy partnerships.
        </p>
        <div className="flex items-center gap-5 text-sm tracking-[-0.01em] text-slate-300">
          <Link
            href="/sustainability/esg-goals"
            className="transition hover:text-[#ff8a3d]"
          >
            ESG Goals
          </Link>
          <Link
            href="/investors/our-corporate-governance"
            className="transition hover:text-[#ff8a3d]"
          >
            Governance
          </Link>
          <Link href="/contact" className="transition hover:text-[#ff8a3d]">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
