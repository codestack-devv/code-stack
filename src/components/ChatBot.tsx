import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Message {
  text: string;
  isUser: boolean;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [showFAQs, setShowFAQs] = useState(true);

  const faqs = [
    {
      question: "What languages do you use?",
      answer: "We work with modern technologies including React, TypeScript, Node.js, Python, and more. We choose the best tech stack based on your project requirements to ensure optimal performance and scalability."
    },
    {
      question: "What is the payment structure?",
      answer: "We offer flexible payment plans: 50% upfront and 50% upon completion for most projects. For larger projects, we can arrange milestone-based payments. Custom payment structures are available based on your needs."
    },
    {
      question: "Can I have a free prototype for my business?",
      answer: "Yes! We offer free initial consultations and can provide basic wireframes or concept designs at no cost. This helps you visualize your project before committing. Contact us to discuss your ideas!"
    }
  ];

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Languages & Tech Stack
    if (lowerMessage.includes("language") || lowerMessage.includes("tech") || 
        lowerMessage.includes("technology") || lowerMessage.includes("stack")) {
      return "We work with modern technologies including React, TypeScript, Node.js, Python, and more. We choose the best tech stack based on your project requirements to ensure optimal performance and scalability.";
    }

    // Payment & Pricing
    if (lowerMessage.includes("payment") || lowerMessage.includes("price") || 
        lowerMessage.includes("cost") || lowerMessage.includes("pricing") || 
        lowerMessage.includes("budget")) {
      return "We offer flexible payment plans: 50% upfront and 50% upon completion for most projects. For larger projects, we can arrange milestone-based payments. Custom payment structures are available based on your needs.";
    }

    // Free Prototype
    if (lowerMessage.includes("free") || lowerMessage.includes("prototype") || 
        lowerMessage.includes("demo") || lowerMessage.includes("sample")) {
      return "Yes! We offer free initial consultations and can provide basic wireframes or concept designs at no cost. This helps you visualize your project before committing. Contact us at codestack11@gmail.com to discuss your ideas!";
    }

    // Services
    if (lowerMessage.includes("service") || lowerMessage.includes("what do you do") || 
        lowerMessage.includes("offer")) {
      return "We offer comprehensive digital solutions: Web Development (modern, responsive websites), App Development (mobile & web applications), and Digital Strategy & Growth (marketing and scaling). Check out our Services page for more details!";
    }

    // Portfolio
    if (lowerMessage.includes("portfolio") || lowerMessage.includes("work") || 
        lowerMessage.includes("project") || lowerMessage.includes("example")) {
      return "We've built amazing projects like Civil Care AI - a smart civil management platform. Visit our Portfolio page to see more of our work and case studies!";
    }

    // Timeline
    if (lowerMessage.includes("how long") || lowerMessage.includes("timeline") || 
        lowerMessage.includes("duration") || lowerMessage.includes("time")) {
      return "Project timelines vary based on complexity. A basic website takes 2-4 weeks, while complex applications can take 2-4 months. We'll provide a detailed timeline after understanding your requirements.";
    }

    // Location
    if (lowerMessage.includes("location") || lowerMessage.includes("where") || 
        lowerMessage.includes("based")) {
      return "We're based in Texas, USA, but we serve clients worldwide! We work remotely with teams and businesses globally, ensuring seamless collaboration regardless of your location.";
    }

    // Contact
    if (lowerMessage.includes("contact") || lowerMessage.includes("email") || 
        lowerMessage.includes("phone") || lowerMessage.includes("reach")) {
      return "You can reach us at codestack11@gmail.com or use our Contact page to send us a message. We typically respond within 24 hours!";
    }

    // Mobile Apps
    if (lowerMessage.includes("mobile") || lowerMessage.includes("ios") || 
        lowerMessage.includes("android")) {
      return "Yes, we build native and cross-platform mobile applications for both iOS and Android. We use modern frameworks to ensure your app performs beautifully on all devices.";
    }

    // E-commerce
    if (lowerMessage.includes("ecommerce") || lowerMessage.includes("e-commerce") || 
        lowerMessage.includes("shop") || lowerMessage.includes("store")) {
      return "We build custom e-commerce solutions with secure payment integration, inventory management, and beautiful user experiences. We can work with platforms like Shopify or create fully custom solutions.";
    }

    // Support & Maintenance
    if (lowerMessage.includes("support") || lowerMessage.includes("maintenance") || 
        lowerMessage.includes("update")) {
      return "We provide ongoing support and maintenance packages to keep your application running smoothly. This includes updates, bug fixes, and feature enhancements as your business grows.";
    }

    // Greetings
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || 
        lowerMessage.includes("hey")) {
      return "Hello! 👋 Welcome to CodeStack. How can I help you today? Feel free to ask about our services, pricing, or anything else!";
    }

    // Thank you
    if (lowerMessage.includes("thank") || lowerMessage.includes("thanks")) {
      return "You're very welcome! If you have any other questions, feel free to ask. We're here to help! 😊";
    }

    // Default response
    return "Thanks for your message! I'm here to help answer questions about CodeStack's services, pricing, technologies, and more. You can also reach our team directly at codestack11@gmail.com or visit our Contact page for personalized assistance!";
  };

  const handleFAQClick = (faq: typeof faqs[0]) => {
    setShowFAQs(false);
    setMessages([
      { text: faq.question, isUser: true },
      { text: faq.answer, isUser: false }
    ]);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    const botMessage = { text: getBotResponse(input), isUser: false };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
    setShowFAQs(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button with 8D Effect */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Toggle chat"
        style={{ perspective: "1000px" }}
      >
        <div className="relative">
          {/* Outer glow */}
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full 
            blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
          
          {/* Main button with ultra-realistic depth */}
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary via-primary to-primary/90
            shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(120,119,198,0.4),inset_0_4px_8px_rgba(255,255,255,0.2),inset_0_-2px_6px_rgba(0,0,0,0.3)]
            flex items-center justify-center
            transform-gpu transition-all duration-500
            group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.6),0_0_40px_rgba(120,119,198,0.6)]
            border border-white/20"
            style={{ 
              transformStyle: "preserve-3d",
              transform: "translateZ(20px)"
            }}>
            <MessageCircle className="text-white drop-shadow-lg transition-transform duration-500 
              group-hover:scale-110" size={28} />
            
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent 
              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </button>

      {/* Chat Window with 8D Glass Effect */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] z-50 
          bg-card/95 backdrop-blur-2xl border border-border/50
          shadow-[0_30px_90px_rgba(0,0,0,0.5),0_0_50px_rgba(120,119,198,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]
          animate-scale-in overflow-hidden"
          style={{ 
            height: "500px",
            backdropFilter: "blur(40px) saturate(150%)",
            boxShadow: `
              0 30px 90px rgba(0,0,0,0.5),
              0 0 50px rgba(120,119,198,0.2),
              inset 0 1px 0 rgba(255,255,255,0.1),
              inset 0 -1px 0 rgba(0,0,0,0.2)
            `
          }}>
          {/* Header with gradient */}
          <div className="bg-gradient-primary p-4 flex justify-between items-center
            shadow-[0_4px_20px_rgba(0,0,0,0.3)] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            <div className="relative z-10">
              <h3 className="font-bold text-lg text-foreground drop-shadow-lg">CodeStack Assistant</h3>
              <p className="text-xs text-muted-foreground">Ask us anything!</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-foreground/80 hover:text-foreground transition-colors relative z-10
                hover:rotate-90 transition-transform duration-300"
              aria-label="Close chat"
            >
              <X size={24} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-[340px] overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-background/50 to-background/80">
            {messages.length === 0 && showFAQs ? (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground text-center mb-4">
                  👋 Welcome! Here are some frequently asked questions:
                </p>
                {faqs.map((faq, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleFAQClick(faq)}
                    className="w-full text-left p-3 rounded-lg bg-card/80 backdrop-blur-sm 
                      border border-border/50 hover:border-accent/50
                      transition-all duration-300 hover:scale-[1.02]
                      hover:shadow-[0_8px_30px_rgba(0,0,0,0.2),0_0_15px_rgba(255,184,0,0.15)]
                      group"
                    style={{ animationDelay: `${idx * 0.1}s` }}>
                    <p className="text-sm font-medium group-hover:text-accent transition-colors">
                      {faq.question}
                    </p>
                  </button>
                ))}
              </div>
            ) : (
              messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.isUser ? "justify-end" : "justify-start"} animate-fade-in`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg backdrop-blur-sm ${
                      msg.isUser
                        ? "bg-gradient-to-br from-accent via-accent to-accent/90 text-accent-foreground shadow-[0_4px_20px_rgba(255,184,0,0.3)]"
                        : "bg-card/90 text-card-foreground border border-border/50 shadow-[0_4px_15px_rgba(0,0,0,0.2)]"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Input Area with glass effect */}
          <div className="p-4 border-t border-border/50 bg-card/80 backdrop-blur-xl
            shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-lg bg-background/80 backdrop-blur-sm 
                  border border-border/50 focus:border-accent/50 focus:outline-none 
                  focus:ring-2 focus:ring-accent/20 transition-all
                  text-sm placeholder:text-muted-foreground/50"
              />
              <Button
                onClick={handleSend}
                variant="hero"
                size="sm"
                className="transform-gpu transition-all duration-300 hover:scale-110
                  shadow-[0_4px_20px_rgba(255,184,0,0.3)] hover:shadow-[0_6px_30px_rgba(255,184,0,0.5)]"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default ChatBot;