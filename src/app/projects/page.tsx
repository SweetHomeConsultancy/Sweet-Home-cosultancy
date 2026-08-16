"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight, MapPin, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { projects, projectCategories, contactInfo } from "@/lib/data";

const categories = projectCategories as readonly string[];

const countStats = [
  { value: `${projects.length}`, label: "Curated works" },
  { value: `${projectCategories.length - 1}`, label: "Specialities" },
  { value: "1", label: "Integrated studio" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-brand-ivory">
      {/* Header */}
      <section className="relative overflow-hidden bg-brand-charcoal pb-16 pt-24 text-white md:pb-24 md:pt-40">
        <div className="container-custom relative">
          <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <SectionHeading
                eyebrow="Our Portfolio"
                align="left"
                light
                as="h1"
                title={
                  <>
                    Selected works, built to{" "}
                    <em className="font-serif italic font-normal text-brand-accent-light">endure.</em>
                  </>
                }
              />
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="lg:justify-self-end"
            >
              <p className="max-w-xl text-base font-light leading-relaxed text-white/70 md:text-lg">
                A curated selection of bungalows, villas, apartments, commercial and
                institutional projects — each a study in precision, materiality and craft.
              </p>
              <dl className="mt-10 grid grid-cols-3 divide-x divide-white/10 border-y border-white/10">
                {countStats.map((stat) => (
                  <div key={stat.label} className="px-4 py-5 first:pl-0 md:px-6">
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-serif text-3xl italic leading-none text-brand-accent-light md:text-4xl">
                      {stat.value}
                    </dd>
                    <dd className="mt-2.5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/45">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-brand-ivory py-8 md:py-14">
        <div className="container-custom">
          {/* Filters */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-12 flex flex-wrap items-start justify-center gap-3 md:mb-16"
          >
            {categories.map((category) => {
              const active = activeCategory === category;
              const count =
                category === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={active}
                  className={cn(
                    "group inline-flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-[0.62rem] font-bold uppercase tracking-[0.18em] transition-all duration-300",
                    active
                      ? "border-brand-charcoal bg-brand-charcoal text-white shadow-[0_14px_30px_rgba(27,25,22,0.25)]"
                      : "border-brand-stone bg-white text-brand-muted hover:-translate-y-0.5 hover:border-brand-charcoal hover:text-brand-charcoal hover:shadow-[0_10px_24px_rgba(27,25,22,0.08)]"
                  )}
                >
                  {category}
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[0.55rem] font-bold leading-none transition-colors duration-300",
                      active
                        ? "bg-brand-accent text-white"
                        : "bg-brand-gray text-brand-muted group-hover:bg-brand-accent-light/20"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Result count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-brand-muted"
          >
            <span className="h-px w-8 bg-brand-accent" />
            Showing {filteredProjects.length} of {projects.length} works
          </motion.p>

          {/* Grid */}
          <motion.div layout className="columns-1 gap-8 md:columns-2 lg:columns-3 lg:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-9 break-inside-avoid"
                >
                  <Link
                    href="/contact"
                    className="group block"
                    aria-label={`Enquire about ${project.title}`}
                  >
                    <div className={cn("relative w-full overflow-hidden bg-brand-gray", project.aspect)}>
                      <Image
                        src={project.image}
                        alt={`${project.title} — ${project.category.toLowerCase()} project in ${project.location}`}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                      <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                        {project.category}
                      </span>
                      <span className="absolute right-4 top-4 font-serif text-xl italic leading-none text-white/70">
                        {project.id}
                      </span>

                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                        <div className="translate-y-1 transition-transform duration-500 group-hover:translate-y-0">
                          <h2 className="font-heading text-xl font-semibold tracking-tight text-white md:text-[1.4rem]">
                            {project.title}
                          </h2>
                          <p className="mt-2 flex items-center gap-1.5 text-xs font-light tracking-wide text-white/75">
                            <MapPin size={12} className="text-brand-accent-light" />
                            {project.location}
                          </p>
                        </div>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all duration-500 group-hover:border-brand-accent group-hover:bg-brand-accent">
                          <ArrowUpRight size={16} />
                        </span>
                      </div>
                    </div>

                    {/* Editorial footer under the card */}
                    <div className="flex items-center justify-between border-b border-brand-stone pt-4 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-brand-muted transition-colors duration-300 group-hover:text-brand-accent-deep">
                      <span>View project</span>
                      <span>Enquire &rarr;</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center font-light text-brand-muted">
              No projects found in this category.
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 border-t border-brand-stone pt-10 text-center md:mt-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h3
                className="mx-auto max-w-2xl text-balance font-semibold leading-tight tracking-tight text-brand-charcoal"
                style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.6rem)" }}
              >
                Your project could be our next{" "}
                <em className="font-serif italic font-normal text-brand-accent-deep">signature.</em>
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-base font-light leading-relaxed text-brand-muted">
                Share your brief and we&apos;ll prepare a considered consultation for your
                plot, home or commercial space.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start Your Project <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
                >
                  <Link href={contactInfo.whatsappLink} target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}