import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { getPostBySlug, getAllPosts, blogCategories, blogTags } from "@/lib/blog";
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Custom USB Source Blog`,
    description: post.description,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.modifiedAt,
      authors: [post.author],
      images: post.featuredImage ? [post.featuredImage] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex(p => p.slug === slug);
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="py-16 md:py-24 bg-gray-50 min-h-screen">
      <Container>
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">{post.title}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Featured Image */}
              {post.featuredImage && (
                <div className="relative h-64 md:h-96 bg-gray-100">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              <div className="p-8">
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.map((category) => (
                    <Link
                      key={category}
                      href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, '')}`}
                      className="inline-block bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                    >
                      {category}
                    </Link>
                  ))}
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {post.title}
                </h1>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8 pb-8 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span>By {post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>{formattedDate}</span>
                  </div>
                  {post.readingTime && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      <span>{post.readingTime} min read</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div 
                  className="prose prose-gray max-w-none prose-lg prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:hover:text-blue-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Tags:</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                          className="inline-block bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 text-sm px-3 py-1 rounded-full transition-colors"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>

            {/* Navigation */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {previousPost && (
                <Link
                  href={`/blog/${previousPost.slug}`}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-center gap-3 text-blue-600 text-sm font-medium mb-2">
                    <ArrowLeft className="h-4 w-4" />
                    Previous Post
                  </div>
                  <h3 className="text-gray-900 font-semibold group-hover:text-blue-600 transition-colors line-clamp-2">
                    {previousPost.title}
                  </h3>
                </Link>
              )}
              
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group md:text-right"
                >
                  <div className="flex items-center justify-end gap-3 text-blue-600 text-sm font-medium mb-2">
                    Next Post
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <h3 className="text-gray-900 font-semibold group-hover:text-blue-600 transition-colors line-clamp-2">
                    {nextPost.title}
                  </h3>
                </Link>
              )}
            </div>

            {/* CTA Section */}
            <div className="mt-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">
                Ready to Create Your Custom USB Drives?
              </h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Transform your brand with premium promotional USB drives. Get a free quote today and see how we can help make your marketing memorable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  href="/quick-quote" 
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-50"
                >
                  Get Free Quote
                </Button>
                <Button 
                  href="/products" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Browse Products
                </Button>
              </div>
            </div>
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