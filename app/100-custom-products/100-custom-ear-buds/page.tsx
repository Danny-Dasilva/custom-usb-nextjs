import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Headphones, Users, DollarSign, Volume2 } from "lucide-react";

export const metadata = {
  title: "100% Custom Ear Buds - Custom USB Source",
  description: "Custom ear buds for daily use promotional products. Great for sports teams and universities with attractive price points and high visibility branding.",
  keywords: "custom ear buds, promotional earbuds, branded headphones, sports team headphones, university promotional products",
};

const features = [
  {
    icon: Volume2,
    title: "High-Quality Audio",
    description: "Superior sound quality with clear highs and deep bass for an excellent listening experience."
  },
  {
    icon: DollarSign,
    title: "Attractive Price Point",
    description: "Cost-effective promotional solution that provides excellent value for bulk orders."
  },
  {
    icon: Users,
    title: "Perfect for Teams",
    description: "Especially great for sports teams, universities, and organizations looking for branded audio gear."
  },
  {
    icon: Headphones,
    title: "Daily Use Design",
    description: "Comfortable, durable design that clients will use every day, maximizing brand exposure."
  }
];

const applications = [
  {
    title: "Sports Teams",
    description: "Team colors and logos on ear buds for players, coaches, and fans",
    icon: "🏆"
  },
  {
    title: "Universities",
    description: "School branded audio gear for students and alumni events",
    icon: "🎓"
  },
  {
    title: "Corporate Events",
    description: "Company branded ear buds for conferences and trade shows",
    icon: "💼"
  },
  {
    title: "Music Festivals",
    description: "Event branded audio gear for attendees and performers",
    icon: "🎵"
  }
];

export default function CustomEarBudsPage() {
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
            <span className="text-gray-900">Custom Ear Buds</span>
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
                100% Custom Ear Buds
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With 100% Custom Ear Buds you can give your clients something they will use every day 
                while promoting your brand in a highly visible way. Custom Ear Buds make a great 
                promotional product and have a very attractive price point. These are especially 
                great for sports teams and universities.
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
                src="/images/categories/Ear-Buds-Page-1024x530.jpg"
                alt="Custom Ear Buds"
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
            Why Custom Ear Buds Work
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

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Perfect Applications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app) => (
              <div key={app.title} className="bg-white p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {app.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Promotional Benefits
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  High Visibility Branding
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Worn daily by users, ensuring constant brand exposure</li>
                  <li>• Visible to others when in use in public spaces</li>
                  <li>• Creates positive brand association with music and enjoyment</li>
                  <li>• Long-lasting promotional impact compared to paper materials</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Cost-Effective Marketing
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Attractive bulk pricing for large orders</li>
                  <li>• Higher perceived value than traditional promotional items</li>
                  <li>• Longer lifespan means extended marketing reach</li>
                  <li>• Recipients actually want and use the product</li>
                </ul>
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
              Product Specifications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Audio Specifications
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Driver Size:</strong> 10mm dynamic drivers</li>
                  <li><strong>Frequency Response:</strong> 20Hz - 20kHz</li>
                  <li><strong>Impedance:</strong> 32Ω ± 15%</li>
                  <li><strong>Sensitivity:</strong> 102dB ± 3dB</li>
                  <li><strong>Cable Length:</strong> 1.2m standard</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Customization Options
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Colors:</strong> Any Pantone color match</li>
                  <li><strong>Printing:</strong> Screen printing, pad printing</li>
                  <li><strong>Packaging:</strong> Custom retail packaging available</li>
                  <li><strong>Minimum Order:</strong> 500 pieces</li>
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
              Ready to Amplify Your Brand?
            </h2>
            <p className="text-xl mb-8 text-primary-50">
              Create custom ear buds that your team, students, or clients will use daily 
              while proudly displaying your brand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/quick-quote" 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Start Your Order
              </Button>
              <Button 
                href="mailto:sales@customusbsource.com" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Discuss Your Needs
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}