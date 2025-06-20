import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { getPostBySlug, getAllPosts, blogCategories, blogTags } from "@/lib/blog";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Tag } from "lucide-react";

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
            <article className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Featured Image */}
              {post.featuredImage && (
                <div className="relative h-64 md:h-96 bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              )}

              <div className="p-8 md:p-12">
                {/* Categories */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {post.categories.map((category) => (
                    <Link
                      key={category}
                      href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, '')}`}
                      className="inline-block bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105"
                    >
                      {category}
                    </Link>
                  ))}
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-8 leading-tight">
                  {post.title}
                </h1>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-12 pb-8 relative">
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                    <User className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium">By {post.author}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium">{formattedDate}</span>
                  </div>
                  {post.readingTime && (
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">{post.readingTime} min read</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div 
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="mt-12 pt-8 relative">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <Tag className="h-5 w-5 text-blue-600" />
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                          className="inline-block bg-gradient-to-r from-gray-100 to-gray-50 hover:from-blue-50 hover:to-indigo-50 text-gray-700 hover:text-blue-600 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 border border-gray-200 hover:border-blue-200 shadow-sm hover:shadow transform hover:scale-105"
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