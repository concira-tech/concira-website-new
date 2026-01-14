import Image from "next/image";

const RetrofitSwitches = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Text Content */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-tight tracking-tight">
                  Retrofit Switches
                </h1>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
                  Concira’s Retrofit Module upgrades your existing switches into
                  smart controls - without rewiring or replacing your plates.
                  Installed discreetly behind the switchboard, it brings app
                  control, scheduling, automation, and remote access to any
                  space with zero visual changes.
                </p>
              </div>

              {/* Product Image */}
              <div>
                <div className="relative rounded-2xl overflow-hidden glow-accent">
                  <Image
                    src="/products/retrofitSwitches/retro-switches.png"
                    alt="Premium touch switch panel in a modern bedroom setting"
                    className="w-full h-auto object-cover rounded-2xl"
                    width={600}
                    height={600}
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

export default RetrofitSwitches;
