"use client";

import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  User,
  Building2,
  Banknote,
  MessageSquareText,
  ChevronDown,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { contactInfo } from "@/lib/data";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  projectType: z.string().min(1, "Please select a project type"),
  location: z.string().min(2, "Location is required"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Please provide more details"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const steps = [
  { title: "Share Your Brief", description: "Tell us about your plot, home or commercial space and rough budget." },
  { title: "Architect Replies", description: "A senior architect — not a sales desk — responds within 24 hours." },
  { title: "Free Consultation", description: "A considered first consultation and a clear path to your build." },
];

const baseInputDark =
  "w-full rounded-lg border bg-white/[0.06] text-white placeholder:text-white/35 transition-all focus:outline-none focus:ring-2";
const normalInputDark = "border-white/15 focus:border-brand-accent focus:ring-brand-accent/40";
const errorInputDark = "border-red-400/70 focus:border-red-400 focus:ring-red-400/30";

const iconFieldClass = cn(baseInputDark, normalInputDark, "h-12 pl-11 pr-10");
const labelClass = "text-[0.65rem] font-bold uppercase tracking-[0.18em] text-brand-accent-light";
const fieldIconClass = "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    const text = `New Enquiry from Website:\n\n*Name:* ${data.name}\n*Phone:* ${data.phone}\n*Email:* ${data.email}\n*Location:* ${data.location}\n*Project Type:* ${data.projectType}\n*Budget:* ${data.budget}\n*Message:* ${data.message}`;
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(text)}`;
    await new Promise((resolve) => setTimeout(resolve, 800));
    window.open(whatsappUrl, "_blank");
  };

  const infoItems: Array<{
    icon: typeof MapPin;
    title: string;
    body: string[];
    href?: string;
  }> = [
    { icon: MapPin, title: "Visit Our Studio", body: [contactInfo.addressLine1, contactInfo.addressLine2], href: "https://www.google.com/maps/search/?api=1&query=Titagarh,+Kolkata" },
    { icon: Phone, title: "Call Us", body: [`+91 ${contactInfo.phone1}`, `+91 ${contactInfo.phone2}`], href: `tel:${contactInfo.tel1}` },
    { icon: Mail, title: "Email Us", body: [contactInfo.email], href: `mailto:${contactInfo.email}` },
    { icon: Clock, title: "Working Hours", body: [contactInfo.hours, contactInfo.closed, contactInfo.consultation] },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-brand-ivory">
      {/* Header */}
      <section className="relative overflow-hidden bg-brand-charcoal pb-10 pt-20 text-white md:pb-14 md:pt-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-56 max-w-3xl bg-[radial-gradient(closest-side,rgba(215,188,141,0.10),transparent)]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent" aria-hidden="true" />
        <div className="container-custom relative">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
            <span className="eyebrow-light mb-4">Get In Touch</span>
            <h1
              className="max-w-4xl text-balance font-semibold tracking-tight text-white"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)" }}
            >
              Let&apos;s talk about your{" "}
              <em className="font-serif italic font-normal text-brand-accent-light">next build.</em>
            </h1>
            <p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-white/70 md:text-lg">
              Ready to bring your vision to life? Speak with a senior architect — not a
              sales desk — about your plot, home or commercial space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Split content */}
      <section className="bg-brand-ivory py-8 md:py-14">
        <div className="container-custom">
          {/* How it works */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="mb-14 grid gap-px overflow-hidden border border-brand-stone bg-brand-stone sm:grid-cols-3"
          >
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="group relative flex items-start gap-5 bg-white p-6 transition-colors duration-300 hover:bg-brand-beige md:p-7"
              >
                <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-brand-accent via-brand-accent-light to-brand-accent transition-transform duration-500 group-hover:scale-x-100" />
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-stone bg-brand-gray font-serif text-sm italic text-brand-accent-deep transition-all duration-300 group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-white">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold tracking-tight text-brand-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm font-light leading-relaxed text-brand-muted">
                    {step.description}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="absolute right-3 top-1/2 hidden -translate-y-1/2 text-brand-accent/50 sm:block"
                  />
                )}
              </div>
            ))}
          </motion.div>

          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp} className="flex flex-col gap-10">
              <div className="space-y-2">
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-brand-charcoal md:text-3xl">
                  Our Office
                </h2>
                <p className="font-light text-brand-muted">
                  Architecture | Interior Design | Construction Consultancy
                </p>
              </div>

              <address className="grid gap-4 not-italic sm:grid-cols-2">
                {infoItems.map((item, idx) => {
                  const IconComp = item.icon;
                  const href = item.href;
                  const content = (
                    <div className="group relative flex h-full flex-col gap-5 border border-brand-stone bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/60 hover:shadow-[0_20px_45px_rgba(27,25,22,0.10)]">
                      <span className="absolute right-5 top-5 font-serif text-lg italic leading-none text-brand-accent/40 transition-colors duration-300 group-hover:text-brand-accent-deep">
                        0{idx + 1}
                      </span>
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gray text-brand-accent-deep transition-all duration-300 group-hover:bg-brand-accent group-hover:text-white">
                        <IconComp size={19} strokeWidth={1.6} />
                      </span>
                      <div>
                        <h3 className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-brand-charcoal">
                          {item.title}
                        </h3>
                        <div className="mt-2 space-y-1">
                          {item.body.map((line) => (
                            <p key={line} className="text-sm font-light leading-relaxed text-brand-muted">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                      {item.href && (
                        <span className="mt-auto flex items-center gap-1.5 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-brand-muted transition-colors duration-300 group-hover:text-brand-accent-deep">
                          Open <ArrowUpRight size={12} />
                        </span>
                      )}
                    </div>
                  );
                  const isExternal = href?.startsWith("http") ?? false;
                  return href ? (
                    <a
                      key={item.title}
                      href={href}
                      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="block h-full"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.title} className="h-full">{content}</div>
                  );
                })}
              </address>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden border border-brand-charcoal/10 bg-brand-charcoal p-8 text-white shadow-[0_30px_70px_rgba(27,25,22,0.28)] ring-1 ring-inset ring-white/5 md:p-12"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-accent to-transparent" aria-hidden="true" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-brand-accent/[0.12]" aria-hidden="true" />

              <div className="relative mb-9 flex flex-wrap items-start justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <span className="eyebrow-light">Enquiry</span>
                  <h2 className="font-heading text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    Send a Brief
                  </h2>
                </div>
                <span className="flex items-center gap-2 rounded-full border border-brand-accent/40 bg-brand-accent/10 px-4 py-2 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-brand-accent-light">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-accent-light opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-accent-light" />
                  </span>
                  Response within 24 hours
                </span>
              </div>

              <div className="relative">
                {isSubmitSuccessful ? (
                  <div className="rounded-xl border border-brand-accent/40 bg-brand-accent/15 p-7">
                    <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-accent text-brand-charcoal">
                        <CheckCircle2 size={28} />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Thank You!</h3>
                        <p className="mt-1 text-sm font-light leading-relaxed text-white/70">
                          Your message has been prepared and opened in WhatsApp. Our team will
                          respond shortly — usually within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2.5">
                        <label htmlFor="name" className={labelClass}>
                          Full Name <span className="text-brand-accent-light">*</span>
                        </label>
                        <div className="relative">
                          <User size={15} strokeWidth={1.6} className={fieldIconClass} />
                          <input
                            id="name"
                            type="text"
                            autoComplete="name"
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "name-error" : undefined}
                            {...register("name")}
                            className={cn(iconFieldClass, errors.name && errorInputDark)}
                            placeholder="John Doe"
                          />
                        </div>
                        {errors.name && <p id="name-error" className="text-xs font-medium text-red-400">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-2.5">
                        <label htmlFor="phone" className={labelClass}>
                          Phone Number <span className="text-brand-accent-light">*</span>
                        </label>
                        <div className="relative">
                          <Phone size={15} strokeWidth={1.6} className={fieldIconClass} />
                          <input
                            id="phone"
                            type="tel"
                            inputMode="tel"
                            autoComplete="tel"
                            aria-invalid={!!errors.phone}
                            aria-describedby={errors.phone ? "phone-error" : undefined}
                            {...register("phone")}
                            className={cn(iconFieldClass, errors.phone && errorInputDark)}
                            placeholder="+91 90000 00000"
                          />
                        </div>
                        {errors.phone && <p id="phone-error" className="text-xs font-medium text-red-400">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <label htmlFor="email" className={labelClass}>
                        Email Address <span className="text-brand-accent-light">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={15} strokeWidth={1.6} className={fieldIconClass} />
                        <input
                          id="email"
                          type="email"
                          autoComplete="email"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          {...register("email")}
                          className={cn(iconFieldClass, errors.email && errorInputDark)}
                          placeholder="john@example.com"
                        />
                      </div>
                      {errors.email && <p id="email-error" className="text-xs font-medium text-red-400">{errors.email.message}</p>}
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2.5">
                        <label htmlFor="projectType" className={labelClass}>
                          Project Type <span className="text-brand-accent-light">*</span>
                        </label>
                        <div className="relative">
                          <Building2 size={15} strokeWidth={1.6} className={fieldIconClass} />
                          <select
                            id="projectType"
                            aria-invalid={!!errors.projectType}
                            aria-describedby={errors.projectType ? "projectType-error" : undefined}
                            {...register("projectType")}
                            className={cn(iconFieldClass, "appearance-none bg-brand-charcoal [&>option]:bg-brand-charcoal", errors.projectType && errorInputDark)}
                          >
                            <option value="">Select Project Type</option>
                            <option value="architecture">Architectural Design</option>
                            <option value="interior">Interior Design</option>
                            <option value="construction">Construction</option>
                            <option value="turnkey">Turnkey Project</option>
                            <option value="consultation">Consultation Only</option>
                          </select>
                          <ChevronDown size={15} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40" />
                        </div>
                        {errors.projectType && <p id="projectType-error" className="text-xs font-medium text-red-400">{errors.projectType.message}</p>}
                      </div>
                      <div className="space-y-2.5">
                        <label htmlFor="budget" className={labelClass}>
                          Estimated Budget <span className="text-brand-accent-light">*</span>
                        </label>
                        <div className="relative">
                          <Banknote size={15} strokeWidth={1.6} className={fieldIconClass} />
                          <select
                            id="budget"
                            aria-invalid={!!errors.budget}
                            aria-describedby={errors.budget ? "budget-error" : undefined}
                            {...register("budget")}
                            className={cn(iconFieldClass, "appearance-none bg-brand-charcoal [&>option]:bg-brand-charcoal", errors.budget && errorInputDark)}
                          >
                            <option value="">Select Budget Range</option>
                            <option value="under_10l">Under ₹10 Lakhs</option>
                            <option value="10l_50l">₹10 Lakhs - ₹50 Lakhs</option>
                            <option value="50l_1cr">₹50 Lakhs - ₹1 Crore</option>
                            <option value="above_1cr">Above ₹1 Crore</option>
                            <option value="not_sure">Not Sure</option>
                          </select>
                          <ChevronDown size={15} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40" />
                        </div>
                        {errors.budget && <p id="budget-error" className="text-xs font-medium text-red-400">{errors.budget.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <label htmlFor="location" className={labelClass}>
                        Project Location <span className="text-brand-accent-light">*</span>
                      </label>
                      <div className="relative">
                        <MapPin size={15} strokeWidth={1.6} className={fieldIconClass} />
                        <input
                          id="location"
                          type="text"
                          autoComplete="address-level2"
                          aria-invalid={!!errors.location}
                          aria-describedby={errors.location ? "location-error" : undefined}
                          {...register("location")}
                          className={cn(iconFieldClass, errors.location && errorInputDark)}
                          placeholder="e.g. New Town, Kolkata"
                        />
                      </div>
                      {errors.location && <p id="location-error" className="text-xs font-medium text-red-400">{errors.location.message}</p>}
                    </div>

                    <div className="space-y-2.5">
                      <label htmlFor="message" className={labelClass}>
                        Project Details <span className="text-brand-accent-light">*</span>
                      </label>
                      <div className="relative">
                        <MessageSquareText size={15} strokeWidth={1.6} className="absolute left-4 top-3.5 text-white/40" />
                        <textarea
                          id="message"
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? "message-error" : undefined}
                          {...register("message")}
                          className={cn(baseInputDark, errors.message ? errorInputDark : normalInputDark, "h-32 resize-none p-4 pl-11")}
                          placeholder="Tell us about your requirements..."
                        />
                      </div>
                      {errors.message && <p id="message-error" className="text-xs font-medium text-red-400">{errors.message.message}</p>}
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Preparing…" : "Send Message"} <Send size={16} />
                    </Button>
                    <p className="flex items-center justify-center gap-2 text-center text-xs font-light text-white/45">
                      <ShieldCheckIcon />
                      Opens WhatsApp with your enquiry pre-filled — the fastest way to reach our team.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-6 md:pb-10">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="mb-8 flex items-start justify-between gap-4"
          >
            <div>
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-brand-charcoal md:text-3xl">
                Visit Our Studio
              </h2>
              <p className="mt-2 font-light text-brand-muted">
                {contactInfo.addressLine1}, {contactInfo.addressLine2} — {contactInfo.city}
              </p>
            </div>
            <span className="hidden items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-brand-muted sm:flex">
              <span className="h-px w-10 bg-brand-accent" />
              Open directions
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="relative h-[380px] overflow-hidden border border-brand-stone md:h-[460px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14717.38883656041!2d88.3615967!3d22.7351658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89bbdbbc8aef1%3A0x6b8d227f2df47a83!2sTitagarh%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SWEET HOME office location — Titagarh, Kolkata"
            />
            <div className="pointer-events-none absolute left-4 top-4 rounded-xl border border-brand-stone bg-white px-4 py-2.5 shadow-lg md:left-6 md:top-6">
              <p className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-brand-charcoal">
                <MapPin size={13} className="text-brand-accent" />
                SWEET HOME — Titagarh, Kolkata
              </p>
            </div>
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
              <Button asChild size="sm" variant="gold" className="shadow-[0_16px_36px_rgba(0,0,0,0.28)]">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Titagarh,+Kolkata"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions <ArrowUpRight size={14} />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ShieldCheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-brand-accent-light"
      aria-hidden="true"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}