import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Cable, Smartphone, Laptop, Zap } from "lucide-react";

export const metadata = {
  title: "100% Custom Cables - Custom USB Source",
  description: "Custom charging cables for promotional gifts. Link your brand while clients link to their devices. Cost-effective daily use promotional products.",
  keywords: "custom cables, promotional charging cables, branded usb cables, custom phone chargers, promotional tech accessories",
};

const features = [
  {
    icon: Cable,
    title: "Universal Compatibility",
    description: "Support for USB-C, Lightning, Micro USB, and other popular connector types for maximum device compatibility."
  },
  {
    icon: Zap,
    title: "Fast Charging",
    description: "High-quality conductors ensure efficient power delivery and fast data transfer speeds."
  },
  {
    icon: Smartphone,
    title: "Daily Use Value",
    description: "Essential accessories that clients use multiple times daily, ensuring constant brand exposure."
  },
  {
    icon: Laptop,
    title: "Multi-Device Support",
    description: "Compatible with smartphones, tablets, laptops, and other portable electronic devices."
  }
];

const cableTypes = [
  {
    title: "USB-C Cables",
    description: "Modern connector for newest smartphones, tablets, and laptops",
    features: ["Fast charging support", "Data sync capability", "Reversible connector", "Future-proof technology"]
  },
  {
    title: "Lightning Cables", 
    description: "Compatible with iPhone and iPad devices",
    features: ["MFi certified options", "Fast charging support", "Durable construction", "Apple device optimization"]
  },
  {
    title: "Micro USB Cables",
    description: "Classic connector for older Android devices and accessories",
    features: ["Wide compatibility", "Cost-effective option", "Reliable connection", "Universal standard"]
  },
  {
    title: "Multi-Connector Cables",
    description: "3-in-1 cables with multiple connector types",
    features: ["Maximum versatility", "Reduce cable clutter", "Travel-friendly design", "Universal compatibility"]
  }
];

export default function CustomCablesPage() {
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
            <span className="text-gray-900">Custom Cables</span>
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
                100% Custom Cables
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With our Custom Cables you can link you brand while your client is linking to their 
                computer or portable device. Like your custom ear buds, these make for a cost effective 
                promotional gift that is sure to be used on a daily basis by your clients.
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
                src="/images/categories/Custom-Cable.jpg"
                alt="Custom Cables"
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
            Cable Features & Benefits
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

      {/* Cable Types Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Cable Type Options
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cableTypes.map((cable) => (
              <div key={cable.title} className="bg-white p-6 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {cable.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {cable.description}
                </p>
                <ul className="space-y-1">
                  {cable.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Custom Cable Examples
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/categories/Custom-Cable.jpg"
                alt="Custom Cable Design 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/categories/Custom-Cable1-1024x530.jpg"
                alt="Custom Cable Design 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Custom Cables Make Great Promotional Gifts
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Essential Daily Use
                </h3>
                <p className="text-gray-600">
                  Everyone needs charging cables for their devices, ensuring your branded cable gets used regularly.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Professional Appeal
                </h3>
                <p className="text-gray-600">
                  Tech accessories are perceived as valuable, useful gifts that reflect well on your brand.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Brand Visibility
                </h3>
                <p className="text-gray-600">
                  Used in offices, homes, and public spaces, providing consistent brand exposure to users and observers.
                </p>
              </div>
            </div>
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
                  Cable Specifications
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Length Options:</strong> 1m, 1.5m, 2m standard</li>
                  <li><strong>Data Transfer:</strong> Up to 480 Mbps (USB 2.0)</li>
                  <li><strong>Charging Speed:</strong> Up to 2.4A fast charging</li>
                  <li><strong>Durability:</strong> 10,000+ bend test cycles</li>
                  <li><strong>Materials:</strong> TPE, PVC, braided nylon options</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Customization Options
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Colors:</strong> Any Pantone color match available</li>
                  <li><strong>Printing:</strong> Screen printing, heat transfer</li>
                  <li><strong>Packaging:</strong> Custom retail packaging options</li>
                  <li><strong>Minimum Order:</strong> 500 pieces</li>
                  <li><strong>Lead Time:</strong> 12-18 business days</li>
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
              Connect Your Brand to Daily Life
            </h2>
            <p className="text-xl mb-8 text-primary-50">
              Create custom cables that link your brand to your clients&apos; essential daily tech needs. 
              A practical gift they&apos;ll use and appreciate every day.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/quick-quote" 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Start Your Cable Project
              </Button>
              <Button 
                href="mailto:sales@customusbsource.com" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Discuss Cable Options
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}