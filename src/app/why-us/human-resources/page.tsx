import type { Metadata } from "next";
import Image from "next/image";

const pathname = "/why-us/human-resources";

export const metadata: Metadata = {
  title: "Human Resources | Petrowave",
  description:
    "Petrowave human resources services build high-performing teams for complex energy operations through structured recruitment, deployment, and workforce planning.",
  alternates: {
    canonical: pathname,
  },
};

export default function HumanResourcesPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-white/10 px-6 py-20 text-white sm:py-24">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/petrowave-workers.jpg"
            alt="Petrowave workforce and field operations"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(6,16,30,0.9),rgba(6,16,30,0.56))]" />

        <div className="mx-auto w-full max-w-6xl">
          <article className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Human Resources <br /> for Mission Critical Energy Teams
            </h1>
            <p className="mt-5 text-base leading-7 tracking-tight text-slate-200 sm:text-lg">
              We recruit, deploy, and develop professionals across engineering,
              project controls, and field operations with speed, compliance, and
              technical precision.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-black px-6 py-8">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-[#f7f5f4] sm:text-4xl">
            Workforce Strategy & Talent Execution
          </h2>
        </div>
      </section>

      <section className="mt-10 bg-white px-6 pb-16 sm:pb-20">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-stretch">
          <article>
            <p className="mt-4 whitespace-pre-line text-sm leading-7 tracking-tight text-slate-700 sm:text-base text-justify">
              {`At Petrowave Energy Limited, our people are the foundation of our success. We are committed to building and managing a highly skilled, motivated, and safety-conscious workforce that supports our operations across the energy value chain. Our human resources approach is designed to attract top talent, develop capabilities, and foster a culture of performance, integrity, and continuous improvement.`}
            </p>
            <p className="mt-4 whitespace-pre-line font-bold text-sm leading-7 tracking-tight text-slate-700 sm:text-base">
              {`Our Human Resources Approach`}
            </p>
            <p className="mt-2 whitespace-pre-line  text-sm leading-7 tracking-tight text-slate-700 sm:text-base text-justify">
              {`We implement structured and forward-thinking HR practices that align with our business objectives and industry demands. Our focus is on creating a workforce that is not only technically competent but also adaptable in a dynamic energy environment.`}
            </p>
            <p className="mt-4 whitespace-pre-line font-bold text-sm leading-7 tracking-tight text-slate-700 sm:text-base">
              {`Key areas include:`}
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-7 tracking-tight text-slate-700 sm:text-base">
              {[
                "Talent Acquisition: Identifying and recruiting qualified professionals across technical, operational, and administrative roles",
                "Talent Development: We invest in continuous learning and development programs to enhance the skills and capabilities of our workforce, ensuring they are equipped to meet evolving industry challenges.",
                "Workforce Planning: We implement robust workforce planning processes that align talent supply with project timelines and operational demands, ensuring we have the right people in the right roles at the right time.",
                "Compliance and Safety: We maintain strict adherence to labor laws, industry regulations, and safety standards to create a secure and compliant work environment for all employees.",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm transition duration-300 sm:hover:-translate-y-1 sm:hover:border-slate-300 sm:hover:shadow-md">
            <div className="relative h-full min-h-96 w-full">
              <Image
                src="/Human-resources-petrowave.jpg"
                alt="Petrowave staff collaboration"
                fill
                className="object-cover"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-stretch">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 sm:hover:-translate-y-1 sm:hover:border-slate-300 sm:hover:shadow-md">
            <div className="relative h-full min-h-96 w-full">
              <Image
                src="/petrowave-reporting.jpg"
                alt="Workforce operations and performance planning"
                fill
                className="object-cover"
              />
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 sm:hover:-translate-y-1 sm:hover:border-slate-300 sm:hover:shadow-md sm:p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-[#132640] sm:text-3xl">
              What we deliver
            </h3>

            <ul className="mt-5 grid grid-cols-1 gap-3 text-sm tracking-tight text-slate-700 sm:text-base md:grid-cols-2">
              {[
                "Talent pipelines aligned to project timelines",
                "Competency frameworks for role-critical assignments",
                "Workforce planning with strong compliance standards",
                "Onboarding and deployment support for rapid mobilization",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"
                >
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm leading-7 tracking-tight text-slate-700 sm:text-base">
              We operate as a strategic workforce partner, helping clients build
              capable teams that sustain operational excellence across upstream,
              downstream, and offshore environments.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-black px-6 py-16 text-center sm:py-20">
        <div className="mx-auto w-full max-w-4xl">
          <article className="rounded-2xl border border-white/15 bg-white/2 p-8 transition duration-300 sm:hover:-translate-y-1 sm:hover:border-white/30 sm:hover:bg-white/5">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              People Power Performance
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 tracking-tight text-slate-200 sm:text-base">
              With the right people in the right roles, organizations execute
              faster, safer, and more efficiently. Petrowave is committed to
              delivering workforce solutions that support long-term growth and
              operational stability.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
