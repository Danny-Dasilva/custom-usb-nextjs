import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Privacy Policy - Custom USB Source",
  description: "Privacy policy for Custom USB Source website and services. Learn how we protect and handle your personal information.",
  keywords: "privacy policy, data protection, personal information, custom usb source",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
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
            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, 
              make a purchase, request a quote, or contact us for support.
            </p>

            <h3>Personal Information</h3>
            <ul>
              <li>Name and contact information (email, phone, address)</li>
              <li>Company information and business details</li>
              <li>Payment and billing information</li>
              <li>Project specifications and custom design requirements</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process and fulfill your orders and quote requests</li>
              <li>Communicate with you about your projects and orders</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Improve our products and services</li>
              <li>Send promotional communications (with your consent)</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy.
            </p>

            <h3>We may share information with:</h3>
            <ul>
              <li>Manufacturing partners (only information necessary to fulfill orders)</li>
              <li>Shipping and logistics providers</li>
              <li>Professional service providers (accounting, legal, etc.)</li>
              <li>Law enforcement when required by law</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of promotional communications</li>
            </ul>

            <h2>Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to improve your browsing experience, 
              analyze website traffic, and personalize content.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <ul>
              <li>Email: privacy@customusbsource.com</li>
              <li>Phone: 1-888-720-8727</li>
            </ul>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any 
              changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}