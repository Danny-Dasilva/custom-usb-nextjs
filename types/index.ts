export interface Product {
  id: string;
  name: string;
  slug: string;
  categories: ProductCategory[];
  description: string;
  features: string[];
  specifications: {
    capacity: string[];
    dimensions?: string;
    colors?: string[];
    material?: string;
  };
  images: {
    main: string;
    gallery?: string[];
  };
  relatedProducts?: string[];
}

export type ProductCategory = 
  | 'capless'
  | 'plastic'
  | 'leather'
  | 'metal'
  | 'wood'
  | 'usb-cards'
  | 'usb-executive-pens';

export interface CategoryInfo {
  name: string;
  slug: ProductCategory;
  description: string;
  image: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export interface QuickQuoteFormData extends ContactFormData {
  productInterest?: string;
  quantity?: string;
  deadline?: string;
}