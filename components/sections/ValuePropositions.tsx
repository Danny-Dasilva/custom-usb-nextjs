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
    <section className="py-16 md:py-24 relative bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/50" />
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-blue-700">Our Core Values</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What We Stand By
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence drives everything we do
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
                    <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-3 group-hover:text-indigo-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
              
              {/* Hover accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}