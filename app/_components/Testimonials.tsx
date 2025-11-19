"use client";
import { useState } from "react";
import { Card } from "./ui/Card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";

const testimonials = [
  {
    stats: [
      { value: "33%", label: "Lorem Ipsum" },
      { value: "2%", label: "Lorem Ipsum" },
    ],
    quote:
      "From luxury homes to large enterprises, Concira is transforming how people experience and operate their spaces.",
    author: {
      name: "Name Surname",
      role: "Senior Marketing Manager",
      avatar: "/placeholder.svg",
      initials: "NS",
    },
  },
  {
    stats: [
      { value: "45%", label: "Customer Growth" },
      { value: "5%", label: "Energy Saved" },
    ],
    quote:
      "The intelligent automation has revolutionized our facility management. We've seen incredible efficiency gains across all operations.",
    author: {
      name: "Jane Cooper",
      role: "Facilities Director",
      avatar: "/placeholder.svg",
      initials: "JC",
    },
  },
  {
    stats: [
      { value: "80%", label: "Time Saved" },
      { value: "12%", label: "Cost Reduction" },
    ],
    quote:
      "Implementing this system was seamless, and the results exceeded our expectations. Our team can now focus on what really matters.",
    author: {
      name: "Michael Chen",
      role: "Operations Manager",
      avatar: "/placeholder.svg",
      initials: "MC",
    },
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );

  const handlePrevTestimonial = () => {
    setSlideDirection("left");
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNextTestimonial = () => {
    setSlideDirection("right");
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="px-4 py-20 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Trusted by Innovators and Builders
        </h2>

        <Card className="bg-zinc-900 border-zinc-800 p-8 md:p-12 overflow-hidden">
          <div
            key={currentTestimonial}
            className={`animate-fade-in ${
              slideDirection === "right"
                ? "animate-slide-in-right"
                : "animate-slide-in-left"
            }`}
          >
            {/* Statistics */}
            <div className="flex gap-16 mb-8 pb-8 border-b border-zinc-800">
              {testimonials[currentTestimonial].stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-white mb-12 leading-relaxed">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>

            {/* Author & Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src={testimonials[currentTestimonial].author.avatar}
                  />
                  <AvatarFallback className="bg-zinc-700 text-white">
                    {testimonials[currentTestimonial].author.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-white font-semibold">
                    {testimonials[currentTestimonial].author.name}
                  </div>
                  <div className="text-sm text-zinc-400">
                    {testimonials[currentTestimonial].author.role}
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={handlePrevTestimonial}
                  className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeftIcon className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={handleNextTestimonial}
                  className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRightIcon className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Testimonials;
