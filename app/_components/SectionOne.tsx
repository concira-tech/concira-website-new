import Image from "next/image";
import { utilsOne } from "../_utils";

const SectionOne = () => {
  return (
    <div className="py-40 bg-black container mx-auto">
      <h2 className="text-5xl font-semibold text-white/80 mb-10">
        Tailored Solutions for Every Environment
      </h2>
      <p className="text-lg text-gray-500 mb-12">
        Concira is an intelligent ecosystem that connects devices, people, and
        operations across any space—homes, buildings, workplaces, and beyond.
        Whether you're automating lights, managing facilities, or coordinating
        staff, Concira gives you control and insight from one unified system.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {utilsOne?.map((section, index) => (
          <div
            key={index}
            className="rounded-lg transition-all duration-200 ease-in-out"
          >
            <div className="flex items-center mb-4 text-5xl">
              <Image src={section.icon} alt="logo" width={80} height={80} />
            </div>
            <h3 className="text-xl font-semibold text-white/90 mb-2">
              {section.title}
            </h3>
            <p className="text-gray-500">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionOne;
