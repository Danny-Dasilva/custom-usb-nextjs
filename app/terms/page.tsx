import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Terms of Service - Custom USB Source",
  description: "Terms of service for Custom USB Source. Review our terms and conditions for using our services and purchasing custom products.",
  keywords: "terms of service, terms and conditions, custom usb source, legal terms",
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: June 20, 2024
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using Custom USB Source services, you accept and agree to be bound by 
              the terms and provision of this agreement.
            </p>

            <h2>Services</h2>
            <p>
              Custom USB Source provides custom manufacturing services for USB drives, power banks, 
              ear buds, cables, and related promotional products.
            </p>

            <h2>Ordering and Payment</h2>
            <h3>Orders</h3>
            <ul>
              <li>All orders are subject to acceptance by Custom USB Source</li>
              <li>Minimum order quantities apply as specified for each product</li>
              <li>Prices are subject to change without notice</li>
              <li>Orders require signed approval of artwork/designs before production</li>
            </ul>

            <h3>Payment Terms</h3>
            <ul>
              <li>50% deposit required before production begins</li>
              <li>Final payment due before shipment</li>
              <li>Accepted payment methods: wire transfer, credit card, company check</li>
              <li>Late payments may incur additional fees</li>
            </ul>

            <h2>Production and Delivery</h2>
            <h3>Production Times</h3>
            <ul>
              <li>Standard production: 15-20 business days after artwork approval</li>
              <li>Rush orders available for additional fees</li>
              <li>Production times may vary based on order complexity and quantity</li>
            </ul>

            <h3>Shipping</h3>
            <ul>
              <li>Standard shipping is included for most orders</li>
              <li>Express shipping available for additional cost</li>
              <li>International shipping rates and duties apply for overseas orders</li>
              <li>Risk of loss transfers upon shipment</li>
            </ul>

            <h2>Quality and Warranties</h2>
            <h3>Product Warranties</h3>
            <ul>
              <li>USB Drives: 5-year warranty against manufacturing defects</li>
              <li>Power Banks: 1-year warranty</li>
              <li>Ear Buds and Cables: 6-month warranty</li>
              <li>Warranty covers manufacturing defects only</li>
            </ul>

            <h3>Quality Standards</h3>
            <ul>
              <li>All products undergo quality control testing</li>
              <li>Defective products will be replaced at no charge</li>
              <li>Claims must be made within 30 days of delivery</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              You retain ownership of your logos, designs, and trademarks. You grant us license 
              to use these materials solely for manufacturing your custom products.
            </p>

            <h3>Client Responsibilities</h3>
            <ul>
              <li>Ensure you have rights to all provided artwork and logos</li>
              <li>Indemnify Custom USB Source against IP infringement claims</li>
              <li>Approve final designs before production begins</li>
            </ul>

            <h2>Cancellations and Returns</h2>
            <h3>Cancellations</h3>
            <ul>
              <li>Orders may be cancelled before production begins</li>
              <li>Cancellation fees may apply for design work completed</li>
              <li>No cancellations accepted once production has started</li>
            </ul>

            <h3>Returns</h3>
            <ul>
              <li>Custom products are non-returnable unless defective</li>
              <li>Returns must be authorized in advance</li>
              <li>Return shipping costs are customer&apos;s responsibility</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              Custom USB Source&apos;s liability is limited to the cost of the products ordered. 
              We are not liable for indirect, consequential, or special damages.
            </p>

            <h2>Force Majeure</h2>
            <p>
              We are not responsible for delays caused by circumstances beyond our control, 
              including natural disasters, shipping delays, or manufacturing issues.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of the United States. Any disputes will be 
              resolved through binding arbitration.
            </p>

            <h2>Contact Information</h2>
            <p>
              Questions about these terms should be directed to:
            </p>
            <ul>
              <li>Email: legal@customusbsource.com</li>
              <li>Phone: 1-888-720-8727</li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}