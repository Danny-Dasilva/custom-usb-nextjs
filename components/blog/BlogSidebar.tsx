import Link from "next/link";
import { BlogCategory, BlogTag } from "@/types/blog";
import { getRecentPosts } from "@/lib/blog";
import { Button } from "@/components/ui/Button";
import { Search, Tag, Folder, Clock } from "lucide-react";

interface BlogSidebarProps {
  categories: BlogCategory[];
  tags: BlogTag[];
}

export function BlogSidebar({ categories, tags }: BlogSidebarProps) {
  const recentPosts = getRecentPosts(3);

  return (
    <div className="space-y-8">
      {/* Search Widget */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Search className="h-5 w-5 text-blue-600" />
          Search Blog
        </h3>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Button type="submit" className="w-full">
            Search
          </Button>
        </form>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Clock className="h-5 w-5 text-blue-600" />
          Recent Posts
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                {post.title}
              </h4>
              <p className="text-xs text-gray-500">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric"
                })}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Folder className="h-5 w-5 text-blue-600" />
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/blog/category/${category.slug}`}
              className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                {category.name}
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {category.postCount}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Tag className="h-5 w-5 text-blue-600" />
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 15).map((tag) => (
            <Link
              key={tag.id}
              href={`/blog/tag/${tag.slug}`}
              className="inline-block bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 text-sm px-3 py-1 rounded-full transition-colors"
            >
              {tag.name}
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Widget */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-3">
          Need Custom USB Drives?
        </h3>
        <p className="text-blue-100 text-sm mb-4">
          Get a free quote for your custom USB drive project. No minimum order required!
        </p>
        <Button 
          href="/quick-quote" 
          variant="secondary"
          className="w-full bg-white text-blue-600 hover:bg-gray-50"
        >
          Get Free Quote
        </Button>
      </div>
    </div>
  );
}