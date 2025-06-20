import { Container } from "@/components/ui/Container";
import { Clock, Palette, Users, Shield } from "lucide-react";

const values = [
  {
    icon: Clock,
    title: "Fast Production and Delivery",
    description: "We ensure a quick production of our products, or any fully customized product, without sacrificing our high quality standards.",
  },
  {
    icon: Palette,
    title: "100% Custom",
    description: "Express yourself with your own design. Whether it is as simple as adding a logo on an existing product, or a full blown custom creation we are here! Our manufactures specialize in mold making and can create a product that fits your needs.",
  },
  {
    icon: Users,
    title: "We Work With Our Buyers",
    description: "Not Sure What You Want or Not Set On A Design? Our design professionals are here around the clock to pitch ideas and create a design pallet for you to choose from.",
  },
  {
    icon: Shield,
    title: "Super High Quality",
    description: "At Custom USB Source we are all about quality, making sure each product is designed to impress our customers. We inspect each of our partnering manufactures and their products to ensure that they are of the highest quality.",
  },
];

export function ValuePropositions() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Stand By
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence drives everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex gap-4 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className="bg-primary/10 p-3 rounded-full">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}