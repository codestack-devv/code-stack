import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

const TechStackSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const technologies = [
    { name: "React", color: "from-[#61DAFB]/30 to-[#61DAFB]/10", icon: "⚛️", shadow: "rgba(97, 218, 251, 0.5)" },
    { name: "Node.js", color: "from-[#339933]/30 to-[#339933]/10", icon: "🟢", shadow: "rgba(51, 153, 51, 0.5)" },
    { name: "JavaScript", color: "from-[#F7DF1E]/30 to-[#F7DF1E]/10", icon: "JS", shadow: "rgba(247, 223, 30, 0.5)" },
    { name: "TypeScript", color: "from-[#3178C6]/30 to-[#3178C6]/10", icon: "TS", shadow: "rgba(49, 120, 198, 0.5)" },
    { name: "Python", color: "from-[#3776AB]/30 to-[#3776AB]/10", icon: "🐍", shadow: "rgba(55, 118, 171, 0.5)" },
    { name: "SQL", color: "from-[#CC2927]/30 to-[#CC2927]/10", icon: "🗄️", shadow: "rgba(204, 41, 39, 0.5)" },
    { name: "MongoDB", color: "from-[#47A248]/30 to-[#47A248]/10", icon: "🍃", shadow: "rgba(71, 162, 72, 0.5)" },
    { name: "Docker", color: "from-[#2496ED]/30 to-[#2496ED]/10", icon: "🐳", shadow: "rgba(36, 150, 237, 0.5)" },
    { name: "AWS", color: "from-[#FF9900]/30 to-[#FF9900]/10", icon: "☁️", shadow: "rgba(255, 153, 0, 0.5)" },
    { name: "Git", color: "from-[#F05032]/30 to-[#F05032]/10", icon: "🔀", shadow: "rgba(240, 80, 50, 0.5)" },
    { name: "Next.js", color: "from-white/30 to-white/10", icon: "▲", shadow: "rgba(255, 255, 255, 0.5)" },
    { name: "Vue.js", color: "from-[#4FC08D]/30 to-[#4FC08D]/10", icon: "V", shadow: "rgba(79, 192, 141, 0.5)" },
  ];

  // Duplicate for seamless loop
  const duplicatedTechs = [...technologies, ...technologies, ...technologies];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    let animationId: number;
    let isUserInteracting = false;
    let interactionTimeout: NodeJS.Timeout;
    
    const animate = () => {
      if (!isUserInteracting) {
        scrollPosition += scrollSpeed;
        const maxScroll = slider.scrollWidth / 3;
        
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        slider.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    const handleInteractionStart = () => {
      isUserInteracting = true;
      clearTimeout(interactionTimeout);
    };

    const handleInteractionEnd = () => {
      clearTimeout(interactionTimeout);
      interactionTimeout = setTimeout(() => {
        isUserInteracting = false;
        scrollPosition = slider.scrollLeft;
      }, 1500);
    };

    slider.addEventListener('mousedown', handleInteractionStart);
    slider.addEventListener('touchstart', handleInteractionStart);
    slider.addEventListener('scroll', handleInteractionStart);
    slider.addEventListener('mouseup', handleInteractionEnd);
    slider.addEventListener('touchend', handleInteractionEnd);
    slider.addEventListener('mouseleave', handleInteractionEnd);

    animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(interactionTimeout);
      slider.removeEventListener('mousedown', handleInteractionStart);
      slider.removeEventListener('touchstart', handleInteractionStart);
      slider.removeEventListener('scroll', handleInteractionStart);
      slider.removeEventListener('mouseup', handleInteractionEnd);
      slider.removeEventListener('touchend', handleInteractionEnd);
      slider.removeEventListener('mouseleave', handleInteractionEnd);
    };
  }, []);

  return (
    <section className="relative py-20 overflow-hidden" style={{ perspective: "2000px" }}>
      {/* 8D Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-[20%] w-[500px] h-[500px] bg-gradient-radial from-primary/10 to-transparent 
          rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute top-1/2 right-[15%] w-[450px] h-[450px] bg-gradient-radial from-accent/10 to-transparent 
          rounded-full blur-[110px] animate-float-medium" />
      </div>

      {/* Floating 3D particles in background */}
      <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-24 h-24 rounded-2xl animate-float-slow opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, ${Math.random() > 0.5 ? 'hsl(var(--primary))' : 'hsl(var(--accent))'} 0%, transparent 100%)`,
              transform: `translateZ(${-100 - Math.random() * 100}px) rotateX(${Math.random() * 60}deg) rotateY(${Math.random() * 60}deg)`,
              animationDelay: `${Math.random() * 4}s`,
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4"
            style={{ 
              textShadow: '0 0 30px hsla(var(--accent), 0.4), 0 4px 20px rgba(0,0,0,0.3)',
              transform: 'translateZ(50px)',
              transformStyle: 'preserve-3d'
            }}>
            Technologies We Master
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cutting-edge tools and frameworks powering your digital success
          </p>
        </div>

        {/* 3D Slider Container */}
        <div className="relative" style={{ transformStyle: "preserve-3d" }}>
          {/* Gradient Overlays for infinite effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
          
          {/* 3D Slider Track */}
          <div 
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto py-8 pb-12 cursor-grab active:cursor-grabbing scroll-smooth 
              scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary/30 hover:scrollbar-thumb-primary/50"
            style={{
              WebkitOverflowScrolling: 'touch',
            }}
            onMouseDown={(e) => {
              const slider = e.currentTarget;
              const startX = e.pageX - slider.offsetLeft;
              const scrollLeft = slider.scrollLeft;
              
              const onMouseMove = (e: MouseEvent) => {
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 2;
                slider.scrollLeft = scrollLeft - walk;
              };
              
              const onMouseUp = () => {
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
              };
              
              document.addEventListener('mousemove', onMouseMove);
              document.addEventListener('mouseup', onMouseUp);
            }}
          >
            {duplicatedTechs.map((tech, idx) => (
              <Card
                key={`${tech.name}-${idx}`}
                className="relative flex-shrink-0 w-48 h-64 bg-card/60 backdrop-blur-xl border-border/50 
                  group transform-gpu transition-all duration-700 hover:scale-110 hover:z-20
                  hover:border-accent/50 cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateY(0deg) translateZ(0px)",
                  transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  card.style.transform = "rotateY(15deg) translateZ(60px) scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.transform = "rotateY(0deg) translateZ(0px) scale(1)";
                }}
              >
                {/* 3D Depth Shadow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent 
                  opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 rounded-lg -z-10"
                  style={{ transform: "translateZ(-20px)" }} />
                
                {/* Animated glow effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg"
                  style={{
                    background: `radial-gradient(circle at center, ${tech.shadow} 0%, transparent 70%)`,
                    filter: 'blur(40px)',
                    transform: 'translateZ(-10px)'
                  }}
                />
                
                {/* Inner glow border */}
                <div className="absolute inset-0 rounded-lg border border-white/0 group-hover:border-white/20 
                  transition-all duration-700 opacity-0 group-hover:opacity-20"
                  style={{ 
                    boxShadow: `inset 0 0 40px ${tech.shadow}, inset 0 0 80px ${tech.shadow}`,
                  }} />

                {/* Card Content */}
                <div className="relative h-full p-6 flex flex-col items-center justify-center space-y-4"
                  style={{ transform: "translateZ(30px)" }}>
                  {/* 3D Icon Container */}
                  <div className="relative">
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl blur-xl
                        group-hover:blur-2xl transition-all duration-700 opacity-60 group-hover:opacity-100`}
                      style={{ transform: "translateZ(-10px)" }}
                    />
                    <div 
                      className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${tech.color} 
                        flex items-center justify-center text-5xl
                        transform-gpu transition-all duration-700
                        group-hover:rotate-12 group-hover:scale-110
                        shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                        border border-white/10 group-hover:border-white/30`}
                      style={{ 
                        transform: "translateZ(20px)",
                        boxShadow: `0 20px 60px ${tech.shadow}`,
                      }}
                    >
                      {tech.icon}
                    </div>
                  </div>
                  
                  {/* Tech Name */}
                  <h3 className="text-xl font-bold text-center transition-all duration-500
                    group-hover:text-accent group-hover:scale-110"
                    style={{ 
                      transform: "translateZ(15px)",
                      textShadow: `0 0 20px ${tech.shadow}`
                    }}>
                    {tech.name}
                  </h3>
                  
                  {/* Animated shimmer line */}
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ transform: "translateZ(10px)" }} />
                </div>

                {/* Reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent 
                  rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Top shine */}
                <div className="absolute top-0 left-1/4 right-1/4 h-px bg-white/20 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-700" />
              </Card>
            ))}
          </div>

          {/* 3D Floor Reflection */}
          <div className="absolute -bottom-8 left-0 right-0 h-32 opacity-20"
            style={{
              background: 'linear-gradient(to bottom, transparent, hsl(var(--primary)) 50%, transparent)',
              filter: 'blur(40px)',
              transform: 'perspective(1000px) rotateX(60deg) translateZ(-50px)',
              transformOrigin: 'top center',
            }}
          />
        </div>

        {/* Scroll Hint */}
        <div className="text-center mt-4 animate-fade-in">
          <p className="text-sm text-muted-foreground">
            ← Scroll or drag to explore • Auto-scrolls when idle →
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStackSlider;
