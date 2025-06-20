import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { ArrowRight, Star } from "lucide-react";

interface ProductCardProps {
  product: Product & { href?: string };
}

export function ProductCard({ product }: ProductCardProps) {
  const primaryCategory = product.categories?.[0] || 'capless';
  const href = product.href || `/products/${primaryCategory}/${product.slug}`;
  
  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden card-hover"
    >
      <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="absolute top-2 right-2 bg-accent text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
          Best Seller
        </div>
        <Image
          src={product.images.main}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-xs text-gray-500 ml-1">(4.8)</span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>
        
        {product.specifications.capacity && product.specifications.capacity.length > 0 && (
          <div className="mb-3">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Capacities:
            </span>
            <div className="flex flex-wrap gap-1 mt-1">
              {product.specifications.capacity.slice(0, 3).map((capacity) => (
                <span
                  key={capacity}
                  className="px-2 py-1 bg-gray-100 text-xs text-gray-700 rounded"
                >
                  {capacity}
                </span>
              ))}
              {product.specifications.capacity.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-xs text-gray-700 rounded">
                  +{product.specifications.capacity.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex flex-wrap gap-1">
            {product.categories?.slice(0, 2).map((category) => (
              <span key={category} className="text-xs font-medium text-primary capitalize px-2 py-1 bg-blue-50 rounded-full">
                {category.replace('-', ' ')}
              </span>
            ))}
            {product.categories && product.categories.length > 2 && (
              <span className="text-xs text-gray-500">
                +{product.categories.length - 2}
              </span>
            )}
          </div>
          <span className="text-sm font-semibold text-primary group-hover:translate-x-1 transition-all duration-200 flex items-center gap-1">
            View Details
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}