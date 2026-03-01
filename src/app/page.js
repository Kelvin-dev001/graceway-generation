import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import VisionSection from "@/components/VisionSection";
import BenefitsSection from "@/components/BenefitsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <VisionSection />
      <BenefitsSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}