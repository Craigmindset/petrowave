export const metadata = {
  title: "Social Investment | PetroWave Energy Limited",
  description:
    "Learn how PetroWave creates long-term shared value through education, enterprise development, and health-focused social investment programs.",
};

const focusAreas = [
  {
    title: "Education and Skills",
    summary:
      "Scholarships, vocational training, and digital learning support to equip youth with future-ready capabilities.",
  },
  {
    title: "Local Enterprise Growth",
    summary:
      "Targeted supplier development and entrepreneurship support for sustainable local economic participation.",
  },
  {
    title: "Community Health",
    summary:
      "Preventive care outreach, medical support partnerships, and resilient health access programs in host communities.",
  },
  {
    title: "Infrastructure Support",
    summary:
      "Strategic investment in essential community infrastructure that improves safety, mobility, and quality of life.",
  },
];

const impactNumbers = [
  { value: "12k+", label: "Direct Program Beneficiaries" },
  { value: "220+", label: "Small Businesses Supported" },
  { value: "34", label: "Partner Communities" },
];

export default function SocialInvestmentPage() {
  return (
    <main className="min-h-screen bg-[#faf7f4] text-slate-900">
      <section className="relative overflow-hidden bg-[#3a2417] px-6 py-20 text-white sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute -left-20 top-12 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-orange-300/20 blur-3xl" />

        <div className="relative mx-auto w-full max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
            Sustainability / Social Investment
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Investing in Communities to Build Shared and Lasting Progress
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-amber-50 sm:text-lg">
            PetroWave partners with communities through practical programs that
            strengthen opportunity, improve wellbeing, and support local
            resilience beyond project timelines.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid w-full max-w-6xl gap-5 sm:grid-cols-3">
          {impactNumbers.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm"
            >
              <p className="text-3xl font-semibold tracking-tight text-[#3a2417]">
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
        <div className="mx-auto w-full max-w-6xl rounded-3xl border border-orange-100 bg-white p-7 shadow-sm sm:p-9">
          <h2 className="text-2xl font-semibold tracking-tight text-[#3a2417] sm:text-3xl">
            Priority Investment Areas
          </h2>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {focusAreas.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <h3 className="text-base font-semibold tracking-tight text-[#3a2417]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
