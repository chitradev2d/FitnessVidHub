import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import type { Video } from "@shared/schema";

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  // Early return if video object is not properly loaded
  if (!video || !video.stats) {
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-4">
          <p>Loading video data...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold">{video.title}</h3>
          <Button variant="ghost" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>{video.stats?.views?.toLocaleString() || 0} views</p>
          <p>{video.stats?.duration || '0:00'}</p>
        </div>
        <div className="mt-2">
          <h4 className="text-sm font-medium">Expected Outcomes:</h4>
          <ul className="text-sm text-muted-foreground">
            {video.outcomes?.map((outcome, i) => (
              <li key={i}>{outcome}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}