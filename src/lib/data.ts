import {
  Building2,
  DraftingCompass,
  ShieldCheck,
  Timer,
  HardHat,
  ClipboardCheck,
} from "lucide-react";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const contactInfo = {
  addressLine1: "75, G. C. Road, Titagarh",
  addressLine2: "(Near Safdar Palace)",
  city: "Kolkata-700119, West Bengal",
  phone1: "9007567100",
  phone2: "9477809100",
  tel1: "+919007567100",
  tel2: "+919477809100",
  whatsapp: "919007567100",
  whatsappLink: "https://wa.me/919007567100",
  email: "alam.tanweer007@gmail.com",
  hours: "Mon – Sat: 10:00 AM – 7:00 PM",
  closed: "Sunday: Closed",
};

export interface Service {
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: typeof Building2;
  items: string[];
}

export const services: Service[] = [
  {
    title: "Architecture",
    tagline: "Design & Engineering",
    description:
      "Precise planning, working drawings, structural and MEP engineering delivered with a refined architectural hand.",
    image: "/images/services/architecture.jpg",
    icon: Building2,
    items: [
      "Planning & Elevation",
      "Working Drawings",
      "Structural Design",
      "3D Architectural Views",
      "MEP Design",
      "BOQ & Estimation",
      "Landscape & Land Surveying",
    ],
  },
  {
    title: "Interior",
    tagline: "Space & Styling",
    description:
      "Functional space planning and premium modular fit-outs, coordinated perfectly with your architecture.",
    image: "/images/services/interior.jpg",
    icon: DraftingCompass,
    items: [
      "Space Planning",
      "3D Interior Visuals",
      "Furniture Layout",
      "Modular Kitchen",
      "False Ceiling",
      "Fit-Out Works & Coordination",
    ],
  },
  {
    title: "Construction",
    tagline: "Execution & Quality",
    description:
      "Rigorous site supervision, quality control and contractor coordination for flawless structural delivery.",
    image: "/images/services/construction.jpg",
    icon: HardHat,
    items: [
      "Site Supervision",
      "Quality Control",
      "Material Inspection",
      "MEP Works",
      "Contractor Coordination",
      "Progress & Cost Control",
    ],
  },
  {
    title: "Project Management",
    tagline: "Oversight & Delivery",
    description:
      "Single-point professional oversight — scheduling, reporting and control across the entire lifecycle.",
    image: "/images/services/project-management.jpg",
    icon: ClipboardCheck,
    items: [
      "Project Scheduling",
      "Detailed Progress Reports",
      "Cost Control",
      "Procurement & Vendor Management",
      "Final Inspection & Handover",
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Interior" | "Institutional" | "Landscape";
  location: string;
  image: string;
  aspect: string;
}

export const projectCategories = [
  "All",
  "Residential",
  "Commercial",
  "Interior",
  "Institutional",
  "Landscape",
] as const;

export const projects: Project[] = [
  { id: "01", title: "Contemporary Bungalow", category: "Residential", location: "New Town, Kolkata", image: "/images/projects/contemporary-bungalow.jpg", aspect: "aspect-[4/5]" },
  { id: "02", title: "Lakeside Villa", category: "Residential", location: "Barrackpore", image: "/images/projects/lakeside-villa.jpg", aspect: "aspect-[3/4]" },
  { id: "03", title: "Resort Villa & Pool", category: "Residential", location: "Bishnupur", image: "/images/projects/resort-villa.jpg", aspect: "aspect-[4/3]" },
  { id: "04", title: "Urban Apartment Residence", category: "Residential", location: "Salt Lake, Kolkata", image: "/images/projects/urban-apartment.jpg", aspect: "aspect-[4/5]" },
  { id: "05", title: "Courtyard Villa", category: "Residential", location: "Sonarpur", image: "/images/projects/courtyard-villa.jpg", aspect: "aspect-[4/3]" },
  { id: "06", title: "Executive Villa Estates", category: "Residential", location: "Rajarhat", image: "/images/projects/executive-villa.jpg", aspect: "aspect-[3/4]" },
  { id: "07", title: "Corporate Office Tower", category: "Commercial", location: "Sector V, Salt Lake", image: "/images/projects/corporate-tower.jpg", aspect: "aspect-[4/5]" },
  { id: "08", title: "Retail Showroom & Boutique", category: "Commercial", location: "Park Street", image: "/images/projects/retail-showroom.jpg", aspect: "aspect-[3/4]" },
  { id: "09", title: "Neo-Bank Branch", category: "Commercial", location: "Howrah", image: "/images/projects/neo-bank.jpg", aspect: "aspect-[4/3]" },
  { id: "10", title: "Commercial Pavilion & Plaza", category: "Commercial", location: "G.T. Road", image: "/images/projects/commercial-pavilion.jpg", aspect: "aspect-[3/4]" },
  { id: "11", title: "Luxury Entrance Pavilion", category: "Commercial", location: "Ballygunge", image: "/images/projects/luxury-entrance.jpg", aspect: "aspect-[4/3]" },
  { id: "12", title: "Penthouse Interior Design", category: "Interior", location: "EM Bypass", image: "/images/projects/penthouse-interior.jpg", aspect: "aspect-[4/5]" },
  { id: "13", title: "Modular Kitchen Studio", category: "Interior", location: "Behala", image: "/images/projects/modular-kitchen.jpg", aspect: "aspect-[4/3]" },
  { id: "14", title: "Apartment Interior Styling", category: "Interior", location: "South City", image: "/images/projects/apartment-interior.jpg", aspect: "aspect-[3/4]" },
  { id: "15", title: "Executive Workspace Interiors", category: "Interior", location: "Rajarhat", image: "/images/projects/workspace-interior.jpg", aspect: "aspect-[4/3]" },
  { id: "16", title: "Wellness & Care Centre", category: "Institutional", location: "New Town", image: "/images/projects/wellness-centre.jpg", aspect: "aspect-[3/4]" },
  { id: "17", title: "University Academic Block", category: "Institutional", location: "Jadavpur", image: "/images/projects/university-academic-block.jpg", aspect: "aspect-[4/5]" },
  { id: "18", title: "Botanic Garden Court", category: "Landscape", location: "Alipore", image: "/images/projects/botanic-garden.jpg", aspect: "aspect-[4/3]" },
  { id: "19", title: "Boulevard Children's Park", category: "Landscape", location: "Bypass", image: "/images/projects/children-park.jpg", aspect: "aspect-[4/5]" },
  { id: "20", title: "Garden Residence Courts", category: "Landscape", location: "Salt Lake", image: "/images/projects/garden-residence.jpg", aspect: "aspect-[3/4]" },
];

export const featuredProjects = projects.filter((p) =>
  ["01", "08", "12", "16", "18", "02", "13", "17", "03", "20"].includes(p.id)
);

export interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  { num: "01", title: "Consultation", description: "We understand your vision, requirements, budget and timeline before a single line is drawn." },
  { num: "02", title: "Planning", description: "Site study and spatial planning translate your brief into a clear, buildable programme." },
  { num: "03", title: "Design", description: "Precise layouts, elevations, 3D visualizations, structural and MEP drawings come together." },
  { num: "04", title: "Estimation", description: "Detailed BOQ, transparent cost estimates and material scheduling keep the budget honest." },
  { num: "05", title: "Execution", description: "On-site construction, rigorous quality control and constant progress monitoring." },
  { num: "06", title: "Handover", description: "Final inspections, deep cleaning and a seamless, confident project handover." },
];

export const whyChooseUs = [
  { title: "Integrated Expertise", description: "Architecture, interior design and construction consolidated under one professional roof.", icon: Building2 },
  { title: "Design Precision", description: "Rigorous structural and MEP design ensuring absolute safety, compliance and detail.", icon: DraftingCompass },
  { title: "Quality Execution", description: "Premium material selection with strict on-site quality control measures.", icon: ShieldCheck },
  { title: "Cost & Time Control", description: "Transparent BOQ estimation and disciplined scheduling to prevent overruns.", icon: Timer },
  { title: "Professional Supervision", description: "Experienced engineers monitor every phase with complete accountability.", icon: HardHat },
  { title: "Complete Project Management", description: "Comprehensive oversight from consultation to final structural handover.", icon: ClipboardCheck },
];

export const stats = [
  { value: "20+", label: "Years Expertise" },
  { value: "150+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "5/5", label: "Quality Rating" },
];