"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BlogPost } from "./types";
import { blogPosts } from "./data";
import { Nav } from "../Nav";
import { BlogSubNav } from "./BlogSubNav";
import { BlogCard } from "./BlogCard";
import { Footer } from "../Closing";
import { Container } from "../primitives";
import { cn } from "@/lib/utils";

interface DetailProps {
  post: BlogPost;
}

export function BlogPostDetail({ post }: DetailProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  // Related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  // Fallback related posts if fewer than 3 in same category
  const fallbackRelated = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const displayRelated = relatedPosts.length >= 2 ? relatedPosts : fallbackRelated;

  useEffect(() => {
    const handleScroll = () => {
      const sections = post.contentSections || [];
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [post]);

  return (
    <div className="min-h-screen bg-[var(--cy-oat-50)] text-black font-cy-sans">
      <Nav variant="light" />

      {/* Top sculpt banner */}
      <div className="pt-16 bg-[#2b0827] text-[#fbf6f0] py-2 px-4 z-20 text-xs sm:text-sm font-medium">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-bold tracking-wider uppercase font-cy-mono text-[#ff80bf] text-xs">
                SCULPT
              </span>
              <span className="text-[#f1e6f1] truncate">
                The most creative minds in GTM. October 8, San Francisco
              </span>
            </div>
            <a
              href="https://www.sculpt.clay.com"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-1.5 shrink-0 text-[#ff80bf] hover:text-white transition-colors"
            >
              <span className="font-semibold uppercase text-xs tracking-wider">
                GET TICKETS
              </span>
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </Container>
      </div>

      <BlogSubNav
        selectedCategory={post.category}
        onSelectCategory={() => {}}
        searchQuery=""
        onSearchChange={() => {}}
      />

      <article className="py-12 sm:py-16 bg-white">
        <Container>
          {/* Article Header */}
          <div className="max-w-4xl mb-12">
            <div className="flex items-center gap-2 text-xs font-cy-mono uppercase tracking-wider text-black/50 mb-4">
              <Link href="/clay/blog" className="hover:text-black transition-colors">
                BLOG
              </Link>
              <span>/</span>
              <span className="text-black font-medium">{post.category}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-black tracking-tight mb-8">
              {post.title}
            </h1>

            {/* Author & Date Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[var(--cy-oat-300)] text-xs sm:text-sm font-cy-mono text-black/70">
              <div className="flex items-center gap-4">
                <span className="text-black/50 uppercase">Author</span>
                <div className="flex items-center gap-2 text-black font-medium">
                  {post.authors.map((author, i) => (
                    <span key={i}>
                      {author.name}
                      {i < post.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-black/50 uppercase">Date</span>
                <span className="text-black font-medium">{post.date}</span>
                {post.readTime && (
                  <>
                    <span className="text-black/30">•</span>
                    <span>{post.readTime}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Hero Banner Visual */}
          {post.bannerImage && (
            <div className="max-w-4xl rounded-2xl overflow-hidden mb-12 border border-[var(--cy-oat-300)] bg-neutral-900 shadow-sm aspect-[16/9] sm:aspect-[21/9]">
              <img
                src={post.bannerImage}
                alt={post.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png";
                }}
              />
            </div>
          )}

          {/* Two Column Layout: Main Body + Sticky Table of Contents */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left/Main Column */}
            <div className="lg:col-span-8 space-y-8 max-w-none text-black/85 leading-relaxed text-base sm:text-lg font-normal">
              {post.contentSections && post.contentSections.length > 0 ? (
                post.contentSections.map((sec) => (
                  <section key={sec.id} id={sec.id} className="scroll-mt-28 space-y-4">
                    {sec.heading && (
                      <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-black pt-4">
                        {sec.heading}
                      </h2>
                    )}

                    <p className="text-base sm:text-lg text-black/80 leading-relaxed whitespace-pre-line font-normal">
                      {sec.body}
                    </p>

                    {/* Code Snippet */}
                    {sec.codeSnippet && (
                      <div className="my-6 rounded-xl bg-[#111827] text-emerald-400 p-5 font-mono text-xs sm:text-sm overflow-x-auto border border-neutral-800 shadow-inner">
                        <pre>{sec.codeSnippet}</pre>
                      </div>
                    )}

                    {/* Callout Quote Box */}
                    {sec.callout && (
                      <div className="my-6 p-6 rounded-xl bg-[var(--cy-oat-100)] border-l-4 border-black text-black/90 font-medium text-base leading-relaxed italic">
                        &ldquo;{sec.callout}&rdquo;
                      </div>
                    )}
                  </section>
                ))
              ) : (
                <div className="space-y-6">
                  <p className="text-lg text-black/80 leading-relaxed font-normal">
                    {post.excerpt}
                  </p>
                  <p className="text-base text-black/75 leading-relaxed font-normal">
                    Modern GTM engineering blends programmatic data enrichment, real-time trigger webhooks, and agentic workflows to build compounding outbound and inbound revenue engines.
                  </p>
                </div>
              )}
            </div>

            {/* Right Column: Sticky Table of Contents */}
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <aside className="lg:col-span-4 sticky top-28 hidden lg:block p-6 rounded-2xl bg-[var(--cy-oat-50)] border border-[var(--cy-oat-300)]">
                <h3 className="text-xs font-cy-mono uppercase tracking-[0.14em] font-semibold text-black/60 mb-4">
                  INDEX
                </h3>
                <nav className="space-y-2.5">
                  {post.tableOfContents.map((toc) => {
                    const isActive = activeSection === toc.id;
                    return (
                      <a
                        key={toc.id}
                        href={`#${toc.id}`}
                        className={cn(
                          "block text-xs leading-snug transition-colors",
                          isActive
                            ? "font-semibold text-black translate-x-1"
                            : "text-black/65 hover:text-black",
                        )}
                      >
                        {toc.title}
                      </a>
                    );
                  })}
                </nav>
              </aside>
            )}
          </div>

          {/* Related Articles Section */}
          <div className="mt-20 pt-12 border-t border-[var(--cy-oat-300)]">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-2xl sm:text-3xl text-black">
                More from the Clay blog
              </h3>
              <Link
                href="/clay/blog"
                className="text-xs font-semibold text-black/70 hover:text-black transition-colors"
              >
                View all articles →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayRelated.map((rel) => (
                <BlogCard key={rel.id || rel.slug} post={rel} />
              ))}
            </div>
          </div>
        </Container>
      </article>

      <Footer />
    </div>
  );
}
