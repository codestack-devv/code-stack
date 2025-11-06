import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, Plus, Pencil, Trash2, Sparkles } from "lucide-react";
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

const blogSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(200),
  description: z.string().trim().min(1, "Description is required").max(500),
  content: z.string().trim().min(1, "Content is required").max(10000),
  image_url: z.string().url("Invalid image URL"),
});

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [generating, setGenerating] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    image_url: "",
  });

  useEffect(() => {
    checkAuth();
    fetchBlogs();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/admin");
      return;
    }

    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .maybeSingle();

    if (!roles) {
      navigate("/admin");
    }
  };

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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({ title: "Logged out successfully" });
    navigate("/admin");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validated = blogSchema.parse(formData);
      const slug = validated.title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
      
      const blogData = {
        title: validated.title,
        description: validated.description,
        content: validated.content,
        image_url: validated.image_url,
        slug
      };

      if (editingBlog) {
        const { error } = await supabase
          .from("blogs")
          .update(blogData)
          .eq("id", editingBlog.id);

        if (error) throw error;
        toast({ title: "Blog updated successfully" });
      } else {
        const { error } = await supabase
          .from("blogs")
          .insert([blogData]);

        if (error) throw error;
        toast({ title: "Blog created successfully" });
      }

      setIsDialogOpen(false);
      resetForm();
      fetchBlogs();
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
          description: "Failed to save blog",
          variant: "destructive",
        });
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      const { error } = await supabase.from("blogs").delete().eq("id", id);
      if (error) throw error;
      toast({ title: "Blog deleted successfully" });
      fetchBlogs();
    } catch (error) {
      toast({ title: "Error", description: "Failed to delete blog", variant: "destructive" });
    }
  };

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      description: blog.description,
      content: blog.content,
      image_url: blog.image_url,
    });
    setIsDialogOpen(true);
  };

  const resetForm = () => {
    setEditingBlog(null);
    setFormData({
      title: "",
      description: "",
      content: "",
      image_url: "",
    });
  };

  const handleGenerateBlog = async () => {
    setGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke("generate-blog");
      
      if (error) throw error;
      
      toast({ title: "AI Blog generated successfully!" });
      fetchBlogs();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate blog. Please try again.",
        variant: "destructive",
      });
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <Button onClick={handleLogout} variant="outline" className="gap-2">
            <LogOut size={18} />
            Logout
          </Button>
        </div>

        <Tabs defaultValue="blogs" className="w-full">
          <TabsList>
            <TabsTrigger value="blogs">Manage Blogs</TabsTrigger>
          </TabsList>

          <TabsContent value="blogs" className="space-y-4">
            <div className="flex gap-4">
              <Dialog open={isDialogOpen} onOpenChange={(open) => {
                setIsDialogOpen(open);
                if (!open) resetForm();
              }}>
                <DialogTrigger asChild>
                  <Button variant="hero" className="gap-2">
                    <Plus size={18} />
                    Add New Blog
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{editingBlog ? "Edit Blog" : "Create New Blog"}</DialogTitle>
                    <DialogDescription>
                      {editingBlog ? "Update the blog post details" : "Fill in the details to create a new blog post"}
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      placeholder="Blog Title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                    <Input
                      placeholder="Image URL"
                      value={formData.image_url}
                      onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                      required
                    />
                    <Textarea
                      placeholder="Short Description (2-3 lines)"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                      rows={3}
                    />
                    <Textarea
                      placeholder="Full Blog Content (100-150 words)"
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      required
                      rows={8}
                    />
                    <Button type="submit" variant="hero" className="w-full">
                      {editingBlog ? "Update Blog" : "Create Blog"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              <Button
                onClick={handleGenerateBlog}
                disabled={generating}
                variant="outline"
                className="gap-2 border-accent/50 hover:bg-accent/10"
              >
                <Sparkles size={18} className="text-accent" />
                {generating ? "Generating..." : "Generate AI Blog"}
              </Button>
            </div>

            {loading ? (
              <div className="text-center py-8">Loading blogs...</div>
            ) : (
              <div className="grid gap-4">
                {blogs.map((blog) => (
                  <Card key={blog.id} className="border-border/50">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{blog.title}</CardTitle>
                          <CardDescription className="mt-2">{blog.description}</CardDescription>
                          <p className="text-sm text-muted-foreground mt-2">
                            {format(new Date(blog.created_at), "MMM dd, yyyy 'at' hh:mm a")}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(blog)}
                            className="gap-2"
                          >
                            <Pencil size={16} />
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDelete(blog.id)}
                            className="gap-2"
                          >
                            <Trash2 size={16} />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
