
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  readTime: string;
  slug: string;
  category: string;
  content: string;
}

const blogPosts: Record<string, BlogPost> = {
  "understanding-react-hooks": {
    id: 1,
    title: "Understanding React Hooks",
    date: "Apr 2, 2025",
    readTime: "5 min read",
    slug: "understanding-react-hooks",
    category: "React",
    content: `
      <p>React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class component. They allow you to use state and other React features without writing a class.</p>
      
      <h2>Why Hooks?</h2>
      <p>Hooks solve a variety of problems in React:</p>
      <ul>
        <li>It's hard to reuse stateful logic between components</li>
        <li>Complex components become hard to understand</li>
        <li>Classes can be confusing for both humans and machines</li>
      </ul>
      
      <h2>The Basic Hooks</h2>
      <p>There are several built-in hooks in React:</p>
      
      <h3>useState</h3>
      <p>The useState hook lets you add state to function components. It takes the initial state as an argument and returns an array with the current state value and a function to update it.</p>
      <pre><code>const [count, setCount] = useState(0);</code></pre>
      
      <h3>useEffect</h3>
      <p>The useEffect hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.</p>
      
      <pre><code>useEffect(() => {
  document.title = \`You clicked \${count} times\`;
});</code></pre>
      
      <h3>useContext</h3>
      <p>The useContext hook accepts a context object (the value returned from React.createContext) and returns the current context value for that context.</p>
      
      <h2>Custom Hooks</h2>
      <p>Building your own Hooks lets you extract component logic into reusable functions. A custom Hook is a JavaScript function whose name starts with "use" and that may call other Hooks.</p>
      
      <h3>Example: useFetch</h3>
      <pre><code>function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>React Hooks provide a more direct API to React concepts you already know: props, state, context, refs, and lifecycle. They offer a powerful way to create and share stateful logic between components without introducing unnecessary nesting into your component tree.</p>
    `
  },
  "power-of-tailwind-css": {
    id: 2,
    title: "The Power of Tailwind CSS",
    date: "Mar 25, 2025",
    readTime: "7 min read",
    slug: "power-of-tailwind-css",
    category: "CSS",
    content: `
      <p>Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without ever leaving your HTML. Unlike other CSS frameworks that provide pre-designed components, Tailwind provides low-level utility classes that let you build completely custom designs.</p>
      
      <h2>Why Tailwind CSS?</h2>
      <p>Tailwind offers several advantages over traditional CSS approaches:</p>
      <ul>
        <li>No more naming things - You don't have to invent class names for everything</li>
        <li>CSS doesn't grow - Your CSS file size stays the same as your project grows</li>
        <li>Making changes feels safe - Changes are localized to the component you're working on</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To start using Tailwind, you need to install it in your project:</p>
      <pre><code>npm install tailwindcss</code></pre>
      
      <p>Then create a configuration file:</p>
      <pre><code>npx tailwindcss init</code></pre>
      
      <h2>Utility-First Workflow</h2>
      <p>Instead of writing custom CSS, you apply pre-existing classes directly in your HTML:</p>
      <pre><code>&lt;div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"&gt;
  &lt;div class="flex-shrink-0"&gt;
    &lt;img class="h-12 w-12" src="/img/logo.svg" alt="Logo"&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;div class="text-xl font-medium text-black"&gt;Tailwind CSS&lt;/div&gt;
    &lt;p class="text-gray-500"&gt;The utility-first CSS framework&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      
      <h2>Responsive Design</h2>
      <p>Tailwind makes responsive design straightforward with intuitive screen size prefixes:</p>
      <pre><code>&lt;div class="w-full md:w-1/2 lg:w-1/3"&gt;&lt;/div&gt;</code></pre>
      
      <h2>Customization</h2>
      <p>Tailwind is highly customizable through its configuration file:</p>
      <pre><code>// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': '#3490dc',
      }
    }
  }
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>Tailwind CSS offers a different approach to styling your applications that can significantly speed up your development process. By providing low-level utility classes, it gives you the building blocks to create unique designs without writing custom CSS.</p>
    `
  },
  // Add more blog posts as needed
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (slug && blogPosts[slug]) {
      setPost(blogPosts[slug]);
      window.scrollTo(0, 0);
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-28 pb-16">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
        
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 bg-secondary/50 rounded-full text-sm font-medium mb-4">
            {post.category}
          </span>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center text-sm text-muted-foreground mb-8 gap-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </div>
          </div>
          
          <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          <div className="border-t border-border pt-8 flex justify-between items-center">
            <Button variant="outline" asChild>
              <a href="#" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share this article
              </a>
            </Button>
            
            <Button asChild>
              <Link to="/blog">More articles</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
