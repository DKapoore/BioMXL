/* =============================================
   BIO MXL – MAIN JAVASCRIPT
   Features: i18n, Slider, FAQ, Gallery,
   Counters, Form Validation, WhatsApp
   ============================================= */

/* ===== LANGUAGE DATA ===== */
const i18nData = {
  en: {
    nav_product: "Product",
    nav_benefits: "Benefits",
    nav_howto: "How to Use",
    nav_reviews: "Reviews",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    hero_badge: "🌱 Premium Bio-Stimulant",
    hero_title: "Bio MXL",
    hero_tagline: "Nature's Intelligence. Farmer's Triumph.",
    hero_b1: "✓ Boosts Yield up to 30%",
    hero_b2: "✓ Strengthens Root System",
    hero_b3: "✓ Improves Soil Microbial Activity",
    hero_b4: "✓ 100% Organic & Safe",
    cta_contact: "📞 Contact Now",
    cta_video: "▶ Watch Video",
    cta_buy: "🛒 Buy Now",
    vid_tag: "🎬 Watch & Learn",
    vid_title: "See Bio MXL in Action",
    vid_sub: "Real results from real farmers across India",
    prod_tag: "🌿 About the Product",
    prod_title: "What is Bio MXL?",
    prod_sub: "A scientifically formulated bio-stimulant crafted from nature's finest organic compounds",
    prod_desc: "Bio MXL is a next-generation organic bio-stimulant developed using advanced fermentation technology and natural plant-growth promoting microorganisms. It enhances the natural metabolic processes of plants, leading to stronger roots, healthier soil, and dramatically improved crop yields.",
    prod_desc2: "Trusted by thousands of progressive farmers across Maharashtra, Madhya Pradesh, Gujarat, and Punjab, Bio MXL is the gold standard in organic crop nutrition.",
    stat1: "Yield Increase",
    stat2: "Happy Farmers",
    stat3: "Years R&D",
    stat4: "Crops Tested",
    feat1_h: "Microbial Boost",
    feat1_p: "Enriches soil with beneficial microbes for long-lasting fertility",
    feat2_h: "Root Stimulation",
    feat2_p: "Accelerates root development for better nutrient uptake",
    feat3_h: "Water Efficiency",
    feat3_p: "Improves soil water retention by up to 40%",
    feat4_h: "Disease Resistance",
    feat4_p: "Naturally boosts plant immunity against pathogens",
    comp_tag: "⚗️ Composition",
    comp_title: "Ingredients & Technical Composition",
    comp_sub: "Formulated with the finest organic and scientifically validated components",
    comp_label: "Bio MXL",
    comp_label2: "Formula",
    ct_h1: "Ingredient", ct_h2: "Source", ct_h3: "Content", ct_h4: "Function",
    ctf1: "Soil conditioner", ctf2: "Nutrient transporter", ctf3: "Growth hormone",
    ctf4: "Protein builder", ctf5: "Root expansion", ctf6: "Disease control",
    ctf7: "Enzyme activator", ctf8: "Pollination support",
    ben_tag: "🏆 Why Bio MXL",
    ben_title: "Proven Benefits for Your Farm",
    ben_sub: "Experience a complete transformation in crop health and productivity",
    b1h: "Better Root Growth", b1p: "Stimulates lateral root formation for 2× deeper root penetration and superior nutrient access",
    b2h: "Soil Health", b2p: "Revives soil biology and increases organic carbon content for long-term farm health",
    b3h: "Water Retention", b3p: "Reduces irrigation frequency by up to 30% with improved soil moisture holding capacity",
    b4h: "Yield Increase", b4p: "Documented 20–35% yield improvement across wheat, cotton, soybean, and vegetable crops",
    b5h: "Fertilizer Efficiency", b5p: "Enhances NPK absorption so farmers spend 25% less on chemical inputs",
    b6h: "Plant Strength", b6p: "Thicker stems, glossier leaves, and stronger cell walls for stress-resistant crops",
    b7h: "Microbial Activity", b7p: "Multiplies beneficial soil microbes 10× for a living, breathing, productive farm",
    b8h: "Crop Performance", b8p: "Better grain filling, fruit size, colour, and shelf life across all major crop types",
    how_tag: "📋 Application Guide",
    how_title: "How to Use Bio MXL",
    how_sub: "Simple, precise, and highly effective application methods for maximum results",
    dose_ml: "ml / acre", dose_ml2: "ml / L water",
    dose_drip: "Drip Irrigation", dose_flood: "Flood Irrigation", dose_spray: "Foliar Spray",
    tl1h: "Soil Preparation", tl1p: "Mix 500ml Bio MXL with 50L water. Apply evenly across one acre before sowing or transplanting. Best done 3–5 days before seeding.",
    tl2h: "Seed Treatment", tl2p: "Soak seeds in 3ml Bio MXL per litre of water for 30 minutes before sowing. This gives seedlings an early-life advantage from day one.",
    tl3h: "Vegetative Stage", tl3p: "Apply 250ml per acre via drip or 500ml via flood irrigation at 20–25 days after germination for accelerated vegetative growth.",
    tl4h: "Flowering & Fruiting", tl4p: "Foliar spray of 3ml per litre at the flowering stage significantly increases fruit set, grain filling, and final yield.",
    ba_before: "Without Bio MXL", ba_after: "With Bio MXL ✓",
    ba1a: "Weak, shallow roots", ba2a: "Low nutrient absorption", ba3a: "High irrigation demand", ba4a: "Poor disease resistance",
    ba1b: "Deep, branched root system", ba2b: "2× NPK uptake efficiency", ba3b: "30% less water needed", ba4b: "Natural immunity activated",
    rev_tag: "⭐ Farmer Reviews", rev_title: "What Farmers Say", rev_sub: "Real voices from the fields of India",
    gr_title: "Rated Highly on Google", gr_based: "Based on 340 reviews", gr_write: "✍ Write a Review",
    gal_tag: "📸 Gallery", gal_title: "Results in the Field", gal_sub: "Visual proof from farms across India",
    cert_tag: "🏅 Trust & Quality", cert_title: "Certifications & Approvals",
    cert1: "Quality Management System Certified", cert2: "National Programme for Organic Production",
    cert3: "Central Insecticides Board Registered", cert4: "Fertilizer Control Order Compliant",
    cert5: "United States Department of Agriculture", cert6: "Third Party Laboratory Verified",
    faq_tag: "❓ FAQ", faq_title: "Frequently Asked Questions",
    con_tag: "📬 Get in Touch", con_title: "Contact Us", con_sub: "Our agronomists are ready to help you get the most from Bio MXL",
    ci_phone: "Phone / WhatsApp", ci_email: "Email", ci_addr: "Address", ci_addrval: "Bio MXL Agro Pvt Ltd, Pune, Maharashtra – 411001",
    ci_hours: "Business Hours", ci_hrsval: "Mon–Sat: 9:00 AM – 6:00 PM",
    cf_name: "Full Name *", cf_mobile: "Mobile *", cf_email: "Email", cf_state: "State *", cf_msg: "Message", cf_submit: "Send Message 📨",
    foot_desc: "Premium organic bio-stimulant trusted by progressive farmers across India.",
    foot_quick: "Quick Links", foot_crops: "Suitable Crops", foot_contact: "Contact", foot_admin: "Admin Panel", foot_dist: "Distributor Enquiry Welcome"
  },
  hi: {
    nav_product: "उत्पाद",
    nav_benefits: "फायदे",
    nav_howto: "उपयोग विधि",
    nav_reviews: "समीक्षाएं",
    nav_faq: "FAQ",
    nav_contact: "संपर्क",
    hero_badge: "🌱 प्रीमियम बायो-स्टिमुलेंट",
    hero_title: "Bio MXL",
    hero_tagline: "प्रकृति की शक्ति। किसान की जीत।",
    hero_b1: "✓ उपज 30% तक बढ़ाए",
    hero_b2: "✓ जड़ प्रणाली को मजबूत करे",
    hero_b3: "✓ मिट्टी की सूक्ष्मजीव गतिविधि बढ़ाए",
    hero_b4: "✓ 100% जैविक और सुरक्षित",
    cta_contact: "📞 अभी संपर्क करें",
    cta_video: "▶ वीडियो देखें",
    cta_buy: "🛒 अभी खरीदें",
    vid_tag: "🎬 देखें और सीखें",
    vid_title: "Bio MXL को कार्य में देखें",
    vid_sub: "भारत भर के वास्तविक किसानों से वास्तविक परिणाम",
    prod_tag: "🌿 उत्पाद के बारे में",
    prod_title: "Bio MXL क्या है?",
    prod_sub: "प्रकृति के सर्वोत्तम जैविक यौगिकों से तैयार वैज्ञानिक रूप से तैयार बायो-स्टिमुलेंट",
    prod_desc: "Bio MXL एक अगली पीढ़ी का जैविक बायो-स्टिमुलेंट है जो उन्नत किण्वन तकनीक और प्राकृतिक पौधे-वृद्धि को बढ़ावा देने वाले सूक्ष्मजीवों का उपयोग करके विकसित किया गया है।",
    prod_desc2: "महाराष्ट्र, मध्य प्रदेश, गुजरात और पंजाब के हजारों प्रगतिशील किसानों द्वारा विश्वसनीय, Bio MXL जैविक फसल पोषण में स्वर्ण मानक है।",
    stat1: "उपज वृद्धि", stat2: "खुश किसान", stat3: "वर्ष R&D", stat4: "फसलें परीक्षण",
    feat1_h: "सूक्ष्मजीव बढ़ावा", feat1_p: "दीर्घकालिक उर्वरता के लिए मिट्टी को लाभकारी रोगाणुओं से समृद्ध करता है",
    feat2_h: "जड़ उत्तेजना", feat2_p: "बेहतर पोषक तत्व ग्रहण के लिए जड़ विकास को तेज करता है",
    feat3_h: "जल दक्षता", feat3_p: "मिट्टी की जल धारण क्षमता 40% तक सुधारता है",
    feat4_h: "रोग प्रतिरोध", feat4_p: "पौधों की प्रतिरक्षा को प्राकृतिक रूप से बढ़ाता है",
    comp_tag: "⚗️ संरचना", comp_title: "सामग्री और तकनीकी संरचना", comp_sub: "सर्वोत्तम जैविक घटकों से तैयार",
    comp_label: "Bio MXL", comp_label2: "फार्मूला",
    ct_h1: "सामग्री", ct_h2: "स्रोत", ct_h3: "मात्रा", ct_h4: "कार्य",
    ctf1: "मिट्टी सुधारक", ctf2: "पोषक वाहक", ctf3: "विकास हार्मोन",
    ctf4: "प्रोटीन निर्माता", ctf5: "जड़ विस्तार", ctf6: "रोग नियंत्रण",
    ctf7: "एंजाइम सक्रियकर्ता", ctf8: "परागण सहायक",
    ben_tag: "🏆 Bio MXL क्यों चुनें", ben_title: "आपके खेत के लिए सिद्ध लाभ", ben_sub: "फसल स्वास्थ्य और उत्पादकता में पूर्ण परिवर्तन का अनुभव करें",
    b1h: "बेहतर जड़ विकास", b1p: "पार्श्व जड़ निर्माण को उत्तेजित करता है और बेहतर पोषक तत्व पहुंच प्रदान करता है",
    b2h: "मिट्टी स्वास्थ्य", b2p: "दीर्घकालिक खेत स्वास्थ्य के लिए मिट्टी की जीव विज्ञान को पुनर्जीवित करता है",
    b3h: "जल धारण", b3p: "बेहतर मिट्टी नमी धारण क्षमता के साथ सिंचाई आवृत्ति 30% तक कम करता है",
    b4h: "उपज वृद्धि", b4p: "गेहूं, कपास, सोयाबीन और सब्जी फसलों में 20-35% उपज सुधार",
    b5h: "उर्वरक दक्षता", b5p: "NPK अवशोषण को बढ़ाता है जिससे किसान रासायनिक इनपुट पर 25% कम खर्च करते हैं",
    b6h: "पौधे की शक्ति", b6p: "तनाव-प्रतिरोधी फसलों के लिए मोटे तने, चमकदार पत्तियां और मजबूत कोशिका दीवारें",
    b7h: "सूक्ष्मजीव गतिविधि", b7p: "लाभकारी मिट्टी रोगाणुओं को 10× गुणा करता है",
    b8h: "फसल प्रदर्शन", b8p: "सभी प्रमुख फसल प्रकारों में बेहतर दाना भरना, फल का आकार और शेल्फ लाइफ",
    how_tag: "📋 उपयोग मार्गदर्शिका", how_title: "Bio MXL का उपयोग कैसे करें", how_sub: "अधिकतम परिणामों के लिए सरल और प्रभावी उपयोग विधियां",
    dose_ml: "मिली / एकड़", dose_ml2: "मिली / लीटर पानी",
    dose_drip: "ड्रिप सिंचाई", dose_flood: "बाढ़ सिंचाई", dose_spray: "पर्णीय छिड़काव",
    tl1h: "भूमि तैयारी", tl1p: "500ml Bio MXL को 50 लीटर पानी में मिलाएं। बुवाई या रोपाई से 3-5 दिन पहले एक एकड़ पर समान रूप से लगाएं।",
    tl2h: "बीज उपचार", tl2p: "बुवाई से पहले प्रति लीटर पानी में 3ml Bio MXL में 30 मिनट के लिए बीज भिगोएं।",
    tl3h: "वानस्पतिक अवस्था", tl3p: "अंकुरण के 20-25 दिन बाद ड्रिप से 250ml/एकड़ या बाढ़ सिंचाई से 500ml/एकड़ लगाएं।",
    tl4h: "फूल और फल अवस्था", tl4p: "फूल आने पर 3ml प्रति लीटर का पर्णीय छिड़काव फल स्थापना और उपज में उल्लेखनीय वृद्धि करता है।",
    ba_before: "Bio MXL के बिना", ba_after: "Bio MXL के साथ ✓",
    ba1a: "कमजोर, उथली जड़ें", ba2a: "कम पोषक तत्व अवशोषण", ba3a: "अधिक सिंचाई की आवश्यकता", ba4a: "कमजोर रोग प्रतिरोध",
    ba1b: "गहरी, शाखित जड़ प्रणाली", ba2b: "2× NPK उपयोग दक्षता", ba3b: "30% कम पानी की जरूरत", ba4b: "प्राकृतिक प्रतिरक्षा सक्रिय",
    rev_tag: "⭐ किसान समीक्षाएं", rev_title: "किसान क्या कहते हैं", rev_sub: "भारत के खेतों से वास्तविक आवाजें",
    gr_title: "Google पर उच्च रेटिंग", gr_based: "340 समीक्षाओं पर आधारित", gr_write: "✍ समीक्षा लिखें",
    gal_tag: "📸 गैलरी", gal_title: "खेत में परिणाम", gal_sub: "भारत भर के खेतों से दृश्य प्रमाण",
    cert_tag: "🏅 विश्वास और गुणवत्ता", cert_title: "प्रमाणपत्र और अनुमोदन",
    cert1: "गुणवत्ता प्रबंधन प्रणाली प्रमाणित", cert2: "जैविक उत्पादन के लिए राष्ट्रीय कार्यक्रम",
    cert3: "केंद्रीय कीटनाशक बोर्ड पंजीकृत", cert4: "उर्वरक नियंत्रण आदेश अनुपालक",
    cert5: "संयुक्त राज्य कृषि विभाग", cert6: "तृतीय पक्ष प्रयोगशाला सत्यापित",
    faq_tag: "❓ FAQ", faq_title: "अक्सर पूछे जाने वाले प्रश्न",
    con_tag: "📬 संपर्क करें", con_title: "हमसे संपर्क करें", con_sub: "हमारे कृषि विशेषज्ञ आपकी सहायता के लिए तैयार हैं",
    ci_phone: "फोन / WhatsApp", ci_email: "ईमेल", ci_addr: "पता", ci_addrval: "Bio MXL एग्रो प्रा.लि., पुणे, महाराष्ट्र – 411001",
    ci_hours: "व्यवसाय समय", ci_hrsval: "सोम–शनि: सुबह 9 बजे – शाम 6 बजे",
    cf_name: "पूरा नाम *", cf_mobile: "मोबाइल *", cf_email: "ईमेल", cf_state: "राज्य *", cf_msg: "संदेश", cf_submit: "संदेश भेजें 📨",
    foot_desc: "भारत भर के प्रगतिशील किसानों द्वारा विश्वसनीय प्रीमियम जैविक बायो-स्टिमुलेंट।",
    foot_quick: "त्वरित लिंक", foot_crops: "उपयुक्त फसलें", foot_contact: "संपर्क", foot_admin: "एडमिन पैनल", foot_dist: "वितरक पूछताछ स्वागत है"
  },
  mr: {
    nav_product: "उत्पादन",
    nav_benefits: "फायदे",
    nav_howto: "वापर पद्धती",
    nav_reviews: "शेतकरी मते",
    nav_faq: "FAQ",
    nav_contact: "संपर्क",
    hero_badge: "🌱 प्रीमियम बायो-स्टिम्युलंट",
    hero_title: "Bio MXL",
    hero_tagline: "निसर्गाची बुद्धिमत्ता. शेतकऱ्याचा विजय.",
    hero_b1: "✓ उत्पादन 30% पर्यंत वाढवते",
    hero_b2: "✓ मूळ प्रणाली मजबूत करते",
    hero_b3: "✓ मातीतील सूक्ष्मजीव क्रिया सुधारते",
    hero_b4: "✓ 100% सेंद्रिय आणि सुरक्षित",
    cta_contact: "📞 आत्ताच संपर्क करा",
    cta_video: "▶ व्हिडिओ पहा",
    cta_buy: "🛒 आत्ता खरेदी करा",
    vid_tag: "🎬 पाहा आणि शिका",
    vid_title: "Bio MXL प्रत्यक्षात पाहा",
    vid_sub: "भारतभरातील खऱ्या शेतकऱ्यांचे खरे परिणाम",
    prod_tag: "🌿 उत्पादनाबद्दल",
    prod_title: "Bio MXL म्हणजे काय?",
    prod_sub: "निसर्गातील सर्वोत्तम सेंद्रिय घटकांपासून तयार केलेले वैज्ञानिक बायो-स्टिम्युलंट",
    prod_desc: "Bio MXL हे प्रगत किण्वन तंत्रज्ञान आणि नैसर्गिक वनस्पती-वाढ प्रोत्साहन देणाऱ्या सूक्ष्मजीवांचा वापर करून विकसित केलेले अत्याधुनिक सेंद्रिय बायो-स्टिम्युलंट आहे.",
    prod_desc2: "महाराष्ट्र, मध्य प्रदेश, गुजरात आणि पंजाबमधील हजारो प्रगतीशील शेतकऱ्यांनी विश्वास ठेवलेले Bio MXL सेंद्रिय पीक पोषणातील सुवर्ण मानक आहे.",
    stat1: "उत्पादन वाढ", stat2: "खूश शेतकरी", stat3: "वर्षे संशोधन", stat4: "पिके चाचणी",
    feat1_h: "सूक्ष्मजीव वाढ", feat1_p: "दीर्घकालीन सुपीकतेसाठी मातीला फायदेशीर सूक्ष्मजीवांनी समृद्ध करते",
    feat2_h: "मूळ उत्तेजना", feat2_p: "चांगल्या पोषकद्रव्य शोषणासाठी मूळ विकास वेगवान करते",
    feat3_h: "जल कार्यक्षमता", feat3_p: "मातीची पाणी धारण क्षमता 40% पर्यंत सुधारते",
    feat4_h: "रोग प्रतिरोध", feat4_p: "नैसर्गिकरित्या वनस्पतींची रोग प्रतिकारशक्ती वाढवते",
    comp_tag: "⚗️ रचना", comp_title: "घटक आणि तांत्रिक रचना", comp_sub: "सर्वोत्तम सेंद्रिय घटकांपासून तयार",
    comp_label: "Bio MXL", comp_label2: "सूत्र",
    ct_h1: "घटक", ct_h2: "स्रोत", ct_h3: "प्रमाण", ct_h4: "कार्य",
    ctf1: "माती सुधारक", ctf2: "पोषक वाहक", ctf3: "वाढ संप्रेरक",
    ctf4: "प्रथिने निर्माता", ctf5: "मूळ विस्तार", ctf6: "रोग नियंत्रण",
    ctf7: "एन्झाइम सक्रियकर्ता", ctf8: "परागण सहाय्यक",
    ben_tag: "🏆 Bio MXL का निवडा", ben_title: "तुमच्या शेतासाठी सिद्ध फायदे", ben_sub: "पीक आरोग्य आणि उत्पादकतेत संपूर्ण बदलाचा अनुभव घ्या",
    b1h: "चांगली मूळ वाढ", b1p: "बाजूच्या मूळ निर्मितीला उत्तेजित करते आणि श्रेष्ठ पोषकद्रव्य प्रवेश देते",
    b2h: "माती आरोग्य", b2p: "दीर्घकालीन शेत आरोग्यासाठी मातीचे जीवशास्त्र पुनरुज्जीवित करते",
    b3h: "जल धारण", b3p: "सुधारित माती ओलावा धारण क्षमतेसह सिंचन वारंवारता 30% पर्यंत कमी करते",
    b4h: "उत्पादन वाढ", b4p: "गहू, कापूस, सोयाबीन आणि भाजीपाला पिकांमध्ये 20-35% उत्पादन सुधारणा",
    b5h: "खत कार्यक्षमता", b5p: "NPK शोषण वाढवते जेणेकरून शेतकरी रासायनिक निविष्ठांवर 25% कमी खर्च करतात",
    b6h: "वनस्पती शक्ती", b6p: "ताण-प्रतिरोधी पिकांसाठी जाड देठ, चकचकीत पाने आणि मजबूत पेशी भिंती",
    b7h: "सूक्ष्मजीव क्रिया", b7p: "फायदेशीर माती सूक्ष्मजीव 10 पट वाढवते",
    b8h: "पीक कामगिरी", b8p: "सर्व प्रमुख पीक प्रकारांमध्ये चांगले दाणे भरणे, फळाचा आकार आणि शेल्फ लाइफ",
    how_tag: "📋 वापर मार्गदर्शिका", how_title: "Bio MXL कसे वापरावे", how_sub: "जास्तीत जास्त परिणामांसाठी सोपी आणि प्रभावी वापर पद्धती",
    dose_ml: "मि.ली. / एकर", dose_ml2: "मि.ली. / लीटर पाणी",
    dose_drip: "ठिबक सिंचन", dose_flood: "पूर सिंचन", dose_spray: "पर्णीय फवारणी",
    tl1h: "जमीन तयारी", tl1p: "500ml Bio MXL 50 लीटर पाण्यात मिसळा. पेरणी किंवा रोपण करण्यापूर्वी 3-5 दिवस आधी एक एकरावर समान रूपाने लावा.",
    tl2h: "बीज प्रक्रिया", tl2p: "पेरणीपूर्वी प्रति लीटर पाण्यात 3ml Bio MXL मध्ये 30 मिनिटे बिया भिजवा.",
    tl3h: "वनस्पतिज अवस्था", tl3p: "उगवणीनंतर 20-25 दिवसांनी ठिबकद्वारे 250ml/एकर किंवा पूर सिंचनाद्वारे 500ml/एकर लावा.",
    tl4h: "फुलोरा आणि फलन अवस्था", tl4p: "फुलोरा अवस्थेत 3ml प्रति लीटरची पर्णीय फवारणी फळ संच आणि उत्पादनात लक्षणीय वाढ करते.",
    ba_before: "Bio MXL शिवाय", ba_after: "Bio MXL सह ✓",
    ba1a: "कमकुवत, उथळ मुळे", ba2a: "कमी पोषकद्रव्य शोषण", ba3a: "जास्त सिंचनाची गरज", ba4a: "कमकुवत रोग प्रतिरोध",
    ba1b: "खोल, फांद्यायुक्त मूळ प्रणाली", ba2b: "2× NPK वापर कार्यक्षमता", ba3b: "30% कमी पाणी लागते", ba4b: "नैसर्गिक प्रतिकारशक्ती सक्रिय",
    rev_tag: "⭐ शेतकरी मते", rev_title: "शेतकरी काय म्हणतात", rev_sub: "भारताच्या शेतांमधून खऱ्या आवाजी",
    gr_title: "Google वर उच्च रेटिंग", gr_based: "340 समीक्षांवर आधारित", gr_write: "✍ समीक्षा लिहा",
    gal_tag: "📸 गॅलरी", gal_title: "शेतात परिणाम", gal_sub: "भारतभरातील शेतांमधून दृश्य पुरावे",
    cert_tag: "🏅 विश्वास आणि गुणवत्ता", cert_title: "प्रमाणपत्रे आणि मान्यता",
    cert1: "गुणवत्ता व्यवस्थापन प्रणाली प्रमाणित", cert2: "सेंद्रिय उत्पादनासाठी राष्ट्रीय कार्यक्रम",
    cert3: "केंद्रीय कीटकनाशक मंडळ नोंदणीकृत", cert4: "खत नियंत्रण आदेश अनुपालक",
    cert5: "अमेरिकन कृषी विभाग", cert6: "तृतीय पक्ष प्रयोगशाळा सत्यापित",
    faq_tag: "❓ FAQ", faq_title: "वारंवार विचारले जाणारे प्रश्न",
    con_tag: "📬 संपर्क करा", con_title: "आमच्याशी संपर्क करा", con_sub: "आमचे कृषी तज्ञ तुम्हाला Bio MXL चा जास्तीत जास्त फायदा घेण्यास मदत करण्यास तयार आहेत",
    ci_phone: "फोन / WhatsApp", ci_email: "ईमेल", ci_addr: "पत्ता", ci_addrval: "Bio MXL एग्रो प्रा.लि., पुणे, महाराष्ट्र – 411001",
    ci_hours: "व्यवसाय वेळ", ci_hrsval: "सोम–शनि: सकाळी 9 – संध्याकाळी 6",
    cf_name: "पूर्ण नाव *", cf_mobile: "मोबाईल *", cf_email: "ईमेल", cf_state: "राज्य *", cf_msg: "संदेश", cf_submit: "संदेश पाठवा 📨",
    foot_desc: "भारतभरातील प्रगतीशील शेतकऱ्यांनी विश्वास ठेवलेले प्रीमियम सेंद्रिय बायो-स्टिम्युलंट.",
    foot_quick: "त्वरित दुवे", foot_crops: "योग्य पिके", foot_contact: "संपर्क", foot_admin: "एडमिन पॅनेल", foot_dist: "वितरक चौकशी स्वागत आहे"
  }
};

/* ===== CURRENT LANGUAGE ===== */
let currentLang = localStorage.getItem('biomxl_lang') || 'en';

/* ===== SET LANGUAGE ===== */
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('biomxl_lang', lang);
  const t = i18nData[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById(`btn-${lang}`);
  if (activeBtn) activeBtn.classList.add('active');
  document.documentElement.lang = lang;
  renderFAQ();
  renderReviews();
  renderGoogleReviews();
}

/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ===== MOBILE MENU ===== */
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
});

/* ===== SMOOTH SCROLL ===== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ===== ANIMATED COUNTERS ===== */
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target >= 1000 ? (target / 1000).toFixed(0) + 'K' : target;
      clearInterval(timer);
    } else {
      el.textContent = target >= 1000 ? Math.floor(current / 1000) + 'K' : Math.floor(current);
    }
  }, 16);
}

/* ===== INTERSECTION OBSERVER ===== */
const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };

// Reveal animations
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, observerOptions);
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Benefit cards stagger
const benefitObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const delay = parseInt(e.target.getAttribute('data-delay') || 0);
      setTimeout(() => e.target.classList.add('visible'), delay);
      benefitObserver.unobserve(e.target);
    }
  });
}, observerOptions);
document.querySelectorAll('.benefit-card').forEach(el => benefitObserver.observe(el));

// Counter observer
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterObserver.unobserve(e.target);
    }
  });
}, observerOptions);
document.querySelectorAll('.stat-num[data-target]').forEach(el => counterObserver.observe(el));

/* ===== VIDEO EMBED ===== */
let videoUrl = localStorage.getItem('biomxl_video') || 'https://www.youtube.com/embed/dQw4w9WgXcQ';
function loadVideo() {
  const container = document.getElementById('videoContainer');
  container.innerHTML = `<iframe src="${videoUrl}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen style="width:100%;height:100%;border:none;border-radius:16px;"></iframe>`;
}

/* ===== REVIEWS DATA ===== */
function getReviews() {
  const stored = localStorage.getItem('biomxl_reviews');
  if (stored) return JSON.parse(stored);
  return [
    { name: "Ramesh Patil", location: "Nashik, Maharashtra", crop: "Grapes", stars: 5, avatar: "https://placehold.co/80x80/2d7a2d/ffffff?text=RP", text: "Bio MXL has completely transformed my vineyard. My grape bunch weight increased by 28% and the color is much better this season. Highly recommended to every grape farmer!" },
    { name: "Suresh Kumar", location: "Indore, Madhya Pradesh", crop: "Soybean", stars: 5, avatar: "https://placehold.co/80x80/1a4a1a/ffffff?text=SK", text: "Mere soybean mein Bio MXL use karne ke baad yield 32% badhee. Mitti bhi kaafi achi ho gayi hai. Ek baar zarur try karein!" },
    { name: "Priya Sharma", location: "Amravati, Maharashtra", crop: "Cotton", stars: 5, avatar: "https://placehold.co/80x80/4caf50/ffffff?text=PS", text: "Cotton bolls are heavier and more uniform after using Bio MXL. I am saving on irrigation too. The technical team was very helpful in explaining the dosage." },
    { name: "Mohan Singh", location: "Ludhiana, Punjab", crop: "Wheat", stars: 4, avatar: "https://placehold.co/80x80/795548/ffffff?text=MS", text: "Wheat crop was excellent this rabi season. Grain weight increased noticeably. Bio MXL is a product every wheat farmer should try at least once." },
    { name: "Vijay Desai", location: "Ahmedabad, Gujarat", crop: "Sugarcane", stars: 5, avatar: "https://placehold.co/80x80/e67e22/ffffff?text=VD", text: "Bio MXL ni help thi mara gannani upar ne length 15% vdhi. Sugar recovery pan better che. Gujarat ma farmers ne jai recommend karish." }
  ];
}

/* ===== RENDER REVIEWS ===== */
let currentSlide = 0;
let slideTimer;

function renderReviews() {
  const reviews = getReviews();
  const slider = document.getElementById('reviewSlider');
  const dots = document.getElementById('sliderDots');
  slider.innerHTML = '';
  dots.innerHTML = '';
  reviews.forEach((r, i) => {
    const slide = document.createElement('div');
    slide.className = `slide${i === currentSlide ? ' active' : ''}`;
    slide.innerHTML = `
      <div class="slide-inner">
        <img class="slide-avatar" src="${r.avatar}" alt="${r.name}" />
        <div class="slide-content">
          <div class="slide-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
          <p class="slide-text">"${r.text}"</p>
          <div class="slide-author">${r.name}</div>
          <div class="slide-location">${r.location}</div>
          <span class="slide-crop">🌾 ${r.crop}</span>
        </div>
      </div>`;
    slider.appendChild(slide);
    const dot = document.createElement('div');
    dot.className = `dot${i === currentSlide ? ' active' : ''}`;
    dot.onclick = () => goToSlide(i);
    dots.appendChild(dot);
  });
  autoSlide();
}

function goToSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  if (!slides.length) return;
  slides[currentSlide]?.classList.remove('active');
  dots[currentSlide]?.classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide]?.classList.add('active');
  dots[currentSlide]?.classList.add('active');
}

function slideReview(dir) {
  clearInterval(slideTimer);
  goToSlide(currentSlide + dir);
  autoSlide();
}

function autoSlide() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

/* ===== GOOGLE REVIEWS DATA ===== */
function getGoogleReviews() {
  const stored = localStorage.getItem('biomxl_greviews');
  if (stored) return JSON.parse(stored);
  return [
    { name: "Anand Kulkarni", stars: 5, avatar: "https://placehold.co/44x44/4caf50/fff?text=AK", text: "Excellent product! My onion yield doubled this season. The root growth is visibly better." },
    { name: "Meena Joshi", stars: 5, avatar: "https://placehold.co/44x44/2d7a2d/fff?text=MJ", text: "Very happy with Bio MXL. My tomato plants are much stronger and disease-free." },
    { name: "Raju Patel", stars: 4, avatar: "https://placehold.co/44x44/e67e22/fff?text=RP", text: "Good product. I saw improvement in cotton crop. Customer support is also very helpful." }
  ];
}

function renderGoogleReviews() {
  const reviews = getGoogleReviews();
  const container = document.getElementById('grCards');
  if (!container) return;
  container.innerHTML = reviews.map(r => `
    <div class="gr-card">
      <div class="gr-card-top">
        <img class="gr-avatar" src="${r.avatar}" alt="${r.name}" />
        <div>
          <div class="gr-name">${r.name}</div>
          <div class="gr-card-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
        </div>
      </div>
      <p class="gr-card-text">${r.text}</p>
    </div>`).join('');
}

/* ===== GALLERY DATA ===== */
const galleryImages = [
  'https://placehold.co/400x400/1a4a1a/a5d6a7?text=Field+Result+1',
  'https://placehold.co/400x400/2d7a2d/ffffff?text=Root+Growth',
  'https://placehold.co/400x400/4caf50/ffffff?text=Crop+Yield',
  'https://placehold.co/400x400/0d2b0d/4caf50?text=Soil+Health',
  'https://placehold.co/800x400/1a4a1a/ffffff?text=Farm+Overview',
  'https://placehold.co/400x400/2d7a2d/ffffff?text=Product+Use',
  'https://placehold.co/400x400/4caf50/1a4a1a?text=Before+After',
  'https://placehold.co/400x400/795548/ffffff?text=Harvest+Day'
];

let currentLbIndex = 0;
let galleryData = [...galleryImages];

function renderGallery() {
  const stored = localStorage.getItem('biomxl_gallery');
  if (stored) galleryData = JSON.parse(stored);
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = galleryData.map((src, i) => `
    <div class="gallery-item" onclick="openLightbox(${i})">
      <img src="${src}" alt="Gallery ${i + 1}" loading="lazy" />
      <div class="gallery-overlay">🔍</div>
    </div>`).join('');
}

function openLightbox(index) {
  currentLbIndex = index;
  document.getElementById('lbImg').src = galleryData[index];
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function lbNav(dir, e) {
  e.stopPropagation();
  currentLbIndex = (currentLbIndex + dir + galleryData.length) % galleryData.length;
  document.getElementById('lbImg').src = galleryData[currentLbIndex];
}
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lbNav(-1, e);
  if (e.key === 'ArrowRight') lbNav(1, e);
});

/* ===== FAQ DATA ===== */
function getFAQs() {
  const stored = localStorage.getItem('biomxl_faqs');
  if (stored) return JSON.parse(stored);
  return [
    { q: "What crops is Bio MXL suitable for?", a: "Bio MXL is effective on all major crops including wheat, cotton, soybean, sugarcane, vegetables, fruits, and pulses. It works equally well on Kharif, Rabi, and Zaid crops." },
    { q: "Is Bio MXL safe for organic farming?", a: "Yes, Bio MXL is 100% organic and is approved under NPOP and USDA organic standards. It contains no harmful chemicals or synthetic substances and is completely safe for organic certification." },
    { q: "What is the recommended dosage?", a: "For soil application: 500ml per acre via flood irrigation or 250ml per acre via drip. For foliar spray: 3ml per litre of water. For seed treatment: 3ml per litre for 30 minutes soaking." },
    { q: "When should I see results?", a: "Most farmers notice visible improvement in plant vigor and root development within 10–15 days. Yield improvement is typically observed at harvest, with best results after 2–3 seasons of continuous use." },
    { q: "Can I mix Bio MXL with other fertilizers or pesticides?", a: "Bio MXL can be mixed with most water-soluble fertilizers and pesticides. Avoid mixing with copper-based fungicides. Always do a small jar test before bulk mixing. When in doubt, apply separately." },
    { q: "What is the shelf life of Bio MXL?", a: "Bio MXL has a shelf life of 24 months from the date of manufacture when stored in a cool, dry place away from direct sunlight. Do not freeze the product." },
    { q: "Is dealer/distributor network available?", a: "Yes, Bio MXL has an active dealer network across Maharashtra, Gujarat, MP, Rajasthan, Punjab, and other states. Contact us for nearest dealer or distributor partnership enquiries." }
  ];
}

function renderFAQ() {
  const faqs = getFAQs();
  const list = document.getElementById('faqList');
  if (!list) return;
  list.innerHTML = faqs.map((f, i) => `
    <div class="faq-item" id="faq-${i}">
      <div class="faq-q" onclick="toggleFAQ(${i})">
        <span>${f.q}</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>
    </div>`).join('');
}

function toggleFAQ(i) {
  const item = document.getElementById(`faq-${i}`);
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/* ===== CONTACT FORM ===== */
function submitForm(e) {
  e.preventDefault();
  const name = document.getElementById('cf_name').value.trim();
  const mobile = document.getElementById('cf_mobile').value.trim();
  const state = document.getElementById('cf_state').value;
  if (!name || !mobile || !state) {
    alert('Please fill in all required fields.');
    return;
  }
  if (!/^[+\d][\d\s]{9,}$/.test(mobile)) {
    alert('Please enter a valid mobile number.');
    return;
  }
  const success = document.getElementById('formSuccess');
  success.classList.add('show');
  document.getElementById('contactForm').reset();
  setTimeout(() => success.classList.remove('show'), 5000);
}

/* ===== LOAD CONTACT SETTINGS ===== */
function loadContactSettings() {
  const phone = localStorage.getItem('biomxl_phone');
  const email = localStorage.getItem('biomxl_email');
  const wa = localStorage.getItem('biomxl_wa');
  if (phone) {
    document.getElementById('contactPhone').textContent = phone;
    const waBtn = document.querySelector('.btn-whatsapp');
    const waFloat = document.getElementById('waFloat');
    if (waBtn) waBtn.href = `https://wa.me/${(wa || phone).replace(/\D/g, '')}`;
    if (waFloat) waFloat.href = `https://wa.me/${(wa || phone).replace(/\D/g, '')}?text=Hello!%20I%20am%20interested%20in%20Bio%20MXL`;
  }
  if (email) document.getElementById('contactEmail').textContent = email;
}

/* ===== LOAD HERO CUSTOMIZATION ===== */
function loadHeroSettings() {
  const title = localStorage.getItem('biomxl_hero_title');
  const tagline = localStorage.getItem('biomxl_hero_tagline');
  const img = localStorage.getItem('biomxl_hero_img');
  if (title) {
    const el = document.querySelector('.hero-title');
    if (el) el.textContent = title;
  }
  if (tagline) {
    const el = document.querySelector('.hero-tagline');
    if (el) el.textContent = tagline;
  }
  if (img) {
    const el = document.getElementById('heroProductImg');
    if (el) el.src = img;
  }
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
  renderReviews();
  renderGoogleReviews();
  renderGallery();
  renderFAQ();
  loadContactSettings();
  loadHeroSettings();
});
