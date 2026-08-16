"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Phone,
  Compass,
  MoveDown,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import {
  services,
  projects,
  featuredProjects,
  processSteps,
  whyChooseUs,
  stats,
  contactInfo,
} from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const motionProps = (delay = 0) => ({
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: { once: true, margin: "-80px" as const },
  variants: fadeUp,
  transition: delay ? ({ delay, duration: 0.7, ease: EASE } as const) : undefined,
});

const homeFeatured = featuredProjects;

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-ivory">
      {/* ================= HERO ================= */}
      <section id="home-hero" className="relative flex min-h-svh items-end overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-main.jpg"
            alt="Premium architectural residence designed and built by SWEET HOME"
            fill
            priority
            sizes="100vw"
            className="animate-slow-zoom object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/85 via-brand-navy/55 to-brand-charcoal/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-transparent to-brand-charcoal/20" />
        </div>

        <div className="container-custom relative z-10 pb-12 pt-36 md:pb-16 md:pt-40">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="inline-flex flex-wrap items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-brand-accent-light sm:text-[0.7rem] sm:tracking-[0.32em]">
                <span className="hidden h-px w-10 bg-brand-accent-light sm:block" />
                Architecture &middot; Interior &middot; Construction
                <span className="hidden md:inline">&middot; Project Management</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-white"
              style={{ fontSize: "clamp(2.5rem, 7.5vw, 5.5rem)" }}
            >
              <span className="block font-semibold leading-[0.92] tracking-tight">
                DESIGN.
                <span className="block">
                  INSPIRE.
                  <span className="block">
                    BUILD<span className="align-baseline font-serif italic font-normal text-brand-accent-light">.</span>
                  </span>
                </span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-8 max-w-xl"
            >
              <p className="text-base font-light leading-relaxed text-white/80 md:text-lg">
                An integrated architecture &amp; construction studio in Kolkata —
                designing with precision, building with integrity, and delivering spaces
                that endure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button
                asChild
                size="lg"
                variant="ivory"
                className="shadow-[0_22px_50px_rgba(0,0,0,0.42)] ring-1 ring-inset ring-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,0,0,0.6)] active:translate-y-0"
              >
                <Link href="/contact">
                  Start Your Project
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-accent text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-brand-accent-deep">
                    <ArrowUpRight size={13} />
                  </span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline-light"
                className="border-white/50 bg-white/[0.06] backdrop-blur-[6px] transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent-light hover:bg-brand-accent hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)] active:translate-y-0"
              >
                <Link href="/projects">
                  Explore Projects
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/40 transition-all duration-300 group-hover:border-white/70 group-hover:bg-white/25 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight size={13} />
                  </span>
                </Link>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease: "easeOut" }}
              className="mt-6 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/55"
            >
              <span className="h-px w-8 bg-brand-accent-light" />
              Free consultation &middot; No obligation
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10 grid max-w-3xl grid-cols-2 gap-px sm:grid-cols-4 md:mt-12"
          >
            {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`border-t border-white/15 py-5 ${i !== 0 ? "border-l border-white/15 pl-5" : ""} sm:py-6 sm:pl-5`}
                >
                  <div className="font-heading text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/60">
                    {s.label}
                  </div>
                </div>
              ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex"
          aria-hidden="true"
        >
          <span className="text-[0.6rem] font-bold uppercase tracking-[0.32em] text-white/50 [writing-mode:vertical-rl]">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          >
            <MoveDown size={16} className="text-brand-accent-light" />
          </motion.span>
        </motion.div>
      </section>

      {/* ================= SERVICES TICKER ================= */}
      <div
        className="group relative overflow-hidden border-y border-white/10 bg-gradient-to-r from-brand-charcoal via-brand-charcoal-soft to-brand-charcoal py-4"
        aria-hidden="true"
      >
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_150%_at_50%_0%,rgba(215,188,141,0.09),transparent)]" />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-charcoal to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-charcoal to-transparent md:w-32" />
        <div className="animate-marquee will-change-transform motion-reduce:animate-none group-hover:[animation-play-state:paused] flex w-max select-none items-center whitespace-nowrap">
          {[0, 1].map((rep) => (
            <div key={rep} className="flex items-center">
              {["Architecture", "Interior Design", "Construction", "Project Management", "Turnkey Solutions", "Design • Inspire • Build"].map((term) => (
                <span key={`${rep}-${term}`} className="flex items-center">
                  {term === "Design • Inspire • Build" ? (
                    <span className="mx-8 font-serif text-sm italic tracking-[0.14em] text-brand-accent-light md:text-base">
                      Design &#183; Inspire &#183; Build
                    </span>
                  ) : (
                    <span className="mx-8 text-[0.7rem] font-bold uppercase tracking-[0.34em] text-white/75 md:text-[0.72rem]">
                      {term}
                    </span>
                  )}
                  <span className="relative inline-flex h-[7px] w-[7px] shrink-0 items-center justify-center">
                    <span className="inline-block h-[7px] w-[7px] rotate-45 border border-brand-accent-light/60" />
                    <span className="absolute inline-block h-[2px] w-[2px] rotate-45 bg-brand-accent-light" />
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ================= ABOUT ================= */}
      <section className="section-padding relative overflow-hidden bg-brand-ivory">
        <div className="container-custom">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
              <motion.div variants={fadeUp}>
                <SectionHeading
                  eyebrow="About SWEET HOME"
                  title={
                    <>
                      Precision in every{" "}
                      <em className="font-serif italic font-normal text-brand-accent-deep">detail.</em>
                    </>
                  }
                />
              </motion.div>
              <motion.div variants={fadeUp} className="mt-8 max-w-xl space-y-6">
                <p className="text-lg font-light leading-relaxed text-brand-muted md:text-xl">
                  SWEET HOME operates at the intersection of visionary design and flawless
                  execution. Based in Kolkata, our integrated studio bridges the gap between
                  architectural concept and structural reality.
                </p>
                <p className="font-light leading-relaxed text-brand-muted">
                  From first sketch to final handover, one accountable team of architects,
                  interior designers and engineers delivers your project with trust, precision
                  and creativity.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-6">
                <Button asChild size="lg" variant="outline" className="group">
                  <Link href="/about" className="flex items-center gap-2.5">
                    Discover Our Process
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <a
                  href={`tel:${contactInfo.tel1}`}
                  className="flex items-center gap-3 text-brand-charcoal transition-colors hover:text-brand-accent-deep"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-stone bg-white">
                    <Phone size={16} className="text-brand-accent" />
                  </span>
                  <span className="text-sm font-semibold tracking-widest">{contactInfo.phone1}</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Imagery */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-gray">
                <Image
                  src="/images/about/main.jpg"
                  alt="A signature SWEET HOME residence at dusk"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.5s] ease-out hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-brand-charcoal/10" />
              </div>
              <div className="absolute -bottom-8 -left-8 hidden w-[42%] overflow-hidden border-4 border-brand-ivory shadow-xl sm:block">
                <div className="aspect-[4/3] w-full relative">
                  <Image
                    src="/images/about/detail.jpg"
                    alt="Architectural detail — elevated entrance"
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-8 right-0 hidden border border-brand-stone bg-white p-5 shadow-[0_22px_60px_rgba(27,25,22,0.10)] md:block">
                <div className="text-[0.6rem] font-bold uppercase tracking-[0.28em] text-brand-muted">
                  Est. Kolkata
                </div>
                <div className="mt-1 font-heading text-3xl font-semibold tracking-tight text-brand-charcoal">
                  SWEET HOME
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="section-padding scroll-mt-24 bg-brand-gray">
        <div className="container-custom">
          <div className="grid items-end gap-10 lg:grid-cols-2">
            <motion.div {...motionProps(0)}>
              <SectionHeading
                eyebrow="Our Expertise"
                title={
                  <>
                    Integrated services, one{" "}
                    <em className="font-serif italic font-normal text-brand-accent-deep">accountable</em> partner.
                  </>
                }
              />
            </motion.div>
            <motion.p {...motionProps(0.1)} className="max-w-xl text-base font-light leading-relaxed text-brand-muted lg:justify-self-end">
              We own every discipline — design, engineering, construction and management — so
              nothing is lost between consultant and contractor.
            </motion.p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4 md:gap-7"
          >
            {services.map((service, i) => (
              <motion.article
                key={service.title}
                variants={fadeUp}
                className="group relative flex flex-col border border-brand-stone bg-white p-5 transition-all duration-500 hover:-translate-y-2 hover:border-brand-accent/40 hover:shadow-[0_30px_70px_rgba(27,25,22,0.12)] hover:ring-1 hover:ring-inset hover:ring-brand-accent/20"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                  <Image
                    src={service.image}
                    alt={`${service.title} service — ${service.tagline}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover grayscale-[0.45] transition-all duration-[1.1s] ease-out group-hover:scale-[1.07] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/65 via-brand-charcoal/10 to-transparent" />
                  <span className="absolute right-3 top-3 rounded-full bg-brand-charcoal/40 px-2.5 py-1 font-serif text-xs italic text-brand-accent-light backdrop-blur-sm">
                    0{i + 1}
                  </span>
                  <span className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent text-white shadow-[0_-6px_24px_rgba(28,21,12,0.35)] transition-all duration-300 group-hover:bg-brand-accent-deep">
                    <service.icon size={20} strokeWidth={1.6} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-3 pt-6">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-brand-stone bg-brand-beige px-3 py-1 text-[0.56rem] font-bold uppercase tracking-[0.22em] text-brand-accent-deep transition-colors duration-300 group-hover:border-brand-accent/40 group-hover:bg-brand-accent/10">
                    <span className="inline-block h-[4px] w-[4px] rotate-45 bg-brand-accent" />
                    {service.tagline}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold tracking-tight text-brand-charcoal md:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[0.84rem] font-light leading-relaxed text-brand-muted">
                    {service.description}
                  </p>

                  <ul className="mt-5 grid flex-1 grid-cols-1 content-start gap-y-2.5 border-t border-brand-stone pt-5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[0.8rem] text-brand-charcoal/85 transition-colors duration-300 hover:text-brand-accent-deep">
                        <span className="mt-[5px] inline-block h-[6px] w-[6px] shrink-0 rotate-45 bg-brand-accent/80" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="mt-6 flex items-center justify-between gap-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-brand-charcoal transition-colors duration-300 hover:text-brand-accent-deep"
                  >
                    <span>Explore Service</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-stone bg-brand-ivory transition-all duration-300 group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-white">
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="section-padding overflow-hidden bg-brand-ivory">
        <div className="container-custom">
          <div className="grid items-end gap-8 lg:grid-cols-2">
            <motion.div {...motionProps(0)}>
              <SectionHeading
                eyebrow="Selected Works"
                title={
                  <>
                    Work that speaks for{" "}
                    <em className="font-serif italic font-normal text-brand-accent-deep">itself.</em>
                  </>
                }
              />
            </motion.div>
            <motion.div {...motionProps(0.1)} className="lg:justify-self-end">
              <Button asChild variant="outline" className="group">
                <Link href="/projects" className="flex items-center gap-2.5">
                  View All Projects
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile: swipeable gallery */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="relative mt-12"
        >
          <div className="flex snap-x snap-proximity gap-5 overflow-x-auto pb-4 pl-6 pr-8 md:hidden">
            {homeFeatured.map((project) => (
              <motion.div key={project.id} variants={fadeUp} className="w-[76vw] shrink-0 snap-start">
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-10 bg-gradient-to-l from-brand-ivory to-transparent md:hidden" aria-hidden="true" />
        </motion.div>

        {/* Desktop: editorial masonry */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 hidden gap-8 md:columns-2 xl:columns-3 md:space-y-8"
        >
          {homeFeatured.map((project) => (
            <motion.div key={project.id} variants={fadeUp} className="mb-8 break-inside-avoid">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= PROCESS ================= */}
      <section id="process" className="section-padding scroll-mt-24 border-y border-brand-stone bg-brand-ivory">
        <div className="container-custom">
          <motion.div {...motionProps(0)} className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <SectionHeading
              eyebrow="How We Work"
              align="center"
              title={
                <>
                  A disciplined path from{" "}
                  <em className="font-serif italic font-normal text-brand-accent-deep">concept</em> to key handover.
                </>
              }
            />
          </motion.div>

          {/* Desktop timeline */}
          <div className="relative mt-24 hidden lg:block">
            <div className="absolute inset-x-0 top-4 h-px bg-brand-stone" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.3, delay: 0.15, ease: EASE }}
              className="absolute inset-x-0 top-4 h-px origin-left bg-gradient-to-r from-brand-accent/0 via-brand-accent to-brand-accent/0"
            />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-6 gap-6"
            >
              {processSteps.map((step) => (
                <motion.div key={step.num} variants={fadeUp} className="group relative pt-8">
                  <span className="absolute left-0 top-0 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg border-2 border-brand-accent bg-brand-ivory font-serif text-[0.72rem] italic text-brand-accent-deep transition-colors duration-300 group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-white">
                    {step.num}
                  </span>
                  <h3 className="mt-6 font-heading text-lg font-semibold tracking-tight text-brand-charcoal transition-colors duration-300 group-hover:text-brand-accent-deep">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm font-light leading-relaxed text-brand-muted">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile / tablet: vertical timeline */}
          <div className="mt-16 lg:hidden">
            <div className="relative border-l border-brand-stone pl-12 md:pl-13">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  {...motionProps(i * 0.05)}
                  className="relative pb-11 last:pb-0"
                >
                  <span className="absolute left-0 top-0 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-lg border-2 border-brand-accent bg-brand-ivory font-serif text-xs italic text-brand-accent-deep">
                    {step.num}
                  </span>
                  <h3 className="font-heading text-xl font-semibold tracking-tight text-brand-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-brand-muted">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            {...motionProps(0.1)}
            className="mx-auto mt-16 flex max-w-2xl items-center justify-center gap-4 text-center"
          >
            <span className="hidden h-px w-12 bg-brand-accent/40 sm:block" />
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-muted">
              The same disciplined sequence on every project — never left to chance
            </p>
            <span className="hidden h-px w-12 bg-brand-accent/40 sm:block" />
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section-padding relative overflow-hidden bg-brand-charcoal text-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-72 max-w-3xl bg-[radial-gradient(closest-side,rgba(215,188,141,0.10),transparent)]" aria-hidden="true" />
        <div className="container-custom relative">
          <motion.div {...motionProps(0)} className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <SectionHeading
              eyebrow="Why Choose Us"
              align="center"
              light
              title={
                <>
                  The SWEET HOME{" "}
                  <em className="font-serif italic font-normal text-brand-accent-light">advantage.</em>
                </>
              }
            />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {whyChooseUs.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="group relative flex flex-col gap-5 border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-accent/60 hover:bg-white/[0.06] hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-brand-accent-light to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-center justify-between">
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 transition-all duration-300 group-hover:border-brand-accent group-hover:bg-brand-accent">
                    <feature.icon size={22} strokeWidth={1.5} className="text-brand-accent-light transition-colors duration-300 group-hover:text-white" />
                  </span>
                  <span className="font-serif text-lg italic text-white/25 transition-colors duration-300 group-hover:text-brand-accent-light">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-sm font-light leading-relaxed text-brand-gray/60">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta/cta-main.jpg"
            alt="A warm, modern residence at twilight"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-transparent to-brand-charcoal/40" />
        </div>

        <div className="container-custom relative z-10 py-28 text-center md:py-36">
          <motion.div {...motionProps(0)} className="mx-auto flex max-w-3xl flex-col items-center">
            <span className="eyebrow-light mb-6 justify-center">Begin Today</span>
            <h2
              className="text-balance font-semibold leading-[1.05] tracking-tight text-white"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.25rem)" }}
            >
              Have a project in mind?
            </h2>
            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/75 md:text-lg">
              Let&apos;s transform your idea into a thoughtfully designed and professionally
              executed space.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="gold">
                <Link href="/contact">
                  Get a Quote
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline-light">
                <Link href={contactInfo.whatsappLink} target="_blank" rel="noopener noreferrer">
                  WhatsApp Us <Compass size={16} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Location badge */}
        <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-white/50 md:flex">
          <MapPin size={13} className="text-brand-accent-light" />
          Kolkata, West Bengal
        </div>
      </section>
    </div>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <Link
      href="/projects"
      className="group block"
      aria-label={`${project.title} — ${project.category}, ${project.location}`}
    >
      <div className={`relative w-full overflow-hidden bg-brand-gray ${project.aspect}`}>
        <Image
          src={project.image}
          alt={`${project.title} — ${project.category.toLowerCase()} project in ${project.location}`}
          fill
          sizes="(max-width: 767px) 76vw, (max-width: 1279px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/85 via-brand-charcoal/15 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
        <span className="absolute left-4 top-4 border border-white/20 bg-white/10 px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
          {project.category}
        </span>
        <span className="absolute right-4 top-4 font-serif text-lg italic text-white/70">
          {project.id}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="translate-y-1 transition-transform duration-500 group-hover:translate-y-0">
            <h3 className="font-heading text-xl font-semibold tracking-tight text-white md:text-[1.35rem]">
              {project.title}
            </h3>
            <div className="mt-2 flex items-center justify-between gap-3">
              <p className="flex items-center gap-1.5 text-xs font-light tracking-wide text-white/75">
                <MapPin size={12} className="text-brand-accent-light" />
                {project.location}
              </p>
              <span className="flex h-8 w-8 items-center justify-center border border-white/30 text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
                <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}