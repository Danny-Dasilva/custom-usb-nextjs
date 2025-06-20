import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata = {
  title: "Blog - Custom USB Source",
  description: "Stay updated with the latest trends in custom USB drives, promotional products, and technology news from Custom USB Source.",
  keywords: "usb drive blog, promotional product news, technology trends, custom electronics blog",
};

const blogPosts = [
  {
    title: "Top 10 Coolest Flash Drives",
    excerpt: "Discover the most innovative and creative USB drive designs that capture attention and make lasting impressions.",
    date: "2024-06-15",
    author: "Custom USB Team",
    slug: "top-ten-coolest-flash-drives",
    category: "Product Showcase"
  },
  {
    title: "5 Ways to Squeeze More Life from Your Old USB Drive",
    excerpt: "Learn practical tips to extend the lifespan of your USB drives and get the most value from your storage devices.",
    date: "2024-06-10",
    author: "Tech Specialist",
    slug: "5-ways-to-squeeze-more-life-from-your-old-usb-drive",
    category: "Tech Tips"
  },
  {
    title: "Flash Drive Lingo: What's the Difference Between Flash Drives?",
    excerpt: "Understanding the terminology and technical differences between various types of flash storage devices.",
    date: "2024-06-05",
    author: "Technical Writer",
    slug: "flash-drive-lingo-whats-the-difference-between-flash-drives",
    category: "Education"
  },
  {
    title: "Top Five Geek Gifts for Christmas",
    excerpt: "The best tech gifts for the technology enthusiasts in your life, featuring custom USB drives and gadgets.",
    date: "2024-05-20",
    author: "Gift Guide Expert",
    slug: "top-five-geek-gifts-for-christmas",
    category: "Gift Ideas"
  },
  {
    title: "5 Can't Miss Cyber Monday Sites for Tech Lovers",
    excerpt: "The best online destinations for technology deals and custom promotional products during Cyber Monday.",
    date: "2024-05-15",
    author: "Shopping Expert",
    slug: "5-cant-miss-cyber-monday-sites-for-tech-lovers",
    category: "Shopping"
  }
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600">
              Stay updated with the latest trends in custom USB drives, promotional products, 
              and technology insights from our team of experts.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>

            {/* Pagination placeholder */}
            <div className="mt-12 text-center">
              <p className="text-gray-500 mb-4">
                Showing 5 of 5 posts
              </p>
              {/* Future pagination would go here */}
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 text-primary-50">
              Get the latest updates on custom USB drives, promotional product trends, 
              and technology insights delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/quick-quote" 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Get a Quote
              </Button>
              <Button 
                href="mailto:sales@customusbsource.com" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}