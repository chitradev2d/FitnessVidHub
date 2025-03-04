import { Link, useLocation } from "wouter";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import type { MuscleGroup } from "@shared/schema";
import React from 'react';

interface SidebarProps {
  onCloseMobileMenu?: () => void;
}

export function Sidebar({ onCloseMobileMenu }: SidebarProps) {
  const [location, setLocation] = useLocation();
  const { data: muscleGroups, isLoading } = useQuery<MuscleGroup[]>({
    queryKey: ["/api/muscle-groups"],
  });

  // Redirect to first muscle group on initial load
  React.useEffect(() => {
    if (location === "/" && muscleGroups && muscleGroups.length > 0) {
      setLocation(`/muscle/${muscleGroups[0].id}`);
    }
  }, [location, muscleGroups, setLocation]);

  const handleLinkClick = (href: string) => {
    setLocation(href);
    onCloseMobileMenu?.();
  };

  if (isLoading) {
    return (
      <div className="pb-12 w-64 border-r p-4 bg-background h-full">
        <div className="animate-pulse space-y-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-8 bg-muted rounded" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="pb-12 w-64 border-r bg-background h-full"
    >
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Muscle Groups</h2>
          <ScrollArea className="h-[calc(100vh-10rem)]">
            <div className="space-y-1">
              {muscleGroups?.map((group) => {
                const isActive = location === `/muscle/${group.id}`;
                return (
                  <Link key={group.id} href={`/muscle/${group.id}`}>
                    <motion.a 
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(`/muscle/${group.id}`);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                        isActive 
                          ? "bg-primary text-primary-foreground" 
                          : "hover:bg-accent"
                      }`}
                    >
                      {group.name}
                    </motion.a>
                  </Link>
                );
              })}
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.div>
  );
}