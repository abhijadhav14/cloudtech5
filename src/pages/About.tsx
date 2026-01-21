import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Users, Award, BookOpen, Heart, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to transforming careers and bridging the gap between education and industry requirements.",
    },
    {
      icon: Users,
      title: "Student-Centric",
      description: "Every decision we make is centered around our students' success and career growth.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from curriculum design to placement support.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our trainers are passionate about teaching and helping students achieve their dreams.",
    },
  ];

  const team = [
    {
      name: "N V Vinay",
      role: "Managing Director (MD)",
      experience: "",
      initials: "SK",
    },
    {
      name: "Akshay Vaidya",
      role: "Founder",
      experience: "",
      initials: "AV",
    },
    {
      name: "Lakshmi Narashima",
      role: "Co-Founder",
      experience: "",
      initials: "AV",
    },

  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient hero-pattern py-20">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-yellow-300">Cloud Tech Solutions</span>
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Empowering careers since 2015. We've trained 2500+ students and helped them land their dream tech jobs.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">
                Our <span className="text-blue-500">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Cloud Tech Solutions was founded in 2019 with a simple mission: to bridge the gap between 
                  traditional education and industry requirements. We noticed that many talented individuals 
                  struggled to break into the tech industry due to lack of practical skills and industry exposure.
                </p>
                <p>
                  Our founder, N V Vinay, with over 15 years of experience in the telecom industry working 
                  with companies like Alcatel and Cisco, decided to create a training institute that focuses 
                  on practical, hands-on learning rather than just theoretical knowledge.
                </p>
                <p>
                  Today, we've grown into a comprehensive training institute offering programs in SAP, 
                  Cloud Computing, DevOps, Python Full-Stack, and more. Our alumni work at top companies 
                  including TCS, Infosys, Amazon, Google, and many more.
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <Button className="hero-gradient" asChild>
                  <Link to="/programs">
                    Explore Programs
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="stats-card">
                <p className="text-4xl font-bold blue mb-2">2500+</p>
                <p className="text-muted-foreground">Students Trained</p>
              </div>
              <div className="stats-card">
                <p className="text-4xl font-bold blue mb-2">97%</p>
                <p className="text-muted-foreground">Placement Rate</p>
              </div>
              <div className="stats-card">
                <p className="text-4xl font-bold blue mb-2">50+</p>
                <p className="text-muted-foreground">Hiring Partners</p>
              </div>
              <div className="stats-card">
                <p className="text-4xl font-bold blue mb-2">8+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Our <span className="text-blue-500">Values</span>
            </h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-2xl p-6 card-hover text-center">
                <div className="feature-icon mx-auto">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Meet Our <span className="text-blue-500">Team</span>
            </h2>
            <p className="section-subtitle">
              Industry experts dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-card rounded-2xl p-6 card-hover text-center">
                <div className="w-20 h-20 rounded-full hero-gradient flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 hero-gradient hero-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 text-primary-foreground">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-yellow-300">Cloud Tech Solutions?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-primary-foreground">
              <BookOpen className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-3">Practical Learning</h3>
              <p className="opacity-90">
                Hands-on online training with real industry projects and guided practices.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-primary-foreground">
              <Lightbulb className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-3">Industry Experts</h3>
              <p className="opacity-90">
                Learn from trainers with real industry and implementation experience.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-primary-foreground">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold mb-3">Career Support</h3>
              <p className="opacity-90">
                Job oriented guidance including resume building, interview preparation, and career assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;