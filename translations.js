/* IEEE KHAS bilingual interface — Turkish/English */
(function () {
  "use strict";

  const translations = {
    "Ana Sayfa": "Home",
    "Hakkımızda": "About Us",
    "Yönetim Kurulu": "Executive Board",
    "Takvim": "Calendar",
    "Arşiv": "Archive",
    "Üye Ol": "Join Us",
    "BAĞLANTILAR": "QUICK LINKS",
    "İLETİŞİM": "CONTACT",
    "SOSYAL": "SOCIAL",
    "Menüyü Aç": "Open menu",
    "Önceki": "Previous",
    "Sonraki": "Next",
    "Tümünü Gör →": "View All →",
    "Detayları Gör": "View Details",
    "Etkinliği Gör →": "View Event →",
    "← Etkinliklere geri dön": "← Back to Events",
    "Etkinliklerimiz": "Our Events",
    "Geçmiş Etkinliklerimiz": "Past Events",
    "Etkinlik Takvimi": "Events Calendar",
    "Hakkımızda | IEEE KHAS": "About Us | IEEE KHAS",
    "Geçmiş Etkinliklerimiz | IEEE KHAS": "Past Events | IEEE KHAS",
    "Takvim | IEEE KHAS": "Calendar | IEEE KHAS",
    "Yönetim Kurulu | IEEE KHAS": "Executive Board | IEEE KHAS",
    "IEEE Kadir Has Üniversitesi Öğrenci Kolu": "IEEE Student Branch of Kadir Has University",
    "IEEE KHAS - Kadir Has Üniversitesi": "IEEE KHAS - Kadir Has University",
    "Teknoloji,": "Technology,",
    "İnovasyon,": "Innovation,",
    "Topluluk.": "Community.",
    "Öğrencileri teknoloji, mühendislik ve yenilikçi fikirler etrafında bir araya getiren IEEE Kadir Has Üniversitesi öğrenci kolu.": "The IEEE Student Branch at Kadir Has University brings students together around technology, engineering, and innovative ideas.",
    "Bizi Tanıyın →": "Meet Us →",
    "Duyurularımız": "Announcements",
    "GÜNCEL": "WHAT'S NEW",
    "Tanışma Toplantımıza Herkesi Bekliyoruz!": "Everyone Is Welcome at Our Welcome Meeting!",
    "2026-2027 Akademik yılı tanışma toplantımızı 9 Ekim'de gerçekleştiriyoruz!": "Our 2026–2027 academic year welcome meeting will take place on October 9!",
    "Bizimle Çalışmak İster Misiniz?": "Would You Like to Work With Us?",
    "IEEE Kadir Has Üniversitesi Öğrenci Kolu olarak yeni dönemde ekibimizi büyütüyoruz!": "The IEEE Student Branch at Kadir Has University is growing its team for the new term!",
    "TechnoHAS Çok Yakında!": "TechnoHAS Is Coming Soon!",
    "IEEE Kadir Has Üniversitesi Öğrenci Kolu olarak düzenlediğimiz TechnoHas için geri sayım başladı! Teknoloji, inovasyon ve networking odaklı etkinliğimizde birbirinden farklı içerikler ve buluşmalar sizleri bekliyor.": "The countdown to TechnoHAS has begun! Join the IEEE Student Branch at Kadir Has University for an event focused on technology, innovation, networking, and engaging sessions.",
    "GEÇMİŞTEN BUGÜNE": "FROM THEN TO NOW",
    "2026-2027 Tanışma Toplantısı": "2026–2027 Welcome Meeting",
    "2026-2027 Akademik yılı tanışma toplantımızı başarıyla gerçekleştirdik!": "We successfully held our 2026–2027 academic year welcome meeting!",
    "Öğrenci Kolumuz, 2026 IEEE Region 8 Volunteer Leadership Training (VLT) Workshop'ta Öğrenci Kolu Başkanımız Almina Şeker tarafından temsil edildi.": "Our Student Branch was represented by its Chair, Almina Şeker, at the 2026 IEEE Region 8 Volunteer Leadership Training (VLT) Workshop.",
    "IEEE Marmara Bölge Toplantısı": "IEEE Marmara Regional Meeting",
    "Üsküdar Üniversitesi ev sahipliğinde IEEE Marmara Bölge Toplantısı'na katıldık.": "We attended the IEEE Marmara Regional Meeting hosted by Üsküdar University.",
    "EKİM 2026": "OCTOBER 2026",
    "TEMMUZ 2026": "JULY 2026",
    "Fikrin varsa,": "If you have an idea,",
    "yerin burada.": "you belong here.",
    "IEEE KADİR HAS ÜNİVERSİTESİ": "IEEE KADIR HAS UNIVERSITY",
    "Projeler üretmek, yeni insanlarla tanışmak ve teknoloji dünyasının bir parçası olmak için IEEE KHAS ailesine katıl.": "Join the IEEE KHAS community to build projects, meet new people, and become part of the world of technology.",
    "Bize Katıl →": "Join Us →",
    "IEEE Nedir?": "What Is IEEE?",
    "Misyonumuz": "Our Mission",
    "Vizyonumuz": "Our Vision",
    "Öğrencilerin teknik ve sosyal gelişimini desteklemek": "Support students' technical and social development",
    "Öğrenme, üretme ve keşfetme fırsatları sunmak": "Provide opportunities to learn, create, and explore",
    "Akademik bilgiyi gerçek deneyimlerle buluşturmak": "Connect academic knowledge with real-world experience",
    "Üniversite – sektör işbirliğini güçlendirmek": "Strengthen university–industry collaboration",
    "Ekip çalışması ve iş birliği kültürü oluşturmak": "Build a culture of teamwork and collaboration",
    "Öğrencilerin profesyonel gelişimine katkı sağlamak": "Contribute to students' professional development",
    "Öğrencilerin geleceği şekillendirdiği bir topluluk olmak": "Be a community where students shape the future",
    "Yenilikçi ve sürdürülebilir bir öğrenci ekosistemi oluşturmak": "Build an innovative and sustainable student ecosystem",
    "Teknolojiyi üreten ve topluma değer katan öğrencileri desteklemek": "Support students who create technology and add value to society",
    "Geleceğin mühendislerini lider bireyler olarak yetiştirmek": "Help future engineers grow into leaders",
    "Uluslararası alanda aktif ve saygın bir topluluk olmak": "Be an active and respected community internationally",
    "Akademik Danışman": "Faculty Advisor",
    "Yönetim Kurulu Üyeleri": "Executive Board Members",
    "Yönetim Kurulu Başkanı": "Chair",
    "Yönetim Kurulu Başkan Yardımcısı": "Vice Chair",
    "Sayman": "Treasurer",
    "Genel Sekreter": "General Secretary",
    "Proje Koordinatörü": "Project Coordinator",
    "Etkinlik & Organizasyon Departmanı Lideri": "Events & Organization Lead",
    "Tasarım Departmanı Lideri": "Design Team Lead",
    "Sponsorluk Departmanı Lideri": "Sponsorship Team Lead",
    "Kurumsal İletişim Departmanı Lideri": "Corporate Communications Lead",
    "IEEE KHAS olarak 2026–2027 akademik yılı tanışma toplantımızı gerçekleştirdik. Yeni akademik yılın başlangıcında bir araya geldiğimiz toplantıda, kulübümüzün faaliyetleri, çalışma alanları ve dönem boyunca gerçekleştirilmesi planlanan etkinlikler hakkında bilgi paylaştık.": "IEEE KHAS held its 2026–2027 academic year welcome meeting. At the start of the new academic year, we shared information about our activities, areas of focus, and planned events for the term.",
    "Yeni üyelerimizle tanışarak fikir alışverişinde bulunduğumuz bu buluşma, ekip ruhumuzu güçlendirmek ve yeni akademik yıldaki hedeflerimizi paylaşmak açısından verimli bir başlangıç oldu.": "Meeting our new members and exchanging ideas made this a productive start, strengthening our team spirit and helping us share our goals for the new academic year.",
    "Katılım gösteren tüm üyelerimize teşekkür ediyor, birlikte üreteceğimiz ve gelişeceğimiz başarılı bir akademik yıl diliyoruz!": "Thank you to everyone who attended. We look forward to a successful academic year of creating and growing together!",
    "2026-2027 Akademik yılı tanışma toplantımızı gerçekleştirdik.": "We held our 2026–2027 academic year welcome meeting.",
    "Öğrenci Kolumuz IEEE Region 8 VLT Workshopu'nda Başkanımız tarafından temsil edildi.": "Our Student Branch was represented by our Chair at the IEEE Region 8 VLT Workshop.",
    "Üsküdar Üniversitesi ev sahipliğinde IEEE Marmara Bölge Toplantısı'na katıldık.": "We attended the IEEE Marmara Regional Meeting hosted by Üsküdar University.",
    "TechnoHAS kapsamında, mühendislik alanında kariyer seçeneklerini akademisyenlerimizin deneyimleriyle ele aldık.": "At TechnoHAS, we explored engineering career paths through the experiences of our academics.",
    "HASFest etkinliği kapsamında kulübümüz adına tanıtım faaliyetleri gerçekleştirdik.": "We promoted our student branch at HASFest.",
    "Fenerbahçe Üniversitesi ev sahipliğinde düzenlenen IEEE Türkiye Başkanlar Çalıştayı'na katıldık.": "We attended the IEEE Türkiye Chairs Workshop hosted by Fenerbahçe University.",
    "ELES EXPO 2026 kapsamında sektörün öncü firmalarıyla bir araya geldik.": "We met leading companies in the industry at ELES EXPO 2026.",
    "SineHAS Etkinliğimiz kapsamında \"The Current War\" filmini izledik.": "We watched the film \"The Current War\" as part of our SineHAS event.",
    "MEF Üniversitesi IEEE Öğrenci Kolu ile online görüşme gerçekleştirdik.": "We held an online meeting with the IEEE Student Branch at MEF University.",
    "IEEE KHAS Yönetim Kurulu olarak Mekatronik Mühendisleri Derneği'ni (MEKMÜHDER) ziyaret ettik.": "As the IEEE KHAS Executive Board, we visited the Association of Mechatronics Engineers (MEKMÜHDER).",
    "Engineer's Talk kapsamında DevOps alanında Nuri Dağaşan'ın konuşmacı olduğu etkinliğimizi gerçekleştirdik.": "We hosted an Engineer's Talk session featuring Nuri Dağaşan, who spoke about DevOps.",
    "3 Haftalık SQL eğitimimizin ilk dersini başarıyla tamamladık.": "We successfully completed the first session of our three-week SQL training.",
    "2025–2026 Akademik yılı tanışma toplantımızı gerçekleştirdik.": "We held our 2025–2026 academic year welcome meeting.",
    "Danışman Hocamız Doç. Dr. Tunçer Baykaş ile görüşme gerçekleştirdik.": "We met with our faculty advisor, Assoc. Prof. Dr. Tunçer Baykaş.",
    "Fenerbahçe Üniversitesi IEEE Öğrenci Kolu ile online görüşme yaptık.": "We held an online meeting with the IEEE Student Branch at Fenerbahçe University.",
    "Elektrik Mühendisleri Odası tarafından düzenlenen mühendislik kongresine katılım sağladık.": "We attended the engineering congress organized by the Chamber of Electrical Engineers.",
    "İstanbul Teknik Üniversitesi tarafından düzenlenen Elektrikli Araçlar Zirvesi’ne katıldık.": "We attended the Electric Vehicles Summit organized by Istanbul Technical University.",
    "Tanışma Toplantısı": "Welcome Meeting",
    "Baskanlar Çalıştayı": "Chairs Workshop",
    "Duyurularımız": "Announcements",
    "Tüm Duyurular": "All Announcements",
    "Duyurular": "Announcements",
    "Personel Temini": "Recruitment",
    "Bize Ulaşın": "Contact Us",
    "Detay": "Details",
    "Devamını Oku": "Read More",
    "Etkinlikler": "Events",
    "Etkinliğe geri dön": "Back to Events",
    "Daha Fazla": "Learn More",
    "Geri Dön": "Go Back",
    "Geçmiş Duyurularımız": "Past Announcements",
    "9 Ekim 2026 tarihinde gerçekleştireceğimiz tanışma toplantımıza hepinizi bekliyoruz!": "Everyone is welcome at our welcome meeting on October 9, 2026!",
    "Yeni dönemde ekibimizi büyütüyoruz!": "We're expanding our team for the new term!",
    "TechnoHas Etkinliğimiz için geri sayım başladı!": "The countdown to our TechnoHAS event has begun!",
    "SineHAS Kulübü ortaklığıyla düzenlediğimiz film gecemizde, bilimin ve rekabetin tarihine doğru yolculuğa çıkıyoruz.": "At our film night, organized with the SineHAS Club, we explore the history of science and competition.",
    "Engineer’s Talk etkinliğimizde Nuri Dağasan’ı ağırlıyoruz!": "We're welcoming Nuri Dağasan to our Engineer’s Talk event!",
    "Çizgi izleyen robot yarışması için ekipler kuruluyor!": "Teams are forming for the line-following robot competition!",
    "3 hafta sürecek olan SQL eğitim başvuruşarı başladı!": "Applications are open for our three-week SQL training!",
    "IEEE KHAS olarak kampüse geri dönüyoruz!": "IEEE KHAS is returning to campus!",
    "IEEE KHAS Öğrenci Kolu olarak seni tanışma toplantımızda aramızda görmek istiyoruz.": "As the IEEE KHAS Student Branch, we'd love to see you at our welcome meeting.",
    "Bizi yakından tanıyacak, yıl boyunca yapacağımız etkinlikleri ve projeleri öğrenecek, ekibimizle sohbet etme fırsatı bulacaksın.": "You'll get to know us, learn about our events and projects for the year, and meet our team.",
    "Daha önce hiç katılmadıysan da sorun yok, herkes davetli! Arkadaşlarını da getirmeyi unutma. 💙": "Never joined us before? No problem—everyone is welcome! Don't forget to bring your friends. 💙",
    "Personel Temini": "Recruitment",
    "IEEE Kadir Has Üniversitesi Öğrenci Kolu olarak yeni dönemde ekibimizi büyütüyor, birlikte projeler geliştirmek, etkinlikler düzenlemek ve yeni fikirler üretmek için yeni ekip arkadaşları arıyoruz.": "The IEEE Student Branch at Kadir Has University is growing its team for the new term. We're looking for new members to develop projects, organize events, and create new ideas together.",
    "IEEE KHAS bünyesinde ekip çalışması deneyimi kazanabilir, farklı alanlardan öğrencilerle birlikte projelerde yer alabilir ve profesyonel bağlantılar kurabilirsin.": "At IEEE KHAS, you can gain teamwork experience, work on projects with students from different fields, and build professional connections.",
    "Sen de yeni dönemde IEEE KHAS ekibinin bir parçası olmak istiyorsan başvurunu bekliyoruz!": "If you'd like to become part of the IEEE KHAS team this term, we look forward to your application!",
    "Son Başvuru Tarihi: 25 Ağustos 2026": "Application Deadline: August 25, 2026",
    "Başvuru yapmak için tıkla!": "Click here to apply!",
    "TechnoHAS Etkinliği": "TechnoHAS Event",
    "Mühendislikte kariyer yolculuğunu akademisyenlerin deneyimleri ve tavsiyeleriyle keşfetmeye hazır mısın?": "Are you ready to explore engineering career paths through the experiences and advice of academics?",
    "TechnoHAS kapsamında gerçekleştireceğimiz “Elektrik-Elektronik Mühendisliği ve Mekatronik Mühendisliğinde Kariyer Seçenekleri” panelinde, alanında uzman akademisyenleri öğrencilerimizle bir araya getiriyoruz.": "At TechnoHAS, our panel “Career Options in Electrical-Electronics and Mechatronics Engineering” brings students together with academics who are experts in their fields.",
    "Panelde; yapay zekâ çağında kariyer planlaması, akademi ve sektör dinamikleri, mühendislik alanlarındaki güncel gelişmeler ve farklı kariyer yolları üzerine konuşacağız.": "We'll discuss career planning in the age of AI, academia and industry, current developments in engineering, and different career paths.",
    "Konuklarımız kendi akademik ve sektörel deneyimlerini paylaşırken, öğrencilerimiz de merak ettikleri soruları doğrudan yöneltme fırsatı bulacak.": "Our guests will share their academic and industry experience, and students will have the chance to ask their questions directly.",
    "Mühendislikte geleceğini şekillendirirken farklı bakış açıları kazanmak için seni de TechnoHAS’a bekliyoruz!": "Join us at TechnoHAS to gain new perspectives as you shape your future in engineering!",
    "Tarih: 7 Mayıs Perşembe": "Date: Thursday, May 7",
    "IEEE (Institute of Electrical and Electronics Engineers), bugün sadece elektrik, elektronik mühendislerine yönelik olmaktan çıkarak, 160'tan fazla ülkede faaliyet gösteren, mühendislik ve teknoloji alanlarında dünyanın en büyük ve en köklü teknik topluluklarından biri olarak, kar amacı gütmeden insanlık yararına teknolojik gelişimi destekleyen, profesyonelleri, akademisyenleri ve öğrencileri küresel bir topluluk altında bir araya getirerek yeni teknolojilerin keşfedilmesini, geliştirilmesini ve toplum yararına kullanılmasını amaçlayan uluslararası bir kuruluştur.": "IEEE (Institute of Electrical and Electronics Engineers) is one of the world's largest and longest-established technical organizations in engineering and technology, operating in more than 160 countries. It brings professionals, academics, and students together globally and supports technological progress for the benefit of humanity, without seeking profit.",
    "Akademik Danışman": "Faculty Advisor",
    "ÖĞRENCİ": "STUDENT",
    "Dr. Öğr. Üyesi": "Assist. Prof. Dr.",
    "Etkinlik Takvimi": "Events Calendar"
  };

  const reverseTranslations = Object.fromEntries(
    Object.entries(translations).map(([tr, en]) => [en, tr])
  );

  function normalize(value) {
    return value.replace(/\s+/g, " ").trim();
  }

  const monthNames = {
    "OCAK": "JANUARY",
    "ŞUBAT": "FEBRUARY",
    "MART": "MARCH",
    "NİSAN": "APRIL",
    "MAYIS": "MAY",
    "HAZİRAN": "JUNE",
    "TEMMUZ": "JULY",
    "AĞUSTOS": "AUGUST",
    "EYLÜL": "SEPTEMBER",
    "EKİM": "OCTOBER",
    "KASIM": "NOVEMBER",
    "ARALIK": "DECEMBER"
  };
  const reverseMonthNames = Object.fromEntries(
    Object.entries(monthNames).map(([tr, en]) => [en, tr])
  );

  function translateDate(value, language) {
    const months = language === "en" ? monthNames : reverseMonthNames;
    // Handles dates such as "3 EKİM 2026" and standalone month labels such as "EKİM 2026".
    return value.replace(
      /(^|[^\\p{L}])(\\d{1,2}\\s+)?(OCAK|ŞUBAT|MART|NİSAN|MAYIS|HAZİRAN|TEMMUZ|AĞUSTOS|EYLÜL|EKİM|KASIM|ARALIK|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)(\\s+\\d{4})?(?=$|[^\\p{L}])/giu,
      (match, prefix = "", day = "", month, year = "") => {
        const translatedMonth = months[month.toLocaleUpperCase("tr-TR")] || months[month.toUpperCase()];
        if (!translatedMonth) return match;
        return prefix + day + translatedMonth + year;
      }
    );
  }

  function translateValue(value, language) {
    const key = normalize(value);
    const dictionary = language === "en" ? translations : reverseTranslations;
    return dictionary[key] || translateDate(value, language);
  }

  function translatePage(language) {
    document.documentElement.lang = language === "en" ? "en" : "tr";
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      const parent = node.parentElement;
      if (!parent || parent.closest("script, style, noscript, textarea, input, select, option, .language-switcher")) return;
      const raw = node.nodeValue;
      const leading = (raw.match(/^\s*/) || [""])[0];
      const trailing = (raw.match(/\s*$/) || [""])[0];
      const translated = translateValue(raw, language);
      if (translated !== raw) node.nodeValue = leading + translated.trim() + trailing;
    });

    document.querySelectorAll("[aria-label], [title], [alt], [placeholder]").forEach((element) => {
      ["aria-label", "title", "alt", "placeholder"].forEach((attribute) => {
        if (element.hasAttribute(attribute)) {
          element.setAttribute(attribute, translateValue(element.getAttribute(attribute), language));
        }
      });
    });

    document.title = translateValue(document.title, language);
    const button = document.querySelector(".language-switcher");
    if (button) {
      button.textContent = language === "en" ? "TR" : "EN";
      button.setAttribute("aria-label", language === "en" ? "Switch to Turkish" : "Switch to English");
      button.setAttribute("title", language === "en" ? "Türkçeye geç" : "Switch to English");
    }
  }

  function init() {
    const nav = document.querySelector(".nav-container");
    if (!nav) return;

    let currentLanguage = "tr";
    try {
      currentLanguage = localStorage.getItem("ieee-khas-language") === "en" ? "en" : "tr";
    } catch (_) {}

    const button = document.createElement("button");
    button.type = "button";
    button.className = "language-switcher";
    button.textContent = currentLanguage === "en" ? "TR" : "EN";
    button.setAttribute("aria-label", currentLanguage === "en" ? "Switch to Turkish" : "Switch to English");
    button.setAttribute("title", currentLanguage === "en" ? "Türkçeye geç" : "Switch to English");

    const mobileToggle = nav.querySelector(".nav-toggle");
    if (mobileToggle) nav.insertBefore(button, mobileToggle);
    else nav.appendChild(button);

    button.addEventListener("click", () => {
      currentLanguage = currentLanguage === "tr" ? "en" : "tr";
      try {
        localStorage.setItem("ieee-khas-language", currentLanguage);
      } catch (_) {}
      translatePage(currentLanguage);
    });

    translatePage(currentLanguage);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();