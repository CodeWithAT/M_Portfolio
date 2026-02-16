"use client";
import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";
import { X, Send, ExternalLink, Github, User, Briefcase, Cpu, GraduationCap } from "lucide-react";

// --- 1. Sub-Component: About Content ---
const AboutContent = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
        <h2 className="text-5xl font-bold tracking-tighter flex items-center gap-4">
            <User className="text-lime-400" size={40} /> About
        </h2>
        <p className="text-zinc-400 text-lg leading-relaxed">
            I am <span className="text-white">Abhay Tiwari</span>, a Full Stack Developer specializing in 
            cinematic digital experiences. After completing my 12th in 2021, I dedicated my time 
            to mastering modern web architecture and 3D integration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
                <Cpu className="text-lime-400 mb-2" size={20} />
                <h4 className="font-bold">Tech Stack</h4>
                <p className="text-zinc-500 text-sm">Next.js, Java, Python, GSAP, Three.js</p>
            </div>
            <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
                <GraduationCap className="text-lime-400 mb-2" size={20} />
                <h4 className="font-bold">Education</h4>
                <p className="text-zinc-500 text-sm">Full Stack Specialization (Post-2021)</p>
            </div>
        </div>
    </div>
);

// --- 2. Sub-Component: Work Content ---
const WorkContent = () => {
    const projects = [
        { title: "Ticket Management Platform", desc: "Jira-style task tracking system.", tech: "Next.js + GSAP" },
        { title: "HRMS ERP System", desc: "Enterprise employee management.", tech: "React + Spring Boot" },
        { title: "AI Media Extractor", desc: "Python-based keyword analysis.", tech: "Python + NLP" }
    ];
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <h2 className="text-5xl font-bold tracking-tighter flex items-center gap-4">
                <Briefcase className="text-lime-400" size={40} /> Work
            </h2>
            <div className="space-y-4">
                {projects.map((p, i) => (
                    <div key={i} className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-lime-400/50 transition-all">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-bold">{p.title}</h3>
                            <ExternalLink size={18} className="text-zinc-600 group-hover:text-lime-400" />
                        </div>
                        <p className="text-zinc-500 text-sm mt-1">{p.desc}</p>
                        <span className="inline-block mt-3 text-[10px] font-mono text-lime-400 border border-lime-400/20 px-2 py-1 rounded-full">{p.tech}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- 3. Sub-Component: Contact Content ---
const ContactContent = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
        <div>
            <h2 className="text-5xl font-bold tracking-tighter mb-2">Contact</h2>
            <p className="text-zinc-400">Available for collaborations and roles.</p>
        </div>
        <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-lime-400 transition-all" />
            <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-lime-400 transition-all" />
            <textarea rows={3} placeholder="Message" className="w-full bg-transparent border-b border-zinc-800 py-3 outline-none focus:border-lime-400 transition-all resize-none" />
            <button className="w-full py-4 bg-lime-500 text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-all active:scale-95">
                SEND MESSAGE <Send size={18} />
            </button>
        </form>
    </div>
);

// --- 4. NEW & IMPROVED 3D Robot Head ---
function RobotHead() {
    const headRef = useRef<THREE.Group>(null);
    
    useFrame((state) => {
        if (!headRef.current) return;
        // FASTER MOUSE TRACKING (Increased Lerp from 0.1 to 0.25)
        const targetX = state.mouse.x * 0.8;
        const targetY = -state.mouse.y * 0.5;
        
        headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetX, 0.25);
        headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, targetY, 0.25);
    });

    return (
        <Float floatIntensity={0.5} speed={3} rotationIntensity={0.2}>
            <group ref={headRef}>
                {/* --- MAIN CRANIUM (Dark Metallic) --- */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1.4, 1.2, 1.2]} />
                    <meshStandardMaterial color="#333" roughness={0.2} metalness={0.9} emissive="#111" />
                </mesh>

                {/* --- SHARP WIREFRAME OVERLAY (Tactical Look) --- */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1.42, 1.22, 1.22]} />
                    <meshBasicMaterial color="#4d4d4d" wireframe opacity={0.3} transparent />
                </mesh>

                {/* --- FACE PLATE (Slightly Forward) --- */}
                <mesh position={[0, -0.1, 0.65]}>
                    <boxGeometry args={[1.2, 0.8, 0.1]} />
                    <meshStandardMaterial color="#222" roughness={0.3} metalness={0.8} />
                </mesh>

                {/* --- GLOWING EYES (Sharp & Neon) --- */}
                <group position={[0, 0.05, 0.72]}>
                    {/* Left Eye */}
                    <mesh position={[-0.35, 0, 0]}>
                        <boxGeometry args={[0.25, 0.1, 0.05]} />
                        <meshStandardMaterial color="#a3e635" emissive="#a3e635" emissiveIntensity={2} toneMapped={false} />
                    </mesh>
                    {/* Right Eye */}
                    <mesh position={[0.35, 0, 0]}>
                        <boxGeometry args={[0.25, 0.1, 0.05]} />
                        <meshStandardMaterial color="#a3e635" emissive="#a3e635" emissiveIntensity={2} toneMapped={false} />
                    </mesh>
                </group>

                {/* --- SIDE VENTS (Detailing) --- */}
                <mesh position={[0.75, 0, 0]}>
                    <boxGeometry args={[0.1, 0.8, 0.8]} />
                    <meshStandardMaterial color="#333" roughness={0.5} metalness={0.5} />
                </mesh>
                <mesh position={[-0.75, 0, 0]}>
                    <boxGeometry args={[0.1, 0.8, 0.8]} />
                    <meshStandardMaterial color="#333" roughness={0.5} metalness={0.5} />
                </mesh>

                {/* --- ANTENNAS (Tech Feel) --- */}
                <group position={[0, 0.6, 0]}>
                    {/* Left Antenna */}
                    <mesh position={[-0.5, 0.3, 0]} rotation={[0, 0, 0.2]}>
                        <cylinderGeometry args={[0.02, 0.02, 0.6]} />
                        <meshStandardMaterial color="#555" metalness={1} />
                    </mesh>
                    <mesh position={[-0.56, 0.6, 0]}>
                        <sphereGeometry args={[0.04]} />
                        <meshStandardMaterial color="red" emissive="red" emissiveIntensity={2} />
                    </mesh>

                    {/* Right Antenna */}
                    <mesh position={[0.5, 0.3, 0]} rotation={[0, 0, -0.2]}>
                        <cylinderGeometry args={[0.02, 0.02, 0.6]} />
                        <meshStandardMaterial color="#555" metalness={1} />
                    </mesh>
                </group>

                {/* --- NECK JOINT --- */}
                <mesh position={[0, -0.7, 0]}>
                    <cylinderGeometry args={[0.3, 0.4, 0.4]} />
                    <meshStandardMaterial color="#1a1a1a" metalness={0.8} />
                </mesh>
            </group>
        </Float>
    );
}

// --- 5. Main Footer Component ---
export default function Footer() {
    const [activeModal, setActiveModal] = useState<"about" | "work" | "contact" | null>(null);
    const modalRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        if (activeModal) {
            gsap.to(overlayRef.current, { opacity: 1, display: "flex", duration: 0.3 });
            gsap.fromTo(modalRef.current, 
                { y: 50, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power4.out" }
            );
        } else {
            gsap.to(overlayRef.current, { opacity: 0, display: "none", duration: 0.3 });
        }
    }, [activeModal]);

    return (
        <footer className="relative h-screen bg-black text-white overflow-hidden flex flex-col justify-between pt-20" id="footer">
            
            {/* --- MODAL SYSTEM --- */}
            <div ref={overlayRef} className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 backdrop-blur-2xl px-4">
                <div ref={modalRef} className="bg-zinc-950/50 border border-white/10 p-8 md:p-12 rounded-[2.5rem] w-full max-w-2xl relative shadow-2xl max-h-[90vh] overflow-y-auto">
                    <button onClick={() => setActiveModal(null)} className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors z-50">
                        <X size={32} />
                    </button>
                    {activeModal === 'about' && <AboutContent />}
                    {activeModal === 'work' && <WorkContent />}
                    {activeModal === 'contact' && <ContactContent />}
                </div>
            </div>

            {/* --- FOOTER NAV --- */}
            <div className="flex justify-between items-start px-10 md:px-20 z-10 relative">
                <div className="flex gap-16 md:gap-32">
                    <div>
                        <h4 className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] mb-6 font-bold">Index</h4>
                        <ul className="space-y-3 font-medium text-lg">
                            <li><button onClick={() => setActiveModal('work')} className="hover:text-lime-400 transition-all duration-300 hover:translate-x-1">Work</button></li>
                            <li><button onClick={() => setActiveModal('about')} className="hover:text-lime-400 transition-all duration-300 hover:translate-x-1">About</button></li>
                            <li><button onClick={() => setActiveModal('contact')} className="hover:text-lime-400 transition-all duration-300 hover:translate-x-1 font-bold italic">Contact</button></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] mb-6 font-bold">Connect</h4>
                        <ul className="space-y-3 font-medium text-lg">
                            <li><a href="https://github.com/abhay-tiwari" className="hover:text-lime-400 transition-all flex items-center gap-2">Github <Github size={14}/></a></li>
                            <li><a href="https://www.linkedin.com/in/abhay-tiwari-93b412290/" className="hover:text-lime-400 transition-all flex items-center gap-2">LinkedIn <ExternalLink size={14}/></a></li>
                        </ul>
                    </div>
                </div>

                <div className="hidden md:flex flex-col items-end gap-2">
                    <span className="text-[10px] text-zinc-500 tracking-widest font-mono">AVAILABLE FOR HIRE</span>
                    <div className="w-2 h-2 bg-lime-500 rounded-full animate-pulse"></div>
                </div>
            </div>

            {/* --- 3D SCENE --- */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
                    <ambientLight intensity={2} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
                    <pointLight position={[-10, -10, -10]} intensity={1} color="#a3e635" />
                    <Suspense fallback={null}>
                        <RobotHead />
                        <Environment preset="city" />
                        {/* Sharper Shadow */}
                        <ContactShadows position={[0, -1.8, 0]} opacity={0.6} scale={10} blur={1.5} far={4} color="#000" />
                    </Suspense>
                </Canvas>
            </div>

            {/* --- GIANT NAME --- */}
            <div className="relative z-10 w-full text-center overflow-hidden">
                <h1 className="text-[26vw] leading-[0.75] font-black text-white mix-blend-difference pointer-events-none select-none tracking-tighter filter grayscale opacity-90">
                    ABHAY
                </h1>
            </div>
        </footer>
    );
}