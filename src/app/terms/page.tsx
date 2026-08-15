import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Terms & Conditions | SWEET HOME",
  description: "Terms and conditions for consulting and construction services provided by SWEET HOME.",
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
    "Rates are subject to revision depending on project scope, site and market conditions."
  ];

  return (
    <div className="flex flex-col min-h-screen pt-10">
      {/* Header */}
      <section className="bg-brand-beige py-20">
        <div className="container-custom">
          <SectionHeading
            title="Terms & Conditions"
            align="center"
          />
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-brand max-w-none">
            <p className="text-brand-muted text-lg mb-8">
              Please read these terms and conditions carefully before engaging with SWEET HOME for any architectural, interior design, or construction services.
            </p>
            
            <ol className="list-decimal pl-6 space-y-4 text-brand-charcoal">
              {terms.map((term, index) => (
                <li key={index} className="pl-2 leading-relaxed">
                  {term}
                </li>
              ))}
            </ol>
            
            <div className="mt-12 p-6 bg-brand-gray border border-brand-stone rounded-sm">
              <p className="text-sm text-brand-muted">
                <strong>Note:</strong> These terms are subject to change. For the most accurate and up-to-date information regarding your specific project, please refer to your formal contract or quotation document.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
