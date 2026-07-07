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
    id: "wellhead-valves-christmas-tree-ccus",
    title:
      "WELLHEAD / VALVES / CHRISTMAS TREE / CCUS - SUPPLY, INSPECTION, INSTALLATION, SERVICES & MAINTENANCE (INCLUDING ANTI-THEFT)",
    description:
      "Petrowave Energy Limited provide specialized wellhead, valve, and intervention services to ensure well integrity, safety, and optimum production uptime.",
    miniTitle: "Sub-services include:",
    bullets: [
      "Procurement & supply of surface wellheads, gate valves, choke valves, actuators, and Christmas trees (API 6A compliant)",
      "Casing head, tubing head, and spool installation",
      "Christmas tree assembly, installation, and commissioning",
      "Control Cabin Units (CCUs) supply, installation, and integration",
      "Pressure testing (SIT, FAT, hydrotest) and leak testing",
      "Routine inspection, servicing, and preventive maintenance",
      "Valve greasing, refurbishment, and replacement programs",
      "Wellhead integrity diagnostics and certification",
      "Emergency shutdown (ESD) system integration",
      "Anti-theft solutions (wellhead locking systems, tamper-proof devices, remote surveillance integration)",
      "Spare parts supply and inventory management",
    ],
    image: "/petrowave-site1.jpg",
  },
  {
    id: "well-completions-production-services",
    title: "WELL COMPLETIONS & PRODUCTION SERVICES",
    description:
      "Petrowave offers complete well completion and production enhancement services tailored to optimize reservoir performance, maximize hydrocarbon recovery, and improve long-term production efficiency. Our integrated solutions cover the design, supply, installation, testing, and maintenance of well completion systems for both onshore and offshore operations.",
    miniTitle: "Sub-services include:",
    bullets: [
      "Completion design and engineering (single, dual, intelligent completions)",
      "Tubing and completion string installation (L-80, P-110, CRA materials)",
      "Installation of packers, safety valves (SCSSV), nipples, sleeves",
      "Sand control systems (gravel pack, frac pack, screens)",
      "Artificial lift systems (ESP, gas lift, rod pumps)",
      "Perforation support and production optimization",
      "Flow assurance and well cleanup services",
      "Production logging and well performance monitoring",
      "Surface production equipment installation and optimization",
      "Well testing and flowback services",
    ],
    image: "/petrowave-drill-reporting.jpg",
  },
  {
    id: "well-intervention-workover-services",
    title: "WELL INTERVENTION AND WORKOVER SERVICES",
    description:
      "Specialized operations to restore, maintain, or improve well productivity during its lifecycle.",
    miniTitle: "Sub-services:",
    bullets: [
      "Slickline and braided line services",
      "Electric line (E-line) logging and perforation",
      "Coiled tubing operations (cleanouts, acidizing, stimulation)",
      "Well diagnostics and production enhancement",
      "Scale removal, wax cutting, and debris cleanout",
      "Fishing operations (retrieval of downhole tools)",
      "Workover rig operations and well recompletion",
      "Zonal isolation remediation and plug setting",
      "Well integrity restoration",
      "Through-tubing interventions",
    ],
    image: "/petrowave-vaule-sealing.jpg",
  },
  {
    id: "zonal-isolation-bridge-plugs-cement-retainers-rtts-packers",
    title: "ZONAL ISOLATION WITH BRIDGE PLUGS, CEMENT RETAINERS & RTTS PACKERS",
    description:
      "Solutions for isolating specific reservoir zones to enhance control, safety, and production efficiency.",
    miniTitle: "Sub-services:",
    bullets: [
      "Supply and installation of bridge plugs (permanent & retrievable)",
      "Cement retainer setting and squeeze cementing operations",
      "RTTS (Retrievable Test-Treat-Squeeze) packer deployment",
      "Zonal isolation design and execution",
      "Leak-off tests (LOT) and pressure integrity testing",
      "Plug and abandonment (P&A) support services",
      "Remedial cementing and zonal shut-off",
      "Wellbore isolation for stimulation or testing operations",
      "Retrieval and milling of plugs and packers",
    ],
    image: "/MECHANICAL%20CONSTRUCTION%20%26%20FABRICATION.jpg",
  },
  {
    id: "oilfield-chemicals",
    title:
      "OILFIELD CHEMICALS (DRILLING FLUIDS, COMPLETIONS, PRODUCTION & SPECIALTY CHEMICALS)",
    description:
      "Supply and application of performance chemicals that support drilling, completion, and production efficiency.",
    miniTitle: "Sub-services:",
    bullets: [
      "Drilling fluids engineering (water-based, oil-based, synthetic mud systems)",
      "Mud additives supply (viscosifiers, weighting agents, LCMs)",
      "Completion fluids (brines, clear fluids, packer fluids)",
      "Production chemicals (corrosion inhibitors, scale inhibitors, demulsifiers)",
      "Stimulation chemicals (acids, surfactants)",
      "Enhanced oil recovery (EOR) chemical solutions",
      "Chemical injection systems and monitoring",
      "Laboratory testing and fluid analysis",
      "Waste management and environmental compliance solutions",
      "Specialty chemicals (biocides, defoamers, paraffin inhibitors)",
    ],
    image: "/petro-truck-distribute.jpg",
  },
  {
    id: "onshore-offshore-mechanical-fabrication-construction-installation",
    title:
      "ONSHORE / OFFSHORE MECHANICAL, FABRICATION, CONSTRUCTION & INSTALLATION",
    description:
      "We execute full-scale construction and installation projects both onshore and offshore, ensuring safe, high-quality, and on-time delivery.",
    miniTitle: "Sub-services:",
    bullets: [
      "Structural steel fabrication and installation",
      "Pipeline fabrication, welding, and installation",
      "Pressure vessel and storage tank fabrication",
      "Skid-mounted equipment fabrication",
      "Mechanical equipment installation (pumps, compressors, turbines)",
      "Offshore platform maintenance and upgrades",
      "Piping systems installation (process and utility lines)",
      "Welding (SMAW, GTAW, FCAW) and certification",
      "Heavy lifting and rigging operations",
      "Hook-up and commissioning services",
    ],
    image: "/ONSHOREOFFSHORE%20CONSTRUCTION%20%26%20INSTALLATION.jpg",
  },
  {
    id: "ndt-corrosion-control-inspection-maintenance",
    title:
      "ADVANCED NDT & CORROSION CONTROL, INSPECTION & MAINTENANCE SERVICES",
    description:
      "Integrity assurance services to ensure equipment reliability, safety, and compliance with industry standards.",
    miniTitle: "Sub-services:",
    bullets: [
      "Non-Destructive Testing (NDT): UT, RT, MT, PT, ET",
      "Advanced inspection (Phased Array UT, TOFD, IR Thermography)",
      "Corrosion monitoring and control programs",
      "Cathodic protection (CP) design and installation",
      "Coating inspection and application (protective coatings, linings)",
      "Thickness gauging and pipeline integrity assessment",
      "Risk-Based Inspection (RBI) studies",
      "Asset integrity management systems (AIMS)",
      "Shutdown/turnaround inspection services",
      "Fitness-for-service (FFS) evaluations",
    ],
    image: "/NDT%2C%20CORROSION%20CONTROL%20%26%20INSPECTION.jpg",
  },
  {
    id: "manpower-consultancy-trainings",
    title: "MANPOWER SOLUTIONS, CONSULTANCY SERVICES & TRAININGS",
    description:
      "Petrowave Energy Limited provides high-value consultancy, skilled manpower, and specialized training to enhance project execution and workforce competence.",
    miniTitle: "Sub-services:",
    bullets: [
      "Skilled and unskilled manpower supply (onshore/offshore)",
      "Technical staffing (engineers, technicians, operators)",
      "Project-based and contract staffing solutions",
      "Oil & gas consultancy (operations, HSE, asset management)",
      "Training programs (technical, HSE, compliance, certification)",
      "Competency development and capacity building",
      "Workforce planning and HR advisory services",
      "Leadership and management training",
      "Local content development and training programs",
      "Safety drills and emergency response training",
    ],
    image: "/CONSULTANCY%2C%20MANPOWER%20%26%20TRAINING%20SERVICES.jpg",
  },
  {
    id: "engineering-services",
    title: "ENGINEERING SERVICES",
    description:
      "Petrowave Energy Limited delivers world-class engineering solutions that span the entire project lifecycle from concept through design, execution, and commissioning. Our approach emphasizes safety, efficiency, innovation, and compliance with international standards.",
    miniTitle: "Sub-services include:",
    bullets: [
      "Conceptual, FEED, and detailed engineering design",
      "Mechanical, electrical, instrumentation, and civil engineering",
      "Process engineering and optimization",
      "Pipeline and flowline design",
      "Wellhead and production facility design",
      "CAD drafting and 3D modeling",
      "Engineering studies (HAZOP, HAZID, SIL)",
      "Brownfield and greenfield project engineering",
      "Simulation and modeling (reservoir, flow assurance)",
      "Technical documentation and compliance support",
    ],
    image: "/ENGINEERING%20SERVICES.jpg",
  },
  {
    id: "project-procurement-supply-chain-management",
    title: "PROJECT PROCUREMENT & SUPPLY CHAIN MANAGEMENT",
    description:
      "Petrowave Energy Limited maintains a robust global network of reputable suppliers, ensuring efficient procurement and delivery of quality materials and equipment for oil and gas applications.",
    miniTitle: "Sub-services:",
    bullets: [
      "Strategic sourcing and vendor management",
      "Procurement of oilfield equipment and materials",
      "Logistics and freight forwarding (local & international)",
      "Inventory and warehouse management",
      "Expediting and vendor inspection",
      "Contracting and supplier negotiation",
      "Supply chain optimization and cost control",
      "Customs clearance and regulatory compliance",
      "Material tracking and traceability systems",
      "End-to-end procurement lifecycle management",
    ],
    image: "/PROCUREMENT%20%26%20SUPPLY%20CHAIN%20MANAGEMENT.jpg",
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
              <p className="mt-5 text-justify text-base leading-7 tracking-tight text-slate-200 hyphens-auto sm:text-lg">
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
                    <p className="mt-3 text-justify text-sm leading-6 tracking-tight text-slate-700 hyphens-auto sm:text-base">
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
                  <div className="relative h-full min-h-60 w-full">
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
