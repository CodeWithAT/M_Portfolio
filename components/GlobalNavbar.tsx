"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function GlobalNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollY } = useScroll();

  // 1. Detect Scroll Position
  useMotionValueEvent(scrollY, "change", (latest) => {
    const isOverThreshold = latest > 50; // Switches to "Pill Mode" after 50px
    if (isOverThreshold !== isScrolled) {
      setIsScrolled(isOverThreshold);
    }
  });

  // 2. Animation Variants
  const navVariants = {
    hidden: { 
      backgroundColor: "rgba(26, 44, 34, 0)", // Transparent at top
      padding: "0px 0px",
      borderRadius: "0px",
      y: 0
    },
    visible: { 
      backgroundColor: "#1A2C22", // Dark Green Pill when scrolled
      padding: "12px 32px",
      borderRadius: "100px",
      y: 10,
      border: "1px solid rgba(255,255,255,0.1)",
      boxShadow: "0px 10px 30px rgba(0,0,0,0.1)"
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-[100] flex w-full items-center justify-between px-6 py-6 md:px-10 md:py-8 transition-all duration-500 pointer-events-none">
      {/* pointer-events-none allows clicking through the empty areas of the navbar.
         We re-enable pointer-events-auto on the interactive elements (buttons, links).
      */}

      {/* --- LEFT: LOGO --- */}
      <Link href="/" className="pointer-events-auto flex items-center gap-2 group">
        <div className="flex h-10 w-10 items-center justify-center bg-[#D2F05D] transition-transform group-hover:rotate-90 duration-500">
          <div className="h-5 w-5 border-2 border-black"></div>
        </div>
        <span className="text-2xl font-bold tracking-tight text-[#F6F3EB]">
          NEW ENGEN
        </span>
      </Link>

      {/* --- CENTER: LINKS (The Morphing Pill) --- */}
      <motion.div
        variants={navVariants}
        initial="hidden"
        animate={isScrolled ? "visible" : "hidden"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="hidden md:flex items-center gap-8 pointer-events-auto backdrop-blur-md"
      >
        {['Work', 'Services', 'Solutions', 'Insights', 'Technology', 'Company'].map((item) => (
          <Link 
            key={item} 
            href={`/${item.toLowerCase()}`} 
            className="text-sm font-medium text-[#F6F3EB] transition-opacity hover:opacity-70"
          >
            {item}
          </Link>
        ))}
      </motion.div>

      {/* --- RIGHT: CTA BUTTON --- */}
      <div className="pointer-events-auto">
        <Link href="/contact">
            <button className="rounded-md bg-[#FF9A8A] px-6 py-3 text-sm font-bold text-black transition hover:scale-105 shadow-lg active:scale-95">
            Let's talk <ArrowRight className="inline ml-1 w-4 h-4"/>
            </button>
        </Link>
      </div>
    </nav>
  );
}