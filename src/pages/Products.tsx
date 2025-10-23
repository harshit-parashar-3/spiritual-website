import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Sparkles, Phone, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Products = () => {
  const [language, setLanguage] = useState<"hi" | "en">("hi");

  const content = {
    hi: {
      title: "अभिमंत्रित आध्यात्मिक उत्पाद",
      subtitle: "विशेष पूजित एवं सिद्ध यंत्र, माला, रुद्राक्ष, रत्न, शिवलिंग एवं प्रतिमाएं",
      contact: "संपर्क करें",
      featured: "विशेष",
      products: [
        {
          name: "श्री यंत्र",
          desc: "विशेष अभिमंत्रित पंचधातु श्री यंत्र, धन-समृद्धि के लिए",
          price: "₹ 2,100",
          featured: true,
          image: "/images/products/yantras.svg",
        },
        {
          name: "महामृत्युंजय यंत्र",
          desc: "स्वास्थ्य एवं दीर्घायु के लिए सिद्ध यंत्र",
          price: "₹ 1,800",
          featured: false,
          image: "/images/products/yantras.svg",
        },
        {
          name: "रुद्राक्ष माला (5 मुखी)",
          desc: "प्राकृतिक 108 मनके रुद्राक्ष की माला",
          price: "₹ 1,500",
          featured: false,
          image: "/images/products/rudraksha.svg",
        },
        {
          name: "रुद्राक्ष (एकमुखी)",
          desc: "दुर्लभ एकमुखी रुद्राक्ष, शिव का आशीर्वाद",
          price: "₹ 11,000",
          featured: true,
          image: "/images/products/rudraksha.svg",
        },
        {
          name: "नवरत्न अंगूठी",
          desc: "प्रमाणित नवरत्न की शुद्ध चांदी की अंगूठी",
          price: "₹ 5,100",
          featured: false,
          image: "/images/products/yantras.svg",
        },
        {
          name: "माणिक रत्न",
          desc: "प्राकृतिक माणिक रत्न, सूर्य के लिए",
          price: "₹ 8,500",
          featured: false,
          image: "/images/products/yantras.svg",
        },
        {
          name: "नर्मदेश्वर शिवलिंग",
          desc: "नर्मदा नदी से प्राप्त प्राकृतिक शिवलिंग",
          price: "₹ 3,100",
          featured: true,
          image: "/images/products/puja-items.svg",
        },
        {
          name: "स्फटिक शिवलिंग",
          desc: "शुद्ध स्फटिक का पूजित शिवलिंग",
          price: "₹ 2,500",
          featured: false,
          image: "/images/products/puja-items.svg",
        },
        {
          name: "तुलसी माला",
          desc: "शुद्ध वृंदावन तुलसी की 108 मनके माला",
          price: "₹ 500",
          featured: false,
          image: "/images/products/rudraksha.svg",
        },
        {
          name: "चंदन माला",
          desc: "प्राकृतिक चंदन की सुगंधित माला",
          price: "₹ 1,200",
          featured: false,
          image: "/images/products/rudraksha.svg",
        },
        {
          name: "गणेश प्रतिमा (पंचधातु)",
          desc: "पंच धातु से निर्मित गणेश जी की मूर्ति",
          price: "₹ 2,500",
          featured: false,
          image: "/images/products/puja-items.svg",
        },
        {
          name: "लक्ष्मी नारायण युगल",
          desc: "पीतल की लक्ष्मी नारायण प्रतिमा",
          price: "₹ 3,800",
          featured: true,
          image: "/images/products/puja-items.svg",
        },
        {
          name: "हनुमान जी प्रतिमा",
          desc: "पंचधातु हनुमान जी की वीर मूर्ति",
          price: "₹ 2,200",
          featured: false,
          image: "/images/products/puja-items.svg",
        },
        {
          name: "दुर्गा माता प्रतिमा",
          desc: "अष्टभुजा दुर्गा माता की सुंदर प्रतिमा",
          price: "₹ 3,500",
          featured: false,
          image: "/images/products/puja-items.svg",
        },
        {
          name: "कुबेर यंत्र",
          desc: "धन प्राप्ति के लिए विशेष सिद्ध यंत्र",
          price: "₹ 1,600",
          featured: false,
          image: "/images/products/yantras.svg",
        },
      ],
    },
    en: {
      title: "Consecrated Spiritual Products",
      subtitle: "Specially worshipped Yantra, Mala, Rudraksh, Gemstones, Shivling & Idols",
      contact: "Contact Us",
      featured: "Featured",
      products: [
        {
          name: "Shree Yantra",
          desc: "Specially consecrated Panchadhatu Shree Yantra for wealth & prosperity",
          price: "₹ 2,100",
          featured: true,
          image: "/images/products/yantras.svg",
        },
        {
          name: "Mahamrityunjay Yantra",
          desc: "Siddh Yantra for health & longevity",
          price: "₹ 1,800",
          featured: false,
          image: "/images/products/yantras.svg",
        },
        {
          name: "Rudraksh Mala (5 Mukhi)",
          desc: "Natural 108 beads Rudraksh Mala",
          price: "₹ 1,500",
          featured: false,
          image: "/images/products/rudraksha.svg",
        },
        {
          name: "Rudraksh (Ek Mukhi)",
          desc: "Rare one-faced Rudraksh, blessing of Shiva",
          price: "₹ 11,000",
          featured: true,
          image: "/images/products/rudraksha.svg",
        },
        {
          name: "Navaratna Ring",
          desc: "Certified nine gemstones in pure silver ring",
          price: "₹ 5,100",
          featured: false,
          image: "/images/products/yantras.svg",
        },
        {
          name: "Ruby Gemstone",
          desc: "Natural Ruby gemstone for Sun",
          price: "₹ 8,500",
          featured: false,
          image: "/images/products/yantras.svg",
        },
        {
          name: "Narmadeshwar Shivling",
          desc: "Natural Shivling from Narmada river",
          price: "₹ 3,100",
          featured: true,
          image: "/images/products/puja-items.svg",
        },
        {
          name: "Crystal Shivling",
          desc: "Pure crystal consecrated Shivling",
          price: "₹ 2,500",
          featured: false,
          image: "/images/products/puja-items.svg",
        },
        {
          name: "Tulsi Mala",
          desc: "Pure Vrindavan Tulsi 108 beads Mala",
          price: "₹ 500",
          featured: false,
          image: "/images/products/rudraksha.svg",
        },
        {
          name: "Sandalwood Mala",
          desc: "Natural fragrant sandalwood Mala",
          price: "₹ 1,200",
          featured: false,
          image: "/images/products/rudraksha.svg",
        },
        {
          name: "Ganesh Idol (Panchadhatu)",
          desc: "Ganesh Ji idol made from five metals",
          price: "₹ 2,500",
          featured: false,
          image: "/images/products/puja-items.svg",
        },
        {
          name: "Lakshmi Narayan Pair",
          desc: "Brass Lakshmi Narayan idol",
          price: "₹ 3,800",
          featured: true,
          image: "/images/products/puja-items.svg",
        },
        {
          name: "Hanuman Ji Idol",
          desc: "Panchadhatu heroic Hanuman Ji idol",
          price: "₹ 2,200",
          featured: false,
          image: "/images/products/puja-items.svg",
        },
        {
          name: "Durga Mata Idol",
          desc: "Beautiful Ashtabhuja Durga Mata idol",
          price: "₹ 3,500",
          featured: false,
          image: "/images/products/puja-items.svg",
        },
        {
          name: "Kuber Yantra",
          desc: "Special Siddh Yantra for wealth acquisition",
          price: "₹ 1,600",
          featured: false,
          image: "/images/products/yantras.svg",
        },
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

        {/* Products Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content[language].products.map((product, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border animate-fade-up overflow-hidden relative"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  {product.featured && (
                    <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-primary to-secondary">
                      <Star className="w-3 h-3 mr-1" />
                      {content[language].featured}
                    </Badge>
                  )}
                  <div className="h-48 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <CardDescription>{product.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary">{product.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Link to="/contact" className="w-full">
                      <Button variant="outline" className="w-full gap-2">
                        <Phone className="w-4 h-4" />
                        {content[language].contact}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-2 border-primary/20 bg-gradient-to-br from-card to-muted/30">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">
                  {language === "hi"
                    ? "विशेष ऑर्डर के लिए संपर्क करें"
                    : "Contact Us for Special Orders"}
                </CardTitle>
                <CardDescription className="text-base">
                  {language === "hi"
                    ? "सभी उत्पाद विशेष पूजन के बाद भेजे जाते हैं"
                    : "All products are sent after special consecration"}
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

export default Products;
