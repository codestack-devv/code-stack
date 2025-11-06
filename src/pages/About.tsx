import { Target, Users, Zap, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our priority. We build solutions that drive real results.",
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Fast, reliable delivery without compromising on quality.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Based in Texas, serving clients across the world.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Global 8D Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[650px] h-[650px] bg-gradient-radial from-primary/8 via-primary/4 to-transparent 
          rounded-full blur-[140px] animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-accent/8 via-accent/4 to-transparent 
          rounded-full blur-[130px] animate-float-medium" />
      </div>

      {/* Hero Section - 3D Enhanced */}
      <section className="relative py-20 px-4 overflow-hidden" style={{ perspective: "2000px" }}>
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        
        {/* 3D Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(1500px) rotateX(60deg) scale(2)',
            transformOrigin: 'center top',
            maskImage: 'linear-gradient(to bottom, black 30%, transparent)'
          }} />
        </div>

        {/* Floating 3D Elements */}
        <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
          <div className="absolute top-[25%] right-[12%] w-36 h-36 rounded-3xl animate-float-slow
            bg-gradient-to-br from-accent/25 via-accent/10 to-transparent
            shadow-[0_25px_70px_rgba(0,0,0,0.4)]" 
            style={{ transform: "translateZ(-90px) rotateY(30deg)" }} />
          
          <div className="absolute top-[50%] left-[8%] w-32 h-32 rounded-3xl animate-float-medium
            bg-gradient-to-tl from-primary/25 via-primary/10 to-transparent
            shadow-[0_30px_80px_rgba(0,0,0,0.4)]" 
            style={{ transform: "translateZ(-70px) rotateX(40deg)", animationDelay: "1.5s" }} />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold"
              style={{ textShadow: '0 0 40px hsla(var(--primary), 0.5)' }}>
              About <span className="text-transparent bg-clip-text bg-gradient-accent
                drop-shadow-[0_0_30px_hsla(var(--accent),0.5)]">CodeStack</span>
            </h1>
            <p className="text-xl text-muted-foreground drop-shadow-lg">
              Where Business meets Code
            </p>
          </div>
        </div>
      </section>

      {/* Story Section - 3D Enhanced */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-center mb-12"
              style={{ textShadow: '0 0 30px hsla(var(--accent), 0.3)' }}>
              Our Story
            </h2>
            
            <Card className="bg-card/80 backdrop-blur-sm border-border group relative overflow-hidden
              transform-gpu transition-all duration-700 hover:border-accent/50
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_30px_hsla(var(--accent),0.2)]
              hover:scale-105"
              style={{ transformStyle: "preserve-3d" }}>
              {/* 3D Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-primary/5 
                opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-lg" />
              
              <CardContent className="p-8 space-y-6 relative z-10">
                <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/90 
                  transition-colors duration-500">
                  At <span className="text-accent font-semibold drop-shadow-[0_0_10px_hsla(var(--accent),0.5)]">
                    CodeStack
                  </span>, we turn ideas into reality through smart code and creative design. We're a Texas-based 
                  software house with a global vision, dedicated to helping businesses of all sizes thrive in the digital world.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/90 
                  transition-colors duration-500">
                  Our expertise spans full-stack development, digital branding, and scalable application solutions. 
                  Whether you're a startup looking to launch your first product or an established business ready to 
                  scale, we have the skills and experience to bring your vision to life.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/90 
                  transition-colors duration-500">
                  We believe in the power of technology to transform businesses. That's why we combine technical 
                  excellence with creative thinking to deliver solutions that don't just work—they excel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section - 3D Enhanced */}
      <section className="py-20 px-4 bg-secondary/50 relative overflow-hidden">
        {/* 3D Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[15%] w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-float-slow" />
          <div className="absolute bottom-10 right-[10%] w-80 h-80 bg-accent/5 rounded-full blur-[90px] animate-float-medium" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4"
              style={{ textShadow: '0 0 30px hsla(var(--primary), 0.3)' }}>
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ perspective: "1500px" }}>
            {values.map((value, idx) => (
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
                
                <CardContent className="p-8 text-center space-y-4 relative z-10">
                  <div className="relative w-16 h-16 mx-auto">
                    <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-70 blur-md
                      group-hover:blur-lg group-hover:opacity-100 transition-all duration-500" />
                    <div className="relative w-full h-full rounded-2xl bg-gradient-primary 
                      flex items-center justify-center transform-gpu transition-all duration-700
                      group-hover:rotate-12 group-hover:scale-110"
                      style={{ transform: "translateZ(20px)" }}>
                      <value.icon size={32} className="text-accent drop-shadow-lg" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-500"
                    style={{ transform: "translateZ(15px)" }}>
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm group-hover:text-foreground/90 transition-colors duration-500"
                    style={{ transform: "translateZ(10px)" }}>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section - 3D Enhanced */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4"
              style={{ textShadow: '0 0 30px hsla(var(--accent), 0.3)' }}>
              Our Expertise
            </h2>
            <p className="text-muted-foreground">
              Comprehensive technical skills to build world-class digital products
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8" style={{ perspective: "1500px" }}>
            <Card className="bg-card/80 backdrop-blur-sm border-border animate-fade-in-up group
              transform-gpu transition-all duration-700 hover:border-accent/50
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_30px_hsla(var(--accent),0.2)]
              hover:-translate-y-4 hover:scale-105 cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}>
              {/* 3D Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-primary/5 
                opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-lg" />
              
              <CardContent className="p-8 space-y-4 relative z-10">
                <h3 className="text-xl font-bold text-accent drop-shadow-[0_0_15px_hsla(var(--accent),0.5)]
                  group-hover:scale-110 transition-transform duration-500"
                  style={{ transform: "translateZ(20px)" }}>
                  Frontend
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground group-hover:text-foreground/90 
                  transition-colors duration-500">
                  <li>• React & Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Responsive Design</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border animate-fade-in-up group
              transform-gpu transition-all duration-700 hover:border-accent/50
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_30px_hsla(var(--accent),0.2)]
              hover:-translate-y-4 hover:scale-105 cursor-pointer"
              style={{ animationDelay: "0.1s", transformStyle: "preserve-3d" }}>
              {/* 3D Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-primary/5 
                opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-lg" />
              
              <CardContent className="p-8 space-y-4 relative z-10">
                <h3 className="text-xl font-bold text-accent drop-shadow-[0_0_15px_hsla(var(--accent),0.5)]
                  group-hover:scale-110 transition-transform duration-500"
                  style={{ transform: "translateZ(20px)" }}>
                  Backend
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground group-hover:text-foreground/90 
                  transition-colors duration-500">
                  <li>• Node.js & Python</li>
                  <li>• RESTful APIs</li>
                  <li>• Database Design</li>
                  <li>• Cloud Integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border animate-fade-in-up group
              transform-gpu transition-all duration-700 hover:border-accent/50
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_30px_hsla(var(--accent),0.2)]
              hover:-translate-y-4 hover:scale-105 cursor-pointer"
              style={{ animationDelay: "0.2s", transformStyle: "preserve-3d" }}>
              {/* 3D Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-primary/5 
                opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-lg" />
              
              <CardContent className="p-8 space-y-4 relative z-10">
                <h3 className="text-xl font-bold text-accent drop-shadow-[0_0_15px_hsla(var(--accent),0.5)]
                  group-hover:scale-110 transition-transform duration-500"
                  style={{ transform: "translateZ(20px)" }}>
                  Mobile
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground group-hover:text-foreground/90 
                  transition-colors duration-500">
                  <li>• React Native</li>
                  <li>• iOS & Android</li>
                  <li>• Cross-Platform</li>
                  <li>• App Store Deploy</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
