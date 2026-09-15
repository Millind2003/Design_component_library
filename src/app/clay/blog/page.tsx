import type { Metadata } from "next";
import { BlogHub } from "@/components/sites/clay/blog/BlogHub";

export const metadata: Metadata = {
  title: "Blog | Go-to-market with Clay",
  description:
    "Our best content on growing your GTM motion, from outbound sales automation to AI lead generation.",
  openGraph: {
    title: "Blog | Go-to-market with Clay",
    description:
      "Our best content on growing your GTM motion, from outbound sales automation to AI lead generation.",
  },
};

export default function ClayBlogPage() {
  return <BlogHub />;
}
