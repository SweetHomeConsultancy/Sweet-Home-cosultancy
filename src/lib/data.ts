import {
  Building2,
  DraftingCompass,
  ShieldCheck,
  Timer,
  HardHat,
  ClipboardCheck,
  LandPlot,
  Handshake,
  Banknote,
  MessageSquareText,
  Calculator,
  PencilRuler,
} from "lucide-react";

export const brand = {
  name: "Sweet Home Consultancy Services",
  tagline:
    "Architecture • Interior Design • Construction • Project Management • Real Estate Consultancy",
  motto: "Designing Better Spaces, Building Better Futures.",
  website: "www.sweethomeprojects.com",
};

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
  phone1: "9804725100",
  tel1: "+919804725100",
  whatsapp: "919804725100",
  whatsappLink: "https://wa.me/919804725100",
  email: "info@sweethomeprojects.com",
  hours: "Mon – Sat: 9:00 AM – 7:00 PM",
  closed: "Sunday: By Appointment",
  consultation: "Consultation: Available by Appointment",
};

export const serviceAreas = [
  "Kolkata",
  "Barrackpore",
  "Khardah",
  "Sodpur",
  "Madhyamgram",
  "Dum Dum",
  "New Town",
  "Salt Lake",
  "Howrah",
  "Hooghly",
  "North 24 Parganas",
  "South 24 Parganas",
  "and nearby areas",
];

export const founder = {
  name: "Tanweer Alam",
  title: "Founder & Principal Consultant",
  summary:
    "An experienced professional with qualifications in Architecture and Construction Project Management, offering comprehensive consultancy services from concept design to project completion.",
  qualifications: [
    "Diploma in Architecture",
    "Graduate in Arts (B.A.)",
    "Post Graduate in Construction & Project Management",
    "Experience in Architecture, Interior Design, and Construction",
    "GCC and India Project Experience",
  ],
};

export const mission =
  "To provide high-quality design and construction consultancy services that create value, functionality, and client satisfaction.";

export const vision =
  "To become one of the most trusted architectural and construction consultancy firms in Kolkata and beyond.";

export const coreValues = [
  "Professionalism",
  "Quality",
  "Integrity",
  "Innovation",
  "Client Satisfaction",
];

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
      "House planning, working drawings and municipal-ready documentation — precise, buildable and compliant architectural design.",
    image: "/images/services/architecture.jpg",
    icon: Building2,
    items: [
      "House Planning & Building Design",
      "2D Architectural Drawings",
      "3D Elevation Design",
      "Working Drawings",
      "Building Renovation Planning",
      "Municipal Drawing Assistance",
    ],
  },
  {
    title: "Interior",
    tagline: "Space & Styling",
    description:
      "Functional layouts and 3D visualizations that turn every home and office into a beautiful, usable space.",
    image: "/images/services/interior.jpg",
    icon: DraftingCompass,
    items: [
      "Home Interior Design",
      "Office Interior Design",
      "Modular Kitchen Design",
      "Bedroom & Living Room Design",
      "False Ceiling Design",
      "Space Planning",
      "Material Selection",
      "Furniture Layout Planning",
      "3D Interior Visualization",
    ],
  },
  {
    title: "Construction",
    tagline: "Execution & Quality",
    description:
      "Expert supervision, transparent estimates and rigorous quality control that keep your build on track and on budget.",
    image: "/images/services/construction.jpg",
    icon: HardHat,
    items: [
      "Building Construction Supervision",
      "Quantity Estimation & BOQ",
      "Cost Estimation",
      "Contractor Coordination",
      "Quality Control Inspection",
      "Site Management Support",
    ],
  },
  {
    title: "Project Management",
    tagline: "Oversight & Delivery",
    description:
      "End-to-end planning, monitoring and coordination so your project is delivered on schedule, without surprises.",
    image: "/images/services/project-management.jpg",
    icon: ClipboardCheck,
    items: [
      "Project Planning & Scheduling",
      "Construction Monitoring",
      "Progress Reporting",
      "Material Planning",
      "Resource Planning",
      "Risk Management",
      "Vendor & Contractor Management",
    ],
  },
  {
    title: "Real Estate Consultancy",
    tagline: "Property & Advisory",
    description:
      "Trusted guidance for property purchase, plot development and residential investment across Kolkata and its suburbs.",
    image: "/images/services/construction.jpg",
    icon: LandPlot,
    items: [
      "Property Consultation",
      "Plot Development Guidance",
      "Residential Project Consultation",
      "Property Investment Guidance",
    ],
  },
  {
    title: "Estimation & BOQ",
    tagline: "Cost & Quantities",
    description:
      "Accurate quantity take-offs, transparent BOQ preparation and tender-ready documentation that keep your budget honest.",
    image: "/images/services/construction.jpg",
    icon: Calculator,
    items: [
      "Quantity Take-Off",
      "BOQ Preparation",
      "Cost Estimation",
      "Tender Documentation",
    ],
  },
  {
    title: "CAD & BIM",
    tagline: "Digital Drafting & Modeling",
    description:
      "Precise AutoCAD drafting and Revit modeling — from shop drawings to accurate as-built documentation.",
    image: "/images/services/architecture.jpg",
    icon: PencilRuler,
    items: [
      "AutoCAD Drafting",
      "Revit Modeling",
      "Shop Drawings",
      "As-Built Drawings",
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Interior" | "Institutional" | "Landscape";
  location: string;
  image: string;
  images: string[];
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
  { id: "P01", title: "3D Architectual View Of Apartments Kolkata, year 2018-2014", category: "Residential", location: "Kolkata", image: "/images/projects/3D%20Architectual%20View%20Of%20Apartments%20Kolkata%2C%20year%202018-2014/Screenshot%202026-08-18%20124050.png", images: ["/images/projects/3D%20Architectual%20View%20Of%20Apartments%20Kolkata%2C%20year%202018-2014/Screenshot%202026-08-18%20124050.png", "/images/projects/3D%20Architectual%20View%20Of%20Apartments%20Kolkata%2C%20year%202018-2014/Screenshot%202026-08-18%20124058.png", "/images/projects/3D%20Architectual%20View%20Of%20Apartments%20Kolkata%2C%20year%202018-2014/Screenshot%202026-08-18%20124104.png", "/images/projects/3D%20Architectual%20View%20Of%20Apartments%20Kolkata%2C%20year%202018-2014/Screenshot%202026-08-18%20124112.png"], aspect: "aspect-[4/3]" },
  { id: "P02", title: "3D Architectual View of House, Barrackpore, Kolkata, year 2018", category: "Residential", location: "Barrackpore, Kolkata", image: "/images/projects/3D%20Architectual%20View%20of%20House%2C%20Barrackpore%2C%20Kolkata%2C%20year%202018/Screenshot%202026-08-18%20124340.png", images: ["/images/projects/3D%20Architectual%20View%20of%20House%2C%20Barrackpore%2C%20Kolkata%2C%20year%202018/Screenshot%202026-08-18%20124340.png", "/images/projects/3D%20Architectual%20View%20of%20House%2C%20Barrackpore%2C%20Kolkata%2C%20year%202018/Screenshot%202026-08-18%20124352.png", "/images/projects/3D%20Architectual%20View%20of%20House%2C%20Barrackpore%2C%20Kolkata%2C%20year%202018/Screenshot%202026-08-18%20124359.png"], aspect: "aspect-[4/3]" },
  { id: "P03", title: "3D Architecture View Of G+3 Building & Open Tarrace Garden, Khardaha, Kolkata, year 2024", category: "Residential", location: "Khardaha, Kolkata", image: "/images/projects/3D%20Architecture%20View%20Of%20G%2B3%20Building%20%26%20Open%20Tarrace%20Garden%2C%20Khardaha%2C%20Kolkata%2C%20year%202024/Screenshot%202026-08-18%20124613.png", images: ["/images/projects/3D%20Architecture%20View%20Of%20G%2B3%20Building%20%26%20Open%20Tarrace%20Garden%2C%20Khardaha%2C%20Kolkata%2C%20year%202024/Screenshot%202026-08-18%20124613.png", "/images/projects/3D%20Architecture%20View%20Of%20G%2B3%20Building%20%26%20Open%20Tarrace%20Garden%2C%20Khardaha%2C%20Kolkata%2C%20year%202024/Screenshot%202026-08-18%20124619.png", "/images/projects/3D%20Architecture%20View%20Of%20G%2B3%20Building%20%26%20Open%20Tarrace%20Garden%2C%20Khardaha%2C%20Kolkata%2C%20year%202024/Screenshot%202026-08-18%20124626.png"], aspect: "aspect-[4/3]" },
  { id: "P04", title: "3D Architecture Views Of Hotel & Restaurant & Shop, Al Rass Saudi Arabia year 2014-2015", category: "Commercial", location: "Al Rass, Saudi Arabia", image: "/images/projects/3D%20Architecture%20Views%20Of%20Hotel%20%26%20Restaurant%20%26%20Shop%2C%20Al%20Rass%20Saudi%20Arabia%20year%202014-2015/Screenshot%202026-08-18%20123909.png", images: ["/images/projects/3D%20Architecture%20Views%20Of%20Hotel%20%26%20Restaurant%20%26%20Shop%2C%20Al%20Rass%20Saudi%20Arabia%20year%202014-2015/Screenshot%202026-08-18%20123909.png", "/images/projects/3D%20Architecture%20Views%20Of%20Hotel%20%26%20Restaurant%20%26%20Shop%2C%20Al%20Rass%20Saudi%20Arabia%20year%202014-2015/Screenshot%202026-08-18%20123915.png", "/images/projects/3D%20Architecture%20Views%20Of%20Hotel%20%26%20Restaurant%20%26%20Shop%2C%20Al%20Rass%20Saudi%20Arabia%20year%202014-2015/Screenshot%202026-08-18%20123924.png", "/images/projects/3D%20Architecture%20Views%20Of%20Hotel%20%26%20Restaurant%20%26%20Shop%2C%20Al%20Rass%20Saudi%20Arabia%20year%202014-2015/Screenshot%202026-08-18%20123930.png"], aspect: "aspect-[4/3]" },
  { id: "P05", title: "Al Rajhi Bank Clading Design Al Rass in the year of 2013", category: "Commercial", location: "Al Rass, Saudi Arabia", image: "/images/projects/Al%20Rajhi%20Bank%20Clading%20Design%20Al%20Rass%20in%20the%20year%20of%202013/WhatsApp%20Image%202026-08-18%20at%202.28.18%20AM.jpeg", images: ["/images/projects/Al%20Rajhi%20Bank%20Clading%20Design%20Al%20Rass%20in%20the%20year%20of%202013/WhatsApp%20Image%202026-08-18%20at%202.28.18%20AM.jpeg", "/images/projects/Al%20Rajhi%20Bank%20Clading%20Design%20Al%20Rass%20in%20the%20year%20of%202013/WhatsApp%20Image%202026-08-18%20at%202.28.18.1%20AM.jpeg"], aspect: "aspect-[4/3]" },
  { id: "P06", title: "Axis Bank Interrior Kolkata, India, Upto 2024", category: "Interior", location: "Kolkata, India", image: "/images/projects/Axis%20Bank%20Interrior%20Kolkata%2C%20India%2C%20Upto%202024/Screenshot%202026-08-18%20124834.png", images: ["/images/projects/Axis%20Bank%20Interrior%20Kolkata%2C%20India%2C%20Upto%202024/Screenshot%202026-08-18%20124834.png", "/images/projects/Axis%20Bank%20Interrior%20Kolkata%2C%20India%2C%20Upto%202024/Screenshot%202026-08-18%20124839.png", "/images/projects/Axis%20Bank%20Interrior%20Kolkata%2C%20India%2C%20Upto%202024/Screenshot%202026-08-18%20124846.png", "/images/projects/Axis%20Bank%20Interrior%20Kolkata%2C%20India%2C%20Upto%202024/Screenshot%202026-08-18%20124854.png", "/images/projects/Axis%20Bank%20Interrior%20Kolkata%2C%20India%2C%20Upto%202024/Screenshot%202026-08-18%20124901.png", "/images/projects/Axis%20Bank%20Interrior%20Kolkata%2C%20India%2C%20Upto%202024/Screenshot%202026-08-18%20124907.png"], aspect: "aspect-[4/3]" },
  { id: "P07", title: "Dinning Room Customer, Al, Rass, K.S.A", category: "Interior", location: "Al Rass, Saudi Arabia", image: "/images/projects/Dinning%20Room%20Customer%2C%20Al%2C%20Rass%2C%20K.S.A/Screenshot%202026-08-18%20135020.png", images: ["/images/projects/Dinning%20Room%20Customer%2C%20Al%2C%20Rass%2C%20K.S.A/Screenshot%202026-08-18%20135020.png", "/images/projects/Dinning%20Room%20Customer%2C%20Al%2C%20Rass%2C%20K.S.A/Screenshot%202026-08-18%20135025.png"], aspect: "aspect-[4/3]" },
  { id: "P08", title: "Girls Bed Room Customers, Al, Rass, K.S.A", category: "Interior", location: "Al Rass, Saudi Arabia", image: "/images/projects/Girls%20Bed%20Room%20Customers%2C%20Al%2C%20Rass%2C%20K.S.A/Screenshot%202026-08-18%20134936.png", images: ["/images/projects/Girls%20Bed%20Room%20Customers%2C%20Al%2C%20Rass%2C%20K.S.A/Screenshot%202026-08-18%20134936.png", "/images/projects/Girls%20Bed%20Room%20Customers%2C%20Al%2C%20Rass%2C%20K.S.A/Screenshot%202026-08-18%20134941.png"], aspect: "aspect-[4/3]" },
  { id: "P09", title: "Hospital Reception & Magasal Rl Rass- K.S.A", category: "Commercial", location: "Al Rass, Saudi Arabia", image: "/images/projects/Hospital%20Reception%20%26%20Magasal%20Rl%20Rass-%20K.S.A/Screenshot%202026-08-18%20125203.png", images: ["/images/projects/Hospital%20Reception%20%26%20Magasal%20Rl%20Rass-%20K.S.A/Screenshot%202026-08-18%20125203.png", "/images/projects/Hospital%20Reception%20%26%20Magasal%20Rl%20Rass-%20K.S.A/Screenshot%202026-08-18%20125210.png", "/images/projects/Hospital%20Reception%20%26%20Magasal%20Rl%20Rass-%20K.S.A/Screenshot%202026-08-18%20125217.png"], aspect: "aspect-[4/3]" },
  { id: "P10", title: "Istraha In Al Rass, Abdul Saleh year 2012", category: "Residential", location: "Al Rass, Saudi Arabia", image: "/images/projects/Istraha%20In%20Al%20Rass%2C%20Abdul%20Saleh%20year%202012/Screenshot%202026-08-18%20120948.png", images: ["/images/projects/Istraha%20In%20Al%20Rass%2C%20Abdul%20Saleh%20year%202012/Screenshot%202026-08-18%20120948.png", "/images/projects/Istraha%20In%20Al%20Rass%2C%20Abdul%20Saleh%20year%202012/Screenshot%202026-08-18%20120953.png", "/images/projects/Istraha%20In%20Al%20Rass%2C%20Abdul%20Saleh%20year%202012/Screenshot%202026-08-18%20121001.png", "/images/projects/Istraha%20In%20Al%20Rass%2C%20Abdul%20Saleh%20year%202012/Screenshot%202026-08-18%20121006.png"], aspect: "aspect-[4/3]" },
  { id: "P11", title: "Kitchen Wardrobe, Doors & TV. Decors works", category: "Interior", location: "Gulf Region", image: "/images/projects/Kitchen%20Wardrobe%2C%20Doors%20%26%20TV.%20Decors%20works/Screenshot%202026-08-18%20135406.png", images: ["/images/projects/Kitchen%20Wardrobe%2C%20Doors%20%26%20TV.%20Decors%20works/Screenshot%202026-08-18%20135406.png", "/images/projects/Kitchen%20Wardrobe%2C%20Doors%20%26%20TV.%20Decors%20works/Screenshot%202026-08-18%20135410.png", "/images/projects/Kitchen%20Wardrobe%2C%20Doors%20%26%20TV.%20Decors%20works/Screenshot%202026-08-18%20135416.png", "/images/projects/Kitchen%20Wardrobe%2C%20Doors%20%26%20TV.%20Decors%20works/Screenshot%202026-08-18%20135423.png"], aspect: "aspect-[4/3]" },
  { id: "P12", title: "Kitchen Wardror, Doors & T.V Decor Works", category: "Interior", location: "Gulf Region", image: "/images/projects/Kitchen%20Wardror%2C%20Doors%20%26%20T.V%20Decor%20Works/Screenshot%202026-08-18%20135556.png", images: ["/images/projects/Kitchen%20Wardror%2C%20Doors%20%26%20T.V%20Decor%20Works/Screenshot%202026-08-18%20135556.png", "/images/projects/Kitchen%20Wardror%2C%20Doors%20%26%20T.V%20Decor%20Works/Screenshot%202026-08-18%20135604.png", "/images/projects/Kitchen%20Wardror%2C%20Doors%20%26%20T.V%20Decor%20Works/Screenshot%202026-08-18%20135610.png", "/images/projects/Kitchen%20Wardror%2C%20Doors%20%26%20T.V%20Decor%20Works/Screenshot%202026-08-18%20135616.png"], aspect: "aspect-[4/3]" },
  { id: "P13", title: "Landscaping Works In Customer, Al Rass 2012", category: "Landscape", location: "Al Rass, Saudi Arabia", image: "/images/projects/Landscaping%20Works%20In%20Customer%2C%20Al%20Rass%202012/Screenshot%202026-08-18%20120829.png", images: ["/images/projects/Landscaping%20Works%20In%20Customer%2C%20Al%20Rass%202012/Screenshot%202026-08-18%20120829.png", "/images/projects/Landscaping%20Works%20In%20Customer%2C%20Al%20Rass%202012/Screenshot%202026-08-18%20120834.png", "/images/projects/Landscaping%20Works%20In%20Customer%2C%20Al%20Rass%202012/Screenshot%202026-08-18%20120840.png", "/images/projects/Landscaping%20Works%20In%20Customer%2C%20Al%20Rass%202012/WhatsApp%20Image%202026-08-18%20at%202.28.18%20AM.jpeg"], aspect: "aspect-[4/3]" },
  { id: "P14", title: "Living Room Customer Kolkata, India", category: "Interior", location: "Kolkata, India", image: "/images/projects/Living%20Room%20Customer%20Kolkata%2C%20India/Screenshot%202026-08-18%20134559.png", images: ["/images/projects/Living%20Room%20Customer%20Kolkata%2C%20India/Screenshot%202026-08-18%20134559.png", "/images/projects/Living%20Room%20Customer%20Kolkata%2C%20India/Screenshot%202026-08-18%20134606.png", "/images/projects/Living%20Room%20Customer%20Kolkata%2C%20India/Screenshot%202026-08-18%20134612.png"], aspect: "aspect-[4/3]" },
  { id: "P15", title: "Living Room Customers, AL, Rass, K.S.A", category: "Interior", location: "Al Rass, Saudi Arabia", image: "/images/projects/Living%20Room%20Customers%2C%20AL%2C%20Rass%2C%20K.S.A/Screenshot%202026-08-18%20134502.png", images: ["/images/projects/Living%20Room%20Customers%2C%20AL%2C%20Rass%2C%20K.S.A/Screenshot%202026-08-18%20134502.png", "/images/projects/Living%20Room%20Customers%2C%20AL%2C%20Rass%2C%20K.S.A/Screenshot%202026-08-18%20134511.png", "/images/projects/Living%20Room%20Customers%2C%20AL%2C%20Rass%2C%20K.S.A/Screenshot%202026-08-18%20134518.png"], aspect: "aspect-[4/3]" },
  { id: "P16", title: "Markaz Al Huda, Deoria - UP Year- 2012", category: "Institutional", location: "Deoria, Uttar Pradesh", image: "/images/projects/Markaz%20Al%20Huda%2C%20Deoria%20-%20UP%20Year-%202012/Screenshot%202026-08-18%20121405.png", images: ["/images/projects/Markaz%20Al%20Huda%2C%20Deoria%20-%20UP%20Year-%202012/Screenshot%202026-08-18%20121405.png", "/images/projects/Markaz%20Al%20Huda%2C%20Deoria%20-%20UP%20Year-%202012/Screenshot%202026-08-18%20121412.png"], aspect: "aspect-[4/3]" },
  { id: "P17", title: "Masjid E Masroor, C.C  Road, Titagarh, Kolkata-700119, (W.B) India year-2017", category: "Institutional", location: "Titagarh, Kolkata", image: "/images/projects/Masjid%20E%20Masroor%2C%20C.C%20%20Road%2C%20Titagarh%2C%20Kolkata-700119%2C%20(W.B)%20India%20year-2017/Screenshot%202026-08-18%20121214.png", images: ["/images/projects/Masjid%20E%20Masroor%2C%20C.C%20%20Road%2C%20Titagarh%2C%20Kolkata-700119%2C%20(W.B)%20India%20year-2017/Screenshot%202026-08-18%20121214.png", "/images/projects/Masjid%20E%20Masroor%2C%20C.C%20%20Road%2C%20Titagarh%2C%20Kolkata-700119%2C%20(W.B)%20India%20year-2017/Screenshot%202026-08-18%20121220.png"], aspect: "aspect-[4/3]" },
  { id: "P18", title: "Master Bed Room Customers, AL, Rass, K.S.A", category: "Interior", location: "Al Rass, Saudi Arabia", image: "/images/projects/Master%20Bed%20Room%20Customers%2C%20AL%2C%20Rass%2C%20K.S.A/Screenshot%202026-08-18%20134726.png", images: ["/images/projects/Master%20Bed%20Room%20Customers%2C%20AL%2C%20Rass%2C%20K.S.A/Screenshot%202026-08-18%20134726.png", "/images/projects/Master%20Bed%20Room%20Customers%2C%20AL%2C%20Rass%2C%20K.S.A/Screenshot%202026-08-18%20134732.png", "/images/projects/Master%20Bed%20Room%20Customers%2C%20AL%2C%20Rass%2C%20K.S.A/Screenshot%202026-08-18%20134737.png"], aspect: "aspect-[4/3]" },
  { id: "P19", title: "Master Bed Room Customers, Kolkata, India", category: "Interior", location: "Kolkata, India", image: "/images/projects/Master%20Bed%20Room%20Customers%2C%20Kolkata%2C%20India/Screenshot%202026-08-18%20134824.png", images: ["/images/projects/Master%20Bed%20Room%20Customers%2C%20Kolkata%2C%20India/Screenshot%202026-08-18%20134824.png", "/images/projects/Master%20Bed%20Room%20Customers%2C%20Kolkata%2C%20India/Screenshot%202026-08-18%20134830.png", "/images/projects/Master%20Bed%20Room%20Customers%2C%20Kolkata%2C%20India/Screenshot%202026-08-18%20134836.png", "/images/projects/Master%20Bed%20Room%20Customers%2C%20Kolkata%2C%20India/Screenshot%202026-08-18%20134842.png"], aspect: "aspect-[4/3]" },
  { id: "P20", title: "Maulana Azad National Park For Kids and Comunity Hall year 2018", category: "Landscape", location: "Kolkata", image: "/images/projects/Maulana%20Azad%20National%20Park%20For%20Kids%20and%20Comunity%20Hall%20year%202018/Screenshot%202026-08-18%20120212.png", images: ["/images/projects/Maulana%20Azad%20National%20Park%20For%20Kids%20and%20Comunity%20Hall%20year%202018/Screenshot%202026-08-18%20120212.png", "/images/projects/Maulana%20Azad%20National%20Park%20For%20Kids%20and%20Comunity%20Hall%20year%202018/Screenshot%202026-08-18%20120226.png", "/images/projects/Maulana%20Azad%20National%20Park%20For%20Kids%20and%20Comunity%20Hall%20year%202018/Screenshot%202026-08-18%20120328.png", "/images/projects/Maulana%20Azad%20National%20Park%20For%20Kids%20and%20Comunity%20Hall%20year%202018/Screenshot%202026-08-18%20120336.png"], aspect: "aspect-[4/3]" },
  { id: "P21", title: "New Market Complex In Al-Rass - Saudi Arabiya year 2012", category: "Commercial", location: "Al Rass, Saudi Arabia", image: "/images/projects/New%20Market%20Complex%20In%20Al-Rass%20-%20Saudi%20Arabiya%20year%202012/WhatsApp%20Image%202026-08-18%20at%202.28.18%20AM.jpeg", images: ["/images/projects/New%20Market%20Complex%20In%20Al-Rass%20-%20Saudi%20Arabiya%20year%202012/WhatsApp%20Image%202026-08-18%20at%202.28.18%20AM.jpeg", "/images/projects/New%20Market%20Complex%20In%20Al-Rass%20-%20Saudi%20Arabiya%20year%202012/WhatsApp%20Image%202026-08-18%20at%202.28.18.1%20AM.jpeg"], aspect: "aspect-[4/3]" },
  { id: "P22", title: "Petrol Pump Al Qassim Saudi Arabiya year 2014", category: "Commercial", location: "Al Qassim, Saudi Arabia", image: "/images/projects/Petrol%20Pump%20Al%20Qassim%20Saudi%20Arabiya%20year%202014/WhatsApp%20Image%202026-08-18%20at%202.28.18%20AM.jpeg", images: ["/images/projects/Petrol%20Pump%20Al%20Qassim%20Saudi%20Arabiya%20year%202014/WhatsApp%20Image%202026-08-18%20at%202.28.18%20AM.jpeg", "/images/projects/Petrol%20Pump%20Al%20Qassim%20Saudi%20Arabiya%20year%202014/WhatsApp%20Image%202026-08-18%20at%202.28.18.1%20AM.jpeg"], aspect: "aspect-[4/3]" },
  { id: "P23", title: "Qasar 3D View Customer, Al Qasim year 2014", category: "Residential", location: "Al Qassim, Saudi Arabia", image: "/images/projects/Qasar%203D%20View%20Customer%2C%20Al%20Qasim%20year%202014/Screenshot%202026-08-18%20122322.png", images: ["/images/projects/Qasar%203D%20View%20Customer%2C%20Al%20Qasim%20year%202014/Screenshot%202026-08-18%20122322.png", "/images/projects/Qasar%203D%20View%20Customer%2C%20Al%20Qasim%20year%202014/Screenshot%202026-08-18%20122326.png"], aspect: "aspect-[4/3]" },
  { id: "P24", title: "Qasar 3D View Customer, Al Rass Year 2012", category: "Residential", location: "Al Rass, Saudi Arabia", image: "/images/projects/Qasar%203D%20View%20Customer%2C%20Al%20Rass%20Year%202012/Screenshot%202026-08-18%20122143.png", images: ["/images/projects/Qasar%203D%20View%20Customer%2C%20Al%20Rass%20Year%202012/Screenshot%202026-08-18%20122143.png", "/images/projects/Qasar%203D%20View%20Customer%2C%20Al%20Rass%20Year%202012/Screenshot%202026-08-18%20122147.png"], aspect: "aspect-[4/3]" },
  { id: "P25", title: "Restaurant & Coffee Shop Rl Rass - K.S.A", category: "Commercial", location: "Al Rass, Saudi Arabia", image: "/images/projects/Restaurant%20%26%20Coffee%20Shop%20Rl%20Rass%20-%20K.S.A/Screenshot%202026-08-18%20125033.png", images: ["/images/projects/Restaurant%20%26%20Coffee%20Shop%20Rl%20Rass%20-%20K.S.A/Screenshot%202026-08-18%20125033.png", "/images/projects/Restaurant%20%26%20Coffee%20Shop%20Rl%20Rass%20-%20K.S.A/Screenshot%202026-08-18%20125039.png", "/images/projects/Restaurant%20%26%20Coffee%20Shop%20Rl%20Rass%20-%20K.S.A/Screenshot%202026-08-18%20125044.png"], aspect: "aspect-[4/3]" },
  { id: "P26", title: "Road Circle Landscaping, AL Qassim in the year 2013", category: "Landscape", location: "Al Qassim, Saudi Arabia", image: "/images/projects/Road%20Circle%20Landscaping%2C%20AL%20Qassim%20in%20the%20year%202013/Screenshot%202026-08-18%20115954.png", images: ["/images/projects/Road%20Circle%20Landscaping%2C%20AL%20Qassim%20in%20the%20year%202013/Screenshot%202026-08-18%20115954.png", "/images/projects/Road%20Circle%20Landscaping%2C%20AL%20Qassim%20in%20the%20year%202013/WhatsApp%20Image%202026-08-18%20at%202.28.18%20AM.jpeg"], aspect: "aspect-[4/3]" },
  { id: "P27", title: "Shree Ram Krishna Institute Of Science & Technology", category: "Institutional", location: "Kolkata", image: "/images/projects/Shree%20Ram%20Krishna%20Institute%20Of%20Science%20%26%20Technology/WhatsApp%20Image%202026-08-18%20at%202.28.17%20AM.jpeg", images: ["/images/projects/Shree%20Ram%20Krishna%20Institute%20Of%20Science%20%26%20Technology/WhatsApp%20Image%202026-08-18%20at%202.28.17%20AM.jpeg", "/images/projects/Shree%20Ram%20Krishna%20Institute%20Of%20Science%20%26%20Technology/WhatsApp%20Image%202026-08-18%20at%202.28.18%20AM.jpeg"], aspect: "aspect-[4/3]" },
  { id: "P28", title: "Sweet Home Of Customer, Al Rass, Saudi Arabia Year 2013", category: "Residential", location: "Al Rass, Saudi Arabia", image: "/images/projects/Sweet%20Home%20Of%20Customer%2C%20Al%20Rass%2C%20Saudi%20Arabia%20Year%202013/WhatsApp%20Image%202026-08-18%20at%202.28.19%20AM.jpeg", images: ["/images/projects/Sweet%20Home%20Of%20Customer%2C%20Al%20Rass%2C%20Saudi%20Arabia%20Year%202013/WhatsApp%20Image%202026-08-18%20at%202.28.19%20AM.jpeg", "/images/projects/Sweet%20Home%20Of%20Customer%2C%20Al%20Rass%2C%20Saudi%20Arabia%20Year%202013/WhatsApp%20Image%202026-08-18%20at%202.28.19.1%20AM.jpeg"], aspect: "aspect-[4/3]" },
  { id: "P29", title: "Sweet Home Of Mr Mubara Hussain Sir, GC Road, Titagarh Kolkata - 700119(WB) India year 2016", category: "Residential", location: "Titagarh, Kolkata", image: "/images/projects/Sweet%20Home%20Of%20Mr%20Mubara%20Hussain%20Sir%2C%20GC%20Road%2C%20Titagarh%20Kolkata%20-%20700119(WB)%20India%20year%202016/WhatsApp%20Image%202026-08-18%20at%202.28.19%20AM.jpeg", images: ["/images/projects/Sweet%20Home%20Of%20Mr%20Mubara%20Hussain%20Sir%2C%20GC%20Road%2C%20Titagarh%20Kolkata%20-%20700119(WB)%20India%20year%202016/WhatsApp%20Image%202026-08-18%20at%202.28.19%20AM.jpeg", "/images/projects/Sweet%20Home%20Of%20Mr%20Mubara%20Hussain%20Sir%2C%20GC%20Road%2C%20Titagarh%20Kolkata%20-%20700119(WB)%20India%20year%202016/WhatsApp%20Image%202026-08-18%20at%202.28.19.1%20AM.jpeg"], aspect: "aspect-[4/3]" },
  { id: "P30", title: "Villas 3D Architectual View Of Musahidabad Customer, W.B, India year 2017", category: "Residential", location: "Musahidabad, West Bengal", image: "/images/projects/Villas%203D%20Architectual%20View%20Of%20Musahidabad%20Customer%2C%20W.B%2C%20India%20year%202017/Screenshot%202026-08-18%20123656.png", images: ["/images/projects/Villas%203D%20Architectual%20View%20Of%20Musahidabad%20Customer%2C%20W.B%2C%20India%20year%202017/Screenshot%202026-08-18%20123656.png", "/images/projects/Villas%203D%20Architectual%20View%20Of%20Musahidabad%20Customer%2C%20W.B%2C%20India%20year%202017/Screenshot%202026-08-18%20123704.png"], aspect: "aspect-[4/3]" },
  { id: "P31", title: "Villas 3D Architectural View Of Customer Al Rass Sadu Arabia YEAR • 2011-2015", category: "Residential", location: "Al Rass, Saudi Arabia", image: "/images/projects/Villas%203D%20Architectural%20View%20Of%20Customer%20Al%20Rass%20Sadu%20Arabia%20YEAR%20%E2%80%A2%202011-2015/Screenshot%202026-08-18%20123017.png", images: ["/images/projects/Villas%203D%20Architectural%20View%20Of%20Customer%20Al%20Rass%20Sadu%20Arabia%20YEAR%20%E2%80%A2%202011-2015/Screenshot%202026-08-18%20123017.png", "/images/projects/Villas%203D%20Architectural%20View%20Of%20Customer%20Al%20Rass%20Sadu%20Arabia%20YEAR%20%E2%80%A2%202011-2015/Screenshot%202026-08-18%20123023.png", "/images/projects/Villas%203D%20Architectural%20View%20Of%20Customer%20Al%20Rass%20Sadu%20Arabia%20YEAR%20%E2%80%A2%202011-2015/Screenshot%202026-08-18%20123031.png", "/images/projects/Villas%203D%20Architectural%20View%20Of%20Customer%20Al%20Rass%20Sadu%20Arabia%20YEAR%20%E2%80%A2%202011-2015/Screenshot%202026-08-18%20123037.png"], aspect: "aspect-[4/3]" },
  { id: "P32", title: "Villas 3D Architectural View Of Customers Al Rass Saudi Arabia year 2011-2015", category: "Residential", location: "Al Rass, Saudi Arabia", image: "/images/projects/Villas%203D%20Architectural%20View%20Of%20Customers%20Al%20Rass%20Saudi%20Arabia%20year%202011-2015/Screenshot%202026-08-18%20123346.png", images: ["/images/projects/Villas%203D%20Architectural%20View%20Of%20Customers%20Al%20Rass%20Saudi%20Arabia%20year%202011-2015/Screenshot%202026-08-18%20123346.png", "/images/projects/Villas%203D%20Architectural%20View%20Of%20Customers%20Al%20Rass%20Saudi%20Arabia%20year%202011-2015/Screenshot%202026-08-18%20123352.png", "/images/projects/Villas%203D%20Architectural%20View%20Of%20Customers%20Al%20Rass%20Saudi%20Arabia%20year%202011-2015/Screenshot%202026-08-18%20123356.png"], aspect: "aspect-[4/3]" },
  { id: "P33", title: "Wood Projects - Bahrain Works", category: "Interior", location: "Bahrain", image: "/images/projects/Wood%20Projects%20-%20Bahrain%20Works/Screenshot%202026-08-18%20135158.png", images: ["/images/projects/Wood%20Projects%20-%20Bahrain%20Works/Screenshot%202026-08-18%20135158.png", "/images/projects/Wood%20Projects%20-%20Bahrain%20Works/Screenshot%202026-08-18%20135204.png", "/images/projects/Wood%20Projects%20-%20Bahrain%20Works/Screenshot%202026-08-18%20135211.png", "/images/projects/Wood%20Projects%20-%20Bahrain%20Works/Screenshot%202026-08-18%20135216.png"], aspect: "aspect-[4/3]" },
  { id: "P34", title: "Interior Work", category: "Interior", location: "India & Gulf", image: "/images/interior%20work.jpeg", images: ["/images/interior%20work.jpeg"], aspect: "aspect-[4/3]" },
  { id: "P35", title: "Interior Work 1", category: "Interior", location: "India & Gulf", image: "/images/interior%20work1.jpeg", images: ["/images/interior%20work1.jpeg"], aspect: "aspect-[4/3]" },
  { id: "P36", title: "Exterior Work With Landscape", category: "Landscape", location: "India & Gulf", image: "/images/Exterior%20work%20with%20landscape.jpeg", images: ["/images/Exterior%20work%20with%20landscape.jpeg"], aspect: "aspect-[4/3]" },
];

export const featuredProjects = projects.filter((p) =>
  ["P01", "P04", "P06", "P13", "P16", "P17", "P20", "P28", "P30", "P33"].includes(p.id)
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
  { title: "Experienced Professional", description: "Extensive industry experience in India and the Gulf — practical, dependable and field-tested expertise.", icon: HardHat },
  { title: "Personalized Client Support", description: "Personal attention at every step, with solutions tailored to your needs, site and budget.", icon: Handshake },
  { title: "Cost-Effective Solutions", description: "Practical, value-driven solutions that respect your budget without compromising on quality.", icon: Banknote },
  { title: "Transparent Communication", description: "Clear, honest communication and open dialogue from first consultation to final handover.", icon: MessageSquareText },
  { title: "Quality-Focused Approach", description: "Quality is never compromised — every phase is inspected, controlled and verified.", icon: ShieldCheck },
  { title: "Timely Project Coordination", description: "Disciplined scheduling and coordination ensure your project is delivered on time.", icon: Timer },
  { title: "Residential & Commercial Expertise", description: "Skilled across homes, offices, commercial spaces, renovations and real estate projects.", icon: Building2 },
];

export const stats = [
  { value: "16+", label: "Years Expertise" },
  { value: "150+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "5/5", label: "Quality Rating" },
];