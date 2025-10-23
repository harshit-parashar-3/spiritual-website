import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Phone, Image as ImageIcon, Clock, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PujaBooking = () => {
  const [language, setLanguage] = useState<"hi" | "en">("hi");

  const content = {
    hi: {
      title: "पूजा एवं अनुष्ठान बुकिंग",
      subtitle: "विशेष पूजा, अनुष्ठान एवं कथा के लिए संपर्क करें",
      bookNow: "अभी बुक करें",
      viewPhotos: "फोटो देखें",
      duration: "अवधि",
      popular: "लोकप्रिय",
      services: [
        {
          title: "श्रीमद्भागवत कथा",
          desc: "7 दिवसीय सम्पूर्ण भागवत कथा वाचन एवं प्रवचन",
          duration: "7 दिन",
          popular: true,
        },
        {
          title: "श्री राम कथा",
          desc: "9 दिवसीय रामायण कथा वाचन एवं राम चरित मानस",
          duration: "9 दिन",
          popular: true,
        },
        {
          title: "देवी भागवत कथा",
          desc: "7 दिवसीय देवी महात्म्य एवं शक्ति उपासना",
          duration: "7 दिन",
          popular: false,
        },
        {
          title: "शिव महापुराण कथा",
          desc: "विशेष शिव कथा प्रवचन एवं शिव महिमा",
          duration: "7 दिन",
          popular: false,
        },
        {
          title: "सुंदरकांड पाठ",
          desc: "विशेष सुंदरकांड पाठ एवं हनुमान चालीसा",
          duration: "1 दिन",
          popular: true,
        },
        {
          title: "सत्यनारायण पूजा",
          desc: "विशेष सत्यनारायण व्रत कथा एवं पूजा",
          duration: "1 दिन",
          popular: false,
        },
        {
          title: "महामृत्युंजय जप",
          desc: "1,25,000 महामृत्युंजय मंत्र जप अनुष्ठान",
          duration: "11 दिन",
          popular: false,
        },
        {
          title: "गायत्री महायज्ञ",
          desc: "2,40,000 गायत्री मंत्र जप एवं यज्ञ",
          duration: "13 दिन",
          popular: false,
        },
        {
          title: "नवचंडी यज्ञ",
          desc: "विशेष चंडी पाठ एवं यज्ञ, नवरात्रि विशेष",
          duration: "9 दिन",
          popular: true,
        },
        {
          title: "रुद्राभिषेक",
          desc: "विशेष रुद्राभिषेक एवं शिव पूजा",
          duration: "1 दिन",
          popular: false,
        },
        {
          title: "लक्ष्मी पूजा",
          desc: "धन-समृद्धि के लिए विशेष लक्ष्मी पूजा",
          duration: "1 दिन",
          popular: false,
        },
        {
          title: "गृह प्रवेश पूजा",
          desc: "नए घर में प्रवेश की विधिवत पूजा",
          duration: "1 दिन",
          popular: false,
        },
      ],
      gallery: "अनुष्ठान फोटो गैलरी",
      contactInfo: "संपर्क जानकारी",
    },
    en: {
      title: "Puja & Anusthan Booking",
      subtitle: "Contact us for special Puja, Anusthan & Katha services",
      bookNow: "Book Now",
      viewPhotos: "View Photos",
      duration: "Duration",
      popular: "Popular",
      services: [
        {
          title: "Shrimad Bhagwat Katha",
          desc: "7-day complete Bhagwat Katha recitation & discourse",
          duration: "7 Days",
          popular: true,
        },
        {
          title: "Shri Ram Katha",
          desc: "9-day Ramayana recitation & Ram Charit Manas",
          duration: "9 Days",
          popular: true,
        },
        {
          title: "Devi Bhagwat Katha",
          desc: "7-day Goddess glory & Shakti worship",
          duration: "7 Days",
          popular: false,
        },
        {
          title: "Shiv Mahapuran Katha",
          desc: "Special Shiva discourse & glory",
          duration: "7 Days",
          popular: false,
        },
        {
          title: "Sunderkand Path",
          desc: "Special Sunderkand recitation & Hanuman Chalisa",
          duration: "1 Day",
          popular: true,
        },
        {
          title: "Satyanarayan Puja",
          desc: "Special Satyanarayan Vrat Katha & Puja",
          duration: "1 Day",
          popular: false,
        },
        {
          title: "Mahamrityunjay Japa",
          desc: "1,25,000 Mahamrityunjay mantra Japa Anusthan",
          duration: "11 Days",
          popular: false,
        },
        {
          title: "Gayatri Mahayagya",
          desc: "2,40,000 Gayatri mantra Japa & Yagya",
          duration: "13 Days",
          popular: false,
        },
        {
          title: "Navchandi Yagya",
          desc: "Special Chandi Path & Yagya, Navratri special",
          duration: "9 Days",
          popular: true,
        },
        {
          title: "Rudrabhishek",
          desc: "Special Rudrabhishek & Shiva worship",
          duration: "1 Day",
          popular: false,
        },
        {
          title: "Lakshmi Puja",
          desc: "Special Lakshmi Puja for wealth & prosperity",
          duration: "1 Day",
          popular: false,
        },
        {
          title: "Griha Pravesh Puja",
          desc: "Ceremonial Puja for new home entry",
          duration: "1 Day",
          popular: false,
        },
      ],
      gallery: "Anusthan Photo Gallery",
      contactInfo: "Contact Information",
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
                <Calendar className="w-10 h-10" />
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

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content[language].services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card animate-fade-up relative"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  {service.popular && (
                    <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-primary to-secondary">
                      {content[language].popular}
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Calendar className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="default" size="sm" className="flex-1 gap-2">
                        <Phone className="w-4 h-4" />
                        {content[language].bookNow}
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 gap-2">
                        <ImageIcon className="w-4 h-4" />
                        {content[language].viewPhotos}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {content[language].gallery}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
                >
                  <ImageIcon className="w-12 h-12 text-primary" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-2 border-primary/20 bg-gradient-to-br from-card to-muted/30">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">{content[language].contactInfo}</CardTitle>
                <CardDescription className="text-base">
                  {language === "hi"
                    ? "पूजा बुकिंग एवं विस्तृत जानकारी के लिए"
                    : "For Puja booking and detailed information"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">+91 98765 43210</p>
                    <p className="text-sm text-muted-foreground">
                      {language === "hi" ? "कॉल या व्हाट्सएप" : "Call or WhatsApp"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">
                      {language === "hi" ? "वाराणसी, उत्तर प्रदेश" : "Varanasi, Uttar Pradesh"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {language === "hi" ? "भारत के सभी क्षेत्रों में सेवा उपलब्ध" : "Services available across India"}
                    </p>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-secondary">
                    <Phone className="w-5 h-5" />
                    {content[language].bookNow}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer language={language} />
    </div>
  );
};

export default PujaBooking;
