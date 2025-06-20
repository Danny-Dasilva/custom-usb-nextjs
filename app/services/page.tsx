import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Database, Palette, Globe, Printer, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Services - Custom USB Source",
  description: "Custom USB Source offers a wide range of services including preloaded data, 100% custom designs, custom sourcing, and logo printing for USB drives and promotional products.",
  keywords: "custom usb services, data preloading, custom design, logo printing, manufacturing sourcing",
};

const services = [
  {
    icon: Database,
    title: "Preloaded Data",
    description: "We offer a wide variety of hassle free ways to preload your data onto your USB Flash Drive. This is an excellent way to get information out to your clients without the extra cost and wastefulness associated with traditional printed promo materials.",
    features: [
      "Data Preload",
      "Menu Prompt Auto-run", 
      "Auto-Play Auto-run",
      "Encrypted Drives",
      "Non-Erasable Content"
    ]
  },
  {
    icon: Palette,
    title: "100% Custom Designs",
    description: "At CustomUsbSource.com we specialize in concept designs and exact replicas. Our design team will work with you to take a concept, logo or existing design and produce a Flash Drive, Power Bank, Ear Buds or Cable that will grab the attention of your clients and make a lasting impression.",
    features: [
      "Concept to Reality",
      "Logo Integration",
      "Exact Replicas", 
      "Brand Enhancement",
      "Lasting Impressions"
    ]
  },
  {
    icon: Globe,
    title: "Custom Sourcing",
    description: "With an office located in China, we are in the heart of the world's technology manufacturing hub. Our team has over a decade of presence in the Chinese manufacturing sector and a wealth of personal relationships all over the world.",
    features: [
      "Manufacturing Sourcing",
      "Quality Control",
      "Timely Delivery",
      "Global Relationships",
      "Safe Shipping"
    ]
  },
  {
    icon: Printer,
    title: "Custom Flash Drives with Logo",
    description: "We offer a wide range of printing options from engraving to four color printing. Talk with your representative about which printing options will work best with the USB drive you are looking to purchase.",
    features: [
      "Logo Engraving",
      "Four Color Printing",
      "Custom Printing",
      "Professional Consultation",
      "Quality Finishing"
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Custom USB Source offers a wide range of services to meet your custom product needs.
            </p>
            <p className="text-lg text-primary font-medium">
              We&apos;d love to meet you and find you the perfect solution.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Service Features:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              How We Work
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Consultation</h3>
                <p className="text-gray-600 text-sm">
                  Discuss your needs and get expert recommendations
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Design</h3>
                <p className="text-gray-600 text-sm">
                  Create custom designs and 3D models for approval
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Production</h3>
                <p className="text-gray-600 text-sm">
                  Manufacture with quality control and testing
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Delivery</h3>
                <p className="text-gray-600 text-sm">
                  Safe and timely delivery anywhere in the world
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-primary-50">
              Contact us today to discuss your custom product needs and receive a free quote.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 p-4 bg-white/10 rounded-lg">
                <Phone className="h-6 w-6" />
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-primary-100">1-888-720-8727</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 p-4 bg-white/10 rounded-lg">
                <Mail className="h-6 w-6" />
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-primary-100">sales@customusbsource.com</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/quick-quote" 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Get a Quick Quote
              </Button>
              <Button 
                href="tel:1-888-720-8727" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Call Now
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}