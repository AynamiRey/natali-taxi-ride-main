import HeroSection from "@/components/HeroSection";
import DistanceSection from "@/components/DistanceSection";
import CitiesSection from "@/components/CitiesSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DistanceSection />
      <CitiesSection />
      <ReviewsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
