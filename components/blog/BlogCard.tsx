import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long", 
    day: "numeric"
  });

  return (
    <article className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group hover:border-blue-200 transform hover:-translate-y-2">
      {/* Featured Image */}
      {post.featuredImage && (
        <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <ArrowRight className="h-4 w-4 text-blue-600" />
          </div>
        </div>
      )}

      <div className="p-6 md:p-8">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.map((category) => (
            <Link
              key={category}
              href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, '')}`}
              className="inline-block bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 shadow-sm hover:shadow border border-blue-100"
            >
              {category}
            </Link>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3 text-base">
          {post.excerpt || post.description}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full">
              <Calendar className="h-3 w-3 text-blue-600" />
              <span className="text-xs font-medium">{formattedDate}</span>
            </div>
            {post.readingTime && (
              <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full">
                <Clock className="h-3 w-3 text-blue-600" />
                <span className="text-xs font-medium">{post.readingTime} min read</span>
              </div>
            )}
          </div>
        </div>

        {/* Author */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full">
            <User className="h-3 w-3 text-blue-600" />
            <span className="text-xs font-medium">By {post.author}</span>
          </div>

          {/* Read More Link */}
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm px-4 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105 group/link"
          >
            Read More
            <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}