/* =============================================
   BIO MXL – script.js v2.0
   Admin → Live Site Bridge
   Reads ALL LocalStorage keys set by admin.html
   and applies them to the live page on load.
   ============================================= */

/* ===== LS HELPER ===== */
const LS = {
  get: (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  str: (k, d = '') => localStorage.getItem(k) || d
};

/* ===== DEFAULT LANGUAGE DATA ===== */
const i18nDefault = {
  en: {
    nav_product:"Product", nav_benefits:"Benefits", nav_howto:"How to Use",
    nav_reviews:"Reviews", nav_faq:"FAQ", nav_contact:"Contact",
    hero_badge:"🌱 Premium Bio-Stimulant", hero_title:"Bio MXL",
    hero_tagline:"Nature's Intelligence. Farmer's Triumph.",
    hero_b1:"✓ Boosts Yield up to 30%", hero_b2:"✓ Strengthens Root System",
    hero_b3:"✓ Improves Soil Microbial Activity", hero_b4:"✓ 100% Organic & Safe",
    cta_contact:"📞 Contact Now", cta_video:"▶ Watch Video", cta_buy:"🛒 Buy Now",
    vid_tag:"🎬 Watch & Learn", vid_title:"See Bio MXL in Action",
    vid_sub:"Real results from real farmers across India",
    prod_tag:"🌿 About the Product", prod_title:"What is Bio MXL?",
    prod_sub:"A scientifically formulated bio-stimulant crafted from nature's finest organic compounds",
    prod_desc:"Bio MXL is a next-generation organic bio-stimulant developed using advanced fermentation technology and natural plant-growth promoting microorganisms.",
    prod_desc2:"Trusted by thousands of progressive farmers across Maharashtra, Madhya Pradesh, Gujarat, and Punjab.",
    stat1:"Yield Increase", stat2:"Happy Farmers", stat3:"Years R&D", stat4:"Crops Tested",
    feat1_h:"Microbial Boost", feat1_p:"Enriches soil with beneficial microbes for long-lasting fertility",
    feat2_h:"Root Stimulation", feat2_p:"Accelerates root development for better nutrient uptake",
    feat3_h:"Water Efficiency", feat3_p:"Improves soil water retention by up to 40%",
    feat4_h:"Disease Resistance", feat4_p:"Naturally boosts plant immunity against pathogens",
    comp_tag:"⚗️ Composition", comp_title:"Ingredients & Technical Composition",
    comp_sub:"Formulated with the finest organic and scientifically validated components",
    comp_label:"Bio MXL", comp_label2:"Formula",
    ct_h1:"Ingredient", ct_h2:"Source", ct_h3:"Content", ct_h4:"Function",
    ctf1:"Soil conditioner", ctf2:"Nutrient transporter", ctf3:"Growth hormone",
    ctf4:"Protein builder", ctf5:"Root expansion", ctf6:"Disease control",
    ctf7:"Enzyme activator", ctf8:"Pollination support",
    ben_tag:"🏆 Why Bio MXL", ben_title:"Proven Benefits for Your Farm",
    ben_sub:"Experience a complete transformation in crop health and productivity",
    b1h:"Better Root Growth", b1p:"Stimulates lateral root formation for deeper root penetration",
    b2h:"Soil Health", b2p:"Revives soil biology and increases organic carbon content",
    b3h:"Water Retention", b3p:"Reduces irrigation frequency by up to 30%",
    b4h:"Yield Increase", b4p:"Documented 20–35% yield improvement across major crops",
    b5h:"Fertilizer Efficiency", b5p:"Enhances NPK absorption so farmers spend 25% less",
    b6h:"Plant Strength", b6p:"Thicker stems, glossier leaves, stronger cell walls",
    b7h:"Microbial Activity", b7p:"Multiplies beneficial soil microbes 10× for productive farming",
    b8h:"Crop Performance", b8p:"Better grain filling, fruit size, colour, and shelf life",
    how_tag:"📋 Application Guide", how_title:"How to Use Bio MXL",
    how_sub:"Simple, precise, and highly effective application methods",
    dose_ml:"ml / acre", dose_ml2:"ml / L water",
    dose_drip:"Drip Irrigation", dose_flood:"Flood Irrigation", dose_spray:"Foliar Spray",
    tl1h:"Soil Preparation", tl1p:"Mix 500ml Bio MXL with 50L water. Apply evenly 3–5 days before sowing.",
    tl2h:"Seed Treatment", tl2p:"Soak seeds in 3ml Bio MXL per litre for 30 minutes before sowing.",
    tl3h:"Vegetative Stage", tl3p:"Apply 250ml/acre drip or 500ml/acre flood at 20–25 days after germination.",
    tl4h:"Flowering & Fruiting", tl4p:"Foliar spray 3ml/litre at flowering stage for better fruit set.",
    ba_before:"Without Bio MXL", ba_after:"With Bio MXL ✓",
    ba1a:"Weak, shallow roots", ba2a:"Low nutrient absorption",
    ba3a:"High irrigation demand", ba4a:"Poor disease resistance",
    ba1b:"Deep, branched root system", ba2b:"2× NPK uptake efficiency",
    ba3b:"30% less water needed", ba4b:"Natural immunity activated",
    rev_tag:"⭐ Farmer Reviews", rev_title:"What Farmers Say",
    rev_sub:"Real voices from the fields of India",
    gr_title:"Rated Highly on Google", gr_based:"Based on 340 reviews", gr_write:"✍ Write a Review",
    gal_tag:"📸 Gallery", gal_title:"Results in the Field",
    gal_sub:"Visual proof from farms across India",
    cert_tag:"🏅 Trust & Quality", cert_title:"Certifications & Approvals",
    cert1:"Quality Management System Certified", cert2:"National Programme for Organic Production",
    cert3:"Central Insecticides Board Registered", cert4:"Fertilizer Control Order Compliant",
    cert5:"United States Department of Agriculture", cert6:"Third Party Laboratory Verified",
    faq_tag:"❓ FAQ", faq_title:"Frequently Asked Questions",
    con_tag:"📬 Get in Touch", con_title:"Contact Us",
    con_sub:"Our agronomists are ready to help you get the most from Bio MXL",
    ci_phone:"Phone / WhatsApp", ci_email:"Email", ci_addr:"Address",
    ci_addrval:"Bio MXL Agro Pvt Ltd, Pune, Maharashtra – 411001",
    ci_hours:"Business Hours", ci_hrsval:"Mon–Sat: 9:00 AM – 6:00 PM",
    cf_name:"Full Name *", cf_mobile:"Mobile *", cf_email:"Email",
    cf_state:"State *", cf_msg:"Message", cf_submit:"Send Message 📨",
    foot_desc:"Premium organic bio-stimulant trusted by progressive farmers across India.",
    foot_quick:"Quick Links", foot_crops:"Suitable Crops", foot_contact:"Contact",
    foot_admin:"Admin Panel", foot_dist:"Distributor Enquiry Welcome"
  },
  hi: {
    nav_product:"उत्पाद", nav_benefits:"फायदे", nav_howto:"उपयोग विधि",
    nav_reviews:"समीक्षाएं", nav_faq:"FAQ", nav_contact:"संपर्क",
    hero_badge:"🌱 प्रीमियम बायो-स्टिमुलेंट", hero_title:"Bio MXL",
    hero_tagline:"प्रकृति की शक्ति। किसान की जीत।",
    hero_b1:"✓ उपज 30% तक बढ़ाए", hero_b2:"✓ जड़ प्रणाली को मजबूत करे",
    hero_b3:"✓ मिट्टी की सूक्ष्मजीव गतिविधि बढ़ाए", hero_b4:"✓ 100% जैविक और सुरक्षित",
    cta_contact:"📞 अभी संपर्क करें", cta_video:"▶ वीडियो देखें", cta_buy:"🛒 अभी खरीदें",
    vid_tag:"🎬 देखें और सीखें", vid_title:"Bio MXL को कार्य में देखें",
    vid_sub:"भारत भर के वास्तविक किसानों से वास्तविक परिणाम",
    prod_tag:"🌿 उत्पाद के बारे में", prod_title:"Bio MXL क्या है?",
    prod_sub:"प्रकृति के सर्वोत्तम जैविक यौगिकों से तैयार",
    prod_desc:"Bio MXL एक अगली पीढ़ी का जैविक बायो-स्टिमुलेंट है।",
    prod_desc2:"महाराष्ट्र, मध्य प्रदेश, गुजरात और पंजाब के हजारों किसानों द्वारा विश्वसनीय।",
    stat1:"उपज वृद्धि", stat2:"खुश किसान", stat3:"वर्ष R&D", stat4:"फसलें परीक्षण",
    feat1_h:"सूक्ष्मजीव बढ़ावा", feat1_p:"दीर्घकालिक उर्वरता के लिए मिट्टी को समृद्ध करता है",
    feat2_h:"जड़ उत्तेजना", feat2_p:"बेहतर पोषक तत्व ग्रहण के लिए जड़ विकास तेज करता है",
    feat3_h:"जल दक्षता", feat3_p:"मिट्टी की जल धारण क्षमता 40% तक सुधारता है",
    feat4_h:"रोग प्रतिरोध", feat4_p:"पौधों की प्रतिरक्षा को प्राकृतिक रूप से बढ़ाता है",
    comp_tag:"⚗️ संरचना", comp_title:"सामग्री और तकनीकी संरचना",
    comp_sub:"सर्वोत्तम जैविक घटकों से तैयार",
    comp_label:"Bio MXL", comp_label2:"फार्मूला",
    ct_h1:"सामग्री", ct_h2:"स्रोत", ct_h3:"मात्रा", ct_h4:"कार्य",
    ctf1:"मिट्टी सुधारक", ctf2:"पोषक वाहक", ctf3:"विकास हार्मोन",
    ctf4:"प्रोटीन निर्माता", ctf5:"जड़ विस्तार", ctf6:"रोग नियंत्रण",
    ctf7:"एंजाइम सक्रियकर्ता", ctf8:"परागण सहायक",
    ben_tag:"🏆 Bio MXL क्यों चुनें", ben_title:"आपके खेत के लिए सिद्ध लाभ",
    ben_sub:"फसल स्वास्थ्य और उत्पादकता में पूर्ण परिवर्तन",
    b1h:"बेहतर जड़ विकास", b1p:"पार्श्व जड़ निर्माण को उत्तेजित करता है",
    b2h:"मिट्टी स्वास्थ्य", b2p:"मिट्टी की जीव विज्ञान को पुनर्जीवित करता है",
    b3h:"जल धारण", b3p:"सिंचाई आवृत्ति 30% तक कम करता है",
    b4h:"उपज वृद्धि", b4p:"20-35% उपज सुधार",
    b5h:"उर्वरक दक्षता", b5p:"NPK अवशोषण बढ़ाता है",
    b6h:"पौधे की शक्ति", b6p:"मोटे तने, चमकदार पत्तियां",
    b7h:"सूक्ष्मजीव गतिविधि", b7p:"लाभकारी मिट्टी रोगाणुओं को 10× गुणा",
    b8h:"फसल प्रदर्शन", b8p:"बेहतर दाना भरना और फल का आकार",
    how_tag:"📋 उपयोग मार्गदर्शिका", how_title:"Bio MXL का उपयोग कैसे करें",
    how_sub:"अधिकतम परिणामों के लिए सरल उपयोग विधियां",
    dose_ml:"मिली / एकड़", dose_ml2:"मिली / लीटर पानी",
    dose_drip:"ड्रिप सिंचाई", dose_flood:"बाढ़ सिंचाई", dose_spray:"पर्णीय छिड़काव",
    tl1h:"भूमि तैयारी", tl1p:"500ml Bio MXL को 50L पानी में मिलाएं। बुवाई से 3-5 दिन पहले लगाएं।",
    tl2h:"बीज उपचार", tl2p:"प्रति लीटर पानी में 3ml Bio MXL में 30 मिनट भिगोएं।",
    tl3h:"वानस्पतिक अवस्था", tl3p:"20-25 दिन बाद ड्रिप से 250ml/एकड़ लगाएं।",
    tl4h:"फूल और फल अवस्था", tl4p:"3ml/लीटर पर्णीय छिड़काव फूल आने पर करें।",
    ba_before:"Bio MXL के बिना", ba_after:"Bio MXL के साथ ✓",
    ba1a:"कमजोर, उथली जड़ें", ba2a:"कम पोषक तत्व अवशोषण",
    ba3a:"अधिक सिंचाई", ba4a:"कमजोर रोग प्रतिरोध",
    ba1b:"गहरी, शाखित जड़ें", ba2b:"2× NPK दक्षता",
    ba3b:"30% कम पानी", ba4b:"प्राकृतिक प्रतिरक्षा",
    rev_tag:"⭐ किसान समीक्षाएं", rev_title:"किसान क्या कहते हैं",
    rev_sub:"भारत के खेतों से वास्तविक आवाजें",
    gr_title:"Google पर उच्च रेटिंग", gr_based:"340 समीक्षाओं पर", gr_write:"✍ समीक्षा लिखें",
    gal_tag:"📸 गैलरी", gal_title:"खेत में परिणाम", gal_sub:"भारत भर के खेतों से प्रमाण",
    cert_tag:"🏅 विश्वास और गुणवत्ता", cert_title:"प्रमाणपत्र और अनुमोदन",
    cert1:"गुणवत्ता प्रबंधन प्रणाली", cert2:"जैविक उत्पादन राष्ट्रीय कार्यक्रम",
    cert3:"केंद्रीय कीटनाशक बोर्ड", cert4:"उर्वरक नियंत्रण आदेश",
    cert5:"संयुक्त राज्य कृषि विभाग", cert6:"तृतीय पक्ष प्रयोगशाला",
    faq_tag:"❓ FAQ", faq_title:"अक्सर पूछे जाने वाले प्रश्न",
    con_tag:"📬 संपर्क करें", con_title:"हमसे संपर्क करें",
    con_sub:"हमारे कृषि विशेषज्ञ आपकी सहायता के लिए तैयार",
    ci_phone:"फोन / WhatsApp", ci_email:"ईमेल", ci_addr:"पता",
    ci_addrval:"Bio MXL एग्रो प्रा.लि., पुणे, महाराष्ट्र – 411001",
    ci_hours:"व्यवसाय समय", ci_hrsval:"सोम–शनि: 9AM–6PM",
    cf_name:"पूरा नाम *", cf_mobile:"मोबाइल *", cf_email:"ईमेल",
    cf_state:"राज्य *", cf_msg:"संदेश", cf_submit:"संदेश भेजें 📨",
    foot_desc:"भारत भर के किसानों द्वारा विश्वसनीय जैविक बायो-स्टिमुलेंट।",
    foot_quick:"त्वरित लिंक", foot_crops:"उपयुक्त फसलें", foot_contact:"संपर्क",
    foot_admin:"एडमिन पैनल", foot_dist:"वितरक पूछताछ स्वागत"
  },
  mr: {
    nav_product:"उत्पादन", nav_benefits:"फायदे", nav_howto:"वापर पद्धती",
    nav_reviews:"शेतकरी मते", nav_faq:"FAQ", nav_contact:"संपर्क",
    hero_badge:"🌱 प्रीमियम बायो-स्टिम्युलंट", hero_title:"Bio MXL",
    hero_tagline:"निसर्गाची बुद्धिमत्ता. शेतकऱ्याचा विजय.",
    hero_b1:"✓ उत्पादन 30% पर्यंत वाढवते", hero_b2:"✓ मूळ प्रणाली मजबूत करते",
    hero_b3:"✓ मातीतील सूक्ष्मजीव सुधारते", hero_b4:"✓ 100% सेंद्रिय आणि सुरक्षित",
    cta_contact:"📞 आत्ताच संपर्क", cta_video:"▶ व्हिडिओ पहा", cta_buy:"🛒 खरेदी करा",
    vid_tag:"🎬 पाहा आणि शिका", vid_title:"Bio MXL प्रत्यक्षात पाहा",
    vid_sub:"भारतभरातील शेतकऱ्यांचे परिणाम",
    prod_tag:"🌿 उत्पादनाबद्दल", prod_title:"Bio MXL म्हणजे काय?",
    prod_sub:"निसर्गातील सर्वोत्तम घटकांपासून तयार",
    prod_desc:"Bio MXL हे अत्याधुनिक सेंद्रिय बायो-स्टिम्युलंट आहे।",
    prod_desc2:"महाराष्ट्र, गुजरात आणि पंजाबमधील शेतकऱ्यांनी विश्वास ठेवलेले।",
    stat1:"उत्पादन वाढ", stat2:"खूश शेतकरी", stat3:"वर्षे संशोधन", stat4:"पिके चाचणी",
    feat1_h:"सूक्ष्मजीव वाढ", feat1_p:"मातीला फायदेशीर सूक्ष्मजीवांनी समृद्ध करते",
    feat2_h:"मूळ उत्तेजना", feat2_p:"मूळ विकास वेगवान करते",
    feat3_h:"जल कार्यक्षमता", feat3_p:"पाणी धारण क्षमता 40% सुधारते",
    feat4_h:"रोग प्रतिरोध", feat4_p:"नैसर्गिकरित्या प्रतिकारशक्ती वाढवते",
    comp_tag:"⚗️ रचना", comp_title:"घटक आणि तांत्रिक रचना",
    comp_sub:"सर्वोत्तम सेंद्रिय घटकांपासून तयार",
    comp_label:"Bio MXL", comp_label2:"सूत्र",
    ct_h1:"घटक", ct_h2:"स्रोत", ct_h3:"प्रमाण", ct_h4:"कार्य",
    ctf1:"माती सुधारक", ctf2:"पोषक वाहक", ctf3:"वाढ संप्रेरक",
    ctf4:"प्रथिने निर्माता", ctf5:"मूळ विस्तार", ctf6:"रोग नियंत्रण",
    ctf7:"एन्झाइम सक्रियकर्ता", ctf8:"परागण सहाय्यक",
    ben_tag:"🏆 Bio MXL का निवडा", ben_title:"तुमच्या शेतासाठी फायदे",
    ben_sub:"पीक आरोग्य आणि उत्पादकतेत संपूर्ण बदल",
    b1h:"चांगली मूळ वाढ", b1p:"बाजूच्या मूळ निर्मितीला उत्तेजित करते",
    b2h:"माती आरोग्य", b2p:"मातीचे जीवशास्त्र पुनरुज्जीवित करते",
    b3h:"जल धारण", b3p:"सिंचन वारंवारता 30% कमी करते",
    b4h:"उत्पादन वाढ", b4p:"20-35% उत्पादन सुधारणा",
    b5h:"खत कार्यक्षमता", b5p:"NPK शोषण वाढवते",
    b6h:"वनस्पती शक्ती", b6p:"जाड देठ, चकचकीत पाने",
    b7h:"सूक्ष्मजीव क्रिया", b7p:"फायदेशीर सूक्ष्मजीव 10 पट वाढवते",
    b8h:"पीक कामगिरी", b8p:"चांगले दाणे भरणे आणि फळाचा आकार",
    how_tag:"📋 वापर मार्गदर्शिका", how_title:"Bio MXL कसे वापरावे",
    how_sub:"जास्तीत जास्त परिणामांसाठी सोपी वापर पद्धती",
    dose_ml:"मि.ली. / एकर", dose_ml2:"मि.ली. / लीटर पाणी",
    dose_drip:"ठिबक सिंचन", dose_flood:"पूर सिंचन", dose_spray:"पर्णीय फवारणी",
    tl1h:"जमीन तयारी", tl1p:"500ml Bio MXL 50L पाण्यात मिसळा. पेरणीपूर्वी 3-5 दिवस लावा.",
    tl2h:"बीज प्रक्रिया", tl2p:"3ml/लीटर पाण्यात 30 मिनिटे बिया भिजवा.",
    tl3h:"वनस्पतिज अवस्था", tl3p:"उगवणीनंतर 20-25 दिवसांनी 250ml/एकर लावा.",
    tl4h:"फुलोरा अवस्था", tl4p:"3ml/लीटर फवारणी फुलोरा अवस्थेत करा.",
    ba_before:"Bio MXL शिवाय", ba_after:"Bio MXL सह ✓",
    ba1a:"कमकुवत मुळे", ba2a:"कमी पोषकद्रव्य शोषण",
    ba3a:"जास्त सिंचन", ba4a:"कमकुवत रोग प्रतिरोध",
    ba1b:"खोल, फांद्यायुक्त मुळे", ba2b:"2× NPK कार्यक्षमता",
    ba3b:"30% कमी पाणी", ba4b:"नैसर्गिक प्रतिकारशक्ती",
    rev_tag:"⭐ शेतकरी मते", rev_title:"शेतकरी काय म्हणतात",
    rev_sub:"भारताच्या शेतांमधून आवाजी",
    gr_title:"Google वर उच्च रेटिंग", gr_based:"340 समीक्षांवर", gr_write:"✍ समीक्षा लिहा",
    gal_tag:"📸 गॅलरी", gal_title:"शेतात परिणाम", gal_sub:"भारतभरातील पुरावे",
    cert_tag:"🏅 विश्वास आणि गुणवत्ता", cert_title:"प्रमाणपत्रे",
    cert1:"गुणवत्ता व्यवस्थापन प्रणाली", cert2:"सेंद्रिय उत्पादन कार्यक्रम",
    cert3:"केंद्रीय कीटकनाशक मंडळ", cert4:"खत नियंत्रण आदेश",
    cert5:"अमेरिकन कृषी विभाग", cert6:"तृतीय पक्ष प्रयोगशाळा",
    faq_tag:"❓ FAQ", faq_title:"वारंवार विचारले जाणारे प्रश्न",
    con_tag:"📬 संपर्क करा", con_title:"आमच्याशी संपर्क",
    con_sub:"कृषी तज्ञ तुम्हाला मदत करण्यास तयार",
    ci_phone:"फोन / WhatsApp", ci_email:"ईमेल", ci_addr:"पत्ता",
    ci_addrval:"Bio MXL एग्रो प्रा.लि., पुणे, महाराष्ट्र – 411001",
    ci_hours:"व्यवसाय वेळ", ci_hrsval:"सोम–शनि: 9AM–6PM",
    cf_name:"पूर्ण नाव *", cf_mobile:"मोबाईल *", cf_email:"ईमेल",
    cf_state:"राज्य *", cf_msg:"संदेश", cf_submit:"संदेश पाठवा 📨",
    foot_desc:"भारतभरातील शेतकऱ्यांनी विश्वास ठेवलेले सेंद्रिय उत्पादन.",
    foot_quick:"त्वरित दुवे", foot_crops:"योग्य पिके", foot_contact:"संपर्क",
    foot_admin:"एडमिन पॅनेल", foot_dist:"वितरक चौकशी स्वागत"
  }
};

/* ===== MERGE ADMIN LANGUAGE OVERRIDES ===== */
function buildI18n() {
  const overrides = LS.get('biomxl_langs', {});
  const result = JSON.parse(JSON.stringify(i18nDefault)); // deep clone
  // Admin lang overrides: keys like "en_tl" → hero_tagline etc
  const keyMap = {
    tl: 'hero_tagline', bg: 'hero_badge',
    pt: 'prod_title', ps: 'prod_sub',
    b1: 'hero_b1', b2: 'hero_b2', b3: 'hero_b3', b4: 'hero_b4'
  };
  ['en','hi','mr'].forEach(lang => {
    Object.entries(keyMap).forEach(([short, full]) => {
      const val = overrides[lang + '_' + short];
      if (val) result[lang][full] = val;
    });
  });
  return result;
}

/* ===== CURRENT LANGUAGE ===== */
let currentLang = localStorage.getItem('biomxl_lang') || 'en';
let i18nData = buildI18n();

/* ===== APPLY LANGUAGE ===== */
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('biomxl_lang', lang);
  i18nData = buildI18n();
  const t = i18nData[lang] || i18nData.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('btn-' + lang);
  if (btn) btn.classList.add('active');
  document.documentElement.lang = lang;
  // re-render dynamic sections in current lang
  renderFAQ();
  renderReviews();
  renderGoogleReviews();
  renderCompositionTable();
  renderHowToSteps();
  renderComparisonTable();
}

/* ===========================
   ■■ ADMIN → LIVE BRIDGE ■■
   All functions below read
   LocalStorage and apply to DOM
   =========================== */

/* ===== 1. THEME (CSS Variables) ===== */
function applyTheme() {
  const t = LS.get('biomxl_theme', {});
  if (!t.c_green) return;
  const map = {
    '--green': t.c_green,
    '--green-dark': t.c_dark,
    '--green-light': t.c_light,
    '--green-pale': t.c_pale,
    '--orange': t.c_orange,
    '--orange-light': t.c_ohover,
    '--text': t.c_text,
    '--text-muted': t.c_muted,
    '--off-white': t.c_bg
  };
  const root = document.documentElement;
  Object.entries(map).forEach(([k, v]) => { if (v) root.style.setProperty(k, v); });

  // Hero background image
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg && t.hero_bg) {
    heroBg.style.backgroundImage = `url('${t.hero_bg}')`;
  }
  // Hero overlay gradient
  const overlay = document.querySelector('.hero-overlay');
  if (overlay && t.c_ov1 && t.c_ov2) {
    const op = t.ov_op || 0.85;
    overlay.style.background =
      `linear-gradient(135deg, ${hexToRgba(t.c_ov1, op)} 0%, ${hexToRgba(t.c_ov2, op * 0.9)} 45%, ${hexToRgba(t.c_ov2, op * 0.8)} 100%)`;
  }
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${alpha})`;
}

/* ===== 2. FONTS ===== */
function applyFonts() {
  const f = LS.get('biomxl_fonts', {});
  if (!f.head && !f.body_f) return;
  const fontsToLoad = [];
  if (f.head) fontsToLoad.push(f.head);
  if (f.body_f) fontsToLoad.push(f.body_f);
  fontsToLoad.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(font)}:wght@300;400;500;600;700;900&display=swap`;
    document.head.appendChild(link);
  });
  setTimeout(() => {
    const root = document.documentElement;
    if (f.head) root.style.setProperty('--font-heading', `'${f.head}', serif`);
    if (f.body_f) root.style.setProperty('--font-body', `'${f.body_f}', sans-serif`);
    if (f.fs_hero) {
      document.querySelectorAll('.hero-title').forEach(el => el.style.fontSize = f.fs_hero + 'px');
    }
    if (f.fs_h2) {
      document.querySelectorAll('.section-header h2').forEach(el => el.style.fontSize = f.fs_h2 + 'px');
    }
    if (f.fs_body) {
      document.body.style.fontSize = f.fs_body + 'px';
    }
  }, 400);
}

/* ===== 3. LOGO ===== */
function applyLogo() {
  const logo = LS.str('biomxl_logo', '');
  if (logo) {
    // Navbar logo emoji → img
    const navLogo = document.querySelector('.nav-logo .logo-leaf');
    if (navLogo) {
      const img = document.createElement('img');
      img.src = logo;
      img.style.cssText = 'width:32px;height:32px;border-radius:6px;object-fit:contain;';
      navLogo.replaceWith(img);
    }
    // Footer logo
    const footLogo = document.querySelector('.foot-logo');
    if (footLogo) {
      footLogo.innerHTML = `<img src="${logo}" style="height:36px;border-radius:6px;object-fit:contain;margin-right:8px;vertical-align:middle"/> Bio<strong>MXL</strong>`;
    }
  }
  // Favicon
  const fav = LS.str('biomxl_favicon', '');
  if (fav) {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
    link.href = fav;
  }
  // Brand name in nav
  const brand = LS.get('biomxl_brand', {});
  if (brand.brand_name) {
    const navTxt = document.querySelector('.nav-logo strong');
    if (navTxt) navTxt.textContent = brand.brand_name;
  }
  // Social links
  const socMap = { soc_fb: '.social-btn:nth-child(1)', soc_yt: '.social-btn:nth-child(3)', soc_ig: '.social-btn:nth-child(4)', soc_li: '.social-btn:nth-child(2)' };
  Object.entries(socMap).forEach(([key, sel]) => {
    if (brand[key]) {
      const el = document.querySelector(sel);
      if (el) el.href = brand[key];
    }
  });
}

/* ===== 4. HERO SECTION ===== */
function applyHero() {
  const title = LS.str('biomxl_hero_title', '');
  const tagline = LS.str('biomxl_hero_tagline', '');
  const img = LS.str('biomxl_hero_img', '');
  const extra = LS.get('biomxl_hero_extra', {});

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
  // Bullets
  const bulletKeys = ['h_b1','h_b2','h_b3','h_b4'];
  const bulletEls = document.querySelectorAll('.hero-bullets li');
  bulletKeys.forEach((k, i) => {
    if (extra[k] && bulletEls[i]) bulletEls[i].textContent = extra[k];
  });
  // CTA buttons
  const ctas = document.querySelectorAll('.hero-ctas .btn');
  const ctaData = [
    { text: extra.h_cta1, link: extra.h_cta1l, style: extra.h_cta1s },
    { text: extra.h_cta2, link: extra.h_cta2l, style: extra.h_cta2s },
    { text: extra.h_cta3, link: extra.h_cta3l, style: extra.h_cta3s }
  ];
  ctaData.forEach((cta, i) => {
    if (ctas[i]) {
      if (cta.text) ctas[i].textContent = cta.text;
      if (cta.link) ctas[i].href = cta.link;
    }
  });
}

/* ===== 5. PRODUCT DESCRIPTIONS ===== */
function applyProductContent() {
  const d1 = LS.str('biomxl_pd1', '');
  const d2 = LS.str('biomxl_pd2', '');
  if (d1) {
    const el = document.querySelector('.product-text p:first-child');
    if (el) el.textContent = d1;
  }
  if (d2) {
    const el = document.querySelector('.product-text p:nth-child(2)');
    if (el) el.textContent = d2;
  }
  // Stats
  const sd = LS.get('biomxl_stats', {});
  for (let i = 1; i <= 4; i++) {
    const numEl = document.querySelectorAll('.stat-num')[i-1];
    const lblEl = document.querySelectorAll('.stat-label')[i-1];
    const unitEl = document.querySelectorAll('.stat-unit')[i-1];
    if (numEl && sd['s'+i+'n']) numEl.setAttribute('data-target', sd['s'+i+'n']);
    if (lblEl && sd['s'+i+'l']) lblEl.textContent = sd['s'+i+'l'];
    if (unitEl && sd['s'+i+'u']) unitEl.textContent = sd['s'+i+'u'];
  }
}

/* ===== 6. COMPOSITION TABLE ===== */
const DEF_COMP = [
  {i:"Humic Acid",s:"Leonardite",p:"12%",f:"Soil conditioner"},
  {i:"Fulvic Acid",s:"Organic matter",p:"6%",f:"Nutrient transporter"},
  {i:"Seaweed Extract",s:"Ascophyllum nodosum",p:"8%",f:"Growth hormone"},
  {i:"Amino Acids",s:"Plant hydrolysate",p:"10%",f:"Protein builder"},
  {i:"Mycorrhizae",s:"Natural fungi",p:"5×10⁶/g",f:"Root expansion"},
  {i:"Trichoderma",s:"Beneficial fungi",p:"2×10⁶/g",f:"Disease control"},
  {i:"Zinc chelated",s:"EDTA chelate",p:"0.5%",f:"Enzyme activator"},
  {i:"Boron",s:"Sodium borate",p:"0.2%",f:"Pollination support"}
];

function renderCompositionTable() {
  const rows = LS.get('biomxl_comp', DEF_COMP);
  const tbody = document.querySelector('.comp-table tbody');
  if (!tbody) return;
  tbody.innerHTML = rows.map(r => `
    <tr>
      <td>${r.i || r.ing || ''}</td>
      <td>${r.s || r.src || ''}</td>
      <td>${r.p || r.pct || ''}</td>
      <td>${r.f || r.fn  || ''}</td>
    </tr>`).join('');
  // Orbit tags
  const tags = LS.get('biomxl_tags', ["Humic Acid","Fulvic Acid","Amino Acids","Seaweed Extract","Mycorrhizae","Trichoderma"]);
  const tagContainer = document.querySelector('.comp-tags');
  if (tagContainer) {
    tagContainer.innerHTML = tags.map(t => `<span class="comp-tag">${t}</span>`).join('');
  }
}

/* ===== 7. HOW TO USE ===== */
const DEF_STEPS = [
  {t:"Soil Preparation", d:"Mix 500ml Bio MXL with 50L water. Apply 3–5 days before sowing."},
  {t:"Seed Treatment", d:"Soak seeds in 3ml Bio MXL per litre for 30 minutes."},
  {t:"Vegetative Stage", d:"Apply 250ml/acre drip or 500ml/acre flood at 20–25 days."},
  {t:"Flowering & Fruiting", d:"Foliar spray 3ml/litre at flowering stage."}
];

function renderHowToSteps() {
  const steps = LS.get('biomxl_steps', DEF_STEPS);
  const dose = LS.get('biomxl_dose', {});

  // Dosage cards
  const doseCards = document.querySelectorAll('.dose-card');
  const doseData = [
    { num: dose.d1n || '250', unit: dose.d1u || 'ml / acre', label: dose.d1l || 'Drip Irrigation' },
    { num: dose.d2n || '500', unit: dose.d2u || 'ml / acre', label: dose.d2l || 'Flood Irrigation' },
    { num: dose.d3n || '3',   unit: dose.d3u || 'ml / L water', label: dose.d3l || 'Foliar Spray' }
  ];
  doseCards.forEach((card, i) => {
    if (!doseData[i]) return;
    const numEl = card.querySelector('.dose-num');
    const unitEl = card.querySelector('.dose-unit');
    const lblEl = card.querySelector('p');
    if (numEl) numEl.textContent = doseData[i].num;
    if (unitEl) unitEl.textContent = doseData[i].unit;
    if (lblEl) lblEl.textContent = doseData[i].label;
  });

  // Timeline steps
  const timeline = document.querySelector('.timeline');
  if (!timeline) return;
  const sides = ['left','right','left','right','left','right'];
  timeline.innerHTML = steps.map((s, i) => `
    <div class="tl-item ${sides[i] || 'left'}">
      <div class="tl-dot">${i+1}</div>
      <div class="tl-card">
        <h4>${s.t || s.title || ''}</h4>
        <p>${s.d || s.desc || ''}</p>
      </div>
    </div>`).join('');
}

/* ===== 8. BEFORE vs AFTER ===== */
const DEF_LEFT = ["Weak, shallow roots","Low nutrient absorption","High irrigation demand","Poor disease resistance"];
const DEF_RIGHT = ["Deep, branched root system","2× NPK uptake efficiency","30% less water needed","Natural immunity activated"];

function renderComparisonTable() {
  const leftItems = LS.get('biomxl_cmpL', DEF_LEFT);
  const rightItems = LS.get('biomxl_cmpR', DEF_RIGHT);
  const col1Title = LS.str('biomxl_col1t', 'Without Bio MXL');
  const col2Title = LS.str('biomxl_col2t', 'With Bio MXL ✓');

  const beforeCard = document.querySelector('.ba-card.before');
  const afterCard  = document.querySelector('.ba-card.after');
  if (beforeCard) {
    beforeCard.querySelector('.ba-label').textContent = col1Title;
    beforeCard.querySelector('ul').innerHTML = leftItems.map(item => `<li>${item}</li>`).join('');
  }
  if (afterCard) {
    afterCard.querySelector('.ba-label').textContent = col2Title;
    afterCard.querySelector('ul').innerHTML = rightItems.map(item => `<li>${item}</li>`).join('');
  }
}

/* ===== 9. VIDEO ===== */
let videoUrl = '';
function applyVideoSettings() {
  videoUrl = LS.str('biomxl_video', 'https://www.youtube.com/embed/dQw4w9WgXcQ');
  const thumb = LS.str('biomxl_vthumb', '');
  if (thumb) {
    const img = document.querySelector('.video-thumb');
    if (img) img.src = thumb;
  }
}
function loadVideo() {
  const container = document.getElementById('videoContainer');
  if (!container) return;
  container.innerHTML = `<iframe src="${videoUrl}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen style="width:100%;height:100%;border:none;border-radius:16px;"></iframe>`;
}

/* ===== 10. REVIEWS ===== */
const DEF_REVIEWS = [
  {n:"Ramesh Patil",lo:"Nashik, Maharashtra",c:"Grapes",st:5,av:"https://placehold.co/80x80/2d7a2d/fff?text=RP",t:"Bio MXL completely transformed my vineyard. Grape bunch weight increased 28%!"},
  {n:"Suresh Kumar",lo:"Indore, MP",c:"Soybean",st:5,av:"https://placehold.co/80x80/1a4a1a/fff?text=SK",t:"Soybean mein yield 32% badhee. Mitti bhi achi ho gayi hai!"},
  {n:"Priya Sharma",lo:"Amravati, MH",c:"Cotton",st:5,av:"https://placehold.co/80x80/4caf50/fff?text=PS",t:"Cotton bolls are heavier and more uniform after using Bio MXL."},
  {n:"Mohan Singh",lo:"Ludhiana, PB",c:"Wheat",st:4,av:"https://placehold.co/80x80/795548/fff?text=MS",t:"Wheat crop excellent this rabi season. Grain weight increased."},
  {n:"Vijay Desai",lo:"Ahmedabad, GJ",c:"Sugarcane",st:5,av:"https://placehold.co/80x80/e67e22/fff?text=VD",t:"Bio MXL ni help thi gannani length 15% vdhi. Sugar recovery better."}
];

let currentSlide = 0;
let slideTimer;

function getReviews() {
  const stored = LS.get('biomxl_reviews', null);
  if (!stored) return DEF_REVIEWS;
  // Normalize both old format (name,text) and new (n,t)
  return stored.map(r => ({
    n: r.n || r.name || 'Farmer',
    lo: r.lo || r.location || '',
    c: r.c || r.crop || '',
    st: r.st || r.stars || 5,
    av: r.av || r.avatar || 'https://placehold.co/80x80/2d7a2d/fff?text=F',
    t: r.t || r.text || ''
  }));
}

function renderReviews() {
  const reviews = getReviews();
  const slider = document.getElementById('reviewSlider');
  const dotsEl = document.getElementById('sliderDots');
  if (!slider) return;
  slider.innerHTML = '';
  if (dotsEl) dotsEl.innerHTML = '';
  reviews.forEach((r, i) => {
    const slide = document.createElement('div');
    slide.className = `slide${i === currentSlide ? ' active' : ''}`;
    slide.innerHTML = `
      <div class="slide-inner">
        <img class="slide-avatar" src="${r.av}" alt="${r.n}" onerror="this.src='https://placehold.co/80x80/2d7a2d/fff?text=F'"/>
        <div class="slide-content">
          <div class="slide-stars">${'★'.repeat(r.st)}${'☆'.repeat(5-r.st)}</div>
          <p class="slide-text">"${r.t}"</p>
          <div class="slide-author">${r.n}</div>
          <div class="slide-location">${r.lo}</div>
          <span class="slide-crop">🌾 ${r.c}</span>
        </div>
      </div>`;
    slider.appendChild(slide);
    if (dotsEl) {
      const dot = document.createElement('div');
      dot.className = `dot${i === currentSlide ? ' active' : ''}`;
      dot.onclick = () => goToSlide(i);
      dotsEl.appendChild(dot);
    }
  });
  clearInterval(slideTimer);
  slideTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
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
  slideTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

/* ===== 11. GOOGLE REVIEWS ===== */
const DEF_GREVIEWS = [
  {n:"Anand Kulkarni",st:5,av:"https://placehold.co/44x44/4caf50/fff?text=AK",t:"Excellent product! Onion yield doubled this season."},
  {n:"Meena Joshi",st:5,av:"https://placehold.co/44x44/2d7a2d/fff?text=MJ",t:"Very happy. Tomato plants stronger and disease-free."},
  {n:"Raju Patel",st:4,av:"https://placehold.co/44x44/e67e22/fff?text=RP",t:"Good product. Improvement in cotton crop. Support helpful."}
];

function getGoogleReviews() {
  const stored = LS.get('biomxl_greviews', null);
  if (!stored) return DEF_GREVIEWS;
  return stored.map(r => ({
    n: r.n || r.name || 'Customer',
    st: r.st || r.stars || 5,
    av: r.av || r.avatar || 'https://placehold.co/44x44/4caf50/fff?text=G',
    t: r.t || r.text || ''
  }));
}

function renderGoogleReviews() {
  const reviews = getGoogleReviews();
  const container = document.getElementById('grCards');
  if (!container) return;
  container.innerHTML = reviews.map(r => `
    <div class="gr-card">
      <div class="gr-card-top">
        <img class="gr-avatar" src="${r.av}" alt="${r.n}" onerror="this.src='https://placehold.co/44x44/4caf50/fff?text=G'"/>
        <div>
          <div class="gr-name">${r.n}</div>
          <div class="gr-card-stars">${'★'.repeat(r.st)}${'☆'.repeat(5-r.st)}</div>
        </div>
      </div>
      <p class="gr-card-text">${r.t}</p>
    </div>`).join('');
}

/* ===== 12. GALLERY ===== */
const DEF_GALLERY = [
  {src:'https://placehold.co/400x400/1a4a1a/a5d6a7?text=Field+Result+1',cap:'Soybean field'},
  {src:'https://placehold.co/400x400/2d7a2d/fff?text=Root+Growth',cap:'Root development'},
  {src:'https://placehold.co/400x400/4caf50/fff?text=Crop+Yield',cap:'Cotton yield'},
  {src:'https://placehold.co/400x400/0d2b0d/4caf50?text=Soil+Health',cap:'Soil health'},
  {src:'https://placehold.co/800x400/1a4a1a/fff?text=Farm+Overview',cap:'Farm overview'},
  {src:'https://placehold.co/400x400/2d7a2d/fff?text=Product+Use',cap:'Application'},
  {src:'https://placehold.co/400x400/4caf50/1a4a1a?text=Before+After',cap:'Before/After'},
  {src:'https://placehold.co/400x400/795548/fff?text=Harvest+Day',cap:'Harvest day'}
];

let galleryData = [];
let currentLbIndex = 0;

function getGallery() {
  const stored = LS.get('biomxl_gallery', null);
  if (!stored) return DEF_GALLERY;
  return stored.map(item => typeof item === 'string' ? {src: item, cap: ''} : item);
}

function renderGallery() {
  galleryData = getGallery();
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = galleryData.map((item, i) => {
    const isWide = i === 4; // 5th image spans 2 cols
    return `
      <div class="gallery-item${isWide ? ' wide' : ''}" onclick="openLightbox(${i})">
        <img src="${item.src}" alt="${item.cap || 'Gallery '+(i+1)}" loading="lazy"/>
        <div class="gallery-overlay">
          🔍${item.cap ? `<span style="position:absolute;bottom:8px;left:0;right:0;text-align:center;color:#fff;font-size:12px;padding:0 8px">${item.cap}</span>` : ''}
        </div>
      </div>`;
  }).join('');
}

function openLightbox(index) {
  currentLbIndex = index;
  document.getElementById('lbImg').src = galleryData[index].src || galleryData[index];
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
  const item = galleryData[currentLbIndex];
  document.getElementById('lbImg').src = item.src || item;
}
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (!lb || !lb.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lbNav(-1, { stopPropagation: () => {} });
  if (e.key === 'ArrowRight') lbNav(1, { stopPropagation: () => {} });
});

/* ===== 13. FAQ ===== */
const DEF_FAQS = [
  {q:"What crops is Bio MXL suitable for?", a:"Bio MXL is effective on all major crops including wheat, cotton, soybean, sugarcane, vegetables, fruits, and pulses."},
  {q:"Is Bio MXL safe for organic farming?", a:"Yes, Bio MXL is 100% organic and approved under NPOP and USDA organic standards."},
  {q:"What is the recommended dosage?", a:"Soil application: 500ml/acre flood, 250ml/acre drip. Foliar spray: 3ml/litre. Seed treatment: 3ml/litre for 30 mins."},
  {q:"When should I see results?", a:"Visible improvement in 10–15 days. Best yield results after 2–3 seasons of continuous use."},
  {q:"Can I mix Bio MXL with other fertilizers?", a:"Yes, with most water-soluble fertilizers. Avoid copper-based fungicides."},
  {q:"What is the shelf life?", a:"24 months from manufacture date when stored cool and dry, away from direct sunlight."},
  {q:"Is distributor network available?", a:"Yes, across Maharashtra, Gujarat, MP, Rajasthan, Punjab. Contact us for enquiries."}
];

function getFAQs() { return LS.get('biomxl_faqs', DEF_FAQS); }

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

/* ===== 14. CONTACT SETTINGS ===== */
function applyContactSettings() {
  const phone = LS.str('biomxl_phone', '');
  const email = LS.str('biomxl_email', '');
  const wa    = LS.str('biomxl_wa', '');
  const hours = LS.str('biomxl_hours', '');
  const addr  = LS.str('biomxl_addr', '');
  const wmsg  = LS.str('biomxl_wmsg', 'Hello! I am interested in Bio MXL');

  if (phone) {
    const el = document.getElementById('contactPhone');
    if (el) el.textContent = phone;
  }
  if (email) {
    const el = document.getElementById('contactEmail');
    if (el) el.textContent = email;
  }
  if (hours) {
    const el = document.querySelector('[data-i18n="ci_hrsval"]');
    if (el) el.textContent = hours;
  }
  if (addr) {
    const el = document.querySelector('[data-i18n="ci_addrval"]');
    if (el) el.textContent = addr;
  }
  // WhatsApp number update on all WA buttons
  const waNum = wa || (phone ? phone.replace(/\D/g,'') : '919999999999');
  const encodedMsg = encodeURIComponent(wmsg);
  const waUrl = `https://wa.me/${waNum}?text=${encodedMsg}`;
  document.querySelectorAll('.btn-whatsapp, #waFloat').forEach(el => {
    if (el) el.href = waUrl;
  });
}

/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ===== MOBILE MENU ===== */
function toggleMenu() {
  const links = document.getElementById('navLinks');
  if (links) links.classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    const links = document.getElementById('navLinks');
    if (links) links.classList.remove('open');
  });
});

/* ===== ANIMATED COUNTERS ===== */
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target')) || 0;
  const duration = 2000;
  const steps = 60;
  const increment = target / steps;
  let current = 0;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = target >= 1000 ? Math.round(target/1000) + 'K' : target;
      clearInterval(timer);
    } else {
      el.textContent = target >= 1000 ? Math.round(current/1000) + 'K' : Math.floor(current);
    }
  }, duration / steps);
}

/* ===== INTERSECTION OBSERVERS ===== */
const ioOpts = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' };

const revealIO = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealIO.unobserve(e.target); } });
}, ioOpts);

const benefitIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const delay = parseInt(e.target.getAttribute('data-delay') || 0);
      setTimeout(() => e.target.classList.add('visible'), delay);
      benefitIO.unobserve(e.target);
    }
  });
}, ioOpts);

const counterIO = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { animateCounter(e.target); counterIO.unobserve(e.target); } });
}, ioOpts);

/* ===== CONTACT FORM ===== */
function submitForm(e) {
  e.preventDefault();
  const name   = document.getElementById('cf_name').value.trim();
  const mobile = document.getElementById('cf_mobile').value.trim();
  const state  = document.getElementById('cf_state').value;
  if (!name || !mobile || !state) { alert('Please fill all required fields.'); return; }
  if (!/^[+\d][\d\s]{9,}$/.test(mobile)) { alert('Please enter a valid mobile number.'); return; }
  const success = document.getElementById('formSuccess');
  if (success) { success.classList.add('show'); setTimeout(() => success.classList.remove('show'), 5000); }
  document.getElementById('contactForm').reset();
}

/* ===== SMOOTH SCROLL ===== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

/* =============================================
   ■■ MASTER INIT — runs on DOMContentLoaded ■■
   ORDER MATTERS: Theme → Fonts → Logo → Content
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {

  // 1. Apply all design settings from admin
  applyTheme();
  applyFonts();
  applyLogo();

  // 2. Apply hero content
  applyHero();

  // 3. Apply product & section content
  applyProductContent();
  renderCompositionTable();
  renderHowToSteps();
  renderComparisonTable();

  // 4. Apply video
  applyVideoSettings();

  // 5. Render dynamic sections
  setLang(currentLang);      // applies i18n + re-renders FAQ/Reviews/etc
  renderGallery();
  renderReviews();
  renderGoogleReviews();
  renderFAQ();

  // 6. Apply contact / WhatsApp settings
  applyContactSettings();

  // 7. Attach observers
  document.querySelectorAll('.reveal').forEach(el => revealIO.observe(el));
  document.querySelectorAll('.benefit-card').forEach(el => benefitIO.observe(el));
  document.querySelectorAll('.stat-num[data-target]').forEach(el => counterIO.observe(el));

  console.log('%c✅ Bio MXL: All admin settings applied!', 'color:#2d7a2d;font-weight:bold;font-size:14px');
});

/* ============================================
   script.js v3.0 — NEW ADMIN BRIDGE FUNCTIONS
   Certifications, Benefits, Features,
   Counters, Product Image, Badge
   ============================================ */

/* ===== CERTIFICATIONS ===== */
const DEF_CERTS_LIVE = [
  {icon:'🏅',title:'ISO 9001:2015',desc:'Quality Management System Certified',imgUrl:''},
  {icon:'🌿',title:'NPOP Organic',desc:'National Programme for Organic Production',imgUrl:''},
  {icon:'🔬',title:'CIB & RC',desc:'Central Insecticides Board Registered',imgUrl:''},
  {icon:'✅',title:'FCO Approved',desc:'Fertilizer Control Order Compliant',imgUrl:''},
  {icon:'🌍',title:'USDA Organic',desc:'United States Department of Agriculture',imgUrl:''},
  {icon:'⚗️',title:'Lab Tested',desc:'Third Party Laboratory Verified',imgUrl:''}
];
function applyCertifications() {
  const certs = LS.get('biomxl_certs', DEF_CERTS_LIVE);
  const grid = document.querySelector('.cert-grid');
  if (!grid) return;
  // Update section title/subtitle if set
  const secTitle = LS.str('biomxl_cert_sec_title', '');
  const secSub   = LS.str('biomxl_cert_sec_sub', '');
  const certSection = document.getElementById('certifications');
  if (certSection) {
    if (secTitle) { const h2 = certSection.querySelector('h2'); if(h2) h2.textContent = secTitle; }
    if (secSub)   { const p  = certSection.querySelector('.section-header p'); if(p) p.textContent = secSub; }
  }
  grid.innerHTML = certs.map(c => `
    <div class="cert-card">
      <div class="cert-icon">
        ${c.imgUrl ? '<img src="'+c.imgUrl+'" alt="'+c.title+'" style="width:40px;height:40px;object-fit:contain"/>' : c.icon}
      </div>
      <h4>${c.title}</h4>
      <p>${c.desc}</p>
    </div>`).join('');
}

/* ===== BENEFITS CARDS ===== */
const DEF_BENEFITS_LIVE = [
  {emoji:'🌿',en_h:'Better Root Growth',en_p:'Stimulates lateral root formation for 2× deeper root penetration',hi_h:'बेहतर जड़ विकास',hi_p:'पार्श्व जड़ निर्माण को उत्तेजित करता है',mr_h:'चांगली मूळ वाढ',mr_p:'बाजूच्या मूळ निर्मितीला उत्तेजित करते'},
  {emoji:'🪱',en_h:'Soil Health',en_p:'Revives soil biology and increases organic carbon',hi_h:'मिट्टी स्वास्थ्य',hi_p:'मिट्टी की जीव विज्ञान को पुनर्जीवित करता है',mr_h:'माती आरोग्य',mr_p:'मातीचे जीवशास्त्र पुनरुज्जीवित करते'},
  {emoji:'💧',en_h:'Water Retention',en_p:'Reduces irrigation frequency by up to 30%',hi_h:'जल धारण',hi_p:'सिंचाई आवृत्ति 30% तक कम करता है',mr_h:'जल धारण',mr_p:'सिंचन 30% कमी करते'},
  {emoji:'📈',en_h:'Yield Increase',en_p:'Documented 20–35% yield improvement',hi_h:'उपज वृद्धि',hi_p:'20-35% उपज सुधार',mr_h:'उत्पादन वाढ',mr_p:'20-35% उत्पादन सुधारणा'},
  {emoji:'⚡',en_h:'Fertilizer Efficiency',en_p:'Enhances NPK absorption, 25% less inputs',hi_h:'उर्वरक दक्षता',hi_p:'NPK अवशोषण बढ़ाता है',mr_h:'खत कार्यक्षमता',mr_p:'NPK शोषण वाढवते'},
  {emoji:'💪',en_h:'Plant Strength',en_p:'Thicker stems, glossier leaves, stronger cell walls',hi_h:'पौधे की शक्ति',hi_p:'मोटे तने, चमकदार पत्तियां',mr_h:'वनस्पती शक्ती',mr_p:'जाड देठ, चकचकीत पाने'},
  {emoji:'🦠',en_h:'Microbial Activity',en_p:'Multiplies beneficial soil microbes 10×',hi_h:'सूक्ष्मजीव गतिविधि',hi_p:'लाभकारी रोगाणुओं को 10× गुणा',mr_h:'सूक्ष्मजीव क्रिया',mr_p:'सूक्ष्मजीव 10 पट वाढवते'},
  {emoji:'🌾',en_h:'Crop Performance',en_p:'Better grain filling, fruit size, and shelf life',hi_h:'फसल प्रदर्शन',hi_p:'बेहतर दाना भरना',mr_h:'पीक कामगिरी',mr_p:'चांगले दाणे भरणे'}
];
function applyBenefits() {
  const benefits = LS.get('biomxl_benefits', DEF_BENEFITS_LIVE);
  const lang = localStorage.getItem('biomxl_lang') || 'en';
  const grid = document.querySelector('.benefits-grid');
  if (!grid) return;
  // Section titles
  const benSection = document.getElementById('benefits');
  if (benSection) {
    const tKey = 'biomxl_ben_title_' + lang;
    const sKey = 'biomxl_ben_sub_' + lang;
    const t = LS.str(tKey, ''); const s = LS.str(sKey, '');
    if (t) { const h2 = benSection.querySelector('h2'); if(h2) h2.textContent = t; }
    if (s) { const p  = benSection.querySelector('.section-header p'); if(p) p.textContent = s; }
  }
  const delays = [0,100,200,300,400,500,600,700];
  grid.innerHTML = benefits.map((b, i) => {
    const title = b[lang+'_h'] || b.en_h || '';
    const desc  = b[lang+'_p'] || b.en_p || '';
    return `<div class="benefit-card" data-delay="${delays[i]||0}">
      <div class="ben-icon">${b.emoji||'🌿'}</div>
      <h4>${title}</h4>
      <p>${desc}</p>
    </div>`;
  }).join('');
  // Re-attach intersection observer to new cards
  document.querySelectorAll('.benefit-card').forEach(el => {
    el.classList.remove('visible');
    benefitIO.observe(el);
  });
}

/* ===== FEATURE CARDS ===== */
const DEF_FEATURES_LIVE = [
  {emoji:'🧬',iconUrl:'',en_h:'Microbial Boost',en_p:'Enriches soil with beneficial microbes',hi_h:'सूक्ष्मजीव बढ़ावा',hi_p:'मिट्टी को समृद्ध करता है',mr_h:'सूक्ष्मजीव वाढ',mr_p:'मातीला समृद्ध करते'},
  {emoji:'🌱',iconUrl:'',en_h:'Root Stimulation',en_p:'Accelerates root development',hi_h:'जड़ उत्तेजना',hi_p:'जड़ विकास तेज करता है',mr_h:'मूळ उत्तेजना',mr_p:'मूळ विकास वेगवान करते'},
  {emoji:'💧',iconUrl:'',en_h:'Water Efficiency',en_p:'Improves soil water retention by up to 40%',hi_h:'जल दक्षता',hi_p:'जल धारण 40% सुधारता है',mr_h:'जल कार्यक्षमता',mr_p:'पाणी धारण 40% सुधारते'},
  {emoji:'🛡️',iconUrl:'',en_h:'Disease Resistance',en_p:'Naturally boosts plant immunity',hi_h:'रोग प्रतिरोध',hi_p:'प्रतिरक्षा बढ़ाता है',mr_h:'रोग प्रतिरोध',mr_p:'प्रतिकारशक्ती वाढवते'}
];
function applyFeatures() {
  const features = LS.get('biomxl_features', DEF_FEATURES_LIVE);
  const lang = localStorage.getItem('biomxl_lang') || 'en';
  const grid = document.querySelector('.feature-cards');
  if (!grid) return;
  // Section header
  const featSection = document.getElementById('product');
  if (featSection) {
    const tagKey   = 'biomxl_feat_tag_'   + lang;
    const titleKey = 'biomxl_feat_title_' + lang;
    const subKey   = 'biomxl_feat_sub_'   + lang;
    const tagV  = LS.str(tagKey, '');
    const titleV= LS.str(titleKey, '');
    const subV  = LS.str(subKey, '');
    const hdr = featSection.querySelector('.section-header');
    if (hdr) {
      if (tagV)   { const tg = hdr.querySelector('.section-tag'); if(tg) tg.textContent = tagV; }
      if (titleV) { const h2 = hdr.querySelector('h2'); if(h2) h2.textContent = titleV; }
      if (subV)   { const p  = hdr.querySelector('p'); if(p) p.textContent = subV; }
    }
  }
  grid.innerHTML = features.map(f => {
    const title = f[lang+'_h'] || f.en_h || '';
    const desc  = f[lang+'_p'] || f.en_p || '';
    const icon  = f.iconUrl ? `<img src="${f.iconUrl}" alt="${title}" style="width:32px;height:32px;object-fit:contain"/>` : f.emoji||'🌿';
    return `<div class="feat-card">
      <div class="feat-icon">${icon}</div>
      <h4>${title}</h4>
      <p>${desc}</p>
    </div>`;
  }).join('');
}

/* ===== COUNTERS ===== */
const DEF_COUNTERS_LIVE = [
  {num:30,unit:'%',label_en:'Yield Increase',label_hi:'उपज वृद्धि',label_mr:'उत्पादन वाढ',kformat:false},
  {num:50000,unit:'+',label_en:'Happy Farmers',label_hi:'खुश किसान',label_mr:'खूश शेतकरी',kformat:true},
  {num:12,unit:'+',label_en:'Years R&D',label_hi:'वर्ष R&D',label_mr:'वर्षे संशोधन',kformat:false},
  {num:15,unit:'+',label_en:'Crops Tested',label_hi:'फसलें परीक्षण',label_mr:'पिके चाचणी',kformat:false}
];
function applyCounters() {
  const counters = LS.get('biomxl_counters', DEF_COUNTERS_LIVE);
  const lang = localStorage.getItem('biomxl_lang') || 'en';
  const row = document.querySelector('.stats-row');
  if (!row) return;
  row.innerHTML = counters.map(c => {
    const label = c['label_'+lang] || c.label_en || '';
    const displayNum = c.kformat ? Math.round(c.num/1000)+'K' : c.num;
    return `<div class="stat-card">
      <span class="stat-num" data-target="${c.num}" data-kformat="${c.kformat?'1':'0'}">${displayNum}</span>
      <span class="stat-unit">${c.unit||''}</span>
      <span class="stat-label">${label}</span>
    </div>`;
  }).join('');
  // Re-attach counter observer
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    counterIO.observe(el);
  });
}

/* ===== PRODUCT IMAGE SETTINGS ===== */
function applyProductImage() {
  const d = LS.get('biomxl_prod_img', {});
  const img = document.getElementById('heroProductImg');
  if (!img) return;
  // Alt text
  if (d.alt) img.alt = d.alt;
  // Sizing — inject responsive style
  const styleId = 'biomxl-prod-img-style';
  let styleEl = document.getElementById(styleId);
  if (!styleEl) { styleEl = document.createElement('style'); styleEl.id = styleId; document.head.appendChild(styleEl); }
  const wD = d.w_desk || 280;
  const wT = d.w_tab  || 220;
  const wM = d.w_mob  || 160;
  const hD = d.h_desk > 0 ? d.h_desk+'px' : 'auto';
  const hT = d.h_tab  > 0 ? d.h_tab+'px'  : 'auto';
  const hM = d.h_mob  > 0 ? d.h_mob+'px'  : 'auto';
  const radius = d.radius || 20;
  const fit    = d.fit    || 'contain';
  const shadowMap = {none:'none', sm:'0 4px 12px rgba(0,0,0,.2)', md:'0 12px 40px rgba(0,0,0,.4)', lg:'0 24px 80px rgba(0,0,0,.6)'};
  const shadow = shadowMap[d.shadow || 'md'];
  styleEl.textContent = `
    #heroProductImg {
      width: ${wD}px !important;
      height: ${hD} !important;
      border-radius: ${radius}px !important;
      box-shadow: ${shadow} !important;
      object-fit: ${fit} !important;
      ${d.frame === 'none' ? 'border:none!important;background:transparent!important;' : ''}
      ${d.float_anim === 'no' ? 'animation:none!important;' : ''}
    }
    .product-img-wrap { width: ${wD}px !important; }
    @media(max-width:1024px){
      #heroProductImg { width:${wT}px!important; height:${hT}!important; }
      .product-img-wrap { width:${wT}px!important; }
    }
    @media(max-width:768px){
      #heroProductImg { width:${wM}px!important; height:${hM}!important; }
      .product-img-wrap { width:${wM}px!important; }
    }
  `;
}

/* ===== ORGANIC BADGE ===== */
function applyBadge() {
  const d = LS.get('biomxl_badge', {});
  const badgeImg = LS.str('biomxl_badge_img', '');
  const ring = document.querySelector('.product-badge-ring');
  if (!ring) return;
  // Show/hide
  if (d.show === 'no') { ring.style.display = 'none'; return; }
  ring.style.display = '';
  // Size
  const sz = d.size || 80;
  ring.style.width  = sz + 'px';
  ring.style.height = sz + 'px';
  ring.style.fontSize = Math.max(8, sz/8) + 'px';
  // Opacity
  ring.style.opacity = d.opacity || 1;
  // Position
  ring.style.bottom = d.py ? (-parseInt(d.py)*0.2)+'px' : '-20px';
  ring.style.right  = d.px ? (-parseInt(d.px)*0.2)+'px' : '-20px';
  // Colour
  if (d.color)  ring.style.background = d.color;
  if (d.tcolor) ring.style.color = d.tcolor;
  // Image override
  if (badgeImg) {
    ring.innerHTML = `<img src="${badgeImg}" alt="badge" style="width:${sz-8}px;height:${sz-8}px;object-fit:contain;border-radius:50%"/>`;
  } else {
    ring.textContent = d.text || 'ORGANIC';
  }
}

/* ===== PATCH setLang to also apply dynamic sections ===== */
const _setLang_orig = setLang;
window.setLang = function(lang) {
  _setLang_orig(lang);
  // Re-apply language-sensitive dynamic sections
  applyBenefits();
  applyFeatures();
  applyCounters();
};

/* ===== PATCH DOMContentLoaded: call new apply functions ===== */
document.addEventListener('DOMContentLoaded', () => {
  // These run AFTER the main DOMContentLoaded in the original script.js
  // Use a short timeout to ensure the main init runs first
  setTimeout(() => {
    applyCertifications();
    applyBenefits();
    applyFeatures();
    applyCounters();
    applyProductImage();
    applyBadge();
  }, 50);
});
