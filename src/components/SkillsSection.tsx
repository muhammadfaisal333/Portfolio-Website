import { useState } from 'react';
import { SiWordpress, SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiPhp, SiFigma, SiCanva,} from 'react-icons/si';
import { MdWeb } from 'react-icons/md'; // for Elementor
import { FaLayerGroup } from 'react-icons/fa'; // for Divi
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  level: number;
  category: string;
}

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

const skills: Skill[] = [
  { name: 'WordPress', icon: SiWordpress, level: 95, category: 'cms' },
  { name: 'Elementor', icon: MdWeb, level: 90, category: 'pagebuilder' },
  { name: 'Divi', icon: FaLayerGroup, level: 80, category: 'pagebuilder' },
  { name: 'HTML5', icon: SiHtml5, level: 98, category: 'frontend' },
  { name: 'CSS3', icon: SiCss3, level: 95, category: 'frontend' },
  { name: 'JavaScript', icon: SiJavascript, level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 92, category: 'framework' },
  { name: 'PHP', icon: SiPhp, level: 80, category: 'backend' },
  { name: 'Figma', icon: SiFigma, level: 85, category: 'tools' },
  { name: 'Canva', icon: SiCanva, level: 80, category: 'tools' },
];


  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'cms', label: 'CMS' },
    { id: 'pagebuilder', label: 'Page Builder' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'framework', label: 'Frameworks' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools' },
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Skills & Technologies
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are the technologies and tools I work with to bring ideas to life
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'secondary'}
              className="cursor-pointer px-4 py-2 text-sm"
              onClick={() => setSelectedCategory(category.id)}
              data-testid={`badge-category-${category.id}`}
            >
              {category.label}
            </Badge>
          ))}
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <Card key={index} className="p-6 hover-elevate" data-testid={`card-skill-${index}`}>
              <skill.icon className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-3">{skill.name}</h4>
              <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-primary to-chart-2 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                  data-testid={`progress-${index}`}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2 font-mono">{skill.level}%</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
