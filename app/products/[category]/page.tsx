import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/ui/ProductCard";
import { getProductsByCategory } from "@/lib/products";
import { ProductCategory } from "@/types";

const categoryInfo: Record<ProductCategory, { name: string; description: string }> = {
  plastic: {
    name: "Plastic USB Drives",
    description: "Durable and affordable custom USB drives perfect for bulk orders and promotional campaigns."
  },
  metal: {
    name: "Metal USB Drives", 
    description: "Premium metal USB drives with elegant design, perfect for corporate gifts and executive use."
  },
  wood: {
    name: "Wood USB Drives",
    description: "Eco-friendly wooden USB drives that showcase your commitment to sustainability."
  },
  leather: {
    name: "Leather USB Drives",
    description: "Luxurious leather-wrapped USB drives for sophisticated branding and premium gifts."
  },
  capless: {
    name: "Capless USB Drives",
    description: "Convenient capless USB drives with retractable or twist mechanisms for easy use."
  },
  "usb-cards": {
    name: "USB Cards",
    description: "Ultra-thin credit card style USB drives that fit perfectly in wallets and business cards."
  },
  "usb-executive-pens": {
    name: "USB Executive Pens",
    description: "Sophisticated combination of writing instrument and USB storage for professional use."
  }
};

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export function generateStaticParams() {
  return [
    { category: 'plastic' },
    { category: 'metal' },
    { category: 'wood' },
    { category: 'leather' },
    { category: 'capless' },
    { category: 'usb-cards' },
    { category: 'usb-executive-pens' },
  ];
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryKey = category as ProductCategory;
  const info = categoryInfo[categoryKey];
  
  if (!info) {
    return {
      title: "Category Not Found - Custom USB Source"
    };
  }

  return {
    title: `${info.name} - Custom USB Source`,
    description: info.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryKey = category as ProductCategory;
  const info = categoryInfo[categoryKey];
  
  if (!info) {
    notFound();
  }
  
  const products = getProductsByCategory(categoryKey);
  
  return (
    <>
      {/* Header */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {info.name}
            </h1>
            <p className="text-lg text-gray-600">
              {info.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <Container>
          {products.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {products.length} {products.length === 1 ? 'Product' : 'Products'}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600">
                Products for this category are being added soon.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}