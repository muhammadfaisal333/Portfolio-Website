import { ArrowDown, FileText, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import heroImage from '@/assets/generated_images/Professional_tech_hero_background_388070e1.png';

export default function HeroSection() {
  const { toast } = useToast();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

const handleResumeClick = () => {
  window.open('/resume.pdf', '_blank');
};



  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center py-32">
        <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm" data-testid="badge-greeting">
          👋 Welcome to my portfolio
        </Badge>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
          <span className="block mb-2">I'm</span>
          <span className="block bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            Muhammad Faisal
          </span>
        </h1>
        
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-semibold">
            WordPress & Frontend Developer
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
        </div>
        
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Specializing in creating stunning, high-performance websites and web applications. 
          Let's transform your ideas into powerful digital experiences that drive results.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="gap-2 group"
            data-testid="button-view-projects"
          >
            View My Work
            <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            onClick={handleResumeClick}
            className="gap-2"
            data-testid="button-download-resume"
          >
            <FileText className="h-4 w-4" />
            Download Resume
          </Button>
          
          <Button
            size="lg"
            variant="secondary"
            onClick={() => scrollToSection('contact')}
            className="gap-2"
            data-testid="button-contact"
          >
            <MessageSquare className="h-4 w-4" />
            Get In Touch
          </Button>
        </div>
        
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-border/50">
          <div>
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent mb-2">
              2+
            </div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-sm text-muted-foreground">Projects Done</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent mb-2">
              30+
            </div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
        </div>
      </div>
      
     <button
  onClick={() => scrollToSection('about')}
  className="absolute bottom-8 inset-x-0 mx-auto w-max animate-bounce"
>
  <div className="p-3 rounded-full border-2 border-primary/50 bg-background/20 backdrop-blur-sm hover:border-primary transition-colors">
    <ArrowDown className="h-5 w-5 text-primary" />
  </div>
</button>

    </section>
  );
}
