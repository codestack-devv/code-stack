import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Code, CheckCircle2 } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Our <span className="text-transparent bg-clip-text bg-gradient-accent">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Showcasing our expertise in building innovative digital solutions
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Delivering exceptional digital experiences across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Civil Care AI */}
            <Card className="group bg-card border-border overflow-hidden hover:shadow-glow hover:border-accent/50 transition-all duration-300 animate-fade-in">
              <CardContent className="p-0">
                <div className="bg-gradient-primary p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
                  <div className="relative z-10 space-y-4">
                    <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center backdrop-blur-sm">
                      <Code size={32} className="text-accent" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">Civil Care AI</h3>
                    <p className="text-sm md:text-base text-muted-foreground">Smart Civil Management Platform</p>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  <p className="text-sm md:text-base text-muted-foreground line-clamp-3">
                    AI-powered civil management platform for municipal operations, real-time monitoring, and data-driven insights.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "AI/ML", "TypeScript"].map((tech) => (
                      <span key={tech} className="px-2 py-1 rounded-full bg-secondary text-xs border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://civil-care-ai.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button variant="hero" className="w-full group-hover:shadow-glow">
                      View Project
                      <ExternalLink className="ml-2" size={16} />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Riva Luxury */}
            <Card className="group bg-card border-border overflow-hidden hover:shadow-glow hover:border-accent/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-amber-900/40 to-amber-950/60 p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
                  <div className="relative z-10 space-y-4">
                    <div className="w-16 h-16 rounded-xl bg-amber-500/20 flex items-center justify-center backdrop-blur-sm">
                      <Code size={32} className="text-amber-400" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">Riva Luxury</h3>
                    <p className="text-sm md:text-base text-muted-foreground">Premium Luxury Experience</p>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  <p className="text-sm md:text-base text-muted-foreground line-clamp-3">
                    Elegant luxury brand showcase featuring sophisticated design and seamless user experience for high-end clientele.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Tailwind", "Animation"].map((tech) => (
                      <span key={tech} className="px-2 py-1 rounded-full bg-secondary text-xs border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://riva-luxury.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button variant="hero" className="w-full group-hover:shadow-glow">
                      View Project
                      <ExternalLink className="ml-2" size={16} />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Vini Cucina */}
            <Card className="group bg-card border-border overflow-hidden hover:shadow-glow hover:border-accent/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-red-900/40 to-orange-950/60 p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
                  <div className="relative z-10 space-y-4">
                    <div className="w-16 h-16 rounded-xl bg-orange-500/20 flex items-center justify-center backdrop-blur-sm">
                      <Code size={32} className="text-orange-400" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">Vini Cucina</h3>
                    <p className="text-sm md:text-base text-muted-foreground">Roman Elegance Restaurant</p>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  <p className="text-sm md:text-base text-muted-foreground line-clamp-3">
                    Authentic Italian dining experience with elegant Roman-inspired design and modern web functionality.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Design", "UX/UI"].map((tech) => (
                      <span key={tech} className="px-2 py-1 rounded-full bg-secondary text-xs border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://vini-cucina-roman-elegance-26168.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button variant="hero" className="w-full group-hover:shadow-glow">
                      View Project
                      <ExternalLink className="ml-2" size={16} />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Antichi Sapori */}
            <Card className="group bg-card border-border overflow-hidden hover:shadow-glow hover:border-accent/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-green-900/40 to-emerald-950/60 p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
                  <div className="relative z-10 space-y-4">
                    <div className="w-16 h-16 rounded-xl bg-emerald-500/20 flex items-center justify-center backdrop-blur-sm">
                      <Code size={32} className="text-emerald-400" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">Antichi Sapori</h3>
                    <p className="text-sm md:text-base text-muted-foreground">Traditional Italian Cuisine</p>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  <p className="text-sm md:text-base text-muted-foreground line-clamp-3">
                    Classic Italian restaurant website celebrating traditional flavors with modern web design excellence.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Responsive", "Modern"].map((tech) => (
                      <span key={tech} className="px-2 py-1 rounded-full bg-secondary text-xs border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://antichi-sapori.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button variant="hero" className="w-full group-hover:shadow-glow">
                      View Project
                      <ExternalLink className="ml-2" size={16} />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto max-w-4xl text-center space-y-6 md:space-y-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Project?</h2>
          <p className="text-base md:text-xl text-muted-foreground px-4">
            Let's create something amazing together. We deliver excellence across all industries.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="shadow-glow">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
