import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech – Computer Science & Engineering",
      institution: "PES University",
      period: "2023 – 2027",
      status: "Semester 5",
      type: "Undergraduate"
    },
    {
      degree: "Class XII (CBSE) – Computer Science",
      institution: "BGS National Public School",
      period: "2022 – 2023",
      status: "Completed",
      type: "Higher Secondary"
    },
    {
      degree: "Class X (CBSE) – Information Technology",
      institution: "BGS National Public School",
      period: "2020 – 2021",
      status: "Completed",
      type: "Secondary"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-surface-primary">
      <div className="container mx-auto max-w-4xl">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-text-primary">Education</span>
          </h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className="bg-surface-secondary rounded-2xl p-8 shadow-soft hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="p-3 rounded-xl bg-gradient-primary mr-4">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">
                        {edu.degree}
                      </h3>
                      <p className="text-accent-teal font-medium">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-gradient-secondary rounded-full text-xs font-medium text-text-primary">
                      {edu.type}
                    </span>
                    <div className="flex items-center text-text-muted text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-text-secondary">
                    Status: <span className="text-accent-purple font-medium">{edu.status}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { EducationSection };