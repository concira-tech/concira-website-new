import { CircleDot } from "lucide-react";

const PoweredByHub = () => {
  const features = [
    "Role-based access across teams",
    "Shared data layer for all services",
    "One login, multiple operational views"
  ];

  return (
    <section className="bg-primary py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Powered by Concira Hub
          </h2>
          <CircleDot className="w-8 h-8 text-white" />
        </div>
        
        <p className="text-white/90 text-sm md:text-base leading-relaxed mb-12 max-w-3xl mx-auto">
          Concira Hub sits at the centre of the Dashboard-handling users, roles, permissions, workflows, and real-time data across your entire operation. The interface adapts automatically based on who's logged in, ensuring every team sees exactly what they need-nothing more, nothing less.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#ff7347] rounded-xl p-6 text-left"
            >
              <p className="text-white font-medium text-sm md:text-base">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoweredByHub;