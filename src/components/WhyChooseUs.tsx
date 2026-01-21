import { Briefcase, FileText, UserCheck, Code, DollarSign, CheckCircle, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Code,
      title: "Real Time Projects",
      points: [
        "Build industry based real-world projects",
        "Industry-standard project development",
        "Build comprehensive portfolio",
        "Hands-on practical experience",
      ],
    },
    {
      icon: UserCheck,
      title: "Professional Adaptability Training (PAT)",
      points: [
        "Included free for all bootcamp trainees",
        "Technical skills get you interviews",
        "Professional skills help you secure jobs",
        "Build long-term careers with confidence",
      ],
    },
    {
      icon: FileText,
      title: "Interview & Resume Prep",
      points: [
        "Advanced interview preparation techniques",
        "Professional resume building strategies",
        "Personal branding development",
        "Present your best professional self",
      ],
    },
    {
      icon: Briefcase,
      title: "100% Job Assistance",
      points: [
        "Dedicated placement cell",
        "50+ hiring partners",
        "Mock interviews with experts",
        "Career counseling support",
      ],
    },
  ];

  return (
    <section className="py-20 hero-gradient hero-pattern relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 text-white">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            We Prepare You to <span className="text-yellow-300">Thrive</span>, Not Just Survive
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Our secret sauce: Professional Adaptability Training included free for all bootcamp trainees
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 mb-12">
          {/* Why Choose Us Column */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="font-heading text-2xl font-bold text-yellow-300 mb-6">Why Choose Us</h3>
            {[
              { icon: DollarSign, title: "Very Less Fees", subtitle: "Affordable Quality" },
              { icon: Zap, title: "Fast Track", subtitle: "Quick Success" },
              { icon: CheckCircle, title: "Non IT to IT", subtitle: "Career Change" },
              { icon: UserCheck, title: "After Placement Payment", subtitle: "Not a dime before!" },
            ].map((reason, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white hover:bg-white/15 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-yellow-300/20 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-5 h-5 text-yellow-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{reason.title}</p>
                    <p className="text-xs text-white/70">{reason.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="lg:col-span-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white hover:bg-white/15 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-white/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;