import React, { ComponentType, FC, useMemo } from "react";

interface ServiceIconProps {
  Icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  position: number;
  total: number;
  radius: number;
}

const ServiceIcon: FC<ServiceIconProps> = ({
  Icon,
  position,
  total,
  radius,
}) => {
  const { x, y } = useMemo(() => {
    const angle = (position / total) * 2 * Math.PI - Math.PI / 2;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  }, [position, total, radius]);

  return (
    <div
      className="
        hidden sm:flex       /* 🔥 hide on mobile, show on sm and above */
        absolute items-center justify-center
        w-11 h-11 md:w-12 md:h-12
        bg-[#202020] rounded-full shadow-sm
        transition-transform duration-300 hover:scale-110 hover:shadow-md
        -translate-x-1/2 -translate-y-1/2
      "
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
      }}
    >
      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
    </div>
  );
};

export default ServiceIcon;
