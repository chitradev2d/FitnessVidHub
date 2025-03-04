import { Link } from "wouter";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useQuery } from "@tanstack/react-query";
import type { MuscleGroup } from "@shared/schema";

export function Sidebar() {
  const { data: muscleGroups } = useQuery<MuscleGroup[]>({
    queryKey: ["/api/muscle-groups"],
  });

  return (
    <div className="pb-12 w-64 border-r">
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold">Muscle Groups</h2>
          <ScrollArea className="h-[calc(100vh-10rem)]">
            <div className="space-y-1">
              {muscleGroups?.map((group) => (
                <Link key={group.id} href={`/muscle/${group.id}`}>
                  <a className="block px-2 py-1 text-sm hover:bg-accent rounded-md">
                    {group.name}
                  </a>
                </Link>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
