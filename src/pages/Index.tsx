import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrainingApproach from "@/components/TrainingApproach";
import PopularPrograms from "@/components/PopularPrograms";
import WhyChooseUs from "@/components/WhyChooseUs";
import SuccessStories from "@/components/SuccessStories";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BackgroundVideo from "@/assets/background.mp4";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Background Video */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

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