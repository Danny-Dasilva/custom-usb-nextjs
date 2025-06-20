import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CompanyInfo() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What We Do
          </h2>
          
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              Customusbsource.com is a premiere supplier of flash drives and other custom electronics 
              to the promotional industry. Founded by a team that has over 20 years of experience in 
              the international importing and exporting business, we offer a stress free B2B program 
              that takes the guesswork out of sourcing from Asia.
            </p>
            
            <p>
              With offices in China, Brazil and the US, we are able to provide our clients with timely, 
              high quality and innovative products that meet their changing needs.
            </p>
          </div>

          <div className="mt-8">
            <Button href="/about" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-gray-600">Global Offices</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">B2B</div>
              <div className="text-gray-600">Stress-Free Program</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}