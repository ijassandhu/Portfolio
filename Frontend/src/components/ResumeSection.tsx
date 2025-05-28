
import { useState, useEffect } from "react";
import { CheckCircle, Briefcase, GraduationCap, Award, Calendar } from "lucide-react";

export function ResumeSection() {
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
    
    const element = document.getElementById("resume");
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="resume" className={`section-container ${isVisible ? "animate-section visible" : "animate-section"}`}>
      <h2 className="section-heading">Resume</h2>
      <p className="text-muted-foreground mb-10">My professional journey</p>
      
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <div className="flex items-center mb-6">
            <Briefcase className="mr-2 text-highlight" />
            <h3 className="text-xl font-semibold">Experience</h3>
          </div>
          
          <div className="space-y-12">
            <div className="relative pl-8 border-l border-border">
              <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-highlight"></div>
              <div className="mb-1 flex items-center text-sm text-muted-foreground">
                <Calendar className="h-3 w-3 mr-1" /> 2025 - Present
              </div>
              <h4 className="font-semibold">Frontend Developer</h4>
              <p className="text-sm text-muted-foreground mb-2">Lent-it</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-1 text-highlight" />
                  <span className="text-sm">Developed and maintained client-facing applications using React</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-1 text-highlight" />
                  <span className="text-sm">Improved application performance by 40% through code optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-1 text-highlight" />
                  <span className="text-sm">Collaborated with UX team to implement responsive designs</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-12">
            <div className="relative pl-8 border-l border-border">
              <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-highlight"></div>
              <div className="mb-1 mt-8 flex items-center text-sm text-muted-foreground">
                <Calendar className="h-3 w-3 mr-1" /> 2025 - Present
              </div>
              <h4 className="font-semibold">Technical Lead</h4>
              <p className="text-sm text-muted-foreground mb-2">ACM Chapter CEC</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-1 text-highlight" />
                  <span className="text-sm">Organized and conducted coding workshops and technical talks under the ACM banner.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-1 text-highlight" />
                  <span className="text-sm">Led the development of internal tools and platforms to support chapter activities and events.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex items-center mb-6">
            <GraduationCap className="mr-2 text-highlight" />
            <h3 className="text-xl font-semibold">Education</h3>
          </div>
          
          <div className="space-y-12">
            <div className="relative pl-8 border-l border-border">
              <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-highlight"></div>
              <div className="mb-1 flex items-center text-sm text-muted-foreground">
                <Calendar className="h-3 w-3 mr-1" /> 2022 - 2026
              </div>
              <h4 className="font-semibold">B.Tech in Computer Science</h4>
              <p className="text-sm text-muted-foreground mb-2">Chandigarh Group of Colleges, Landran</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-1 text-highlight" />
                  <span className="text-sm">Specialization in Web Technologies</span>
                </li>
              </ul>
            </div>
            <div className="relative pl-8 border-l border-border">
              <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-highlight"></div>
              <div className="mb-1 flex items-center text-sm text-muted-foreground">
                <Calendar className="h-3 w-3 mr-1" /> 2020 - 2022
              </div>
              <h4 className="font-semibold">Intermediate(CBSE)</h4>
              <p className="text-sm text-muted-foreground mb-2">D.A.V Public School, Chamba(H.P)</p>
            </div>
            
            <div className="flex items-center mb-6">
            <Award className="mr-2 text-highlight" />
            <h3 className="text-xl font-semibold">Cerifications</h3>
          </div>
            <div className="relative pl-8 border-l border-border">
              <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-highlight"></div>
              <div className="mb-1 flex items-center text-sm text-muted-foreground">
                <Calendar className="h-3 w-3 mr-1" /> 2024
              </div>
             
              <h4 className="font-semibold">NPTEL Certification</h4>
              <p className="text-sm text-muted-foreground mb-2">Software Conceptual Design</p>
              <ul className="space-y-2">
              </ul>
            </div>
            <div className="relative pl-8 border-l border-border">
              <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-highlight"></div>
              <div className="mb-1 flex items-center text-sm text-muted-foreground">
                <Calendar className="h-3 w-3 mr-1" /> 2025
              </div>
              <h4 className="font-semibold">100Xdevs</h4>
              <p className="text-sm text-muted-foreground mb-2">Full stack development cohort (Ongoing)</p>
              <ul className="space-y-2">
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
