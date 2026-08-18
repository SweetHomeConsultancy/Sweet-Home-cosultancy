import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Sweet Home Consultancy Services",
  description: "Terms and conditions for consulting and construction services provided by Sweet Home Consultancy Services.",
};

export default function TermsPage() {
  const terms = [
    "Above rates are indicative professional consultancy fees and may vary according to project size, complexity and location.",
    "Final quotation will be issued after understanding the client's requirements.",
    "Site visits outside the normal service area may attract additional travel charges.",
    "Government approval, sanction fees, statutory fees and specialist consultation fees are not included unless specifically mentioned.",
    "Structural design/certification will be provided through an appropriately qualified structural professional where required.",
    "Construction, material and execution costs are separate from consultancy fees unless a turnkey quotation is specifically issued.",
    "50% advance is payable before commencement of design work; balance payment will be linked to agreed milestones.",
    "Applicable taxes will be charged separately.",
    "Rates are subject to revision depending on project scope, site and market conditions.",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-ivory">
      {/* Header */}
      <section className="relative overflow-hidden bg-brand-charcoal pb-16 pt-36 text-white md:pb-20 md:pt-44">
        <div className="container-custom relative">
          <span className="eyebrow-light mb-6">Legal Information</span>
          <h1
            className="max-w-4xl text-balance font-semibold tracking-tight text-white"
            style={{ fontSize: "clamp(2.4rem, 5.4vw, 4.25rem)" }}
          >
            Terms &{" "}
            <em className="font-serif italic font-normal text-brand-accent-light">Conditions.</em>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <p className="mb-12 text-lg font-light leading-relaxed text-brand-muted">
            Please read these terms and conditions carefully before engaging with SWEET HOME
            for any architectural, interior design, or construction services.
          </p>

          <ol className="space-y-4">
            {terms.map((term, index) => (
              <li
                key={index}
                className="flex items-start gap-5 border border-brand-stone bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent/40 hover:shadow-[0_18px_40px_rgba(27,25,22,0.08)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-stone bg-brand-gray font-serif text-sm italic text-brand-accent-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 leading-relaxed text-brand-charcoal/85">{term}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 border border-brand-accent/30 bg-brand-beige p-7 md:p-8">
            <p className="text-sm leading-relaxed text-brand-muted">
              <strong className="font-semibold text-brand-charcoal">Note:</strong> These terms
              are subject to change. For the most accurate and up-to-date information
              regarding your specific project, please refer to your formal contract or
              quotation document.
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