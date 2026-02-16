"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, MapPin, Mail } from "lucide-react";
import Link from "next/link";

// --- COMPONENTS ---

// 1. Animated Input Field (Same Logic, Better Style)
const FloatingInput = ({ label, type = "text", placeholder, id }: { label: string; type?: string; placeholder: string; id: string }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative mb-10 group">
      <label 
        htmlFor={id} 
        className={`absolute left-0 transition-all duration-300 pointer-events-none ${
          isFocused || value ? "-top-6 text-xs text-[#D2F05D] font-bold tracking-widest" : "top-2 text-xl text-[#F6F3EB]/50 font-medium"
        }`}
      >
        {label}
      </label>
      
      {type === "textarea" ? (
         <textarea
            id={id}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full bg-transparent border-b border-[#F6F3EB]/20 py-3 text-2xl text-[#F6F3EB] outline-none transition-all duration-300 focus:border-[#D2F05D] focus:pb-4 resize-none h-32 leading-relaxed"
         />
      ) : (
        <input
            id={id}
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full bg-transparent border-b border-[#F6F3EB]/20 py-3 text-2xl text-[#F6F3EB] outline-none transition-all duration-300 focus:border-[#D2F05D] focus:pb-4"
        />
      )}
      
      {/* Animated Gradient Line */}
      <div 
        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#D2F05D] to-[#FF9A8A] transition-all duration-700 ease-out ${
            isFocused ? "w-full opacity-100" : "w-0 opacity-0"
        }`} 
      />
    </div>
  );
};

// 2. Grain Effect
const GrainOverlay = () => (
  <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.15] mix-blend-overlay">
    <svg className="h-full w-full">
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  </div>
);

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <main className="relative min-h-screen w-full bg-[#1A2C22] text-[#F6F3EB] overflow-hidden selection:bg-[#D2F05D] selection:text-[#1A2C22]">
      
      {/* --- BACKGROUND FX --- */}
      <GrainOverlay />
      
      {/* Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#D2F05D] blur-[180px] opacity-[0.08] animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#FF9A8A] blur-[180px] opacity-[0.08] animate-pulse-slow delay-1000"></div>

      {/* --- NAVIGATION --- */}
      <nav className="relative z-50 flex w-full items-center justify-between px-6 py-8 md:px-12">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="flex h-11 w-11 items-center justify-center bg-[#D2F05D] transition-transform group-hover:rotate-180 duration-700 rounded-sm">
                <div className="h-5 w-5 border-2 border-[#1A2C22]"></div>
            </div>
            <span className="text-xl font-bold tracking-tight group-hover:text-[#D2F05D] transition-colors">NEW ENGEN</span>
        </Link>
        
        <Link href="/" className="hidden md:flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-all hover:text-[#FF9A8A]">
            Close 
            <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center relative transition-transform hover:rotate-90">
                <div className="h-[1px] w-5 bg-current rotate-45 absolute"></div>
                <div className="h-[1px] w-5 bg-current -rotate-45 absolute"></div>
            </div>
        </Link>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col lg:flex-row min-h-[85vh]">
        
        {/* LEFT COLUMN: TEXT & INFO */}
        <div className="w-full lg:w-1/2 px-6 md:px-16 py-12 flex flex-col justify-center">
            
            <div className="mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-3 mb-6"
                >
                    <span className="h-[2px] w-10 bg-[#FF9A8A]"></span>
                    <span className="text-[#FF9A8A] font-bold uppercase tracking-[0.2em] text-sm">Contact</span>
                </motion.div>

                <motion.h1 
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-6xl md:text-8xl lg:text-[6.5rem] font-black leading-[0.9] tracking-tighter uppercase mb-8"
                >
                    Let’s Build <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2F05D] via-[#ffffff] to-[#9CC5CA]">
                        The Future.
                    </span>
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="text-xl md:text-2xl font-light text-[#F6F3EB]/70 max-w-lg leading-relaxed"
                >
                    Have a vision? I have the engineering precision. Let’s combine strategy, code, and motion to create something legendary.
                </motion.p>
            </div>

            {/* Contact Details */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col gap-8"
            >
                <div className="group flex items-center gap-5 cursor-pointer">
                    <div className="h-14 w-14 rounded-full border border-[#F6F3EB]/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#D2F05D] group-hover:border-[#D2F05D] group-hover:text-[#1A2C22]">
                        <Mail size={22} />
                    </div>
                    <div>
                        <span className="block text-xs uppercase tracking-widest opacity-50 mb-1">Direct Email</span>
                        <span className="text-xl md:text-2xl font-bold group-hover:text-[#D2F05D] transition-colors">hello@abhay.dev</span>
                    </div>
                </div>
                 <div className="group flex items-center gap-5 cursor-pointer">
                    <div className="h-14 w-14 rounded-full border border-[#F6F3EB]/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#9CC5CA] group-hover:border-[#9CC5CA] group-hover:text-[#1A2C22]">
                        <MapPin size={22} />
                    </div>
                    <div>
                        <span className="block text-xs uppercase tracking-widest opacity-50 mb-1">Location</span>
                        <span className="text-xl md:text-2xl font-bold group-hover:text-[#9CC5CA] transition-colors">India / Remote</span>
                    </div>
                </div>
            </motion.div>
        </div>


        {/* RIGHT COLUMN: FORM */}
        <div className="w-full lg:w-1/2 px-6 md:px-16 py-12 flex flex-col justify-center relative">
            
            {/* Form Box */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="bg-[#F6F3EB]/5 backdrop-blur-xl border border-[#F6F3EB]/10 p-8 md:p-14 rounded-[2.5rem] shadow-2xl"
            >
                {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        
                        <FloatingInput id="name" label="What's your name?" placeholder="John Doe" />
                        <FloatingInput id="email" label="Where should I reply?" type="email" placeholder="john@company.com" />
                        <FloatingInput id="project" label="What are we building?" placeholder="Website, App, 3D Experience..." />
                        <FloatingInput id="message" label="Tell me about the vision" type="textarea" placeholder="We need to disrupt the market..." />

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className="group relative mt-6 flex w-full items-center justify-between overflow-hidden rounded-2xl bg-[#D2F05D] px-8 py-6 text-xl font-bold text-[#1A2C22] transition-all hover:bg-[#c2e04d]"
                        >
                            <span className="relative z-10 tracking-wide">INITIATE LAUNCH</span>
                            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#1A2C22] text-[#D2F05D] transition-transform duration-500 group-hover:rotate-[-45deg] group-hover:scale-110">
                                <ArrowRight size={24} />
                            </div>
                        </motion.button>
                    </form>
                ) : (
                    /* SUCCESS STATE */
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-24 text-center"
                    >
                        <motion.div 
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-[#D2F05D] text-[#1A2C22] shadow-[0_0_40px_rgba(210,240,93,0.3)]"
                        >
                            <Check size={56} strokeWidth={4} />
                        </motion.div>
                        <h3 className="text-5xl font-black uppercase tracking-tight mb-4 text-[#F6F3EB]">Received.</h3>
                        <p className="text-xl text-[#F6F3EB]/60 max-w-sm leading-relaxed">
                            Your vision has been logged. I'll analyze the data and get back to you within 24 hours.
                        </p>
                        <button 
                            onClick={() => setIsSubmitted(false)}
                            className="mt-10 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-[#FF9A8A] hover:text-white transition-colors"
                        >
                            <Sparkles size={16} /> Send another
                        </button>
                    </motion.div>
                )}
            </motion.div>

        </div>

      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 0.05; }
            50% { transform: scale(1.1); opacity: 0.1; }
        }
        .animate-pulse-slow {
            animation: pulse-slow 10s infinite ease-in-out;
        }
      `}</style>
    </main>
  );
}