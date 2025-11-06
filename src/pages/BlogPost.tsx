import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { z } from "zod";

interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  image_url: string;
  author: string;
  created_at: string;
}

const newsletterSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
});

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  const fetchBlog = async () => {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) throw error;
      setBlog(data);
    } catch (error) {
      console.error("Error fetching blog:", error);
      toast({
        title: "Error",
        description: "Failed to load blog post",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validated = newsletterSchema.parse({ name, email });
      setSubscribing(true);

      const { error: dbError } = await supabase
        .from("newsletter_subscribers")
        .insert([{ name: validated.name, email: validated.email }]);

      if (dbError) {
        if (dbError.code === '23505') {
          toast({
            title: "Already Subscribed",
            description: "You're already subscribed to our newsletter!",
          });
          return;
        }
        throw dbError;
      }

      const { error: emailError } = await supabase.functions.invoke("send-newsletter-email", {
        body: { name: validated.name, email: validated.email },
      });

      if (emailError) console.error("Email error:", emailError);

      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter",
      });
      setName("");
      setEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to subscribe. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setSubscribing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-muted rounded w-1/4" />
            <div className="h-12 bg-muted rounded w-3/4" />
            <div className="h-96 bg-muted rounded" />
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded" />
              <div className="h-4 bg-muted rounded" />
              <div className="h-4 bg-muted rounded w-5/6" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/blog">
            <Button variant="hero">Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30 pt-24 pb-16">
      <article className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Blog</span>
        </Link>

        {/* Hero Section */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm md:text-base text-muted-foreground mb-8">
            <span className="text-accent font-semibold">{blog.author}</span>
            <span>•</span>
            <span>{format(new Date(blog.created_at), "MMMM dd, yyyy")}</span>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-glow">
            <img
              src={blog.image_url || '/placeholder.svg'}
              alt={blog.title}
              className="w-full h-[300px] md:h-[500px] object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-base md:prose-lg max-w-none mb-16 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 md:p-10 shadow-card">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-accent first-letter:mr-2 first-letter:float-left">
            {blog.description}
          </p>
          <div className="text-foreground/90 leading-relaxed whitespace-pre-wrap">
            {blog.content}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-card via-card/80 to-secondary/50 backdrop-blur-sm border-2 border-accent/30 rounded-xl p-6 md:p-10 shadow-glow animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            Stay Ahead with CodeStack — Subscribe to Our Newsletter
          </h2>
          <p className="text-muted-foreground mb-6 text-sm md:text-base">
            Get the latest insights, tutorials, and updates delivered straight to your inbox.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <Button type="submit" variant="hero" disabled={subscribing} className="w-full md:w-auto">
              {subscribing ? "Subscribing..." : "Subscribe Now"}
            </Button>
          </form>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
