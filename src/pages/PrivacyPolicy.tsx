import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container-rev pt-32 pb-20">
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-6">Last updated: December 2024</p>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">1. Introduction</h2>
            <p>
              At TheRevVault, we are committed to protecting your privacy. This Privacy Policy explains how we 
              collect, use, disclose, and safeguard your information when you visit our website and make purchases.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">2. Information We Collect</h2>
            <h3 className="text-lg text-foreground mt-4 mb-2">Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information (email, phone number)</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Vehicle information (make, model, year) for product compatibility</li>
              <li>Order history and preferences</li>
            </ul>

            <h3 className="text-lg text-foreground mt-4 mb-2">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website and search terms</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Send order confirmations and shipping updates</li>
              <li>Respond to customer service inquiries</li>
              <li>Send promotional emails and newsletters (with your consent)</li>
              <li>Improve our website and product offerings</li>
              <li>Prevent fraud and enhance security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">4. Information Sharing</h2>
            <p className="mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Shipping carriers, payment processors, and email service providers</li>
              <li><strong>Business Partners:</strong> Product manufacturers for warranty purposes</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>
            <p className="mt-4">We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">5. Data Security</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We use SSL encryption to protect data transmission</li>
              <li>Payment information is processed through PCI-compliant payment processors</li>
              <li>Access to personal data is restricted to authorized personnel</li>
              <li>Regular security audits and updates are performed</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">6. Cookies Policy</h2>
            <p className="mb-4">We use cookies to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remember your preferences and cart items</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized product recommendations</li>
              <li>Enable social media features</li>
            </ul>
            <p className="mt-4">You can control cookies through your browser settings.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">7. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">8. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined 
              in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. 
              Order records are typically retained for 7 years for tax and legal purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy 
              practices of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">10. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under 18 years of age. We do not knowingly 
              collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with 
              an updated revision date. Continued use of our services constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">12. Contact Us</h2>
            <p>
              For questions or concerns about this Privacy Policy, please contact us at:<br />
              Email: privacy@therevvault.com<br />
              Response time: 24-48 business hours
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
