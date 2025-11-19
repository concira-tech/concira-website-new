"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type TabItem = {
  title: string;
  description: string;
  icons: string; // path from /public or an absolute URL
};

const AUTOPLAY_MS = 5000;

const SectionTwo: React.FC = () => {
  const tabs: TabItem[] = useMemo(
    () => [
      {
        title: "Powerful dashboard",
        description:
          "Access real-time control and analytics across devices and services with an intuitive, scalable dashboard.",
        icons: "/sectiontwo/icon1.svg",
      },
      {
        title: "Always in Sync",
        description:
          "Devices, users, and data stay automatically synced across environments—no manual updates needed.",
        icons: "/sectiontwo/icon2.svg",
      },
      {
        title: "Embedded analytics",
        description:
          "Visualize performance trends, monitor SLAs, and export insights—embedded where your teams work.",
        icons: "/sectiontwo/icon3.svg",
      },
      {
        title: "AI data predictions",
        description:
          "Forecast demand, detect anomalies, and optimize operations with built-in AI models.",
        icons: "/sectiontwo/icon4.svg",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  // Reset or start autoplay
  const startAutoplay = () => {
    stopAutoplay();
    timerRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabs.length);
    }, AUTOPLAY_MS);
  };

  const stopAutoplay = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Manage autoplay based on pause state
  useEffect(() => {
    if (!paused) startAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, tabs.length]);

  // When user clicks a tab, jump and restart timer
  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    // soft reset the autoplay if not paused
    if (!paused) {
      startAutoplay();
    }
  };

  return (
    <section
      className="bg-[#202020] text-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Platform features"
    >
      <div className="container mx-auto py-20 flex flex-col gap-12 lg:gap-16">
        {/* Heading */}
        <h1 className="text-center text-4xl md:text-5xl font-bold leading-tight text-white">
          One Platform. <br className="hidden md:block" /> Infinite
          Possibilities.
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {tabs.map((tab, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={tab.title}
                type="button"
                onClick={() => handleTabClick(index)}
                className={[
                  "border-b-4 pb-1 text-base md:text-lg transition-all duration-300 focus:outline-none cursor-pointer",
                  isActive
                    ? "border-b-primary text-white"
                    : "border-b-transparent text-gray-500 hover:text-white",
                ].join(" ")}
                aria-selected={isActive}
                role="tab"
              >
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* Carousel */}
        <div
          className="relative w-full max-w-5xl mx-auto overflow-hidden"
          role="region"
          aria-roledescription="carousel"
          aria-live="polite"
        >
          {/* Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {tabs.map((tab) => (
              <article
                key={tab.title}
                className="flex-none w-full"
                aria-label={tab.title}
              >
                <div className="mx-4 md:mx-8 bg-black rounded-2xl  px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
                  <div className="w-full md:w-7/12">
                    <div className="bg-primary w-15 h-15 flex items-center justify-center rounded-xl mb-3">
                      <Image
                        src={tab.icons}
                        alt={tab.title}
                        width={40}
                        height={40}
                      />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                      {tab.title}
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg">
                      {tab.description}
                    </p>
                  </div>
                  <div className="w-full md:w-5/12 flex justify-center">
                    {/* Use <img> for dynamic/public assets without Next/Image config friction */}
                    <Image
                      src="/sectionTwo/icon5.svg"
                      alt={tab.title}
                      width={800}
                      height={800}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* tiny CSS for the progress animation */}
      <style jsx>{`
        @keyframes fill {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0%);
          }
        }
        /* Animate using transform for better perf */
        div[style*="animation: fill"] {
          transform: translateX(-100%);
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default SectionTwo;
