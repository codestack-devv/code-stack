import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoMain from "@/assets/logo-main.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/blog", label: "Blog" },
    { to: "/games", label: "Games" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/98 backdrop-blur-xl shadow-lg border-b border-border/50" : "bg-background/20 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* 3D Logo with CodeStack Text */}
          <Link to="/" className="flex items-center space-x-3 group relative" style={{ perspective: "1000px" }}>
            {/* 3D Glow Background */}
            <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg opacity-0 
              group-hover:opacity-100 blur-xl transition-all duration-500" />
            
            {/* Logo Container with 3D Transform */}
            <div className="relative transform-gpu transition-all duration-500 
              group-hover:scale-110 group-hover:rotate-y-12"
              style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute -inset-1 bg-accent/30 rounded-lg blur-md opacity-0 
                group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src={logoMain} 
                alt="CodeStack Logo" 
                className="h-12 w-auto relative z-10 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]
                  transform-gpu transition-all duration-500"
                style={{ 
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                  transform: 'translateZ(20px)'
                }}
              />
            </div>
            
            {/* 3D CodeStack Text */}
            <div className="relative transform-gpu transition-all duration-500 group-hover:translate-x-1"
              style={{ transformStyle: "preserve-3d" }}>
              <h1 className="font-poppins font-bold text-2xl md:text-3xl text-accent relative
                transform-gpu transition-all duration-500
                group-hover:scale-105"
                style={{ 
                  textShadow: `
                    2px 2px 0px hsl(var(--primary)),
                    4px 4px 0px rgba(0,0,0,0.2),
                    0 0 20px hsla(var(--accent), 0.5)
                  `,
                  transform: 'translateZ(30px)'
                }}>
                CodeStack
              </h1>
              {/* Animated underline */}
              <div className="h-0.5 bg-gradient-to-r from-accent to-primary scale-x-0 
                group-hover:scale-x-100 transition-transform duration-500 origin-left
                rounded-full" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${
                  location.pathname === link.to ? "text-accent after:w-full" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="hero" size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    location.pathname === link.to ? "text-accent" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="hero" size="sm" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
