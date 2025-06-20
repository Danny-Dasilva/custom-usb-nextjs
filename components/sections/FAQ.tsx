"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is the minimum order quantity?",
    answer: "We don't have a minimum order quantity! Whether you need 10 USB drives or 10,000, we can fulfill your order. However, bulk orders receive better pricing discounts.",
  },
  {
    id: 2,
    question: "How long does production take?",
    answer: "Standard production time is 5-7 business days after artwork approval. Rush orders are available for faster delivery. Express shipping options can get your order to you in as little as 2-3 business days.",
  },
  {
    id: 3,
    question: "Can you create completely custom shapes?",
    answer: "Absolutely! Our manufacturers specialize in custom mold making. We can create USB drives in virtually any shape to match your brand, product, or logo. Custom shapes may require additional lead time.",
  },
  {
    id: 4,
    question: "What file formats do you accept for branding?",
    answer: "We accept most common file formats including AI, EPS, PDF, PNG, and JPG. For best results, vector files (AI, EPS, PDF) are preferred. Our design team can also help create artwork if needed.",
  },
  {
    id: 5,
    question: "Do you offer data preloading services?",
    answer: "Yes! We can preload your USB drives with any digital content including brochures, presentations, videos, software, or marketing materials. This service is included at no extra charge.",
  },
  {
    id: 6,
    question: "What warranty do you provide?",
    answer: "All our USB drives come with a 1-year warranty against manufacturing defects. We stand behind the quality of our products and will replace any defective units promptly.",
  },
];

export function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-6">
            <HelpCircle className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Get quick answers to common questions about our custom USB drives and services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                      openFAQ === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFAQ === faq.id && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our friendly team is here to help you find the perfect custom USB solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button href="/quick-quote" className="bg-blue-600 hover:bg-blue-700">
                  Get a Free Quote
                </Button>
                <Button 
                  href="tel:1-888-720-8727" 
                  variant="outline" 
                  className="border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  Call 1-888-720-8727
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}