import { FileText, TrendingUp, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TrainingApproach = () => {
  const phases = [
    {
      icon: FileText,
      title: "Foundation Phase",
      description: "Building rock-solid understanding of core concepts and fundamental knowledge specific to your job role.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Advancement Phase",
      description: "Advanced topics, frameworks, and specialized tools for tackling complex challenges.",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: Rocket,
      title: "Implementation Phase",
      description: "Real-time project development where theory meets practice, building a comprehensive portfolio.",
      color: "bg-green-50 text-green-600",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Our Training <span className="text-blue-500">Approach</span>
          </h2>
          <p className="section-subtitle">
            Every training program follows a structured, three-phase methodology to ensure 
            comprehensive learning from fundamentals to real-world application.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div 
              key={phase.title} 
              className="bg-card rounded-2xl p-8 card-hover group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`feature-icon ${phase.color.split(' ')[0]}`}>
                <phase.icon className={`w-7 h-7 ${phase.color.split(' ')[1]}`} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {phase.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {phase.description}
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all"
              >
                Know More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingApproach;