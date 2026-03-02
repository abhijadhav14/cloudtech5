import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrainingApproach from "@/components/TrainingApproach";
import PopularPrograms from "@/components/PopularPrograms";
import WhyChooseUs from "@/components/WhyChooseUs";
import SuccessStories from "@/components/SuccessStories";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative bg-white">
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <TrainingApproach />
          <PopularPrograms />
          <WhyChooseUs />
          <SuccessStories />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;

