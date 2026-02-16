"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

// --- MOCK DATA ---
const industries = ["Ecommerce", "B2B Tech", "Healthcare", "Fintech", "Retail"];

const allClients = [
  // Page 1
  [
    "1-800-flowers.com", "SEAT GEEK", "Harry & David", "MeUndies", "VIMERGY",
    "GlassesUSA", "Coterie", "HARRY'S", "snipes", "hedley & bennett",
    "Our Place", "Caraway", "FABLETICS", "686", "DIME"
  ],
  // Page 2
  [
    "Olaplex", "Supergoop!", "Ruggable", "Athletic Greens", "Whoop",
    "Liquid Death", "Magic Spoon", "Brooklinen", "Parachute", "Away",
    "Glossier", "Warby Parker", "Allbirds", "Casper", "Ritual"
  ]
];

// Modern easing curve for "expensive" feel
const SMOOTH_EASE = [0.22, 1, 0.36, 1] as const; 

export default function ClientsSection() {
  const [page, setPage] = useState(0);
  const [industryIndex, setIndustryIndex] = useState(0);

  // Auto-rotate badge
  useEffect(() => {
    const interval = setInterval(() => {
      setIndustryIndex((prev) => (prev + 1) % industries.length);
    }, 2500); // Slightly faster for energy
    return () => clearInterval(interval);
  }, []);

  const nextPage = () => {
    setPage((prev) => (prev + 1) % allClients.length);
  };

  const prevPage = () => {
    setPage((prev) => (prev - 1 + allClients.length) % allClients.length);
  };

  return (
    <section className="relative w-full bg-[#F6F3EB] py-32 text-[#1A2C22] overflow-hidden">
      
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* --- HEADER WITH MODERN REVEAL --- */}
        <div className="mb-20 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            
            {/* Left Side: Title */}
            <div>
                <span className="mb-6 block text-xs font-bold uppercase tracking-[0.2em] opacity-50">
                    Trusted By The Best
                </span>

                {/* LINE 1: OUR [BADGE] */}
                <div className="flex flex-wrap items-center gap-4 md:gap-5">
                    <div className="overflow-hidden">
                        <motion.h2 
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 1, ease: SMOOTH_EASE }}
                            viewport={{ once: true }}
                            className="text-7xl font-black leading-none tracking-tighter md:text-9xl"
                        >
                            OUR
                        </motion.h2>
                    </div>

                    {/* ROTATING BADGE */}
                    <div className="relative h-16 min-w-[220px] overflow-hidden rounded-full bg-[#D2F05D] px-8 md:h-24 md:min-w-[320px]">
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={industryIndex}
                                initial={{ y: "100%", filter: "blur(4px)" }}
                                animate={{ y: "0%", filter: "blur(0px)" }}
                                exit={{ y: "-100%", filter: "blur(4px)" }}
                                transition={{ duration: 0.6, ease: SMOOTH_EASE }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <span className="text-3xl font-bold tracking-tight text-[#1A2C22] md:text-5xl">
                                    {industries[industryIndex]}
                                </span>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* LINE 2: CLIENTS SHINE */}
                <div className="overflow-hidden">
                    <motion.h2 
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 1, delay: 0.1, ease: SMOOTH_EASE }}
                        viewport={{ once: true }}
                        className="text-7xl font-black leading-none tracking-tighter md:text-9xl"
                    >
                        CLIENTS SHINE
                    </motion.h2>
                </div>
            </div>

            {/* Right Side: Controls (Aligned to bottom right of header) */}
            <div className="flex gap-3 pb-2">
                <button 
                    onClick={prevPage}
                    className="group flex h-14 w-14 items-center justify-center rounded-full border border-[#1A2C22]/10 bg-transparent transition-all hover:bg-[#FF9A8A] hover:border-[#FF9A8A]"
                >
                    <ArrowLeft className="h-6 w-6 transition-transform group-hover:-translate-x-1" />
                </button>
                <button 
                    onClick={nextPage}
                    className="group flex h-14 w-14 items-center justify-center rounded-full border border-[#1A2C22]/10 bg-transparent transition-all hover:bg-[#FF9A8A] hover:border-[#FF9A8A]"
                >
                    <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                </button>
            </div>
        </div>


        {/* --- GRID CONTAINER --- */}
        <div className="relative min-h-[500px] w-full">
            <AnimatePresence mode="wait">
                <motion.div
                    key={page}
                    className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
                        exit: { opacity: 0, transition: { duration: 0.2 } }
                    }}
                >
                    {allClients[page].map((client) => (
                        <motion.div
                            key={client}
                            variants={{
                                hidden: { y: 20, opacity: 0 },
                                visible: { 
                                    y: 0, 
                                    opacity: 1,
                                    transition: { duration: 0.6, ease: SMOOTH_EASE } 
                                }
                            }}
                            whileHover={{ 
                                y: -5,
                                transition: { duration: 0.2, ease: "easeOut" }
                            }}
                            className="group relative flex aspect-[4/3] cursor-pointer flex-col items-center justify-center rounded-2xl border border-[#1A2C22]/5 bg-white/50 p-6 text-center backdrop-blur-sm transition-colors hover:border-transparent hover:bg-white hover:shadow-xl"
                        >
                            {/* Logo Text (Simulating Logo) */}
                            <span className="text-lg font-bold text-[#1A2C22] opacity-60 transition-opacity group-hover:opacity-100">
                                {client}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>

      </div>
    </section>
  );
}