export type NavSubItem = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  items: NavSubItem[];
};

export type SubPageContent = {
  title: string;
  description: string;
  heading: string;
  intro: string;
  highlights: string[];
  image: string;
};

export const navGroups: NavGroup[] = [
  {
    label: "Who we are",
    items: [
      { label: "We started well", href: "/who-we-are/we-started-well" },
      { label: "Oil & Gas Objective", href: "/who-we-are/oil-gas-objective" },
    ],
  },
  {
    label: "Why us",
    items: [
      { label: "Procurement", href: "/why-us/procurement" },
      { label: "Upstream", href: "/why-us/upstream" },
      { label: "Downstream", href: "/why-us/downstream" },
      { label: "Offshore", href: "/why-us/offshore" },
      { label: "Human Resources", href: "/why-us/human-resources" },
    ],
  },
  {
    label: "Sustainability",
    items: [
      { label: "Environment", href: "/sustainability/environment" },
      { label: "Social Investment", href: "/sustainability/social-investment" },
      { label: "ESG goals", href: "/sustainability/esg-goals" },
    ],
  },
  {
    label: "Investors",
    items: [
      { label: "Partnership", href: "/investors/partnership" },
      // {
      //   label: "Investment Portfolio",
      //   href: "/investors/investment-portfolio",
      // },
      // {
      //   label: "Investment Presentation",
      //   href: "/investors/investment-presentation",
      // },
      // {
      //   label: "Our Corporate Governance",
      //   href: "/investors/our-corporate-governance",
      // },
    ],
  },
];

export const subPageContent: Record<string, SubPageContent> = {
  "/who-we-are/we-started-well": {
    title: "We Started Well | Petrowave Energy Limited",
    description:
      "Discover Petrowave Energy Limited's origin story, operational discipline, and commitment to energy excellence from day one.",
    heading: "Who we are",
    intro:
      "Petrowave Energy Limited is a proudly Nigerian oil and gas company headquartered in Port Harcourt, at the heart of one of Africa’s most vital energy hubs. We are committed to delivering reliable, efficient, and responsible energy solutions across the upstream, midstream, and downstream sectors",
    highlights: [
      "Operational systems designed for traceability and speed.",
      "Leadership with deep regional and global project exposure.",
      "A safety-first mindset embedded across every workstream.",
    ],
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1400&q=80",
  },
  "/who-we-are/oil-gas-objective": {
    title: "Oil & Gas Objective | Petrowave Energy Limited",
    description:
      "Explore Petrowave Energy Limited's oil and gas objectives focused on resilience, efficiency, and long-term sustainability.",
    heading: "Our objective in oil and gas",
    intro:
      "We align strategic sourcing, production support, and market intelligence to help clients improve output quality and commercial resilience. PetrolLink focuses on practical innovation that moves projects from intent to impact.",
    highlights: [
      "Performance goals tied to production continuity.",
      "Commercial intelligence for smarter energy decisions.",
      "Partnership models built around lifecycle value.",
    ],
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=80",
  },
  "/why-us/procurement": {
    title: "Procurement | PetrolLink",
    description:
      "See how PetrolLink procurement services reduce lead times, improve supplier quality, and protect project budgets.",
    heading: "Procurement with industrial precision",
    intro:
      "Our procurement model combines vetted supplier ecosystems, strict quality control, and schedule-aware logistics. The result is dependable material flow for critical energy projects.",
    highlights: [
      "Category-based sourcing for specialized equipment.",
      "Risk controls to prevent delays and cost overrun.",
      "Integrated QA/QC checkpoints before deployment.",
    ],
    image:
      "https://images.unsplash.com/photo-1564473185935-58143c4f0f4f?auto=format&fit=crop&w=1400&q=80",
  },
  "/why-us/upstream": {
    title: "Upstream | PetrolLink",
    description:
      "PetrolLink upstream expertise supports exploration and production with reliable planning and technical execution.",
    heading: "Upstream confidence from planning to production",
    intro:
      "From seismic-support logistics to production readiness, we coordinate multidisciplinary teams that keep upstream operations focused, compliant, and efficient.",
    highlights: [
      "Integrated support for field development programs.",
      "Asset readiness frameworks for safer startup.",
      "Collaboration with specialized technical partners.",
    ],
    image:
      "https://images.unsplash.com/photo-1579815914021-7c6f7f08f0df?auto=format&fit=crop&w=1400&q=80",
  },
  "/why-us/downstream": {
    title: "Downstream | PetrolLink",
    description:
      "Learn how PetrolLink strengthens downstream operations through process optimization and dependable distribution strategies.",
    heading: "Downstream operations designed for continuity",
    intro:
      "PetrolLink improves refinery and distribution performance with practical process enhancements, data-led planning, and robust operations support.",
    highlights: [
      "Supply-chain optimization for distribution reliability.",
      "Maintenance planning that minimizes downtime.",
      "Safety and compliance alignment across facilities.",
    ],
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
  },
  "/why-us/offshore": {
    title: "Offshore | PetrolLink",
    description:
      "PetrolLink offshore capabilities deliver resilient support for challenging marine operations and infrastructure.",
    heading: "Offshore capability in complex environments",
    intro:
      "Our offshore programs prioritize safety, reliability, and execution discipline. We coordinate critical resources and technical services for marine and deep-water operations.",
    highlights: [
      "Marine logistics structured for weather resilience.",
      "Asset integrity support for offshore installations.",
      "Experienced teams for high-stakes operations.",
    ],
    image:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1400&q=80",
  },
  "/why-us/human-resources": {
    title: "Human Resources | PetrolLink",
    description:
      "PetrolLink human resources services build high-performing teams for complex energy operations.",
    heading: "Human resources for mission-critical energy teams",
    intro:
      "We recruit, deploy, and develop professionals across engineering, project controls, and field operations. Our HR function is built for speed, compliance, and technical fit.",
    highlights: [
      "Talent pipelines aligned to project timelines.",
      "Competency frameworks for role-critical assignments.",
      "Workforce planning with strong compliance standards.",
    ],
    image:
      "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1400&q=80",
  },
  "/sustainability/environment": {
    title: "Environment | PetrolLink",
    description:
      "Discover PetrolLink's environmental strategy for responsible operations, emissions awareness, and ecosystem protection.",
    heading: "Environmental stewardship in every operation",
    intro:
      "Environmental performance is integrated into our planning, procurement, and project governance. We measure impact, strengthen controls, and pursue cleaner operating practices.",
    highlights: [
      "Environmental risk screening across project stages.",
      "Operational controls to reduce emissions intensity.",
      "Continuous monitoring and transparent reporting.",
    ],
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80",
  },
  "/sustainability/social-investment": {
    title: "Social Investment | PetrolLink",
    description:
      "See how PetrolLink social investment programs drive community development, skills transfer, and local value creation.",
    heading: "Social investment that creates shared value",
    intro:
      "PetrolLink partners with local stakeholders to support workforce readiness, enterprise development, and social infrastructure where we operate.",
    highlights: [
      "Community-focused initiatives with measurable outcomes.",
      "Skills and mentorship pathways for local talent.",
      "Long-term partnerships with social institutions.",
    ],
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80",
  },
  "/sustainability/esg-goals": {
    title: "ESG Goals | PetrolLink",
    description:
      "Review PetrolLink ESG goals and the measurable commitments guiding governance, social impact, and environmental progress.",
    heading: "ESG goals grounded in measurable action",
    intro:
      "Our ESG roadmap aligns governance quality, social responsibility, and environmental performance with business strategy. We focus on practical targets that drive accountable progress.",
    highlights: [
      "Governance standards anchored in transparency.",
      "Social impact linked to workforce and community outcomes.",
      "Environmental goals reviewed through data-driven metrics.",
    ],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
  },
  "/investors/partnership": {
    title: "Partnership | PetrolLink",
    description:
      "Explore PetrolLink partnership models for strategic investors seeking resilient growth in the energy sector.",
    heading: "Partnerships built for durable growth",
    intro:
      "We work with institutional and strategic partners to scale value-accretive opportunities across the energy value chain.",
    highlights: [
      "Clear governance frameworks for joint execution.",
      "Risk-sharing structures aligned with performance.",
      "Strategic collaboration across multiple segments.",
    ],
    image:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1400&q=80",
  },
  "/investors/investment-portfolio": {
    title: "Investment Portfolio | PetrolLink",
    description:
      "PetrolLink's investment portfolio highlights balanced opportunities across upstream, downstream, and support services.",
    heading: "A balanced and forward-looking investment portfolio",
    intro:
      "Our portfolio strategy focuses on resilient cashflow, operational leverage, and disciplined capital allocation in high-potential segments.",
    highlights: [
      "Diversified exposure across core energy domains.",
      "Selective investment criteria with clear milestones.",
      "Long-horizon planning with active performance reviews.",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  },
  "/investors/investment-presentation": {
    title: "Investment Presentation | PetrolLink",
    description:
      "Access PetrolLink's investment presentation narrative, including value drivers, market outlook, and execution strategy.",
    heading: "Investment presentation and strategic narrative",
    intro:
      "Our investor presentation outlines market context, capability depth, and the execution model that supports sustainable returns.",
    highlights: [
      "Clear articulation of growth levers and risk factors.",
      "Execution milestones with governance visibility.",
      "Value creation supported by operational evidence.",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
  },
  "/investors/our-corporate-governance": {
    title: "Our Corporate Governance | PetrolLink",
    description:
      "Learn how PetrolLink corporate governance practices support transparency, compliance, and long-term investor confidence.",
    heading: "Corporate governance that strengthens trust",
    intro:
      "Our governance model emphasizes accountability, ethical conduct, and robust oversight. We align decision-making with stakeholder value and regulatory integrity.",
    highlights: [
      "Independent oversight and policy accountability.",
      "Transparent decision frameworks and reporting standards.",
      "Governance culture embedded across leadership levels.",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
  },
};

export const topLevelLinks = [
  { label: "Home", href: "/" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
