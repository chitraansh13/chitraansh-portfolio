import { Navigation } from "@/components/Navigation";
import { Github, ExternalLink, Calendar, Tag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  
  {
    id: 1,
    title: "EasyDB",
    description: "It is a simple visual query builder for PostgreSQL databases, allowing users to create, read, update, and delete data without writing SQL queries. It also provides an SQL Command that you can manually input. It was made for a hackathon.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    date: "2024",
    github: "https://github.com/chitraansh13/easy-db",
    image: "/projects/easydb.png",
    featured: true
  },
  
  {
    id: 2,
    title: "KinderChat",
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "Python", "Flask", "Webpack", "PostgreSQL", "Figma"],
    description:"KinderChat is a safe and fun chat application designed specifically for kids. The app allows children to communicate in a secure environment where every message is scanned by an advanced machine learning model to detect threats, negative comments, and inappropriate content. It was made for a hackathon.",
    date: "2023",
    github: "https://github.com/notblankz/KinderChat",
    image: "/projects/KinderChatChat.png",
    featured: true
  },
  {
    id: 3,
    title: "Dumble",
    description: "This project was done for our college's WebDev Course mini project. It is a platform where you find fellow fitness enthusiasts, trainers, and nutritionists. It includes features like user profiles, workout plans, and nutrition tracking.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    date: "2024",
    github: "https://github.com/chitraansh13/dumble",
    image: "/projects/dumble.png"
  },
  {
    id: 4,
    title: "Simon Game",
    description: "Simple Simon Game built using HTML, CSS, and JavaScript. The game challenges players to repeat a sequence of colors and sounds, testing their memory and reflexes. It was made while learning JavaScript from a Udemy Course by Angela Yu.",
    technologies: ["Python", "Django", "React.js", "D3.js", "Redis"],
    date: "2023",
    github: "https://github.com/chitraansh13/SimonGame",
    image: "/projects/simongame.png",
    live:"https://simon-game-mocha-alpha.vercel.app/"
  }
];

const Projects = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              A collection of projects I've worked on, showcasing my skills in web development, 
              backend systems, and user experience design.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:gap-12">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`group relative overflow-hidden bg-surface-primary border-border hover:shadow-glow transition-all duration-500 ${
                  index % 2 === 0 ? 'animate-slide-in' : 'animate-fade-in'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`grid lg:grid-cols-2 gap-8 p-8 ${
                  index % 2 === 1 ? 'lg:grid-cols-2' : ''
                }`}>
                  {/* Project Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-video rounded-lg overflow-hidden bg-gradient-secondary">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-accent-purple text-white">Featured</Badge>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4 text-accent-teal" />
                      <span className="text-sm text-text-muted">{project.date}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                      {project.title}
                    </h3>

                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex items-center gap-2 mb-6">
                      <Tag className="w-4 h-4 text-accent-purple" />
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary"
                            className="text-xs bg-surface-secondary text-text-secondary border-border"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-4">
                      <Button 
                        size="sm" 
                        className="bg-accent-purple hover:bg-accent-purple/80 text-white"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      
                      {project.live && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-white"
                          asChild
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Interested in working together?
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-white"
              asChild
            >
              <a href="mailto:chitraansh.anand.univ@gmail.com">
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
