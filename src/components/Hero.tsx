import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroAstronaut from "@/assets/hero-astronaut.png";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Creating Amazing Digital Experiences";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-hero relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-secondary rounded-full text-sm text-foreground border border-border">
            Welcome to my Portfolio
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Hi! I'm <span className="bg-gradient-cosmic bg-clip-text text-transparent">Your Name</span>,<br />
            Web Designer
          </h1>
          
          <div className="h-8 text-xl md:text-2xl text-accent font-mono">
            {displayText}
            <span className="animate-pulse">|</span>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--glow-primary)] transition-all">
            Let's Connect
          </Button>
        </div>

        <div className="relative animate-float">
          <div className="relative animate-glow">
            <img
              src={heroAstronaut}
              alt="Space Astronaut"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
