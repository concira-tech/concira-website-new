"use client";

import { useState } from "react";
import Link from "next/link";

const ServicesOverview = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1); // Laundry hovered by default

  const services = [
    {
      name: "Dining",
      icon: (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
        >
          {/* Plate */}
          <circle cx="32" cy="36" r="20" stroke="white" strokeWidth="2" fill="none" />
          <circle cx="32" cy="36" r="14" stroke="white" strokeWidth="1.5" fill="none" />
          {/* Fork */}
          <path
            d="M20 8V20M20 20V28M20 20H16M20 20H24M16 8V16M24 8V16"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Knife */}
          <path
            d="M44 8C44 8 48 12 48 18C48 22 46 24 44 24V28"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      ),
    },
    {
      name: "Laundry",
      icon: (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
        >
          {/* Hanger hook */}
          <path
            d="M32 12C32 12 36 12 36 16C36 20 32 20 32 20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          {/* Hanger body */}
          <path
            d="M32 20L12 40H52L32 20Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Hanger bar */}
          <path d="M12 40H52" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Spa & Wellness",
      icon: (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
        >
          {/* Bowl */}
          <path
            d="M12 32C12 32 12 48 32 48C52 48 52 32 52 32H12Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          {/* Steam lines */}
          <path
            d="M24 24C24 20 28 20 28 16"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M32 24C32 20 36 20 36 16"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          {/* Plus signs */}
          <path d="M48 20V28M44 24H52" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 18V22M14 20H18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Gardening",
      icon: (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
        >
          {/* Plant stem */}
          <path d="M32 52V32" stroke="white" strokeWidth="2" strokeLinecap="round" />
          {/* Leaves */}
          <path
            d="M32 32C32 32 24 28 24 20C24 12 32 12 32 12C32 12 40 12 40 20C40 28 32 32 32 32Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          {/* Small leaves */}
          <path
            d="M32 38C32 38 26 36 26 32C26 28 32 30 32 30"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M32 38C32 38 38 36 38 32C38 28 32 30 32 30"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          {/* Pot */}
          <path
            d="M26 52H38L36 56H28L26 52Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
    },
    {
      name: "Housekeeping",
      icon: (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
        >
          {/* Cart body */}
          <rect
            x="16"
            y="24"
            width="28"
            height="20"
            rx="2"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          {/* Cart handle */}
          <path
            d="M44 32H52V40H44"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          {/* Wheels */}
          <circle cx="22" cy="48" r="4" stroke="white" strokeWidth="2" fill="none" />
          <circle cx="38" cy="48" r="4" stroke="white" strokeWidth="2" fill="none" />
          {/* Items on cart */}
          <rect x="20" y="16" width="8" height="8" stroke="white" strokeWidth="1.5" fill="none" />
          <rect x="30" y="18" width="6" height="6" stroke="white" strokeWidth="1.5" fill="none" />
        </svg>
      ),
    },
    {
      name: "Concierge",
      icon: (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
        >
          {/* Head */}
          <circle cx="32" cy="18" r="8" stroke="white" strokeWidth="2" fill="none" />
          {/* Body/Suit */}
          <path
            d="M20 56V40C20 34 26 30 32 30C38 30 44 34 44 40V56"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          {/* Bow tie */}
          <path
            d="M28 34L32 36L36 34L32 38L28 34Z"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Suit lapels */}
          <path d="M32 36V52" stroke="white" strokeWidth="1.5" />
          <path d="M26 40L32 48" stroke="white" strokeWidth="1.5" />
          <path d="M38 40L32 48" stroke="white" strokeWidth="1.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#0d0d0d] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="bg-[#ff5722] text-white text-sm font-semibold px-6 py-2 rounded-full tracking-wider">
            CONNECTED ECO-SYSTEM
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Everything Your Space Needs.
          <br />
          In One Place.
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Concira brings essential guest and operational services together - so teams spend less
          time coordinating and more time delivering great experiences.
        </p>

        {/* CTA Button */}
        <Link
          href="/services"
          className="inline-block bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300 mb-16"
        >
          Explore All Services
        </Link>

        {/* Service Icons */}
        <div className="flex justify-center items-center gap-2 md:gap-4">
          {services.map((service, index) => (
            <div key={index} className="relative">
              {/* Tooltip */}
              {hoveredIndex === index && (
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <div className="bg-[#2a2a2a] text-white text-sm px-4 py-2 rounded-lg">
                    {service.name}
                  </div>
                  {/* Tooltip arrow */}
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#2a2a2a]" />
                </div>
              )}

              {/* Icon Circle */}
              <div
                className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-[#2a2a2a] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#3a3a3a]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {service.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
