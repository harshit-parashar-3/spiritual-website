import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Music, Video, ChevronDown, ChevronUp, Youtube, BookOpen } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Aarti = () => {
  const [language, setLanguage] = useState<"hi" | "en">("hi");
  const [expandedAarti, setExpandedAarti] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Reset expanded aarti when language changes
  const handleLanguageChange = (newLang: "hi" | "en") => {
    setExpandedAarti(null);
    setSelectedVideo(null);
    setLanguage(newLang);
  };

  const content = {
    hi: {
      title: "आरती संग्रह",
      subtitle: "विभिन्न देवी-देवताओं की आरती - पाठ एवं वीडियो",
      readText: "आरती पढ़ें",
      watchVideo: "वीडियो देखें",
      hideText: "छिपाएं",
      popular: "लोकप्रिय",
      aartis: [
        {
          id: "vishnu-aarti",
          title: "ॐ जय जगदीश हरे (विष्णु आरती)",
          category: "विष्णु जी",
          popular: true,
          text: `ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे।
भक्त जनों के संकट, दास जनों के संकट, क्षण में दूर करे॥
ॐ जय जगदीश हरे॥

जो ध्यावे फल पावे, दुःख बिनसे मन का।
स्वामी दुःख बिनसे मन का।
सुख संपति घर आवे, सुख संपति घर आवे, कष्ट मिटे तन का॥
ॐ जय जगदीश हरे॥

मात पिता तुम मेरे, शरण गहूं मैं किसकी।
स्वामी शरण गहूं मैं किसकी।
तुम बिन और न दूजा, तुम बिन और न दूजा, आस करूं मैं जिसकी॥
ॐ जय जगदीश हरे॥

तुम पूरण परमात्मा, तुम अंतर्यामी।
स्वामी तुम अंतर्यामी।
पार ब्रह्म परमेश्वर, पार ब्रह्म परमेश्वर, तुम सबके स्वामी॥
ॐ जय जगदीश हरे॥

तुम करुणा के सागर, तुम पालनकर्ता।
स्वामी तुम पालनकर्ता।
मैं मूरख खलकामी, मैं सेवक तुम स्वामी, कृपा करो भर्ता॥
ॐ जय जगदीश हरे॥

तुम हो एक अगोचर, सबके प्राणपति।
स्वामी सबके प्राणपति।
किस विध मिलूं दयामय, किस विध मिलूं दयामय, तुमको मैं कुमति॥
ॐ जय जगदीश हरे॥

दीनबंधु दुःखहर्ता, ठाकुर तुम मेरे।
स्वामी ठाकुर तुम मेरे।
अपने हाथ उठाओ, अपने शरण लगाओ, द्वार पड़ा तेरे॥
ॐ जय जगदीश हरे॥

विषय विकार मिटाओ, पाप हरो देवा।
स्वामी पाप हरो देवा।
श्रद्धा भक्ति बढ़ाओ, श्रद्धा भक्ति बढ़ाओ, संतन की सेवा॥
ॐ जय जगदीश हरे॥`,
          youtubeId: "zRPw0M-HsYU",
        },
        {
          id: "shiva-aarti",
          title: "ॐ जय शिव ओंकारा (शिव आरती)",
          category: "शिव जी",
          popular: true,
          text: `ॐ जय शिव ओंकारा, स्वामी जय शिव ओंकारा।
ब्रह्मा विष्णु सदाशिव, अर्धांगी धारा॥
ॐ जय शिव ओंकारा॥

एकानन चतुरानन, पंचानन राजे।
स्वामी पंचानन राजे।
हंसासन गरुड़ासन, वृषवाहन साजे॥
ॐ जय शिव ओंकारा॥

दो भुज चार चतुर्भुज, दस भुज अति सोहे।
स्वामी दस भुज अति सोहे।
तीनों रूप निरखता, त्रिभुवन जन मोहे॥
ॐ जय शिव ओंकारा॥

अक्षमाला वनमाला, मुंडमाला धारी।
स्वामी मुंडमाला धारी।
चंदन मृगमद सोहे, भाले शशिधारी॥
ॐ जय शिव ओंकारा॥

श्वेताम्बर पीताम्बर, बाघम्बर अंगे।
स्वामी बाघम्बर अंगे।
सनकादिक गरुणादिक, भूतादिक संगे॥
ॐ जय शिव ओंकारा॥

कर के मध्य कमंडलु, चक्र त्रिशूलधारी।
स्वामी चक्र त्रिशूलधारी।
सुखकारी दुःखहारी, जगपालन कारी॥
ॐ जय शिव ओंकारा॥

ब्रह्मा विष्णु सदाशिव, जानत अविवेका।
स्वामी जानत अविवेका।
प्रणवाक्षर में शोभित, ये तीनों एका॥
ॐ जय शिव ओंकारा॥

त्रिगुण स्वामी जी की आरती, जो कोई नर गावे।
स्वामी जो कोई नर गावे।
कहत शिवानंद स्वामी, मनवांछित फल पावे॥
ॐ जय शिव ओंकारा॥`,
          youtubeId: "UJp_XQ18gpA",
        },
        {
          id: "durga-aarti",
          title: "जय अम्बे गौरी (दुर्गा आरती)",
          category: "दुर्गा माता",
          popular: true,
          text: `जय अम्बे गौरी, मैया जय श्यामा गौरी।
तुमको निशदिन ध्यावत, हरि ब्रह्मा शिवरी॥
जय अम्बे गौरी॥

मांग सिंदूर विराजत, टीको मृगमद को।
उज्ज्वल से दोउ नैना, चंद्रवदन नीको॥
जय अम्बे गौरी॥

कनक समान कलेवर, रक्ताम्बर राजे।
रक्तपुष्प गल माला, कंठन पर साजे॥
जय अम्बे गौरी॥

केहरि वाहन राजत, खड्ग खप्पर धारी।
सुर नर मुनिजन सेवत, तिनके दुखहारी॥
जय अम्बे गौरी॥

कानन कुण्डल शोभित, नासाग्रे मोती।
कोटिक चंद्र दिवाकर, राजत सम ज्योती॥
जय अम्बे गौरी॥

शुंभ निशुंभ बिदारे, महिषासुर घाती।
धूम्र विलोचन नैना, निशदिन मदमाती॥
जय अम्बे गौरी॥

चण्ड मुण्ड संहारे, शोणित बीज हरे।
मधु कैटभ दोउ मारे, सुर भयहीन करे॥
जय अम्बे गौरी॥

ब्रह्माणी रुद्राणी, तुम कमला रानी।
आगम निगम बखानी, तुम शिव पटरानी॥
जय अम्बे गौरी॥

चौंसठ योगिनी गावत, नृत्य करत भैरों।
बाजत ताल मृदंगा, अरु बाजत डमरू॥
जय अम्बे गौरी॥

तुम ही जग की माता, तुम ही हो भर्ता।
भक्तन की दुख हर्ता, सुख संपत्ति कर्ता॥
जय अम्बे गौरी॥

भुजा चार अति शोभित, वर मुद्रा धारी।
मनवांछित फल पावत, सेवत नर नारी॥
जय अम्बे गौरी॥

कंचन थाल विराजत, अगर कपूर बाती।
श्री मालकेतु में राजत, कोटि रतन ज्योती॥
जय अम्बे गौरी॥

श्री अम्बे जी की आरती, जो कोई नर गावे।
कहत शिवानंद स्वामी, सुख संपत्ति पावे॥
जय अम्बे गौरी॥`,
          youtubeId: "d4KqOT6A94Q",
        },
        {
          id: "hanuman-aarti",
          title: "आरती कीजै हनुमान लला की",
          category: "हनुमान जी",
          popular: true,
          text: `आरती कीजै हनुमान लला की, दुष्ट दलन रघुनाथ कला की॥

जाके बल से गिरिवर कांपे, रोग दोष जाके निकट न झांके।
अंजनी पुत्र महाबलदाई, संतन के प्रभु सदा सहाई॥
आरती कीजै हनुमान लला की॥

दे वीरा रघुनाथ पठाये, लंका जारि सिया सुधि लाये।
लंका सो कोट समुद्र सी खाई, जात पवनसुत बार न लाई॥
आरती कीजै हनुमान लला की॥

लंका जारि असुर संहारे, सियारामजी के काज संवारे।
लक्ष्मण मूर्छित पड़े सकारे, आणि संजीवन प्राण उबारे॥
आरती कीजै हनुमान लला की॥

पैठि पाताल तोरि जम कारे, अहिरावण की भुजा उखारे।
बायें भुजा असुर दल मारे, दाहिने भुजा संतजन तारे॥
आरती कीजै हनुमान लला की॥

सुर नर मुनि आरती उतारें, जय जय जय हनुमान उचारें।
कंचन थार कपूर लौ छाई, आरती करत अंजना माई॥
आरती कीजै हनुमान लला की॥

जो हनुमान जी की आरती गावै, बसि बैकुंठ परमपद पावै।
लंका विध्वंस किये रघुराई, तुलसीदास प्रभु कीर्ति गाई॥
आरती कीजै हनुमान लला की॥`,
          youtubeId: "ggI7gPEouFk",
        },
        {
          id: "lakshmi-aarti",
          title: "ॐ जय लक्ष्मी माता",
          category: "लक्ष्मी माता",
          popular: false,
          text: `ॐ जय लक्ष्मी माता, मैया जय लक्ष्मी माता।
तुमको निशिदिन सेवत, हर विष्णु विधाता॥
ॐ जय लक्ष्मी माता॥

उमा रमा ब्रह्माणी, तुम ही जग माता।
सूर्य चंद्रमा ध्यावत, नारद ऋषि गाता॥
ॐ जय लक्ष्मी माता॥

दुर्गा रूप निरंजनी, सुख संपत्ति दाता।
जो कोई तुमको ध्याता, ऋद्धि सिद्धि धन पाता॥
ॐ जय लक्ष्मी माता॥

तुम पाताल निवासिनी, तुम ही शुभ दाता।
कर्म प्रभाव प्रकाशक, जगनिधि से त्राता॥
ॐ जय लक्ष्मी माता॥

जिस घर तुम रहती हो, सब सद्गुण आता।
सब संभव हो जाता, मन नहीं घबराता॥
ॐ जय लक्ष्मी माता॥

तुम बिन यज्ञ न होते, वस्त्र न कोई पाता।
खान पान का वैभव, सब तुमसे आता॥
ॐ जय लक्ष्मी माता॥

शुभ गुण मंदिर सुंदर, क्षीरोदधि जाता।
रत्न चतुर्दश तुम बिन, कोई नहीं पाता॥
ॐ जय लक्ष्मी माता॥

महालक्ष्मी जी की आरती, जो कोई नर गाता।
उर आनंद समाता, पाप उतर जाता॥
ॐ जय लक्ष्मी माता॥`,
          youtubeId: "VKfwl8ms8lE",
        },
        {
          id: "ganesha-aarti",
          title: "जय गणेश जय गणेश देवा",
          category: "गणेश जी",
          popular: true,
          text: `जय गणेश जय गणेश जय गणेश देवा।
माता जाकी पार्वती, पिता महादेवा॥

एक दंत दयावंत, चार भुजाधारी।
माथे सिंदूर सोहे, मूसे की सवारी॥
जय गणेश जय गणेश देवा॥

पान चढ़े फल चढ़े, और चढ़े मेवा।
लड्डुअन का भोग लगे, संत करें सेवा॥
जय गणेश जय गणेश देवा॥

अंधन को आंख देत, कोढ़िन को काया।
बांझन को पुत्र देत, निर्धन को माया॥
जय गणेश जय गणेश देवा॥

'सूर' श्याम शरण आए, सफल कीजे सेवा।
माता जाकी पार्वती, पिता महादेवा॥
जय गणेश जय गणेश देवा॥`,
          youtubeId: "xOItOa6gHHY",
        },
        {
          id: "krishna-aarti",
          title: "आरती कुंजबिहारी की",
          category: "कृष्ण जी",
          popular: false,
          text: `आरती कुंजबिहारी की, श्री गिरिधर कृष्ण मुरारी की॥

गले में बैजयंती माला, बजावै मुरली मधुर बाला।
श्रवण में कुण्डल झलमलाला, नंद के आनंद नंदलाला॥
आरती कुंजबिहारी की॥

गगन सम अंग कांति काली, राधिका चमक रही आली।
लतन में ठाड़े बनमाली, भ्रमर सी अलक कस्तूरी तिलक॥
आरती कुंजबिहारी की॥

कनकमय मोर मुकुट बिलसै, देवता दरसन को तरसै।
गगन सो सुमन रासि बरसै, बजे मुरचंग मधुर मिरदंग॥
आरती कुंजबिहारी की॥

सतसैया के संत रसाल, बने पुहुप की सी माल।
गजमुक्तन मनि लाल, स्वर्ण झलक सी पगतल पाल॥
आरती कुंजबिहारी की॥

कदम की डारन में रहैं, नाचत गावत झूम के।
मोहन सो गिरधारी, सोहै सतसैया को॥
आरती कुंजबिहारी की॥

जहां ते प्रगट भई गंगा, सकल मन हारिणि श्री गंगा।
स्मरन ते होत मोह भंगा, बसी शिव सीस॥
आरती कुंजबिहारी की॥

चमकती उज्ज्वल तट रेणू, बज रही वृन्दावन बेणू।
चहु दिसि गोपी गोवाल धेनू, हंसत सृजत आनंद॥
आरती कुंजबिहारी की॥

आरती कुंजबिहारी की, श्री गिरिधर कृष्ण मुरारी की॥`,
          youtubeId: "Bb-Wqkf5gQg",
        },
        {
          id: "saraswati-aarti",
          title: "जय सरस्वती माता",
          category: "सरस्वती माता",
          popular: false,
          text: `जय सरस्वती माता, मैया जय सरस्वती माता।
सद्गुण वैभव शालिनी, त्रिभुवन विख्याता॥
जय सरस्वती माता॥

चंद्रवदनि पद्मासिनि, द्युति मंगलकारी।
सोहे शुभ हंस सवारी, अतुल तेजधारी॥
जय सरस्वती माता॥

बाएं कर में वीणा, दाएं कर माला।
शीश मुकुट मणि सोहे, गल मोतियन माला॥
जय सरस्वती माता॥

देवी शरण जो आए, उनका उद्धार किया।
पैठी मंथरा मैया, राज दुलारी सुत दिया॥
जय सरस्वती माता॥

विद्या ज्ञान प्रदायिनी, ज्ञान प्रकाश भरी।
मोह अज्ञान तिमिर का, जग से हर्ता हारी॥
जय सरस्वती माता॥

धूप दीप फल मेवा, माता स्वीकार करो।
ज्ञानदायिनी माता, विज्ञान विस्तार करो॥
जय सरस्वती माता॥

मां सरस्वती की आरती, जो कोई जन गावे।
हितकारी सुखकारी, ज्ञान भक्ति वह पावे॥
जय सरस्वती माता॥`,
          youtubeId: "cPqj6_eoXNM",
        },
      ],
    },
    en: {
      title: "Aarti Collection",
      subtitle: "Aartis of various deities - Text & Video",
      readText: "Read Aarti",
      watchVideo: "Watch Video",
      hideText: "Hide",
      popular: "Popular",
      aartis: [
        {
          id: "vishnu-aarti",
          title: "Om Jai Jagdish Hare (Vishnu Aarti)",
          category: "Lord Vishnu",
          popular: true,
          text: `Om Jai Jagdish Hare, Swami Jai Jagdish Hare.
Bhakt Janon Ke Sankat, Daas Janon Ke Sankat, Kshan Me Dur Kare॥
Om Jai Jagdish Hare॥

Jo Dhyaave Phal Paave, Dukh Binse Man Ka.
Swami Dukh Binse Man Ka.
Sukh Sampati Ghar Aave, Sukh Sampati Ghar Aave, Kasht Mite Tan Ka॥
Om Jai Jagdish Hare॥`,
          youtubeId: "zRPw0M-HsYU",
        },
        {
          id: "shiva-aarti",
          title: "Om Jai Shiv Omkara (Shiva Aarti)",
          category: "Lord Shiva",
          popular: true,
          text: `Om Jai Shiv Omkara, Swami Jai Shiv Omkara.
Brahma Vishnu Sadashiv, Ardhangi Dhara॥
Om Jai Shiv Omkara॥`,
          youtubeId: "UJp_XQ18gpA",
        },
        {
          id: "durga-aarti",
          title: "Jai Ambe Gauri (Durga Aarti)",
          category: "Goddess Durga",
          popular: true,
          text: `Jai Ambe Gauri, Maiya Jai Shyama Gauri.
Tumko Nishdin Dhyavat, Hari Brahma Shivri॥
Jai Ambe Gauri॥`,
          youtubeId: "d4KqOT6A94Q",
        },
        {
          id: "hanuman-aarti",
          title: "Aarti Kije Hanuman Lala Ki",
          category: "Lord Hanuman",
          popular: true,
          text: `Aarti Kije Hanuman Lala Ki, Dusht Dalan Raghunath Kala Ki॥`,
          youtubeId: "ggI7gPEouFk",
        },
        {
          id: "lakshmi-aarti",
          title: "Om Jai Lakshmi Mata",
          category: "Goddess Lakshmi",
          popular: false,
          text: `Om Jai Lakshmi Mata, Maiya Jai Lakshmi Mata.
Tumko Nishidin Sevat, Har Vishnu Vidhata॥
Om Jai Lakshmi Mata॥`,
          youtubeId: "VKfwl8ms8lE",
        },
        {
          id: "ganesha-aarti",
          title: "Jai Ganesh Jai Ganesh Deva",
          category: "Lord Ganesha",
          popular: true,
          text: `Jai Ganesh Jai Ganesh Jai Ganesh Deva.
Mata Jaki Parvati, Pita Mahadeva॥`,
          youtubeId: "xOItOa6gHHY",
        },
        {
          id: "krishna-aarti",
          title: "Aarti Kunj Bihari Ki",
          category: "Lord Krishna",
          popular: false,
          text: `Aarti Kunj Bihari Ki, Shri Giridhar Krishna Murari Ki॥`,
          youtubeId: "Bb-Wqkf5gQg",
        },
        {
          id: "saraswati-aarti",
          title: "Jai Saraswati Mata",
          category: "Goddess Saraswati",
          popular: false,
          text: `Jai Saraswati Mata, Maiya Jai Saraswati Mata.
Sadgun Vaibhav Shalini, Tribhuvan Vikhyata॥
Jai Saraswati Mata॥`,
          youtubeId: "cPqj6_eoXNM",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground mb-4 animate-glow">
                <Music className="w-10 h-10" />
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

        {/* Aartis Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {content[language].aartis.map((aarti, index) => {
                const uniqueKey = `${language}-${aarti.id}`;
                return (
                  <Card
                    key={uniqueKey}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card animate-fade-up relative overflow-hidden h-fit"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {aarti.popular && (
                      <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-primary to-secondary">
                        {content[language].popular}
                      </Badge>
                    )}
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Music className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl pr-16">{aarti.title}</CardTitle>
                      <CardDescription>{aarti.category}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Text Section */}
                      <div>
                        <Button
                          variant="outline"
                          className="w-full gap-2 justify-between"
                          onClick={() => setExpandedAarti(expandedAarti === uniqueKey ? null : uniqueKey)}
                        >
                          <span className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            {content[language].readText}
                          </span>
                          {expandedAarti === uniqueKey ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </Button>
                        {expandedAarti === uniqueKey && (
                          <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border animate-fade-in">
                            <pre className="whitespace-pre-wrap text-sm text-muted-foreground font-sans leading-relaxed">
                              {aarti.text}
                            </pre>
                          </div>
                        )}
                      </div>

                      {/* Video Button */}
                      <Button
                        variant="default"
                        className="w-full gap-2 bg-gradient-to-r from-primary to-secondary"
                        onClick={() => setSelectedVideo(uniqueKey)}
                      >
                        <Video className="w-4 h-4" />
                        {content[language].watchVideo}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
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
                    ? "हमारे यूट्यूब चैनल पर और आरती देखें"
                    : "Watch More Aartis on Our YouTube Channel"}
                </CardTitle>
                <CardDescription className="text-base">
                  {language === "hi"
                    ? "विभिन्न देवी-देवताओं की आरती वीडियो"
                    : "Aarti videos of various deities"}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <a href="https://www.youtube.com/@panditshreeprakash" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-secondary">
                    <Youtube className="w-5 h-5" />
                    {language === "hi" ? "यूट्यूब चैनल देखें" : "View YouTube Channel"}
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Video Player Dialog */}
        <Dialog open={selectedVideo !== null} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">
                {selectedVideo !== null && (() => {
                  const aartiId = selectedVideo.split('-')[1];
                  return content[language].aartis.find(a => a.id === aartiId)?.title;
                })()}
              </DialogTitle>
              <DialogDescription>
                {selectedVideo !== null && (() => {
                  const aartiId = selectedVideo.split('-')[1];
                  return content[language].aartis.find(a => a.id === aartiId)?.category;
                })()}
              </DialogDescription>
            </DialogHeader>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              {selectedVideo !== null && (() => {
                const aartiId = selectedVideo.split('-')[1];
                const aarti = content[language].aartis.find(a => a.id === aartiId);
                return aarti?.youtubeId ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${aarti.youtubeId}?autoplay=1`}
                    title={aarti.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : null;
              })()}
            </div>
          </DialogContent>
        </Dialog>
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Aarti;
