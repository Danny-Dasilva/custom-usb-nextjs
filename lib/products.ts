import { Product, ProductCategory } from "@/types";

export const products: Product[] = [
  {
    id: "beemer-remote-usb-drive",
    name: "Beemer Remote USB Drive",
    slug: "beemer-remote-usb-drive",
    categories: ["plastic"],
    description: "Car remote style USB drive perfect for automotive brands and dealerships.",
    features: [
      "Realistic car remote design",
      "High-quality plastic construction", 
      "Custom logo printing available",
      "Available in multiple colors"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB", "32GB"],
      dimensions: "85mm x 32mm x 15mm",
      colors: ["Black", "White", "Red", "Blue", "Custom"],
      material: "ABS Plastic"
    },
    images: {
      main: "/images/products/BeemerRemoteET-125-3.png",
      gallery: [
        "/images/products/BeemerRemoteET-125-3.png"
      ]
    }
  },
  {
    id: "bravo-usb-drive",
    name: "Bravo USB Drive",
    slug: "bravo-usb-drive",
    categories: ["plastic"],
    description: "Pocket-sized USB flash drives perfect for showcasing company logos with bright color options.",
    features: [
      "Dual LED indicator for power and read/write status",
      "Key loop attachment",
      "Hi-Speed USB 2.0 certified",
      "Shock resistance: 1000G",
      "Limited Lifetime Warranty",
      "Available in 9 bright colors"
    ],
    specifications: {
      capacity: ["128MB", "256MB", "512MB", "1GB", "2GB", "4GB", "8GB", "16GB", "32GB", "64GB"],
      dimensions: "2.38 x 0.88 x 0.25 inches (59mm x 22mm x 6mm)",
      colors: ["Red", "Orange", "Yellow", "Green", "Blue", "Black", "Dark Gray", "Light Gray", "White"],
      material: "Plastic"
    },
    images: {
      main: "/images/products/Bravo-ET-2222.png",
      gallery: [
        "/images/products/Bravo-ET-2222.png"
      ]
    }
  },
  {
    id: "tiny-vault-usb-drive",
    name: "Tiny Vault USB Drive",
    slug: "tiny-vault-usb-drive",
    categories: ["capless", "metal"],
    description: "Ultra-compact USB drive with secure vault-style design for maximum portability.",
    features: [
      "Ultra-compact form factor",
      "Secure vault-style casing",
      "High-speed data transfer",
      "Durable construction",
      "Key ring attachment"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB", "32GB"],
      dimensions: "Compact design",
      colors: ["Black", "Silver", "Custom"],
      material: "High-grade plastic"
    },
    images: {
      main: "/images/products/TinyVaultET-2373.png",
      gallery: [
        "/images/products/TinyVaultET-2373.png"
      ]
    }
  },
  {
    id: "clickster-usb-drive",
    name: "Clickster USB Drive",
    slug: "clickster-usb-drive",
    categories: ["plastic"],
    description: "Click-to-open USB drive with convenient one-handed operation and professional design.",
    features: [
      "One-handed click operation",
      "Retractable USB connector",
      "Professional appearance",
      "Durable click mechanism",
      "Custom logo area"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB", "32GB"],
      dimensions: "Standard USB size",
      colors: ["Black", "White", "Blue", "Red", "Custom"],
      material: "ABS Plastic"
    },
    images: {
      main: "/images/products/ClicksterET-226-2.png",
      gallery: [
        "/images/products/ClicksterET-226-2.png"
      ]
    }
  },
  {
    id: "mini-usb-drive",
    name: "Mini USB Drive",
    slug: "mini-usb-drive",
    categories: ["plastic"],
    description: "Ultra-compact mini USB drive perfect for discrete data storage and transport.",
    features: [
      "Ultra-compact design",
      "Lightweight construction",
      "Plug-and-play operation",
      "High reliability",
      "Custom branding options"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB", "32GB"],
      dimensions: "Mini form factor",
      colors: ["Black", "White", "Custom"],
      material: "Plastic"
    },
    images: {
      main: "/images/products/MiniET-2231-350x371.png",
      gallery: [
        "/images/products/MiniET-2231.png"
      ]
    }
  },
  {
    id: "credit-card-usb-drive",
    name: "Credit Card USB Drive",
    slug: "credit-card-usb-drive", 
    categories: ["usb-cards"],
    description: "Ultra-thin credit card style USB drive perfect for business cards and promotions.",
    features: [
      "Credit card thickness",
      "Fits perfectly in wallets",
      "Full color printing available",
      "Lightweight and durable"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB"],
      dimensions: "85.5mm x 54mm x 2mm",
      colors: ["White", "Custom Print"],
      material: "Plastic with metal connector"
    },
    images: {
      main: "/images/products/Credit-CardUSB.png",
      gallery: [
        "/images/products/Credit-CardUSB.png"
      ]
    }
  },
  {
    id: "corporate-usb-drive",
    name: "Corporate USB Drive",
    slug: "corporate-usb-drive",
    categories: ["plastic"],
    description: "Professional corporate USB drive with clean design perfect for business use.",
    features: [
      "Professional appearance",
      "Reliable performance",
      "Custom logo engraving",
      "Bulk pricing available"
    ],
    specifications: {
      capacity: ["2GB", "4GB", "8GB", "16GB", "32GB", "64GB"],
      dimensions: "60mm x 20mm x 10mm",
      colors: ["White", "Black", "Blue", "Custom"],
      material: "High-grade plastic"
    },
    images: {
      main: "/images/products/CorporateET-220USB.png",
      gallery: [
        "/images/products/CorporateET-220USB.png"
      ]
    }
  },
  {
    id: "eclipse-usb-drive",
    name: "Eclipse USB Drive",
    slug: "eclipse-usb-drive",
    categories: ["capless", "metal", "plastic"],
    description: "Sleek eclipse-shaped USB drive with modern design and reliable performance.",
    features: [
      "Unique eclipse shape",
      "Smooth sliding mechanism",
      "Custom color options",
      "High-speed data transfer"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB", "32GB"],
      dimensions: "58mm x 18mm x 8mm",
      colors: ["Black", "White", "Silver", "Custom"],
      material: "ABS Plastic"
    },
    images: {
      main: "/images/products/Eclipse-ET-2112.png",
      gallery: [
        "/images/products/Eclipse-ET-2112.png"
      ]
    }
  },
  {
    id: "ice-usb-drive",
    name: "Ice USB Drive",
    slug: "ice-usb-drive",
    categories: ["capless", "metal", "plastic"],
    description: "Transparent ice-style USB drive with modern clear design.",
    features: [
      "Transparent design",
      "LED activity indicator",
      "Lightweight construction",
      "Keychain friendly"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB"],
      dimensions: "52mm x 17mm x 7mm",
      colors: ["Clear", "Blue", "Red", "Green"],
      material: "Transparent plastic"
    },
    images: {
      main: "/images/products/Ice-ET-214USB.png",
      gallery: [
        "/images/products/Ice-ET-214USB.png"
      ]
    }
  },
  {
    id: "micro-slim-usb-drive",
    name: "Micro Slim USB Drive",
    slug: "micro-slim-usb-drive",
    categories: ["capless", "metal"],
    description: "Ultra-compact metal USB drive designed for portability and style.",
    features: [
      "Ultra-compact design",
      "Premium metal construction",
      "Capless design",
      "High-speed USB 3.0"
    ],
    specifications: {
      capacity: ["4GB", "8GB", "16GB", "32GB", "64GB", "128GB"],
      dimensions: "31mm x 12mm x 4mm",
      colors: ["Silver", "Black", "Gold", "Custom"],
      material: "Aluminum alloy"
    },
    images: {
      main: "/images/products/Micro-SlimET-2341.png",
      gallery: [
        "/images/products/Micro-SlimET-2341.png"
      ]
    }
  },
  // WOODEN USB DRIVES
  {
    id: "wooden-swivel-usb-drive",
    name: "Wooden Swivel USB Drive",
    slug: "wooden-swivel-usb-drive",
    categories: ["capless", "wood"],
    description: "Eco-friendly wooden USB drive with 360° swivel design and natural wood finish.",
    features: [
      "100% natural wood construction",
      "360° swivel mechanism",
      "Eco-friendly and sustainable",
      "Custom laser engraving",
      "Unique wood grain patterns"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB", "32GB"],
      dimensions: "60mm x 20mm x 12mm",
      colors: ["Natural Wood", "Dark Wood", "Bamboo"],
      material: "Natural Wood"
    },
    images: {
      main: "/images/products/Wooden-SwivelET-404-3USB.png",
      gallery: [
        "/images/products/Wooden-SwivelET-404-3USB.png"
      ]
    }
  },
  {
    id: "wooden-cross-usb-drive",
    name: "Wooden Cross USB Drive",
    slug: "wooden-cross-usb-drive",
    categories: ["wood"],
    description: "Elegant wooden cross-shaped USB drive perfect for religious organizations and spiritual gifts.",
    features: [
      "Cross-shaped design",
      "Natural wood finish",
      "Religious symbolism",
      "Custom engraving available",
      "Meaningful gift option"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB"],
      dimensions: "Cross shape design",
      colors: ["Natural Wood", "Dark Walnut"],
      material: "Natural Wood"
    },
    images: {
      main: "/images/products/Wooden-CrossET-403-3USB-350x435.png",
      gallery: [
        "/images/products/Wooden-CrossET-403-3USB.png"
      ]
    }
  },
  {
    id: "the-natural-oval-usb-drive",
    name: "The Natural Oval USB Drive",
    slug: "the-natural-oval-usb-drive",
    categories: ["wood"],
    description: "Smooth oval-shaped wooden USB drive with natural finish and ergonomic design.",
    features: [
      "Smooth oval shape",
      "Ergonomic design",
      "Natural wood finish",
      "Comfortable grip",
      "Eco-friendly construction"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB"],
      dimensions: "Oval shape",
      colors: ["Natural Wood"],
      material: "Natural Wood"
    },
    images: {
      main: "/images/products/The-Natural-OvalET-401-1USB1-350x435.png",
      gallery: [
        "/images/products/The-Natural-OvalET-401-1USB1.png"
      ]
    }
  },
  {
    id: "the-natural-rectangle-usb-drive",
    name: "The Natural Rectangle USB Drive",
    slug: "the-natural-rectangle-usb-drive",
    categories: ["wood"],
    description: "Classic rectangular wooden USB drive with clean lines and natural wood beauty.",
    features: [
      "Classic rectangular design",
      "Clean, minimalist lines",
      "Natural wood grain",
      "Professional appearance",
      "Custom laser engraving"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB"],
      dimensions: "Rectangle shape",
      colors: ["Natural Wood", "Dark Wood"],
      material: "Natural Wood"
    },
    images: {
      main: "/images/products/NaturalRectangleET-402-2USB-350x435.png",
      gallery: [
        "/images/products/NaturalRectangleET-402-2USB.png"
      ]
    }
  },
  // USB EXECUTIVE PENS
  {
    id: "exec-pen-1-usb-drive",
    name: "Executive Pen 1 USB Drive",
    slug: "exec-pen-1-usb-drive",
    categories: ["usb-executive-pens"],
    description: "Professional executive pen with integrated USB drive, perfect for business professionals.",
    features: [
      "Dual-function pen and USB drive",
      "Professional executive design",
      "High-quality writing performance",
      "Secure USB storage",
      "Premium metal construction"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB"],
      dimensions: "Standard pen size",
      colors: ["Silver", "Black", "Gold"],
      material: "Metal"
    },
    images: {
      main: "/images/products/ExecPen1ET-501-2USB.png",
      gallery: [
        "/images/products/ExecPen1ET-501-2USB.png"
      ]
    }
  },
  {
    id: "exec-pen-3-usb-drive",
    name: "Executive Pen 3 USB Drive",
    slug: "exec-pen-3-usb-drive",
    categories: ["usb-executive-pens"],
    description: "Sophisticated executive pen with USB functionality for the modern business professional.",
    features: [
      "Premium pen and USB combo",
      "Sophisticated design",
      "Smooth writing experience",
      "Reliable USB storage",
      "Executive gift quality"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB"],
      dimensions: "Executive pen dimensions",
      colors: ["Black", "Silver", "Blue"],
      material: "Premium Metal"
    },
    images: {
      main: "/images/products/ExecPen3ET-503USB.png",
      gallery: [
        "/images/products/ExecPen3ET-503USB.png"
      ]
    }
  },
  {
    id: "exec-pen-5-usb-drive",
    name: "Executive Pen 5 USB Drive",
    slug: "exec-pen-5-usb-drive",
    categories: ["usb-executive-pens"],
    description: "Luxury executive pen with integrated USB drive, designed for corporate gifts and professionals.",
    features: [
      "Luxury pen and USB combination",
      "Corporate gift quality",
      "Premium writing performance",
      "Secure data storage",
      "Elegant presentation box"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB"],
      dimensions: "Luxury pen size",
      colors: ["Gold", "Silver", "Black"],
      material: "Premium Metal"
    },
    images: {
      main: "/images/products/ExecPen5ET-505-3USB.png",
      gallery: [
        "/images/products/ExecPen5ET-505-3USB.png"
      ]
    }
  },
  // LEATHER USB DRIVES
  {
    id: "leather-slider-usb-drive",
    name: "Leather Slider USB Drive",
    slug: "leather-slider-usb-drive",
    categories: ["leather"],
    description: "Premium leather USB drive with smooth sliding mechanism and elegant appearance.",
    features: [
      "Genuine leather construction",
      "Smooth sliding mechanism",
      "Premium feel and appearance",
      "Custom embossing available",
      "Professional business accessory"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB", "32GB"],
      dimensions: "Standard slider size",
      colors: ["Brown", "Black", "Tan"],
      material: "Genuine Leather"
    },
    images: {
      main: "/images/products/Leather-SliderET-601-1USB-350x435.png",
      gallery: [
        "/images/products/Leather-SliderET-601-1USB.png"
      ]
    }
  },
  {
    id: "pouch-usb-drive",
    name: "Pouch USB Drive",
    slug: "pouch-usb-drive",
    categories: ["leather"],
    description: "Leather pouch-style USB drive with secure closure and premium leather finish.",
    features: [
      "Leather pouch design",
      "Secure closure mechanism",
      "Premium leather finish",
      "Protective design",
      "Custom branding options"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB"],
      dimensions: "Pouch design",
      colors: ["Brown", "Black"],
      material: "Genuine Leather"
    },
    images: {
      main: "/images/products/PouchET-604-1USB.png",
      gallery: [
        "/images/products/PouchET-604-1USB.png"
      ]
    }
  },
  {
    id: "snap-and-slide-usb-drive",
    name: "Snap and Slide USB Drive",
    slug: "snap-and-slide-usb-drive",
    categories: ["leather"],
    description: "Innovative leather USB drive with snap-and-slide mechanism for easy access.",
    features: [
      "Snap-and-slide mechanism",
      "Easy one-handed operation",
      "Leather construction",
      "Secure closure",
      "Professional appearance"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB"],
      dimensions: "Slide mechanism design",
      colors: ["Brown", "Black"],
      material: "Leather"
    },
    images: {
      main: "/images/products/Snap-and-SlideET-603USB-350x435.png",
      gallery: [
        "/images/products/Snap-and-SlideET-603USB.png"
      ]
    }
  },
  {
    id: "swivel-snap-usb-drive",
    name: "Swivel Snap USB Drive",
    slug: "swivel-snap-usb-drive",
    categories: ["leather"],
    description: "Leather USB drive with 360° swivel mechanism and snap closure for ultimate convenience.",
    features: [
      "360° swivel mechanism",
      "Snap closure design",
      "Leather finish",
      "Convenient operation",
      "Durable construction"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB"],
      dimensions: "Swivel design",
      colors: ["Brown", "Black"],
      material: "Leather"
    },
    images: {
      main: "/images/products/Swivel-SnapET-602USB-350x435.png",
      gallery: [
        "/images/products/Swivel-SnapET-602USB.png"
      ]
    }
  },
  // METAL USB DRIVES
  {
    id: "swivel-usb-drive",
    name: "Swivel USB Drive",
    slug: "swivel-usb-drive",
    categories: ["capless", "metal", "plastic"],
    description: "Classic metal USB drive with 360° swivel mechanism and durable construction.",
    features: [
      "360° swivel mechanism",
      "Durable metal construction",
      "Capless design",
      "Professional appearance",
      "Custom engraving available"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB", "32GB", "64GB"],
      dimensions: "60mm x 20mm x 8mm",
      colors: ["Silver", "Black", "Gold"],
      material: "Metal Alloy"
    },
    images: {
      main: "/images/products/Swivel-ET-2063.png",
      gallery: [
        "/images/products/Swivel-ET-2063.png"
      ]
    }
  },
  {
    id: "swivel-deluxe-usb-drive",
    name: "Swivel Deluxe USB Drive",
    slug: "swivel-deluxe-usb-drive",
    categories: ["capless", "metal"],
    description: "Premium deluxe metal USB drive with advanced swivel mechanism and superior build quality.",
    features: [
      "Premium swivel mechanism",
      "Superior metal construction",
      "Deluxe finish",
      "High-speed performance",
      "Premium packaging"
    ],
    specifications: {
      capacity: ["2GB", "4GB", "8GB", "16GB", "32GB", "64GB"],
      dimensions: "Deluxe form factor",
      colors: ["Silver", "Gold", "Black"],
      material: "Premium Metal"
    },
    images: {
      main: "/images/products/Swivel-Deluxe-revUSB.png",
      gallery: [
        "/images/products/Swivel-Deluxe-revUSB.png"
      ]
    }
  },
  // USB CARDS
  {
    id: "bizcard-usb-drive",
    name: "Business Card USB Drive",
    slug: "bizcard-usb-drive",
    categories: ["usb-cards"],
    description: "Ultra-thin business card USB drive perfect for networking and professional presentations.",
    features: [
      "Business card dimensions",
      "Ultra-thin profile",
      "Full-color printing",
      "Professional networking tool",
      "Fits in wallet perfectly"
    ],
    specifications: {
      capacity: ["128MB", "256MB", "512MB", "1GB", "2GB", "4GB", "8GB"],
      dimensions: "85.5mm x 54mm x 2mm",
      colors: ["White", "Custom Print"],
      material: "Plastic Card"
    },
    images: {
      main: "/images/products/BizCardET-239.png",
      gallery: [
        "/images/products/BizCardET-239.png"
      ]
    }
  },
  {
    id: "push-button-slider-usb-drive",
    name: "Push Button Slider USB Drive",
    slug: "push-button-slider-usb-drive",
    categories: ["capless", "plastic"],
    description: "Innovative card-style USB drive with push-button slider mechanism for easy access.",
    features: [
      "Push-button slider mechanism",
      "Card-style form factor",
      "Easy one-handed operation",
      "Durable slider mechanism",
      "Custom printing available"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB"],
      dimensions: "Card slider design",
      colors: ["White", "Black", "Custom"],
      material: "Plastic Card"
    },
    images: {
      main: "/images/products/Push-Button-SliderET-806USB.png",
      gallery: [
        "/images/products/Push-Button-SliderET-806USB.png"
      ]
    }
  },
  // CAPLESS
  {
    id: "key-usb-drive",
    name: "Key USB Drive",
    slug: "key-usb-drive",
    categories: ["capless"],
    description: "Key-shaped capless USB drive with realistic key design and durable construction.",
    features: [
      "Realistic key design",
      "Capless construction",
      "Key ring ready",
      "Durable metal finish",
      "Custom engraving available"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB"],
      dimensions: "Key shape",
      colors: ["Silver", "Gold", "Custom"],
      material: "Metal"
    },
    images: {
      main: "/images/products/KeyET-305-1USB-350x435.png",
      gallery: [
        "/images/products/KeyET-305-1USB.png"
      ]
    }
  },
  // ADDITIONAL HIGH-PRIORITY PLASTIC
  {
    id: "whistle-usb-drive",
    name: "Whistle USB Drive",
    slug: "whistle-usb-drive",
    categories: ["plastic"],
    description: "Functional whistle with integrated USB drive, perfect for sports teams and outdoor activities.",
    features: [
      "Functional whistle",
      "Integrated USB storage",
      "Sports team friendly",
      "Outdoor activity ready",
      "Dual-purpose design"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB"],
      dimensions: "Whistle size",
      colors: ["Black", "Silver", "Custom"],
      material: "Plastic and Metal"
    },
    images: {
      main: "/images/products/WhistleET-201.png",
      gallery: [
        "/images/products/WhistleET-201.png"
      ]
    }
  },
  // HIGH PRIORITY - PHASE 1
  {
    id: "beemer-fob-usb-drive",
    name: "Beemer Fob USB Drive",
    slug: "beemer-fob-usb-drive",
    categories: ["plastic"],
    description: "Car key fob style USB drive perfect for automotive promotions and dealerships.",
    features: [
      "Realistic car key fob design",
      "Premium plastic construction",
      "Custom logo options",
      "Automotive industry favorite",
      "Key ring attachment"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB", "32GB"],
      dimensions: "Key fob size",
      colors: ["Black", "Silver", "Custom"],
      material: "ABS Plastic"
    },
    images: {
      main: "/images/products/BeemerFobET-213-1.png",
      gallery: [
        "/images/products/BeemerFobET-213-1.png"
      ]
    }
  },
  {
    id: "swivel-usb-drive-2",
    name: "Swivel USB Drive 2",
    slug: "swivel-usb-drive-2",
    categories: ["capless", "plastic"],
    description: "Enhanced version of the classic swivel USB drive with improved mechanism and finish.",
    features: [
      "Enhanced swivel mechanism",
      "Premium metal finish",
      "360° rotation",
      "Capless design",
      "Improved durability"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB", "32GB", "64GB"],
      dimensions: "60mm x 20mm x 8mm",
      colors: ["Silver", "Black", "Gold"],
      material: "Metal Alloy"
    },
    images: {
      main: "/images/products/Swivel-ET-2063.png",
      gallery: [
        "/images/products/Swivel-ET-2063.png"
      ]
    }
  },
  {
    id: "flip-card-usb-drive",
    name: "Flip Card USB Drive",
    slug: "flip-card-usb-drive",
    categories: ["usb-cards"],
    description: "Innovative flip-style card USB drive with unique opening mechanism.",
    features: [
      "Unique flip-open design",
      "Card-style form factor",
      "Full-color printing surface",
      "Protective flip cover",
      "Wallet-friendly size"
    ],
    specifications: {
      capacity: ["128MB", "256MB", "512MB", "1GB", "2GB", "4GB", "8GB"],
      dimensions: "85mm x 54mm x 3mm",
      colors: ["White", "Custom Print"],
      material: "Plastic Card"
    },
    images: {
      main: "/images/products/FlipCardET-808-350x435.png",
      gallery: [
        "/images/products/FlipCardET-808.png"
      ]
    }
  },
  {
    id: "slider-card-usb-drive",
    name: "Slider Card USB Drive",
    slug: "slider-card-usb-drive",
    categories: ["usb-cards"],
    description: "Sleek card-style USB drive with smooth sliding mechanism for easy access.",
    features: [
      "Smooth sliding mechanism",
      "Ultra-thin card design",
      "Large branding area",
      "Durable slider mechanism",
      "Credit card size"
    ],
    specifications: {
      capacity: ["128MB", "256MB", "512MB", "1GB", "2GB", "4GB", "8GB", "16GB"],
      dimensions: "85mm x 54mm x 3mm",
      colors: ["White", "Black", "Custom"],
      material: "Plastic Card"
    },
    images: {
      main: "/images/products/SliderCardET-805-350x435.png",
      gallery: [
        "/images/products/SliderCardET-805.png"
      ]
    }
  },
  // MEDIUM PRIORITY - PHASE 2
  {
    id: "bullet-usb-drive",
    name: "Bullet USB Drive",
    slug: "bullet-usb-drive",
    categories: ["metal"],
    description: "Bullet-shaped USB drive with unique design perfect for military and outdoor brands.",
    features: [
      "Unique bullet shape",
      "Rugged construction",
      "Eye-catching design",
      "Key chain attachment",
      "Durable plastic casing"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB"],
      dimensions: "Bullet shape",
      colors: ["Gold", "Silver", "Black"],
      material: "ABS Plastic"
    },
    images: {
      main: "/images/products/BulletET-301-2USB.png",
      gallery: [
        "/images/products/BulletET-301-2USB.png"
      ]
    }
  },
  {
    id: "hypo-usb-drive",
    name: "Hypo USB Drive",
    slug: "hypo-usb-drive",
    categories: ["plastic"],
    description: "Medical syringe-shaped USB drive ideal for healthcare and pharmaceutical promotions.",
    features: [
      "Medical syringe design",
      "Healthcare industry themed",
      "Unique promotional item",
      "Attention-grabbing shape",
      "Custom branding options"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB"],
      dimensions: "Syringe shape",
      colors: ["White", "Clear", "Custom"],
      material: "Plastic"
    },
    images: {
      main: "/images/products/HypoET-231-3.png",
      gallery: [
        "/images/products/HypoET-231-3.png"
      ]
    }
  },
  {
    id: "jogger-usb-drive",
    name: "Jogger USB Drive",
    slug: "jogger-usb-drive",
    categories: ["plastic", "capless"],
    description: "Athletic shoe-shaped USB drive perfect for sports brands and fitness promotions.",
    features: [
      "Athletic shoe design",
      "Sports-themed shape",
      "Fitness industry favorite",
      "Unique conversation starter",
      "Custom color options"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB"],
      dimensions: "Shoe shape",
      colors: ["Various sport shoe colors"],
      material: "Soft PVC"
    },
    images: {
      main: "/images/products/JoggerET-823.png",
      gallery: [
        "/images/products/JoggerET-823.png"
      ]
    }
  },
  {
    id: "light-bulb-usb-drive",
    name: "Light Bulb USB Drive",
    slug: "light-bulb-usb-drive",
    categories: ["plastic"],
    description: "Creative light bulb-shaped USB drive perfect for innovation and bright ideas themes.",
    features: [
      "Light bulb shape",
      "Innovation themed",
      "Clear or frosted options",
      "Creative design",
      "Ideal for tech companies"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB"],
      dimensions: "Light bulb shape",
      colors: ["Clear", "Frosted", "Yellow"],
      material: "Plastic"
    },
    images: {
      main: "/images/products/Light-BulbET-843USB-350x435.png",
      gallery: [
        "/images/products/Light-BulbET-843USB.png"
      ]
    }
  },
  {
    id: "pill-usb-drive",
    name: "Pill USB Drive",
    slug: "pill-usb-drive",
    categories: ["plastic"],
    description: "Pharmaceutical pill-shaped USB drive ideal for medical and healthcare promotions.",
    features: [
      "Pill capsule design",
      "Medical industry themed",
      "Two-tone color options",
      "Compact size",
      "Healthcare marketing tool"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB"],
      dimensions: "Pill shape",
      colors: ["Red/White", "Blue/White", "Custom"],
      material: "Plastic"
    },
    images: {
      main: "/images/products/PillET-203-1-350x435.png",
      gallery: [
        "/images/products/PillET-203-1.png"
      ]
    }
  },
  {
    id: "purple-monster-usb-drive",
    name: "Purple Monster USB Drive",
    slug: "purple-monster-usb-drive",
    categories: ["plastic"],
    description: "Fun purple monster character USB drive perfect for kids' brands and creative campaigns.",
    features: [
      "Cute monster character",
      "Kid-friendly design",
      "Fun promotional item",
      "Soft rubber material",
      "Character merchandising"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB"],
      dimensions: "Monster character shape",
      colors: ["Purple", "Custom colors available"],
      material: "Soft PVC"
    },
    images: {
      main: "/images/products/Purple-MonsterUSB2.png",
      gallery: [
        "/images/products/Purple-MonsterUSB2.png"
      ]
    }
  },
  {
    id: "ranger-usb-drive",
    name: "Ranger USB Drive",
    slug: "ranger-usb-drive",
    categories: ["plastic"],
    description: "Rugged ranger-style USB drive with outdoor-inspired design and durable construction.",
    features: [
      "Rugged outdoor design",
      "Durable construction",
      "Weather-resistant casing",
      "Carabiner attachment",
      "Adventure-ready style"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB", "32GB"],
      dimensions: "Standard USB size",
      colors: ["Green", "Brown", "Black"],
      material: "Reinforced Plastic"
    },
    images: {
      main: "/images/products/RangerET-2291-350x371.png",
      gallery: [
        "/images/products/RangerET-2291.png"
      ]
    }
  },
  {
    id: "sleek-usb-drive",
    name: "Sleek USB Drive",
    slug: "sleek-usb-drive",
    categories: ["plastic"],
    description: "Ultra-sleek USB drive with minimalist design and slim profile for modern professionals.",
    features: [
      "Ultra-slim design",
      "Minimalist aesthetic",
      "Professional appearance",
      "Lightweight construction",
      "Modern styling"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB", "32GB"],
      dimensions: "Slim profile",
      colors: ["Black", "White", "Silver"],
      material: "Premium Plastic"
    },
    images: {
      main: "/images/products/Sleek-ET-2101-350x371.png",
      gallery: [
        "/images/products/Sleek-ET-2101.png"
      ]
    }
  },
  {
    id: "soccer-ball-usb-drive",
    name: "Soccer Ball USB Drive",
    slug: "soccer-ball-usb-drive",
    categories: ["plastic"],
    description: "Soccer ball-shaped USB drive perfect for sports teams and athletic promotions.",
    features: [
      "Realistic soccer ball design",
      "Sports-themed promotion",
      "3D ball shape",
      "Team branding options",
      "Fan merchandise quality"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB"],
      dimensions: "Mini soccer ball size",
      colors: ["Classic black/white", "Custom team colors"],
      material: "Soft PVC"
    },
    images: {
      main: "/images/products/SoccerBallET-233-2-350x435.png",
      gallery: [
        "/images/products/SoccerBallET-233-2.png"
      ]
    }
  },
  {
    id: "sport-usb-drive",
    name: "Sport USB Drive",
    slug: "sport-usb-drive",
    categories: ["plastic"],
    description: "Athletic-inspired USB drive with sporty design and dynamic styling.",
    features: [
      "Dynamic sport design",
      "Athletic styling",
      "Team-ready colors",
      "Durable construction",
      "Active lifestyle branding"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB", "32GB"],
      dimensions: "Standard USB size",
      colors: ["Red", "Blue", "Black", "Team colors"],
      material: "ABS Plastic"
    },
    images: {
      main: "/images/products/Sport-ET-2193-350x371.png",
      gallery: [
        "/images/products/Sport-ET-2193.png"
      ]
    }
  },
  {
    id: "stick-usb-drive",
    name: "Stick USB Drive",
    slug: "stick-usb-drive",
    categories: ["plastic"],
    description: "Classic stick-style USB drive with simple design and reliable performance.",
    features: [
      "Classic stick design",
      "Simple and functional",
      "Reliable performance",
      "Budget-friendly option",
      "Large branding area"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB", "32GB"],
      dimensions: "Standard stick size",
      colors: ["Black", "White", "Blue", "Red", "Custom"],
      material: "Plastic"
    },
    images: {
      main: "/images/products/Srick-ET-2153-350x371.png",
      gallery: [
        "/images/products/Srick-ET-2153.png"
      ]
    }
  },
  {
    id: "lucite-flat-usb-drive",
    name: "Lucite Flat USB Drive",
    slug: "lucite-flat-usb-drive",
    categories: ["usb-cards"],
    description: "Crystal-clear lucite USB drive with flat profile and premium transparent design.",
    features: [
      "Crystal-clear lucite material",
      "Flat profile design",
      "Premium transparent look",
      "Elegant presentation",
      "Luxury gift quality"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB"],
      dimensions: "Flat card design",
      colors: ["Clear", "Frosted"],
      material: "Lucite/Acrylic"
    },
    images: {
      main: "/images/products/LuciteFlatET-804-350x435.png",
      gallery: [
        "/images/products/LuciteFlatET-804.png"
      ]
    }
  },
  // LOW PRIORITY - PHASE 3 (Missing Images)
  {
    id: "long-haul-usb-drive",
    name: "Long Haul USB Drive",
    slug: "long-haul-usb-drive",
    categories: ["metal"],
    description: "Heavy-duty metal USB drive designed for long-term reliability and durability.",
    features: [
      "Heavy-duty construction",
      "Long-term reliability",
      "Rugged metal casing",
      "Industrial strength",
      "Professional grade"
    ],
    specifications: {
      capacity: ["2GB", "4GB", "8GB", "16GB", "32GB", "64GB"],
      dimensions: "Standard USB size",
      colors: ["Silver", "Gunmetal"],
      material: "Heavy-duty Metal"
    },
    images: {
      main: "/images/products/CorporateET-220USB.png",
      gallery: [
        "/images/products/CorporateET-220USB.png"
      ]
    }
  },
  {
    id: "lucite-flip-usb-drive",
    name: "Lucite Flip USB Drive",
    slug: "lucite-flip-usb-drive",
    categories: ["usb-cards"],
    description: "Premium lucite USB drive with innovative flip mechanism and crystal-clear design.",
    features: [
      "Crystal-clear lucite",
      "Flip-open mechanism",
      "Premium quality",
      "Protective flip cover",
      "Luxury presentation"
    ],
    specifications: {
      capacity: ["1GB", "2GB", "4GB", "8GB", "16GB"],
      dimensions: "Flip card design",
      colors: ["Clear", "Frosted"],
      material: "Lucite/Acrylic"
    },
    images: {
      main: "/images/products/FlipCardET-808-350x435.png",
      gallery: [
        "/images/products/FlipCardET-808-350x435.png"
      ]
    }
  }
];

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter(product => product.categories.includes(category));
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getAllCategories(): ProductCategory[] {
  const categories = new Set(products.flatMap(product => product.categories));
  return Array.from(categories);
}

export function getTotalProductCount(): number {
  return products.length;
}

export function getProductCountByCategory(): Record<ProductCategory, number> {
  const counts: Record<string, number> = {};
  products.forEach(product => {
    product.categories.forEach(category => {
      counts[category] = (counts[category] || 0) + 1;
    });
  });
  return counts as Record<ProductCategory, number>;
}