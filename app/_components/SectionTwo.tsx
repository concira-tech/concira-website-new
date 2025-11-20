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
    if (!paused) {
      startAutoplay();
    }
  };

  return (
    <section
      id="products"
      className="bg-[#202020] text-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Platform features"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex flex-col gap-10 lg:gap-14">
        {/* Heading */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
          One Platform. <br className="hidden md:block" /> Infinite
          Possibilities.
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10">
          {tabs.map((tab, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={tab.title}
                type="button"
                onClick={() => handleTabClick(index)}
                className={[
                  "border-b-4 pb-1 text-sm sm:text-base md:text-lg transition-all duration-300 focus:outline-none cursor-pointer",
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
                <div className="mx-2 sm:mx-4 md:mx-8 bg-black rounded-2xl px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
                  <div className="w-full md:w-7/12 text-center md:text-left">
                    <div className="bg-primary inline-flex items-center justify-center rounded-xl mb-3 size-12 sm:size-14">
                      <Image
                        src={tab.icons}
                        alt={tab.title}
                        width={40}
                        height={40}
                      />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-white">
                      {tab.title}
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg">
                      {tab.description}
                    </p>
                  </div>
                  <div className="w-full md:w-5/12 flex justify-center">
                    <Image
                      src="/sectionTwo/icon5.svg"
                      alt={tab.title}
                      width={800}
                      height={800}
                      className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-full"
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
        div[style*="animation: fill"] {
          transform: translateX(-100%);
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default SectionTwo;
