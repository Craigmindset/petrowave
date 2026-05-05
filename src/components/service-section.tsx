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
    title: "Engineering Services",
    description:
      "World-class engineering solutions spanning concept, design, execution, and commissioning.",
    image: "/ENGINEERING%20SERVICES.jpg",
    alt: "Engineering planning and field reporting",
    href: "/services#engineering-services",
  },
  {
    title: "Wellhead, Valve Maintenance & Well Intervention",
    description:
      "Specialized wellhead, valve, and intervention services for integrity and uptime.",
    image: "/WELLHEAD%2C%20VALVE%20MAINTENANCE%20%26%20WELL%20INTERVENTION.jpg",
    alt: "Wellhead and valve maintenance",
    href: "/services#wellhead-valve-maintenance-well-intervention",
  },
  {
    title: "Well Completion & Production Services",
    description:
      "Completion and production enhancement to optimize reservoir performance.",
    image: "/petrowave-drill-reporting.jpg",
    alt: "Well completion and production services",
    href: "/services#well-completion-production-services",
  },
  {
    title: "Onshore/Offshore Construction & Installation",
    description:
      "Full-scale construction and installation with safe, on-time delivery.",
    image: "/ONSHOREOFFSHORE%20CONSTRUCTION%20%26%20INSTALLATION.jpg",
    alt: "Onshore and offshore construction",
    href: "/services#construction-installation-onshore-offshore",
  },
  {
    title: "Facility Maintenance & Inspection",
    description:
      "Maintenance and inspection services that extend asset life and reliability.",
    image: "/petrowave-vaule-sealing.jpg",
    alt: "Facility maintenance and inspection",
    href: "/services#facility-maintenance-inspection",
  },
  {
    title: "Mechanical Construction & Fabrication",
    description: "Precision mechanical works from fabrication to installation.",
    image: "/MECHANICAL%20CONSTRUCTION%20%26%20FABRICATION.jpg",
    alt: "Mechanical construction and fabrication",
    href: "/services#mechanical-construction-fabrication",
  },
  {
    title: "Marine Services & Rental Solutions",
    description:
      "Dependable marine logistics, vessel chartering, and equipment rental.",
    image: "/MARINE%20SERVICES%20%26%20RENTAL%20SOLUTIONS.jpg",
    alt: "Marine services and rental solutions",
    href: "/services#marine-services-rental-solutions",
  },
  {
    title: "Electrical, Instrumentation & Control Services",
    description:
      "Turnkey electrical and instrumentation solutions for reliable operations.",
    image: "/ELECTRICAL%2C%20INSTRUMENTATION%20%26%20CONTROL%20SERVICES.jpg",
    alt: "Electrical instrumentation and control services",
    href: "/services#electrical-instrumentation-control-eic-services",
  },
  {
    title: "NDT, Corrosion Control & Inspection",
    description:
      "Advanced inspection and corrosion management that meets API and ASME standards.",
    image: "/NDT%2C%20CORROSION%20CONTROL%20%26%20INSPECTION.jpg",
    alt: "NDT and corrosion control inspection",
    href: "/services#ndt-corrosion-control-inspection",
  },
  {
    title: "Consultancy, Manpower & Training Services",
    description:
      "High-value consultancy, skilled manpower, and specialized training.",
    image: "/CONSULTANCY%2C%20MANPOWER%20%26%20TRAINING%20SERVICES.jpg",
    alt: "Consultancy, manpower, and training services",
    href: "/services#consultancy-manpower-training-services",
  },
  {
    title: "Petroleum Products & Chemicals Supply",
    description:
      "Reliable supply of petroleum products and industrial chemicals.",
    image: "/petro-truck-distribute.jpg",
    alt: "Petroleum products and chemicals supply",
    href: "/services#petroleum-products-chemicals-supply",
  },
  {
    title: "Procurement & Supply Chain Management",
    description:
      "Global sourcing, logistics coordination, and supplier management.",
    image: "/PROCUREMENT%20%26%20SUPPLY%20CHAIN%20MANAGEMENT.jpg",
    alt: "Procurement and supply chain management",
    href: "/services#procurement-supply-chain-management",
  },
  {
    title: "General Contracts",
    description:
      "Comprehensive general contracting services from conception to completion.",
    image: "/petrowave-contact2.jpg",
    alt: "General contracting services",
    href: "/services#general-contracts",
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
