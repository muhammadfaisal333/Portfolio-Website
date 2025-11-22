import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Portfolio from "@/pages/Portfolio";

export default function App() {
  return (
    <TooltipProvider>
      {/* This renders your main Portfolio page directly */}
      <Portfolio />
      
      {/* This handles the pop-up notifications */}
      <Toaster />
    </TooltipProvider>
  );
}