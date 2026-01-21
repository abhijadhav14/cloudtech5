import { ArrowRight, Star, Users, Award, BookOpen, Play, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { submitForm } from "@/utils/api";
import CTSLogo from "@/assets/CTS.png";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      setMessage("Please fill all required fields");
      return;
    }

    setLoading(true);
    try {
      const response = await submitForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        program: formData.program || "Not specified"
      });

      if (response.success) {
        setMessage("✅ Thank you! You will receive a WhatsApp message shortly.");
        setFormData({ name: "", email: "", phone: "", program: "" });
        setTimeout(() => setMessage(""), 5000);
      } else {
        setMessage("❌ " + response.message);
      }
    } catch (error: any) {
      setMessage("❌ " + (error.message || "Error submitting form. Please try again."));
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { value: "2500+", label: "Students Trained" },
    { value: "97%", label: "Placement Rate" },
    { value: "50+", label: "Corporate Partners" },
    { value: "4.9", label: "Average Rating", icon: Star },
  ];

  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ pointerEvents: 'none' }}
      >
        <source src="/background.mov" type="video/quicktime" />
        <source src="/background.mov" type="video/mp4" />
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Animated Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-bl from-green-500/15 to-teal-500/15 rounded-full blur-2xl animate-ping" style={{ animationDuration: '2s' }} />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="text-white text-center lg:text-left">
            <div className="mb-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-3">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow" />
                Beyond courses. Focused on careers
              </span>
              
              <div className="mb-3 flex justify-center lg:justify-start">
                <img src={CTSLogo} alt="Cloud Tech Solutions" className="w-64 h-56 md:w-96 md:h-84 lg:w-[500px] lg:h-[440px] object-contain hover:scale-105 transition-transform" />
              </div>
              
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black mb-0 leading-tight bg-gradient-to-r from-yellow-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent drop-shadow-2xl">
                Cloud Technology Solutions
              </h2>
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight text-white">
              Launch Your Career with{" "}
              <span className="text-yellow-300">Industry-Ready</span> Programs
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
              Join thousands of successful graduates who landed their dream tech jobs. 
              Get hands-on training, real projects, and 100% job assistance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-xl group"
                asChild
              >
                <Link to="/programs">
                  Explore Programs
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/50 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link to="/engagement-models">
                  <Play className="w-5 h-5 mr-2" />
                  Explore Models
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-sm">2500+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span className="text-sm">Industry Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span className="text-sm">Practical Training</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full border border-green-400/50">
                <DollarSign className="w-5 h-5 text-green-300" />
                <span className="text-sm font-semibold text-green-300">Very Less Fees</span>
              </div>
            </div>
          </div>

          {/* Right - Hero Image/Card */}
          <div className="relative animate-slide-in-right">
            <div className="glass-card rounded-2xl p-8 shadow-2xl">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                Start Your Journey Today
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
                <select 
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-muted-foreground"
                >
                  <option value="">Select Program</option>
                  <option value="SAP">SAP Training</option>
                  <option value="cloud">Cloud Computing</option>
                  <option value="devops">DevOps Training</option>
                  <option value="Python">Python Programming</option>
                </select>
                <Button 
                  type="submit"
                  disabled={loading}
                  className="w-full hero-gradient shadow-lg text-white" 
                  size="lg"
                >
                  {loading ? "Submitting..." : "Get Free Counseling"}
                </Button>
              </form>
              {message && (
                <p className={`text-sm text-center mt-4 ${message.includes("✅") ? "text-green-600" : "text-red-600"}`}>
                  {message}
                </p>
              )}
              <p className="text-xs text-muted-foreground text-center mt-4">
                No spam. We respect your privacy.
              </p>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-xl hidden md:flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-foreground">97%</p>
                <p className="text-sm text-muted-foreground">Placement Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white"
            >
              <div className="flex items-center justify-center gap-1 mb-2">
                {stat.icon && <stat.icon className="w-5 h-5 text-yellow-300 fill-yellow-300" />}
                <span className="text-3xl font-bold">{stat.value}</span>
              </div>
              <p className="text-sm text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;