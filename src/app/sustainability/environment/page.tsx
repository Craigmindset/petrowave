export const metadata = {
  title: "Environmental Stewardship | PetroWave Energy Limited",
  description:
    "Explore PetroWave's environmental strategy focused on emissions reduction, water stewardship, and resilient operations.",
};

const pillars = [
  {
    title: "Carbon Reduction Pathway",
    detail:
      "We deploy practical emissions controls across assets, including flare optimization, energy efficiency upgrades, and methane monitoring.",
  },
  {
    title: "Water and Land Protection",
    detail:
      "Our operational plans prioritize responsible water use, spill prevention, and restoration-ready site management through project lifecycles.",
  },
  {
    title: "Biodiversity Safeguards",
    detail:
      "Risk mapping and habitat-sensitive planning help us minimize ecological impact around offshore and onshore operational corridors.",
  },
  {
    title: "Compliance with Accountability",
    detail:
      "We align with applicable regulatory requirements and continuously audit environmental controls to sustain measurable performance.",
  },
];

const metrics = [
  { label: "Operational Sites with Monitoring Coverage", value: "100%" },
  { label: "Active Environmental Improvement Projects", value: "18" },
  { label: "Target Emissions Intensity Reduction", value: "32%" },
];

export default function EnvironmentPage() {
  return (
    <main className="min-h-screen bg-[#f3f8f6] text-slate-900">
      <section className="relative overflow-hidden bg-[#0b2c2b] px-6 py-20 text-white sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute -left-24 top-6 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative mx-auto w-full max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Sustainability / Environment
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Building Cleaner Energy Operations with Measurable Impact
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-50 sm:text-lg">
            Environmental stewardship is embedded into how PetroWave plans,
            operates, and scales projects, from engineering design decisions to
            field-level execution.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid w-full max-w-6xl gap-5 sm:grid-cols-3">
          {metrics.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition duration-300 sm:hover:-translate-y-1 sm:hover:border-emerald-200 sm:hover:shadow-md"
            >
              <p className="text-3xl font-semibold tracking-tight text-[#0b2c2b]">
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-6xl rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm sm:p-9">
          <h2 className="text-2xl font-semibold tracking-tight text-[#0b2c2b] sm:text-3xl">
            Core Environmental Pillars
          </h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 sm:hover:-translate-y-1 sm:hover:border-slate-300 sm:hover:shadow-md"
              >
                <h3 className="text-base font-semibold tracking-tight text-[#103836]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {pillar.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
