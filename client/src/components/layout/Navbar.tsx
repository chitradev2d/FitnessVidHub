import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/hooks/use-theme";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-primary">FitVids</h1>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Input
            type="search"
            placeholder="Search videos..."
            className="w-[200px] lg:w-[300px]"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </div>
      </div>
    </nav>
  );
}
