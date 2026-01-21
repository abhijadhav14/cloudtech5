import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, Users, Laptop, Star, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { title } from "process";

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
    description: "Master SAP with hands-on lab experience. Learn from industry experts with real-world implementation experience.",
    topics: ["SAP Modules", "Fico Configuration", "Financial Accounting", "Controlling", "SAP ERP", "SAP HANA"],
    //price: "₹25,000",
    rating: 4.9,
    students: 500,
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
    description: "Comprehensive cloud training covering major platforms. Prepare for cloud certifications and real-world cloud architecture.",
    topics: ["AWS Solutions Architect", "Azure Administrator", "GCP Fundamentals", "Cloud Security", "Serverless Architecture", "Container Services"],
    //price: "₹25,000",
    rating: 4.8,
    students: 750,
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
    description: "Learn end-to-end DevOps practices with hands-on projects. Master automation, containerization, and orchestration.",
    topics: ["Docker & Containers", "Kubernetes Orchestration", "Jenkins CI/CD", "Terraform IaC", "Ansible Automation", "Monitoring & Logging"],
    //price: "₹30,000",
    rating: 4.9,
    students: 600,
  },
  {
    id: "python",
    icon: "🐍",
    title: "Python Full-Stack",
    subtitle: "Django | Flask | React | PostgreSQL",
    duration: "4 Months",
    mode: "Online",
    assistance: "100% Job Assistance",
    color: "from-yellow-500 to-yellow-600",
    description: "Become a full-stack developer with Python. Build web applications from scratch with modern frameworks.",
    topics: ["Python Core", "Django Framework", "Flask Microservices", "React Frontend", "RESTful APIs", "Database Design"],
    //price: "₹22,000",
    rating: 4.8,
    students: 800,
  },
  {
    id: "data",
    icon: "📊",
    title: "Data Engineering",
    subtitle: "ETL | Spark | Airflow | Data Warehousing",
    duration: "4 Months",
    mode: "Online",
    assistance: "100% Job Assistance",
    color: "from-indigo-500 to-indigo-600",
    description: "Master data pipeline development and big data technologies. Learn to build scalable data infrastructure.",
    topics: ["Apache Spark", "Airflow Orchestration", "Data Warehousing", "ETL Pipelines", "SQL & NoSQL", "Data Modeling"],
    //price: "₹20,000",
    rating: 4.9,
    students: 350,
  },
  {
    id: "salesforce",
    icon: "🔷",
    title: "Salesforce CRM",
    subtitle: "Admin | Developer | Sales Cloud | Service Cloud",
    duration: "3 Months",
    mode: "Online",
    assistance: "100% Job Assistance",
    color: "from-cyan-500 to-cyan-600",
    description: "Become a Salesforce expert with comprehensive training. Learn CRM administration, development, and cloud solutions.",
    topics: ["Salesforce Admin", "Apex Programming", "Lightning Components", "Sales Cloud", "Service Cloud", "Salesforce Integration"],
    //price: "₹28,000",
    rating: 4.8,
    students: 420,
  },
  {
    id: "dotnet",
    icon: "⚡",
    title: ".NET Full Stack",
    subtitle: "C# | ASP.NET Core | React | SQL Server",
    duration: "4 Months",
    mode: "Online",
    assistance: "100% Job Assistance",
    color: "from-violet-500 to-violet-600",
    description: "Master Microsoft .NET ecosystem for enterprise development. Build scalable web applications with modern frameworks.",
    topics: ["C# Advanced", "ASP.NET Core", "Entity Framework", "Web APIs", "React Frontend", "SQL Server"],
    //price: "₹24,000",
    rating: 4.7,
    students: 550,
  },
  {
    id: "ai",
    icon: "🤖",
    title: "Artificial Intelligence",
    subtitle: "Machine Learning | Deep Learning | NLP | Computer Vision",
    duration: "5 Months",
    mode: "Online",
    assistance: "100% Job Assistance",
    color: "from-green-500 to-green-600",
    description: "Dive into AI and machine learning with hands-on projects. Master neural networks, NLP, and cutting-edge AI technologies.",
    topics: ["Machine Learning", "Deep Learning", "TensorFlow & PyTorch", "NLP", "Computer Vision", "Generative AI"],
    //price: "₹35,000",
    rating: 4.7,
    students: 680,
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="hero-gradient hero-pattern py-20">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our Training <span className="text-yellow-300">Programs</span>
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Industry-ready programs designed to launch your tech career. Choose from our comprehensive range of training courses.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div 
                key={program.id}
                id={program.id}
                className="bg-card rounded-2xl overflow-hidden card-hover group"
              >
                <div className={`h-2 bg-gradient-to-r ${program.color}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl">{program.icon}</span>
                    <div className="flex items-center gap-1 bg-secondary px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-star fill-star" />
                      <span className="text-sm font-medium">{program.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {program.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {program.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {program.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {program.topics.slice(0, 4).map((topic) => (
                      <span 
                        key={topic}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                    {program.topics.length > 4 && (
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                        +{program.topics.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-2 text-sm mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{program.students}+ Students Trained</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Laptop className="w-4 h-4" />
                      <span>{program.mode}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>{program.assistance}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground"></p>
                      
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" asChild>
                        <Link to="/contact">
                          Free Demo
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button className="hero-gradient" asChild>
                        <Link to="/contact">
                          Enroll Now
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

      {/* CTA Section */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Not sure which program is right for you?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Talk to our career counselors and get personalized recommendations.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
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

export default Programs;