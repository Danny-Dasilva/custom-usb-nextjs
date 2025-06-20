import Image from "next/image";
import { Container } from "@/components/ui/Container";

const clients = [
  { name: "Pioneer", logo: "/images/clients/1000px-Pioneer_logo.svg_.png" },
  { name: "BMW", logo: "/images/clients/BMW-logo-2000-2048x2048.png" },
  { name: "Bayer", logo: "/images/clients/Bayer-logo-A90BE019B5-seeklogo.com_.png" },
  { name: "Caterpillar", logo: "/images/clients/Caterpillar-logo.png" },
  { name: "DHL", logo: "/images/clients/DHL-logo-vector.png" },
  { name: "Epson", logo: "/images/clients/Epson_logo_logotype.png" },
  { name: "Coca Cola", logo: "/images/clients/coca-cola-logo-260x260.png" },
  { name: "LinkedIn", logo: "/images/clients/linkedin-icon-logo-05B2880899-seeklogo.com_.png" },
];

export function ClientLogos() {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-gray-100">
      <Container>
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
            Trusted by Leading Brands
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-4"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={120}
                height={60}
                className="opacity-60 hover:opacity-100 transition-opacity filter hover:filter-none max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}