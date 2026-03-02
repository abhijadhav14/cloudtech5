import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-20 text-center card-hover relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-800/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Get personalized recommendations in just 90 seconds
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready To Discover Your <span className="text-blue-100">Career Path?</span>
            </h2>
            
            <p className="text-blue-50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Take our intelligent Career Tour now. Get matched with the perfect program 
              based on your background, goals, and learning preferences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl text-base font-semibold" asChild>
                <Link to="/contact">
                  Start Career Tour Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 text-base font-semibold" asChild>
                <Link to="/programs">
                  Browse Programs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;