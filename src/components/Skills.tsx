import { useEffect, useRef, useState } from "react";
import { Code2, Palette, Smartphone, Database, Cloud, Zap, Coffee, Server, Heart } from "lucide-react";

const skills = [
  { name: "Frontend Development", icon: Code2, level: 90 },
  { name: "Java Programming", icon: Coffee, level: 85 },
  { name: "Backend Development", icon: Server, level: 95 },
  { name: "Database Management", icon: Database, level: 80 },
  { name: "HTML + CSS", icon: Heart, level: 75 },
  { name: "Performance Optimization", icon: Zap, level: 88 },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(skills.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          let progress = 0;
          const timer = setInterval(() => {
            progress += 2;
            if (progress >= skill.level) {
              progress = skill.level;
              clearInterval(timer);
            }
            setAnimatedLevels((prev) => {
              const newLevels = [...prev];
              newLevels[index] = progress;
              return newLevels;
            });
          }, 20);
        }, index * 100);
      });
    }
  }, [isVisible]);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          My <span className="bg-gradient-cosmic bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Here are the technologies and tools I work with to bring ideas to life
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`bg-card border border-border rounded-2xl p-6 transition-all duration-500 hover:border-primary hover:shadow-[var(--glow-primary)] ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                </div>
                
                <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-cosmic rounded-full transition-all duration-1000"
                    style={{ width: `${animatedLevels[index]}%` }}
                  />
                </div>
                
                <div className="mt-2 text-right text-sm text-muted-foreground">
                  {animatedLevels[index]}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
