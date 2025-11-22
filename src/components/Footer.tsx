import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center gap-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full"
            data-testid="button-back-to-top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
          
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Muhammad Faisal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
