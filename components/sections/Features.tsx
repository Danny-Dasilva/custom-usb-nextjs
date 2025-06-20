import { Container } from "@/components/ui/Container";
import { Shield, Truck, HeadphonesIcon, Palette } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Premium materials and rigorous quality control ensure your USB drives exceed expectations.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick turnaround times with express shipping options available for urgent orders.",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description: "Dedicated account managers provide personalized assistance throughout your project.",
  },
  {
    icon: Palette,
    title: "Custom Design",
    description: "Full customization options including shapes, colors, and branding to match your vision.",
  },
];

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Custom USB Source?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re committed to delivering exceptional custom USB drives with unmatched service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}