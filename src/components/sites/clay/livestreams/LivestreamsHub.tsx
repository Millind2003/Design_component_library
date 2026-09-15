"use client";

import { useMemo, useState } from "react";
import { Nav } from "../Nav";
import { Footer } from "../Closing";
import { LivestreamsHero } from "./LivestreamsHero";
import { LivestreamsFilterBar } from "./LivestreamsFilterBar";
import { LivestreamsRow } from "./LivestreamsRow";
import { LivestreamsCard } from "./LivestreamsCard";
import { livestreamsData } from "./data";
import { Container } from "../primitives";

export function LivestreamsHub() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Categories definition
  const sections = useMemo(() => {
    const upcoming = livestreamsData.filter((i) => i.status === "upcoming" || i.status === "today");
    const binge = livestreamsData.filter((i) => i.status === "replay").slice(0, 8);
    const howClay = livestreamsData.filter((i) => i.category === "How Clay uses Clay");
    const futureGtm = livestreamsData.filter((i) => i.category === "The future of GTM");
    const top1 = livestreamsData.filter((i) => i.category === "The Top 1 %");
    const strategy = livestreamsData.filter((i) => i.category === "GTM Strategy & Best Practices");
    const playbooks = livestreamsData.filter((i) => i.category === "Tactical Playbooks");
    const productDemos = livestreamsData.filter((i) => i.category === "Product Demos & Trainings");
    const partners = livestreamsData.filter((i) => i.category === "Partners");
    const community = livestreamsData.filter((i) => i.category === "Community & Events");
    const career = livestreamsData.filter((i) => i.category === "Career & Education");
    const emea = livestreamsData.filter((i) => i.category === "EMEA");

    return [
      { id: "upcoming", label: "Upcoming live", items: upcoming },
      { id: "binge", label: "Binge our best content", items: binge },
      { id: "how-clay-uses-clay", label: "How Clay uses Clay", items: howClay },
      { id: "future-of-gtm", label: "The future of GTM", items: futureGtm },
      { id: "top-1-percent", label: "The Top 1 %", items: top1 },
      { id: "strategy", label: "GTM Strategy & Best Practices", items: strategy },
      { id: "playbooks", label: "Tactical Playbooks", items: playbooks },
      { id: "product-demos", label: "Product Demos & Trainings", items: productDemos },
      { id: "partners", label: "Partners", items: partners },
      { id: "community", label: "Community & Events", items: community },
      { id: "career", label: "Career & Education", items: career },
      { id: "emea", label: "EMEA", items: emea },
    ];
  }, []);

  // Filtered items when searching or picking a specific single tab
  const filteredItems = useMemo(() => {
    let list = livestreamsData;

    if (activeTab !== "All") {
      if (activeTab === "Upcoming Live") {
        list = list.filter((i) => i.status === "upcoming" || i.status === "today");
      } else if (activeTab === "Binge our best content") {
        list = list.filter((i) => i.status === "replay").slice(0, 15);
      } else {
        list = list.filter(
          (i) => i.category.toLowerCase() === activeTab.toLowerCase() ||
                 (activeTab.includes("Partner") && i.category === "Partners") ||
                 (activeTab.includes("Strategy") && i.category.includes("Strategy")) ||
                 (activeTab.includes("Top 1") && i.category.includes("Top 1"))
        );
      }
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q) ||
          i.category.toLowerCase().includes(q) ||
          i.speakers.some((s) => s.name.toLowerCase().includes(q) || s.company.toLowerCase().includes(q))
      );
    }

    return list;
  }, [activeTab, searchQuery]);

  const isBrowsingAll = activeTab === "All" && !searchQuery.trim();

  return (
    <div className="min-h-screen bg-[var(--cy-oat-50)] text-black">
      <Nav variant="light" />
      <main>
        <LivestreamsHero />

        <LivestreamsFilterBar
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalCount={filteredItems.length}
        />

        {/* Content View */}
        <div className="bg-white min-h-[600px] py-6">
          {isBrowsingAll ? (
            // Render all category carousel rows
            <div>
              {sections.map((sec) => (
                <LivestreamsRow
                  key={sec.id}
                  id={sec.id}
                  title={sec.label}
                  items={sec.items}
                />
              ))}
            </div>
          ) : (
            // Render filtered grid
            <Container>
              <div className="py-6">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-black">
                      {activeTab !== "All" ? activeTab : "Search Results"}
                    </h2>
                    <p className="text-sm text-neutral-500 mt-1">
                      Showing {filteredItems.length} {filteredItems.length === 1 ? "livestream" : "livestreams"}
                      {searchQuery && ` matching "${searchQuery}"`}
                    </p>
                  </div>
                </div>

                {filteredItems.length === 0 ? (
                  <div className="text-center py-20 bg-[var(--cy-oat-50)] rounded-2xl border border-[var(--cy-oat-200)]">
                    <p className="text-lg font-medium text-neutral-800">No livestreams found</p>
                    <p className="text-sm text-neutral-500 mt-1">
                      Try adjusting your search query or choosing another category.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab("All");
                        setSearchQuery("");
                      }}
                      className="mt-4 px-4 py-2 bg-black text-white text-xs font-semibold rounded-lg hover:bg-neutral-800 transition-colors"
                    >
                      Reset filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item) => (
                      <LivestreamsCard key={item.id || item.slug} item={item} />
                    ))}
                  </div>
                )}
              </div>
            </Container>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
