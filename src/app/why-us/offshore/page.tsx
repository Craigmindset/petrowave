export const metadata = {
  title: "Offshore Solutions | PetroWave Energy Limited",
  description:
    "Discover PetroWave's offshore services focused on safer drilling, subsea integrity, and reliable production support across challenging marine environments.",
};

const coreCapabilities = [
  {
    title: "Offshore Exploration Support",
    description:
      "Integrated geoscience, logistics, and marine planning support for high-confidence exploration campaigns.",
  },
  {
    title: "Subsea Engineering",
    description:
      "Design and execution support for subsea architecture, installation planning, and lifecycle reliability.",
  },
  {
    title: "Production Optimization",
    description:
      "Data-informed production and maintenance strategies that improve uptime while reducing offshore risk.",
  },
  {
    title: "HSE and Compliance Assurance",
    description:
      "Strong governance framework aligned to safety, environmental, and regulatory requirements for offshore operations.",
  },
];

const valueHighlights = [
  "Experienced multidisciplinary offshore team",
  "Operational planning built for complex marine conditions",
  "Technology-led asset performance and integrity tracking",
  "Execution models tailored to project scale and risk profile",
];

export default function OffshorePage() {
  return (
    <main className="min-h-screen bg-[#f5f8fb] text-slate-900">
      <section className="relative overflow-hidden bg-[#0e213d] px-6 py-20 text-white sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute -left-28 top-8 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="relative mx-auto w-full max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Why Us / Offshore
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Offshore Excellence Built on Precision, Safety, and Reliability
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
            PetroWave delivers offshore services that combine rigorous
            engineering, proven field execution, and a safety-first culture to
            help operators perform confidently in demanding offshore
            environments.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.2fr_1fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <h2 className="text-2xl font-semibold tracking-tight text-[#102440] sm:text-3xl">
              End-to-End Offshore Capability
            </h2>
            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
              From planning and exploration to subsea execution and production
              support, we partner with clients to deliver resilient offshore
              systems that are engineered for performance and long-term value.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {coreCapabilities.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-base font-semibold tracking-tight text-[#132640]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </article>

          <aside className="rounded-3xl bg-[#132640] p-7 text-slate-100 shadow-sm sm:p-9">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              The PetroWave Advantage
            </h2>
            <p className="mt-4 text-sm leading-7 text-blue-100 sm:text-base">
              Our offshore delivery model is designed to keep operations agile,
              compliant, and resilient under variable sea and field conditions.
            </p>

            <ul className="mt-6 space-y-3">
              {valueHighlights.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm leading-6"
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-5 rounded-3xl border border-white/15 bg-black p-7 shadow-sm sm:flex-row sm:items-center sm:p-9">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Ready to Strengthen Your Offshore Program?
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-200 sm:text-base">
              Connect with our offshore team to align your next project with a
              performance-first and safety-led execution strategy.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold tracking-tight text-black transition hover:bg-slate-200"
          >
            Contact us
          </a>
        </div>
      </section>
    </main>
  );
}
