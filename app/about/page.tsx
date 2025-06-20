import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Shield, Globe, Users, Star } from "lucide-react";

export const metadata = {
  title: "About Us - Custom USB Source",
  description: "CustomUSBSource.com is a premiere supplier of flash drives and other custom electronics to the promotional industry with over 20 years of experience.",
  keywords: "about custom usb source, promotional products company, B2B electronics supplier",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Custom USB Source
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              CustomUSBSource.com is a premiere supplier of flash drives and other custom electronics 
              to the promotional industry.
            </p>
          </div>
        </Container>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    Founded by a team that has over 20 years of experience in the international 
                    importing and exporting business, we offer a stress-free B2B program that 
                    takes the guesswork out of sourcing from Asia.
                  </p>
                  <p>
                    With offices in China, Brazil and the US, we are able to provide our clients 
                    with timely, high-quality and innovative products that meet their changing needs.
                  </p>
                  <p className="font-medium text-primary">
                    Let us help you take the hassle out of your promotional sourcing needs.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-gray-600">Global Offices</div>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">B2B</div>
                  <div className="text-sm text-gray-600">Stress-Free Program</div>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">1000s</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              What We Do
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Products for Every Occasion
                </h3>
                <p className="text-gray-600">
                  We may be &apos;Custom USB Source&apos;, but we are much more than a USB supplier. 
                  We offer a vast array of fully customizable products for every occasion. 
                  Whether it may be custom water bottles for a promotional event or power banks 
                  for resale, we are here to deliver quality products for the best price.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Custom Design Services
                </h3>
                <p className="text-gray-600">
                  Have an idea for your product design? Share it with us! Our 3D modeling 
                  professionals will share a virtual model of your custom design prior to 
                  making a mold, and providing sample. We will work with you every step of 
                  the way to ensure that your product encompasses everything you had envisioned.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Quality Assurance
                </h3>
                <p className="text-gray-600">
                  All of our manufacturing plants ensure only the highest of quality, with 
                  their products and manufacturing techniques being inspected and tested 
                  countless times.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl mb-8 text-primary-50">
              Call us now to discuss your product and receive a free quote, or send us a message 
              with your desired product details and designs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="tel:1-888-720-8727" 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Call 1-888-720-8727
              </Button>
              <Button 
                href="mailto:sales@customusbsource.com" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Email sales@customusbsource.com
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-primary-100">
              One of our design specialists will contact you with more information
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}