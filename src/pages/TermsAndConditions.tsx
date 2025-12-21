import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container-rev pt-32 pb-20">
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-8">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-6">Last updated: December 2024</p>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">1. Introduction</h2>
            <p>
              Welcome to TheRevVault. By accessing and using our website and services, you agree to be bound by these 
              Terms and Conditions. Please read them carefully before making any purchase.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">2. Products & Pricing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All products are imported premium automotive parts and accessories.</li>
              <li>Prices are listed in the local currency and are subject to change without notice.</li>
              <li>Product availability is subject to stock levels.</li>
              <li>Images are for illustration purposes; actual products may vary slightly.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">3. Ordering & Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orders are confirmed only after successful payment processing.</li>
              <li>We accept major credit cards, debit cards, and digital payment methods.</li>
              <li>Full payment is required at the time of order placement.</li>
              <li>Order confirmation will be sent via email within 24 hours.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">4. Shipping & Delivery</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Standard delivery takes 7-21 business days depending on location and product availability.</li>
              <li>Express shipping options may be available for select products at additional cost.</li>
              <li>Shipping costs are calculated at checkout based on order weight and destination.</li>
              <li>International orders may be subject to customs duties and import taxes.</li>
              <li>Delivery times are estimates and not guaranteed; delays may occur due to customs or logistics.</li>
              <li>Risk of loss transfers to the buyer upon delivery to the shipping carrier.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">5. Returns & Refunds</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Returns are accepted within 7 days of delivery for unused, unopened items in original packaging.</li>
              <li>Installed or used products cannot be returned.</li>
              <li>Customer is responsible for return shipping costs unless the item is defective.</li>
              <li>Refunds will be processed within 7-14 business days after receiving the returned item.</li>
              <li>Original shipping charges are non-refundable.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">6. Warranty</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Warranty coverage varies by product and manufacturer.</li>
              <li>Warranty claims must be made with proof of purchase.</li>
              <li>Warranty does not cover damage from improper installation, misuse, or accidents.</li>
              <li>We reserve the right to inspect products before approving warranty claims.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">7. Installation Disclaimer</h2>
            <p>
              We recommend professional installation for all products. TheRevVault is not responsible for any 
              damage, injury, or issues arising from improper installation. Always consult a certified mechanic 
              or professional installer.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">8. Limitation of Liability</h2>
            <p>
              TheRevVault shall not be liable for any indirect, incidental, special, or consequential damages 
              arising from the use of our products or services. Our maximum liability is limited to the purchase 
              price of the product.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-4">9. Contact Information</h2>
            <p>
              For questions regarding these Terms & Conditions, please contact us at:<br />
              Email: support@therevvault.com<br />
              Response time: 24-48 business hours
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
