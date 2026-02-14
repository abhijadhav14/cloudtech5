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
      color: "bg-blue-50 text-blue-600",
      bgImage: foundationImg,
    },
    {
      icon: TrendingUp,
      title: "Advancement Phase",
      description: "Advanced topics, frameworks, and specialized tools for tackling complex challenges.",
      color: "bg-purple-50 text-purple-600",
      bgImage: advancementImg,
    },
    {
      icon: Rocket,
      title: "Implementation Phase",
      description: "Real-time project development where theory meets practice, building a comprehensive portfolio.",
      color: "bg-green-50 text-green-600",
      bgImage: implementationImg,
    },
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">
            Our Training <span className="text-blue-400">Approach</span>
          </h2>
          <p className="section-subtitle text-gray-200">
            Every training program follows a structured, three-phase methodology to ensure 
            comprehensive learning from fundamentals to real-world application.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div 
              key={phase.title} 
              className="relative rounded-2xl p-8 card-hover group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${phase.bgImage})`,
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`feature-icon ${phase.color.split(' ')[0]} bg-white/90`}>
                  <phase.icon className={`w-7 h-7 ${phase.color.split(' ')[1]}`} />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-200 leading-relaxed mb-4">
                  {phase.description}
                </p>
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-blue-400 font-medium group-hover:gap-2 transition-all hover:text-blue-300"
                >
                  Know More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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