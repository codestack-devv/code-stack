import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Facebook, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      });

      if (error) throw error;

      toast({
        title: "Thanks for reaching out!",
        description: "We'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Get in <span className="text-transparent bg-clip-text bg-gradient-accent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can help bring your vision to life
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Let's Build Together</h2>
                <p className="text-lg text-muted-foreground">
                  Whether you're starting a new project or need help with an existing one, 
                  we're here to help. Reach out to us through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <a
                      href="mailto:codestack11@gmail.com"
                      className="flex items-center space-x-4 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail size={24} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold">Email Us</p>
                        <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
                          codestack11@gmail.com
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <a
                      href="https://www.facebook.com/share/1FbwYbufEF/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Facebook size={24} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold">Follow Us</p>
                        <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
                          Connect on Facebook
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <MapPin size={24} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-sm text-muted-foreground">
                          Based in Texas, USA
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Serving clients worldwide
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4 pt-8">
                <h3 className="text-xl font-semibold">Business Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM CST</p>
                  <p>Saturday - Sunday: By Appointment</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-card border-border animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2" size={18} />
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    We typically respond within 24 hours
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
