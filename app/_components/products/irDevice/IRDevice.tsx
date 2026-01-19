import Image from "next/image";

const IRDevice = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative flex items-center pt-20 sm:pt-24 md:pt-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Text Content */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-tight tracking-tight">
                  IR Device
                </h1>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
                  Concira’s IR Device lets you control air conditioners, TVs, &
                  other infrared-based appliances through the Concira
                  platform-without replacing existing hardware.
                </p>
              </div>

              {/* Product Image */}
              <div>
                <div className="relative rounded-2xl overflow-hidden glow-accent">
                  <Image
                    src="/products/irDevice/ir-device.png"
                    alt="Premium IR Device in a modern bedroom setting"
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

export default IRDevice;
