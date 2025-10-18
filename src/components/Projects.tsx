import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration and real-time inventory management.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    demo: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop",
    demo: "#",
    github: "#",
  },
  {
    title: "Portfolio Template",
    description: "Modern portfolio template with animations and dark mode support.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    demo: "#",
    github: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with location-based forecasts and beautiful visualizations.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
    demo: "#",
    github: "#",
  },
  {
    title: "Social Media Analytics",
    description: "Analytics platform for tracking social media performance across multiple platforms.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    demo: "#",
    github: "#",
  },
  {
    title: "AI Chat Interface",
    description: "Modern chat interface powered by AI with context-aware responses.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    demo: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-gradient-hero">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Featured <span className="bg-gradient-cosmic bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Check out some of my recent work and creative solutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--glow-primary)] animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-cosmic opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardFooter className="gap-2">
                <Button variant="outline" size="sm" className="flex-1 border-border hover:border-primary hover:bg-primary/10" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="flex-1 border-border hover:border-primary hover:bg-primary/10" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
