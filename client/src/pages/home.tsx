import { useQuery } from "@tanstack/react-query";
import type { MuscleGroup } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function Home() {
  const { data: muscleGroups } = useQuery<MuscleGroup[]>({
    queryKey: ["/api/muscle-groups"],
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to FitVids</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {muscleGroups?.map((group) => (
          <Link key={group.id} href={`/muscle/${group.id}`}>
            <a>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <img
                    src={group.imageUrl}
                    alt={group.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h2 className="text-xl font-semibold">{group.name}</h2>
                  <p className="text-muted-foreground">{group.description}</p>
                </CardContent>
              </Card>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
