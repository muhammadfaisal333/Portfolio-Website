import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300 group"
    >
      {/* 1. Structure: Exact Hero style (glass + border)
         2. Hover: Added 'hover:shadow' with your specific color #8F7CEA 
         3. Transition: Added 'duration-300' so the glow fades in smoothly
      */}
      <div className="p-3 rounded-full border-2 border-primary/50 bg-background/20 backdrop-blur-sm transition-all duration-300 hover:border-[#8F7CEA] hover:shadow-[0_0_20px_-5px_#8F7CEA] hover:-translate-y-1">
        <ArrowUp className="h-5 w-5 text-primary group-hover:text-[#8F7CEA] transition-colors" />
      </div>
    </button>
  );
}