import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";

interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string;
  image_url: string;
  author: string;
  created_at: string;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            CodeStack Blog
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and updates from our development team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array(6).fill(0).map((_, idx) => (
              <Card key={idx} className="bg-card/50 backdrop-blur-sm overflow-hidden">
                <Skeleton className="h-56 w-full" />
                <div className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mb-4" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </Card>
            ))
          ) : (
            blogs.map((blog, idx) => (
              <Card 
                key={blog.id} 
                className="group bg-card/80 backdrop-blur-sm border-border hover:border-accent/50 
                  overflow-hidden transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-xl
                  flex flex-col animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={blog.image_url || '/placeholder.svg'}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader className="pb-3">
                  <h2 className="text-xl font-bold line-clamp-2 group-hover:text-accent transition-colors">
                    {blog.title}
                  </h2>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-1 line-clamp-3">
                    {blog.description}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4">
                    <span className="text-accent font-semibold">{blog.author || 'Anonymous'}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{format(new Date(blog.created_at), 'MMM dd, yyyy')}</span>
                  </div>
                  <Link to={`/blog/${blog.slug}`} className="w-full">
                    <Button variant="hero" className="w-full group-hover:shadow-glow">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
