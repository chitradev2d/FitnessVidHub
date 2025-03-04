import { Card, CardContent } from "@/components/ui/card";
import type { MuscleGroup } from "@shared/schema";

interface MuscleGroupProps {
  muscleGroup: MuscleGroup;
}

export function MuscleGroupHeader({ muscleGroup }: MuscleGroupProps) {
  return (
    <Card className="mb-4">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <img
            src={muscleGroup.imageUrl}
            alt={muscleGroup.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold">{muscleGroup.name}</h1>
            <p className="text-muted-foreground">{muscleGroup.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
