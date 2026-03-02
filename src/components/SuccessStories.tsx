import { Star, Quote } from "lucide-react";

const successStories = [
  {
    name: "Shashidhara Chandrashekar",
    role: "SAP Consultant",
    company: "Capgemini",
    
    image: "SC",
    quote: "Cloud Tech Solutions helped me restart my career with confidence.",
    rating: 5,
  },
  {
    name: "Bharath Kumar AS",
    role: "SAP Consultant",
    company: "L&T Infotech",
    
    image: "BKS",
    quote: "Switched from non-IT to IT. Best decision of my life. The practical training was exceptional.",
    rating: 5,
  },
  {
    name: "Anil Reddy",
    role: "SAP Consultant",
    company: "Infosys",
    
    image: "AR",
    quote: "The hands-on projects and real-world scenarios prepared me perfectly for my current role.",
    rating: 5,
  },
];

const SuccessStories = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-slate-900">
            Students Success Stories
          </h2>
          <p className="section-subtitle text-gray-700">
            Real success stories from our graduates who transformed their careers with Cloud Tech Solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div 
              key={story.name}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 card-hover relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-100" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                  {story.image}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900">{story.name}</h4>
                  <p className="text-sm text-gray-600">{story.role}</p>
                  <p className="text-sm text-blue-600 font-medium">{story.company}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-5">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-gray-700 italic">"{story.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
