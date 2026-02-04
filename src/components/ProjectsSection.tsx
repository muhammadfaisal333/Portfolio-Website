import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Update these imports with your new mockup images
import coursessite from "@/assets/generated_images/courseshub.jpeg";
import portfoliosite from "@/assets/generated_images/faisalportfolio.jpeg";
import consultingImg from "@/assets/generated_images/consulting_mockup.jpeg"; // Use the new mockup here
import restaurantImg from "@/assets/generated_images/resturantsite.jpg";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string; // Added field for the actual website link
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Premium Consulting Platform",
      description:
        "Developed a high-conversion, custom WordPress platform for a professional consulting firm. Rather than using a generic template, I engineered a bespoke layout using Elementor and Custom CSS to ensure unique brand identity and pixel-perfect responsiveness.",
      image: consultingImg,
      tags: ["WordPress", "Elementor", "Custom CSS", "Responsive"],
      liveUrl: "https://consulting-solutions.42web.io/",
    },
    {
      title: "WordPress Learning & Training Site",
      description:
        "A functional educational platform created by customizing a professional WordPress theme for business courses. I focused on setting up the site structure, adjusting the design with Elementor, and organizing the content to make it easy for students to find and take courses.",
      image: coursessite,
      tags: ["WordPress", "Elementor", "Theme Customization", "Layout Design"],
      liveUrl: "https://courseshub.42web.io/",
    },
    {
      title: "Developer Portfolio",
      description:
        "A clean and professional portfolio website created by customizing a high-quality WordPress theme to showcase my web development services. I tailored the design using Elementor to highlight my experience, technical skills in HTML/CSS/JS, and my project workflow.",
      image: portfoliosite,
      tags: ["WordPress", "Theme Customization", "Personal Branding", "Responsive Design"],
      liveUrl: "https://muhammadfaisalportfolio.42web.io/",
    },
    {
      title: "Coffee & Bakery Website",
      description:
        "A warm and inviting website designed for a boutique coffee house and bakery. I customized a professional WordPress theme to highlight seasonal baked goods, premium coffee selections, and a cozy shop atmosphere. Used Elementor to create a responsive menu and easy reservation system.",
      image: restaurantImg,
      tags: ["WordPress", "Elementor", "Menu", "Reservation"],
      liveUrl: "https://mycoffee.42web.io/",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured Projects
        </h2>

        {/* Trust-Building Message */}
        <p className="text-sm text-blue-400 font-medium text-center mb-2 uppercase tracking-widest">
          Proof of Concept & Skills
        </p>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          The following are live demo and practice projects created to
          demonstrate my expertise in <strong>WordPress development</strong> and{" "}
          <strong>Responsive Design</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate group border-muted/20 bg-background/50 backdrop-blur-sm"
              data-testid={`card-project-${index}`}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-testid={`img-project-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-6">
                  <Button
                    asChild
                    variant="default"
                    className="bg-primary hover:bg-primary/90 text-white shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Preview
                    </a>
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary" // Use "secondary" for a subtle, professional grey background
                      className="text-xs font-medium px-3 py-1 rounded-md" // standard font-medium prevents that "different" text look
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
