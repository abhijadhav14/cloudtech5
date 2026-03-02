import { ArrowRight, Star, Users, Award, BookOpen, Play, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { submitForm } from "@/utils/api";
import CTSLogo from "@/assets/frontPage/Popular Programs/Logos/CTS_LOGO.png";
import BackgroundVideo from "@/assets/background.mp4";

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
      const errorText = error?.message || "Error submitting form. Please try again.";
      setMessage("❌ " + errorText);
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
    <section className="relative overflow-hidden py-12 md:py-16">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{ pointerEvents: "none" }}
      >
        <source src={BackgroundVideo} type="video/mp4" />
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Fallback gradient in case video doesn't load */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 to-white/40" />

      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-32 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-12 items-start min-h-screen lg:min-h-auto">
          {/* Left Content - Large Logo Section */}
          <div className="lg:col-span-2 text-center py-8 md:py-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white/90 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-white rounded-full" />
              Beyond courses. Focused on careers
            </span>
            
            <div className="mb-12 flex justify-center">
              <img src={CTSLogo} alt="Cloud Tech Solutions" className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] object-contain drop-shadow-2xl hover:-translate-y-2 transition-transform duration-300" />
            </div>
            
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6 drop-shadow-lg">
              Cloud Technology Solutions
            </h1>
            
            <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-white/95 mb-6 drop-shadow-lg">
              Launch Your Career with{" "}
              <span className="text-blue-300">Industry-Ready</span> Programs
            </h2>
            
            <p className="text-base md:text-lg text-white/85 mb-8 leading-relaxed max-w-2xl mx-auto">
              Join thousands of successful graduates who landed their dream tech jobs. 
              Get hands-on training, real projects, and 100% job assistance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all"
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
                className="border-white text-white hover:bg-white/20"
                asChild
              >
                <Link to="/engagement-models">
                  <Play className="w-5 h-5 mr-2" />
                  Explore Models
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/85">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-300" />
                <span className="text-sm font-medium">2500+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-300" />
                <span className="text-sm font-medium">Industry Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-300" />
                <span className="text-sm font-medium">Practical Training</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/30 rounded-full border border-green-400/50 backdrop-blur-sm">
                <DollarSign className="w-5 h-5 text-green-300" />
                <span className="text-sm font-semibold text-green-200">Very Less Fees</span>
              </div>
            </div>
          </div>

          {/* Right - Hero Form Card */}
          <div className="relative">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 sticky top-20">
              <h3 className="font-heading text-2xl font-bold text-slate-900 mb-8">
                Start Your Journey Today
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div>
                  <select 
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-700"
                  >
                    <option value="">Select Program (Optional)</option>
                    <option value="SAP">SAP Training</option>
                    <option value="cloud">Cloud Computing</option>
                    <option value="devops">DevOps Training</option>
                    <option value="Python">Python Programming</option>
                  </select>
                </div>
                <Button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all font-medium" 
                  size="lg"
                >
                  {loading ? "Submitting..." : "Get Free Counseling"}
                </Button>
              </form>
              {message && (
                <p className={`text-sm text-center mt-4 font-medium ${message.includes("✅") ? "text-green-600" : "text-red-600"}`}>
                  {message}
                </p>
              )}
              <p className="text-xs text-gray-500 text-center mt-5">
                No spam. We respect your privacy.
              </p>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-xl border border-white/20 hidden md:flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-bold text-lg text-slate-900">97%</p>
                <p className="text-sm text-gray-600">Placement Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all card-hover"
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                {stat.icon && <stat.icon className="w-5 h-5 text-blue-300 fill-blue-100" />}
                <span className="text-3xl font-bold text-white">{stat.value}</span>
              </div>
              <p className="text-sm font-medium text-white/75">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;