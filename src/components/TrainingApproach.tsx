import { FileText, TrendingUp, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import foundationImg from "@/assets/frontPage/Phase/foundation.avif";
import advancementImg from "@/assets/frontPage/Phase/advancement.jpg";
import implementationImg from "@/assets/frontPage/Phase/implemention.jpeg";

const TrainingApproach = () => {
  const phases = [
    {
      icon: FileText,
      title: "Foundation Phase",
      description: "Building rock-solid understanding of core concepts and fundamental knowledge specific to your job role.",
      color: "from-blue-600 to-blue-700",
      borderColor: "border-blue-200",
      bgImage: foundationImg,
    },
    {
      icon: TrendingUp,
      title: "Advancement Phase",
      description: "Advanced topics, frameworks, and specialized tools for tackling complex challenges.",
      color: "from-purple-600 to-purple-700",
      borderColor: "border-purple-200",
      bgImage: advancementImg,
    },
    {
      icon: Rocket,
      title: "Implementation Phase",
      description: "Real-time project development where theory meets practice, building a comprehensive portfolio.",
      color: "from-green-600 to-green-700",
      borderColor: "border-green-200",
      bgImage: implementationImg,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-slate-900">
            Our Training <span className="text-blue-600">Approach</span>
          </h2>
          <p className="section-subtitle text-gray-700">
            Every training program follows a structured, three-phase methodology to ensure 
            comprehensive learning from fundamentals to real-world application.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div 
              key={phase.title} 
              className={`relative rounded-2xl overflow-hidden bg-white border-2 ${phase.borderColor} card-hover h-full`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image - subtle overlay */}
              <div 
                className="absolute inset-0 opacity-8 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${phase.bgImage})`,
                }}
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/80" />
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className={`inline-flex w-12 h-12 rounded-lg bg-gradient-to-br ${phase.color} text-white items-center justify-center mb-6`}>
                  <phase.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-4">
                  {phase.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                  {phase.description}
                </p>
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                >
                  Know More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingApproach;