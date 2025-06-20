import { HeroSection } from "@/components/sections/HeroSection";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { ValuePropositions } from "@/components/sections/ValuePropositions";
import { CompanyInfo } from "@/components/sections/CompanyInfo";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { OrganizationStructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <OrganizationStructuredData />
      <HeroSection />
      <ClientLogos />
      <ProductCategories />
      <ValuePropositions />
      <CompanyInfo />
      <FAQ />
      <CTASection />
    </>
  );
}
