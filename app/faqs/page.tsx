"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long will it take once I place my order?",
      answer: "Once we receive your order and you approve the artwork, it takes approximately 5 to 7 business days to produce your custom USB drives. Allow another 5 business days for delivery."
    },
    {
      question: "Are there setup fees?",
      answer: "There are never any setup fees when you work with us."
    },
    {
      question: "How much will it cost to ship?",
      answer: "Nothing. Standard shipping is FREE."
    },
    {
      question: "Where will my order ship from?",
      answer: "Your order will ship directly from China to the address you specify. We will use the most efficient method possible."
    },
    {
      question: "Will I get a tracking number after my order has shipped?",
      answer: "Yes. Once your order has shipped, an email with tracking information will be sent to the email address associated with your order."
    },
    {
      question: "What shipping company do you use?",
      answer: "For international orders we typically use DHL. However, we use all the major carries depending on the product and timeframe it needs to get to you."
    },
    {
      question: "What if I need my order fast. Do you offer express shipping?",
      answer: "Yes. When you place your order, please indicate the date you need your order by. If it is outside our normal production time, express shipping is an option. However, if express shipping is needed, there will be additional shipping charges which we will quote at that time."
    },
    {
      question: "What sizes of USB flash drives do you offer?",
      answer: "We offer a wide range of the most popular sizes starting from 128 MB up to much larger drives such as 64 GB. The most common size drives for promotional purposes are 1 GB, 2 GB, 4 GB, 8 GB, and 16 GB. If you do not see the size you are looking for in the drop down, please let us know what you are looking for."
    },
    {
      question: "How much data can a custom USB drive hold?",
      answer: `Though it will vary based on file size, resolution etc… here is a simple reference chart:

4 GB: 225 Photos (10MP) | 10 min Video (1080 AVCHD) | 250 Music (MP3) | 1 GB Office Files
8 GB: 450 Photos (10MP) | 20 min Video (1080 AVCHD) | 500 Music (MP3) | 2 GB Office Files
16 GB: 900 Photos (10MP) | 40 min Video (1080 AVCHD) | 1000 Music (MP3) | 4 GB Office Files
32 GB: 1,800 Photos (10MP) | 80 min Video (1080 AVCHD) | 2000 Music (MP3) | 8 GB Office Files
64 GB: 3,600 Photos (10MP) | 160 min Video (1080 AVCHD) | 4000 Music (MP3) | 16 GB Office Files
128 GB: 7,200 Photos (10MP) | 320 min Video (1080 AVCHD) | 8000 Music (MP3) | 32 GB Office Files

*These are approximations: results will vary based on file size, resolution, compression, bit rate, content, host device, pre-loaded files and other factors.`
    },
    {
      question: "I want to preload data onto my custom flash drives. What are my options?",
      answer: `We offer a variety of preloaded data options such as:
• Data Preload
• Menu Prompt Autorun
• AutoPlay Autorun
• Encrypted Drives
• Non-Erasable Content`
    },
    {
      question: "What are the Read/Write Speeds of your flash drives?",
      answer: "Expect an average writing speed of 3.5 to 4 megabytes per second and a reading speed of about 15 to 16 megabytes per second. That means about 1 GB of information can load onto the drive in about four minutes and download in about a minute."
    },
    {
      question: "What are my printing options?",
      answer: "We offer Screen Printing, Four Color Digital, Rubber Stamping and Laser Engraving. The type and quantity of drive you order will typically determine the method of printing."
    },
    {
      question: "Is there a minimum order?",
      answer: `Yes. The minimum order quantities are as follows:
• 100 – USB Drives
• 500 – Custom Headphones
• 500 – Custom USB Cables
• 200 – Custom Power banks

NOTE: Higher quantities will result in lower per unit costs.`
    },
    {
      question: "Do you offer a warranty on your products?",
      answer: `Yes. We stand behind every product we sell. Due to varying technology, we offer the following warranties against manufacturer defects:
• 5 Year – USB Drives
• 6 Months – Custom Headphones
• 6 Months – Custom USB Cables
• 1 Year – Custom Power banks`
    },
    {
      question: "Will your USB drives work with any computer?",
      answer: "All of our products are based on the USB 2.0 standard and are backwards compatible to USB 1.1. We also offer USB 3.0 drives and they are also backwards compatible as well. However, older computers may not be able to use the newer USB drives and all USB 2.0 and USB 3.0 drives will operate at a slower rate in a USB 1.1 port."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our custom USB drives and services.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex items-center justify-between transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 text-primary-50">
              Our team is here to help with any specific questions about your custom USB drive needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/quick-quote" 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Get a Quick Quote
              </Button>
              <Button 
                href="tel:1-888-720-8727" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Call 1-888-720-8727
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}