import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { PlayCircle, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";

interface VideoGalleryProps {
  language: "hi" | "en";
}

const VideoGallery = ({ language }: VideoGalleryProps) => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const content = {
    hi: {
      title: "कथा एवं अनुष्ठान वीडियो",
      subtitle: "हमारे यूट्यूब चैनल पर आध्यात्मिक वीडियो देखें",
      viewChannel: "यूट्यूब चैनल देखें",
      categories: [
        {
          title: "श्रीमद्भागवत कथा",
          desc: "संपूर्ण कथा प्रवचन",
          image: "/images/katha/bhagwat-katha.svg",
          youtubeId: "dQw4w9WgXcQ" // Replace with your actual YouTube video ID
        },
        {
          title: "श्री राम कथा",
          desc: "रामायण कथा वाचन",
          image: "/images/katha/ram-katha.svg",
          youtubeId: "dQw4w9WgXcQ" // Replace with your actual YouTube video ID
        },
        {
          title: "देवी भागवत कथा",
          desc: "देवी महात्म्य प्रवचन",
          image: "/images/katha/devi-bhagwat.svg",
          youtubeId: "dQw4w9WgXcQ" // Replace with your actual YouTube video ID
        },
        {
          title: "शिव महापुराण",
          desc: "शिव कथा एवं महिमा",
          image: "/images/katha/shiv-mahapuran.svg",
          youtubeId: "dQw4w9WgXcQ" // Replace with your actual YouTube video ID
        },
        {
          title: "विशेष अनुष्ठान",
          desc: "महायज्ञ एवं पूजा",
          image: "/images/events/mahayagna.svg",
          youtubeId: "dQw4w9WgXcQ" // Replace with your actual YouTube video ID
        },
        {
          title: "आध्यात्मिक प्रवचन",
          desc: "दैनिक जीवन में धर्म",
          image: "/images/events/spiritual-gathering.svg",
          youtubeId: "dQw4w9WgXcQ" // Replace with your actual YouTube video ID
        },
      ],
    },
    en: {
      title: "Katha & Anusthan Videos",
      subtitle: "Watch spiritual videos on our YouTube channel",
      viewChannel: "View YouTube Channel",
      categories: [
        {
          title: "Shrimad Bhagwat Katha",
          desc: "Complete Katha Discourse",
          image: "/images/katha/bhagwat-katha.svg",
          youtubeId: "dQw4w9WgXcQ" // Replace with your actual YouTube video ID
        },
        {
          title: "Shri Ram Katha",
          desc: "Ramayana Recitation",
          image: "/images/katha/ram-katha.svg",
          youtubeId: "dQw4w9WgXcQ" // Replace with your actual YouTube video ID
        },
        {
          title: "Devi Bhagwat Katha",
          desc: "Goddess Glory Discourse",
          image: "/images/katha/devi-bhagwat.svg",
          youtubeId: "dQw4w9WgXcQ" // Replace with your actual YouTube video ID
        },
        {
          title: "Shiv Mahapuran",
          desc: "Shiva Stories & Glory",
          image: "/images/katha/shiv-mahapuran.svg",
          youtubeId: "dQw4w9WgXcQ" // Replace with your actual YouTube video ID
        },
        {
          title: "Special Anusthan",
          desc: "Grand Yagya & Puja",
          image: "/images/events/mahayagna.svg",
          youtubeId: "dQw4w9WgXcQ" // Replace with your actual YouTube video ID
        },
        {
          title: "Spiritual Discourses",
          desc: "Dharma in Daily Life",
          image: "/images/events/spiritual-gathering.svg",
          youtubeId: "dQw4w9WgXcQ" // Replace with your actual YouTube video ID
        },
      ],
    },
  };

  return (
    <section id="videos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {content[language].title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {content[language].categories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card animate-fade-up overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden bg-black">
                {category.youtubeId ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${category.youtubeId}`}
                    title={category.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                    <Youtube className="w-16 h-16 text-primary" />
                  </div>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription>{category.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full gap-2"
                  onClick={() => setSelectedVideo(index)}
                >
                  <Youtube className="w-4 h-4" />
                  {language === "hi" ? "पूर्ण स्क्रीन देखें" : "View Fullscreen"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Player Dialog */}
        <Dialog open={selectedVideo !== null} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">
                {selectedVideo !== null && content[language].categories[selectedVideo].title}
              </DialogTitle>
              <DialogDescription>
                {selectedVideo !== null && content[language].categories[selectedVideo].desc}
              </DialogDescription>
            </DialogHeader>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              {selectedVideo !== null && content[language].categories[selectedVideo].youtubeId && (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${content[language].categories[selectedVideo].youtubeId}?autoplay=1`}
                  title={content[language].categories[selectedVideo].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>

        <div className="text-center">
          <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-secondary">
            <Youtube className="w-5 h-5" />
            {content[language].viewChannel}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
