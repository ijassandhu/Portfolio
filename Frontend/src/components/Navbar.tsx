
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NavLink = ({ to, label }: { to: string; label: string }) => {
  return (
    <Link 
      to={to} 
      className="nav-link text-sm font-medium hover-underline px-1"
      onClick={() => document.getElementById(to.substring(1))?.scrollIntoView({ behavior: "smooth" })}
    >
      {label}
    </Link>
  );
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl flex items-center">
          <span className="text-highlight">J</span>askeerat
          <span className="hidden sm:inline ml-1">Singh</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="#about" label="About" />
          <NavLink to="#projects" label="Projects" />
          <NavLink to="#skills" label="Skills" />
          <NavLink to="#blog" label="Blog" />
          <NavLink to="#resume" label="Resume" />
          <NavLink to="#contact" label="Contact" />
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="rounded-full"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-sm z-40 animate-fade-in">
            <nav className="flex flex-col items-center justify-center h-full gap-8 text-lg">
              <NavLink to="#about" label="About" />
              <NavLink to="#projects" label="Projects" />
              <NavLink to="#skills" label="Skills" />
              <NavLink to="#blog" label="Blog" />
              <NavLink to="#resume" label="Resume" />
              <NavLink to="#contact" label="Contact" />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
