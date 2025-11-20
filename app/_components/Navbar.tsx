"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#solutions", label: "Solutions" },
  { href: "#products", label: "Products" },
  { href: "#industries", label: "Sectors" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-4 z-40 px-4 transition-all duration-300`}
    >
      <div
        className={`container mx-auto border border-[#454546] rounded-full 
        px-4 sm:px-6 py-3 flex items-center justify-between
        backdrop-blur-md bg-black/60
        ${isScrolled ? "shadow-lg" : ""}`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/logo.svg" alt="logo" width={140} height={40} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm lg:text-base">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex border border-[#454546] text-white px-4 py-2 rounded-full text-sm lg:text-base hover:bg-primary hover:text-black transition-colors"
        >
          Request Demo
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#454546] text-white"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-6xl mx-auto mt-3 px-4"
          >
            <div className="rounded-2xl border border-[#454546] bg-black/90 backdrop-blur-md py-4 px-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-white/90 hover:text-primary text-sm py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 inline-flex w-full items-center justify-center border border-[#454546] text-white px-4 py-2 rounded-full text-sm hover:bg-primary hover:text-black transition-colors"
              >
                Request Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
