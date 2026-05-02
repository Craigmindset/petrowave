export const metadata = {
  title: "ESG Goals | PetroWave Energy Limited",
  description:
    "Track PetroWave's ESG goals across environmental performance, social value creation, and governance discipline.",
};

const esgGallery = [
  {
    title: "Methane Monitoring in Field Operations",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
    category: "Environmental",
  },
  {
    title: "Flaring Reduction Control Room",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
    category: "Environmental",
  },
  {
    title: "Produced Water Management",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    category: "Environmental",
  },
  {
    title: "Power Efficiency Retrofit",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1200&q=80",
    category: "Environmental",
  },
  {
    title: "Community Health Outreach",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    category: "Supply Chain",
  },

  {
    title: "Workforce Safety Briefing",
    image: "/Workforce.jpg",
    category: "Supply Chain",
  },
  {
    title: "Local Supplier Development",
    image: "/local supplier.jpg",
    category: "Supply Chain",
  },
  {
    title: "Board-Level ESG Oversight",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    category: "Governance",
  },
  {
    title: "Compliance and Audit Review",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    category: "Governance",
  },
  {
    title: "Contractor Integrity Standards",
    image: "/contactor.jpg",
    category: "Governance",
  },
  {
    title: "Digital Risk and Incident Tracking",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    category: "Governance",
  },
];

export default function EsgGoalsPage() {
  return (
    <main className="min-h-screen bg-[#f6f7fb] text-slate-900">
      <section className="relative overflow-hidden bg-[#1a1f3b] px-6 py-20 text-white sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-14 bottom-0 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />

        <div className="relative mx-auto w-full max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">
            Sustainability / ESG Goals
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Ambitious ESG Goals Grounded in Execution Discipline
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-indigo-50 sm:text-lg">
            Our ESG roadmap is built around concrete targets, accountable
            ownership, and measurable outcomes that strengthen long-term value
            for stakeholders.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">
                ESG Gallery
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#1a1f3b] sm:text-3xl">
                ESG Goals in Oil and Gas Operations
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {esgGallery.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 sm:hover:-translate-y-1 sm:hover:border-slate-300 sm:hover:shadow-md"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-[#1a1f3b]/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                    {item.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold leading-6 tracking-tight text-slate-800">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
