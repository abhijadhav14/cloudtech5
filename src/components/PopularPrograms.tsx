import { Clock, Users, Laptop, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import sapImg from "@/assets/frontPage/Popular Programs/SAP.avif";
import cloudImg from "@/assets/frontPage/Popular Programs/cloud.jpg";
import devopsImg from "@/assets/frontPage/Popular Programs/Devops.jpg";
import pythonImg from "@/assets/frontPage/Popular Programs/Python Full Stack.jpg";
import sapLogo from "@/assets/frontPage/Popular Programs/Logos/SAP.jpg";
import cloudLogo from "@/assets/frontPage/Popular Programs/Logos/Cloud.png";
import devopsLogo from "@/assets/frontPage/Popular Programs/Logos/Devops.webp";
import pythonLogo from "@/assets/frontPage/Popular Programs/Logos/python.png";

const programs = [
  {
    id: "SAP",
    logo: sapLogo,
    title: "SAP Training",
    subtitle: "Finance (FI), Controlling (CO) | ABAP | Materials Management (MM) | Sales & Distribution (SD) | BASIS",
    duration: "3 Months",
    mode: "Online",
    assistance: "100% Job Assistance",
    color: "from-blue-500 to-blue-600",
    bgImage: sapImg,
  },
  {
    id: "cloud",
    logo: cloudLogo,
    title: "Cloud Computing",
    subtitle: "AWS | Azure | GCP | Multi-Cloud",
    duration: "3 Months",
    mode: "Online",
    assistance: "100% Job Assistance",
    color: "from-purple-500 to-purple-600",
    bgImage: cloudImg,
  },
  {
    id: "devops",
    logo: devopsLogo,
    title: "DevOps Engineering",
    subtitle: "CI/CD | Docker | Kubernetes | Jenkins",
    duration: "4 Months",
    mode: "Online",
    assistance: "100% Job Assistance",
    color: "from-orange-500 to-orange-600",
    bgImage: devopsImg,
  },
  {
    id: "Python",
    logo: pythonLogo,
    title: "Python Full-Stack",
    subtitle: "Django | Flask | React | PostgreSQL",
    duration: "2 Months",
    mode: "Online",
    assistance: "100% Job Assistance",
    color: "from-green-500 to-green-600",
    bgImage: pythonImg,
  },
];

const PopularPrograms = () => {
  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="section-title mb-2 text-white">
              Popular <span className="text-blue-400">Programs</span>
            </h2>
            <p className="text-gray-200 text-lg">
              Start your journey with our most sought-after training programs
            </p>
          </div>
          <Button variant="outline" className="border-white/50 text-white hover:bg-white/10" asChild>
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
              className="relative rounded-2xl overflow-hidden card-hover group"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${program.bgImage})`,
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
              
              <div className={`relative h-2 bg-gradient-to-r ${program.color} z-10`} />
              <div className="relative p-6 z-10">
                <img src={program.logo} alt={program.title} className="w-16 h-16 mb-4 object-contain bg-white/90 rounded-lg p-2" />
                <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {program.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {program.subtitle}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users className="w-4 h-4" />
                    <span>{program.assistance}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Laptop className="w-4 h-4" />
                    <span>{program.mode}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center text-blue-400 font-medium group-hover:text-blue-300">
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