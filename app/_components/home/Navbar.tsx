"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/sectors", label: "Sectors" },
  { href: "/about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const productLinks = [
  { href: "/touch-switches", label: "Touch Switch" },
  { href: "/retrofit-switches", label: "Retrofit Switch" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => {
    setIsOpen(false);
    setIsMobileProductsOpen(false);
  };

  return (
    <header className="sticky top-4 z-40 w-full max-w-[100vw]">
      <div
        className={`mx-auto max-w-6xl w-full px-4 sm:px-6 py-3 flex items-center justify-between
        border border-[#454546] rounded-full 
        backdrop-blur-md bg-black/60
        transition-all duration-300
        ${isScrolled ? "shadow-lg" : ""}`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image src="/logo.svg" alt="logo" width={140} height={40} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm lg:text-base">
          {navLinks.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="text-white/80 hover:text-primary transition-colors"
              scroll
            >
              {link.label}
            </Link>
          ))}

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button className="text-white/80 hover:text-primary transition-colors flex items-center gap-1">
              Products
              <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isProductsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-56 rounded-lg border border-[#454546] bg-black/95 backdrop-blur-md shadow-lg overflow-hidden"
                >
                  {productLinks.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="block px-4 py-3 text-white/80 hover:text-primary hover:bg-zinc-900 transition-colors text-sm"
                    >
                      {product.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          scroll
          className="hidden md:inline-flex border border-[#454546] text-white px-4 py-2 rounded-full text-sm lg:text-base hover:bg-primary hover:text-black transition-colors"
        >
          Request Demo
        </Link>

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
            className="md:hidden w-full max-w-[100vw]"
          >
            <div className="mx-auto max-w-6xl mt-3 px-4">
              <div className="rounded-2xl border border-[#454546] bg-black/90 backdrop-blur-md py-4 px-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    scroll
                    onClick={closeMenu}
                    className="block text-white/90 hover:text-primary text-sm py-1"
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile Products Dropdown */}
                <div className="space-y-2">
                  <button
                    onClick={() => setIsMobileProductsOpen((prev) => !prev)}
                    className="flex items-center justify-between w-full text-white/90 hover:text-primary text-sm py-1"
                  >
                    <span>Products</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isMobileProductsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4 space-y-2"
                      >
                        {productLinks.map((product) => (
                          <Link
                            key={product.href}
                            href={product.href}
                            onClick={closeMenu}
                            className="block text-white/80 hover:text-primary text-sm py-1"
                          >
                            {product.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="#contact"
                  scroll
                  onClick={closeMenu}
                  className="mt-2 inline-flex w-full items-center justify-center border border-[#454546] text-white px-4 py-2 rounded-full text-sm hover:bg-primary hover:text-black transition-colors"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
