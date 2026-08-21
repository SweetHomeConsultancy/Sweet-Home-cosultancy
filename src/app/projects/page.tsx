"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  MapPin,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Images,
} from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { projects, projectCategories, contactInfo, type Project } from "@/lib/data";

const categories = projectCategories as readonly string[];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const gridRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const openLightbox = useCallback((project: Project) => {
    setActiveProject(project);
    setActiveIndex(0);
  }, []);

  const closeLightbox = useCallback(() => setActiveProject(null), []);

  const step = useCallback(
    (dir: 1 | -1) => {
      setActiveIndex((i) => {
        if (!activeProject) return i;
        const len = activeProject.images.length;
        return (i + dir + len) % len;
      });
    },
    [activeProject]
  );

  const changeCategory = useCallback((category: string) => {
    setActiveCategory(category);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    if (!activeProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeProject, closeLightbox, step]);

  useEffect(() => {
    thumbRefs.current[activeIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIndex]);

  return (
    <div className="flex flex-col min-h-screen bg-brand-ivory">
      {/* Header */}
      <section className="relative overflow-hidden bg-brand-charcoal pb-10 pt-20 text-white md:pb-14 md:pt-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-56 max-w-3xl bg-[radial-gradient(closest-side,rgba(215,188,141,0.10),transparent)]" aria-hidden="true" />
        <div className="container-custom relative">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
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
            <p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-white/70 md:text-lg">
              A curated selection of apartments, houses, villas, interiors, commercial
              and institutional projects from India and the Gulf — each a study in
              precision, materiality and craft.
            </p>
          </motion.div>
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
            className="mb-10 flex flex-wrap items-center justify-center gap-3 md:mb-14"
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
                  onClick={() => changeCategory(category)}
                  aria-pressed={active}
                  className={cn(
                    "group inline-flex cursor-pointer items-center gap-2.5 rounded-full border px-5 py-2.5 text-[0.62rem] font-bold uppercase tracking-[0.18em] transition-all duration-300",
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
            Showing {filteredProjects.length} of {projects.length} works — click a card to view its gallery
          </motion.p>

          {/* Grid */}
          <motion.div
            layout
            ref={gridRef}
            className="grid scroll-mt-28 grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    type="button"
                    onClick={() => openLightbox(project)}
                    className="group block w-full cursor-pointer text-left"
                    aria-label={`View gallery of ${project.title}`}
                  >
                    <div
                      className={cn(
                        "relative w-full overflow-hidden rounded-xl bg-brand-gray ring-1 ring-brand-stone/60 shadow-sm transition-all duration-500 group-hover:shadow-lg group-hover:ring-[#BE9026]/70",
                        project.aspect
                      )}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} — ${project.category.toLowerCase()} project in ${project.location}`}
                        fill
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.07]"
                        priority={idx === 0}
                        loading={idx < 6 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/95 via-brand-charcoal/20 to-brand-charcoal/10 opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

                      {/* Category Badge */}
                      <span className="absolute left-3.5 top-3.5 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white shadow-xs backdrop-blur-md">
                        {project.category}
                      </span>

                      {/* Photos Count Badge */}
                      <span className="absolute right-3.5 top-3.5 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[0.62rem] font-bold text-white shadow-xs backdrop-blur-md">
                        <Images size={12} className="text-brand-accent-light" />
                        {project.images.length} {project.images.length === 1 ? "Photo" : "Photos"}
                      </span>

                      {/* Bottom Info inside Image */}
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                        <div className="translate-y-0.5 transition-transform duration-500 group-hover:translate-y-0">
                          <p className="flex items-center gap-1.5 text-xs sm:text-sm font-medium tracking-wide text-white/95 drop-shadow-sm">
                            <MapPin size={14} className="text-[#D7BC8D] shrink-0" />
                            {project.location}
                          </p>
                        </div>
                        <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:border-[#BE9026] group-hover:bg-[#BE9026] group-hover:shadow-md">
                          <ArrowUpRight size={16} />
                        </span>
                      </div>

                      <span className="absolute inset-x-0 bottom-0 h-[2.5px] origin-left scale-x-0 bg-gradient-to-r from-brand-accent via-brand-accent-light to-brand-accent transition-transform duration-500 group-hover:scale-x-100" />
                    </div>

                    {/* Clean, High-Contrast, Responsive Action Bar */}
                    <div className="mt-3 flex items-center justify-between rounded-lg border border-brand-stone/90 bg-[#FAF9F5] px-4 py-2.5 shadow-2xs transition-all duration-300 group-hover:border-[#BE9026]/60 group-hover:bg-white group-hover:shadow-md">
                      <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-charcoal">
                        <span className="h-2 w-2 rounded-full bg-[#BE9026]" />
                        View Gallery
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#8C6D23] transition-all duration-300 group-hover:text-[#BE9026] group-hover:translate-x-1">
                        Explore <ArrowRight size={13} className="text-[#BE9026]" />
                      </span>
                    </div>
                  </button>
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

      {/* Lightbox gallery */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeProject.title} — project gallery`}
            className="fixed inset-0 z-[60] bg-brand-charcoal/95 backdrop-blur-md"
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.6))]"
              aria-hidden="true"
            />

            {/* Top bar */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-4 p-4 md:p-6"
            >
              <div className="min-w-0">
                <span className="block text-[0.58rem] font-bold uppercase tracking-[0.22em] text-brand-accent-light">
                  {activeProject.category}
                </span>
                <h2 className="mt-1 truncate font-heading text-lg font-semibold tracking-tight text-white md:text-xl">
                  {activeProject.title}
                </h2>
                <p className="mt-1 flex items-center gap-2 text-xs font-light text-white/60">
                  <MapPin size={12} className="text-brand-accent-light" />
                  {activeProject.location}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <span className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/80 sm:flex">
                  <Images size={13} className="text-brand-accent-light" />
                  {activeIndex + 1} / {activeProject.images.length}
                </span>
                <button
                  onClick={closeLightbox}
                  aria-label="Close gallery"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Main stage */}
            <div
              className={cn(
                "relative flex h-full w-full items-center justify-center p-4 pt-32 md:p-10 md:pt-24",
                activeProject.images.length > 1 ? "pb-40 md:pb-40" : "pb-8 md:pb-10"
              )}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative h-full w-full max-w-6xl"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.985 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.985 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={activeProject.images[activeIndex]}
                      alt={`${activeProject.title} — view ${activeIndex + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {activeProject.images.length > 1 && (
                  <>
                    <Image
                      src={activeProject.images[(activeIndex + 1) % activeProject.images.length]}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="hidden"
                      loading="eager"
                      aria-hidden="true"
                    />
                    <Image
                      src={activeProject.images[(activeIndex - 1 + activeProject.images.length) % activeProject.images.length]}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="hidden"
                      loading="eager"
                      aria-hidden="true"
                    />

                    <button
                      onClick={() => step(-1)}
                      aria-label="Previous image"
                      className="absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent md:-left-6 md:h-14 md:w-14"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      onClick={() => step(1)}
                      aria-label="Next image"
                      className="absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent md:-right-6 md:h-14 md:w-14"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Bottom: thumbnails */}
            {activeProject.images.length > 1 && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center gap-2.5 p-4 md:p-6"
              >
                <div className="max-w-full overflow-x-auto pb-1">
                  <div className="mx-auto flex w-max gap-2.5">
                    {activeProject.images.map((img, i) => (
                      <button
                        key={img}
                        ref={(el) => {
                          thumbRefs.current[i] = el;
                        }}
                        onClick={() => setActiveIndex(i)}
                        aria-label={`View image ${i + 1}`}
                        aria-current={i === activeIndex}
                        className={cn(
                          "relative h-16 w-24 shrink-0 cursor-pointer overflow-hidden rounded-lg border-2 transition-all duration-300 md:h-[4.5rem] md:w-[6.5rem]",
                          i === activeIndex
                            ? "border-brand-accent shadow-[0_0_0_4px_rgba(215,188,141,0.25)]"
                            : "border-white/10 opacity-60 hover:opacity-100"
                        )}
                      >
                        <Image src={img} alt="" fill sizes="104px" className="object-cover" loading="lazy" />
                      </button>
                    ))}
                  </div>
                </div>
                <p className="hidden items-center gap-3 text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-white/35 sm:flex">
                  <span className="h-px w-6 bg-white/20" />
                  Use ← → keys to navigate · Esc to close
                  <span className="h-px w-6 bg-white/20" />
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}