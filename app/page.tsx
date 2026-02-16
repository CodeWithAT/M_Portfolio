import GlobalNavbar from "@/components/GlobalNavbar";
import HeroScrollAnimation from "@/components/HeroScrollAnimation";
import ServicesScroll from "@/components/ServicesScroll";
import ClientsSection from "@/components/ClientsSection";
import AboutSection from "@/components/AboutSection"; // <--- Import
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="w-full bg-[#1A2C22]">
      <GlobalNavbar />
      
      <HeroScrollAnimation />
      <ServicesScroll />
      <ClientsSection />
      <AboutSection /> {/* <--- Add here */}
      <Footer />

    </main>
  );    
} 