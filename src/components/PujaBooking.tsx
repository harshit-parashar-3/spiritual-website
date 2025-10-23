import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, Phone, Image as ImageIcon } from "lucide-react";

interface PujaBookingProps {
  language: "hi" | "en";
}

const PujaBooking = ({ language }: PujaBookingProps) => {
  const content = {
    hi: {
      title: "पूजा एवं अनुष्ठान बुकिंग",
      subtitle: "विशेष पूजा, अनुष्ठान एवं कथा के लिए संपर्क करें",
      bookNow: "अभी बुक करें",
      viewPhotos: "फोटो देखें",
      services: [
        {
          title: "श्रीमद्भागवत कथा",
          desc: "7 दिवसीय सम्पूर्ण कथा",
          duration: "7 दिन",
        },
        {
          title: "श्री राम कथा",
          desc: "9 दिवसीय राम कथा वाचन",
          duration: "9 दिन",
        },
        {
          title: "देवी भागवत कथा",
          desc: "7 दिवसीय देवी महात्म्य",
          duration: "7 दिन",
        },
        {
          title: "शिव महापुराण कथा",
          desc: "विशेष शिव कथा प्रवचन",
          duration: "7 दिन",
        },
        {
          title: "महामृत्युंजय जप",
          desc: "1,25,000 जप अनुष्ठान",
          duration: "11 दिन",
        },
        {
          title: "नवचंडी यज्ञ",
          desc: "विशेष चंडी पाठ एवं यज्ञ",
          duration: "9 दिन",
        },
      ],
    },
    en: {
      title: "Puja & Anusthan Booking",
      subtitle: "Contact us for special Puja, Anusthan & Katha services",
      bookNow: "Book Now",
      viewPhotos: "View Photos",
      services: [
        {
          title: "Shrimad Bhagwat Katha",
          desc: "7-day complete Katha",
          duration: "7 Days",
        },
        {
          title: "Shri Ram Katha",
          desc: "9-day Ram Katha recitation",
          duration: "9 Days",
        },
        {
          title: "Devi Bhagwat Katha",
          desc: "7-day Goddess glory discourse",
          duration: "7 Days",
        },
        {
          title: "Shiv Mahapuran Katha",
          desc: "Special Shiva discourse",
          duration: "7 Days",
        },
        {
          title: "Mahamrityunjay Japa",
          desc: "1,25,000 mantra Anusthan",
          duration: "11 Days",
        },
        {
          title: "Navchandi Yagya",
          desc: "Special Chandi path & Yagya",
          duration: "9 Days",
        },
      ],
    },
  };

  return (
    <section id="puja-booking" className="py-20 bg-muted/30">
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
          {content[language].services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.desc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
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
  );
};

export default PujaBooking;
