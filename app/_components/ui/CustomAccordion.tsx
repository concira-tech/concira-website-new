"use client"
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  value: string;
  title: string;
  content: string;
}

interface CustomAccordionProps {
  items: AccordionItem[];
  defaultValue?: string;
}

export const CustomAccordion = ({ items, defaultValue }: CustomAccordionProps) => {
  const [openItem, setOpenItem] = useState(defaultValue || items[0]?.value);

  return (
    <div className="w-full space-y-3 cursor-pointer">
      {items.map((item) => {
        const isOpen = openItem === item.value;
        
        return (
          <div
            key={item.value}
            className={`border-l-4 transition-all duration-300 ${
              isOpen 
                ? "border-primary bg-primary/5" 
                : "border-border hover:border-primary/50"
            }`}
          >
            <button
              onClick={() => setOpenItem(isOpen ? "" : item.value)}
              className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors"
            >
              <span className={`text-lg font-semibold transition-colors ${
                isOpen ? "text-primary" : "text-white"
              }`}>
                {item.title}
              </span>
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-primary" : "text-gray-400"
                }`}
              />
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-4 text-gray-400">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
