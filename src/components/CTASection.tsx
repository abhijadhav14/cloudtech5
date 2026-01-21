import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-3xl p-8 md:p-16 text-center card-hover relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              Get personalized recommendations in just 90 seconds
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready To Discover Your <span className="text-blue-500">Career Path?</span>
            </h2>
            
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Take our intelligent Career Tour now. Get matched with the perfect program 
              based on your background, goals, and learning preferences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hero-gradient shadow-xl group text-white" asChild>
                <Link to="/contact">
                  Start Career Tour Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
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