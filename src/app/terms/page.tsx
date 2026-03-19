import AnimateIn from "@/components/AnimateIn";

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <AnimateIn>
          <h1 className="text-4xl font-bold tracking-tight mb-8">Terms & Conditions</h1>
          <p className="text-muted mb-8">Last updated: March 2026</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-3">1. Services</h2>
              <p className="text-muted leading-relaxed">Lead Clash provides outbound marketing, LinkedIn optimization, lead generation, graphic design, video editing, and virtual assistance services. Specific deliverables, timelines, and pricing will be agreed upon before starting any project.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">2. Payment Terms</h2>
              <p className="text-muted leading-relaxed">Payment is due upon agreement of project scope. For hourly services, invoices are sent weekly or monthly as agreed. All payments are non-refundable unless covered by our Refund Policy.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">3. Client Responsibilities</h2>
              <p className="text-muted leading-relaxed">Clients are responsible for providing necessary information, access, and feedback in a timely manner. Delays in providing required materials may affect project timelines.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">4. Intellectual Property</h2>
              <p className="text-muted leading-relaxed">Upon full payment, all deliverables become the property of the client. Lead Clash reserves the right to showcase work samples in our portfolio unless otherwise agreed.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">5. Limitation of Liability</h2>
              <p className="text-muted leading-relaxed">Lead Clash shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the specific service in question.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">6. Modifications</h2>
              <p className="text-muted leading-relaxed">We reserve the right to modify these terms at any time. Changes will be communicated through our website.</p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
