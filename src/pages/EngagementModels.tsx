import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, XCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const models = [
  {
    id: "classic",
    name: "Classic Model",
    tagline: "Start training",
    subtitle: "",
    description: "Start learning now. Our most popular model designed for students who believe in their potential.",
    color: "from-blue-500 to-blue-600",
    features: [
      { text: "Live Instructor-led online sessions", included: true },
      { text: "SAP login aceess(ECC and S/4HANA)", included: true },   
      { text: "Access to all learning resources", included: true },
      { text: "Dedicated mentor support", included: true },
      { text: "Resume building", included: true }
    ],
   // price: "₹25,000",
    priceNote: "",
    popular: true,
  },
  {
    id: "premium",
    name: "Premium Model",
    tagline: "Book career call",
    subtitle: "",
    description: "Best for professionals who wants structured high-touch online learning.",
    color: "from-purple-500 to-purple-600",
    features: [
      { text: "Live Instructor-led online sessions", included: true },
      { text: "SAP login aceess(ECC and S/4HANA)", included: true },
      
      { text: "Access to all learning resources", included: true },
      { text: "Dedicated mentor support", included: true },
      { text: "Interview preparation(mock interviews)", included: true },
      { text: "Resume and LinkedIn profile building", included: true },
      { text: "100% Job Assistance", included: true }


    ],
    //price: "₹35,000 - ₹45,000",
    priceNote: "",
    popular: false,
  },
  {
    id: "gold",
    name: "Gold Model",
    tagline: "Enroll now",
    subtitle: "Best for working professionals and career switch. Weekend live doubt sessions.",
    description: "",
    color: "from-green-500 to-green-600",
    features: [
      { text: "Live Instructor-led online sessions", included: true },
      { text: "SAP login aceess(ECC and S/4HANA)", included: true },
      
      { text: "Access to all learning resources", included: true },
      { text: "Dedicated mentor support", included: true },
      { text: "Interview preparation(mock interviews)", included: true },
      { text: "Resume and LinkedIn profile building", included: true },
      { text: "100% Job Assistance", included: true },
      { text: "Recorded video sessions access", included: true },
      { text: "Weekend live doubt clearing", included: true },
    ],
   // price: "₹45,000 - ₹55,000",
    priceNote: "",
    popular: false,
  },
];

const EngagementModels = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient hero-pattern py-20">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Flexible <span className="text-yellow-300">Engagement Models</span>
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Choose a payment model that works for your situation. We believe in making quality education accessible to everyone.
          </p>
        </div>
      </section>

      {/* Models Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {models.map((model) => (
              <div 
                key={model.id}
                className={`bg-card rounded-2xl overflow-hidden card-hover relative border-2 ${
                  model.id === "classic" ? "border-blue-500" :
                  model.id === "premium" ? "border-purple-500" :
                  "border-green-500"
                } ${
                  model.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {model.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                )}
                
                <div className={`h-2 bg-gradient-to-r ${model.color}`} />
                
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <p className="text-sm text-primary font-medium">{model.tagline}</p>
                    <h3 className="font-heading text-2xl font-bold text-foreground mt-1">
                      {model.name}
                    </h3>
                    <p className="text-muted-foreground font-medium mt-1">
                      {model.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-6">
                    {model.description}
                  </p>

                  <div className="space-y-3 mb-6 flex-grow">
                    {model.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        {feature.included ? (
                          <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                        ) : (
                          <XCircle className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? "text-foreground" : "text-muted-foreground/50"}`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border mt-auto">
                    <div className="flex items-center justify-end gap-2">
                      <Button 
                        variant="outline"
                        className="shrink-0 whitespace-nowrap"
                        asChild
                      >
                        <Link to="/contact">
                          Free Demo
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button 
                        className={`bg-gradient-to-r ${model.color} text-white hover:shadow-lg shrink-0 whitespace-nowrap`}
                        asChild
                      >
                        <Link to="/contact">
                          Get Started
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Frequently Asked <span className="text-blue-500">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card rounded-xl p-6">
              <h3 className="font-heading font-bold text-foreground mb-2">
                What is the Classic Model?
              </h3>
              <p className="text-muted-foreground">
                With our Classic Model, allows you to start learning for freshers with minimal upfront cost.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6">
              <h3 className="font-heading font-bold text-foreground mb-2">
                What if I don't get placed?
              </h3>
              <p className="text-muted-foreground">
                Placement support is provided only under gold model. For the classic model, we provide quality training, resource, and guidance to help you become job ready.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6">
              <h3 className="font-heading font-bold text-foreground mb-2">
                Can I switch between models?
              </h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade from Classic to Premium model and Premium model to Gold model at any time by paying the difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
        <div className="container mx-auto px-4 text-center text-primary-foreground relative z-10">
          <h2 className="font-heading text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-yellow-300 via-cyan-200 to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
            Cloud Technology Solutions
          </h2>

          <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
            Still have questions? Talk to our counselors and find the perfect model for you.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 font-bold text-lg px-8 py-6 rounded-full shadow-2xl" asChild>
            <Link to="/contact">
              Get Free Counseling
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EngagementModels;