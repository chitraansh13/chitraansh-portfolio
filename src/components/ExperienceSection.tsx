import { Calendar, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "HoPES – PES University",
      position: "Technical Domain Head",
      period: "March 2025 – Present",
      location: "PES University",
      description: "Leading a team of five developers to build scalable full-stack web applications for a 2,000+ student audience.",
      type: "Leadership"
    },
    {
      company: "HoPES – PES University",
      position: "Technical Domain Head",
      period: "Feb 2024 – March2025",
      location: "PES University",
      description: "Full Stack developer",
      type: "Leadership"
    },
    {
      company: "[24]7.ai",
      position: "Student Intern",
      period: "Jun 2024 – Aug 2024",
      location: "AdTech Division",
      description: "Worked with the Target team (AdTech offering). Learned technologies related to Spotify Advertisements.",
      type: "Internship"
    },
    {
      company: "Fluttr",
      position: "Front End Developer",
      period: "Dec 2021 – Jul 2023",
      location: "Remote",
      description: "Developed and tested websites in a part-time engagement.",
      type: "Part-time"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-text-primary">Work </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-primary"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div className="bg-surface-primary rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-secondary text-text-primary`}>
                          {exp.type}
                        </span>
                        <div className="flex items-center text-text-muted text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-text-primary mb-2">
                        {exp.position}
                      </h3>
                      
                      <div className="flex items-center text-accent-purple mb-4">
                        <Building className="h-4 w-4 mr-2" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      
                      {exp.location && (
                        <div className="flex items-center text-text-muted text-sm mb-4">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      )}
                      
                      <p className="text-text-secondary leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ExperienceSection };