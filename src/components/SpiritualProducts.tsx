import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCart, Sparkles } from "lucide-react";

interface SpiritualProductsProps {
  language: "hi" | "en";
}

const SpiritualProducts = ({ language }: SpiritualProductsProps) => {
  const content = {
    hi: {
      title: "अभिमंत्रित आध्यात्मिक उत्पाद",
      subtitle: "विशेष पूजित एवं सिद्ध यंत्र, माला, रुद्राक्ष, रत्न, शिवलिंग एवं प्रतिमाएं",
      viewAll: "सभी उत्पाद देखें",
      addToCart: "संपर्क करें",
      products: [
        {
          name: "श्री यंत्र",
          desc: "विशेष अभिमंत्रित श्री यंत्र",
          price: "₹ 2,100",
        },
        {
          name: "रुद्राक्ष माला",
          desc: "प्राकृतिक रुद्राक्ष की माला",
          price: "₹ 1,500",
        },
        {
          name: "नवरत्न",
          desc: "प्रमाणित नवरत्न",
          price: "₹ 5,100",
        },
        {
          name: "शिवलिंग",
          desc: "नर्मदेश्वर शिवलिंग",
          price: "₹ 3,100",
        },
        {
          name: "तुलसी माला",
          desc: "शुद्ध तुलसी की माला",
          price: "₹ 500",
        },
        {
          name: "गणेश प्रतिमा",
          desc: "पंचधातु गणेश जी",
          price: "₹ 2,500",
        },
      ],
    },
    en: {
      title: "Consecrated Spiritual Products",
      subtitle: "Specially worshipped Yantra, Mala, Rudraksh, Gemstones, Shivling & Idols",
      viewAll: "View All Products",
      addToCart: "Contact Us",
      products: [
        {
          name: "Shree Yantra",
          desc: "Specially consecrated Shree Yantra",
          price: "₹ 2,100",
        },
        {
          name: "Rudraksh Mala",
          desc: "Natural Rudraksh Beads Mala",
          price: "₹ 1,500",
        },
        {
          name: "Navaratna",
          desc: "Certified Nine Gemstones",
          price: "₹ 5,100",
        },
        {
          name: "Shivling",
          desc: "Narmadeshwar Shivling",
          price: "₹ 3,100",
        },
        {
          name: "Tulsi Mala",
          desc: "Pure Tulsi Beads Mala",
          price: "₹ 500",
        },
        {
          name: "Ganesh Idol",
          desc: "Panchadhatu Ganesh Ji",
          price: "₹ 2,500",
        },
      ],
    },
  };

  return (
    <section id="products" className="py-20 bg-background">
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
          {content[language].products.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border animate-fade-up overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription>{product.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">{product.price}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  {content[language].addToCart}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-secondary">
            {content[language].viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpiritualProducts;
