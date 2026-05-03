import Image from "next/image";
import { AnimatedReveal } from "@/components/animated-reveal";
import { buildMetadata } from "@/lib/metadata";

const pathname = "/services";

export const metadata = buildMetadata({
  title: "Services | Petrowave Energy Limited",
  description:
    "Explore Petrowave Energy Limited service offerings across engineering, completion, construction, maintenance, and supply chain support.",
  pathname,
});

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  miniTitle: string;
  bullets: string[];
  image: string;
};

const services: ServiceItem[] = [
  {
    id: "engineering-services",
    title: "ENGINEERING SERVICES",
    description:
      "Petrowave Energy Limited delivers world-class engineering solutions that span the entire project life cycle - from concept through design, execution, and commissioning. Our approach emphasizes safety, efficiency, innovation, and compliance with international standards.",
    miniTitle: "Sub-services include:",
    bullets: [
      "Conceptual, Basic & Front-End Engineering Design (FEED)",
      "Detailed Engineering (Mechanical, Civil, Structural, Electrical & Instrumentation)",
      "Process Simulation, Optimization & Debottlenecking",
      "Project Management & Execution Support",
      "As-Built Documentation & Drawing Preparation",
      "Health, Safety & Environmental (HSE) Engineering Studies",
    ],
    image: "/ENGINEERING%20SERVICES.jpg",
  },
  {
    id: "wellhead-valve-maintenance-well-intervention",
    title: "WELLHEAD, VALVE MAINTENANCE & WELL INTERVENTION",
    description:
      "We provide specialized wellhead, valve, and intervention services to ensure well integrity, safety, and optimum production uptime.",
    miniTitle: "Sub-services include:",
    bullets: [
      "Wellhead & Christmas Tree Installation, Maintenance & Testing",
      "Valve Overhaul, Repair & Pressure Testing (Ball, Gate, Control, Check Valves)",
      "Well Intervention (Wireline, Slickline, Coil Tubing, Pumping)",
      "Well Integrity Monitoring & Pressure Control Equipment Services",
      "BOP Inspection, Testing & Certification",
      "Leak Detection & Remedial Maintenance",
    ],
    image: "/WELLHEAD%2C%20VALVE%20MAINTENANCE%20%26%20WELL%20INTERVENTION.jpg",
  },
  {
    id: "well-completion-production-services",
    title: "WELL COMPLETIONS & PRODUCTION SERVICES",
    description:
      "Petrowave offers complete well completion and production enhancement services tailored to optimize reservoir performance and maximize recovery.",
    miniTitle: "Sub-services include:",
    bullets: [
      "Completion Equipment Supply & Installation (Packers, Safety Valves, Hangers)",
      "Artificial Lift Systems (ESP, Gas Lift, Rod Pump)",
      "Flowback & Well Testing Operations",
      "Well Stimulation, Cleanup & Sand Control Services",
      "Production Optimization & Surveillance",
      "Down hole Tool Rentals & Services",
    ],
    image: "/petrowave-drill-reporting.jpg",
  },
  {
    id: "construction-installation-onshore-offshore",
    title: "ONSHORE/OFFSHORE CONSTRUCTION & INSTALLATION",
    description:
      "We execute full-scale construction and installation projects both onshore and offshore, ensuring safe, high-quality, and on-time delivery.",
    miniTitle: "Sub-services include:",
    bullets: [
      "Pipeline Construction, Fabrication & Installation",
      "Platform Hook-up, Modification & Commissioning",
      "Structural Steel Fabrication & Erection",
      "Storage Tank Construction & Repair",
      "Civil Works (Foundations, Roads, Concrete Structures, Drainage Systems)",
      "Equipment Installation (Pumps, Compressors, Skid Units)",
    ],
    image: "/ONSHOREOFFSHORE%20CONSTRUCTION%20%26%20INSTALLATION.jpg",
  },
  {
    id: "facility-maintenance-inspection",
    title: "FACILITY MAINTENANCE & INSPECTION",
    description:
      "Our maintenance and inspection services ensure continuous, safe, and efficient operation of client facilities, extending asset lifespan and reliability.",
    miniTitle: "Sub-services include:",
    bullets: [
      "Preventive & Corrective Maintenance",
      "Facility Integrity & Condition Assessment",
      "Plant Shutdown & Turnaround Management",
      "Static & Rotating Equipment Maintenance",
      "Pipeline & Flowline Maintenance",
      "Asset Integrity & Reliability Engineering",
    ],
    image: "/petrowave-vaule-sealing.jpg",
  },
  {
    id: "mechanical-construction-fabrication",
    title: "MECHANICAL CONSTRUCTION & FABRICATION",
    description:
      "We specialize in precision mechanical works, from fabrication to installation, ensuring quality and compliance with global standards.",
    miniTitle: "Sub-services include:",
    bullets: [
      "Pressure Vessel Fabrication & Testing",
      "Process Skid & Module Fabrication",
      "Pipe Spooling & Welding Services",
      "Structural Steel Fabrication & Assembly",
      "Hot Tapping & Line Stopping Services",
      "Workshop & Onsite Fabrication Support",
    ],
    image: "/MECHANICAL%20CONSTRUCTION%20%26%20FABRICATION.jpg",
  },
  {
    id: "marine-services-rental-solutions",
    title: "MARINE SERVICES & RENTAL SOLUTIONS",
    description:
      "Petrowave supports offshore operations with dependable marine logistics, vessel chartering, and equipment rental services.",
    miniTitle: "Sub-services include:",
    bullets: [
      "Offshore Vessel Chartering (Crew Boats, Tugboats, Barges, Utility Vessels)",
      "Marine Logistics & Personnel Transportation",
      "Offshore Equipment Rental (Generators, Compressors, Pumps)",
      "Diving & Subsea Engineering Services",
      "ROV Operations & Subsea Inspection",
      "Marine Equipment Maintenance & Support",
    ],
    image: "/MARINE%20SERVICES%20%26%20RENTAL%20SOLUTIONS.jpg",
  },
  {
    id: "electrical-instrumentation-control-eic-services",
    title: "ELECTRICAL, INSTRUMENTATION & CONTROL SERVICES",
    description:
      "We provide turnkey electrical and instrumentation solutions that enhance operational reliability and system automation in oil and gas facilities.",
    miniTitle: "Sub-services include:",
    bullets: [
      "Electrical Installation, Testing & Commissioning (LV/MV Systems)",
      "Instrumentation Calibration & Loop Checking",
      "Control System Integration (PLC, DCS, SCADA)",
      "Cable Laying, Termination & Glanding",
      "Power Distribution & Lighting Systems",
      "Automation, Monitoring & Control Panel Fabrication",
    ],
    image: "/ELECTRICAL%2C%20INSTRUMENTATION%20%26%20CONTROL%20SERVICES.jpg",
  },
  {
    id: "ndt-corrosion-control-inspection",
    title: "NDT, CORROSION CONTROL & INSPECTION",
    description:
      "We safeguard assets through advanced non-destructive testing, corrosion management, and inspection services that meet API and ASME standards.",
    miniTitle: "Sub-services include:",
    bullets: [
      "Non-Destructive Testing (UT, MPI, DPI, RT, PMI, Eddy Current)",
      "Corrosion Assessment & Inhibition Services",
      "Cathodic Protection Design, Installation & Maintenance",
      "Pipeline Integrity Inspection (Pigging, Thickness Measurement)",
      "Coating & Painting Inspection",
      "Welding Procedure Qualification & Certification",
    ],
    image: "/NDT%2C%20CORROSION%20CONTROL%20%26%20INSPECTION.jpg",
  },
  {
    id: "consultancy-manpower-training-services",
    title: "CONSULTANCY, MANPOWER & TRAINING SERVICES",
    description:
      "Petrowave Energy Limited provides high-value consultancy, skilled manpower, and specialized training to enhance project execution and workforce competence.",
    miniTitle: "Sub-services include:",
    bullets: [
      "Project Management Consultancy (PMC)",
      "Technical Advisory & Feasibility Studies",
      "Skilled, Semi-Skilled & Professional Manpower Supply",
      "Recruitment & Outsourcing Services",
      "Capacity Building & Technical Training Programs",
      "Competence Certification & Development",
    ],
    image: "/CONSULTANCY%2C%20MANPOWER%20%26%20TRAINING%20SERVICES.jpg",
  },
  {
    id: "petroleum-products-chemicals-supply",
    title: "PETROLEUM PRODUCTS & CHEMICALS SUPPLY",
    description:
      "We ensure the reliable supply and distribution of premium petroleum products and industrial chemicals that meet regulatory standards and client specifications.",
    miniTitle: "Sub-services include:",
    bullets: [
      "Diesel (AGO), PMS, DPK Supply & Distribution",
      "Lubricants, Hydraulic Oils & Industrial Greases",
      "Base Oil Supply for Industrial Applications",
      "Drilling & Production Chemicals (Corrosion Inhibitors, Biocides, Scale Inhibitors, Demulsifiers, etc.)",
      "Water Treatment Chemicals & Additives",
      "Storage, Haulage & Logistics Support",
      "Bulk and Retail Supply Solutions",
    ],
    image: "/petro-truck-distribute.jpg",
  },
  {
    id: "procurement-supply-chain-management",
    title: "PROCUREMENT & SUPPLY CHAIN MANAGEMENT",
    description:
      "Petrowave Energy Limited maintains a robust global network of reputable suppliers, ensuring efficient procurement and delivery of quality materials and equipment for oil and gas applications.",
    miniTitle: "Sub-services include:",
    bullets: [
      "Global Sourcing & Vendor Development",
      "Procurement of Oilfield Equipment & Spare Parts",
      "Expediting & Quality Control Inspection",
      "Inventory Management & Warehousing",
      "Logistics, Shipping & Freight Forwarding",
      "Project Procurement Planning & Cost Control",
      "Local Content Procurement Support",
    ],
    image: "/PROCUREMENT%20%26%20SUPPLY%20CHAIN%20MANAGEMENT.jpg",
  },
  {
    id: "general-contracts",
    title: "GENERAL CONTRACTS",
    description:
      "Petrowave Energy Limited also undertakes comprehensive general contracting services, managing multidisciplinary projects from conception to completion. Our contracting approach combines engineering excellence, cost control, safety, and timely execution.",
    miniTitle: "Sub-services include:",
    bullets: [
      "Turnkey Project Execution (EPC & EPIC Contracts)",
      "Civil & Structural Works",
      "Pipeline and Flowline Construction",
      "Equipment Installation & Commissioning",
      "Plant Upgrade & Modification Projects",
      "Operations & Maintenance (O&M) Contracts",
      "Construction Management & Site Supervision",
    ],
    image: "/petrowave-contact2.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-white/10 px-6 py-20 text-white sm:py-24">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/petrowave-about-us.jpg"
            alt="Petrowave services overview"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(112deg,rgba(6,16,30,0.9),rgba(6,16,30,0.58))]" />

        <div className="mx-auto w-full max-w-6xl">
          <AnimatedReveal>
            <article className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Our Services
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                Service Portfolio
              </h1>
              <p className="mt-5 text-base leading-7 tracking-tight text-slate-200 sm:text-lg">
                End-to-end capabilities across engineering, operations,
                construction, maintenance, and supply chain support.
              </p>
            </article>
          </AnimatedReveal>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
          {services.map((service, index) => (
            <AnimatedReveal key={service.title} delay={index * 0.05}>
              <article
                id={service.id}
                className="scroll-mt-28 grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch"
              >
                <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr]">
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-[#132640] sm:text-xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 tracking-tight text-slate-700 sm:text-base">
                      {service.description}
                    </p>
                  </div>

                  <div className="hidden w-px bg-slate-200 lg:block" />

                  <div>
                    <p className="text-sm font-semibold tracking-tight text-[#132640]">
                      {service.miniTitle}
                    </p>
                    <ul className="mt-3 space-y-0 text-sm leading-6 tracking-tight text-slate-700 sm:text-xs">
                      {service.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 inline-flex size-2 shrink-0 rounded-full bg-[#f47a30]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                  <div className="relative h-full min-h-[240px] w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
