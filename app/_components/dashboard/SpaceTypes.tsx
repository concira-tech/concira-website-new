"use client";

import Link from "next/link";

const SpaceTypes = () => {
  const spaceTypes = [
    {
      title: "Homes",
      description: "Control lighting, ambience, devices, and daily routines.",
    },
    {
      title: "Hotels",
      description: "Manage guest rooms, staff tasks, energy usage, and guest requests.",
    },
    {
      title: "Offices",
      description: "Monitor meeting rooms, lighting zones, HVAC, and workspace automation.",
    },
    {
      title: "Commercial Spaces",
      description: "Oversee multiple areas, schedules, and required automations.",
    },
  ];

  return (
    <section className="bg-[#1a1a1a] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16">
          Made for Every Type of Space
        </h2>

        {/* Space Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {spaceTypes.map((space, index) => (
            <div key={index}>
              {/* Top border line */}
              <div className="border-t border-gray-600 mb-8" />

              {/* Title */}
              <h3 className="text-white font-semibold text-xl mb-4">{space.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">{space.description}</p>
            </div>
          ))}
        </div>

        {/* Know More Button */}
        <Link
          href="/spaces"
          className="inline-block bg-white hover:bg-gray-100 text-black font-semibold px-10 py-4 rounded-full transition-colors duration-300"
        >
          Know More
        </Link>
      </div>
    </section>
  );
};

export default SpaceTypes;
