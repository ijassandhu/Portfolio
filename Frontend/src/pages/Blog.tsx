
import { useState, useEffect } from "react";
import { ArrowLeft, Calendar, Clock, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding React Hooks",
    excerpt: "A deep dive into React hooks and how they simplify state management in functional components.",
    date: "Apr 2, 2025",
    readTime: "5 min read",
    slug: "understanding-react-hooks",
    category: "React"
  },
  {
    id: 2,
    title: "The Power of Tailwind CSS",
    excerpt: "How Tailwind CSS can improve your development workflow and create stunning designs without writing custom CSS.",
    date: "Mar 25, 2025",
    readTime: "7 min read",
    slug: "power-of-tailwind-css",
    category: "CSS"
  },
  {
    id: 3,
    title: "Next.js 14 New Features",
    excerpt: "Exploring the latest features in Next.js 14 and how they can enhance your web applications.",
    date: "Mar 18, 2025",
    readTime: "6 min read",
    slug: "nextjs-14-new-features",
    category: "Next.js"
  },
  {
    id: 4,
    title: "Building a REST API with Node.js",
    excerpt: "Learn how to create a robust REST API using Node.js, Express, and MongoDB.",
    date: "Mar 10, 2025",
    readTime: "8 min read",
    slug: "building-rest-api-nodejs",
    category: "Backend"
  },
  {
    id: 5,
    title: "State Management with Redux Toolkit",
    excerpt: "Simplify your Redux code with Redux Toolkit and improve your application's state management.",
    date: "Mar 5, 2025",
    readTime: "6 min read",
    slug: "state-management-redux-toolkit",
    category: "React"
  },
  {
    id: 6,
    title: "TypeScript Best Practices for React",
    excerpt: "Improve your React applications with these TypeScript best practices and patterns.",
    date: "Feb 28, 2025",
    readTime: "7 min read",
    slug: "typescript-best-practices-react",
    category: "TypeScript"
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);

  useEffect(() => {
    const results = blogPosts.filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(results);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="mb-12">
          <Button variant="outline" asChild className="mb-6">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-muted-foreground mb-8">Thoughts and insights about web development</p>
          
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search articles..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Card key={post.id} className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium bg-secondary/50 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                  <Button variant="link" size="sm" asChild>
                    <Link to={`/blog/${post.slug}`}>Read article</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
