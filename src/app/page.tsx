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

const homeRow1 = projects.filter((p) =>
  ["P01", "P02", "P04", "P06", "P10", "P17", "P20", "P28"].includes(p.id)
);

const homeRow2 = projects.filter((p) =>
  ["P03", "P05", "P13", "P16", "P21", "P25", "P30", "P33"].includes(p.id)
);

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

        <div className="container-custom relative z-10 pb-10 pt-24 md:pb-16 md:pt-40">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="inline-flex flex-wrap items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-brand-accent-light sm:text-[0.7rem] sm:tracking-[0.32em]">
                <span className="hidden h-px w-10 bg-brand-accent-light sm:block" />
                Architecture &middot; Interior Design &middot; Construction
                <span className="hidden md:inline">&middot; Project Management &middot; Real Estate Consultancy</span>
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
              className="mt-7 max-w-xl"
            >
              <p className="text-base font-light leading-relaxed text-white/80 md:text-lg">
                An integrated architecture, interior design, construction and real estate
                consultancy in Kolkata — transforming ideas into functional, aesthetically
                pleasing and value-driven spaces.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
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
        className="group relative overflow-hidden border-y border-brand-accent/30 bg-brand-charcoal py-5"
        aria-hidden="true"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal-soft to-brand-charcoal" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-accent to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-accent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_160%_at_50%_-20%,rgba(215,188,141,0.14),transparent)] opacity-80" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_8%,rgba(173,138,84,0.06)_50%,transparent_92%)]" />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-brand-charcoal to-transparent md:w-36" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-brand-charcoal to-transparent md:w-36" />
        <div className="animate-marquee will-change-transform motion-reduce:animate-none group-hover:[animation-play-state:paused] flex w-max select-none items-center whitespace-nowrap">
          {[0, 1].map((rep) => (
            <div key={rep} className="flex items-center">
              {["Architecture", "Interior Design", "Construction", "Project Management", "Real Estate Consultancy", "Turnkey Solutions", "Design • Inspire • Build"].map((term) => (
                <span key={`${rep}-${term}`} className="flex items-center">
                  {term === "Design • Inspire • Build" ? (
                    <span className="mx-9 font-serif text-sm italic tracking-[0.14em] text-brand-accent-light [text-shadow:0_0_24px_rgba(215,188,141,0.45)] md:text-base">
                      Design &#183; Inspire &#183; Build
                    </span>
                  ) : (
                    <span className="mx-9 text-[0.7rem] font-bold uppercase tracking-[0.34em] text-white/80 [text-shadow:0_0_18px_rgba(215,188,141,0.25)] md:text-[0.74rem]">
                      {term}
                    </span>
                  )}
                  <span className="relative inline-flex h-[9px] w-[9px] shrink-0 items-center justify-center">
                    <span className="inline-block h-[9px] w-[9px] rotate-45 bg-gradient-to-br from-brand-accent-light to-brand-accent opacity-80 shadow-[0_0_10px_rgba(215,188,141,0.6)]" />
                    <span className="absolute inline-block h-[2.5px] w-[2.5px] rotate-45 bg-brand-charcoal" />
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ================= ABOUT ================= */}
      <section id="about" className="relative overflow-hidden bg-brand-ivory py-8 md:py-12">
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
                  Sweet Home Consultancy Services is a professional Architectural, Interior
                  Design, Construction, and Project Management consultancy dedicated to
                  delivering high-quality design and construction solutions.
                </p>
                <p className="font-light leading-relaxed text-brand-muted">
                  With extensive industry experience in India and the Gulf region, we provide
                  practical, cost-effective, and client-focused services for residential,
                  commercial, and renovation projects. Our goal is to transform ideas into
                  functional, aesthetically pleasing, and value-driven spaces while ensuring
                  quality, timely execution, and customer satisfaction.
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
      <section id="services" className="relative scroll-mt-24 overflow-hidden bg-brand-gray py-8 md:py-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[20rem] -top-[16rem] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(173,138,84,0.14)_0%,transparent_65%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[18rem] -left-[18rem] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(173,138,84,0.10)_0%,transparent_65%)]"
        />
        <div className="container-custom relative">
          <motion.div {...motionProps(0)} className="max-w-2xl">
            <SectionHeading
              eyebrow="Our Expertise"
              title={
                <>
                  Integrated services, one{" "}
                  <em className="font-serif italic font-normal">accountable</em> partner.
                </>
              }
            />
            <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-brand-muted">
              We own every discipline — architecture, interior design, construction,
              project management and real estate — so nothing is lost between consultant
              and contractor.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4 md:gap-6"
          >
            {services.map((service, i) => (
              <motion.article
                key={service.title}
                variants={fadeUp}
                className="group relative flex flex-col overflow-hidden bg-brand-gray p-7 shadow-[0_18px_45px_rgba(27,25,22,0.10),0_2px_6px_rgba(27,25,22,0.05)] ring-1 ring-inset ring-brand-stone/40 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(27,25,22,0.16),0_4px_10px_rgba(27,25,22,0.06)] hover:ring-brand-accent/40"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-brand-accent to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(173,138,84,0.12)_0%,transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-6 top-6 font-serif text-5xl italic leading-none text-brand-stone transition-colors duration-500 group-hover:text-brand-accent/30"
                >
                  0{i + 1}
                </span>

                <span className="flex h-13 w-13 items-center justify-center rounded-full border border-brand-accent/35 bg-gradient-to-br from-brand-accent/12 to-brand-accent/4 text-brand-accent-deep shadow-[inset_0_1px_2px_rgba(255,255,255,0.6)] transition-all duration-500 group-hover:border-brand-accent group-hover:from-brand-accent group-hover:to-brand-accent-deep group-hover:text-white group-hover:shadow-[0_12px_30px_rgba(160,120,0,0.45)]">
                  <service.icon size={22} strokeWidth={1.4} />
                </span>

                <span className="mt-7 inline-flex w-fit items-center gap-1.5 text-[0.56rem] font-bold uppercase tracking-[0.24em] text-brand-muted transition-colors duration-300 group-hover:text-brand-accent-deep">
                  <span className="inline-block h-[5px] w-[5px] rotate-45 bg-brand-accent" />
                  {service.tagline}
                </span>

                <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight text-brand-charcoal">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-[0.84rem] font-light leading-relaxed text-brand-muted">
                  {service.description}
                </p>

                <ul className="mt-6 grid flex-1 grid-cols-1 content-start gap-y-2.5 border-t border-brand-stone/70 pt-6">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[0.8rem] font-light text-brand-charcoal/75 transition-colors duration-300 group-hover:text-brand-charcoal">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent-deep transition-colors duration-300 group-hover:bg-brand-accent group-hover:text-white">
                        <svg
                          viewBox="0 0 12 12"
                          className="h-2 w-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M2 6.5 4.8 9 10 3" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="group/link mt-7 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-brand-charcoal transition-colors duration-300 hover:text-brand-accent-deep"
                >
                  <span className="relative">Explore Service</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-stone bg-brand-ivory transition-all duration-300 group-hover/link:border-brand-accent group-hover/link:shadow-[0_8px_20px_rgba(160,120,0,0.38)]">
                    <ArrowRight size={12} className="text-brand-accent-deep transition-transform duration-300 group-hover/link:translate-x-0.5" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= MARQUEE GALLERY ================= */}
      <section className="relative overflow-hidden border-b border-brand-stone bg-brand-charcoal py-8 md:py-12">
        <div className="container-custom">
          <motion.div {...motionProps(0)} className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <SectionHeading
              eyebrow="Our Projects"
              light
              align="center"
              title={
                <>
                  A look at{" "}
                  <em className="font-serif italic font-normal text-brand-accent-light">our projects.</em>
                </>
              }
            />
          </motion.div>
        </div>

        <MarqueeRow projects={homeRow1} reverse={false} />
        <MarqueeRow projects={homeRow2} reverse={true} />
      </section>

      {/* ================= PROCESS ================= */}
      <section id="process" className="relative scroll-mt-24 overflow-hidden border-y border-brand-stone bg-brand-ivory py-8 md:py-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(173,138,84,0.10)_0%,transparent_65%)]"
        />
        <div className="container-custom relative">
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
            <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-brand-muted">
              Six refined stages, meticulously supervised — so every project lands exactly as promised.
            </p>
          </motion.div>

          {/* Desktop timeline */}
          <div className="relative mt-12 hidden lg:block">
            <div className="absolute inset-x-0 top-5 h-px bg-brand-stone" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, delay: 0.2, ease: EASE }}
              className="absolute inset-x-0 top-5 h-px origin-left bg-gradient-to-r from-brand-accent-light/0 via-brand-accent to-brand-accent-light/0"
            />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-6 gap-6"
            >
              {processSteps.map((step) => (
                <motion.div key={step.num} variants={fadeUp} className="group relative pt-14">
                  <span className="absolute left-0 top-0 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-brand-accent/40 bg-brand-ivory font-serif text-sm italic text-brand-accent-deep shadow-[0_6px_18px_rgba(27,25,22,0.06)] transition-all duration-500 group-hover:border-brand-accent group-hover:bg-gradient-to-br group-hover:from-brand-accent-light group-hover:via-brand-accent group-hover:to-brand-accent-deep group-hover:text-white group-hover:shadow-[0_10px_28px_rgba(160,120,0,0.45)]">
                    {step.num}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute left-5 top-0 block h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-brand-accent/50 transition-colors duration-500 group-hover:bg-brand-accent"
                  />
                  <div className="transition-all duration-500 group-hover:-translate-y-1 group-hover:pl-2">
                    <h3 className="font-heading text-lg font-semibold tracking-tight text-brand-charcoal transition-colors duration-300 group-hover:text-brand-accent-deep">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-[0.88rem] font-normal leading-relaxed text-brand-charcoal/70">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile / tablet: vertical timeline */}
          <div className="mx-auto mt-10 max-w-md lg:hidden">
            <div className="relative border-l border-brand-stone pl-10">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.4, delay: 0.2, ease: EASE }}
                className="absolute inset-y-0 left-0 w-px origin-top bg-gradient-to-b from-brand-accent-light/0 via-brand-accent to-brand-accent-light/0"
              />
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  {...motionProps(i * 0.06)}
                  className="group relative pb-9 last:pb-0"
                >
                  <span className="absolute left-0 top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-brand-accent/40 bg-brand-ivory font-serif text-xs italic text-brand-accent-deep shadow-[0_6px_16px_rgba(27,25,22,0.06)] transition-all duration-500 group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-white">
                    {step.num}
                  </span>
                  <h3 className="flex items-center gap-2.5 font-heading text-base font-semibold tracking-tight text-brand-charcoal md:text-lg">
                    <span className="h-px w-5 shrink-0 bg-brand-accent/70" />
                    {step.title}
                  </h3>
                  <p className="ml-[1.875rem] mt-2.5 text-[0.88rem] font-normal leading-relaxed text-brand-charcoal/70">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            {...motionProps(0.1)}
            className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-4 text-center"
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
      <section id="why-choose-us" className="relative overflow-hidden bg-brand-charcoal py-8 text-white md:py-12">
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
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
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

        <div className="container-custom relative z-10 py-14 text-center md:py-20">
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

function MarqueeRow({
  projects: rowProjects,
  reverse = false,
}: {
  projects: (typeof projects)[number][];
  reverse?: boolean;
}) {
  const doubled = [...rowProjects, ...rowProjects];
  return (
    <div className="mt-8 overflow-hidden md:mt-12">
      <div
        className={
          reverse
            ? "flex w-max animate-marquee-reverse gap-5 px-5 md:gap-7 hover:[animation-play-state:paused]"
            : "flex w-max animate-marquee gap-5 px-5 md:gap-7 hover:[animation-play-state:paused]"
        }
      >
        {doubled.map((project, i) => (
          <MarqueeCard key={`${project.id}-${i}`} project={project} />
        ))}
      </div>
    </div>
  );
}

function MarqueeCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <Link
      href="/projects"
      aria-label={`${project.title} — ${project.category}, ${project.location}`}
      className="group block w-[58vw] shrink-0 sm:w-[48vw] md:w-[34vw] lg:w-[27vw] xl:w-[23rem]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-brand-charcoal-soft ring-1 ring-white/10 transition-all duration-500 group-hover:ring-brand-accent/60">
        <Image
          src={project.image}
          alt={`${project.title} — ${project.category.toLowerCase()} project in ${project.location}`}
          fill
          sizes="(max-width: 640px) 58vw, (max-width: 768px) 48vw, (max-width: 1024px) 34vw, 23rem"
          className="object-cover opacity-90 transition-all duration-[1.4s] ease-out group-hover:scale-[1.06] group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/15 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[0.52rem] font-bold uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm">
          {project.category}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
          <h3 className="font-heading text-sm font-semibold tracking-tight text-white md:text-base">
            {project.title}
          </h3>
          <div className="mt-1.5 flex items-center justify-between gap-3">
            <p className="flex items-center gap-1.5 text-[0.65rem] font-light tracking-wide text-white/65">
              <MapPin size={11} className="text-brand-accent-light" />
              {project.location}
            </p>
            <ArrowUpRight
              size={13}
              className="text-brand-accent-light opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
