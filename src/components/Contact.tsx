import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Phone, Mail, MapPin, Facebook, Youtube, Instagram } from "lucide-react";

interface ContactProps {
  language: "hi" | "en";
}

const Contact = ({ language }: ContactProps) => {
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
    },
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {content[language].title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
              <Button className="w-full gap-2">
                <Phone className="w-4 h-4" />
                {content[language].callNow}
              </Button>
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
              <Button className="w-full gap-2">
                <Mail className="w-4 h-4" />
                {content[language].sendEmail}
              </Button>
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
              <p className="text-muted-foreground">
                {language === "hi"
                  ? "वाराणसी, उत्तर प्रदेश, भारत"
                  : "Varanasi, Uttar Pradesh, India"}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-xl mx-auto">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-muted/30">
            <CardHeader>
              <CardTitle className="text-center">{content[language].followUs}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Youtube className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
