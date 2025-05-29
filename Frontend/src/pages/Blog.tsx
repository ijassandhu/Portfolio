import { useState, useEffect } from "react";
import { ArrowLeft, Calendar, Clock, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

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
    excerpt:
      "A deep dive into React hooks and how they simplify state management in functional components.",
    date: "Apr 2, 2025",
    readTime: "5 min read",
    slug: "understanding-react-hooks",
    category: "React",
  },
  {
    id: 2,
    title: "The Power of Tailwind CSS",
    excerpt:
      "How Tailwind CSS can improve your development workflow and create stunning designs without writing custom CSS.",
    date: "Mar 25, 2025",
    readTime: "7 min read",
    slug: "power-of-tailwind-css",
    category: "CSS",
  },
  {
    id: 3,
    title: "Next.js 14 New Features",
    excerpt:
      "Exploring the latest features in Next.js 14 and how they can enhance your web applications.",
    date: "Mar 18, 2025",
    readTime: "6 min read",
    slug: "nextjs-14-new-features",
    category: "Next.js",
  },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);

  useEffect(() => {
    const results = blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(results);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}
      <div className="container mx-auto pt-4 px-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl flex items-center">
          <span className="text-highlight">J</span>askeerat
          <span className="hidden sm:inline ml-1">Singh</span>
        </Link>
        <ThemeToggle />
      </div>
      <div className="container mx-auto px-4 pt-10 pb-16">
        <div className="mb-12">
          <Button variant="outline" asChild className="mb-6">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-muted-foreground mb-8">
            Thoughts and insights about web development
          </p>

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
              <Card
                key={post.id}
                className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300"
              >
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
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
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
              <p className="text-muted-foreground">
                No articles found matching your search.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
