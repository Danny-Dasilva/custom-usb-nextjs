"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function QuickQuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productType: "",
    quantity: "",
    capacity: "",
    message: "",
    deadline: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your quote request! We'll get back to you within 24 hours.");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get a Quick Quote
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ready to get started? Fill out the form below and we&apos;ll provide you with a 
              free quote within 24 hours. No setup fees and free standard shipping included.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-3 rounded-full mb-2">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div className="font-semibold">No Setup Fees</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-3 rounded-full mb-2">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="font-semibold">Free Shipping</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-3 rounded-full mb-2">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="font-semibold">24 Hour Response</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Quote Form */}
      <section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Contact Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Product Information */}
              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Product Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-1">
                      Product Type *
                    </label>
                    <select
                      id="productType"
                      name="productType"
                      required
                      value={formData.productType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a product type</option>
                      <option value="plastic-usb">Plastic USB Drives</option>
                      <option value="metal-usb">Metal USB Drives</option>
                      <option value="wood-usb">Wood USB Drives</option>
                      <option value="leather-usb">Leather USB Drives</option>
                      <option value="usb-cards">USB Cards</option>
                      <option value="usb-pens">USB Executive Pens</option>
                      <option value="power-banks">Custom Power Banks</option>
                      <option value="ear-buds">Custom Ear Buds</option>
                      <option value="cables">Custom Cables</option>
                      <option value="custom-design">100% Custom Design</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                      Quantity *
                    </label>
                    <select
                      id="quantity"
                      name="quantity"
                      required
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select quantity</option>
                      <option value="100-249">100 - 249</option>
                      <option value="250-499">250 - 499</option>
                      <option value="500-999">500 - 999</option>
                      <option value="1000-2499">1,000 - 2,499</option>
                      <option value="2500-4999">2,500 - 4,999</option>
                      <option value="5000+">5,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="capacity" className="block text-sm font-medium text-gray-700 mb-1">
                      USB Capacity (if applicable)
                    </label>
                    <select
                      id="capacity"
                      name="capacity"
                      value={formData.capacity}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select capacity</option>
                      <option value="1GB">1 GB</option>
                      <option value="2GB">2 GB</option>
                      <option value="4GB">4 GB</option>
                      <option value="8GB">8 GB</option>
                      <option value="16GB">16 GB</option>
                      <option value="32GB">32 GB</option>
                      <option value="64GB">64 GB</option>
                      <option value="128GB">128 GB</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Deadline
                    </label>
                    <input
                      type="date"
                      id="deadline"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Project Details
                </h3>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your project, including any specific design requirements, logo details, intended use, or special requests..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Get My Free Quote
              </Button>
            </form>
          </div>
        </Container>
      </section>

      {/* Contact Alternative */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Prefer to Talk Directly?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team is standing by to help with your custom USB drive needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center gap-3 p-6 bg-white rounded-lg border border-gray-200">
                <Phone className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Call Us</div>
                  <div className="text-primary">1-888-720-8727</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 p-6 bg-white rounded-lg border border-gray-200">
                <Mail className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Email Us</div>
                  <div className="text-primary">sales@customusbsource.com</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}