
import { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Lent-it",
    description: "An e-commerce platform for buying, selling, or renting items like clothes, glasses, and shoes.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/ijassandhu/lentit",
    liveUrl: ""
  },
  {
    id: 2,
    title: "EventifyU",
    description: "A web app for Chandigarh Group of Colleges to list and manage events, attendance, blogs, and venues.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["React.js", "Tailwind CSS"],
    githubUrl: "https://github.com/ijassandhu/eventifyU",
    liveUrl: "https://eventifyu.vercel.app/"
  },
  {
    id: 3,
    title: "Pay Lite",
    description: "A lightweight platform to send and receive money online with enhanced security features.",
    image: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    githubUrl: "https://github.com/ijassandhu/Pay-Lite",
    liveUrl: "#"
  }
];

export function ProjectsSection() {
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
    
    const element = document.getElementById("projects");
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="projects" className={`section-container ${isVisible ? "animate-section visible" : "animate-section"}`}>
      <h2 className="section-heading">Projects</h2>
      <p className="text-muted-foreground mb-10">Some of my recent work</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={project.id} className="project-card overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((item, i) => (
                  <Badge key={i} variant="secondary" className="bg-secondary/50">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <a 
                href={project.githubUrl} 
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <Github className="h-4 w-4" />
                <span className="text-sm">Code</span>
              </a>
              <a 
                href={project.liveUrl} 
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                aria-label={`Live demo for ${project.title}`}
              >
                <span className="text-sm">Live Demo</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
