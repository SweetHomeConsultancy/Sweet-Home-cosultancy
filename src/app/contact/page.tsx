"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // In a real app, send data to API here
    console.log("Form data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
  };

  return (
    <div className="flex flex-col min-h-screen pt-[100px] bg-white">
      {/* Header */}
      <section className="bg-brand-beige py-20">
        <div className="container-custom">
          <SectionHeading
            title="Contact Us"
            subtitle="Get In Touch"
            align="center"
          />
          <p className="text-center text-brand-muted max-w-2xl mx-auto mt-6 text-lg">
            Ready to bring your architectural vision to life? Reach out to our team of experts to discuss your project requirements.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="flex flex-col gap-10">
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-6">Our Office</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-gray flex items-center justify-center rounded-sm text-brand-accent shrink-0">
                      <MapPin />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-charcoal mb-1">Address</h4>
                      <p className="text-brand-muted leading-relaxed">
                        75, G. C. Road, Titagarh<br />
                        (Near Safdar Palace),<br />
                        Kolkata-700119, West Bengal
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-gray flex items-center justify-center rounded-sm text-brand-accent shrink-0">
                      <Phone />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-charcoal mb-1">Phone</h4>
                      <p className="text-brand-muted">9007567100</p>
                      <p className="text-brand-muted">9477809100</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-gray flex items-center justify-center rounded-sm text-brand-accent shrink-0">
                      <Mail />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-charcoal mb-1">Email</h4>
                      <a href="mailto:alam.tanweer007@gmail.com" className="text-brand-muted hover:text-brand-accent transition-colors">
                        alam.tanweer007@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-gray flex items-center justify-center rounded-sm text-brand-accent shrink-0">
                      <Clock />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-charcoal mb-1">Working Hours</h4>
                      <p className="text-brand-muted">Mon - Sat: 10:00 AM - 7:00 PM</p>
                      <p className="text-brand-muted">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-[300px] bg-brand-stone rounded-sm relative overflow-hidden flex items-center justify-center text-brand-muted">
                 {/* In a real scenario, use Google Maps iframe here */}
                 <div className="text-center">
                    <MapPin className="mx-auto mb-2 opacity-50" size={32} />
                    <p>[Google Maps Integration]</p>
                 </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-brand-gray/30 p-8 md:p-10 border border-brand-stone rounded-sm">
              <h3 className="text-2xl font-heading font-semibold mb-8">Send an Enquiry</h3>
              
              {isSubmitSuccessful ? (
                <div className="bg-[#25D366]/10 text-[#25D366] p-6 rounded-sm flex items-center gap-4">
                   <div className="w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 size={24} />
                   </div>
                   <div>
                     <h4 className="font-semibold text-lg">Thank You!</h4>
                     <p>Your message has been sent successfully. Our team will contact you shortly.</p>
                   </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-brand-charcoal">Full Name</label>
                      <input
                        {...register("name")}
                        className="w-full h-12 px-4 border border-brand-stone focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all rounded-sm bg-white"
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-brand-charcoal">Phone Number</label>
                      <input
                        {...register("phone")}
                        className="w-full h-12 px-4 border border-brand-stone focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all rounded-sm bg-white"
                        placeholder="+91 90000 00000"
                      />
                      {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-brand-charcoal">Email Address</label>
                    <input
                      {...register("email")}
                      className="w-full h-12 px-4 border border-brand-stone focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all rounded-sm bg-white"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="projectType" className="text-sm font-medium text-brand-charcoal">Project Type</label>
                      <select
                        {...register("projectType")}
                        className="w-full h-12 px-4 border border-brand-stone focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all rounded-sm bg-white text-brand-charcoal"
                      >
                        <option value="">Select Project Type</option>
                        <option value="architecture">Architectural Design</option>
                        <option value="interior">Interior Design</option>
                        <option value="construction">Construction</option>
                        <option value="turnkey">Turnkey Project</option>
                        <option value="consultation">Consultation Only</option>
                      </select>
                      {errors.projectType && <p className="text-red-500 text-xs">{errors.projectType.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm font-medium text-brand-charcoal">Estimated Budget</label>
                      <select
                        {...register("budget")}
                        className="w-full h-12 px-4 border border-brand-stone focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all rounded-sm bg-white text-brand-charcoal"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="under_10l">Under ₹10 Lakhs</option>
                        <option value="10l_50l">₹10 Lakhs - ₹50 Lakhs</option>
                        <option value="50l_1cr">₹50 Lakhs - ₹1 Crore</option>
                        <option value="above_1cr">Above ₹1 Crore</option>
                        <option value="not_sure">Not Sure</option>
                      </select>
                      {errors.budget && <p className="text-red-500 text-xs">{errors.budget.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium text-brand-charcoal">Project Location</label>
                    <input
                      {...register("location")}
                      className="w-full h-12 px-4 border border-brand-stone focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all rounded-sm bg-white"
                      placeholder="e.g. New Town, Kolkata"
                    />
                    {errors.location && <p className="text-red-500 text-xs">{errors.location.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-brand-charcoal">Project Details / Message</label>
                    <textarea
                      {...register("message")}
                      className="w-full h-32 p-4 border border-brand-stone focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all rounded-sm bg-white resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                    {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                  </div>

                  <Button type="submit" size="lg" className="w-full flex items-center gap-2" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} />
                  </Button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

// Just adding CheckCircle2 here since I used it above
import { CheckCircle2 } from "lucide-react";
