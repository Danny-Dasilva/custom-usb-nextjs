import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Plastic USB Drives",
    slug: "plastic",
    description: "Durable and affordable custom USB drives",
    image: "/images/categories/plastic.jpg",
  },
  {
    name: "Metal USB Drives",
    slug: "metal",
    description: "Premium metal USB drives for executive gifts",
    image: "/images/categories/metal.jpg",
  },
  {
    name: "Wood USB Drives",
    slug: "wood",
    description: "Eco-friendly wooden USB drives",
    image: "/images/categories/wood.jpg",
  },
  {
    name: "Leather USB Drives",
    slug: "leather",
    description: "Luxurious leather-wrapped USB drives",
    image: "/images/categories/leather.jpg",
  },
  {
    name: "USB Cards",
    slug: "usb-cards",
    description: "Ultra-thin credit card style USB drives",
    image: "/images/categories/cards.jpg",
  },
  {
    name: "USB Executive Pens",
    slug: "usb-executive-pens",
    description: "Sophisticated pen USB drive combinations",
    image: "/images/categories/pens.jpg",
  },
  {
    name: "Capless USB Drives",
    slug: "capless",
    description: "Convenient capless USB drive designs",
    image: "/images/categories/capless.jpg",
  },
  {
    name: "All Categories",
    slug: "",
    description: "Browse our complete USB drive collection",
    image: "/images/categories/all.jpg",
  },
];

export function ProductCategories() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our USB Drive Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from a wide variety of custom USB drive styles to match your brand and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products/${category.slug}`}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-200 mb-3">
                  {category.description}
                </p>
                <div className="flex items-center text-sm font-medium">
                  <span>View Products</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
          >
            View All Categories
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}