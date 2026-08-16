"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import { whyChooseUs, contactInfo, stats } from "@/lib/data";

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
      <section className="relative overflow-hidden bg-brand-charcoal pb-20 pt-36 text-white md:pb-24 md:pt-44">
        <div className="container-custom relative">
          <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <span className="eyebrow-light mb-6">About SWEET HOME</span>
              <h1
                className="max-w-4xl text-balance font-semibold tracking-tight text-white"
                style={{ fontSize: "clamp(2.4rem, 5.4vw, 4.6rem)" }}
              >
                Designing spaces, inspiring lives,{" "}
                <em className="font-serif italic font-normal text-brand-accent-light">
                  building futures.
                </em>
              </h1>
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
                A single integrated studio in Kolkata — architects, interior designers and
                engineers working as one accountable team from first sketch to final handover.
              </p>
              <dl className="mt-10 grid grid-cols-3 divide-x divide-white/10 border-y border-white/10">
                {stats.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="px-3 py-5 first:pl-0 md:px-6">
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-serif text-3xl italic leading-none text-brand-accent-light md:text-4xl">
                      {stat.value}
                    </dd>
                    <dd className="mt-2.5 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-white/45 md:text-[0.6rem]">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-brand-ivory">
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
                  Founded in Kolkata, <strong className="font-semibold">SWEET HOME</strong> was
                  established with a singular vision: to bridge the gap between visionary
                  architectural design and flawless construction execution.
                </p>
                <p className="text-base font-light leading-relaxed text-brand-muted">
                  We understand that building a home or a commercial space is a monumental
                  investment. That&apos;s why we operate as an integrated studio, offering
                  comprehensive services ranging from initial space planning and 3D
                  visualization to structural engineering and final site execution.
                </p>
                <p className="text-base font-light leading-relaxed text-brand-muted">
                  Our team consists of passionate architects, creative interior designers and
                  experienced civil engineers. By eliminating the disconnect between design
                  consultants and on-site contractors, we ensure the final built form perfectly
                  mirrors the approved design.
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

      {/* Why Choose Us */}
      <section className="section-padding relative overflow-hidden bg-brand-charcoal text-white">
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
            className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3"
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