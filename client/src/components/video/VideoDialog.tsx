import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface VideoDialogProps {
  videoId: string;
  isOpen: boolean;
  onClose: () => void;
}

export function VideoDialog({ videoId, isOpen, onClose }: VideoDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[900px] p-0">
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-4 top-4 z-50" 
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
        <div className="aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="aspect-video"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
