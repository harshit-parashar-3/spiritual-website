import { useState } from "react";
import { Button } from "./ui/button";
import { Globe, Menu, X } from "lucide-react";

interface HeaderProps {
  language: "hi" | "en";
  onLanguageChange: (lang: "hi" | "en") => void;
}

const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = {
    hi: ["मुख्य पृष्ठ", "वीडियो", "उत्पाद", "पूजा बुकिंग", "दशमहाविद्या", "संपर्क"],
    en: ["Home", "Videos", "Products", "Puja Booking", "Dashamahavidya", "Contact"],
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-xl">
              ॐ
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground">
                {language === "hi" ? "पंडित श्री प्रकाश" : "Pandit Shree Prakash"}
              </span>
              <span className="text-xs text-muted-foreground">
                {language === "hi" ? "आध्यात्मिक सेवाएं" : "Spiritual Services"}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems[language].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onLanguageChange(language === "hi" ? "en" : "hi")}
              className="gap-2"
            >
              <Globe className="w-4 h-4" />
              {language === "hi" ? "EN" : "हि"}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems[language].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
