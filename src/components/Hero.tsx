import { Button } from "./ui/button";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  language: "hi" | "en";
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    hi: {
      title: "सर्वसिद्धि श्री माँ पीतांबरा ज्योतिष एवं अनुष्ठान संस्थान",
      subtitle: "आध्यात्मिक मार्गदर्शन एवं कथा वाचन",
      description:
        "श्रीमद्भागवत कथा, श्री राम कथा, श्री देवी भागवत कथा, श्री शिव महापुराण कथा एवं आध्यात्मिक प्रवचन",
      cta1: "पूजा बुकिंग करें",
      cta2: "संपर्क करें",
    },
    en: {
      title: "Sarvasiddhi Shri Maa Pitambara Jyotish Evam Anusthan Sansthan",
      subtitle: "Spiritual Guidance & Katha Recitation",
      description:
        "Shrimad Bhagwat Katha, Shri Ram Katha, Shri Devi Bhagwat Katha, Shri Shiv Mahapuran Katha & Spiritual Discourses",
      cta1: "Book Puja",
      cta2: "Contact Us",
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero-background.svg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          {/* Om Symbol */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground text-4xl font-bold shadow-lg animate-glow">
            ॐ
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-relaxed py-2">
            {content[language].title}
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-semibold text-foreground leading-relaxed">
            {content[language].subtitle}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {content[language].description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link to="/puja-booking">
              <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all">
                <Phone className="w-5 h-5" />
                {content[language].cta1}
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="gap-2">
                <Mail className="w-5 h-5" />
                {content[language].cta2}
              </Button>
            </Link>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center pt-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="mx-4 text-2xl text-primary">❀</div>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
