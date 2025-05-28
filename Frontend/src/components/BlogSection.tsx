
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding React Hooks",
    excerpt: "A deep dive into React hooks and how they simplify state management in functional components.",
    date: "Apr 2, 2025",
    readTime: "5 min read",
    slug: "understanding-react-hooks"
  },
  {
    id: 2,
    title: "The Power of Tailwind CSS",
    excerpt: "How Tailwind CSS can improve your development workflow and create stunning designs without writing custom CSS.",
    date: "Mar 25, 2025",
    readTime: "7 min read",
    slug: "power-of-tailwind-css"
  },
  {
    id: 3,
    title: "Next.js 14 New Features",
    excerpt: "Exploring the latest features in Next.js 14 and how they can enhance your web applications.",
    date: "Mar 18, 2025",
    readTime: "6 min read",
    slug: "nextjs-14-new-features"
  }
];

export function BlogSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById("blog");
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="blog" className={`section-container ${isVisible ? "animate-section visible" : "animate-section"}`}>
      <h2 className="section-heading">Blog</h2>
      <p className="text-muted-foreground mb-10">Thoughts and insights about web development</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="project-card border border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex text-sm text-muted-foreground mb-2">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="p-0 hover:bg-transparent" asChild>
                <Link to={`/blog/${post.slug}`} className="flex items-center gap-2 text-highlight hover:text-highlight/90">
                  Read more <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button variant="outline" asChild>
          <Link to="/blog">View all posts</Link>
        </Button>
      </div>
    </section>
  );
}
