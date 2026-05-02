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
      "Engineering support that blends design precision, technical supervision, and execution-ready planning for complex projects.",
    image: "/petrowave-drill-reporting.jpg",
    alt: "Engineering planning and field reporting",
    href: "/services/engineering-services",
  },
  {
    title: "Wellhead & Surface Equipment Services",
    description:
      "Supply, installation, and maintenance support for critical wellhead and surface systems.",
    image: "/oil-valve-valve-svgrepo-com.svg",
    alt: "Wellhead and surface equipment",
    href: "/services/wellhead-surface-equipment-services",
  },
  {
    title: "Well Completion & Production Services",
    description:
      "Completion planning and production optimization to improve well performance and recovery.",
    image: "/petrowave-reporting.jpg",
    alt: "Well completion and production services",
    href: "/services/well-completion-production-services",
  },
  {
    title: "Well Intervention & Workover",
    description:
      "Intervention and workover solutions that restore production, reduce downtime, and protect asset value.",
    image: "/oil-rig-svgrepo-com.svg",
    alt: "Well intervention and workover operations",
    href: "/services/well-intervention-workover",
  },
  {
    title: "Zonal Isolation Services",
    description:
      "Specialized isolation services to control flow, improve well integrity, and enhance safety.",
    image: "/petrowave-vaule-sealing.jpg",
    alt: "Zonal isolation and sealing equipment",
    href: "/services/zonal-isolation-services",
  },
  {
    title: "Oilfield Chemical Solutions",
    description:
      "Production chemicals and treatment programs tailored to protect assets and optimize flow assurance.",
    image: "/oilngas.jpg",
    alt: "Oilfield chemical solutions",
    href: "/services/oilfield-chemical-solutions",
  },
  {
    title: "Construction & Installation (Onshore/Offshore)",
    description:
      "Project execution support for fabrication, installation, and commissioning onshore and offshore.",
    image: "/oil-platform-svgrepo-com.svg",
    alt: "Construction and installation services",
    href: "/services/construction-installation-onshore-offshore",
  },
  {
    title: "Mechanical & Fabrication Services",
    description:
      "Fabrication, machining, and mechanical support to keep critical systems reliable and compliant.",
    image: "/oil-platform-gas-svgrepo-com.svg",
    alt: "Mechanical and fabrication services",
    href: "/services/mechanical-fabrication-services",
  },
  {
    title: "Asset Integrity & Facility Maintenance",
    description:
      "Maintenance programs and integrity assessments that protect uptime and reduce risk.",
    image: "/petrowave-survillance.jpg",
    alt: "Asset integrity and facility maintenance",
    href: "/services/asset-integrity-facility-maintenance",
  },
  {
    title: "Electrical, Instrumentation & Control (EIC) Services",
    description:
      "Electrical and control system services to ensure safe, accurate, and efficient operations.",
    image: "/globe.svg",
    alt: "Electrical instrumentation and control services",
    href: "/services/electrical-instrumentation-control-eic-services",
  },
  {
    title: "Advanced NDT & Corrosion Control",
    description:
      "Inspection and corrosion mitigation programs that extend asset life and improve reliability.",
    image: "/petrowave-survillance.jpg",
    alt: "Advanced NDT and corrosion control",
    href: "/services/advanced-ndt-corrosion-control",
  },
  {
    title: "Inspection, Certification & Validation",
    description:
      "Independent inspection and certification services to meet regulatory and operational standards.",
    image: "/petrowave-reporting.jpg",
    alt: "Inspection and certification services",
    href: "/services/inspection-certification-validation",
  },
  {
    title: "Manpower, Training & Consultancy",
    description:
      "Technical staffing, training, and advisory services that strengthen project readiness.",
    image: "/petrowave-workers.jpg",
    alt: "Manpower training and consultancy",
    href: "/services/manpower-training-consultancy",
  },
  {
    title: "Procurement & Supply Chain Management",
    description:
      "Strategic sourcing, logistics coordination, and supplier management for reliable delivery.",
    image: "/procurement-petrowave.jpg",
    alt: "Procurement and supply chain management",
    href: "/services/procurement-supply-chain-management",
  },
  {
    title: "Petroleum Products Supply",
    description:
      "Reliable supply of petroleum products supported by compliant logistics and delivery discipline.",
    image: "/petro-truck-distribute.jpg",
    alt: "Petroleum products supply",
    href: "/services/petroleum-products-supply",
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
