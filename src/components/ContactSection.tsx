import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chitraansh.anand.univ@gmail.com",
      link: "mailto:chitraansh.anand.univ@gmail.com",
      color: "accent-purple"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9606400247",
      link: "tel:+919606400247",
      color: "accent-teal"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://in.linkedin.com/in/chitraansh-anand-3606bb230",
      color: "accent-purple"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View Projects",
      link: "https://github.com/chitraansh13",
      color: "accent-teal"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-surface-primary">
      <div className="container mx-auto max-w-4xl">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="text-text-primary">Let's </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          
          <p className="text-lg text-text-secondary text-center mb-16 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology and innovation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : '_self'}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-surface-secondary rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 group-hover:-translate-y-2">
                  <div className="flex items-center">
                    <div className="p-3 rounded-xl bg-gradient-primary mr-4 group-hover:scale-110 transition-transform duration-300">
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-purple transition-colors duration-300">
                        {contact.label}
                      </h3>
                      <p className="text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white border-0"
              onClick={() => window.open('mailto:chitraansh.anand.univ@gmail.com?subject=Let\'s Connect!', '_blank')}
            >
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border text-center">
        <p className="text-text-muted">
          © 2024 Chitraansh Anand. Built with passion and code.
        </p>
      </div>
    </section>
  );
};

export { ContactSection };