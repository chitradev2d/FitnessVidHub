import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, PlayCircle, Eye, Clock } from "lucide-react";
import type { Video } from "@shared/schema";
import { useState } from "react";
import { motion } from "framer-motion";
import { VideoDialog } from "./VideoDialog";

interface VideoCardProps {
  video: Video;
  delay?: number;
}

export function VideoCard({ video, delay = 0 }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Early return if video object is not properly loaded
  if (!video || !video.stats) {
    return (
      <Card className="overflow-hidden animate-pulse">
        <CardContent className="p-4">
          <div className="h-48 bg-muted rounded mb-4" />
          <div className="h-6 bg-muted rounded w-3/4 mb-2" />
          <div className="h-4 bg-muted rounded w-1/2" />
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay * 0.1 }}
      >
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
          <CardHeader className="p-0 relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative cursor-pointer group"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                alt={video.title}
                className="w-full aspect-video object-cover"
                onError={(e) => {
                  // Fallback to medium quality thumbnail if maxresdefault fails
                  (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`;
                }}
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                <PlayCircle className="h-12 w-12 text-white" />
              </div>
            </motion.div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex justify-between items-start gap-2">
              <h3 className="font-semibold line-clamp-2">{video.title}</h3>
              <Button
                variant="ghost"
                size="icon"
                className="flex-shrink-0"
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{video.stats?.views?.toLocaleString() || 0}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{video.stats?.duration || '0:00'}</span>
              </div>
            </div>
            <div className="mt-3">
              <h4 className="text-sm font-medium mb-1">Expected Outcomes:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {video.outcomes?.map((outcome, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    • {outcome}
                  </motion.li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      <VideoDialog
        videoId={video.videoId}
        isOpen={isPlaying}
        onClose={() => setIsPlaying(false)}
      />
    </>
  );
}