"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LivestreamItem } from "./types";
import { Nav } from "../Nav";
import { Footer } from "../Closing";
import { Container } from "../primitives";
import { cn } from "@/lib/utils";

interface DetailProps {
  item: LivestreamItem;
}

export function LivestreamDetail({ item }: DetailProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showJoinCodeModal, setShowJoinCodeModal] = useState(false);
  const [joinCode, setJoinCode] = useState("");
  const [hasAccess, setHasAccess] = useState(false);

  // Countdown timer for upcoming events
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "21",
    minutes: "23",
    seconds: "14",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const target = new Date(now.getTime() + 21 * 3600 * 1000 + 23 * 60 * 1000);
      const diff = Math.max(0, target.getTime() - now.getTime());

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / 1000 / 60) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setHasAccess(true);
  };

  const handleJoinCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (joinCode.trim()) {
      setHasAccess(true);
      setShowJoinCodeModal(false);
    }
  };

  const isReplay = item.status === "replay";

  return (
    <div className="min-h-screen bg-[var(--cy-oat-50)] text-black">
      <Nav variant="light" />

      <main className="pt-24 pb-16 sm:pt-28 md:pt-32">
        <Container>
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-cy-mono uppercase tracking-wider text-black/60 mb-8 overflow-x-auto whitespace-nowrap">
            <Link
              href="/clay/livestreams"
              className="hover:text-black transition-colors px-3 py-1 rounded-full border border-black/10 bg-black/5"
            >
              ALL LIVESTREAMS
            </Link>
            <span>/</span>
            <span className="px-3 py-1 rounded-full border border-black/10 bg-black/5 text-black truncate max-w-md">
              {item.title}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Visual & Countdown / Video Player */}
            <div className="lg:col-span-4 rounded-2xl bg-white p-6 border border-[var(--cy-oat-300)] shadow-sm">
              <h1 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-4">
                {item.title}
              </h1>

              {/* Date & Time info */}
              <div className="space-y-2 mb-6 text-xs sm:text-sm text-black/70">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-black/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-black/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{item.time}</span>
                </div>
              </div>

              {/* Media Player or Thumbnail */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-neutral-900 mb-6">
                {hasAccess && isReplay ? (
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://cdn.prod.website-files.com/61702af2e3966e09c4101538/6aa1bc56c34f8a1ffd60cf8e_marektingdemothumb.png";
                    }}
                  />
                )}
              </div>

              {/* Countdown / Replay Banner */}
              {isReplay ? (
                <div className="text-center py-2.5 px-4 rounded-xl bg-[var(--cy-oat-200)] text-xs font-semibold text-black/80">
                  On-demand replay available
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="p-2 rounded-lg bg-[var(--cy-oat-100)] border border-[var(--cy-oat-200)]">
                    <div className="font-bold text-lg font-cy-mono">{timeLeft.days}</div>
                    <div className="text-[0.65rem] uppercase text-black/60 font-semibold">DAYS</div>
                  </div>
                  <div className="p-2 rounded-lg bg-[var(--cy-oat-100)] border border-[var(--cy-oat-200)]">
                    <div className="font-bold text-lg font-cy-mono">{timeLeft.hours}</div>
                    <div className="text-[0.65rem] uppercase text-black/60 font-semibold">HOURS</div>
                  </div>
                  <div className="p-2 rounded-lg bg-[var(--cy-oat-100)] border border-[var(--cy-oat-200)]">
                    <div className="font-bold text-lg font-cy-mono">{timeLeft.minutes}</div>
                    <div className="text-[0.65rem] uppercase text-black/60 font-semibold">MINUTES</div>
                  </div>
                  <div className="p-2 rounded-lg bg-[var(--cy-oat-100)] border border-[var(--cy-oat-200)]">
                    <div className="font-bold text-lg font-cy-mono">{timeLeft.seconds}</div>
                    <div className="text-[0.65rem] uppercase text-black/60 font-semibold">SECONDS</div>
                  </div>
                </div>
              )}
            </div>

            {/* Middle Column: Registration Form */}
            <div className="lg:col-span-4 rounded-2xl bg-white p-6 sm:p-8 border border-[var(--cy-oat-300)] shadow-sm">
              <h2 className="text-2xl font-medium tracking-tight text-black mb-2">
                {isReplay ? "Register to view" : "Register for the event"}
              </h2>
              <p className="text-xs sm:text-sm text-black/60 mb-6">
                {isReplay
                  ? "Fill in the form below to watch the video recording instantly."
                  : "Fill in the form below to register for this event. You will receive a calendar invite and confirmation email."}
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-center">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    ✓
                  </div>
                  <h3 className="font-bold text-base mb-1">Registration Confirmed!</h3>
                  <p className="text-xs text-emerald-800 leading-relaxed mb-4">
                    {isReplay
                      ? "Thank you! You now have full access to watch the replay recording."
                      : `A confirmation link has been sent to ${email}. See you on ${item.date}!`}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-emerald-700 underline"
                  >
                    Register another attendee
                  </button>
                </div>
              ) : (
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-black/80 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[var(--cy-oat-100)] border border-[var(--cy-oat-300)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-black/80 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[var(--cy-oat-100)] border border-[var(--cy-oat-300)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-black/80 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[var(--cy-oat-100)] border border-[var(--cy-oat-300)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-lg bg-[#4f46e5] hover:bg-[#4338ca] text-white font-medium text-sm transition-colors shadow-sm"
                  >
                    Register
                  </button>

                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={() => setShowJoinCodeModal(true)}
                      className="text-xs font-medium text-[#4f46e5] hover:underline"
                    >
                      I already have a join code
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Overview & Speakers */}
            <div className="lg:col-span-4 rounded-2xl bg-white p-6 sm:p-8 border border-[var(--cy-oat-300)] shadow-sm space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black mb-3">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
                  {item.fullOverview || item.description}
                </p>
              </div>

              {/* Speakers Section */}
              {item.speakers && item.speakers.length > 0 && (
                <div className="pt-4 border-t border-[var(--cy-oat-200)]">
                  <h3 className="text-xs font-cy-mono uppercase tracking-wider text-black/60 mb-3">
                    Featured Speakers
                  </h3>
                  <div className="space-y-3">
                    {item.speakers.map((sp, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        {sp.avatar ? (
                          <img
                            src={sp.avatar}
                            alt={sp.name}
                            className="w-10 h-10 rounded-xl object-cover ring-1 ring-black/10"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-xl bg-[var(--cy-oat-300)] flex items-center justify-center font-bold text-xs text-black/70">
                            {sp.name.split(" ").map((n) => n[0]).join("")}
                          </div>
                        )}
                        <div>
                          <div className="text-xs sm:text-sm font-semibold text-black">
                            {sp.name}
                          </div>
                          <div className="text-xs text-black/60">
                            {sp.role} • <span className="uppercase font-semibold">{sp.company}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Agenda Highlights */}
              <div className="pt-4 border-t border-[var(--cy-oat-200)]">
                <h3 className="text-xs font-cy-mono uppercase tracking-wider text-black/60 mb-2">
                  What You&apos;ll Learn
                </h3>
                <ul className="space-y-2 text-xs text-black/75 list-disc list-inside">
                  <li>Real-time data orchestration and lead routing architectures</li>
                  <li>How top revenue leaders automate complex prospecting motions</li>
                  <li>Live teardown of workflows with production templates</li>
                  <li>Interactive Q&amp;A answering specific stack configurations</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </main>

      {/* Join Code Modal */}
      {showJoinCodeModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-[var(--cy-oat-300)]">
            <h3 className="text-lg font-semibold text-black mb-1">Enter Join Code</h3>
            <p className="text-xs text-black/60 mb-4">
              Enter your access code to unlock the session immediately.
            </p>
            <form onSubmit={handleJoinCode} className="space-y-3">
              <input
                type="text"
                required
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value)}
                placeholder="e.g. CLAY-VIP-2026"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[var(--cy-oat-100)] border border-[var(--cy-oat-300)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowJoinCodeModal(false)}
                  className="w-1/2 py-2 text-xs font-semibold text-neutral-700 bg-neutral-100 rounded-lg hover:bg-neutral-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Unlock
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
