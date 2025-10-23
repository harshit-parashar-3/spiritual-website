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
            <div className="flex flex-col">
              <span className="font-bold text-lg">
                {language === "hi" ? "पंडित श्री प्रकाश" : "Pandit Shree Prakash"}
              </span>
              <span className="text-xs opacity-80">{content[language].tagline}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-background/20" />

          {/* Copyright */}
          <p className="text-sm text-center opacity-80">
            © 2025 {language === "hi" ? "पंडित श्री प्रकाश" : "Pandit Shree Prakash"}.{" "}
            {content[language].copyright}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
