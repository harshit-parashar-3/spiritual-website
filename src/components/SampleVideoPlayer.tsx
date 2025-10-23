import { Card } from "./ui/card";
import { Play } from "lucide-react";

interface SampleVideoPlayerProps {
  title: string;
  posterImage: string;
}

const SampleVideoPlayer = ({ title, posterImage }: SampleVideoPlayerProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video bg-black group cursor-pointer">
        {/* Poster Image */}
        <img
          src={posterImage}
          alt={title}
          className="w-full h-full object-cover opacity-80"
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
          <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
            <Play className="w-10 h-10 text-white ml-1" fill="white" />
          </div>
        </div>

        {/* Coming Soon Badge */}
        <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
          Coming Soon
        </div>
      </div>

      <div className="p-4 bg-card">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Video will be available soon on YouTube
        </p>
      </div>
    </Card>
  );
};

export default SampleVideoPlayer;
