import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import TechStackSlider from "@/components/TechStackSlider";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive, and SEO-friendly websites that convert visitors into customers.",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "High-performing mobile & web applications built with cutting-edge technology.",
    },
    {
      icon: TrendingUp,
      title: "Digital Strategy & Growth",
      description: "Smart strategies to scale your brand and achieve real growth online.",
    },
  ];

  const testimonials = [
    {
      text: "CodeStack transformed our online presence. Their expertise in web development is unmatched!",
      author: "Sarah Johnson",
      role: "CEO, TechStart",
    },
    {
      text: "Professional, innovative, and delivered beyond expectations. Highly recommend!",
      author: "Michael Chen",
      role: "Founder, GrowthLabs",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Global 8D Background Effects - Ultra Realistic */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Massive gradient orbs with realistic blur */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-radial from-primary/8 via-primary/4 to-transparent 
          rounded-full blur-[150px] animate-float-slow"
          style={{ filter: 'blur(150px) contrast(1.2)' }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-accent/8 via-accent/4 to-transparent 
          rounded-full blur-[130px] animate-float-medium"
          style={{ filter: 'blur(130px) contrast(1.2)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] 
          bg-gradient-radial from-primary/5 via-accent/3 to-transparent animate-float-fast"
          style={{ filter: 'blur(140px) contrast(1.3)' }} />
        
        {/* Layered atmospheric effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_120%,rgba(255,184,0,0.1),rgba(255,255,255,0))]" />
      </div>

      {/* Hero Section - 8D Ultra Realistic */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden" style={{ perspective: "3000px" }}>
        {/* Multi-layer Ultra Realistic Background */}
        <div className="absolute inset-0 bg-gradient-hero opacity-95" 
          style={{ mixBlendMode: 'normal' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
          from-primary/25 via-primary/10 to-transparent"
          style={{ filter: 'blur(60px)' }} />
        
        {/* Hyper-realistic 3D Grid with depth of field */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(hsl(var(--accent)) 1.5px, transparent 1.5px),
              linear-gradient(90deg, hsl(var(--accent)) 1.5px, transparent 1.5px)
            `,
            backgroundSize: '60px 60px',
            transform: 'perspective(2000px) rotateX(65deg) scale(2.5)',
            transformOrigin: 'center bottom',
            animation: 'pulse 5s ease-in-out infinite',
            filter: 'blur(0.5px)',
            maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 60%, transparent)'
          }} />
          {/* Grid horizon glow */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-accent/20 to-transparent blur-xl" />
        </div>
        
        {/* 8D Floating Elements with Ultra Realistic Depth & Lighting */}
        <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
          {/* Far Background Layer - Atmospheric */}
          <div className="absolute top-[15%] left-[8%] w-40 h-40 rounded-3xl animate-float-slow
            bg-gradient-to-br from-primary/20 via-primary/10 to-transparent
            shadow-[0_30px_80px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]" 
            style={{ 
              transform: "translateZ(-200px) rotateX(45deg) rotateY(45deg)",
              filter: 'blur(3px) brightness(0.8)',
              backdropFilter: 'blur(20px)'
            }} />
          
          <div className="absolute top-[35%] right-[12%] w-32 h-32 rounded-3xl animate-float-medium
            bg-gradient-to-tl from-accent/20 via-accent/10 to-transparent
            shadow-[0_25px_70px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.1)]" 
            style={{ 
              transform: "translateZ(-180px) rotateX(-30deg) rotateY(30deg)", 
              animationDelay: "1.2s",
              filter: 'blur(2.5px) brightness(0.85)',
              backdropFilter: 'blur(18px)'
            }} />
          
          {/* Mid Layer - More Defined */}
          <div className="absolute bottom-[25%] left-[18%] w-28 h-28 rounded-2xl animate-float-fast
            bg-gradient-to-br from-accent/30 via-accent/15 to-primary/10
            shadow-[0_20px_60px_rgba(0,0,0,0.35),0_0_30px_rgba(255,184,0,0.2),inset_0_2px_0_rgba(255,255,255,0.15)]" 
            style={{ 
              transform: "translateZ(-100px) rotateX(50deg) rotateY(-40deg)", 
              animationDelay: "2.3s",
              filter: 'blur(1.5px) brightness(0.95)',
              backdropFilter: 'blur(12px)'
            }} />
          
          <div className="absolute top-[55%] right-[15%] w-36 h-36 rounded-2xl animate-float-slow
            bg-gradient-to-tr from-primary/25 via-primary/15 to-accent/10
            shadow-[0_22px_65px_rgba(0,0,0,0.3),0_0_25px_rgba(120,119,198,0.2),inset_0_2px_0_rgba(255,255,255,0.15)]" 
            style={{ 
              transform: "translateZ(-120px) rotateX(-40deg) rotateY(-25deg)", 
              animationDelay: "0.7s",
              filter: 'blur(1.8px) brightness(0.9)',
              backdropFilter: 'blur(15px)'
            }} />
          
          {/* Near Foreground - Crystal Clear & Detailed */}
          <div className="absolute top-[28%] right-[6%] w-52 h-52 rounded-[2rem] animate-float-medium
            bg-gradient-to-br from-primary/35 via-primary/20 to-accent/25
            shadow-[0_35px_90px_rgba(0,0,0,0.5),0_0_40px_rgba(120,119,198,0.3),inset_0_4px_6px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.2)]
            border border-white/10" 
            style={{ 
              transform: "translateZ(60px) rotateX(20deg) rotateY(-12deg)",
              animationDelay: "1.8s",
              backdropFilter: 'blur(8px) saturate(150%)',
              boxShadow: `
                0 35px 90px rgba(0,0,0,0.5),
                0 0 40px rgba(120,119,198,0.3),
                inset 0 4px 6px rgba(255,255,255,0.2),
                inset 0 -2px 4px rgba(0,0,0,0.2)
              `
            }}>
            {/* Inner glow reflection */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/20 via-transparent to-transparent" />
          </div>
          
          <div className="absolute bottom-[28%] left-[10%] w-48 h-48 rounded-[2rem] animate-float-fast
            bg-gradient-to-tr from-accent/35 via-accent/20 to-primary/25
            shadow-[0_32px_85px_rgba(0,0,0,0.48),0_0_38px_rgba(255,184,0,0.3),inset_0_4px_6px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.2)]
            border border-white/10" 
            style={{ 
              transform: "translateZ(80px) rotateX(-18deg) rotateY(18deg)",
              animationDelay: "1.1s",
              backdropFilter: 'blur(8px) saturate(150%)',
              boxShadow: `
                0 32px 85px rgba(0,0,0,0.48),
                0 0 38px rgba(255,184,0,0.3),
                inset 0 4px 6px rgba(255,255,255,0.2),
                inset 0 -2px 4px rgba(0,0,0,0.2)
              `
            }}>
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/20 via-transparent to-transparent" />
          </div>
          
          {/* Ultra Realistic Particle System */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float-slow"
              style={{
                width: `${4 + Math.random() * 6}px`,
                height: `${4 + Math.random() * 6}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${Math.random() > 0.5 ? 'hsla(var(--accent), 0.6)' : 'hsla(var(--primary), 0.5)'} 0%, transparent 70%)`,
                transform: `translateZ(${Math.random() * 100 - 50}px)`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${5 + Math.random() * 6}s`,
                boxShadow: `0 0 ${10 + Math.random() * 20}px ${Math.random() > 0.5 ? 'hsla(var(--accent), 0.8)' : 'hsla(var(--primary), 0.7)'}`,
                filter: `blur(${Math.random() * 2}px)`,
                opacity: 0.4 + Math.random() * 0.4
              }}
            />
          ))}
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            {/* Mobile Headline */}
            <h1 className="block md:hidden text-4xl font-bold leading-tight"
              style={{ 
                textShadow: '0 0 40px hsla(var(--primary), 0.5), 0 0 20px hsla(var(--accent), 0.3)'
              }}>
              Build Digital Solutions{" "}
              <span className="text-transparent bg-clip-text bg-gradient-accent 
                drop-shadow-[0_0_30px_hsla(var(--accent),0.5)]">
                That Grow Brands
              </span>
            </h1>
            
            {/* Desktop Headline */}
            <h1 className="hidden md:block text-5xl md:text-7xl font-bold leading-tight"
              style={{ 
                textShadow: '0 0 40px hsla(var(--primary), 0.5), 0 0 20px hsla(var(--accent), 0.3)'
              }}>
              We Build Websites, Apps & Digital Solutions{" "}
              <span className="text-transparent bg-clip-text bg-gradient-accent
                drop-shadow-[0_0_30px_hsla(var(--accent),0.5)]">
                That Grow Brands
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto
              drop-shadow-lg">
              CodeStack is a Texas-based software house delivering innovative digital solutions to clients worldwide. 
              Where Business meets Code.
            </p>

            {/* 4D Code Cards with Enhanced Effects */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto my-12" 
              style={{ perspective: "1000px" }}>
              {[
                { icon: Code, label: "Web Dev", delay: "0s", rotation: "rotateY(5deg)" },
                { icon: Smartphone, label: "Apps", delay: "0.1s", rotation: "rotateY(-5deg)" },
                { icon: TrendingUp, label: "Growth", delay: "0.2s", rotation: "rotateY(5deg)" },
                { icon: CheckCircle2, label: "Quality", delay: "0.3s", rotation: "rotateY(-5deg)" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-card/60 backdrop-blur-md border border-border/50 rounded-lg p-4 
                    group cursor-pointer transform-gpu transition-all duration-500
                    hover:scale-110 hover:border-accent/50 hover:bg-card/80
                    hover:shadow-[0_10px_40px_rgba(0,0,0,0.3),0_0_20px_hsla(var(--accent),0.3)]"
                  style={{ 
                    transform: item.rotation,
                    animationDelay: item.delay,
                    transformStyle: "preserve-3d"
                  }}>
                  <item.icon size={24} className="text-accent mx-auto mb-2 
                    transition-all duration-500 group-hover:scale-125 group-hover:rotate-12
                    drop-shadow-[0_0_10px_hsla(var(--accent),0.6)]" />
                  <p className="text-xs font-semibold">{item.label}</p>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-accent/0 
                    rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group relative overflow-hidden
                  transform-gpu transition-all duration-500 hover:scale-105
                  hover:shadow-[0_10px_40px_hsla(var(--accent),0.4)]"
                  style={{ transformStyle: "preserve-3d" }}>
                  <span className="relative z-10">Let's Build Together</span>
                  <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full 
                    transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent
                    skew-x-12" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline-light" size="lg" className="transform-gpu transition-all duration-500 
                  hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Slider - 3D Horizontal Scrolling */}
      <TechStackSlider />

      {/* Services Section - 4D Enhanced */}
      <section className="relative py-20 px-4 bg-secondary/50 overflow-hidden">
        {/* 4D Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[15%] w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-float-slow" />
          <div className="absolute bottom-10 right-[10%] w-80 h-80 bg-accent/5 rounded-full blur-[90px] animate-float-medium" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4"
              style={{ textShadow: '0 0 30px hsla(var(--primary), 0.3)' }}>
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We offer comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ perspective: "1500px" }}>
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="bg-card/80 backdrop-blur-sm border-border group relative overflow-hidden
                  transform-gpu transition-all duration-700 hover:border-primary/50
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_30px_hsla(var(--primary),0.2)]
                  hover:-translate-y-4 hover:scale-105 animate-fade-in-up
                  cursor-pointer"
                style={{ 
                  animationDelay: `${idx * 0.2}s`,
                  transformStyle: "preserve-3d"
                }}>
                {/* 4D Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-accent/5 
                  opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-lg" />
                
                {/* Animated Border Shine */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-accent/30 to-transparent
                    -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms]" />
                </div>

                <CardContent className="p-8 space-y-4 relative z-10">
                  {/* 4D Icon Container */}
                  <div className="relative w-20 h-20 mb-4">
                    <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-80 blur-md
                      group-hover:blur-lg group-hover:opacity-100 transition-all duration-500" />
                    <div className="relative w-full h-full rounded-2xl bg-gradient-primary 
                      flex items-center justify-center
                      transform-gpu transition-all duration-700
                      group-hover:rotate-12 group-hover:scale-110
                      shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                      style={{ transform: "translateZ(20px)" }}>
                      <service.icon size={36} className="text-accent drop-shadow-lg
                        transition-all duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold transition-all duration-500 
                    group-hover:text-accent group-hover:translate-x-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground transition-all duration-500
                    group-hover:text-foreground/90">
                    {service.description}
                  </p>
                  
                  {/* Hover Arrow */}
                  <div className="flex items-center text-accent opacity-0 -translate-x-4
                    group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline-light" size="lg" className="transform-gpu transition-all duration-500
                hover:scale-110 hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Portfolio Section - 3D Enhanced */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-[5%] w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-10 left-[10%] w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-medium" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Project</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Showcasing our expertise in building innovative solutions
            </p>
          </div>

          {/* 3D Card Container with Perspective */}
          <div className="max-w-5xl mx-auto" style={{ perspective: "2000px" }}>
            <Card className="bg-card border-border overflow-hidden group animate-fade-in-up relative
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_40px_hsla(225,70%,55%,0.2)]
              transition-all duration-700 ease-out
              md:hover:scale-[1.02]
              transform-gpu">
              
              {/* 3D Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-accent/0 
                opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0 relative">
                  {/* Left Panel - 3D Enhanced */}
                  <div className="relative bg-gradient-primary p-8 md:p-12 flex items-center justify-center overflow-hidden
                    transform-gpu transition-all duration-700
                    md:group-hover:translate-x-[-8px] md:group-hover:scale-[1.05]">
                    
                    {/* Animated Background Grid */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px),
                                         linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
                        backgroundSize: '30px 30px',
                        transform: 'perspective(500px) rotateX(60deg) scale(2)',
                        transformOrigin: 'center center'
                      }} />
                    </div>

                    <div className="text-center space-y-6 relative z-10">
                      {/* 3D Floating Icon */}
                      <div className="relative mx-auto w-24 h-24 md:w-28 md:h-28">
                        <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl animate-glow-pulse" />
                        <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-accent/30 to-accent/10 
                          flex items-center justify-center border border-accent/30
                          transform-gpu transition-all duration-700
                          group-hover:rotate-12 group-hover:scale-110
                          shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                          <Code size={48} className="text-accent drop-shadow-lg" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground 
                          transform-gpu transition-all duration-500
                          group-hover:scale-105">
                          Civil Care AI
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                          Smart Civil Management Platform
                        </p>
                      </div>

                      {/* 3D Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 justify-center pt-4">
                        {['AI', 'Cloud', 'Real-time'].map((tech, idx) => (
                          <span key={tech} 
                            className="px-3 py-1 text-xs font-semibold bg-accent/20 text-accent 
                              rounded-full border border-accent/30 backdrop-blur-sm
                              transform-gpu transition-all duration-500 hover:scale-110 hover:bg-accent/30"
                            style={{ 
                              animationDelay: `${idx * 0.1}s`,
                              transform: 'translateZ(20px)'
                            }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Panel - Enhanced Content */}
                  <div className="p-8 md:p-12 space-y-6 bg-card/95 backdrop-blur-sm
                    transform-gpu transition-all duration-700
                    md:group-hover:translate-x-[8px]">
                    
                    <div className="space-y-4">
                      <h4 className="text-2xl md:text-3xl font-bold text-foreground 
                        transform-gpu transition-all duration-500
                        group-hover:translate-x-2">
                        A Next-Gen AI Solution
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        A smart civil management platform powered by AI, built by CodeStack to streamline 
                        operations and enhance efficiency with cutting-edge technology.
                      </p>
                    </div>

                    {/* 3D Feature List */}
                    <ul className="space-y-4">
                      {[
                        { icon: CheckCircle2, text: 'AI-Powered Analytics', delay: '0s' },
                        { icon: CheckCircle2, text: 'Real-Time Monitoring', delay: '0.1s' },
                        { icon: CheckCircle2, text: 'Scalable Architecture', delay: '0.2s' }
                      ].map((item, idx) => (
                        <li key={idx} 
                          className="flex items-center space-x-3 group/item
                            transform-gpu transition-all duration-500
                            hover:translate-x-2"
                          style={{ animationDelay: item.delay }}>
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-primary 
                            flex items-center justify-center
                            transform-gpu transition-all duration-500
                            group-hover/item:rotate-12 group-hover/item:scale-110
                            shadow-lg">
                            <item.icon size={18} className="text-accent" />
                          </div>
                          <span className="text-sm md:text-base font-medium">{item.text}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Buttons with 3D Effect */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <a
                        href="https://civil-care-ai.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-initial">
                        <Button variant="hero" className="w-full sm:w-auto group/btn
                          transform-gpu transition-all duration-300
                          hover:scale-105 hover:shadow-[0_10px_30px_hsla(225,70%,55%,0.4)]">
                          Visit Project
                          <ArrowRight className="ml-2 transition-transform duration-300 
                            group-hover/btn:translate-x-1" size={18} />
                        </Button>
                      </a>
                      <Link to="/portfolio" className="flex-1 sm:flex-initial">
                        <Button variant="outline-light" className="w-full sm:w-auto
                          transform-gpu transition-all duration-300
                          hover:scale-105">
                          View More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section - 4D Enhanced */}
      <section className="relative py-20 px-4 bg-secondary/50 overflow-hidden">
        {/* 4D Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[20%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] animate-float-slow" />
          <div className="absolute bottom-20 left-[15%] w-[450px] h-[450px] bg-primary/5 rounded-full blur-[110px] animate-float-medium" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4"
              style={{ textShadow: '0 0 30px hsla(var(--primary), 0.3)' }}>
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Trusted by businesses worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" style={{ perspective: "1500px" }}>
            {testimonials.map((testimonial, idx) => (
              <Card
                key={idx}
                className="bg-card/80 backdrop-blur-sm border-border group relative overflow-hidden
                  transform-gpu transition-all duration-700 hover:border-primary/50
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_30px_hsla(var(--accent),0.2)]
                  hover:-translate-y-3 hover:scale-105 animate-fade-in-up
                  cursor-pointer"
                style={{ 
                  animationDelay: `${idx * 0.2}s`,
                  transformStyle: "preserve-3d"
                }}>
                {/* Animated Quote Mark */}
                <div className="absolute top-4 right-4 text-8xl text-accent/10 font-serif
                  transition-all duration-700 group-hover:text-accent/20 group-hover:scale-110">
                  "
                </div>
                
                {/* 4D Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/5 to-primary/5 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg" />

                <CardContent className="p-8 space-y-4 relative z-10">
                  <p className="text-lg italic text-muted-foreground leading-relaxed
                    transition-all duration-500 group-hover:text-foreground/90">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-4 pt-4">
                    {/* Avatar Placeholder with 4D Effect */}
                    <div className="relative w-12 h-12">
                      <div className="absolute inset-0 bg-gradient-primary rounded-full blur-md 
                        opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative w-full h-full bg-gradient-primary rounded-full 
                        flex items-center justify-center font-bold text-accent
                        shadow-[0_5px_20px_rgba(0,0,0,0.3)]
                        transform-gpu transition-all duration-500
                        group-hover:scale-110 group-hover:rotate-12">
                        {testimonial.author.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold transition-all duration-500
                        group-hover:text-accent">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - 4D Enhanced */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* 4D Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[800px] h-[800px] bg-gradient-radial from-primary/10 to-transparent 
            animate-float-slow" />
        </div>

        <div className="container mx-auto relative z-10">
          <Card className="bg-gradient-primary border-0 overflow-hidden animate-fade-in-up
            group relative transform-gpu transition-all duration-700
            hover:scale-[1.02] hover:shadow-[0_30px_80px_rgba(0,0,0,0.4),0_0_50px_hsla(var(--primary),0.3)]"
            style={{ transformStyle: "preserve-3d" }}>
            
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(hsl(var(--accent)) 2px, transparent 2px),
                                 linear-gradient(90deg, hsl(var(--accent)) 2px, transparent 2px)`,
                backgroundSize: '40px 40px',
                animation: 'pulse 3s ease-in-out infinite'
              }} />
            </div>

            {/* 4D Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-accent/40 rounded-full animate-float-slow
                    shadow-[0_0_15px_hsla(var(--accent),0.6)]"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 3}s`
                  }}
                />
              ))}
            </div>

            <CardContent className="p-12 md:p-16 text-center space-y-6 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold transform-gpu transition-all duration-500
                group-hover:scale-105"
                style={{ textShadow: '0 0 40px hsla(var(--accent), 0.4)' }}>
                Ready to Grow Your Brand?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let's turn your vision into reality. Get in touch with our team today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="group/btn relative overflow-hidden
                    transform-gpu transition-all duration-500 hover:scale-110
                    hover:shadow-[0_15px_50px_hsla(var(--accent),0.5)]">
                    <span className="relative z-10">Start Your Project</span>
                    <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full 
                      transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent
                      skew-x-12" />
                  </Button>
                </Link>
                <a href="mailto:codestack11@gmail.com">
                  <Button variant="outline-light" size="lg" className="transform-gpu transition-all duration-500
                    hover:scale-110 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                    Email Us
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
