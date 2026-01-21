import { Star, Quote } from "lucide-react";

const successStories = [
  {
    name: "Shashidhara Chandrashekar",
    role: "SAP Consultant",
    company: "Capgemini",
    salary: "14 LPA",
    image: "SC",
    quote: "Career gap of 4 years. Cloud Tech Solutions helped me restart my career with confidence.",
    rating: 5,
  },
  {
    name: "Bharath Kumar AS",
    role: "SAP Consultant",
    company: "L&T Infotech",
    salary: "12 LPA",
    image: "BKS",
    quote: "Switched from non-IT to IT. Best decision of my life. The practical training was exceptional.",
    rating: 5,
  },
  {
    name: "Anil Reddy",
    role: "Cloud Developer",
    company: "Infosys",
    salary: "6 LPA",
    image: "AR",
    quote: "Fresher with no experience. Got placed in 45 days. The mentors were incredibly supportive.",
    rating: 5,
  },
];

const SuccessStories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Students Success Stories          </h2>
          <p className="section-subtitle">
            Real success stories from our graduates who transformed their careers with Cloud Tech Solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div 
              key={story.name}
              className="bg-card rounded-2xl p-8 card-hover relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center text-primary-foreground text-xl font-bold">
                  {story.image}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground">{story.name}</h4>
                  <p className="text-sm text-muted-foreground">{story.role}</p>
                  <p className="text-sm text-primary font-medium">{story.company}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-star fill-star" />
                ))}
              </div>

              <p className="text-muted-foreground italic mb-6">"{story.quote}"</p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">Package</span>
                <span className="text-lg font-bold text-success">{story.salary}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/placements" 
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            View All Success Stories →
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;