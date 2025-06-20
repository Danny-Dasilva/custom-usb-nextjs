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
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their custom USB drive needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
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
                className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}