"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Residential", "Commercial", "Interior", "Institutional", "Landscape"];

const portfolioProjects = [
  {
    id: "1",
    title: "Luxury Villa Design",
    category: "Residential",
    image: "/hero-bg.jpg",
    location: "New Town, Kolkata",
  },
  {
    id: "2",
    title: "Corporate Office HQ",
    category: "Commercial",
    image: "/about-snippet.jpg",
    location: "Sector V, Salt Lake",
  },
  {
    id: "3",
    title: "Modern Apartment Interior",
    category: "Interior",
    image: "/about-snippet.jpg",
    location: "South Kolkata",
  },
  {
    id: "4",
    title: "Institutional Campus",
    category: "Institutional",
    image: "/hero-bg.jpg",
    location: "Rajarhat",
  },
  {
    id: "5",
    title: "Boutique Showroom",
    category: "Commercial",
    image: "/about-snippet.jpg",
    location: "Park Street",
  },
  {
    id: "6",
    title: "Urban Landscape Garden",
    category: "Landscape",
    image: "/hero-bg.jpg",
    location: "Bypass",
  },
];

const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen pt-[100px] bg-white">
      {/* Header */}
      <section className="bg-brand-gray py-24 relative border-b border-brand-stone">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="container-custom">
          <SectionHeading
            title="Selected Works"
            subtitle="Our Portfolio"
            align="center"
          />
          <p className="text-center text-brand-muted max-w-2xl mx-auto mt-6 text-xl font-light">
            A curated selection of our finest architectural and interior projects, demonstrating our commitment to precision, design, and execution.
          </p>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-white min-h-[600px]">
        <div className="container-custom">
          
          {/* Filters */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 border",
                  activeCategory === category
                    ? "bg-brand-charcoal text-white border-brand-charcoal"
                    : "bg-transparent text-brand-charcoal border-brand-stone hover:border-brand-charcoal"
                )}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div 
            layout
            className="columns-1 md:columns-2 gap-8 lg:gap-12 space-y-8 lg:space-y-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="group block break-inside-avoid"
                >
                  <div className={cn(
                    "relative overflow-hidden rounded-sm bg-brand-gray mb-6",
                    parseInt(project.id) % 2 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"
                  )}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-charcoal/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-brand-muted text-xs font-bold uppercase tracking-widest">
                        {project.category}
                      </span>
                      <span className="text-brand-muted text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">
                        View <ArrowRight size={14} />
                      </span>
                    </div>
                    <h3 className="text-brand-charcoal text-3xl font-heading font-semibold mb-1 group-hover:text-brand-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-brand-muted font-light text-base">
                      {project.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
             <div className="text-center text-brand-muted py-20 font-light">
               No projects found in this category.
             </div>
          )}

        </div>
      </section>
    </div>
  );
}
