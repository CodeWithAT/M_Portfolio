"use client";



import React, { useRef, useState, useEffect } from "react";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

import Image from "next/image";

import { ArrowRight } from "lucide-react";



// --- DATA ---

const projects = [

  {

    id: 1,

    title: "Technology",

    tags: ["Workspace", "Apple"],

    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop",

    stats: "+20% Efficiency",

  },

  {

    id: 2,

    title: "Media Control",

    tags: ["Remote", "Entertainment"],

    img: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=1000&auto=format&fit=crop",

    stats: "",

  },

  {

    id: 3,

    title: "Textiles",

    tags: ["Design", "Materials"],

    img: "https://images.unsplash.com/photo-1515165592879-18492888c70a?q=80&w=1000&auto=format&fit=crop",

    stats: "#Design",

  },

  {

    id: 4,

    title: "Artificial Intelligence",

    tags: ["Tech", "Future"],

    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",

    stats: "",

  },

];



export default function HeroScrollAnimation() {

  const containerRef = useRef<HTMLDivElement>(null);

 

  // Track which slide is currently "Active" (On Top)

  const [activeSlide, setActiveSlide] = useState(0);

  const [hasScrolled, setHasScrolled] = useState(false);



  const { scrollYProgress } = useScroll({

    target: containerRef,

    offset: ["start start", "end end"],

  });



  // --- 1. DETECT SCROLL ---

  useMotionValueEvent(scrollYProgress, "change", (latest) => {

    if (latest > 0.01) {

      setHasScrolled(true);

    } else {

      setHasScrolled(false);

    }

  });



  // --- 2. AUTO FLIP TIMER ---

  useEffect(() => {

    if (hasScrolled) return;



    const interval = setInterval(() => {

      setActiveSlide((prev) => (prev + 1) % projects.length);

    }, 2000);



    return () => clearInterval(interval);

  }, [hasScrolled]);





  // --- 3. GLOBAL ANIMATIONS ---

  const backgroundColor = useTransform(scrollYProgress, [0.3, 0.5], ["#1A2C22", "#F6F3EB"]);

 

  const heroY = useTransform(scrollYProgress, [0, 0.4], ["0%", "-100%"]);

  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  const headerOpacity = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);

  const buttonOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);





  // --- 4. THE CARD LOGIC ---

  const useCardAnimation = (index: number) => {

   

    // Relative Index Calculation

    const relativeIndex = (index - activeSlide + projects.length) % projects.length;



    // Auto-Flip Styles (Idle State)

    const xOffset = relativeIndex * 50;

    const scale = 1 - (relativeIndex * 0.05);

    const zIndex = projects.length - relativeIndex;



    const autoVariant = {

      x: xOffset,

      y: 0,

      scale: scale,

      zIndex: zIndex,

      transition: { type: "spring", stiffness: 200, damping: 20 }

    };

   

    if (relativeIndex === projects.length - 1) {

        autoVariant.zIndex = 0;

    }



    // Scroll Styles (Grid State)

    const initialStackPos = 65;

    const finalGridPos = 3 + (relativeIndex * 24);



    const left = useTransform(

      scrollYProgress,

      [0, 0.7],

      [`${initialStackPos}vw`, `${finalGridPos}vw`]

    );



    const top = useTransform(scrollYProgress, [0, 0.7], ["20vh", "22vh"]);

    const height = useTransform(scrollYProgress, [0, 0.7], ["60vh", "55vh"]);

    const scrollLabelOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);



    return {

      left, top, height, scrollLabelOpacity,

      autoVariant, zIndex

    };

  };



  return (

    <div ref={containerRef} className="relative h-[500vh]">

      <motion.div

        style={{ backgroundColor }}

        className="sticky top-0 flex h-screen w-full flex-col overflow-hidden"

      >

        {/* --- NAV REMOVED --- */}



        {/* HERO TEXT */}

        <motion.div

            style={{ y: heroY, opacity: heroOpacity }}

            className="absolute inset-0 z-0 flex flex-col justify-center px-10"

        >

            <div className="w-[60%]">

                <h1 className="text-[11vw] leading-[0.85] font-black uppercase tracking-tighter text-[#F6F3EB]">

                    Genuine.<br />

                    Impact.

                </h1>

                <div className="mt-8 max-w-md text-lg text-[#F6F3EB]/80 font-light">

                    We are an industry-leading digital marketing agency partnering with bold brands.

                </div>

            </div>

        </motion.div>



        {/* HEADER */}

        <motion.div

            style={{ opacity: headerOpacity }}

            className="absolute top-[12vh] left-0 z-10 w-full px-10"

        >

            <div className="flex items-center justify-center md:justify-start">

                <h2 className="text-5xl font-bold text-[#1A2C22]">

                    Creating impact for

                </h2>

                <span className="ml-4 -rotate-2 rounded-sm bg-[#D2F05D] px-3 py-1 text-sm font-bold uppercase text-black shadow-sm">

                    Versed

                </span>

            </div>

        </motion.div>



        {/* CARDS */}

        <div className="absolute inset-0 z-20 pointer-events-none">

            {projects.map((project, index) => {

                // eslint-disable-next-line react-hooks/rules-of-hooks

                const { left, top, height, scrollLabelOpacity, autoVariant, zIndex } = useCardAnimation(index);



                return (

                    <motion.div

                        key={project.id}

                        style={{ left, top, height, zIndex }}

                        animate={!hasScrolled ? autoVariant : { x: 0, scale: 1 }}

                        transition={{ duration: 0.5, ease: "easeInOut" }}

                        className="absolute w-[22vw] min-w-[280px]"

                    >

                        <div className="relative h-full w-full overflow-hidden rounded-xl bg-gray-900 shadow-xl">

                            <Image

                                src={project.img}

                                alt={project.title}

                                fill

                                className="object-cover"

                            />

                            <div className="absolute inset-0 flex flex-col justify-end p-6">

                                {project.stats && (

                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-black shadow-lg whitespace-nowrap">

                                        {project.stats}

                                    </div>

                                )}

                            </div>

                        </div>



                        <motion.div

                            style={{ opacity: scrollLabelOpacity }}

                            className="mt-6 flex flex-col items-start px-1"

                        >

                            <h3 className="text-lg font-bold text-[#1A2C22]">{project.title}</h3>

                            <div className="mt-2 flex flex-wrap gap-2">

                                {project.tags.map(tag => (

                                    <span key={tag} className="rounded-full border border-gray-300 bg-transparent px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-gray-600">

                                        {tag}

                                    </span>

                                ))}

                            </div>

                        </motion.div>

                    </motion.div>

                );

            })}

        </div>



        {/* BUTTON */}

        <motion.div

            style={{ opacity: buttonOpacity }}

            className="absolute bottom-8 left-10 z-30"

        >

             <button className="flex items-center gap-2 rounded-md bg-[#FF9A8A] px-6 py-3 text-sm font-bold text-black shadow-md transition hover:scale-105">

                View all work <ArrowRight className="w-4 h-4" />

             </button>

        </motion.div>



      </motion.div>

    </div>

  );

}