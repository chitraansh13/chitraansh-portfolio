import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-50" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-text-primary">Hi, I'm </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Chitraansh
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-text-secondary mb-8 font-medium">
            Computer Science Engineering Student & Full Stack Developer
          </h2>
          
          <p className="text-lg text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about coding and problem-solving, I'm a third-year CS student 
            who loves turning ideas into reality through elegant code and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white border-0"
              onClick={() => window.open('mailto:chitraansh.anand.univ@gmail.com')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-surface-secondary hover:bg-surface-secondary transition-all duration-300"
                onClick={() => window.open('https://github.com/chitraansh13', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-surface-secondary hover:bg-surface-secondary transition-all duration-300"
                onClick={() => window.open('https://in.linkedin.com/in/chitraansh-anand-3606bb230', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="h-6 w-6 text-text-muted hover:text-accent-purple transition-colors duration-300" />
        </button>
      </div>
    </section>
  );
};

export { HeroSection };