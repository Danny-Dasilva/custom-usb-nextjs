import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section className="relative bg-white py-12 md:py-16">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Custom USB Source
            <span className="block text-lg md:text-xl font-normal text-gray-600 mt-2">
              Your 1st Source for Custom USB Drives
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Custom USB Drives offers promotional USB drives branded with your logo. 
            Order them in bulk with a discounted rate and free standard shipping.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button href="/quick-quote" size="lg">
              Get a Quick Quote
            </Button>
            <Button href="/products" variant="outline" size="lg">
              Browse Products
            </Button>
          </div>

          {/* Featured Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="relative h-32 w-full mb-3">
                <Image
                  src="/images/products/BeemerRemoteET-125-3.png"
                  alt="Car Remote USB Drive"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-600">Car Remote USB</p>
            </div>
            <div className="text-center">
              <div className="relative h-32 w-full mb-3">
                <Image
                  src="/images/products/Credit-CardUSB.png"
                  alt="Credit Card USB Drive"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-600">Credit Card USB</p>
            </div>
            <div className="text-center">
              <div className="relative h-32 w-full mb-3">
                <Image
                  src="/images/products/CorporateET-220USB.png"
                  alt="Corporate USB Drive"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-600">Corporate USB</p>
            </div>
            <div className="text-center">
              <div className="relative h-32 w-full mb-3">
                <Image
                  src="/images/products/Eclipse-ET-2112.png"
                  alt="Eclipse USB Drive"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-600">Eclipse USB</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}