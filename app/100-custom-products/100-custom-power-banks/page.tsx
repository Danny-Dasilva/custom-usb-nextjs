import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Battery, Shield, Smartphone, Zap } from "lucide-react";

export const metadata = {
  title: "100% Custom Power Banks - Custom USB Source",
  description: "Custom power banks with 2,600 MAH capacity. Print or custom mold your power bank to make it unique and reinforce your brand.",
  keywords: "custom power banks, promotional power banks, branded battery packs, custom charging solutions",
};

const features = [
  {
    icon: Battery,
    title: "2,600 MAH Capacity",
    description: "Standard high-capacity battery providing reliable charging power for smartphones and tablets."
  },
  {
    icon: Shield,
    title: "Quality Assurance", 
    description: "Every power bank undergoes rigorous testing to ensure safety and reliability standards."
  },
  {
    icon: Smartphone,
    title: "Universal Compatibility",
    description: "Compatible with all major smartphone brands and mobile devices via USB charging."
  },
  {
    icon: Zap,
    title: "Fast Charging",
    description: "Efficient charging technology to quickly power up your devices when you need it most."
  }
];

const galleryImages = [
  "/images/categories/Custom-Power-Bank-1024x530.jpg",
  "/images/categories/plastic.jpg", 
  "/images/categories/all.jpg"
];

export default function CustomPowerBanksPage() {
  return (
    <>
      {/* Breadcrumb */}
      <section className="py-6 border-b border-gray-200">
        <Container>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/100-custom-products" className="hover:text-primary">
              100% Custom Products
            </Link>
            <span>/</span>
            <span className="text-gray-900">Custom Power Banks</span>
          </div>
        </Container>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <Link
            href="/100-custom-products"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Custom Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Custom Power Banks
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Enable your clients to recharge while reenforcing your brand with our Custom Power Bank. 
                We have a variety of options to print or custom mold your power bank to make it unique 
                so it will stand out in a crowd. We offer a standard 2,600 MAH giving you a solid 
                product that offers a reliable charge.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/quick-quote" size="lg">
                  Get Custom Quote
                </Button>
                <Button href="tel:1-888-720-8727" variant="outline" size="lg">
                  Call 1-888-720-8727
                </Button>
              </div>
            </div>

            <div className="relative h-96">
              <Image
                src="/images/categories/Custom-Power-Bank-1024x530.jpg"
                alt="Custom Power Banks"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Power Bank Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Product Gallery
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`Custom Power Bank Example ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Specifications */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Technical Specifications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Power Specifications
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Capacity:</strong> 2,600 MAH</li>
                  <li><strong>Input:</strong> 5V/1A Micro USB</li>
                  <li><strong>Output:</strong> 5V/1A USB</li>
                  <li><strong>Charging Time:</strong> 3-4 hours</li>
                  <li><strong>Battery Type:</strong> Lithium Polymer</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Customization Options
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Printing:</strong> Screen printing, pad printing</li>
                  <li><strong>Custom Molding:</strong> Full custom shapes available</li>
                  <li><strong>Colors:</strong> Any Pantone color match</li>
                  <li><strong>Minimum Order:</strong> 200 pieces</li>
                  <li><strong>Lead Time:</strong> 15-20 business days</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Create Your Custom Power Bank?
            </h2>
            <p className="text-xl mb-8 text-primary-50">
              Let&apos;s design a power bank that keeps your brand charged and visible 
              every time your clients need power on the go.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/quick-quote" 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Start Your Project
              </Button>
              <Button 
                href="mailto:sales@customusbsource.com" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Email Our Team
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}