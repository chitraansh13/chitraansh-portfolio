import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { id: "hero", label: "Home", path: "/" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "awards", label: "Awards" },
    { id: "contact", label: "Contact" },
    { id: "projects", label: "Projects", path: "/projects" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/"
            className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Chitraansh Anand
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.path) {
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={cn(
                      "text-sm font-medium transition-colors duration-200 hover:text-accent-purple",
                      location.pathname === item.path 
                        ? "text-accent-purple" 
                        : "text-text-secondary"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }
              
              return (
                <button
                  key={item.id}
                  onClick={() => isHomePage && scrollToSection(item.id)}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 hover:text-accent-purple",
                    !isHomePage ? "opacity-50 cursor-not-allowed" : "",
                    activeSection === item.id && isHomePage
                      ? "text-accent-purple" 
                      : "text-text-secondary"
                  )}
                  disabled={!isHomePage}
                >
                  {item.label}
                </button>
              );
            })}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border bg-background/95 backdrop-blur-lg rounded-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                if (item.path) {
                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "text-sm font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-accent hover:text-accent-foreground",
                        location.pathname === item.path 
                          ? "text-accent-purple bg-accent" 
                          : "text-text-secondary"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                }
                
                return (
                  <button
                    key={item.id}
                    onClick={() => isHomePage && scrollToSection(item.id)}
                    className={cn(
                      "text-sm font-medium px-4 py-2 rounded-md text-left transition-colors duration-200 hover:bg-accent hover:text-accent-foreground",
                      !isHomePage ? "opacity-50 cursor-not-allowed" : "",
                      activeSection === item.id && isHomePage
                        ? "text-accent-purple bg-accent" 
                        : "text-text-secondary"
                    )}
                    disabled={!isHomePage}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export { Navigation };