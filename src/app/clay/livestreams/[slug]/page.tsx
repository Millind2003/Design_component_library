import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { livestreamsData, featuredLivestream } from "@/components/sites/clay/livestreams/data";
import { LivestreamDetail } from "@/components/sites/clay/livestreams/LivestreamDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allSlugs = [
    featuredLivestream.slug,
    ...livestreamsData.map((item) => item.slug),
  ];
  return Array.from(new Set(allSlugs)).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item =
    slug === featuredLivestream.slug
      ? featuredLivestream
      : livestreamsData.find((i) => i.slug === slug);

  if (!item) {
    return {
      title: "Livestream | Clay.com",
    };
  }

  return {
    title: `${item.title} | Clay Livestreams`,
    description: item.description || item.fullOverview,
    openGraph: {
      title: `${item.title} | Clay Livestreams`,
      description: item.description || item.fullOverview,
      images: [item.thumbnail],
    },
  };
}

export default async function LivestreamDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item =
    slug === featuredLivestream.slug
      ? featuredLivestream
      : livestreamsData.find((i) => i.slug === slug);

  if (!item) {
    notFound();
  }

  return <LivestreamDetail item={item} />;
}
