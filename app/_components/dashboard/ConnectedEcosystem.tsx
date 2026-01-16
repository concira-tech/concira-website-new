import Image from "next/image";

const ConnectedEcosystem = () => {
  return (
    <section className="bg-[#1a1a1a] py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="bg-[#ff5722] text-white text-sm font-semibold px-6 py-2 rounded-full tracking-wider">
            CONNECTED ECO-SYSTEM
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6">
          One platform; Many experiences
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto mb-16">
          Concira connects guest apps, operational dashboards, and service
          workflows into a single, unified ecosystem.
        </p>

        {/* Devices Layout - Desktop */}
        <div className="relative hidden lg:block min-h-[600px] xl:min-h-[700px]">
          {/* Left Phone with Label */}
          <div className="absolute left-0 xl:left-8 top-0 z-10 flex items-start gap-3 xl:gap-4">
            {/* Phone Image */}
            <div className="w-44 xl:w-56">
              <Image
                src="/dashboard/mobile1.png"
                alt="Guest App"
                width={224}
                height={448}
                className="w-full h-auto"
              />
            </div>

            {/* Guest App Text with connector */}
            <div className="pt-20 xl:pt-24">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 xl:w-12 h-px bg-gray-500"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              </div>
              <h3 className="text-white font-semibold text-base xl:text-lg">Guest App</h3>
              <p className="text-gray-400 text-xs xl:text-sm w-36 xl:w-44">
                Request services, control the room, and track updates in real
                time.
              </p>
            </div>
          </div>

          {/* Right Phone with Label */}
          <div className="absolute right-0 xl:right-8 top-0 z-10 flex items-start gap-3 xl:gap-4">
            {/* Guest Services Text with connector */}
            <div className="pt-12 xl:pt-16 text-right">
              <div className="flex items-center gap-2 mb-2 justify-end">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <div className="w-8 xl:w-12 h-px bg-gray-500"></div>
              </div>
              <h3 className="text-white font-semibold text-base xl:text-lg">
                Guest Services
              </h3>
              <p className="text-gray-400 text-xs xl:text-sm w-36 xl:w-44 ml-auto">
                Receive, manage, and resolve requests with clear status
                visibility.
              </p>
            </div>

            {/* Phone Image */}
            <div className="w-44 xl:w-56">
              <Image
                src="/dashboard/mobile2.png"
                alt="Guest Services"
                width={224}
                height={448}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Dashboard - Center Bottom */}
          <div className="flex flex-col items-center pt-28 xl:pt-32">
            {/* Dashboard Label - Above */}
            <div className="mb-4 text-center">
              <h3 className="text-white font-semibold text-base xl:text-lg">Dashboard</h3>
              <p className="text-gray-400 text-xs xl:text-sm max-w-64 mx-auto">
                Centralised control over devices, services, and operations.
              </p>
              <div className="w-px h-6 xl:h-8 bg-gray-500 mx-auto mt-2"></div>
            </div>

            {/* Dashboard Image */}
            <div className="w-full max-w-2xl xl:max-w-3xl px-8 xl:px-16">
              <Image
                src="/dashboard/dashboard.png"
                alt="Dashboard"
                width={900}
                height={600}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Devices Layout - Mobile/Tablet */}
        <div className="lg:hidden flex flex-col items-center gap-12">
          {/* Guest App */}
          <div className="flex flex-col items-center">
            <h3 className="text-white font-semibold text-lg mb-2">Guest App</h3>
            <p className="text-gray-400 text-sm text-center max-w-xs mb-4">
              Request services, control the room, and track updates in real
              time.
            </p>
            <div className="w-48 md:w-56">
              <Image
                src="/dashboard/mobile1.png"
                alt="Guest App"
                width={224}
                height={448}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Dashboard */}
          <div className="flex flex-col items-center">
            <h3 className="text-white font-semibold text-lg mb-2">Dashboard</h3>
            <p className="text-gray-400 text-sm text-center max-w-xs mb-4">
              Centralised control over devices, services, and operations.
            </p>
            <div className="w-full max-w-xl">
              <Image
                src="/dashboard/dashboard.png"
                alt="Dashboard"
                width={900}
                height={600}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Guest Services */}
          <div className="flex flex-col items-center">
            <h3 className="text-white font-semibold text-lg mb-2">
              Guest Services
            </h3>
            <p className="text-gray-400 text-sm text-center max-w-xs mb-4">
              Receive, manage, and resolve requests with clear status
              visibility.
            </p>
            <div className="w-48 md:w-56">
              <Image
                src="/dashboard/mobile2.png"
                alt="Guest Services"
                width={224}
                height={448}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectedEcosystem;
