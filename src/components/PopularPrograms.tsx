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
    color: "from-blue-600 to-blue-700",
    borderColor: "border-blue-200",
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
    color: "from-purple-600 to-purple-700",
    borderColor: "border-purple-200",
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
    color: "from-orange-600 to-orange-700",
    borderColor: "border-orange-200",
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
    color: "from-green-600 to-green-700",
    borderColor: "border-green-200",
    bgImage: pythonImg,
  },
];

const PopularPrograms = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="section-title text-slate-900">
              Popular <span className="text-blue-600">Programs</span>
            </h2>
            <p className="text-gray-700 text-lg font-medium">
              Start your journey with our most sought-after training programs
            </p>
          </div>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
            <Link to="/programs">
              View All Programs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <Link 
              key={program.id} 
              to={`/programs#${program.id}`}
              className="group h-full"
            >
              <div className={`relative h-full rounded-2xl overflow-hidden bg-white border-2 ${program.borderColor} transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}>
                {/* Color accent bar */}
                <div className={`h-1.5 bg-gradient-to-r ${program.color}`} />
                
                {/* Background Image - subtle overlay */}
                <div 
                  className="absolute inset-0 top-1.5 opacity-10 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${program.bgImage})`,
                  }}
                />
                
                <div className="relative p-6 flex flex-col h-full">
                  {/* Logo */}
                  <div className="mb-5">
                    <img src={program.logo} alt={program.title} className="w-16 h-16 object-contain rounded-lg border border-gray-200 p-2 bg-gray-50" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                      {program.subtitle}
                    </p>
                  </div>
                  
                  {/* Details */}
                  <div className="space-y-3 mb-6 border-t border-gray-200 pt-5">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm font-medium">{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Users className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm font-medium">{program.assistance}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Laptop className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm font-medium">{program.mode}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
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