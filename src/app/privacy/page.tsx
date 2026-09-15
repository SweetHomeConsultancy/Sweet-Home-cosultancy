import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Sweet Home Projects",
  description: "Privacy policy for Sweet Home Projects.",
};

export default function PrivacyPage() {
  const policies = [
    "We collect personal information such as name, contact number, and email address when you submit an enquiry.",
    "Your information is used solely for the purpose of communicating with you regarding your project and our services.",
    "We do not share, sell, or rent your personal information to third parties without your explicit consent.",
    "We implement appropriate security measures to protect your personal data against unauthorized access or disclosure.",
    "You have the right to request access to or deletion of your personal data at any time by contacting us.",
    "Our website may use cookies to enhance user experience; you can choose to disable these through your browser settings.",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-ivory">
      {/* Header */}
      <section className="relative overflow-hidden bg-brand-charcoal pb-16 pt-36 text-white md:pb-20 md:pt-44">
        <div className="container-custom relative">
          <span className="eyebrow-light mb-6">Your Data</span>
          <h1
            className="max-w-4xl text-balance font-semibold tracking-tight text-white"
            style={{ fontSize: "clamp(2.4rem, 5.4vw, 4.25rem)" }}
          >
            Privacy{" "}
            <em className="font-serif italic font-normal text-brand-accent-light">Policy.</em>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <p className="mb-12 text-lg font-light leading-relaxed text-brand-muted">
            At SWEET HOME, we are committed to protecting your privacy. This policy outlines
            how we handle your personal information.
          </p>

          <ol className="space-y-4">
            {policies.map((policy, index) => (
              <li
                key={index}
                className="flex items-start gap-5 border border-brand-stone bg-[#EFEBE3] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent/40 hover:shadow-[0_18px_40px_rgba(27,25,22,0.08)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-stone bg-brand-gray font-serif text-sm italic text-brand-accent-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 leading-relaxed text-brand-charcoal/85">{policy}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 border border-brand-accent/30 bg-brand-beige p-7 md:p-8">
            <p className="text-sm leading-relaxed text-brand-muted">
              <strong className="font-semibold text-brand-charcoal">Note:</strong> We reserve
              the right to update this policy at any time. Any changes will be reflected on
              this page.
            </p>
          </div>

          <div className="mt-14 flex justify-center">
            <Button asChild variant="gold" size="lg">
              <Link href="/contact">
                Talk to Our Team <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}