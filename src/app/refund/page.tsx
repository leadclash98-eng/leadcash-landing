import AnimateIn from "@/components/AnimateIn";

export default function RefundPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <AnimateIn>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Refund Policy</h1>
          <p className="text-muted mb-4">Last updated: March 25, 2026</p>
          <p className="text-muted leading-relaxed mb-8">
            At Lead Clash, we are committed to delivering high-quality outbound marketing and digital support services. This Refund Policy outlines the terms and conditions under which refunds may be issued.
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-3">1. General Refund Policy</h2>
              <p className="text-muted leading-relaxed">All refund requests are reviewed on a case-by-case basis. We aim to resolve any concerns before issuing a refund.</p>
              <p className="text-muted leading-relaxed mt-2"><strong className="text-foreground">Important:</strong> All approved refunds will be processed to the original payment method used. Refunds will not be sent to alternative accounts or third parties.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">2. Hourly Services</h2>
              <p className="text-muted leading-relaxed mb-3">(LinkedIn Lead Generation, Graphic Design & Video Editing, Virtual Assistance & Outreach Support)</p>

              <h3 className="text-lg font-semibold mb-2">Before Work Starts</h3>
              <p className="text-muted leading-relaxed mb-4">If you cancel before any work has started, you are eligible for a full refund minus a 10% administrative fee.</p>

              <h3 className="text-lg font-semibold mb-2">After Work Has Started</h3>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed mb-4">
                <li>You will only be charged for the hours already worked</li>
                <li>Any remaining unused balance (if prepaid) will be refunded</li>
                <li>No refunds will be issued for completed and delivered work</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">After Work Delivery</h3>
              <p className="text-muted leading-relaxed">Once work has been delivered, no refunds will be issued. We will, however, make reasonable revisions where applicable to ensure satisfaction.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">3. Fixed-Price Services</h2>
              <p className="text-muted leading-relaxed mb-3">(LinkedIn Profile Optimization - $70)</p>

              <h3 className="text-lg font-semibold mb-2">Before Delivery</h3>
              <p className="text-muted leading-relaxed mb-4">If you cancel before the first draft or work delivery, you are eligible for a full refund minus a 10% administrative fee.</p>

              <h3 className="text-lg font-semibold mb-2">After Initial Delivery</h3>
              <p className="text-muted leading-relaxed mb-2">Once the first version of the work has been delivered:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed mb-4">
                <li>No refunds will be issued</li>
                <li>We will provide revisions based on the agreed scope</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">After Final Approval</h3>
              <p className="text-muted leading-relaxed">Once the final work is delivered and approved, no refunds will be issued.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">4. Service Dissatisfaction</h2>
              <p className="text-muted leading-relaxed mb-2">If you are not satisfied with our services:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed mb-3">
                <li>Please contact us within 7 days of delivery or service start</li>
                <li>We will work with you to resolve the issue through revisions or adjustments</li>
              </ul>
              <p className="text-muted leading-relaxed">Refunds in such cases are issued only under exceptional circumstances and at our sole discretion.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">5. Non-Refundable Costs</h2>
              <p className="text-muted leading-relaxed mb-2">The following are non-refundable under any circumstances:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed">
                <li>Completed work (hourly or fixed)</li>
                <li>Time already spent on services</li>
                <li>Consultation or strategy sessions</li>
                <li>Third-party costs (if applicable)</li>
                <li>Setup or onboarding efforts</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">6. Refund Processing Timeline</h2>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed mb-3">
                <li>Approved refunds will be processed within 7-14 business days</li>
                <li>Refunds will be issued to the original payment method</li>
                <li>Depending on your bank/payment provider, it may take an additional 5-10 business days to reflect</li>
              </ul>
              <p className="text-muted leading-relaxed">You will receive a confirmation once the refund is processed.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">7. How to Request a Refund</h2>
              <p className="text-muted leading-relaxed mb-2">To request a refund, please contact:</p>
              <p className="text-muted leading-relaxed mb-2">
                Email: <a href="mailto:yasiru@leadclash.com" className="text-primary hover:underline">yasiru@leadclash.com</a><br />
                Subject Line: Refund Request - [Your Name / Service]
              </p>
              <p className="text-muted leading-relaxed mb-2">Please include:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed mb-3">
                <li>Your full name</li>
                <li>Payment or invoice reference</li>
                <li>Service purchased</li>
                <li>Reason for refund request</li>
                <li>Any supporting details</li>
              </ul>
              <p className="text-muted leading-relaxed">We will respond within 2-3 business days.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">8. Chargebacks & Disputes</h2>
              <p className="text-muted leading-relaxed mb-2">Before initiating a chargeback, please contact us first. If a chargeback is initiated without prior communication:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed mb-3">
                <li>We reserve the right to suspend or terminate services immediately</li>
                <li>We may dispute the chargeback with supporting evidence</li>
              </ul>
              <p className="text-muted leading-relaxed">We are committed to resolving issues fairly and professionally.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">9. Changes to This Refund Policy</h2>
              <p className="text-muted leading-relaxed">Lead Clash reserves the right to update or modify this Refund Policy at any time. Updates will be posted on this page with a revised &quot;Last Updated&quot; date. Continued use of our services means you accept the updated policy.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">10. Contact Information</h2>
              <p className="text-muted leading-relaxed">
                For any questions regarding this Refund Policy:<br />
                Lead Clash<br />
                Email: <a href="mailto:yasiru@leadclash.com" className="text-primary hover:underline">yasiru@leadclash.com</a><br />
                Website: <a href="https://leadclash.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://leadclash.com/</a>
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
