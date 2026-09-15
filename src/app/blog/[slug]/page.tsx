import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "@/components/sites/clay/blog/data";
import { BlogPostDetail } from "@/components/sites/clay/blog/BlogPostDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article | Clay Blog",
    };
  }

  return {
    title: `${post.title} | Clay Blog`,
    description: post.excerpt,
  };
}

export default async function RootBlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="font-cy-sans">
      <BlogPostDetail post={post} />
    </div>
  );
}
