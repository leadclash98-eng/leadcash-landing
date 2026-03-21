import AnimateIn from "@/components/AnimateIn";

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <AnimateIn>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Terms & Conditions</h1>
          <p className="text-muted mb-4">Last updated: March 25, 2026</p>
          <p className="text-muted leading-relaxed mb-8">
            Welcome to Lead Clash (&quot;Company&quot;, &quot;We&quot;, &quot;Us&quot;, or &quot;Our&quot;). These Terms & Conditions govern your use of our website located at{" "}
            <a href="https://leadclash.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://leadclash.com/</a>{" "}
            (the &quot;Service&quot;). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, please do not use the Service.
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-3">1. Use of the Service</h2>
              <p className="text-muted leading-relaxed mb-2">You agree to use the Service only for lawful purposes and in accordance with these Terms. You must not:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed mb-3">
                <li>Use the Service in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Use the Service to send spam or unauthorized communications</li>
              </ul>
              <p className="text-muted leading-relaxed">We reserve the right to suspend or terminate access if these Terms are violated.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">2. Accounts</h2>
              <p className="text-muted leading-relaxed mb-2">If you create an account with us, you are responsible for:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed mb-3">
                <li>Maintaining the confidentiality of your login credentials</li>
                <li>All activities that occur under your account</li>
              </ul>
              <p className="text-muted leading-relaxed">You agree to provide accurate and complete information at all times. We reserve the right to suspend or terminate accounts at our discretion.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">3. Services</h2>
              <p className="text-muted leading-relaxed mb-2">Lead Clash provides outbound marketing, lead generation, and related services. We do not guarantee:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed mb-3">
                <li>Specific results (e.g., number of leads, conversions, or revenue)</li>
                <li>Continuous or uninterrupted service availability</li>
              </ul>
              <p className="text-muted leading-relaxed">Results may vary depending on factors outside our control.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">4. Payments & Refunds</h2>
              <p className="text-muted leading-relaxed mb-2">If you purchase any paid services:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed mb-3">
                <li>You agree to pay all applicable fees as agreed</li>
                <li>Payments are non-refundable unless otherwise stated in writing</li>
                <li>We reserve the right to change pricing at any time</li>
              </ul>
              <p className="text-muted leading-relaxed">Failure to pay may result in suspension or termination of services.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">5. Intellectual Property</h2>
              <p className="text-muted leading-relaxed mb-2">All content on this website, including:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed mb-3">
                <li>Text</li>
                <li>Graphics</li>
                <li>Logos</li>
                <li>Software</li>
              </ul>
              <p className="text-muted leading-relaxed">is the property of Lead Clash or its licensors and is protected by intellectual property laws. You may not copy, reproduce, or distribute any content without prior written permission.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">6. User Content</h2>
              <p className="text-muted leading-relaxed mb-2">If you submit or share any content with us:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed mb-3">
                <li>You grant us a non-exclusive, worldwide license to use it for service delivery</li>
                <li>You confirm that you have the right to share that content</li>
              </ul>
              <p className="text-muted leading-relaxed">We are not responsible for user-submitted content.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">7. Third-Party Services</h2>
              <p className="text-muted leading-relaxed mb-2">Our Service may include integrations or links to third-party tools or websites. We are not responsible for:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed mb-3">
                <li>Their content</li>
                <li>Their policies</li>
                <li>Their performance</li>
              </ul>
              <p className="text-muted leading-relaxed">Use them at your own risk.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">8. Limitation of Liability</h2>
              <p className="text-muted leading-relaxed mb-2">To the maximum extent permitted by law, Lead Clash shall not be liable for:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed mb-3">
                <li>Any indirect, incidental, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
              </ul>
              <p className="text-muted leading-relaxed">Your use of the Service is at your own risk.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">9. Disclaimer</h2>
              <p className="text-muted leading-relaxed mb-2">The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind. We do not guarantee that:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed">
                <li>The Service will meet your expectations</li>
                <li>The Service will be error-free or uninterrupted</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">10. Termination</h2>
              <p className="text-muted leading-relaxed mb-2">We may suspend or terminate your access at any time, without prior notice, if:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed">
                <li>You violate these Terms</li>
                <li>We believe your use may harm our business or users</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">11. Governing Law</h2>
              <p className="text-muted leading-relaxed">These Terms shall be governed by and interpreted in accordance with the laws of Sri Lanka, without regard to conflict of law principles.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">12. Changes to These Terms</h2>
              <p className="text-muted leading-relaxed">We may update these Terms at any time. We will notify users by updating the &quot;Last updated&quot; date. Continued use of the Service means you accept the revised Terms.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">13. Contact Us</h2>
              <p className="text-muted leading-relaxed">
                If you have any questions about these Terms, email us at{" "}
                <a href="mailto:yasiru@leadclash.com" className="text-primary hover:underline">yasiru@leadclash.com</a>
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
