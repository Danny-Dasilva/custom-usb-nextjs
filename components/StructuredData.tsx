import { Organization, Product, BreadcrumbList, FAQPage, WithContext } from 'schema-dts';

export function OrganizationStructuredData() {
  const organizationData: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Custom USB Source',
    url: 'https://customusbsource.com',
    logo: 'https://customusbsource.com/logo.png',
    sameAs: [
      'https://www.facebook.com/customusbsource',
      'https://www.linkedin.com/company/custom-usb-source',
      'https://twitter.com/customusbsource',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-800-YOUR-USB',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}

interface ProductStructuredDataProps {
  name: string;
  description: string;
  image: string;
  sku: string;
  price?: number;
  inStock?: boolean;
  category: string;
}

export function ProductStructuredData({
  name,
  description,
  image,
  sku,
  price,
  inStock = true,
  category,
}: ProductStructuredDataProps) {
  const productData: WithContext<Product> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: `https://customusbsource.com${image}`,
    sku,
    brand: {
      '@type': 'Brand',
      name: 'Custom USB Source',
    },
    offers: {
      '@type': 'Offer',
      url: `https://customusbsource.com/products/${category}/${sku.toLowerCase()}`,
      priceCurrency: 'USD',
      price: price?.toString() || 'Contact for pricing',
      availability: inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'Custom USB Source',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '250',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
    />
  );
}

interface BreadcrumbStructuredDataProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbStructuredData({ items }: BreadcrumbStructuredDataProps) {
  const breadcrumbData: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}

interface FAQStructuredDataProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQStructuredData({ faqs }: FAQStructuredDataProps) {
  const faqData: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}