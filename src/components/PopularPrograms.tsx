import { Clock, Users, Laptop, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const programs = [
  {
    id: "SAP",
    icon: "💼",
    title: "SAP Training",
    subtitle: "Finance (FI), Controlling (CO) | ABAP | Materials Management (MM) | Sales & Distribution (SD) | BASIS",
    duration: "3 Months",
    mode: "Online",
    assistance: "100% Job Assistance",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "cloud",
    icon: "☁️",
    title: "Cloud Computing",
    subtitle: "AWS | Azure | GCP | Multi-Cloud",
    duration: "3 Months",
    mode: "Online",
    assistance: "100% Job Assistance",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "devops",
    icon: "⚙️",
    title: "DevOps Engineering",
    subtitle: "CI/CD | Docker | Kubernetes | Jenkins",
    duration: "4 Months",
    mode: "Online",
    assistance: "100% Job Assistance",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "Python",
    icon: "🐍",
    title: "Python Full-Stack",
    subtitle: "Django | Flask | React | PostgreSQL",
    duration: "2 Months",
    mode: "Online",
    assistance: "100% Job Assistance",
    color: "from-green-500 to-green-600",
  },
];

const PopularPrograms = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="section-title mb-2">
              Popular <span className="text-blue-500">Programs</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Start your journey with our most sought-after training programs
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/programs">
              View All Programs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <Link 
              key={program.id} 
              to={`/programs#${program.id}`}
              className="bg-card rounded-2xl overflow-hidden card-hover group"
            >
              <div className={`h-2 bg-gradient-to-r ${program.color}`} />
              <div className="p-6">
                <span className="text-4xl mb-4 block">{program.icon}</span>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {program.subtitle}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{program.assistance}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Laptop className="w-4 h-4" />
                    <span>{program.mode}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center text-primary font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPrograms;