"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

// --- DATA ---
const services = [
  {
    id: "strategy",
    title: "Strategy",
    description: "As a strategic digital marketing agency, genuine impact starts with a plan. Before we spend a single dollar on media, we immerse ourselves in your business to deliver insights on your market, customers, and competition.",
    tags: ["Market Research", "Consumer Segmentation", "Competitive Intelligence", "Media & Comms Planning", "Strategic Consulting"],
    color: "#D2F05D", // Lime
    visual: (
        <div className="relative flex h-full w-full items-center justify-center bg-[#1F332A]">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="h-64 w-64 border-2 border-[#D2F05D] opacity-50 rounded-full flex items-center justify-center"
            >
                 <div className="h-48 w-48 border-2 border-[#D2F05D] opacity-70 rounded-full"></div>
            </motion.div>
            <div className="absolute h-16 w-16 bg-[#D2F05D] clip-path-hexagon animate-pulse"></div>
        </div>
    )
  },
  {
    id: "media",
    title: "Media",
    description: "As a digital marketing agency, we know real growth takes more than quick wins—it demands a strategic, full-funnel media approach. At New Engen, we leverage deep consumer research and insights to drive precision media buying.",
    tags: ["Paid Search", "Paid Social", "Programmatic", "Connected TV", "Influencer Marketing"],
    color: "#FF9A8A", // Pink
    visual: (
        <div className="relative flex h-full w-full items-center justify-center bg-[#1F332A] overflow-hidden">
             <div className="grid grid-cols-4 gap-4 opacity-30 rotate-12 scale-125">
                {[...Array(16)].map((_, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0.2 }}
                        animate={{ opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: 3, delay: i * 0.1, repeat: Infinity }}
                        className="h-20 w-20 border border-[#FF9A8A] rounded-lg"
                    />
                ))}
             </div>
        </div>
    )
  },
  {
    id: "creative",
    title: "Creative",
    description: "As a creative-driven digital agency, we craft audience-first content that doesn't just look good—it performs and converts. From brand storytelling to performance-driven assets, our creative breaks through the noise.",
    tags: ["Short-Form Video", "Hi-Fi Video", "Statics", "Landing Pages", "Photography"],
    color: "#C2B5FF", // Lavender
    visual: (
        <div className="relative flex h-full w-full items-center justify-center bg-[#1F332A]">
             <div className="flex gap-4">
                {[...Array(3)].map((_, i) => (
                    <motion.div 
                        key={i}
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                        className="h-32 w-24 border-2 border-[#C2B5FF] rounded-t-full rounded-b-md opacity-60"
                    />
                ))}
             </div>
        </div>
    )
  },
  {
    id: "measurement",
    title: "Measurement",
    description: "At New Engen, measurement isn't an afterthought—it's the foundation of success. Our always-on, AI-powered analytics provide a real-time, cross-channel view of performance, empowering brands to scale with confidence.",
    tags: ["Audience Management", "Intelligence & Insights", "Targeting & Activation", "Measurement & Attribution"],
    color: "#FFD166", // Yellow
    visual: (
        <div className="relative flex h-full w-full items-end justify-center bg-[#1F332A] pb-20 gap-2">
             {[40, 70, 50, 90, 60].map((h, i) => (
                 <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="w-12 bg-[#FFD166] opacity-80 rounded-t-lg"
                 />
             ))}
        </div>
    )
  },
  {
    id: "retail",
    title: "Retail Marketing",
    description: "As a digital marketing agency with deep retail expertise, we know retail marketing is more than just shelf space. We take a data-first approach to retail, combining digital media and shopper insights.",
    tags: ["Multi-Channel Activation", "Retail Media", "Creator & Affiliate", "Shopper Content"],
    color: "#83D483", // Green
    visual: (
        <div className="relative flex h-full w-full items-center justify-center bg-[#1F332A] overflow-hidden">
             {[...Array(5)].map((_, i) => (
                 <motion.div
                    key={i}
                    animate={{ y: [0, 1000] }}
                    transition={{ duration: 5, delay: i * 0.8, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-100px] h-20 w-16 bg-[#83D483] opacity-50 rounded-b-lg border-t-4 border-white/20"
                    style={{ left: `${20 + i * 15}%` }}
                 />
             ))}
        </div>
    )
  },
];

export default function ServicesScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(Math.floor(latest * services.length), services.length - 1);
    setActiveService(index);
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-[#1A2C22]">
      
      {/* Sticky Viewport */}
      <div className="sticky top-0 flex h-screen w-full flex-col overflow-hidden">
        
        {/* --- NAV REMOVED FROM HERE --- */}

        {/* --- MAIN CONTENT ROW --- */}
        <div className="flex h-full w-full items-center">
            
            {/* LEFT COLUMN: TEXT */}
            <div className="flex w-full flex-col justify-center px-10 md:w-1/2 lg:px-20">
                <div className="flex flex-col gap-6">
                    {services.map((service, index) => {
                        const isActive = index === activeService;
                        
                        return (
                            <div key={service.id} className="relative transition-all duration-500">
                                {/* Heading */}
                                <h2 
                                    className={`text-4xl font-bold transition-colors duration-300 ${
                                        isActive ? "text-[#F6F3EB]" : "text-[#F6F3EB]/30"
                                    }`}
                                >
                                    {service.title}
                                </h2>

                                {/* Expandable Content */}
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-6 pb-2">
                                                <p className="text-lg font-light leading-relaxed text-[#F6F3EB]/80">
                                                    {service.description}
                                                </p>
                                                
                                                {/* Tags */}
                                                <div className="mt-6 flex flex-wrap gap-2">
                                                    {service.tags.map(tag => (
                                                        <span 
                                                            key={tag} 
                                                            className="rounded-full border border-[#F6F3EB]/30 px-3 py-1 text-xs text-[#F6F3EB] transition-colors hover:bg-[#F6F3EB] hover:text-[#1A2C22]"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Button */}
                                                <button 
                                                    className="mt-8 flex items-center gap-2 rounded-md px-6 py-3 text-sm font-bold text-[#1A2C22] transition-transform hover:scale-105"
                                                    style={{ backgroundColor: service.color }}
                                                >
                                                    Learn more <ArrowRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* RIGHT COLUMN: VISUAL */}
            <div className="hidden h-full w-1/2 items-center justify-center md:flex p-10">
                <div className="relative h-[70%] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#1F332A] shadow-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeService}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            className="h-full w-full"
                        >
                            {services[activeService].visual}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
