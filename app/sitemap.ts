import { MetadataRoute } from 'next'
import { products } from '@/lib/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://customusbsource.com'

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/faqs',
    '/quick-quote',
    '/blog',
    '/products',
    '/100-custom-products',
    '/100-custom-products/100-custom-power-banks',
    '/100-custom-products/100-custom-flash-drives',
    '/100-custom-products/100-custom-ear-buds',
    '/100-custom-products/100-custom-cables',
    '/privacy',
    '/terms',
  ]

  // Product category pages
  const categories = [
    'plastic',
    'metal',
    'wood',
    'leather',
    'capless',
    'usb-cards',
    'usb-executive-pens',
  ]

  const categoryPages = categories.map((category) => `/products/${category}`)

  // Individual product pages (for each category a product belongs to)
  const productPages: string[] = [];
  products.forEach((product) => {
    product.categories.forEach((category) => {
      productPages.push(`/products/${category}/${product.slug}`);
    });
  });

  // Combine all pages
  const allPages = [...staticPages, ...categoryPages, ...productPages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' : page.includes('/products/') ? 'weekly' : 'monthly',
    priority: page === '' ? 1 : page.includes('/products/') ? 0.8 : 0.6,
  }))
}