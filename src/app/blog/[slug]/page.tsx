import * as React from "react";
  import Link from "next/link";
  import Image from "next/image";
  import { notFound } from "next/navigation";
  import { Navbar } from "@/components/navbar";
  import { Footer } from "@/components/footer";
  import { getAllPosts } from "@/lib/blog";
  import { ArrowLeft, Calendar } from "lucide-react";
  import { MdxWrapper } from "@/components/mdx-wrapper";

  export function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  }

  interface PageProps {
    params: Promise<{ slug: string }>;
  }

  export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const posts = getAllPosts();
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
      notFound();
    }

    return (
      <>
        <Navbar />
        <main className="flex-grow pt-24 pb-20">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            {/* Back to Blog */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-muted-foreground hover:text-primary mb-8 transition-colors group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Back to Articles
            </Link>

            {/* Cover Photo */}
            {post.coverImage && (
              <div className="relative h-64 md:h-[350px] w-full rounded-3xl overflow-hidden mb-8 bg-muted border border-border/40 shadow-sm">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            )}

            {/* Blog Post Header */}
            <div className="space-y-4 mb-10 border-b border-border/40 pb-8">
              <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap gap-2 pt-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 bg-muted border border-border/40 text-muted-foreground text-xs rounded-md font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Render MDX Body Content */}
            <div className="prose dark:prose-invert max-w-none text-muted-foreground leading-relaxed text-sm md:text-base prose-headings:font-bold prose-headings:text-foreground prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-muted prose-pre:border prose-pre:border-border/60 prose-pre:p-4 prose-pre:rounded-2xl prose-hr:border-border/50">
              <MdxWrapper slug={slug} />
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
