import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import type { MuscleGroup, Video } from "@shared/schema";
import { MuscleGroupHeader } from "@/components/muscle/MuscleGroup";
import { VideoGrid } from "@/components/video/VideoGrid";

export default function MuscleGroupPage() {
  const { id } = useParams<{ id: string }>();

  const { data: muscleGroup, isLoading: isLoadingGroup } = useQuery<MuscleGroup>({
    queryKey: [`/api/muscle-groups/${id}`],
  });

  const { data: videos, isLoading: isLoadingVideos } = useQuery<Video[]>({
    queryKey: [`/api/muscle-groups/${id}/videos`],
  });

  if (isLoadingGroup || isLoadingVideos) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  if (!muscleGroup || !videos) {
    return <div className="container mx-auto p-4">No data available</div>;
  }

  return (
    <div className="container mx-auto">
      <MuscleGroupHeader muscleGroup={muscleGroup} />
      <VideoGrid videos={videos} />
    </div>
  );
}