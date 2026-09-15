import type { Metadata } from "next";
import { LessonPath } from "@/components/sites/learn-lab/LessonPath";
import { RightRail } from "@/components/sites/learn-lab/RightRail";
import { PageBody } from "@/components/sites/learn-lab/ui";

export const metadata: Metadata = {
  title: "Duolingo — Learn",
  description:
    "An original gamified learning dashboard built to study three-column app shells, winding progress paths, and tactile 3D controls.",
};

export default function LearnPage() {
  return (
    <PageBody rail={<RightRail />}>
      <LessonPath />
    </PageBody>
  );
}
