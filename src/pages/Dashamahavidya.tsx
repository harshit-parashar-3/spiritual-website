import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles, Phone, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Dashamahavidya = () => {
  const [language, setLanguage] = useState<"hi" | "en">("hi");

  const content = {
    hi: {
      title: "दशमहाविद्या साधना",
      subtitle: "दश महाविद्या की सम्पूर्ण जानकारी एवं साधना विधि",
      learnMore: "विस्तार से जानें",
      contact: "परामर्श के लिए संपर्क करें",
      goddesses: [
        {
          name: "काली",
          desc: "समय और परिवर्तन की देवी",
          detail: "काली महाविद्या समस्त भय और अज्ञान का नाश करती हैं। ये समय की देवी हैं और सृष्टि के संहार का प्रतीक हैं।",
        },
        {
          name: "तारा",
          desc: "तारक शक्ति की देवी",
          detail: "तारा महाविद्या उद्धार की देवी हैं। ये भक्तों को संसार सागर से पार करने की शक्ति प्रदान करती हैं।",
        },
        {
          name: "त्रिपुरसुंदरी (षोडशी)",
          desc: "सौंदर्य और श्री की देवी",
          detail: "त्रिपुरसुंदरी परम सुंदरी हैं और समस्त सौंदर्य की अधिष्ठात्री देवी हैं। श्री विद्या साधना में इनका विशेष महत्व है।",
        },
        {
          name: "भुवनेश्वरी",
          desc: "विश्व की स्वामिनी",
          detail: "भुवनेश्वरी संपूर्ण ब्रह्मांड की स्वामिनी हैं। ये सृष्टि की रचना और पालन करने वाली देवी हैं।",
        },
        {
          name: "छिन्नमस्ता",
          desc: "आत्म-त्याग की देवी",
          detail: "छिन्नमस्ता अत्यंत प्रचंड और तेजस्वी देवी हैं। ये आत्म-बलिदान और परोपकार की प्रतीक हैं।",
        },
        {
          name: "त्रिपुरभैरवी",
          desc: "भयंकर शक्ति की देवी",
          detail: "भैरवी महाविद्या प्रचंड शक्ति की देवी हैं। ये शत्रुओं का नाश और भक्तों की रक्षा करती हैं।",
        },
        {
          name: "धूमावती",
          desc: "विधवा देवी, वैराग्य की प्रतीक",
          detail: "धूमावती वैराग्य और विरक्ति की देवी हैं। ये संसार की नश्वरता का बोध कराती हैं।",
        },
        {
          name: "बगलामुखी",
          desc: "शत्रु-स्तम्भन की देवी",
          detail: "बगलामुखी शत्रुओं को स्तब्ध करने वाली देवी हैं। ये वाक् सिद्धि और विजय प्रदान करती हैं।",
        },
        {
          name: "मातंगी",
          desc: "ज्ञान और कला की देवी",
          detail: "मातंगी सरस्वती के तांत्रिक स्वरूप हैं। ये ज्ञान, संगीत और कला की अधिष्ठात्री देवी हैं।",
        },
        {
          name: "कमला",
          desc: "धन-समृद्धि की देवी",
          detail: "कमला लक्ष्मी का तांत्रिक स्वरूप हैं। ये धन, वैभव और समृद्धि प्रदान करने वाली देवी हैं।",
        },
      ],
      features: [
        "प्रत्येक महाविद्या की सम्पूर्ण जानकारी एवं महत्व",
        "साधना विधि, मंत्र, यंत्र एवं तंत्र",
        "विशेष तंत्र साधना में दीक्षा एवं मार्गदर्शन",
        "व्यक्तिगत परामर्श एवं जन्मपत्री विश्लेषण",
        "साधना सामग्री एवं सिद्ध यंत्रों की व्यवस्था",
      ],
      importance: "महत्व",
    },
    en: {
      title: "Dashamahavidya Sadhana",
      subtitle: "Complete information and sadhana methods of Ten Mahavidyas",
      learnMore: "Learn More",
      contact: "Contact for Consultation",
      goddesses: [
        {
          name: "Kali",
          desc: "Goddess of Time & Change",
          detail: "Kali Mahavidya destroys all fear and ignorance. She is the goddess of time and represents cosmic dissolution.",
        },
        {
          name: "Tara",
          desc: "Goddess of Salvation",
          detail: "Tara Mahavidya is the goddess of salvation. She grants power to ferry devotees across the ocean of worldly existence.",
        },
        {
          name: "Tripurasundari (Shodashi)",
          desc: "Goddess of Beauty & Prosperity",
          detail: "Tripurasundari is supremely beautiful and presides over all beauty. She holds special significance in Sri Vidya sadhana.",
        },
        {
          name: "Bhuvaneshwari",
          desc: "Mistress of the Universe",
          detail: "Bhuvaneshwari is the sovereign of the entire cosmos. She is the goddess who creates and maintains the universe.",
        },
        {
          name: "Chinnamasta",
          desc: "Goddess of Self-Sacrifice",
          detail: "Chinnamasta is an extremely fierce and radiant goddess. She symbolizes self-sacrifice and altruism.",
        },
        {
          name: "Tripura Bhairavi",
          desc: "Goddess of Fierce Power",
          detail: "Bhairavi Mahavidya is the goddess of intense power. She destroys enemies and protects devotees.",
        },
        {
          name: "Dhumavati",
          desc: "The Widow Goddess, Symbol of Detachment",
          detail: "Dhumavati is the goddess of renunciation and detachment. She teaches the impermanence of the world.",
        },
        {
          name: "Bagalamukhi",
          desc: "Goddess of Enemy Paralysis",
          detail: "Bagalamukhi paralyzes enemies. She grants speech perfection and victory.",
        },
        {
          name: "Matangi",
          desc: "Goddess of Knowledge & Arts",
          detail: "Matangi is the tantric form of Saraswati. She presides over knowledge, music, and arts.",
        },
        {
          name: "Kamala",
          desc: "Goddess of Wealth & Fortune",
          detail: "Kamala is the tantric form of Lakshmi. She bestows wealth, splendor, and prosperity.",
        },
      ],
      features: [
        "Complete information and significance of each Mahavidya",
        "Sadhana methods, Mantras, Yantras & Tantra",
        "Initiation and guidance in special Tantra sadhana",
        "Personal consultation and horoscope analysis",
        "Arrangement of sadhana materials and Siddh Yantras",
      ],
      importance: "Importance",
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
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground mb-4 animate-glow">
                <Sparkles className="w-10 h-10" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {content[language].title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {content[language].subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Goddesses Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
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

            {/* Detailed Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content[language].goddesses.map((goddess, index) => (
                <Card
                  key={index}
                  className="border-border bg-card hover:shadow-lg transition-all animate-fade-up"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <Star className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{goddess.name}</CardTitle>
                        <CardDescription>{goddess.desc}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{goddess.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-muted/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl">
                    {language === "hi"
                      ? "दशमहाविद्या साधना विशेषताएं"
                      : "Dashamahavidya Sadhana Features"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {content[language].features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-1">
                          <Star className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center pt-6 space-y-4">
                    <Link to="/contact">
                      <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-secondary">
                        <BookOpen className="w-5 h-5" />
                        {content[language].learnMore}
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button size="lg" variant="outline" className="gap-2 ml-4">
                        <Phone className="w-5 h-5" />
                        {content[language].contact}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-2 border-primary/20 bg-gradient-to-br from-card to-muted/30">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">
                  {language === "hi"
                    ? "व्यक्तिगत दीक्षा एवं मार्गदर्शन"
                    : "Personal Initiation & Guidance"}
                </CardTitle>
                <CardDescription className="text-base">
                  {language === "hi"
                    ? "दशमहाविद्या साधना के लिए विशेष दीक्षा एवं व्यक्तिगत परामर्श"
                    : "Special initiation and personal consultation for Dashamahavidya Sadhana"}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-secondary">
                    <Phone className="w-5 h-5" />
                    {content[language].contact}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Dashamahavidya;
