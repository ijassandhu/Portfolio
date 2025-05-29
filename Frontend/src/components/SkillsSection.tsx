import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  name: string;
  skills: Array<string>;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "RESTful APIs"],
  },
  {
    name: "Tools & Others",
    skills: ["Git", "Figma", "VS Code", "Docker"],
  },
  {
    name: "Soft Skills",
    skills: ["Leadership", "Teamwork", "Problem Solving", "Communication"],
  },
];

export function SkillsSection() {
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

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="skills"
      className={`section-container ${
        isVisible ? "animate-section visible" : "animate-section"
      }`}
    >
      <h2 className="section-heading">Skills</h2>
      <div className="grid md:grid-cols-2 gap-12">
        {skillCategories.map((category) => (
          <div key={category.name} className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-sm py-2 px-3 rounded-md bg-secondary/50 hover:bg-highlight/20 transition-colors duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
