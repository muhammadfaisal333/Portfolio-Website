import { Code2, Palette, Rocket, Award, Users, Coffee, Lightbulb, Layout, TestTube, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import profileImage from '@/assets/generated_images/Small_size.jpeg';

export default function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following industry best practices and standards',
    },
    {   
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating beautiful, user-friendly interfaces with attention to every detail',
    },
    {
      icon: Rocket,
      title: 'Fast Performance',
      description: 'Optimizing for speed and delivering exceptional user experiences',
    },
    {
      icon: Award,
      title: 'Quality Focused',
      description: 'Committed to delivering high-quality solutions that exceed expectations',
    },
  ];

  const process = [
    {
      icon: Lightbulb,
      title: 'Consultation',
      description: 'We discuss your goals, website needs, and style preferences to create a clear plan.',
      step: '01',
    },
    {
      icon: Layout,
      title: 'Design',
      description: 'Creating wireframes, mockups, and detailed project plans for seamless execution',
      step: '02',
    },
    {
      icon: Code2,
      title: 'Development',
      description: 'Building your project with clean code, modern technologies, and best practices',
      step: '03',
    },
    {
      icon: TestTube,
      title: 'Launch',
      description: 'Rigorous testing across devices, optimization, and smooth deployment to production',
      step: '04',
    },
  ];

  const stats = [
    { icon: Award, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '30+', label: 'Happy Clients' },
    { icon: Coffee, value: '1000+', label: 'Cups of Coffee' },
  ];

  const expertise = ['WordPress Website Development', 'Custom WordPress Themes & Plugins', 'Responsive & Mobile-Friendly Design', 'Website Optimization & Performance', 'Elementor & Other Page Builders', 'UI/UX Implementation'];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-1">About Me</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Turning Ideas Into Reality
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building exceptional digital experiences with passion and precision
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-chart-2 to-primary rounded-2xl blur-2xl opacity-20 animate-pulse" />
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Muhammad Faisal"
                  className="rounded-2xl w-full max-w-sm shadow-2xl border-2 border-border"
                  data-testid="img-profile"
                />
                <div className="absolute -bottom-6 right-2 md:right-6 bg-card border-2 border-border rounded-xl p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                    <div className="h-3 w-3 bg-chart-3 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold">Available for work</span>
                </div>
</div>

              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
              {stats.map((stat, index) => (
                <Card key={index} className="p-4 text-center" data-testid={`card-stat-${index}`}>
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Hi, I'm Muhammad Faisal
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-chart-2 rounded-full mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I'm a passionate <span className="text-foreground font-semibold">WordPress and Frontend Developer</span> with extensive experience in building modern, responsive websites and web applications. I specialize in creating custom WordPress themes, developing interactive user interfaces, that look great and perform flawlessly.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I work closely with clients to understand their vision and turn it into a fully functional website. My focus is on <span className="text-foreground font-semibold">WordPress</span>, <span className="text-foreground font-semibold">responsive design</span>, and creating sites that are easy to manage and update.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Whether you need a custom WordPress site, a modern web application, or a complete frontend solution, I'm here to turn your vision into reality.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Areas of Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">What I Bring to the Table</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Core principles that drive every project I work on
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 hover-elevate group" data-testid={`card-highlight-${index}`}>
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-chart-2/10 w-fit mb-4 group-hover:from-primary/20 group-hover:to-chart-2/20 transition-colors">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 px-4 py-1">My Process</Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">How I Work</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <Card key={index} className="p-6 hover-elevate relative overflow-hidden group" data-testid={`card-process-${index}`}>
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                  {item.step}
                </div>
                <div className="relative">
                  <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs font-mono px-2 py-0.5">
                      Step {item.step}
                    </Badge>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
