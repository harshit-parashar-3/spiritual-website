interface FooterProps {
  language: "hi" | "en";
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    hi: {
      tagline: "आध्यात्मिक मार्गदर्शन के लिए विश्वसनीय",
      copyright: "सर्वाधिकार सुरक्षित",
    },
    en: {
      tagline: "Trusted for spiritual guidance",
      copyright: "All rights reserved",
    },
  };

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg">
              ॐ
            </div>
            <div className="flex flex-col py-1">
              <span className="font-bold text-lg leading-relaxed">
                {language === "hi" ? "सर्वसिद्धि श्री माँ पीतांबरा ज्योतिष एवं अनुष्ठान संस्थान" : "Sarvasiddhi Shri Maa Pitambara Jyotish Evam Anusthan Sansthan"}
              </span>
              <span className="text-xs opacity-80 leading-relaxed">{content[language].tagline}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-background/20" />

          {/* Copyright */}
          <p className="text-sm text-center opacity-80 leading-relaxed py-1">
            © 2025 {language === "hi" ? "सर्वसिद्धि श्री माँ पीतांबरा ज्योतिष एवं अनुष्ठान संस्थान" : "Sarvasiddhi Shri Maa Pitambara Jyotish Evam Anusthan Sansthan"}.{" "}
            {content[language].copyright}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
