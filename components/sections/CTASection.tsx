import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Phone, ArrowRight, Shield, Clock, Award } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="gradient-primary py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-700/20 rounded-full blur-3xl" />
        
        <Container>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-white">Trusted by 5,000+ Businesses Since 2003</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-blue-50 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who trust us for their custom USB needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                href="/quick-quote" 
                variant="secondary" 
                size="lg"
                className="group bg-white hover:bg-gray-50 text-blue-600 font-semibold px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a
                href="tel:1-888-720-8727"
                className="inline-flex items-center justify-center rounded-lg bg-blue-700 hover:bg-blue-800 px-8 py-4 text-lg font-semibold text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5 animate-pulse-subtle" />
                Call 1-888-720-8727
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-blue-50">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium">No Minimum Order</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-blue-50">
                <Clock className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium">Fast 5-Day Delivery</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-blue-50">
                <Award className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium">100% Guarantee</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}