"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger: any = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const whyChooseUs = [
  {
    title: "Integrated Expertise",
    description: "Architecture, interior design, and construction consolidated under one professional roof.",
  },
  {
    title: "Creative Design",
    description: "Highly functional designs tailored to precise lifestyle and commercial requirements.",
  },
  {
    title: "Engineering Precision",
    description: "Rigorous structural and MEP design ensuring absolute safety and compliance.",
  },
  {
    title: "Quality Execution",
    description: "Premium material selection and strict on-site quality control measures.",
  },
  {
    title: "Cost & Time Control",
    description: "Transparent BOQ estimation and rigorous scheduling to prevent overruns.",
  },
  {
    title: "End-to-End Management",
    description: "Comprehensive oversight from initial consultation to final structural handover.",
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-[100px] bg-white">
      {/* Header */}
      <section className="bg-brand-gray py-24 relative overflow-hidden border-b border-brand-stone">
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="container-custom relative z-10"
        >
          <SectionHeading
            title="Our Story"
            subtitle="About SWEET HOME"
            align="center"
          />
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-square md:aspect-video lg:aspect-[4/5] bg-brand-gray rounded-sm overflow-hidden"
            >
              <Image
                src="/about-snippet.jpg"
                alt="SWEET HOME Design Team"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-heading font-bold text-brand-charcoal mb-8 leading-[1.1]">
                Designing spaces, inspiring lives, building futures.
              </motion.h2>
              <div className="space-y-6 text-brand-muted text-lg leading-relaxed font-light">
                <motion.p variants={fadeUp}>
                  Founded in Kolkata, <strong className="text-brand-charcoal font-medium">SWEET HOME</strong> was established with a singular vision: to bridge the gap between visionary architectural design and flawless construction execution.
                </motion.p>
                <motion.p variants={fadeUp}>
                  We understand that building a home or a commercial space is a monumental investment. That's why we operate as an integrated studio, offering comprehensive services ranging from initial space planning and 3D visualization to structural engineering and final site execution.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Our team consists of passionate architects, creative interior designers, and experienced civil engineers. By eliminating the disconnect between design consultants and on-site contractors, we ensure that the final built form perfectly mirrors the approved design.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-brand-charcoal text-white">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <SectionHeading
              title="Why Choose Us"
              subtitle="The SWEET HOME Advantage"
              light
              align="center"
              className="mb-20"
            />
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} variants={fadeUp} className="border-t border-white/20 pt-8">
                <div className="flex items-center gap-4 mb-4">
                  <CheckCircle2 size={20} className="text-brand-accent shrink-0" />
                  <h3 className="text-xl font-heading font-semibold text-white tracking-wide">{item.title}</h3>
                </div>
                <p className="text-brand-gray/60 leading-relaxed font-light pl-9">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
