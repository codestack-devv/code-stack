import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, TrendingUp, Palette, Database, Shield, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Modern, responsive, and SEO-friendly websites that convert visitors into customers.",
      features: [
        "Custom Web Design",
        "E-commerce Solutions",
        "CMS Integration",
        "Performance Optimization",
        "SEO Best Practices",
      ],
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "High-performing mobile and web applications built with cutting-edge technology.",
      features: [
        "iOS & Android Apps",
        "Cross-Platform Development",
        "Progressive Web Apps",
        "App Store Deployment",
        "Ongoing Maintenance",
      ],
    },
    {
      icon: TrendingUp,
      title: "Digital Growth Solutions",
      description: "Helping brands scale online through technology and smart digital strategies.",
      features: [
        "Growth Strategy",
        "Digital Marketing",
        "Social Media Management",
        "Analytics & Insights",
        "Conversion Optimization",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love to interact with.",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Design Systems",
        "Usability Testing",
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust, scalable backend systems that power your digital products.",
      features: [
        "API Development",
        "Database Architecture",
        "Cloud Infrastructure",
        "Server Management",
        "Security Implementation",
      ],
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Ongoing support to keep your digital products running smoothly.",
      features: [
        "24/7 Monitoring",
        "Regular Updates",
        "Bug Fixes",
        "Performance Tuning",
        "Technical Support",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Global 8D Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-primary/8 via-primary/4 to-transparent 
          rounded-full blur-[140px] animate-float-slow" />
        <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-gradient-radial from-accent/8 via-accent/4 to-transparent 
          rounded-full blur-[120px] animate-float-medium" />
      </div>

      {/* Hero Section - 3D Enhanced */}
      <section className="relative py-20 px-4 overflow-hidden" style={{ perspective: "2000px" }}>
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        
        {/* 3D Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(hsl(var(--accent)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(1500px) rotateX(60deg) scale(2)',
            transformOrigin: 'center top',
            maskImage: 'linear-gradient(to bottom, black 30%, transparent)'
          }} />
        </div>

        {/* Floating 3D Elements */}
        <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
          <div className="absolute top-[20%] left-[10%] w-32 h-32 rounded-3xl animate-float-slow
            bg-gradient-to-br from-primary/25 via-primary/10 to-transparent
            shadow-[0_25px_70px_rgba(0,0,0,0.4)]" 
            style={{ transform: "translateZ(-100px) rotateX(40deg)" }} />
          
          <div className="absolute top-[40%] right-[8%] w-40 h-40 rounded-3xl animate-float-medium
            bg-gradient-to-tl from-accent/25 via-accent/10 to-transparent
            shadow-[0_30px_80px_rgba(0,0,0,0.4)]" 
            style={{ transform: "translateZ(-80px) rotateY(30deg)", animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold"
              style={{ textShadow: '0 0 40px hsla(var(--primary), 0.5)' }}>
              Our <span className="text-transparent bg-clip-text bg-gradient-accent
                drop-shadow-[0_0_30px_hsla(var(--accent),0.5)]">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground drop-shadow-lg">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - 3D Enhanced */}
      <section className="py-20 px-4 relative z-10">
        {/* Background depth effects */}
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <div className="absolute top-20 left-[5%] w-80 h-80 bg-primary/5 rounded-full blur-[100px] animate-float-slow" />
          <div className="absolute bottom-20 right-[10%] w-72 h-72 bg-accent/5 rounded-full blur-[90px] animate-float-medium" />
        </div>

        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1500px" }}>
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="bg-card/80 backdrop-blur-sm border-border group hover:border-primary/50 
                  transition-all duration-700 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_30px_hsla(var(--primary),0.2)]
                  hover:-translate-y-4 hover:scale-105 animate-fade-in-up cursor-pointer"
                style={{ 
                  animationDelay: `${idx * 0.1}s`,
                  transformStyle: "preserve-3d"
                }}
              >
                {/* 3D Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-accent/5 
                  opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-lg" />
                
                <CardContent className="p-8 space-y-6 relative z-10">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-70 blur-md
                      group-hover:blur-lg group-hover:opacity-100 transition-all duration-500" />
                    <div className="relative w-full h-full rounded-2xl bg-gradient-primary 
                      flex items-center justify-center transform-gpu transition-all duration-700
                      group-hover:rotate-12 group-hover:scale-110"
                      style={{ transform: "translateZ(20px)" }}>
                      <service.icon size={32} className="text-accent drop-shadow-lg" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold group-hover:text-accent transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-500">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center space-x-2 text-sm text-muted-foreground
                        group-hover:text-foreground/90 transition-colors duration-500">
                        <ArrowRight size={16} className="text-accent flex-shrink-0 
                          group-hover:translate-x-1 transition-transform duration-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - 3D Enhanced */}
      <section className="py-20 px-4 bg-secondary/50 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[20%] w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-float-slow" />
          <div className="absolute bottom-10 right-[15%] w-80 h-80 bg-accent/5 rounded-full blur-[90px] animate-float-medium" />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4"
              style={{ textShadow: '0 0 30px hsla(var(--primary), 0.3)' }}>
              Our Process
            </h2>
            <p className="text-muted-foreground">
              A proven approach to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8" style={{ perspective: "1500px" }}>
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision and goals" },
              { step: "02", title: "Strategy", desc: "Planning the perfect solution" },
              { step: "03", title: "Development", desc: "Building with precision and care" },
              { step: "04", title: "Launch", desc: "Delivering and supporting success" },
            ].map((phase, idx) => (
              <div
                key={idx}
                className="text-center space-y-4 animate-fade-in-up group cursor-pointer
                  transform-gpu transition-all duration-700 hover:scale-110"
                style={{ 
                  animationDelay: `${idx * 0.1}s`,
                  transformStyle: "preserve-3d"
                }}
              >
                <div className="text-5xl font-bold text-accent opacity-50 
                  group-hover:opacity-100 transition-all duration-500 group-hover:scale-125
                  drop-shadow-[0_0_20px_hsla(var(--accent),0.5)]"
                  style={{ transform: "translateZ(30px)" }}>
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-500"
                  style={{ transform: "translateZ(20px)" }}>
                  {phase.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-500"
                  style={{ transform: "translateZ(10px)" }}>
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - 3D Enhanced */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-primary border-0 overflow-hidden animate-fade-in-up relative group"
            style={{ transformStyle: "preserve-3d" }}>
            {/* 3D Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/10 to-transparent 
              opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" 
              style={{ transform: "translateZ(-20px)" }} />
            
            <CardContent className="p-12 text-center space-y-6 relative z-10">
              <h2 className="text-4xl font-bold"
                style={{ 
                  textShadow: '0 0 30px hsla(var(--accent), 0.4)',
                  transform: "translateZ(30px)"
                }}>
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-muted-foreground"
                style={{ transform: "translateZ(20px)" }}>
                Let's discuss how we can help bring your vision to life
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="transform-gpu transition-all duration-500 
                  hover:scale-110 hover:shadow-[0_10px_40px_hsla(var(--accent),0.5)]"
                  style={{ transform: "translateZ(40px)" }}>
                  Get in Touch
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
