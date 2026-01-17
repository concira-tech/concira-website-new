import Image from "next/image";

const ValetHero = () => {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex flex-col items-center overflow-hidden py-20 px-4">
      {/* Header Text */}
      <div className="text-center mb-16 z-10">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl text-white mb-2"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          Seamless Valet.
        </h1>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
          Smarter Operations.
        </h2>
      </div>

      {/* Device Showcase Container */}
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Floating Icons */}

        {/* Top Left - Valet Person Icon (Orange) */}
        <div className="absolute top-[8%] left-[22%] z-30 hidden md:block">
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#1c1c1c] rounded-full flex items-center justify-center border border-gray-700/30">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F97316"
              strokeWidth="1.5"
              className="w-6 h-6 lg:w-7 lg:h-7"
            >
              <circle cx="12" cy="4" r="2.5" />
              <path d="M15 9H9l-1 4h8l-1-4z" />
              <path d="M10 13v8M14 13v8" />
              <path d="M8 17h2M14 17h2" />
            </svg>
          </div>
        </div>

        {/* Top Right - Location Pin Icon (Orange) */}
        <div className="absolute top-[5%] right-[20%] z-30 hidden md:block">
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#1c1c1c] rounded-full flex items-center justify-center border border-gray-700/30">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F97316"
              strokeWidth="1.5"
              className="w-6 h-6 lg:w-7 lg:h-7"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
        </div>

        {/* Middle Right - Parking P Icon (White, smaller) */}
        <div className="absolute top-[40%] right-[6%] z-30 hidden md:block">
          <div className="w-9 h-9 lg:w-10 lg:h-10 bg-[#1c1c1c] rounded-full flex items-center justify-center border border-gray-700/30">
            <span className="text-white font-semibold text-sm lg:text-base">P</span>
          </div>
        </div>

        {/* Bottom Left - Car Icon (White) */}
        <div className="absolute bottom-[12%] left-[14%] z-30 hidden md:block">
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#1c1c1c] rounded-full flex items-center justify-center border border-gray-700/30">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              className="w-6 h-6 lg:w-7 lg:h-7"
            >
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2-4H8L6 10l-2.5 1.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2" />
              <circle cx="7" cy="17" r="2" />
              <circle cx="17" cy="17" r="2" />
            </svg>
          </div>
        </div>

        {/* Bottom Right - Exit Icon (White) */}
        <div className="absolute bottom-[12%] right-[14%] z-30 hidden md:block">
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#1c1c1c] rounded-full flex items-center justify-center border border-gray-700/30">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              className="w-6 h-6 lg:w-7 lg:h-7"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </div>
        </div>

        {/* Devices Layout */}
        <div className="relative flex items-center justify-center">
          {/* Left iPhone */}
          <div className="absolute left-0 md:left-[5%] lg:left-[10%] z-20 -translate-y-4">
            <Image
              src="/valet/iPhone1.png"
              alt="Valet Mobile App - Parked Cars View"
              width={280}
              height={560}
              className="w-40 md:w-48 lg:w-56 h-auto object-contain"
              priority
            />
          </div>

          {/* Center Laptop */}
          <div className="relative z-10 mx-16 md:mx-24 lg:mx-32">
            <Image
              src="/valet/laptop.png"
              alt="Valet Admin Dashboard Overview"
              width={800}
              height={500}
              className="w-[400px] md:w-[550px] lg:w-[700px] h-auto object-contain"
              priority
            />
          </div>

          {/* Right iPhone */}
          <div className="absolute right-0 md:right-[5%] lg:right-[10%] z-20 -translate-y-8">
            <Image
              src="/valet/iPhone2.png"
              alt="Valet Service Status Mobile View"
              width={280}
              height={560}
              className="w-40 md:w-48 lg:w-56 h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValetHero;
