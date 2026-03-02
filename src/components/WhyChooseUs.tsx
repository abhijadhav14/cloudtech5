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
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            We Prepare You to <span className="text-blue-600">Thrive</span>, Not Just Survive
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium">
            Our secret sauce: Professional Adaptability Training included free for all bootcamp trainees
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Why Choose Us Column */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="font-heading text-2xl font-bold text-slate-900 mb-6">Why Choose Us</h3>
            {[
              { icon: DollarSign, title: "Very Less Fees", subtitle: "Affordable Quality" },
              { icon: Zap, title: "Fast Track", subtitle: "Quick Success" },
              { icon: CheckCircle, title: "Non IT to IT", subtitle: "Career Change" },
            ].map((reason, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-slate-900">{reason.title}</p>
                    <p className="text-xs text-gray-600">{reason.subtitle}</p>
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
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 mb-4">{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
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