
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/40 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="font-bold text-xl">
              <span className="text-highlight">J</span>askeerat Singh
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Frontend Developer creating beautiful web experiences
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/ijassandhu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-highlight transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jaskeerat-singh-77b3b3260/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-highlight transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:ijassandhu.dev@gmail.com"
              className="hover:text-highlight transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Jaskeerat Singh. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0 text-sm text-muted-foreground">
            <a href="#" className="hover:text-highlight transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-highlight transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
