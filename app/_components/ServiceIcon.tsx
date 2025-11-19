import { ComponentType } from "react";

interface ServiceIconProps {
  Icon:  ComponentType<React.SVGProps<SVGSVGElement>>;
  position: number;
  total: number;
  radius: number;
}

const ServiceIcon = ({ Icon, position, total, radius }: ServiceIconProps) => {
  const angle = (position / total) * 2 * Math.PI - Math.PI / 2;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <div
      className="absolute flex items-center justify-center w-12 h-12 bg-[#202020] rounded-full  shadow-sm transition-all hover:shadow-md hover:scale-110"
      style={{
        left: `calc(50% + ${x}px - 1.5rem)`,
        top: `calc(50% + ${y}px - 1.5rem)`,
      }}
    >
      <Icon className="w-5 h-5 text-white font-bold" />
    </div>
  );
};

export default ServiceIcon;
