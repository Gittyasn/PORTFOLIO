import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getAllPosts } from "@/lib/blog";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog | Yaswanth Bandaru",
  description: "Technical articles, design decisions, and tutorials on modern full-stack web engineering.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          {/* Header */}
          <div className="border-b border-border/60 pb-8 mb-12 space-y-4">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Technical Blog
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl">
              Sharing lessons, design systems, and programming insights from my development journey.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-16 bg-card border border-border rounded-3xl">
              <p className="text-muted-foreground text-sm">No blog posts found. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-card border border-border/80 rounded-3xl overflow-hidden group flex flex-col justify-between h-full glow-card shadow-sm"
                >
                  <div>
                    {/* Post Cover */}
                    {post.coverImage && (
                      <div className="relative h-48 w-full overflow-hidden bg-muted">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      {/* Date & Tags */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5 font-medium">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-lg md:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed line-clamp-3">
                        {post.description}
                      </p>
                    </div>
                  </div>

                  {/* Footer links */}
                  <div className="p-6 pt-0 flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 bg-muted text-muted-foreground text-[10px] rounded-md font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-sm font-bold text-primary hover:text-primary-hover tracking-tight transition-colors cursor-pointer group/link"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
