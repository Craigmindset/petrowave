import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact | PetrolLink",
  description:
    "Contact PetrolLink for procurement support, project partnerships, and investor conversations in the energy sector.",
  pathname: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[#0a1628] px-6 py-20 text-white sm:py-24">
        <div className="mx-auto w-full max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            Contact PetrolLink
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 tracking-[-0.01em] text-slate-200 sm:text-lg">
            Reach out to discuss procurement strategy, technical operations
            support, and sustainability-aligned project delivery.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid w-full max-w-4xl gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <article>
            <h2 className="text-xl font-semibold tracking-[-0.025em] text-[#132640]">
              Head Office
            </h2>
            <p className="mt-3 text-sm leading-6 tracking-[-0.01em] text-slate-700 sm:text-base">
              41 Harbour View Road, Victoria Island, Lagos, Nigeria
            </p>
          </article>
          <article className="grid gap-1 text-sm leading-6 tracking-[-0.01em] text-slate-700 sm:text-base">
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#132640]">
              Business Inquiries
            </h3>
            <p>Email: partnerships@petrolink-energy.com</p>
            <p>Phone: +234 (0) 700 PETROLINK</p>
          </article>
        </div>
      </section>
    </main>
  );
}
