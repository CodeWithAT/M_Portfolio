"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// --- IMAGES ---
const baseImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
];
const teamImages = [...baseImages, ...baseImages, ...baseImages];

// --- TEXT REVEAL ---
const textReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: { 
    y: "0%", 
    opacity: 1, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function AboutSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full bg-[#F6F3EB] px-6 py-24 text-[#1A2C22] lg:px-12 lg:py-32 overflow-hidden selection:bg-[#D2F05D] selection:text-[#1A2C22]">
      <div className="mx-auto max-w-[1500px]">
        
        {/* --- LABEL --- */}
        <div className="mb-12 flex items-center gap-4">
            <span className="block h-[1px] w-8 bg-[#1A2C22]"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">About Us</span>
        </div>

        {/* --- PART 1: TYPOGRAPHY GRID --- */}
        <div className="flex flex-col gap-6 md:gap-8 mb-24 w-full">
          
          {/* ROW 1: "MAXIMIZE IT" + [ANIMATED PILL] */}
          <div className="flex w-full items-center gap-4 md:gap-8">
            <div className="overflow-hidden shrink-0">
              <motion.h2 
                variants={textReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black uppercase leading-[0.85] tracking-tighter"
              >
                Maximize it,
              </motion.h2>
            </div>
            
            {/* 1. GREEN PILL ANIMATION (Liquid Charge) */}
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
              style={{ originX: 0 }}
              className="relative flex h-12 md:h-20 lg:h-24 flex-1 overflow-hidden rounded-full shadow-inner bg-[#1A2C22]"
            >
                {/* Dark Background is static */}
                
                {/* Lime Green "Living" Fill */}
                <motion.div 
                    className="absolute right-0 top-0 h-full bg-[#D2F05D]"
                    initial={{ width: "60%" }}
                    animate={{ width: ["60%", "65%", "55%", "60%"] }} // Breathing effect
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Gloss Shine Sweep */}
                    <motion.div
                        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                    />
                </motion.div>
            </motion.div>
          </div>


          {/* ROW 2: [ANIMATED CHART] + "MEASURE IT" */}
          <div className="flex w-full items-center gap-4 md:gap-8">
             
             {/* 2. BLUE CHART ANIMATION (Flowing Data Wave) */}
             <motion.div 
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: "circOut" }}
                style={{ originX: 1 }}
                className="relative h-12 md:h-20 lg:h-24 flex-1 overflow-hidden rounded-full bg-[#9CC5CA] shadow-inner"
             >
                 {/* The Wave Container */}
                 <div className="absolute inset-0 flex items-end">
                    {/* Two overlapping waves moving at different speeds */}
                    <motion.div 
                        className="absolute bottom-0 h-[150%] w-[200%] opacity-60"
                        style={{ 
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1440 320\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath fill=\'%233A7E85\' d=\'M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',
                            backgroundRepeat: 'repeat-x',
                            backgroundSize: '50% 100%'
                        }}
                        animate={{ x: ["0%", "-50%"] }} // Moves left continuously
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    />
                     <motion.div 
                        className="absolute bottom-0 h-[150%] w-[200%]"
                        style={{ 
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1440 320\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath fill=\'%234B959E\' d=\'M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',
                            backgroundRepeat: 'repeat-x',
                            backgroundSize: '50% 100%'
                        }}
                        animate={{ x: ["-50%", "0%"] }} // Moves right continuously
                        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                    />
                 </div>
            </motion.div>

            <div className="overflow-hidden shrink-0">
              <motion.h2 
                variants={textReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black uppercase leading-[0.85] tracking-tighter text-right"
              >
                Measure it,
              </motion.h2>
            </div>
          </div>


          {/* ROW 3: TEXT + [ANIMATED HEXAGONS] */}
          <div className="flex w-full items-center gap-4 md:gap-8">
            <div className="overflow-hidden shrink-0">
              <motion.h2 
                variants={textReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black uppercase leading-[0.85] tracking-tighter"
              >
                And Repeat.
              </motion.h2>
            </div>

             {/* 3. HEXAGON ANIMATION (Mechanical Ripple) */}
             <motion.div 
                 initial={{ scaleX: 0, opacity: 0 }}
                 whileInView={{ scaleX: 1, opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.4, ease: "circOut" }}
                 style={{ originX: 0 }}
                 className="flex h-12 md:h-20 lg:h-24 flex-1 items-center overflow-hidden rounded-r-full pl-2"
             >
                 <div className="flex h-full items-center -space-x-2 md:-space-x-4 w-[200%]">
                    {[...Array(30)].map((_, i) => (
                        <motion.div 
                            key={i} 
                            className="h-full aspect-[0.9] shrink-0 bg-[#F26430] clip-path-hexagon"
                            animate={{ 
                                scale: [1, 0.85, 1],
                                opacity: [1, 0.8, 1] 
                            }}
                            transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                ease: "easeInOut",
                                delay: i * 0.1 // Staggered delay creates the wave effect
                            }}
                        />
                    ))}
                 </div>
            </motion.div>
          </div>

        </div>


        {/* --- PART 2: BOTTOM SPLIT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* LEFT: CONTENT */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="lg:col-span-5 flex flex-col items-start"
            >
                 <p className="mb-10 text-lg md:text-xl font-medium leading-relaxed opacity-80 text-justify">
                    New Engen is recognized as an industry-leading digital marketing agency renowned for its expertise across the customer journey and in driving business growth. Our clients and partners view us as the best agency to work with.
                </p>

                <div className="flex items-center gap-5">
                    <button className="flex items-center gap-2 rounded-md bg-[#FF9A8A] px-8 py-4 text-sm font-bold text-black transition-all hover:scale-105 hover:shadow-lg">
                        Company <ArrowRight className="h-4 w-4" />
                    </button>
                    <div className="group flex h-14 w-14 cursor-pointer items-center justify-center rounded-lg bg-[#1A2C22] text-[#D2F05D] shadow-xl transition-all hover:rotate-12">
                        <div className="h-6 w-6 border-2 border-current transition-all group-hover:border-white"></div>
                    </div>
                </div>
            </motion.div>

            {/* RIGHT: SLIDER */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.7 }}
                className="lg:col-span-7 w-full overflow-hidden mask-gradient-soft"
            >
                <div 
                    className="relative w-full flex"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div
                        className="flex gap-6"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 35,
                                ease: "linear",
                            },
                        }}
                        style={{ 
                            animationPlayState: isHovered ? "paused" : "running",
                            width: "max-content"
                        }}
                    >
                        {teamImages.map((src, index) => (
                            <div 
                                key={index}
                                className="relative h-[400px] w-[280px] md:h-[500px] md:w-[350px] shrink-0 overflow-hidden rounded-2xl bg-gray-200 shadow-md transition-transform duration-500 hover:scale-[1.02]"
                            >
                                <Image 
                                    src={src}
                                    alt="Team Culture"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

        </div>

      </div>

      <style jsx global>{`
        .clip-path-hexagon {
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
        .mask-gradient-soft {
            mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
        }
      `}</style>
    </section>
  );
}