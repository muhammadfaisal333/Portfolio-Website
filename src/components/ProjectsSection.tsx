import { ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ecommerceImg from '@/assets/generated_images/E-commerce_project_screenshot_b4fa09a4.png';
import blogImg from '@/assets/generated_images/WordPress_blog_project_screenshot_3740d59b.png';
import businessImg from '@/assets/generated_images/Business_website_project_screenshot_248756e9.png';
import restaurantImg from '@/assets/generated_images/Restaurant_website_project_screenshot_862707b9.png';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description:
        'A modern e-commerce website built with WordPress and WooCommerce, featuring custom product filters, wishlist functionality, and seamless checkout experience.',
      image: ecommerceImg,
      tags: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript'],
    },
    {
      title: 'Tech Blog Website',
      description:
        'A custom WordPress blog with advanced features including category filtering, social sharing, and optimized SEO performance for better search rankings.',
      image: blogImg,
      tags: ['WordPress', 'Custom Theme', 'SEO', 'Responsive'],
    },
    {
      title: 'Corporate Business Site',
      description:
        'Professional business website with modern design, contact forms, service showcases, and integrated analytics for tracking visitor engagement.',
      image: businessImg,
      tags: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    },
    {
      title: 'Restaurant Website',
      description:
        'Interactive restaurant website featuring online menu, reservation system, photo gallery, and location map integration for enhanced user experience.',
      image: restaurantImg,
      tags: ['WordPress', 'Custom Design', 'Booking System'],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Featured Projects
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A showcase of my recent work and client projects
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate group"
              data-testid={`card-project-${index}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  data-testid={`img-project-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <Button
                    asChild
                    variant="outline"
                    className="backdrop-blur-sm bg-background/20"
                    data-testid={`button-view-${index}`}
                  >
                    {/* 👇 Clicking now opens the project image in new tab */}
                    <a href={project.image} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs font-mono"
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
