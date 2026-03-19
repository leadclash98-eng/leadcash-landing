import AnimateIn from "@/components/AnimateIn";

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <AnimateIn>
          <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>
          <p className="text-muted mb-8">Last updated: March 2026</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
              <p className="text-muted leading-relaxed">We collect information you provide directly, including your name, email address, company name, and project details when you fill out our contact form or communicate with us.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
              <p className="text-muted leading-relaxed">We use the information we collect to provide our services, communicate with you about projects, send relevant updates, and improve our service quality. We never sell your personal information to third parties.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">3. Data Security</h2>
              <p className="text-muted leading-relaxed">We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">4. Third-Party Services</h2>
              <p className="text-muted leading-relaxed">We may use third-party tools for analytics, communication, and project management. These services have their own privacy policies governing the use of your information.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">5. Your Rights</h2>
              <p className="text-muted leading-relaxed">You have the right to access, correct, or delete your personal information at any time. Contact us at hello@leadclash.com to exercise these rights.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">6. Contact</h2>
              <p className="text-muted leading-relaxed">If you have questions about this Privacy Policy, please contact us at hello@leadclash.com.</p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
