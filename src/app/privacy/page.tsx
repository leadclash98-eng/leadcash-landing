import AnimateIn from "@/components/AnimateIn";

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <AnimateIn>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-muted mb-8">Last updated: March 25, 2026</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <p className="text-muted leading-relaxed">
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>
              <p className="text-muted leading-relaxed mt-3">
                We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Interpretation and Definitions</h2>
              <h3 className="text-lg font-semibold mb-2">Interpretation</h3>
              <p className="text-muted leading-relaxed mb-4">
                The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
              <h3 className="text-lg font-semibold mb-2">Definitions</h3>
              <p className="text-muted leading-relaxed mb-2">For the purposes of this Privacy Policy:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted leading-relaxed">
                <li><strong className="text-foreground">Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                <li><strong className="text-foreground">Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party.</li>
                <li><strong className="text-foreground">Company</strong> refers to Lead Clash, 24/A Samagi MW, Malwathuhiripitiya, Buthpitiya.</li>
                <li><strong className="text-foreground">Cookies</strong> are small files placed on Your device containing browsing data.</li>
                <li><strong className="text-foreground">Country</strong> refers to: Sri Lanka</li>
                <li><strong className="text-foreground">Device</strong> means any device that can access the Service.</li>
                <li><strong className="text-foreground">Personal Data</strong> means any information that relates to an identifiable individual.</li>
                <li><strong className="text-foreground">Service</strong> refers to the Website.</li>
                <li><strong className="text-foreground">Service Provider</strong> means third parties processing data on behalf of the Company.</li>
                <li><strong className="text-foreground">Usage Data</strong> refers to automatically collected data.</li>
                <li><strong className="text-foreground">Website</strong> refers to Lead Clash, accessible from <a href="https://leadclash.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://leadclash.com/</a></li>
                <li><strong className="text-foreground">You</strong> means the individual or entity using the Service.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Collecting and Using Your Personal Data</h2>
              <h3 className="text-lg font-semibold mb-2">Types of Data Collected</h3>
              <h4 className="text-base font-semibold mb-2">Personal Data</h4>
              <p className="text-muted leading-relaxed mb-2">We may collect:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed mb-4">
                <li>Email address</li>
                <li>First and last name</li>
                <li>Phone number</li>
                <li>Usage Data</li>
              </ul>
              <h4 className="text-base font-semibold mb-2">Usage Data</h4>
              <p className="text-muted leading-relaxed mb-2">Collected automatically and may include:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed">
                <li>IP address</li>
                <li>Browser type/version</li>
                <li>Pages visited</li>
                <li>Time and date of visit</li>
                <li>Device identifiers</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Tracking Technologies and Cookies</h2>
              <p className="text-muted leading-relaxed mb-3">
                We use Cookies and similar technologies (beacons, tags, scripts) to improve and analyze Our Service.
              </p>
              <p className="text-muted leading-relaxed mb-2">Types include:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed mb-3">
                <li><strong className="text-foreground">Session Cookies</strong> (deleted after browser close)</li>
                <li><strong className="text-foreground">Persistent Cookies</strong> (stored on device)</li>
              </ul>
              <p className="text-muted leading-relaxed mb-2">We use:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed mb-3">
                <li><strong className="text-foreground">Essential Cookies</strong> for core functionality</li>
                <li><strong className="text-foreground">Acceptance Cookies</strong> to track cookie consent</li>
                <li><strong className="text-foreground">Functionality Cookies</strong> to remember preferences</li>
              </ul>
              <p className="text-muted leading-relaxed">You can control cookies via your browser settings.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Use of Your Personal Data</h2>
              <p className="text-muted leading-relaxed mb-2">We use Personal Data to:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed">
                <li>Provide and maintain the Service</li>
                <li>Manage accounts</li>
                <li>Perform contracts</li>
                <li>Contact You (email, phone, notifications)</li>
                <li>Send offers and updates</li>
                <li>Manage requests</li>
                <li>Handle business transfers</li>
                <li>Improve services and marketing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Sharing Your Personal Data</h2>
              <p className="text-muted leading-relaxed mb-2">We may share data:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed">
                <li>With Service Providers</li>
                <li>During business transfers</li>
                <li>With Affiliates</li>
                <li>With business partners</li>
                <li>In public areas (if applicable)</li>
                <li>With Your consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Retention of Your Personal Data</h2>
              <p className="text-muted leading-relaxed mb-2">We retain data only as long as necessary. Examples:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed mb-3">
                <li>Accounts: duration + up to 24 months</li>
                <li>Support data: up to 24 months</li>
                <li>Analytics & logs: up to 24 months</li>
              </ul>
              <p className="text-muted leading-relaxed mb-2">Data may be retained longer for:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed mb-3">
                <li>Legal obligations</li>
                <li>Legal claims</li>
                <li>User requests</li>
                <li>Backup systems</li>
              </ul>
              <p className="text-muted leading-relaxed">After retention, data is deleted or anonymized.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Transfer of Your Personal Data</h2>
              <p className="text-muted leading-relaxed">Your data may be processed outside your country. We ensure appropriate safeguards are in place.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Delete Your Personal Data</h2>
              <p className="text-muted leading-relaxed mb-2">You can:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed mb-3">
                <li>Access, update, or delete your data</li>
                <li>Contact us for assistance</li>
              </ul>
              <p className="text-muted leading-relaxed">We may retain data if legally required.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Disclosure of Your Personal Data</h2>
              <h3 className="text-lg font-semibold mb-2">Business Transactions</h3>
              <p className="text-muted leading-relaxed mb-4">Data may transfer during mergers or sales.</p>
              <h3 className="text-lg font-semibold mb-2">Law Enforcement</h3>
              <p className="text-muted leading-relaxed mb-4">Data may be disclosed if required by law.</p>
              <h3 className="text-lg font-semibold mb-2">Other Legal Requirements</h3>
              <p className="text-muted leading-relaxed mb-2">We may disclose data to:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted leading-relaxed">
                <li>Comply with law</li>
                <li>Protect rights</li>
                <li>Prevent wrongdoing</li>
                <li>Ensure safety</li>
                <li>Avoid legal liability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Security of Your Personal Data</h2>
              <p className="text-muted leading-relaxed">We use reasonable security measures but cannot guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Children&apos;s Privacy</h2>
              <p className="text-muted leading-relaxed">We do not knowingly collect data from individuals under 16. If detected, it will be removed.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Links to Other Websites</h2>
              <p className="text-muted leading-relaxed">We are not responsible for third-party websites linked from our Service.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Changes to this Privacy Policy</h2>
              <p className="text-muted leading-relaxed">We may update this policy and will notify users via the Website or email.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
              <p className="text-muted leading-relaxed">
                If you have questions, email us at{" "}
                <a href="mailto:yasiru@leadclash.com" className="text-primary hover:underline">yasiru@leadclash.com</a>
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
