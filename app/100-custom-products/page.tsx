import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "100% Custom Products - Custom USB Source",
  description: "Custom USB drives, power banks, ear buds, and cables manufactured to your exact specifications. Transform your concept into functional promotional products.",
  keywords: "100% custom products, custom usb drives, custom power banks, custom ear buds, custom cables, promotional products",
};

const customProducts = [
  {
    title: "Custom Power Banks",
    slug: "100-custom-power-banks",
    image: "/images/categories/Custom-Power-Bank-1024x530.jpg",
    description: "Enable your clients to recharge while reenforcing your brand with our Custom Power Bank. We have a variety of options to print or custom mold your power bank to make it unique so it will stand out in a crowd. We offer a standard 2,600 MAH giving you a solid product that offers a reliable charge."
  },
  {
    title: "Custom Flash Drives",
    slug: "100-custom-flash-drives", 
    image: "/images/categories/Custom-Flash-Drive-1024x530.jpg",
    description: "Custom USB drives are our specialty. Whether you are trying to take a concept and turn it into an attention grabbing USB drive or you need an exact replica, we can meet your needs in a timely, cost effective manner."
  },
  {
    title: "Custom Ear Buds",
    slug: "100-custom-ear-buds",
    image: "/images/categories/Ear-Buds-Page-1024x530.jpg", 
    description: "With 100% Custom Ear Buds you can give your clients something they will use every day while promoting your brand in a highly visible way. Custom Ear Buds make a great promotional product and have a very attractive price point. These are especially great for sports teams and universities."
  },
  {
    title: "Custom Cables",
    slug: "100-custom-cables",
    image: "/images/categories/Custom-Cable.jpg",
    description: "With our Custom Cables you can link you brand while your client is linking to their computer or portable device. Like your custom ear buds, these make for a cost effective promotional gift that is sure to be used on a daily basis by your clients."
  }
];

export default function CustomProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              100% Custom Products
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              At CustomUsbSource.com we can manufacture 100% Custom USB Drives, 100% Custom Ear Buds, 
              100% Custom Power Banks and 100% Custom Cables to meet your promotional needs. We can take 
              your concept, logo or idea and transform them into functional products that your clients 
              will use on a daily basis. Best of all, they will think of you when they are using them.
            </p>
          </div>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {customProducts.map((product) => (
              <div
                key={product.slug}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <Link
                    href={`/100-custom-products/${product.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              How We Create Your Custom Products
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Concept & Design
                </h3>
                <p className="text-gray-600">
                  Share your concept, logo, or idea with our design team. We&apos;ll create 
                  detailed 3D models and prototypes for your approval.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Custom Manufacturing
                </h3>
                <p className="text-gray-600">
                  Our manufacturing partners create custom molds and produce your 
                  products with the highest quality standards and attention to detail.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quality & Delivery
                </h3>
                <p className="text-gray-600">
                  Every product undergoes rigorous quality testing before being 
                  packaged and shipped directly to you.
                </p>
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
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl mb-8 text-primary-50">
              Let&apos;s transform your concept into a functional promotional product that 
              your clients will use and love every day.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/quick-quote" 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Get a Custom Quote
              </Button>
              <Button 
                href="tel:1-888-720-8727" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Call 1-888-720-8727
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}