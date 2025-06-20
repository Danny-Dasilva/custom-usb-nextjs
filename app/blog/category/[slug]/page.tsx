import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { getPostsByCategory, blogCategories, blogTags } from "@/lib/blog";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = blogCategories.find(cat => cat.slug === slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} - Custom USB Source Blog`,
    description: category.description || `Read articles about ${category.name} from Custom USB Source`,
    openGraph: {
      title: `${category.name} - Custom USB Source Blog`,
      description: category.description || `Read articles about ${category.name} from Custom USB Source`,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = blogCategories.find(cat => cat.slug === slug);
  const posts = getPostsByCategory(slug);

  if (!category) {
    notFound();
  }

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
            <span className="text-gray-900">{category.name}</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-blue-700">Category</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {category.name}
          </h1>
          {category.description && (
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {category.description}
            </p>
          )}
          <div className="mt-4">
            <span className="text-sm text-gray-500">
              {posts.length} {posts.length === 1 ? 'article' : 'articles'} in this category
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Blog Posts */}
          <div className="lg:col-span-2">
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">No articles found in this category.</p>
                <Link 
                  href="/blog"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  ← Back to all articles
                </Link>
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