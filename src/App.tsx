import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Portfolio from "@/pages/Portfolio";
// 1. Import the new component (Make sure the path matches where you saved it!)
import ScrollToTop from "@/components/ScrollToTop"; 

export default function App() {
  return (
    <TooltipProvider>
      {/* This renders your main Portfolio page directly */}
      <Portfolio />
      
      {/* This handles the pop-up notifications */}
      <Toaster />

      {/* 2. Add the Scroll button here so it floats above everything */}
      <ScrollToTop />
    </TooltipProvider>
  );
}