import Image from "next/image";
import { CustomAccordion } from "./ui/CustomAccordion";

const Applications = () => {
  return (
    <div className="px-4 py-20 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <Image src="/application/icon.svg" alt="application" width={500} height={500} />
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                Built For Every Space
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                One System. Many Applications.
              </h2>
            </div>

            <CustomAccordion
              defaultValue="homes"
              items={[
                {
                  value: "homes",
                  title: "Homes",
                  content: "Light control, scene settings, energy tracking.",
                },
                {
                  value: "offices",
                  title: "Offices",
                  content:
                    "Workspace automation, meeting room controls, and energy management.",
                },
                {
                  value: "hotels",
                  title: "Hotels",
                  content:
                    "Guest room automation, centralized control, and energy optimization.",
                },
                {
                  value: "hospitals",
                  title: "Hospitals",
                  content:
                    "Patient comfort, staff efficiency, and facility-wide monitoring.",
                },
                {
                  value: "retail",
                  title: "Retail & Malls",
                  content:
                    "Ambiance control, security integration, and smart energy use.",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;
