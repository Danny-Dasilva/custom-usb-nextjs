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
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-blue-700">8 Premium Categories</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Explore Our USB Drive Categories
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from a wide variety of custom USB drive styles to perfectly match your brand identity and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/products/${category.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-50">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {category.description}
                </p>
                <div className="flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                  <span>View Products</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 border-2 border-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-semibold transition-all duration-200 group"
          >
            View All Categories
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </section>
  );
}