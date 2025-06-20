import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { getAllPosts, blogCategories, blogTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog - Custom USB Source",
  description: "Stay up to date with the latest in custom USB drives, technology trends, and promotional product insights from Custom USB Source.",
  keywords: "usb drive blog, promotional product news, technology trends, custom electronics blog",
  openGraph: {
    title: "Blog - Custom USB Source",
    description: "Stay up to date with the latest in custom USB drives, technology trends, and promotional product insights from Custom USB Source.",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="py-16 md:py-24 bg-gray-50 min-h-screen">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-blue-700">Latest Insights</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Custom USB Source Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Stay up to date with the latest in custom USB drives, technology trends, and promotional product insights
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Blog Posts */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {/* Pagination would go here if needed */}
            {posts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No blog posts found.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar categories={blogCategories} tags={blogTags} />
          </div>
        </div>
      </Container>
    </div>
  );
}