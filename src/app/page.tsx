"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight, Building2, Ruler, HardHat, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger: any = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Premium Architectural House"
            fill
            className="object-cover scale-105"
            priority
          />
          {/* Extremely dark overlay for maximum text contrast */}
          <div className="absolute inset-0 bg-brand-charcoal/70" />
        </div>
        
        <div className="container-custom relative z-10 flex flex-col items-center text-center mt-16">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-white uppercase text-sm md:text-base font-bold mb-6 tracking-[0.3em]"
          >
            Architecture &bull; Interior &bull; Construction &bull; Management
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-[7rem] font-bold text-white font-heading tracking-tight mb-8 leading-[0.9]"
          >
            DESIGN.<br/>INSPIRE.<br/>BUILD.
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 mt-8"
          >
            <Button size="lg" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-brand-charcoal" asChild>
              <Link href="/projects">Explore Portfolio</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Ticker Section */}
      <div className="bg-brand-charcoal border-t border-white/10 py-5 overflow-hidden flex">
        <div className="whitespace-nowrap flex animate-scroll items-center">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center text-white/70 text-xs font-bold tracking-[0.3em] uppercase shrink-0">
              <span className="mx-8">Architecture</span>
              <span className="text-brand-accent">&bull;</span>
              <span className="mx-8">Interior Design</span>
              <span className="text-brand-accent">&bull;</span>
              <span className="mx-8">Construction</span>
              <span className="text-brand-accent">&bull;</span>
              <span className="mx-8">Project Management</span>
              <span className="text-brand-accent">&bull;</span>
              <span className="mx-8">Turnkey Solutions</span>
              <span className="text-brand-accent">&bull;</span>
            </div>
          ))}
        </div>
      </div>

      {/* About Snippet Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <SectionHeading 
                  title="Precision in every detail." 
                  subtitle="About SWEET HOME" 
                  className="mb-8"
                />
              </motion.div>
              <motion.p variants={fadeUp} className="text-brand-muted text-xl md:text-2xl mb-10 leading-relaxed font-light">
                SWEET HOME operates at the intersection of visionary design and flawless execution. Based in Kolkata, our integrated studio bridges the gap between architectural concept and structural reality.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Button variant="outline" size="lg" asChild className="group">
                  <Link href="/about" className="flex items-center gap-3">
                    Discover Our Process <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-[3/4] bg-brand-gray rounded-sm overflow-hidden group"
            >
              <Image
                src="/about-snippet.jpg"
                alt="SWEET HOME Design Studio"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="section-padding bg-brand-gray">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <SectionHeading 
              title="Integrated Solutions" 
              subtitle="Our Expertise" 
              className="mb-16 md:mb-24"
            />
          </motion.div>
          <div className="flex flex-col gap-20">
            {[
              {
                title: "Architectural Design",
                desc: "Strategic 2D/3D planning and elevation design with engineering precision.",
                icon: Building2,
                items: ["2D Working Drawing", "Structural & MEP Design", "Elevation Design", "3D Architectural Views", "Bungalow & Villa Plans", "G+4 Building & Apartment Plans", "Online Municipal Building Plan", "BOQ & Estimation", "Landscape Design", "Land Surveying"]
              },
              {
                title: "Interior Design",
                desc: "Functional space planning and premium modular fit-outs tailored to your lifestyle.",
                icon: Ruler,
                items: ["Space Planning", "3D Interior Design", "2D Furniture Layout", "Interior Fit-Out Works", "Modular Kitchen", "False Ceiling", "Electrical & Plumbing Coordination", "Site Quantity Inspection"]
              },
              {
                title: "Construction",
                desc: "End-to-end construction services ensuring uncompromising quality, safety, and timely delivery.",
                icon: HardHat,
                items: ["Site Supervision", "Quality Control", "Quantity Checking", "Material Inspection", "Excavation Work", "MEP Works", "Contractor Coordination", "Progress Monitoring"]
              },
              {
                title: "Project Management",
                desc: "Professional oversight of your entire project lifecycle, ensuring cost control and seamless execution.",
                icon: ClipboardList,
                items: ["Complete Project Management", "Project Scheduling", "Progress Reports", "Cost Control", "Final Project Handover"]
              },
            ].map((service, i) => (
              <motion.div 
                key={i} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
                className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start"
              >
                <div className="lg:w-1/3">
                  <motion.div variants={fadeUp} className="w-12 h-12 text-brand-charcoal mb-6 border-b-2 border-brand-charcoal pb-2">
                    <service.icon strokeWidth={1.5} size={32} />
                  </motion.div>
                  <motion.h3 variants={fadeUp} className="text-4xl font-heading font-semibold mb-4 text-brand-charcoal">{service.title}</motion.h3>
                  <motion.p variants={fadeUp} className="text-brand-muted leading-relaxed font-light mb-6 text-base">{service.desc}</motion.p>
                </div>
                <div className="lg:w-2/3 bg-white p-8 md:p-10 border border-brand-stone rounded-sm w-full">
                  <motion.h4 variants={fadeUp} className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-brand-muted border-b border-brand-stone pb-4">Detailed Offerings</motion.h4>
                  <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                    {service.items.map((item, j) => (
                      <motion.div variants={fadeUp} key={j} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2 shrink-0" />
                        <span className="text-brand-charcoal text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white border-t border-brand-stone">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-20 text-center flex flex-col items-center"
          >
            <SectionHeading 
              title="How We Work" 
              subtitle="Our Process" 
              align="center"
            />
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {[
              { num: "01", title: "Consultation & Brief", desc: "Understanding your vision, requirements, budget constraints, and timeline." },
              { num: "02", title: "Conceptual Design", desc: "Developing initial spatial layouts, mood boards, and basic 3D visualizations." },
              { num: "03", title: "Detailed Engineering", desc: "Creating precise structural, MEP, and working drawings with BOQ estimation." },
              { num: "04", title: "Approvals", desc: "Managing all municipal permissions and regulatory compliance." },
              { num: "05", title: "Execution", desc: "Rigorous on-site construction, material sourcing, and quality control." },
              { num: "06", title: "Handover", desc: "Final inspections, deep cleaning, and project handover to the client." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="relative pl-6 border-l border-brand-stone"
              >
                <div className="absolute -left-px top-0 w-0.5 h-8 bg-brand-accent" />
                <span className="text-brand-gray text-5xl font-heading font-bold absolute -top-8 -left-2 -z-10 opacity-50 select-none">{step.num}</span>
                <h3 className="text-xl font-heading font-semibold text-brand-charcoal mb-3">{step.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-brand-charcoal text-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16 md:mb-20 text-center flex flex-col items-center"
          >
            <SectionHeading 
              title="Why Choose Us" 
              subtitle="The SWEET HOME Advantage" 
              align="center"
            />
            <div className="w-16 h-1 bg-brand-accent mt-6" />
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 text-center">
            {[
              "Integrated Expertise",
              "Design Precision",
              "Quality Execution",
              "Cost & Time Control",
              "Professional Supervision",
              "Complete Project Management"
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="flex flex-col items-center gap-6"
              >
                <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center text-brand-accent group hover:bg-white/5 transition-colors">
                  <span className="font-heading font-light text-2xl">0{i+1}</span>
                </div>
                <h3 className="text-lg font-heading font-medium tracking-wide uppercase text-white/90">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
