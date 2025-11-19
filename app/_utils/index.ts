import { SectionOneUtils } from "./types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export const utilsOne: SectionOneUtils[] = [
    {
        title: "Smart Switches",
        description:
            "Elegant, intelligent panels that let you control light, temperature, and ambience with just a tap.",
        icon: "/icon1.svg",
    },
    {
        title: "Control Dashboard",
        description:
            "A single dashboard to manage all devices, users, and actions in real time.",
        icon: "/icon2.svg",
    },
    {
        title: "Operations App",
        description:
            "Enables teams to monitor maintenance, assign tasks, and resolve issues instantly.",
        icon: "/icon3.svg",
    },
    {
        title: "Access & Security",
        description:
            "Manage entry, sensors, and alerts — from one secure system.",
        icon: "/icon4.svg",
    },
    {
        title: "Parking & Valet",
        description:
            "Digitize parking and vehicle handovers with smart QR tracking.",
        icon: "/icon5.svg",
    },
    {
        title: "Energy Analytics",
        description:
            "Track power usage, optimize savings, and build greener spaces.",
        icon: "/icon6.svg",
    },
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

