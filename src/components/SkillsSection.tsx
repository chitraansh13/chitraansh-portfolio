import { Code, Database, Wrench, Globe } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "C", "HTML", "CS"],
      color: "accent-purple"
    },
    {
      icon: Globe,
      title: "Technologies",
      skills: ["Node.js", "Express.js", "Next.js", "Tailwind CSS", "React.js"],
      color: "accent-teal"
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "PostgreSQL","MongoDB"],
      color: "accent-purple"
    },
    {
      icon: Wrench,
      title: "Software & Tools",
      skills: ["Git", "Python IDLE", "Visual Studio Code","Figma"],
      color: "accent-teal"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-surface-primary">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-text-primary">Technical </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-surface-secondary rounded-2xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-primary mr-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-surface-primary rounded-lg text-text-secondary font-medium hover:bg-gradient-secondary hover:text-text-primary transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { SkillsSection };