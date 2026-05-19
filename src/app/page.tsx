import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AnalyticsDashboard from "./components/AnalyticsDashboard";
import AISection from "./components/AISection";
import BiometricSection from "./components/BiometricSection";
import BenefitsSection from "./components/BenefitsSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0E27] overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <AnalyticsDashboard />
      <AISection />
      <BiometricSection />
      <BenefitsSection />
      <Footer />
    </div>
  );
}