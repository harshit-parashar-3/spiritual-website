import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { BookOpen, Sparkles } from "lucide-react";

interface DashamahavidyaProps {
  language: "hi" | "en";
}

const Dashamahavidya = ({ language }: DashamahavidyaProps) => {
  const content = {
    hi: {
      title: "दशमहाविद्या साधना",
      subtitle: "दश महाविद्या की सम्पूर्ण जानकारी एवं साधना विधि",
      learnMore: "विस्तार से जानें",
      goddesses: [
        { name: "काली", desc: "समय और परिवर्तन की देवी" },
        { name: "तारा", desc: "तारक शक्ति की देवी" },
        { name: "त्रिपुरसुंदरी", desc: "सौंदर्य और श्री की देवी" },
        { name: "भुवनेश्वरी", desc: "विश्व की स्वामिनी" },
        { name: "छिन्नमस्ता", desc: "आत्म-त्याग की देवी" },
        { name: "भैरवी", desc: "भयंकर शक्ति की देवी" },
        { name: "धूमावती", desc: "विधवा देवी" },
        { name: "बगलामुखी", desc: "शत्रु-स्तम्भन की देवी" },
        { name: "मातंगी", desc: "ज्ञान और कला की देवी" },
        { name: "कमला", desc: "धन-समृद्धि की देवी" },
      ],
    },
    en: {
      title: "Dashamahavidya Sadhana",
      subtitle: "Complete information and sadhana methods of Ten Mahavidyas",
      learnMore: "Learn More",
      goddesses: [
        { name: "Kali", desc: "Goddess of Time & Change" },
        { name: "Tara", desc: "Goddess of Salvation" },
        { name: "Tripurasundari", desc: "Goddess of Beauty & Prosperity" },
        { name: "Bhuvaneshwari", desc: "Mistress of the Universe" },
        { name: "Chinnamasta", desc: "Goddess of Self-Sacrifice" },
        { name: "Bhairavi", desc: "Goddess of Fierce Power" },
        { name: "Dhumavati", desc: "The Widow Goddess" },
        { name: "Bagalamukhi", desc: "Goddess of Enemy Paralysis" },
        { name: "Matangi", desc: "Goddess of Knowledge & Arts" },
        { name: "Kamala", desc: "Goddess of Wealth & Fortune" },
      ],
    },
  };

  return (
    <section id="dashamahavidya" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {content[language].title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {content[language].goddesses.map((goddess, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card animate-fade-up text-center"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform animate-glow">
                  <Sparkles className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{goddess.name}</CardTitle>
                <CardDescription className="text-sm">{goddess.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-muted/30">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {language === "hi" ? "दशमहाविद्या साधना विशेषताएं" : "Dashamahavidya Sadhana Features"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    {language === "hi"
                      ? "प्रत्येक महाविद्या की सम्पूर्ण जानकारी"
                      : "Complete information about each Mahavidya"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    {language === "hi" ? "साधना विधि एवं मंत्र" : "Sadhana methods and mantras"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    {language === "hi"
                      ? "विशेष तंत्र साधना मार्गदर्शन"
                      : "Special Tantra sadhana guidance"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    {language === "hi"
                      ? "व्यक्तिगत दीक्षा एवं परामर्श"
                      : "Personal initiation and consultation"}
                  </span>
                </li>
              </ul>
              <div className="text-center pt-4">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-secondary">
                  <BookOpen className="w-5 h-5" />
                  {content[language].learnMore}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashamahavidya;
