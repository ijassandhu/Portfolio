
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 pb-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 flex flex-col items-center md:items-start animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-center md:text-left">
            Hi, I'm <span className="text-gradient">Jaskeerat Singh</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center md:text-left text-muted-foreground">
          Frontend Developer | Building web experiences with modern tech.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button asChild>
              <a href="#contact">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View my work</a>
            </Button>
          </div>
          <div className="mt-8 flex gap-4">
            <a 
              href="https://github.com/ijassandhu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-highlight transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jaskeerat-singh-77b3b3260/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-highlight transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center animate-fade-in" style={{animationDelay: '0.3s'}}>
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-highlight to-blue-500 blur-lg opacity-30"></div>
            <div className="aspect-ratio-container relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto">
              <img 
                src="/photos/new.jpg" 
                alt="Jaskeerat Singh" 
                className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-highlight/30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
