import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface MobileNavProps {
  onToggle: () => void;
}

export function MobileNav({ onToggle }: MobileNavProps) {
  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 h-16 border-b bg-background z-40 flex items-center px-4">
      <Button variant="ghost" size="icon" onClick={onToggle}>
        <Menu className="h-6 w-6" />
      </Button>
      <h1 className="text-xl font-bold text-primary ml-2">FitVids</h1>
    </div>
  );
}
