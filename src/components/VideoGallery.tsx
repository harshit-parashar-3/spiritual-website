import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { PlayCircle, Youtube } from "lucide-react";
import { Button } from "./ui/button";

interface VideoGalleryProps {
  language: "hi" | "en";
}

const VideoGallery = ({ language }: VideoGalleryProps) => {
  const content = {
    hi: {
      title: "कथा एवं अनुष्ठान वीडियो",
      subtitle: "हमारे यूट्यूब चैनल पर आध्यात्मिक वीडियो देखें",
      viewChannel: "यूट्यूब चैनल देखें",
      categories: [
        { title: "श्रीमद्भागवत कथा", desc: "संपूर्ण कथा प्रवचन" },
        { title: "श्री राम कथा", desc: "रामायण कथा वाचन" },
        { title: "देवी भागवत कथा", desc: "देवी महात्म्य प्रवचन" },
        { title: "शिव महापुराण", desc: "शिव कथा एवं महिमा" },
        { title: "विशेष अनुष्ठान", desc: "महायज्ञ एवं पूजा" },
        { title: "आध्यात्मिक प्रवचन", desc: "दैनिक जीवन में धर्म" },
      ],
    },
    en: {
      title: "Katha & Anusthan Videos",
      subtitle: "Watch spiritual videos on our YouTube channel",
      viewChannel: "View YouTube Channel",
      categories: [
        { title: "Shrimad Bhagwat Katha", desc: "Complete Katha Discourse" },
        { title: "Shri Ram Katha", desc: "Ramayana Recitation" },
        { title: "Devi Bhagwat Katha", desc: "Goddess Glory Discourse" },
        { title: "Shiv Mahapuran", desc: "Shiva Stories & Glory" },
        { title: "Special Anusthan", desc: "Grand Yagya & Puja" },
        { title: "Spiritual Discourses", desc: "Dharma in Daily Life" },
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
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <PlayCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription>{category.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full gap-2">
                  <Youtube className="w-4 h-4" />
                  {language === "hi" ? "वीडियो देखें" : "Watch Videos"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

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
