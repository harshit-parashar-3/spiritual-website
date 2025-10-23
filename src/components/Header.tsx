import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Globe, Menu, X } from "lucide-react";

interface HeaderProps {
  language: "hi" | "en";
  onLanguageChange: (lang: "hi" | "en") => void;
}

const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = {
    hi: [
      { name: "मुख्य पृष्ठ", path: "/" },
      { name: "वीडियो", path: "/videos" },
      { name: "उत्पाद", path: "/products" },
      { name: "पूजा बुकिंग", path: "/puja-booking" },
      { name: "दशमहाविद्या", path: "/dashamahavidya" },
      { name: "आरती", path: "/aarti" },
      { name: "संपर्क", path: "/contact" },
    ],
    en: [
      { name: "Home", path: "/" },
      { name: "Videos", path: "/videos" },
      { name: "Products", path: "/products" },
      { name: "Puja Booking", path: "/puja-booking" },
      { name: "Dashamahavidya", path: "/dashamahavidya" },
      { name: "Aarti", path: "/aarti" },
      { name: "Contact", path: "/contact" },
    ],
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
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
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems[language].map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
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
                <Link
                  key={index}
                  to={item.path}
                  className={`font-medium py-2 transition-colors ${
                    location.pathname === item.path
                      ? "text-primary font-bold"
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
