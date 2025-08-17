import { Navigation } from "@/components/Navigation";
import { Github, ExternalLink, Calendar, Tag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe API"],
    date: "2024",
    github: "https://github.com/chitraansh13/ecommerce-platform",
    live: "https://ecommerce-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
    date: "2024",
    github: "https://github.com/chitraansh13/task-manager",
    live: "https://task-manager-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with location-based forecasts, interactive maps, and weather alerts using OpenWeather API.",
    technologies: ["React.js", "Tailwind CSS", "OpenWeather API", "Chart.js"],
    date: "2023",
    github: "https://github.com/chitraansh13/weather-dashboard",
    live: "https://weather-dashboard-demo.vercel.app",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media metrics with data visualization, trend analysis, and automated reporting features.",
    technologies: ["Python", "Django", "React.js", "D3.js", "Redis"],
    date: "2023",
    github: "https://github.com/chitraansh13/social-analytics",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop"
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