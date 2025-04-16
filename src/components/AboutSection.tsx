
import { useState, useEffect } from "react";

export function AboutSection() {
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
    
    const element = document.getElementById("about");
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="about" className={`section-container ${isVisible ? "animate-section visible" : "animate-section"}`}>
      <h2 className="section-heading">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <div>
          <p className="text-lg mb-6">
            I'm a passionate Frontend Developer with expertise in building modern, 
            responsive web applications using the latest technologies.
          </p>
          <p className="text-lg mb-6">
            With a strong foundation in <span className="highlighted-text">React</span>, <span className="highlighted-text">Next.js</span>, 
            and <span className="highlighted-text">Tailwind CSS</span>, I create seamless user experiences 
            that are both functional and visually appealing.
          </p>
          <p className="text-lg">
            I'm dedicated to writing clean, maintainable code and constantly learning 
            new technologies to stay at the forefront of web development.
          </p>
        </div>
        <div className="glass-card p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-4">Education & Experience</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium">Computer Science Engineering</h4>
              <p className="text-sm text-muted-foreground">Chandigarh Group of Colleges</p>
            </div>
            <div>
              <h4 className="font-medium">Frontend Developer</h4>
              <p className="text-sm text-muted-foreground">Building modern web applications with React and Next.js</p>
            </div>
            <div>
              <h4 className="font-medium">Open Source Contributor</h4>
              <p className="text-sm text-muted-foreground">Contributing to various open source projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
