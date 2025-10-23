import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, Youtube, Video, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Videos = () => {
  const [language, setLanguage] = useState<"hi" | "en">("hi");
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const content = {
    hi: {
      title: "कथा एवं अनुष्ठान वीडियो",
      subtitle: "हमारे यूट्यूब चैनल पर आध्यात्मिक वीडियो देखें",
      viewChannel: "यूट्यूब चैनल देखें",
      watchNow: "अभी देखें",
      recentVideos: "हाल की वीडियो",
      categories: [
        {
          title: "श्रीमद्भागवत कथा",
          desc: "संपूर्ण कथा प्रवचन एवं व्याख्या",
          videos: "50+ वीडियो",
          image: "/images/katha/bhagwat-katha.svg",
          youtubeId: "dQw4w9WgXcQ", // Replace with actual video ID
        },
        {
          title: "श्री राम कथा",
          desc: "रामायण कथा वाचन एवं प्रसंग",
          videos: "40+ वीडियो",
          image: "/images/katha/ram-katha.svg",
          youtubeId: "dQw4w9WgXcQ",
        },
        {
          title: "देवी भागवत कथा",
          desc: "देवी महात्म्य प्रवचन एवं स्तोत्र",
          videos: "35+ वीडियो",
          image: "/images/katha/devi-bhagwat.svg",
          youtubeId: "dQw4w9WgXcQ",
        },
        {
          title: "शिव महापुराण",
          desc: "शिव कथा, महिमा एवं स्तुति",
          videos: "30+ वीडियो",
          image: "/images/katha/shiv-mahapuran.svg",
          youtubeId: "dQw4w9WgXcQ",
        },
        {
          title: "विशेष अनुष्ठान",
          desc: "महायज्ञ, हवन एवं विशेष पूजा",
          videos: "25+ वीडियो",
          image: "/images/events/mahayagna.svg",
          youtubeId: "dQw4w9WgXcQ",
        },
        {
          title: "आध्यात्मिक प्रवचन",
          desc: "दैनिक जीवन में धर्म एवं अध्यात्म",
          videos: "60+ वीडियो",
          image: "/images/events/spiritual-gathering.svg",
          youtubeId: "dQw4w9WgXcQ",
        },
        {
          title: "मंत्र जप एवं साधना",
          desc: "विभिन्न मंत्रों का जप एवं विधि",
          videos: "20+ वीडियो",
          image: "/images/products/rudraksha.svg",
          youtubeId: "dQw4w9WgXcQ",
        },
        {
          title: "त्योहार विशेष",
          desc: "विभिन्न त्योहारों की कथा एवं महत्व",
          videos: "45+ वीडियो",
          image: "/images/products/puja-items.svg",
          youtubeId: "dQw4w9WgXcQ",
        },
        {
          title: "सत्संग",
          desc: "आध्यात्मिक सत्संग एवं प्रश्नोत्तर",
          videos: "55+ वीडियो",
          image: "/images/events/spiritual-gathering.svg",
          youtubeId: "dQw4w9WgXcQ",
        },
      ],
    },
    en: {
      title: "Katha & Anusthan Videos",
      subtitle: "Watch spiritual videos on our YouTube channel",
      viewChannel: "View YouTube Channel",
      watchNow: "Watch Now",
      recentVideos: "Recent Videos",
      categories: [
        {
          title: "Shrimad Bhagwat Katha",
          desc: "Complete Katha discourse & explanation",
          videos: "50+ Videos",
          image: "/images/katha/bhagwat-katha.svg",
          youtubeId: "dQw4w9WgXcQ",
        },
        {
          title: "Shri Ram Katha",
          desc: "Ramayana recitation & episodes",
          videos: "40+ Videos",
          image: "/images/katha/ram-katha.svg",
          youtubeId: "dQw4w9WgXcQ",
        },
        {
          title: "Devi Bhagwat Katha",
          desc: "Goddess glory discourse & hymns",
          videos: "35+ Videos",
          image: "/images/katha/devi-bhagwat.svg",
          youtubeId: "dQw4w9WgXcQ",
        },
        {
          title: "Shiv Mahapuran",
          desc: "Shiva stories, glory & prayers",
          videos: "30+ Videos",
          image: "/images/katha/shiv-mahapuran.svg",
          youtubeId: "dQw4w9WgXcQ",
        },
        {
          title: "Special Anusthan",
          desc: "Grand Yagya, Havan & special Puja",
          videos: "25+ Videos",
          image: "/images/events/mahayagna.svg",
          youtubeId: "dQw4w9WgXcQ",
        },
        {
          title: "Spiritual Discourses",
          desc: "Dharma & spirituality in daily life",
          videos: "60+ Videos",
          image: "/images/events/spiritual-gathering.svg",
          youtubeId: "dQw4w9WgXcQ",
        },
        {
          title: "Mantra Japa & Sadhana",
          desc: "Chanting various mantras & methods",
          videos: "20+ Videos",
          image: "/images/products/rudraksha.svg",
          youtubeId: "dQw4w9WgXcQ",
        },
        {
          title: "Festival Specials",
          desc: "Stories & significance of festivals",
          videos: "45+ Videos",
          image: "/images/products/puja-items.svg",
          youtubeId: "dQw4w9WgXcQ",
        },
        {
          title: "Satsang",
          desc: "Spiritual Satsang & Q&A sessions",
          videos: "55+ Videos",
          image: "/images/events/spiritual-gathering.svg",
          youtubeId: "dQw4w9WgXcQ",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen">
      <Header language={language} onLanguageChange={setLanguage} />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground mb-4">
                <Video className="w-10 h-10" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {content[language].title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {content[language].subtitle}
              </p>
              <a href="https://www.youtube.com/@panditshreeprakash" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-secondary">
                  <Youtube className="w-5 h-5" />
                  {content[language].viewChannel}
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Video Categories */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content[language].categories.map((category, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card animate-fade-up overflow-hidden"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative w-full h-48 overflow-hidden bg-black">
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
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{category.videos}</span>
                      <Youtube className="w-4 h-4 text-primary" />
                    </div>
                    <Button
                      variant="outline"
                      className="w-full gap-2"
                      onClick={() => setSelectedVideo(index)}
                    >
                      {language === "hi" ? "पूर्ण स्क्रीन देखें" : "View Fullscreen"}
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-2 border-primary/20 bg-gradient-to-br from-card to-muted/30">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">
                  {language === "hi"
                    ? "हमारे यूट्यूब चैनल को सब्सक्राइब करें"
                    : "Subscribe to Our YouTube Channel"}
                </CardTitle>
                <CardDescription className="text-base">
                  {language === "hi"
                    ? "नियमित रूप से नई आध्यात्मिक वीडियो देखने के लिए"
                    : "To watch new spiritual videos regularly"}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <a href="https://www.youtube.com/@panditshreeprakash" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-secondary">
                    <Youtube className="w-5 h-5" />
                    {content[language].viewChannel}
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

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
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Videos;
