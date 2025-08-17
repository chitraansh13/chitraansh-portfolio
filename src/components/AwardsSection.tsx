import { Award, Trophy, Star } from "lucide-react";

const AwardsSection = () => {
  const awards = [
    {
      title: "Distinction Award Certificate",
      organization: "PES University",
      date: "Apr 2024",
      description: "Academic excellence recognition",
      icon: Award,
      color: "accent-purple"
    },
    {
      title: "Distinction Award Certificate",
      organization: "PES University",
      date: "Jan 25",
      description: "Academic excellence recognition",
      icon: Award,
      color: "accent-purple"
    },
    {
      title: "1st place – Qriosity Quiz Event",
      organization: "Magnachrista, Christ Junior College",
      date: "2022",
      description: "Quiz competition winner",
      icon: Trophy,
      color: "accent-teal"
    },
    {
      title: "3rd place – Website Development",
      organization: "TechSpirit, Delhi Public School",
      date: "2022",
      description: "Web development competition",
      icon: Star,
      color: "accent-purple"
    }
  ];

  return (
    <section id="awards" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-text-primary">Awards & </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div
                key={award.title}
                className="bg-surface-primary rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-primary mr-4 group-hover:scale-110 transition-transform duration-300">
                    <award.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-accent-purple transition-colors duration-300">
                  {award.title}
                </h3>
                
                <p className="text-accent-teal font-medium mb-2">
                  {award.organization}
                </p>
                
                <p className="text-text-muted text-sm mb-3">
                  {award.date}
                </p>
                
                <p className="text-text-secondary text-sm">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { AwardsSection };