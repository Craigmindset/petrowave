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
    title: "Wellhead / Valves / Christmas Tree / CCUS",
    description:
      "Supply, inspection, installation, and maintenance for wellhead systems and CCUs.",
    image: "/WELLHEAD%2C%20VALVE%20MAINTENANCE%20%26%20WELL%20INTERVENTION.jpg",
    alt: "Wellhead and valve services",
    href: "/services#wellhead-valves-christmas-tree-ccus",
  },
  {
    title: "Well Completions & Production Services",
    description:
      "Completion design, installation, and production optimization services.",
    image: "/petrowave-drill-reporting.jpg",
    alt: "Well completions and production services",
    href: "/services#well-completions-production-services",
  },
  {
    title: "Well Intervention and Workover Services",
    description:
      "Interventions and workovers to restore or improve well productivity.",
    image: "/petrowave-vaule-sealing.jpg",
    alt: "Well intervention and workover services",
    href: "/services#well-intervention-workover-services",
  },
  {
    title: "Zonal Isolation with Bridge Plugs & RTTS Packers",
    description:
      "Isolation solutions for zonal control, testing, and remediation.",
    image: "/MECHANICAL%20CONSTRUCTION%20%26%20FABRICATION.jpg",
    alt: "Zonal isolation tools and services",
    href: "/services#zonal-isolation-bridge-plugs-cement-retainers-rtts-packers",
  },
  {
    title: "Oilfield Chemicals",
    description:
      "Drilling, completion, production, and specialty chemical solutions.",
    image: "/petro-truck-distribute.jpg",
    alt: "Oilfield chemicals and fluids",
    href: "/services#oilfield-chemicals",
  },
  {
    title: "Onshore / Offshore Mechanical, Fabrication & Construction",
    description:
      "Full-scale mechanical fabrication, construction, and installation.",
    image: "/ONSHOREOFFSHORE%20CONSTRUCTION%20%26%20INSTALLATION.jpg",
    alt: "Onshore and offshore mechanical construction",
    href: "/services#onshore-offshore-mechanical-fabrication-construction-installation",
  },
  {
    title: "Advanced NDT & Corrosion Control",
    description:
      "Integrity assurance, inspection, and corrosion control programs.",
    image: "/NDT%2C%20CORROSION%20CONTROL%20%26%20INSPECTION.jpg",
    alt: "Advanced NDT and corrosion control",
    href: "/services#ndt-corrosion-control-inspection-maintenance",
  },
  {
    title: "Manpower Solutions, Consultancy & Trainings",
    description:
      "Skilled manpower, advisory services, and compliance training programs.",
    image: "/CONSULTANCY%2C%20MANPOWER%20%26%20TRAINING%20SERVICES.jpg",
    alt: "Manpower and consultancy services",
    href: "/services#manpower-consultancy-trainings",
  },
  {
    title: "Engineering Services",
    description:
      "End-to-end engineering across concept, FEED, and detailed design.",
    image: "/ENGINEERING%20SERVICES.jpg",
    alt: "Engineering services",
    href: "/services#engineering-services",
  },
  {
    title: "Project Procurement & Supply Chain Management",
    description:
      "Strategic sourcing, logistics, and end-to-end procurement delivery.",
    image: "/PROCUREMENT%20%26%20SUPPLY%20CHAIN%20MANAGEMENT.jpg",
    alt: "Project procurement and supply chain management",
    href: "/services#project-procurement-supply-chain-management",
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
                  <div className="relative mb-4 aspect-4/3 w-full overflow-hidden rounded-xl">
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
