import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const topics = [
  "The Evolution of Web Components in 2025",
  "TypeScript Best Practices for Enterprise Apps",
  "Building Real-Time Collaborative Tools",
  "Micro-Frontends: When and Why to Use Them",
  "GraphQL vs REST: Making the Right Choice",
  "Edge Computing and the Future of Web Apps",
  "Modern CSS: Grid, Flexbox, and Container Queries",
  "Web Accessibility: Beyond WCAG Compliance",
  "State Management Patterns in React",
  "The Rise of Web Assembly in Production"
];

const images = [
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
  "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
  "https://images.unsplash.com/photo-1555099962-4199c345e5dd",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
];

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const title = topics[Math.floor(Math.random() * topics.length)];
    const slug = title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
    const image_url = images[Math.floor(Math.random() * images.length)];
    
    const description = `Exploring ${title.toLowerCase()} and its impact on modern development practices.`;
    const content = `This is an AI-generated blog post about ${title}. The landscape of web development continues to evolve rapidly, bringing new challenges and opportunities. Understanding these changes is crucial for staying competitive in today's market. This post explores key concepts, best practices, and real-world applications. We'll dive deep into the technical aspects while keeping practical implementation in mind. Whether you're a seasoned developer or just starting out, these insights will help you build better applications. The future of web development is bright, and staying informed is the first step toward success.`;

    const { error } = await supabaseClient
      .from("blogs")
      .insert([{ title, slug, description, content, image_url }]);

    if (error) throw error;

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
