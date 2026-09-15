"use client";

import { useMemo, useState } from "react";
import { Nav } from "../Nav";
import { Footer } from "../Closing";
import { BlogHero } from "./BlogHero";
import { BlogSubNav } from "./BlogSubNav";
import { BestOfKilnCarousel } from "./BestOfKilnCarousel";
import { BlogCategoryRow } from "./BlogCategoryRow";
import { BlogCard } from "./BlogCard";
import { blogPosts } from "./data";
import { BlogCategory } from "./types";
import { Container } from "../primitives";

export function BlogHub() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | "All">("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Featured "Best of the Kiln" posts
  const bestOfKiln = useMemo(() => {
    return blogPosts.filter((p) => p.isFeatured || p.slug.includes("series-d") || p.slug.includes("build-custom") || p.slug.includes("cold-outbound") || p.slug.includes("top-1"));
  }, []);

  // Categorized sections
  const thoughtLeadership = useMemo(() => {
    return blogPosts.filter((p) => p.category === "Thought Leadership");
  }, []);

  const caseStudies = useMemo(() => {
    return blogPosts.filter((p) => p.category === "Case Studies");
  }, []);

  const outboundPlays = useMemo(() => {
    return blogPosts.filter((p) => p.category === "Outbound Plays");
  }, []);

  const announcements = useMemo(() => {
    return blogPosts.filter((p) => p.category === "Clay Announcements");
  }, []);

  // Filtered posts when searching or picking a category
  const filteredPosts = useMemo(() => {
    let list = blogPosts;

    if (selectedCategory !== "All") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.authors.some((a) => a.name.toLowerCase().includes(q)),
      );
    }

    return list;
  }, [selectedCategory, searchQuery]);

  const isBrowsingAll = selectedCategory === "All" && !searchQuery.trim();

  return (
    <div className="min-h-screen bg-[var(--cy-oat-50)] text-black font-cy-sans">
      <Nav variant="light" />

      <main>
        <BlogHero />

        <BlogSubNav
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {isBrowsingAll ? (
          <div>
            {/* Best of the Kiln */}
            <BestOfKilnCarousel posts={bestOfKiln} />

            {/* Categorized Rows */}
            <div className="bg-white">
              <BlogCategoryRow
                title="THOUGHT LEADERSHIP"
                category="Thought Leadership"
                posts={thoughtLeadership}
                onSelectCategory={setSelectedCategory}
              />

              <BlogCategoryRow
                title="CASE STUDIES"
                category="Case Studies"
                posts={caseStudies}
                onSelectCategory={setSelectedCategory}
              />

              <BlogCategoryRow
                title="OUTBOUND PLAYS"
                category="Outbound Plays"
                posts={outboundPlays}
                onSelectCategory={setSelectedCategory}
              />

              <BlogCategoryRow
                title="CLAY ANNOUNCEMENTS"
                category="Clay Announcements"
                posts={announcements}
                onSelectCategory={setSelectedCategory}
              />
            </div>
          </div>
        ) : (
          /* Filtered Grid View */
          <div className="bg-white py-12 min-h-[600px]">
            <Container>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-serif font-normal text-black">
                    {selectedCategory !== "All" ? selectedCategory : "Search Results"}
                  </h2>
                  <p className="text-sm text-neutral-500 mt-1 font-cy-mono">
                    Showing {filteredPosts.length}{" "}
                    {filteredPosts.length === 1 ? "article" : "articles"}
                    {searchQuery && ` matching "${searchQuery}"`}
                  </p>
                </div>
              </div>

              {filteredPosts.length === 0 ? (
                <div className="text-center py-20 bg-[var(--cy-oat-50)] rounded-2xl border border-[var(--cy-oat-200)]">
                  <p className="text-lg font-medium text-neutral-800">No articles found</p>
                  <p className="text-sm text-neutral-500 mt-1">
                    Try another search term or select a different category.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory("All");
                      setSearchQuery("");
                    }}
                    className="mt-4 px-4 py-2 bg-black text-white text-xs font-semibold rounded-lg hover:bg-neutral-800 transition-colors"
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.id || post.slug} post={post} />
                  ))}
                </div>
              )}
            </Container>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
