"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Compass, MapPin, Target, Eye } from "lucide-react";
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
                    src="/images/about/main.jpg"
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

              <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="group">
                  <Link href="/contact">
                    Start Your Project <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
                >
                  <Link href={contactInfo.whatsappLink} target="_blank" rel="noopener noreferrer">
                    WhatsApp Us <Compass size={16} />
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