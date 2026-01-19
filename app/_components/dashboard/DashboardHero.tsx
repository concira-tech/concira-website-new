import Image from "next/image";

const DashboardHero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative  flex items-center justify-end pt-20 sm:pt-24 md:pt-28">
          <div className="container pl-4 sm:pl-6 lg:pl-8 ml-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
                  One Dashboard.
                  <br />
                  <span className="bg-linear-to-r from-white via-white to-gray-500 bg-clip-text text-transparent">
                    Complete Control.
                  </span>
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                  The Concira Dashboard brings devices, rooms, energy, &
                  operations together in a single, real-time interface. Monitor
                  activity, manage workflows & optimise performance across your
                  entire environment - without switching tools.
                </p>
              </div>

              {/* Product Image */}
              <div>
                <div className="relative rounded-2xl overflow-hidden glow-accent">
                  <Image
                    src="/dashboard/hero.png"
                    alt="Premium Dashboard in a modern bedroom setting"
                    className="w-full h-auto object-cover rounded-2xl"
                    width={700}
                    height={700}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DashboardHero;
