import Image from "next/image";
import { img } from "./assets";
import { consumers, profile } from "./data";
import { Body, Button, Container, Heading } from "./primitives";
import { cn } from "@/lib/utils";

/**
 * Copy on the left at 43.5% of the width, imagery on the right at 56.5%, with
 * black glass record cards floated over the photograph.
 */
export function Consumers() {
  return (
    <Container className="border-t border-[var(--mv-gridline)] xl:border-x">
      <section
        id="platform"
        className="bg-white pb-20 pt-20 text-black md:pb-28 md:pt-28"
      >
        <div className="relative">
          <div className="grid min-h-[720px] grid-cols-1 gap-8 xl:grid-cols-[43.5%_56.5%] xl:gap-0">
            <div className="flex flex-col justify-center">
              <div className="xl:max-w-[500px]">
                <Heading
                  text={consumers.heading}
                  className="max-w-[700px] xl:max-w-[400px]"
                />

                <div className="mt-8 space-y-6">
                  <Body className="max-w-[520px] text-pretty">{consumers.body}</Body>
                  <Body className="max-w-[560px] text-pretty">{consumers.kicker}</Body>
                </div>

                <Button href="#try" className="mt-8 max-xl:mb-8 xl:mt-20">
                  {consumers.cta}
                </Button>
              </div>
            </div>

            <div className="relative overflow-visible xl:min-h-[520px] xl:overflow-hidden">
              <Image
                src={img.basketball}
                alt="Basketball"
                fill
                className="object-cover max-xl:hidden"
              />

              {/* desktop: cards floated over the photo */}
              <div className="absolute right-[6%] top-[19%] w-[33%] max-xl:hidden">
                <GlassCard>
                  <div className="mb-3 h-48 w-full overflow-hidden">
                    <Image
                      src={img.map}
                      alt="Map"
                      width={400}
                      height={220}
                      className="h-full w-full object-contain invert"
                    />
                  </div>
                  <div className="mb-4 -translate-x-4 h-px w-[calc(100%+2rem)] bg-white/50" />
                  <p className="text-[20px] font-medium leading-[1.05] tracking-[-0.01em] text-white">
                    {profile.region}
                  </p>
                </GlassCard>
              </div>

              <div className="absolute bottom-[9%] left-[30%] w-[45%] max-xl:hidden">
                <GlassCard>
                  <PersonBody />
                </GlassCard>
              </div>

              {/* mobile: the same records stacked */}
              <div className="overflow-hidden rounded-xl xl:hidden">
                <GlassCard rounded={false}>
                  <PersonBody />
                </GlassCard>
                <div className="border-t border-white/50 bg-black">
                  <GlassCard rounded={false}>
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-white" />
                      <span className="text-[20px] font-medium leading-[1.05] tracking-[-0.01em] text-white">
                        {profile.segment.name}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {profile.segment.fields.map((field) => (
                        <div key={field.label}>
                          <div className="text-[10px] leading-[1.2] text-white/60">
                            {field.label}
                          </div>
                          <div className="text-[12px] font-medium leading-[1.2] text-white">
                            {field.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

/** Black translucent record card — the site's data-overlay treatment. */
function GlassCard({
  children,
  rounded = true,
}: {
  children: React.ReactNode;
  rounded?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-black p-4 xl:border xl:border-white xl:bg-black/60 xl:backdrop-blur-sm",
        rounded && "xl:rounded",
      )}
    >
      {children}
    </div>
  );
}

function PersonBody() {
  return (
    <>
      <div className="mb-2 flex items-center gap-2">
        <span className="h-3 w-3 shrink-0 rounded-full bg-white" />
        <span className="whitespace-nowrap text-[20px] font-medium leading-[1.05] tracking-[-0.01em] text-white">
          {profile.name}
        </span>
      </div>
      <div className="mb-4 text-[10px] leading-[1.2] text-white/60">
        {profile.location}
      </div>
      <div className="flex flex-row gap-x-6 gap-y-1">
        {profile.fields.map((field) => (
          <div key={field.label}>
            <div className="text-[10px] leading-[1.2] text-white/60">
              {field.label}
            </div>
            <span className="whitespace-nowrap text-[12px] font-medium leading-[1.2] text-white">
              {field.value}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
