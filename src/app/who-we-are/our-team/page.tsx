import Image from "next/image";
import { AnimatedReveal } from "@/components/animated-reveal";
import { buildMetadata } from "@/lib/metadata";

const pathname = "/who-we-are/our-team";

export const metadata = buildMetadata({
  title: "Our Team | Petrowave Energy Limited",
  description:
    "Meet the people behind Petrowave Energy Limited - a team built on excellence, innovation, and professional leadership.",
  pathname,
});

const teamPillars = [
  {
    title: "Experienced Leadership",
    body: "Seasoned professionals with deep expertise across energy operations, engineering, and project delivery.",
  },
  {
    title: "Operational Discipline",
    body: "Teams aligned to safety, quality, and compliance standards that protect people, assets, and outcomes.",
  },
  {
    title: "Collaborative Execution",
    body: "Cross-functional specialists working together to solve complex challenges and deliver measurable value.",
  },
  {
    title: "Local Insight, Global Standards",
    body: "Local market understanding supported by global best practices and industry benchmarks.",
  },
  {
    title: "Continuous Improvement",
    body: "A learning culture that strengthens performance, resilience, and customer confidence.",
  },
  {
    title: "Client-Centered Focus",
    body: "Every engagement is built around reliability, transparency, and long-term partnership.",
  },
];

export default function OurTeamPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-white/10 px-6 py-20 text-white sm:py-24">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/petrowave-workers.jpg"
            alt="Petrowave professionals and field team"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(112deg,rgba(6,16,30,0.9),rgba(6,16,30,0.58))]" />

        <div className="mx-auto w-full max-w-6xl">
          <AnimatedReveal>
            <article className="max-w-3xl">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Our Team
              </h1>
              <p className="mt-5 text-base leading-7 tracking-tight text-slate-200 sm:text-lg">
                Our people are the foundation of our success, blending youthful
                energy with seasoned leadership to deliver safe, reliable, and
                innovative energy solutions.
              </p>
            </article>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-black px-6 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <AnimatedReveal>
            <article className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                We are People People
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Built for execution
              </h2>
              <p className="mt-4 text-base leading-7 tracking-tight text-slate-200 text-justify">
                At Petrowave Energy Limited, our people are the foundation of
                our success. We take pride in a team that embodies excellence,
                innovation, and professionalism in every aspect of our
                operations. Our workforce blends young, vibrant talents with
                highly experienced professionals who bring depth, creativity,
                and technical expertise to every project.
              </p>
              <p className="mt-4 text-base leading-7 tracking-tight text-slate-200 text-justify">
                Guided by industry veterans with over 30 years of experience in
                the Oil and Gas sector, our engineers and specialists operate
                with precision, innovation, and a deep understanding of global
                industry standards. This balance of youthful energy and seasoned
                leadership allows us to deliver world-class solutions while
                maintaining the agility to adapt to evolving industry demands.
              </p>
              <p className="mt-4 text-base leading-7 tracking-tight text-slate-200 text-justify">
                We believe that people thrive in an environment that promotes
                collaboration, continuous learning, and shared purpose. Our work
                culture values teamwork, transparency, and open communication,
                empowering every team member to contribute ideas, embrace
                innovation, and pursue excellence.
              </p>
              <p className="mt-4 text-base leading-7 tracking-tight text-slate-200 text-justify">
                Through our commitment to talent development, professional
                growth, and innovation, we have built a team that not only meets
                expectations but consistently exceeds them, driving Petrowave
                Energy Limited toward sustained success and leadership in the
                Energy, Oil, and Gas industries.
              </p>
            </article>
          </AnimatedReveal>

          <div className="mt-10 h-px w-full bg-white/30" />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teamPillars.map((pillar, index) => (
              <AnimatedReveal key={pillar.title} delay={index * 0.06}>
                <article className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm transition duration-300 sm:hover:-translate-y-1 sm:hover:border-white/25 sm:hover:bg-white/10 sm:hover:shadow-md">
                  <h3 className="text-base font-semibold tracking-tight text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 tracking-tight text-slate-200">
                    {pillar.body}
                  </p>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
