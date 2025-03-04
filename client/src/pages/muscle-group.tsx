import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import type { MuscleGroup, Video } from "@shared/schema";
import { MuscleGroupHeader } from "@/components/muscle/MuscleGroup";
import { VideoGrid } from "@/components/video/VideoGrid";
import { motion } from "framer-motion";

export default function MuscleGroupPage() {
  const { id } = useParams<{ id: string }>();

  const { data: muscleGroup, isLoading: isLoadingGroup } = useQuery<MuscleGroup>({
    queryKey: [`/api/muscle-groups/${id}`],
  });

  const { data: videos, isLoading: isLoadingVideos } = useQuery<Video[]>({
    queryKey: [`/api/muscle-groups/${id}/videos`],
  });

  if (isLoadingGroup || isLoadingVideos) {
    return (
      <div className="container mx-auto p-4">
        <div className="animate-pulse space-y-4">
          <div className="h-24 bg-muted rounded" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-64 bg-muted rounded" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!muscleGroup || !videos) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-xl font-semibold">No data available</h2>
        <p className="text-muted-foreground">Please select a muscle group from the sidebar</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto"
    >
      <MuscleGroupHeader muscleGroup={muscleGroup} />
      <VideoGrid videos={videos} />
    </motion.div>
  );
}