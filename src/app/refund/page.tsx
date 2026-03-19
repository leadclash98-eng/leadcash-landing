import AnimateIn from "@/components/AnimateIn";

export default function RefundPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <AnimateIn>
          <h1 className="text-4xl font-bold tracking-tight mb-8">Refund Policy</h1>
          <p className="text-muted mb-8">Last updated: March 2026</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-3">1. Satisfaction Guarantee</h2>
              <p className="text-muted leading-relaxed">At Lead Clash, client satisfaction is our top priority. For services like LinkedIn optimization and graphic/video editing, we offer unlimited revisions until you are fully satisfied with the results.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">2. Refund Eligibility</h2>
              <p className="text-muted leading-relaxed">Refund requests must be submitted within 7 days of service delivery. Refunds are considered on a case-by-case basis and are applicable only if the delivered work significantly deviates from the agreed scope.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">3. Non-Refundable Services</h2>
              <p className="text-muted leading-relaxed">Hourly services (lead generation, virtual assistance) that have been rendered are non-refundable. However, you can cancel ongoing hourly services at any time without penalty.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">4. Cancellation Policy</h2>
              <p className="text-muted leading-relaxed">You may cancel any project before work begins for a full refund. If work has already started, the refund will be prorated based on the work completed.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">5. How to Request a Refund</h2>
              <p className="text-muted leading-relaxed">To request a refund, contact us at hello@leadclash.com with your project details and reason for the request. We will review and respond within 3 business days.</p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
