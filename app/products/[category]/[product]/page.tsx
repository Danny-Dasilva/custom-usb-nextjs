import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getProductBySlug, products } from "@/lib/products";
import { ProductCategory } from "@/types";
import { ArrowLeft, Check } from "lucide-react";

interface ProductPageProps {
  params: Promise<{
    category: string;
    product: string;
  }>;
}

export function generateStaticParams() {
  // Generate routes for each product in each of its categories
  const params: { category: string; product: string }[] = [];
  
  products.forEach((product) => {
    product.categories.forEach((category) => {
      params.push({
        category: category,
        product: product.slug,
      });
    });
  });
  
  return params;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { product: productSlug } = await params;
  const product = getProductBySlug(productSlug);
  
  if (!product) {
    return {
      title: "Product Not Found - Custom USB Source"
    };
  }

  return {
    title: `${product.name} - Custom USB Source`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, product: productSlug } = await params;
  const product = getProductBySlug(productSlug);
  
  if (!product || !product.categories.includes(category as ProductCategory)) {
    notFound();
  }
  
  return (
    <>
      {/* Breadcrumb */}
      <section className="py-6 border-b border-gray-200">
        <Container>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/products" className="hover:text-primary">
              Products
            </Link>
            <span>/</span>
            <Link 
              href={`/products/${category}`}
              className="hover:text-primary capitalize"
            >
              {category.replace('-', ' ')}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </Container>
      </section>

      {/* Product Details */}
      <section className="py-12">
        <Container>
          <Link
            href={`/products/${category}`}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {category.replace('-', ' ')} USB Drives
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="relative h-96 bg-gray-50 rounded-lg">
                <Image
                  src={product.images.main}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Specifications
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  {product.specifications.capacity && (
                    <div>
                      <span className="font-medium text-gray-900">Capacities:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {product.specifications.capacity.map((capacity) => (
                          <span
                            key={capacity}
                            className="px-2 py-1 bg-white border border-gray-200 rounded text-sm"
                          >
                            {capacity}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {product.specifications.dimensions && (
                    <div>
                      <span className="font-medium text-gray-900">Dimensions:</span>
                      <span className="ml-2 text-gray-600">{product.specifications.dimensions}</span>
                    </div>
                  )}
                  
                  {product.specifications.material && (
                    <div>
                      <span className="font-medium text-gray-900">Material:</span>
                      <span className="ml-2 text-gray-600">{product.specifications.material}</span>
                    </div>
                  )}
                  
                  {product.specifications.colors && (
                    <div>
                      <span className="font-medium text-gray-900">Available Colors:</span>
                      <span className="ml-2 text-gray-600">{product.specifications.colors.join(', ')}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-3">
                <Button href="/quick-quote" size="lg" className="w-full">
                  Get a Quote for This Product
                </Button>
                <Button href="tel:1-888-720-8727" variant="outline" size="lg" className="w-full">
                  Call 1-888-720-8727
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}