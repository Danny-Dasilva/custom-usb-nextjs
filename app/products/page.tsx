import { Container } from "@/components/ui/Container";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/lib/products";

export const metadata = {
  title: "All USB Drives - Custom USB Source", 
  description: "Browse our complete collection of 45 custom USB drives including plastic, metal, wood, leather, capless, USB cards and executive pens.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              All USB Drives
            </h1>
            <p className="text-lg text-gray-600">
              Browse our complete collection of {products.length} unique custom USB drives. From professional 
              corporate styles to creative custom shapes, find the perfect USB drive for your brand.
            </p>
          </div>
        </Container>
      </section>

      {/* All Products Grid */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => {
              // Use the first category for the URL structure
              const primaryCategory = product.categories?.[0] || 'capless';
              return (
                <ProductCard
                  key={product.id}
                  product={{
                    ...product,
                    href: `/products/${primaryCategory}/${product.slug}`
                  }}
                />
              );
            })}
          </div>
        </Container>
      </section>
      
      {/* Category Links Section */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-gray-600">
              Or explore products organized by material and style categories
            </p>
          </div>
        </Container>
        <ProductCategories />
      </section>
    </>
  );
}