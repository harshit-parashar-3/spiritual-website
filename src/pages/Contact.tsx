import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Youtube, Instagram, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const [language, setLanguage] = useState<"hi" | "en">("hi");

  const content = {
    hi: {
      title: "संपर्क करें",
      subtitle: "कथा, पूजा बुकिंग एवं आध्यात्मिक परामर्श के लिए संपर्क करें",
      phone: "फोन",
      email: "ईमेल",
      address: "पता",
      followUs: "हमें फॉलो करें",
      callNow: "अभी कॉल करें",
      sendEmail: "ईमेल भेजें",
      whatsapp: "व्हाट्सएप",
      availability: "उपलब्धता",
      services: "सेवाएं",
      servicesOffered: [
        "श्रीमद्भागवत कथा, राम कथा, देवी भागवत कथा",
        "शिव महापुराण कथा एवं अन्य पौराणिक कथाएं",
        "विभिन्न पूजा, अनुष्ठान एवं यज्ञ",
        "दशमहाविद्या साधना एवं तंत्र दीक्षा",
        "ज्योतिष परामर्श एवं उपाय",
        "अभिमंत्रित यंत्र, माला, रुद्राक्ष, रत्न",
      ],
    },
    en: {
      title: "Contact Us",
      subtitle: "Get in touch for Katha, Puja booking & spiritual consultation",
      phone: "Phone",
      email: "Email",
      address: "Address",
      followUs: "Follow Us",
      callNow: "Call Now",
      sendEmail: "Send Email",
      whatsapp: "WhatsApp",
      availability: "Availability",
      services: "Services",
      servicesOffered: [
        "Shrimad Bhagwat Katha, Ram Katha, Devi Bhagwat Katha",
        "Shiv Mahapuran Katha and other Puranic stories",
        "Various Puja, Anusthan and Yagya services",
        "Dashamahavidya Sadhana and Tantra initiation",
        "Astrology consultation and remedies",
        "Consecrated Yantra, Mala, Rudraksh, Gemstones",
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
                <Phone className="w-10 h-10" />
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

        {/* Contact Cards */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-xl transition-all duration-300 border-border bg-card animate-fade-up">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle>{content[language].phone}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <a href="tel:+919876543210" className="block text-lg font-semibold text-primary hover:underline">
                      +91 98765 43210
                    </a>
                    <a href="tel:+919876543211" className="block text-lg font-semibold text-primary hover:underline">
                      +91 98765 43211
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <a href="tel:+919876543210" className="flex-1">
                      <Button className="w-full gap-2">
                        <Phone className="w-4 h-4" />
                        {content[language].callNow}
                      </Button>
                    </a>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full gap-2">
                        <MessageCircle className="w-4 h-4" />
                        {content[language].whatsapp}
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-border bg-card animate-fade-up" style={{ animationDelay: "100ms" }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle>{content[language].email}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="mailto:panditshreeprakash@example.com"
                    className="block text-lg font-semibold text-primary hover:underline break-all"
                  >
                    panditshreeprakash@example.com
                  </a>
                  <a href="mailto:panditshreeprakash@example.com" className="w-full">
                    <Button className="w-full gap-2">
                      <Mail className="w-4 h-4" />
                      {content[language].sendEmail}
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-border bg-card animate-fade-up" style={{ animationDelay: "200ms" }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle>{content[language].address}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">
                    {language === "hi"
                      ? "वाराणसी, उत्तर प्रदेश, भारत"
                      : "Varanasi, Uttar Pradesh, India"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {language === "hi"
                      ? "भारत के सभी क्षेत्रों में सेवा उपलब्ध"
                      : "Services available across India"}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Services Section */}
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-muted/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl">{content[language].services}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {content[language].servicesOffered.map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-primary-foreground text-xs">✓</span>
                        </div>
                        <span className="text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Social Media */}
            <div className="max-w-xl mx-auto">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-muted/30">
                <CardHeader>
                  <CardTitle className="text-center">{content[language].followUs}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center gap-4">
                    <a href="https://www.youtube.com/@panditshreeprakash" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors w-14 h-14">
                        <Youtube className="w-6 h-6" />
                      </Button>
                    </a>
                    <a href="https://www.facebook.com/panditshreeprakash" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors w-14 h-14">
                        <Facebook className="w-6 h-6" />
                      </Button>
                    </a>
                    <a href="https://www.instagram.com/panditshreeprakash" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors w-14 h-14">
                        <Instagram className="w-6 h-6" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Availability Info */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-2 border-primary/20 bg-gradient-to-br from-card to-muted/30">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">{content[language].availability}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-lg text-muted-foreground">
                  {language === "hi"
                    ? "हम प्रतिदिन सुबह 6:00 बजे से रात 9:00 बजे तक उपलब्ध हैं"
                    : "We are available daily from 6:00 AM to 9:00 PM"}
                </p>
                <p className="text-muted-foreground">
                  {language === "hi"
                    ? "कृपया पूजा बुकिंग के लिए कम से कम 15 दिन पहले संपर्क करें"
                    : "Please contact at least 15 days in advance for Puja booking"}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Contact;
