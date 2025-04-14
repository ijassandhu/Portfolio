
import { useState, useEffect } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
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
    
    const element = document.getElementById("contact");
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className={`section-container ${isVisible ? "animate-section visible" : "animate-section"}`}>
      <h2 className="section-heading">Contact Me</h2>
      <p className="text-muted-foreground mb-10">Let's talk about your project</p>
      
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div className="flex items-start">
            <div className="mr-4 rounded-full p-2 bg-highlight/10">
              <Mail className="h-5 w-5 text-highlight" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Email</h3>
              <a href="ijassandhu.dev@gmail.com" className="text-sm text-muted-foreground hover:text-highlight transition-colors">
                ijassandhu.dev@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mr-4 rounded-full p-2 bg-highlight/10">
              <Phone className="h-5 w-5 text-highlight" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Phone</h3>
              <a href="tel:+911234567890" className="text-sm text-muted-foreground hover:text-highlight transition-colors">
                +91 6230704204
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mr-4 rounded-full p-2 bg-highlight/10">
              <MapPin className="h-5 w-5 text-highlight" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Location</h3>
              <p className="text-sm text-muted-foreground">
                Chandigarh, India
              </p>
            </div>
          </div>
        </div>
        
        <form className="md:col-span-3 space-y-6 glass-card p-6 md:p-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <Input 
                id="name" 
                name="name" 
                placeholder="Your name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="Your email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="bg-background/50"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
            <Input 
              id="subject" 
              name="subject" 
              placeholder="Subject" 
              value={formData.subject} 
              onChange={handleChange} 
              required 
              className="bg-background/50"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <Textarea 
              id="message" 
              name="message" 
              placeholder="Your message" 
              rows={5} 
              value={formData.message} 
              onChange={handleChange} 
              required 
              className="resize-none bg-background/50"
            />
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              <>
                <span className="animate-pulse">Sending...</span>
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}
