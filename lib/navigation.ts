import { NavigationItem } from "@/types";

export const navigationItems: NavigationItem[] = [
  {
    label: "USB Drives",
    href: "/products",
    children: [
      { label: "Capless", href: "/products/capless" },
      { label: "Plastic USB Drives", href: "/products/plastic" },
      { label: "Leather", href: "/products/leather" },
      { label: "Metal", href: "/products/metal" },
      { label: "Wood", href: "/products/wood" },
      { label: "USB Cards", href: "/products/usb-cards" },
      { label: "USB Executive Pens", href: "/products/usb-executive-pens" },
    ],
  },
  {
    label: "Custom Products",
    href: "/100-custom-products",
    children: [
      { label: "100% Custom Power Banks", href: "/100-custom-products/100-custom-power-banks" },
      { label: "100% Custom Flash Drives", href: "/100-custom-products/100-custom-flash-drives" },
      { label: "100% Custom Ear Buds", href: "/100-custom-products/100-custom-ear-buds" },
      { label: "100% Custom Cables", href: "/100-custom-products/100-custom-cables" },
    ],
  },
  {
    label: "Quick Quote",
    href: "/quick-quote",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "FAQ",
    href: "/faqs",
    children: [
      { label: "Blog", href: "/blog" },
    ],
  },
];