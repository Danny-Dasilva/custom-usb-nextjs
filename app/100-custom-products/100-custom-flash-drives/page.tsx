import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Cpu, Palette, Shield, Zap } from "lucide-react";

export const metadata = {
  title: "100% Custom Flash Drives - Custom USB Source",
  description: "Fully custom USB flash drives manufactured to your exact specifications. Transform concepts into attention-grabbing promotional USB drives.",
  keywords: "100% custom usb drives, custom flash drives, promotional usb, branded usb drives, concept to usb",
};

const features = [
  {
    icon: Palette,
    title: "Unlimited Design Options",
    description: "Transform any concept, logo, or idea into a functional USB drive with complete design freedom."
  },
  {
    icon: Cpu,
    title: "Multiple Capacities",
    description: "Available from 1GB to 128GB to meet any storage requirement for your promotional needs."
  },
  {
    icon: Shield,
    title: "Quality Manufacturing",
    description: "Precision manufacturing with rigorous quality control to ensure reliable performance."
  },
  {
    icon: Zap,
    title: "Fast Production",
    description: "Efficient production process from concept approval to finished product delivery."
  }
];

const galleryImages = [
  {
    src: "/images/categories/Custom-Flash-Drive-1024x530.jpg",
    alt: "Custom Flash Drive Designs"
  },
  {
    src: "/images/products/Push-Button-SliderET-806USB.png", 
    alt: "Push Button Slider USB"
  },
  {
    src: "/images/products/PouchET-604-1USB.png",
    alt: "Pouch USB Drive"
  },
  {
    src: "/images/products/ClicksterET-226-2.png",
    alt: "Clickster USB Drive"
  }
];

export default function CustomFlashDrivesPage() {
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
            <span className="text-gray-900">Custom Flash Drives</span>
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
                100% Custom USB Drives
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Custom USB drives are our specialty. Whether you are trying to take a concept and 
                turn it into an attention grabbing USB drive or you need an exact replica, we can 
                meet your needs in a timely, cost effective manner.
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
                src="/images/categories/Custom-Flash-Drive-1024x530.jpg"
                alt="Custom Flash Drives"
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
            Why Choose Custom Flash Drives?
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
            Custom Design Examples
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="relative h-48 mb-4">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm text-gray-600 text-center">{image.alt}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Custom Design Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Concept Review</h3>
                <p className="text-gray-600 text-sm">
                  Share your concept, logo, or reference design with our team
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">3D Modeling</h3>
                <p className="text-gray-600 text-sm">
                  Our designers create detailed 3D models for your approval
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Mold Creation</h3>
                <p className="text-gray-600 text-sm">
                  Custom molds are created for your unique design
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Production</h3>
                <p className="text-gray-600 text-sm">
                  Your custom USB drives are manufactured and quality tested
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Technical Options
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Storage Capacities
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 1GB - 4GB (Standard promotional use)</li>
                  <li>• 8GB - 16GB (Business presentations)</li>
                  <li>• 32GB - 64GB (Media and software distribution)</li>
                  <li>• 128GB+ (High-capacity requirements)</li>
                  <li>• USB 2.0 and USB 3.0 options available</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Production Details
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Minimum Order: 100 pieces</li>
                  <li>• Lead Time: 15-25 business days</li>
                  <li>• Materials: PVC, ABS plastic, or rubber</li>
                  <li>• Data preloading available</li>
                  <li>• Custom packaging options</li>
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
              Transform Your Concept Into Reality
            </h2>
            <p className="text-xl mb-8 text-primary-50">
              Ready to create a custom USB drive that perfectly represents your brand? 
              Our team specializes in bringing unique concepts to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/quick-quote" 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Start Your Design
              </Button>
              <Button 
                href="mailto:sales@customusbsource.com" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Discuss Your Project
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}