"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Compass,
  MapPin,
  Target,
  Eye,
  Phone,
  GraduationCap,
  PencilRuler,
  BookOpen,
  Globe,
  Building2,
  ShieldCheck,
  Award,
  Landmark,
  Sparkles,
  CheckCircle2,
  Check,
} from "lucide-react";
import { whyChooseUs, contactInfo, serviceAreas, founder, mission, vision, coreValues } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-ivory">
      {/* Header */}
      <section className="relative overflow-hidden bg-brand-charcoal pb-10 pt-20 text-white md:pb-14 md:pt-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-56 max-w-3xl bg-[radial-gradient(closest-side,rgba(215,188,141,0.10),transparent)]" aria-hidden="true" />
        <div className="container-custom relative">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
            <span className="eyebrow-light mb-4">About SWEET HOME</span>
            <h1
              className="max-w-4xl text-balance font-semibold tracking-tight text-white"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)" }}
            >
              Designing better spaces,{" "}
              <em className="font-serif italic font-normal text-brand-accent-light">
                building better futures.
              </em>
            </h1>
            <p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-white/70 md:text-lg">
              A professional architecture, interior design, construction, project
              management and real estate consultancy in Kolkata — one accountable team
              from first sketch to final handover.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-brand-ivory py-8 md:py-14">
        <div className="container-custom">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-gray">
                <Image
                  src="/images/hero-interior.jpg"
                  alt="The SWEET HOME design and construction studio in action"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.5s] ease-out hover:scale-[1.05]"
                />
              </div>

            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="lg:col-span-7">
              <motion.div variants={fadeUp} className="flex flex-col gap-6">
                <p className="text-xl font-light leading-relaxed text-brand-charcoal md:text-2xl">
                  <strong className="font-semibold">Sweet Home Consultancy Services</strong>{" "}
                  is a premier Architectural, Interior Design, Construction, and Project
                  Management firm dedicated to delivering high-quality, regulation-compliant
                  and visionary built spaces.
                </p>
                <p className="text-base font-light leading-relaxed text-brand-muted">
                  With over 16 years of extensive industry experience across India and the Gulf (GCC)
                  countries, we provide practical, cost-effective, and client-tailored solutions for
                  residential villas, commercial complexes, banks, and renovation projects.
                </p>
                <p className="text-base font-light leading-relaxed text-brand-muted">
                  Founded and led by{" "}
                  <strong className="font-medium text-brand-charcoal">
                    <span className="uppercase">{founder.name}</span> (Architectural & L.B.S Engineer)
                  </strong>
                  , empaneled under Barrackpore, Khardaha, and Titagarh Municipalities, our practice
                  delivers comprehensive consultancy from concept design and municipal sanctioning to
                  turnkey handover.
                </p>
              </motion.div>

              {/* Contact Hub with both numbers */}
              <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 rounded-lg border border-brand-stone bg-[#EFEBE3]/80 p-4 shadow-xs backdrop-blur-xs">
                <div className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-brand-muted mb-3">
                  Direct Contact & Consultation Lines
                </div>
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <a
                    href={`tel:${contactInfo.tel1}`}
                    className="inline-flex w-full justify-center sm:w-auto items-center gap-2 rounded-md bg-brand-charcoal px-3.5 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-brand-accent-deep"
                    title="Call Primary Number"
                  >
                    <Phone size={13} className="text-brand-accent-light" />
                    <span>Contact : {contactInfo.phone1}</span>
                  </a>
                  <a
                    href={contactInfo.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full justify-center sm:w-auto items-center gap-2 rounded-md bg-[#25D366] px-3.5 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#1eb457]"
                    title="Chat on WhatsApp"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>WhatsApp : {contactInfo.whatsapp}</span>
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="group">
                  <Link href="/contact">
                    Start Your Project <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="relative overflow-hidden border-t border-brand-stone bg-brand-gray py-8 md:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[16rem] -top-[14rem] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(173,138,84,0.12)_0%,transparent_65%)]"
        />
        <div className="container-custom relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <SectionHeading
              eyebrow="Mission & Vision"
              align="center"
              title={
                <>
                  What drives <em className="font-serif italic font-normal text-brand-accent-deep">us.</em>
                </>
              }
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mt-10 grid gap-6 lg:grid-cols-2"
          >
            <motion.article
              variants={fadeUp}
              className="group relative flex flex-col gap-5 border border-brand-stone bg-[#EFEBE3] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-[0_24px_60px_rgba(27,25,22,0.12)]"
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-brand-accent to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent-deep transition-colors duration-300 group-hover:bg-brand-accent group-hover:text-white">
                <Target size={22} strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="font-heading text-xl font-semibold tracking-tight text-brand-charcoal">
                  Our Mission
                </h3>
                <p className="mt-3 text-[0.94rem] font-light leading-relaxed text-brand-muted">
                  {mission}
                </p>
              </div>
            </motion.article>

            <motion.article
              variants={fadeUp}
              className="group relative flex flex-col gap-5 border border-brand-stone bg-[#EFEBE3] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-[0_24px_60px_rgba(27,25,22,0.12)]"
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-brand-accent to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent-deep transition-colors duration-300 group-hover:bg-brand-accent group-hover:text-white">
                <Eye size={22} strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="font-heading text-xl font-semibold tracking-tight text-brand-charcoal">
                  Our Vision
                </h3>
                <p className="mt-3 text-[0.94rem] font-light leading-relaxed text-brand-muted">
                  {vision}
                </p>
              </div>
            </motion.article>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mt-12 flex flex-wrap items-center justify-center gap-3"
          >
            {coreValues.map((value) => (
              <motion.span
                key={value}
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-brand-stone bg-[#EFEBE3] px-5 py-2.5 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-brand-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent hover:shadow-[0_10px_24px_rgba(27,25,22,0.08)]"
              >
                <span className="inline-block h-[5px] w-[5px] rotate-45 bg-brand-accent" />
                {value}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modern Owner / Founder Leadership Profile */}
      <section className="relative overflow-hidden border-t border-brand-stone bg-brand-charcoal py-10 text-white md:py-20">
        {/* Architectural grid & glowing background effects */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-1/4 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(200,152,14,0.12)_0%,transparent_65%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 bottom-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(215,188,141,0.08)_0%,transparent_70%)]"
        />

        <div className="container-custom relative">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="eyebrow-light mb-3">Leadership & Principal Consultant</span>
            <h2
              className="font-heading font-semibold tracking-tight text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3.1rem)" }}
            >
              About the Owner of{" "}
              <span className="text-brand-accent-light">SWEET HOME PROJECTS</span>
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed text-white/70 md:text-lg">
              Meet the visionary engineer behind Sweet Home Consultancy — blending 16+ years of
              Indian & Gulf (GCC) project mastery with authorized municipal engineering credentials.
            </p>
          </motion.div>
          {/* Main Showcase Layout */}
          <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1.1fr_1.2fr] lg:gap-12">
            {/* Left Card: Executive Profile & Municipal Authority */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-brand-charcoal-soft/90 to-brand-charcoal/95 p-6 shadow-2xl backdrop-blur-md sm:p-8"
            >
              {/* Gold Top Accent Line */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent" />

              {/* Owner Header / Identity */}
              <div className="flex flex-col items-center text-center sm:flex-row sm:text-left gap-4 sm:gap-5">
                {/* Founder Photo */}
                <div className="relative h-28 w-28 sm:h-32 sm:w-32 shrink-0">
                  <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-brand-accent/50 bg-gradient-to-br from-brand-charcoal to-[#302b23] shadow-inner">
                    <Image
                      src="/images/tanweer-alam.jpg"
                      alt={founder.name}
                      fill
                      sizes="128px"
                      className="object-cover object-top"
                    />
                  </div>
                  <span className="absolute -bottom-2 -right-2 z-10 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-brand-accent text-brand-charcoal shadow-md">
                    <ShieldCheck size={16} strokeWidth={2.5} />
                  </span>
                </div>

                {/* Name & Title */}
                <div className="flex flex-col items-center sm:items-start">
                  <div className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-brand-accent-light">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-accent-light animate-pulse" />
                    Principal Consultant
                  </div>
                  <h3 className="mt-1 text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
                    {founder.name}
                  </h3>
                  <p className="text-sm font-semibold text-brand-accent-light sm:text-base">
                    {founder.title}
                  </p>
                </div>
              </div>

              {/* Municipalities Authorization Box */}
              <div className="mt-5 rounded-xl border border-brand-accent/30 bg-brand-accent/5 p-4">
                <div className="flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-brand-accent-light">
                  <Landmark size={13} className="text-brand-accent" />
                  <span>Enlisted L.B.S Municipalities</span>
                </div>

                <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {founder.municipalities.map((muni) => (
                    <div
                      key={muni}
                      className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#EFEBE3]/5 px-2.5 py-2 text-xs font-medium text-white"
                    >
                      <CheckCircle2 size={12} className="shrink-0 text-brand-accent" />
                      <span className="truncate" title={muni}>
                        {muni.replace(" Municipality", "")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Owner Consultation CTA Hub */}
              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center">
                <a
                  href={`tel:${contactInfo.tel1}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-brand-accent px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-charcoal shadow-md transition-all duration-300 hover:bg-brand-accent-light"
                >
                  <Phone size={13} />
                  <span>Call: {contactInfo.phone1}</span>
                </a>
                <a
                  href={contactInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#25D366] transition-all duration-300 hover:bg-[#25D366] hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </motion.div>

            {/* Right Side: Clean & Sleek Qualifications & Experience */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="flex flex-col gap-3"
            >
              <div className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-brand-accent-light">
                Qualifications & Experience
              </div>

              {/* 1. Diploma in ARCHITECTURE & INTERIOR DESIGN */}
              <motion.div
                variants={fadeUp}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-brand-charcoal-soft/80 p-4 transition-all duration-300 hover:border-brand-accent/50 hover:bg-brand-charcoal-soft sm:p-4.5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-accent/30 bg-brand-accent/10 text-brand-accent-light transition-colors group-hover:bg-brand-accent group-hover:text-brand-charcoal">
                  <PencilRuler size={19} />
                </span>
                <div>
                  <span className="text-[0.62rem] font-bold uppercase tracking-wider text-brand-accent-light">
                    Diploma
                  </span>
                  <h4 className="text-sm font-semibold text-white sm:text-base leading-tight">
                    Diploma ARCHITECTURE & INTERIOR DESIGN
                  </h4>
                  <p className="mt-1 text-[0.65rem] font-medium tracking-wide text-brand-accent-light/80 uppercase">
                    SRIST - KOLKATA
                  </p>
                </div>
              </motion.div>

              {/* 2. Graduation in BACHELORS IN ARTS */}
              <motion.div
                variants={fadeUp}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-brand-charcoal-soft/80 p-4 transition-all duration-300 hover:border-brand-accent/50 hover:bg-brand-charcoal-soft sm:p-4.5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-accent/30 bg-brand-accent/10 text-brand-accent-light transition-colors group-hover:bg-brand-accent group-hover:text-brand-charcoal">
                  <BookOpen size={19} />
                </span>
                <div>
                  <span className="text-[0.62rem] font-bold uppercase tracking-wider text-brand-accent-light">
                    Graduation
                  </span>
                  <h4 className="text-sm font-semibold text-white sm:text-base leading-tight">
                    Graduation BACHELORS IN ARTS
                  </h4>
                  <p className="mt-1 text-[0.65rem] font-medium tracking-wide text-brand-accent-light/80 uppercase">
                    CALCUTTA UNIVERSITY - KOLKATA
                  </p>
                </div>
              </motion.div>

              {/* 3. Post Graduate in CONSTRUCTION AND PROJECT MANAGEMENTS */}
              <motion.div
                variants={fadeUp}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-brand-charcoal-soft/80 p-4 transition-all duration-300 hover:border-brand-accent/50 hover:bg-brand-charcoal-soft sm:p-4.5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-accent/30 bg-brand-accent/10 text-brand-accent-light transition-colors group-hover:bg-brand-accent group-hover:text-brand-charcoal">
                  <GraduationCap size={19} />
                </span>
                <div>
                  <span className="text-[0.62rem] font-bold uppercase tracking-wider text-brand-accent-light">
                    Post Graduate
                  </span>
                  <h4 className="text-sm font-semibold text-white sm:text-base leading-tight">
                    Post Graduate CONSTRUCTION AND PROJECT MANAGEMENTS
                  </h4>
                  <p className="mt-1 text-[0.65rem] font-medium tracking-wide text-brand-accent-light/80 uppercase">
                    MIT - PUNE
                  </p>
                </div>
              </motion.div>

              {/* 4. Working experience: 16 years of Indian and Gulf (GCC) Countries */}
              <motion.div
                variants={fadeUp}
                className="group flex items-center gap-4 rounded-xl border border-brand-accent/40 bg-gradient-to-r from-brand-charcoal-soft via-brand-charcoal-soft to-brand-accent/10 p-4 transition-all duration-300 hover:border-brand-accent sm:p-4.5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-accent text-brand-charcoal font-bold shadow-xs">
                  <Globe size={19} />
                </span>
                <div>
                  <span className="text-[0.62rem] font-bold uppercase tracking-wider text-brand-accent-light">
                    Working Experience
                  </span>
                  <h4 className="text-sm font-semibold text-white sm:text-base">
                    16 Years of Indian and Gulf (GCC) Countries
                  </h4>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="relative overflow-hidden border-t border-brand-stone bg-brand-ivory py-8 md:py-16">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mx-auto flex max-w-3xl flex-col items-center text-center"
          >
            <SectionHeading
              eyebrow="Service Areas"
              align="center"
              title={
                <>
                  Where we <em className="font-serif italic font-normal text-brand-accent-deep">work.</em>
                </>
              }
            />
            <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-brand-muted">
              Serving Kolkata and the surrounding districts with architecture, interior
              design, construction and real estate consultancy.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            {serviceAreas
              .filter((area) => area !== "and nearby areas")
              .map((area) => (
                <motion.span
                  key={area}
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-stone bg-[#EFEBE3] px-5 py-2.5 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-brand-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent hover:shadow-[0_10px_24px_rgba(27,25,22,0.08)]"
                >
                  <MapPin size={12} className="text-brand-accent" />
                  {area}
                </motion.span>
              ))}
            <motion.span
              variants={fadeUp}
              className="font-serif text-lg italic text-brand-accent-deep"
            >
              and nearby areas.
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative overflow-hidden bg-brand-charcoal py-8 text-white md:py-16">
        <div className="container-custom relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <SectionHeading
              eyebrow="Why Choose Us"
              align="center"
              light
              title={
                <>
                  The SWEET HOME PROJECTS{" "}
                  <em className="font-serif italic font-normal text-brand-accent-light">advantage.</em>
                </>
              }
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} variants={fadeUp} className="group border-t border-white/15 pt-8 transition-colors duration-300 hover:border-brand-accent">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center border border-white/15 transition-colors duration-300 group-hover:border-brand-accent group-hover:bg-brand-accent/10">
                    <item.icon size={20} strokeWidth={1.5} className="text-brand-accent-light" />
                  </span>
                  <span className="font-serif text-sm italic text-white/25">0{index + 1}</span>
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-base font-light leading-relaxed text-brand-gray/60">
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