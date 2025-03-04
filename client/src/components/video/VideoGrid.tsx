import { VideoCard } from "./VideoCard";
import type { Video } from "@shared/schema";

interface VideoGridProps {
  videos: Video[];
}

export function VideoGrid({ videos }: VideoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
      {videos.map((video, index) => (
        <VideoCard key={video.id} video={video} delay={index} />
      ))}
    </div>
  );
}