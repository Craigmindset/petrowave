import Image from "next/image";
import Link from "next/link";
import { AnimatedReveal } from "@/components/animated-reveal";

type ServiceCard = {
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
};

const services: ServiceCard[] = [
  {
    title: "Upstream Asset Optimization",
    description:
      "Integrated field planning and production intelligence that improves uptime and lowers lifting costs across mature and new assets.",
    image: "/petrowave-drill-reporting.jpg",
    alt: "Drilling and field performance reporting operations",
    href: "/why-us/upstream",
  },
  {
    title: "Petroleum Products Marketing",
    description:
      "At Petrowave Energy Limited, we deliver reliable petroleum product supply and distribution, including PMS, diesel, and jet fuel, with efficiency and trust.",
    image: "/petro-truck-distribute.jpg",
    alt: "Petroleum products marketing and distribution operations",
    href: "/why-us/downstream",
  },
  {
    title: "Strategic Procurement",
    description:
      "End-to-end sourcing for critical equipment and materials with supplier vetting, quality assurance, and predictable lead times.",
    image: "/petrowave-vaule-sealing.jpg",
    alt: "Business value and contract sealing in energy procurement",
    href: "/why-us/procurement",
  },
  {
    title: "Downstream Efficiency",
    description:
      "Operational improvement programs that strengthen refining and distribution performance while reducing waste and turnaround delays.",
    image: "/petro-truck-distribute.jpg",
    alt: "Petroleum truck distribution supporting downstream logistics",
    href: "/why-us/downstream",
  },
  {
    title: "Sustainability and ESG Advisory",
    description:
      "Practical ESG frameworks aligned with regulatory expectations, stakeholder reporting, and long-term environmental resilience.",
    image: "/petrowave-reporting.jpg",
    alt: "Sustainability performance dashboards and reporting",
    href: "/sustainability/esg-goals",
  },
  {
    title: "Energy Workforce Solutions",
    description:
      "Targeted workforce support and capability development for engineering, operations, and project teams in high-demand environments.",
    image: "/petrowave-workers.jpg",
    alt: "Energy workforce collaboration and skills development",
    href: "/why-us/human-resources",
  },
];

export function ServiceSection() {
  return (
    <section className="bg-[#f4f7fb] px-6 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl">
        {/* Service Section Start */}
        {/* Service Header Start */}
        <AnimatedReveal>
          <div className="mb-8 sm:mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#f47a30]">
              Services
            </p>
            <div className="mt-2 grid gap-3 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-8">
              <h2 className="text-3xl font-semibold tracking-tight text-[#0b1a2e] sm:text-4xl">
                Explore More |
              </h2>
              <p className="max-w-2xl text-sm leading-6 tracking-tight text-slate-600 sm:text-base lg:max-w-none lg:mb-2 ">
                Petrowave Energy Limited delivers reliable performance through
                technical expertise and disciplined execution.
              </p>
            </div>
          </div>
        </AnimatedReveal>
        {/* Service Header End */}

        {/* Service Cards Start */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedReveal key={service.title} delay={index * 0.06}>
              <Link
                href={service.href}
                className="group block h-full"
                aria-label={service.title}
              >
                <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5 transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-xl">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-[#0b1a2e] transition-colors group-hover:text-[#f47a30]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 tracking-tight text-slate-600">
                    {service.description}
                  </p>
                </article>
              </Link>
            </AnimatedReveal>
          ))}
        </div>
        {/* Service Cards End */}
        {/* Service Section End */}
      </div>
    </section>
  );
}
