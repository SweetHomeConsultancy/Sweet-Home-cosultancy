"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Compass, MapPin, Target, Eye, Phone } from "lucide-react";
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
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
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
              <div className="absolute -bottom-8 -right-4 hidden w-[46%] overflow-hidden border-4 border-brand-ivory shadow-xl sm:block md:-right-8">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/cta/Sweet_Home_section_image_aboutpage.jpeg"
                    alt="A completed SWEET HOME residence"
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex flex-col gap-6">
                <p className="text-xl font-light leading-relaxed text-brand-charcoal md:text-2xl">
                  <strong className="font-semibold">Sweet Home Consultancy Services</strong>{" "}
                  is a professional Architectural, Interior Design, Construction, and Project
                  Management consultancy dedicated to delivering high-quality design and
                  construction solutions.
                </p>
                <p className="text-base font-light leading-relaxed text-brand-muted">
                  With extensive industry experience in India and the Gulf region, we provide
                  practical, cost-effective, and client-focused services for residential,
                  commercial, and renovation projects.
                </p>
                <p className="text-base font-light leading-relaxed text-brand-muted">
                  Our goal is to transform ideas into functional, aesthetically pleasing,
                  and value-driven spaces while ensuring quality, timely execution, and
                  customer satisfaction.
                </p>
                <p className="text-base font-light leading-relaxed text-brand-muted">
                  Founded by {founder.name}, the firm offers comprehensive consultancy
                  services from concept design to project completion.
                </p>
              </motion.div>

              {/* Contact Hub with both numbers */}
              <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 rounded-lg border border-brand-stone bg-white/80 p-4 shadow-xs backdrop-blur-xs">
                <div className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-brand-muted">
                  Direct Contact & Consultation Lines
                </div>
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <a
                    href={`tel:${contactInfo.tel1}`}
                    className="inline-flex items-center gap-2 rounded-md bg-brand-charcoal px-3.5 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-brand-accent-deep"
                    title="Call Primary Number"
                  >
                    <Phone size={13} className="text-brand-accent-light" />
                    <span>Call: {contactInfo.phone1}</span>
                  </a>
                  <a
                    href={`tel:${contactInfo.tel2}`}
                    className="inline-flex items-center gap-2 rounded-md border border-brand-charcoal/20 bg-white px-3.5 py-2 text-xs font-semibold text-brand-charcoal shadow-xs transition-colors hover:border-brand-accent hover:bg-brand-ivory"
                    title="Call Secondary Number"
                  >
                    <Phone size={13} className="text-brand-accent" />
                    <span>Call: {contactInfo.phone2}</span>
                  </a>
                  <a
                    href={contactInfo.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-3.5 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#1eb457]"
                    title="Chat on WhatsApp"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>WhatsApp</span>
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
              className="group relative flex flex-col gap-5 border border-brand-stone bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-[0_24px_60px_rgba(27,25,22,0.12)]"
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
              className="group relative flex flex-col gap-5 border border-brand-stone bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-[0_24px_60px_rgba(27,25,22,0.12)]"
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
                className="inline-flex items-center gap-2 rounded-full border border-brand-stone bg-white px-5 py-2.5 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-brand-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent hover:shadow-[0_10px_24px_rgba(27,25,22,0.08)]"
              >
                <span className="inline-block h-[5px] w-[5px] rotate-45 bg-brand-accent" />
                {value}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="relative overflow-hidden border-t border-brand-stone bg-brand-charcoal py-8 text-white md:py-16">
        <div className="container-custom">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
              <span className="eyebrow-light mb-6">Founder Profile</span>
              <h2
                className="font-heading font-semibold tracking-tight text-white"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {founder.name}{" "}
                <em className="font-serif italic font-normal text-brand-accent-light">
                  — {founder.title}
                </em>
              </h2>
              <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/70">
                {founder.summary}
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
              <ul className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
                {founder.qualifications.map((qual, i) => (
                  <motion.li
                    key={qual}
                    variants={fadeUp}
                    className="group flex items-start gap-4 bg-brand-charcoal-soft p-6 transition-colors duration-300 hover:bg-brand-charcoal"
                  >
                    <span className="font-serif text-sm italic text-brand-accent-light">
                      0{i + 1}
                    </span>
                    <p className="pt-0.5 text-[0.92rem] font-light leading-relaxed text-brand-gray/80">
                      {qual}
                    </p>
                  </motion.li>
                ))}
              </ul>
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
                  className="inline-flex items-center gap-2 rounded-full border border-brand-stone bg-white px-5 py-2.5 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-brand-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent hover:shadow-[0_10px_24px_rgba(27,25,22,0.08)]"
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
                  The SWEET HOME{" "}
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
                <p className="mt-2.5 text-sm font-light leading-relaxed text-brand-gray/60">
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