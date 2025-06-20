import { Container } from "@/components/ui/Container";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Marketing Director",
    company: "TechCorp Solutions",
    content: "Custom USB Source delivered exactly what we needed for our corporate event. The quality was outstanding and the turnaround time was impressive. Our branded USB drives were a huge hit with clients!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Brand Manager",
    company: "Creative Agency",
    content: "Working with Custom USB Source has been fantastic. They helped us create unique, custom-shaped USB drives that perfectly represented our brand. The attention to detail and customer service was exceptional.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jennifer Williams",
    title: "Event Coordinator",
    company: "Global Events Inc",
    content: "I've ordered from Custom USB Source multiple times for different events. They consistently deliver high-quality products on time. The variety of customization options is impressive, and their team is always helpful.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-blue-700">Customer Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from satisfied customers who've transformed their brands with our custom USB drives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="border-t border-gray-100 pt-6">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-blue-600 text-sm font-medium">{testimonial.title}</div>
                <div className="text-gray-500 text-sm">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">4.9/5</span>
            </div>
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold text-gray-900">Rated Excellent</span> by 5,000+ customers
            </p>
            <p className="text-sm text-gray-500">
              Based on reviews from verified customers across multiple platforms
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}