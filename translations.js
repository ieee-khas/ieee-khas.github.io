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
    "Etkinlik Takvimi": "Events Calendar",
    "Başkanlar Çalıştayı | IEEE KHAS": "Chairs Workshop | IEEE KHAS",
    "IEEE Türkiye Başkanlar Çalıştayı": "IEEE Türkiye Chairs Workshop",
    "Fenerbahçe Üniversitesi ev sahipliğinde düzenlenen IEEE Türkiye Başkanlar Çalıştayı’na katılım sağladık.": "We attended the IEEE Türkiye Chairs Workshop hosted by Fenerbahçe University.",
    "Etkinlik kapsamında farklı üniversitelerden IEEE öğrenci kollarının başkanlarıyla bir araya gelerek deneyimlerimizi paylaşma, yeni fikirler edinme ve IEEE topluluğu içerisindeki iş birliklerimizi geliştirme fırsatı bulduk.": "At the event, we met chairs of IEEE student branches from different universities, shared experiences, exchanged ideas, and explored opportunities for collaboration within the IEEE community.",
    "ELES EXPO 2026 kapsamında İstanbul Fuar Merkezi'nde sektörün öncü firmalarıyla bir araya geldik, ilham verici panellere katıldık ve yeni teknolojileri yakından inceleme fırsatı bulduk.": "At ELES EXPO 2026 at the Istanbul Expo Center, we met leading companies, attended inspiring panels, and explored new technologies.",
    "Engineer's Talk Etkinliği": "Engineer's Talk Event",
    "IEEE Kadir Has Üniversitesi Öğrenci Kolu olarak, Engineer’s Talk etkinliğimizde Nuri Dağasan’ı ağırlıyoruz! Elektrik-Elektronik Mühendisliği ile başlayan ve Bilgisayar Bilimleri, DevOps ve Cloud alanlarıyla devam eden kariyer yolculuğundan yola çıkarak; üniversite hayatı, staj deneyimleri, kariyer kararları ve sektör tecrübeleri üzerine keyifli bir söyleşi gerçekleştireceğiz.": "As the IEEE Student Branch at Kadir Has University, we're hosting Nuri Dağasan for our Engineer’s Talk. Drawing on his career journey from Electrical and Electronics Engineering into Computer Science, DevOps, and Cloud, we'll discuss university life, internships, career decisions, and industry experience.",
    "Etkinliğin sonunda katılımcıların sorularını yöneltebileceği bir soru-cevap bölümü de gerçekleştirilecektir.": "The event will conclude with a Q&A session where attendees can ask questions.",
    "Mühendislik ve kariyer dünyasına dair merak ettiklerinizi konuşmak için sizleri de aramızda görmekten mutluluk duyarız!": "We'd be happy to see you there to discuss your questions about engineering and careers!",
    "EEMKON 2026": "EEMKON 2026",
    "Elektrik Mühendisleri Odası (EMO) tarafından düzenlenen Elektrik-Elektronik Mühendisliği Kongresi’ne katılım sağladık. Bu kongrede güç sistemleri, elektronik, haberleşme ve yazılım alanlarında güncel gelişmeler hakkında birçok değerli sunum ve oturum takip etme fırsatı bulduk.": "We attended the Electrical and Electronics Engineering Congress organized by the Chamber of Electrical Engineers (EMO). We followed valuable talks and sessions on current developments in power systems, electronics, communications, and software.",
    "Etkinlik sırasında üniversitemiz akademisyenlerinden değerli hocamız Prof. Dr. Mehmet Timur Aydemir ile karşılaşarak IEEE Kadir Has Üniversitesi Öğrenci Kolu hakkında kendisine bilgi verdik. Kulübümüzün faaliyetleri, hedefleri ve planladığımız projeler üzerine kendisiyle kısa ama çok verimli bir sohbet gerçekleştirdik.": "During the event, we met our university's faculty member Prof. Dr. Mehmet Timur Aydemir and introduced him to the IEEE Kadir Has University Student Branch. We had a brief but productive conversation about our activities, goals, and planned projects.",
    "Akademisyenler ve sektör temsilcileriyle bir araya gelerek hem teknik bilgi kazandık hem de mesleki vizyonumuzu geliştirecek önemli bağlantılar kurduk. Kulübümüz adına oldukça verimli ve ufuk açıcı bir etkinlik oldu.": "Meeting academics and industry representatives helped us deepen our technical knowledge and build valuable professional connections. It was a productive and inspiring event for our branch.",
    "Fenerbahçe Üniversitesi IEEE Buluşması": "Fenerbahçe University IEEE Meeting",
    "Fenerbahçe Üniversitesi IEEE Öğrenci Kolu ile online bir toplantı gerçekleştirerek iki kulüp arasında karşılıklı tanışma ve fikir alışverişinde bulunduk. Bu görüşmede kulüp yapılanmaları, düzenlenen etkinlikler ve gelecek dönem planları üzerine sohbet ettik. Farklı üniversitelerdeki IEEE yapılanmalarını tanımak ve deneyim paylaşımı yapmak bizim için oldukça değerliydi. İlerleyen dönemlerde ortak etkinlikler ve projeler yapma konusunda karşılıklı iyi niyet ve motivasyon oluştu.": "We held an online meeting with the IEEE Student Branch at Fenerbahçe University to get to know each other and exchange ideas. We discussed our club structures, events, and plans for the next term. Learning about IEEE branches at other universities and sharing experiences was valuable, and we discussed potential joint events and projects.",
    "HASFest Etkinliği": "HASFest Event",
    "HASFest etkinliği kapsamında IEEE KHAS olarak etkinlik alanında standımızı açtık. Standımızda kulübümüzü ve gerçekleştirdiğimiz faaliyetleri tanıtarak öğrencilerle bir araya gelme ve yeni üyelerle tanışma fırsatı bulduk.": "At HASFest, IEEE KHAS opened a booth to introduce our branch and activities, meet students, and connect with potential new members.",
    "Elektrikli Araçlar Zirvesi": "Electric Vehicles Summit",
    "İstanbul Teknik Üniversitesi Elektrik Mühendisliği Kulübü tarafından düzenlenen Elektrikli Araçlar Zirvesi’ne katılım sağladık. Bu etkinlikte elektrikli araç teknolojileri, batarya sistemleri ve geleceğin ulaşım çözümleri hakkında birçok değerli sunum dinleme fırsatı bulduk. Kulübümüz adına hem teknik anlamda hem de farklı üniversitelerle etkileşim açısından oldukça verimli bir etkinlik oldu.": "We attended the Electric Vehicles Summit organized by Istanbul Technical University's Electrical Engineering Club. We listened to talks on electric vehicle technologies, battery systems, and future mobility solutions. The event was valuable both technically and for connecting with students from other universities.",
    "MEF Üniversitesi IEEE Buluşması": "MEF University IEEE Meeting",
    "MEF Üniversitesi IEEE Öğrenci Kolu ile online görüşme gerçekleştirdik. Bu toplantıda hem birbirimizi daha yakından tanıma fırsatı bulduk hem de kulüplerimiz hakkında detaylı paylaşımlar yaptık. Toplantı sırasında kendi kulüp yapımızı, düzenlediğimiz etkinlikleri ve yürüttüğümüz projeleri anlattık. Aynı şekilde MEF Üniversitesi IEEE ekibinin çalışmalarını da dinleyerek farklı bakış açıları kazandık. Bunun yanında gelecekte birlikte yapabileceğimiz ortak etkinlikler, workshoplar ve iş birlikleri üzerine fikir alışverişinde bulunduk.": "We held an online meeting with the IEEE Student Branch at MEF University. We got to know each other and shared details about our clubs, events, and projects. Hearing about MEF University's work gave us new perspectives, and we exchanged ideas about future joint events, workshops, and collaborations.",
    "SineHAS Etkinliği": "SineHAS Event",
    "SineHAS Kulübü ortaklığında düzenlediğimiz film gecesinde, bilim ve teknoloji tarihinin önemli dönüm noktalarından birini konu alan \"The Current War\" filmini izledik. Etkinlik boyunca katılımcılarla birlikte filmi değerlendirerek keyifli ve verimli bir akşam geçirdik.": "At our film night organized with the SineHAS Club, we watched \"The Current War\", a film about a major turning point in the history of science and technology. We discussed the film together and enjoyed an engaging evening.",
    "SQL Eğitimi": "SQL Training",
    "Eğitmenimiz Durali CAN önderliğinde 3 haftalık SQL eğitim programımızın ilk dersini başarıyla tamamladık. Eğitimimizi hem yüz yüze hem de çevrim içi olarak eş zamanlı şekilde gerçekleştirdik. Eğitim kapsamında katılımcılar, veritabanı kavramları, SQL’in temel yapısı ve veri sorgulama mantığı hakkında giriş seviyesinde bilgi edindi. Programın ilerleyen haftalarında daha ileri sorgu teknikleri ve uygulamalı çalışmalarla eğitimimiz devam edecektir.": "We successfully completed the first session of our three-week SQL training led by Durali CAN. The session was held both in person and online. Participants were introduced to database concepts, SQL fundamentals, and query logic. The following weeks will cover more advanced queries and practical exercises.",
    "SQL Eğitimi başlıyor!": "SQL Training Is Starting!",
    "Veritabanlarının temelini öğrenmek, verileri sorgulama, düzenleme ve analiz etme becerileri kazanmak isteyen herkesi eğitimimize bekliyoruz. Katılım için başvuru formunu doldurmayı unutmayın. Eğitimde görüşmek üzere!": "Everyone interested in learning database fundamentals and gaining skills in querying, organizing, and analyzing data is welcome. Don't forget to complete the application form. See you at the training!",
    "IEEE KHAS olarak, 8 Mayıs’ta HasFest kapsamında düzenlenecek Çizgi İzleyen Robot Yarışması için proje ekipleri oluşturuyoruz!": "IEEE KHAS is forming project teams for the Line-Following Robot Competition to be held at HASFest on May 8!",
    "Yarışmaya kendi takımınızla katılabilir veya bireysel başvuru yaparak bir ekibe dahil olabilirsiniz. Proje sürecinde robotun tasarımı ve geliştirilmesi konusunda ekiplerimize teknik destek sağlanacaktır.": "You can enter with your own team or apply individually to join a team. Technical support will be provided for robot design and development throughout the project.",
    "Son Başvuru: 12 Nisan 2026": "Application Deadline: April 12, 2026",
    "Yarışma Tarihi: 8 Mayıs 2026": "Competition Date: May 8, 2026",
    "IEEE Marmara Bölge Toplantısı kapsamında, farklı üniversitelerden IEEE öğrenci kolları ve temsilcileriyle bir araya geldik. Toplantı boyunca deneyimlerimizi paylaşarak gerçekleştirdiğimiz çalışmalar hakkında fikir alışverişinde bulunduk ve IEEE çatısı altında gerçekleştirilebilecek yeni projeler ve iş birlikleri üzerine görüşmeler gerçekleştirdik.": "At the IEEE Marmara Regional Meeting, we met IEEE student branches and representatives from different universities. We shared experiences, discussed our work, and explored new projects and collaborations within IEEE.",
    "2026 IEEE Region 8 VLT Workshop": "2026 IEEE Region 8 VLT Workshop",
    "IEEE Kadir Has Üniversitesi Öğrenci Kolumuz, 27–28 Haziran tarihlerinde düzenlenen 2026 IEEE Region 8 Volunteer Leadership Training (VLT) Workshop'ta Öğrenci Kolu Başkanımız Almina Şeker tarafından temsil edildi.": "Our IEEE Kadir Has University Student Branch was represented by our Chair, Almina Şeker, at the 2026 IEEE Region 8 Volunteer Leadership Training (VLT) Workshop held on June 27–28.",
    "İki gün boyunca farklı ülkelerden öğrenci liderleri ve IEEE gönüllülerinin katılımıyla deneyim paylaşımında bulunuldu, uluslararası bağlantılar kuruldu ve öğrenci kollarının gelişimine yönelik farklı yaklaşımlar üzerine fikir alışverişi gerçekleştirildi.": "Over two days, student leaders and IEEE volunteers from different countries shared experiences, built international connections, and exchanged ideas on developing student branches.",
    "Bu değerli organizasyonun gerçekleşmesinde emeği geçen IEEE Region 8'e, IEEE Türkiye Section'a, tüm konuşmacılara, gönüllülere ve organizasyon ekibine teşekkür ederiz.": "We thank IEEE Region 8, IEEE Türkiye Section, all speakers, volunteers, and the organizing team for making this valuable event possible.",
    "Sinema Etkinliği": "Film Event",
    "SineHAS Kulübü iş birliğiyle düzenleyeceğimiz film gecesinde, elektrik çağının en önemli rekabetlerinden birini konu alan “The Current War” filmini birlikte izleyeceğiz. Film gösteriminin ardından katılımcılarımızla film üzerine değerlendirmelerde bulunarak bilim, teknoloji ve inovasyonun tarihsel gelişimi üzerine keyifli bir sohbet gerçekleştireceğiz. Keyifli bir film gecesi için seni de aramızda görmekten mutluluk duyarız!": "Join us for a film night organized with the SineHAS Club, featuring \"The Current War\" about one of the defining rivalries of the electrical age. After the screening, we'll discuss the film and the history of science, technology, and innovation. We'd be happy to see you there!",
    "Tarih: 18 Şubat Çarşamba": "Date: Wednesday, February 18",
    "Saat: 18.00": "Time: 6:00 PM",
    "Yer: B312": "Location: B312",
    "Yeni dönem planlarımızı paylaşmak, IEEE KHAS’ı yakından tanıtmak ve sizlerle bir araya gelmek için tanışma toplantımızı gerçekleştiriyoruz.": "We're holding our welcome meeting to share our plans for the new term, introduce IEEE KHAS, and meet you.",
    "Tanışmak ve yeni dönem yol haritamızı paylaşmak için tüm Kadir Has Üniversitesi öğrencilerini bekliyoruz.": "All Kadir Has University students are welcome to meet us and hear about our roadmap for the new term.",
    "IEEE Kadir Has Üniversitesi Öğrenci Kolu olarak dönemimizin ilk tanışma toplantısını başarıyla gerçekleştirdik. Toplantımızda kulübümüzün vizyonu, hedefleri ve dönem boyunca planladığımız etkinlikler hakkında bilgilendirme yapıldı. Yeni üyelerimizle bir araya gelerek hem organizasyon yapımızı tanıttık hem de birbirimizi daha yakından tanıma fırsatı bulduk. Yoğun katılım ve ilgi için başta değerli hocalarımız olmak üzere tüm katılımcılarımıza teşekkür ederiz. Birlikte verimli ve başarılı bir dönem geçirmeyi diliyoruz.": "The IEEE Student Branch at Kadir Has University successfully held its first welcome meeting of the term. We introduced our vision, goals, and planned events, presented our organizational structure, and got to know our new members. We thank everyone who attended, especially our faculty members, and look forward to a productive and successful term together.",
    "IEEE KHAS olarak 2026–2027 akademik yılı tanışma toplantımızı gerçekleştirdik. Yeni akademik yılın başlangıcında bir araya geldiğimiz toplantıda, kulübümüzün faaliyetleri, çalışma alanları ve dönem boyunca gerçekleştirilmesi planlanan etkinlikler hakkında bilgi paylaştık.": "IEEE KHAS held its 2026–2027 academic year welcome meeting. At the start of the academic year, we shared information about our activities, areas of focus, and planned events for the term.",
    "📅 Tarih: 18 Şubat Çarşamba": "📅 Date: Wednesday, February 18",
    "Tüm katılımcılarımıza teşekkür ederiz.": "Thank you to everyone who attended.",
    "Etkinlik detayları": "Event Details",
    "Konum": "Location",
    "Saat": "Time",
    "Tarih": "Date",
    "Başvuru": "Application",
    "Son Başvuru Tarihi": "Application Deadline",
    "Yarışma Tarihi": "Competition Date",
    "← Duyurulara geri dön": "← Back to Announcements",
    "← Etkinliklere geri dön": "← Back to Events",
    "Yönetim Kurulu Üyeleri": "Executive Board Members",
    "Etkinlik ve Organizasyon Sorumlusu & Yönetim Kurulu Üyesi": "Events & Organization Coordinator and Board Member",
    "Yönetim Kurulu Başkanı": "Chairperson",
    "Yönetim Kurulu Başkan Yardımcısı": "Vice Chairperson",
    "Sayman & Yönetim Kurulu Üyesi": "Treasurer and Board Member",
    "Genel Sekreter & Yönetim Kurulu Üyesi": "General Secretary and Board Member",
    "Elektrik ve Elektronik Mühendisliği": "Electrical and Electronics Engineering",
    "Mekatronik Mühendisliği": "Mechatronics Engineering",
    "Hakkında": "About",
    "Sorumlulukları": "Responsibilities",
    "Projeler & Etkinlikler": "Projects & Events",
    "Etkinlik ve Organizasyon Sorumlusu": "Events & Organization Coordinator",
    "Sayman": "Treasurer",
    "Genel Sekreter": "General Secretary",
    "Yönetim Kurulu Üyesi": "Board Member",
    "Kulüp etkinliklerinin planlanması ve uygulanması": "Planning and delivering club events",
    "Etkinlik hazırlık ve lojistik süreçlerini koordine etmek": "Coordinating event preparation and logistics",
    "Etkinlik ekibi üyeleri arasındaki iletişimi sağlamak ve yönlendirmek": "Facilitating communication within the event team",
    "Etkinliklerin zamanında ve verimli şekilde gerçekleşmesini sağlamak": "Ensuring events run efficiently and on time",
    "Etkinlik sonrası değerlendirme ve raporlama süreçlerini yürütmek": "Managing post-event evaluation and reporting",
    "Kulübün stratejik hedeflerini belirlemek ve yönetim kurulunu yönlendirmek": "Setting the club's strategic goals and guiding the executive board",
    "Tüm kulüp faaliyetlerinin planlanması ve denetlenmesi": "Planning and overseeing all club activities",
    "Etkinliklerin organizasyon süreçlerini yönetmek": "Managing event organization",
    "Yönetim kurulu ve üyeler arası iletişimi sağlamak ve güçlendirmek": "Maintaining and strengthening communication between the board and members",
    "Kulüp bütçesinin ve finansal kaynakların yönetimi, gelir-gider takibinin düzenli olarak yapılması": "Managing the club budget and financial resources, including tracking income and expenses",
    "Etkinliklerin finansal planlamasının hazırlanması": "Preparing financial plans for events",
    "Yönetim Kurulu Başkanına kulüp faaliyetlerinin yürütülmesinde destek olmak": "Supporting the Chairperson in carrying out club activities",
    "Kulüp etkinliklerinin planlanması ve organizasyon süreçlerinin koordinasyonu": "Planning club events and coordinating organizational processes",
    "Yönetim kurulu üyeleri arasındaki iletişim ve iş birliğini desteklemek": "Supporting communication and collaboration among board members",
    "Yönetim kurulu toplantılarının planlanması ve takibi": "Planning and tracking executive board meetings",
    "Toplantı tutanaklarının hazırlanması ve arşivlenmesi": "Preparing and archiving meeting minutes",
    "Kulüp içi yazışma ve resmi iletişim süreçlerinin yürütülmesi": "Managing internal correspondence and official communications",
    "Kulüp faaliyetlerinin koordinasyonu ve organizasyon süreçlerine destek": "Coordinating club activities and supporting event organization",
    "IEEE Teknik Gezileri": "IEEE Technical Visits",
    "Workshop Organizasyonları": "Workshop Organization",
    "Kulüp İçi Projeler": "Internal Club Projects",
    "TechnoHAS etkinliğimiz kapsamında, “Elektrik-Elektronik Mühendisliği ve Mekatronik Mühendisliğinde Kariyer Seçenekleri” ana temasıyla gerçekleştirdiğimiz panelde alanında uzman akademisyenleri öğrencilerimizle bir araya getirdik.": "At TechnoHAS, we brought expert academics together with students for a panel on career opportunities in Electrical and Electronics Engineering and Mechatronics Engineering.",
    "Moderatörlüğünü Kadir Has Üniversitesi Mekatronik Mühendisliği Bölüm Başkanı Dr. Öğr. Üyesi Mine Saraç Stroppa’nın üstlendiği panelde; Bahçeşehir Üniversitesi Mekatronik Mühendisliği Bölümü öğretim üyesi Dr. Öğr. Üyesi Durul Ulutan ile Kadir Has Üniversitesi öğretim üyelerimizden Prof. Dr. Mehmet Önder Pekcan ve Dr. Öğr. Üyesi Tunçer Baykaş, öğrencilerimizin yönelttiği soruları yanıtladı.": "The panel was moderated by Dr. Mine Saraç Stroppa, Head of Mechatronics Engineering at Kadir Has University. Dr. Durul Ulutan from Bahçeşehir University, Prof. Dr. Mehmet Önder Pekcan, and Dr. Tunçer Baykaş from Kadir Has University answered students' questions.",
    "Sohbet havasında gerçekleşen panelde; yapay zekâ çağında kariyer planlaması, akademi ve sektör dinamikleri, mühendislik alanlarındaki güncel gelişmeler ve kariyer yolculuklarında yaşanan önemli dönüm noktaları ele alındı.": "The discussion covered career planning in the age of AI, academia and industry, current engineering developments, and key milestones in professional journeys.",
    "IEEE Kadir Has Üniversitesi Öğrenci Kolu olarak": "As the IEEE Student Branch at Kadir Has University",
    "Kulübümüz": "Our club",
    "Etkinliklerimiz": "Our events",
    "Öğrenci Kolu Başkanımız": "Our Student Branch Chair",
    "Akademik Danışman": "Faculty Advisor",
    "Doç. Dr.": "Assoc. Prof. Dr.",
    "Dr. Öğr. Üyesi": "Assist. Prof. Dr.",
    "Başvuru için": "To apply",
    "Başvuru Formu": "Application Form",
    "Tasarım Departmanı Lideri & Yönetim Kurulu Üyesi": "Design Department Lead and Board Member",
    "Kurumsal İletişim Departmanı Lideri & Yönetim Kurulu Üyesi": "Corporate Communications Department Lead and Board Member",
    "Sponsorluk Departmanı Lideri & Yönetim Kurulu Üyesi": "Sponsorship Department Lead and Board Member",
    "Proje Koordinatörü & Yönetim Kurulu Üyesi": "Project Coordinator and Board Member",
    "Bilgisayar Mühendisliği": "Computer Engineering",
    "Endüstri Mühendisliği": "Industrial Engineering",
    "Beyza Yıldız, 2024 yılında üniversitemiz bünyesinde Bilgisayar Mühendisliği bölümüne başlamıştır. 2026 yılından itibaren Öğrenci Kolumuz bünyesinde aktif olarak görev almaktadır. Yıldız; Tasarım Departmanı Lideri olarak kulübümüzün görsel kimliğinin geliştirilmesi, etkinlik ve duyuru materyallerinin hazırlanması, dijital platformlarda kullanılan tasarımların oluşturulması ve tasarım süreçlerinin koordinasyonuna katkı sağlamaktadır.": "Beyza Yıldız began studying Computer Engineering at our university in 2024 and has been an active member of our Student Branch since 2026. As Design Department Lead, she helps develop the club's visual identity, create event and announcement materials, design content for digital platforms, and coordinate design processes.",
    "Elif Doğan, 2025 yılında üniversitemiz bünyesinde Bilgisayar Mühendisliği bölümüne başlamıştır. 2026 yılından itibaren Öğrenci Kolumuz bünyesinde aktif olarak görev almaktadır. Doğan; Kurumsal İletişim Departmanı Lideri olarak kulübümüzün kurum içi ve kurum dışı iletişim süreçlerinin yürütülmesi, kurumsal kimliğinin temsil edilmesi ve iletişim faaliyetlerinin koordinasyonuna katkı sağlamaktadır.": "Elif Doğan began studying Computer Engineering at our university in 2025 and has been an active member of our Student Branch since 2026. As Corporate Communications Department Lead, she helps manage internal and external communications, represent the club's identity, and coordinate communications activities.",
    "Elif Naz Sönmez, 2025 yılında üniversitemiz bünyesinde Endüstri Mühendisliği bölümüne başlamıştır. 2026 yılından itibaren Öğrenci Kolumuz bünyesinde aktif olarak görev almaktadır. Sönmez; Sponsorluk Departmanı Lideri olarak kulübümüzün etkinlik ve projelerine yönelik sponsorluk çalışmalarının yürütülmesi, potansiyel sponsorlarla iletişim kurulması ve iş birliği süreçlerinin koordinasyonuna katkı sağlamaktadır.": "Elif Naz Sönmez began studying Industrial Engineering at our university in 2025 and has been an active member of our Student Branch since 2026. As Sponsorship Department Lead, she helps coordinate sponsorship efforts for club events and projects, communicate with potential sponsors, and manage partnerships.",
    "Lylian Alshalabi, 2025 yılında Kadir Has Üniversitesi bünyesinde Elektrik-Elektronik Mühendisliği bölümüne başlamıştır. Aynı yıldan itibaren öğrenci kolumuz bünyesinde aktif olarak görev almaktadır. Alshalabi; Proje Koordinatörü olarak kulüp projelerinin planlanması, yürütülmesi ve takip edilmesinden sorumludur. Projelerin zamanında ve hedeflere uygun şekilde tamamlanmasını sağlar, ekip üyeleri arasındaki koordinasyonu yönetir ve kaynakların etkin kullanımını destekler. Ayrıca proje raporlarının hazırlanması ve sunum süreçlerine katkıda bulunur.": "Lylian Alshalabi began studying Electrical and Electronics Engineering at Kadir Has University in 2025 and has been active in our Student Branch since then. As Project Coordinator, she plans, manages, and tracks club projects, helps ensure they are completed on time and meet their goals, coordinates team members, supports effective resource use, and contributes to project reports and presentations.",
    "Kulübün sosyal medya hesaplarının yönetimi ve içerik paylaşım süreçlerinin koordinasyonu": "Managing the club's social media accounts and coordinating content publishing",
    "Kulübün tanıtım faaliyetlerinin yürütülmesi ve dijital görünürlüğünün artırılması": "Managing promotional activities and increasing the club's digital visibility",
    "Etkinlik afişlerinin ve duyuru görsellerinin hazırlanması": "Creating event posters and announcement graphics",
    "Sosyal medya ve dijital platformlar için görsel içeriklerin tasarlanması": "Designing visual content for social media and digital platforms",
    "Etkinlik, proje ve faaliyetlerin duyurularının hazırlanması ve ilgili platformlarda paylaşılması": "Preparing announcements for events, projects, and activities and publishing them on relevant platforms",
    "Kulüp üyeleri ve diğer departmanlarla iletişimin sürdürülmesi": "Maintaining communication with club members and other departments",
    "Potansiyel sponsor kurum ve kuruluşların araştırılması": "Researching potential sponsors and organizations",
    "Sponsorluk tekliflerinin hazırlanması ve ilgili kurumlarla iletişimin yürütülmesi": "Preparing sponsorship proposals and communicating with relevant organizations",
    "Etkinlik ve projeler için sponsorluk desteğinin sağlanmasına yönelik çalışmaların yürütülmesi": "Working to secure sponsorship for events and projects",
    "Sponsorlarla kurulan iş birliklerinin takibi ve koordinasyonu": "Tracking and coordinating partnerships with sponsors",
    "Kulüp projelerinin planlanması ve yürütülmesi": "Planning and carrying out club projects",
    "Projelerin zamanında ve hedeflere uygun şekilde tamamlanmasını sağlamak": "Ensuring projects are completed on time and meet their goals",
    "Proje ekipleri arasındaki iletişim ve koordinasyonu yönetmek": "Managing communication and coordination between project teams",
    "Kaynak kullanımını takip etmek ve optimize etmek": "Monitoring and optimizing resource use",
    "Proje raporlarının hazırlanması ve sunum süreçlerine katkıda bulunmak": "Contributing to project reports and presentations",
    "Efe Şükrü Kan, 2025 yılında üniversitemiz bünyesinde Endüstri Mühendisliği bölümüne başlamıştır. 2025 yılından itibaren Öğrenci Kolumuz bünyesinde aktif olarak görev almaktadır. Kan; Genel Sekreter olarak kulüp içi iletişimin yürütülmesi, toplantı süreçlerinin takibi, yazışmaların düzenlenmesi ve faaliyetlerin koordinasyonuna katkı sağlamaktadır.": "Efe Şükrü Kan began studying Industrial Engineering at our university in 2025 and has been an active member of our Student Branch since then. As General Secretary, he helps manage internal communication, track meetings, organize correspondence, and coordinate club activities.",
    "Ahmet Can, 2025 yılında Kadir Has Üniversitesi bünyesinde Mekatronik Mühendisliği bölümüne başlamıştır. Aynı yıldan itibaren öğrenci kolumuz bünyesinde aktif olarak görev almaktadır. Can; Etkinlik & Organizasyon Sorumlusu olarak kulüp etkinliklerinin planlanması ve yürütülmesinden sorumludur. Etkinliklerin hazırlık, uygulama ve değerlendirme aşamalarını koordine eder, ekip üyeleri arasındaki iletişimi sağlar ve etkinliklerin başarılı bir şekilde gerçekleşmesine katkıda bulunur.": "Ahmet Can began studying Mechatronics Engineering at Kadir Has University in 2025 and has been active in our Student Branch since then. As Events & Organization Coordinator, he plans and delivers club events, coordinates preparation, implementation, and evaluation, facilitates communication among team members, and helps ensure events run successfully.",
    "Almina Şeker, 2025 yılında Kadir Has Üniversitesi bünyesinde Elektrik-Elektronik Mühendisliği bölümüne başlamıştır. Aynı yıldan itibaren öğrenci kolumuz bünyesinde aktif olarak görev almaktadır. Şeker; Yönetim Kurulu Başkanı olarak kulübün tüm faaliyetlerinin planlanması, yürütülmesi ve denetlenmesinden sorumludur. Kulübün stratejik hedeflerini belirler, yönetim kurulunu yönlendirir ve kulüp içi koordinasyonu sağlar. Ayrıca etkinliklerin organizasyon süreçlerini yönetir, üyeler arası iletişimi güçlendirir ve kulübün vizyonunu temsil eder.": "Almina Şeker began studying Electrical and Electronics Engineering at Kadir Has University in 2025 and has been active in our Student Branch since then. As Chairperson, she oversees the planning and execution of club activities, sets strategic goals, guides the executive board, coordinates internal work, manages event organization, strengthens communication among members, and represents the club's vision.",
    "Burak Konyalı, 2024 yılında Kadir Has Üniversitesi bünyesinde Elektrik-Elektronik Mühendisliği bölümüne başlamıştır. 2025 yılından itibaren öğrenci kolumuzda aktif olarak görev almaktadır. Konyalı; Sayman ve Yönetim Kurulu Üyesi olarak kulüp faaliyetlerinin planlanması ve yürütülmesine katkı sağlamaktadır. Bu kapsamda kulüp bütçesi ve finansal planlama süreçlerini takip eder, etkinliklerin organizasyon ve koordinasyon aşamalarına destek olur. Yönetim Kurulu toplantılarında görev alarak süreçlerin düzenli bir şekilde ilerlemesine katkıda bulunur ve kulüp içi iletişim ile iş birliği süreçlerinde rol üstlenir.": "Burak Konyalı began studying Electrical and Electronics Engineering at Kadir Has University in 2024 and has been active in our Student Branch since 2025. As Treasurer and Board Member, he supports club planning and operations, tracks the budget and financial planning, assists with event organization and coordination, contributes to orderly board meetings, and supports internal communication and collaboration.",
    "Dicle Çimendur, 2024 yılında Kadir Has Üniversitesi bünyesinde Elektrik-Elektronik Mühendisliği bölümüne başlamıştır. 2025 yılından itibaren öğrenci kolumuz bünyesinde aktif olarak görev almaktadır. Çimendur; Yönetim Kurulu Başkan Yardımcısı olarak kulüp faaliyetlerinin yürütülmesine destek sağlamaktadır. Ayrıca etkinliklerin planlanması, organizasyon süreçlerinin koordinasyonu ve yönetim kurulu üyeleri arasındaki iletişimin güçlendirilmesine katkıda bulunmaktadır.": "Dicle Çimendur began studying Electrical and Electronics Engineering at Kadir Has University in 2024 and has been active in our Student Branch since 2025. As Vice Chairperson, she supports club operations, helps plan events, coordinates organizational processes, and strengthens communication among board members.",
    "Osman Koçubaba, 2024 yılında Kadir Has Üniversitesi bünyesinde Elektrik-Elektronik Mühendisliği bölümüne başlamıştır. 2025 yılından itibaren Öğrenci Kolumuz bünyesinde aktif olarak görev almaktadır. Koçubaba; Genel Sekreter olarak kulüp içi iletişimin yürütülmesi, toplantı süreçlerinin takibi, yazışmaların düzenlenmesi ve faaliyetlerin koordinasyonuna katkı sağlamaktadır.": "Osman Koçubaba began studying Electrical and Electronics Engineering at Kadir Has University in 2024 and has been active in our Student Branch since 2025. As General Secretary, he helps manage internal communication, track meetings, organize correspondence, and coordinate club activities.",
    "Kulübü resmi etkinliklerde ve dış ilişkilerde temsil etmek": "Representing the club at official events and in external relations",
    "Etkinliklerin finansal planlamasının hazırlanması ve harcamaların etkin şekilde takip edilmesi": "Preparing event budgets and tracking expenses effectively",
    "Sponsor ve iş birliği ilişkilerinin yürütülmesi, anlaşmaların ve iletişim süreçlerinin koordinasyonu": "Managing sponsor and partnership relations and coordinating agreements and communications",
    "Yönetim Kurulu toplantılarının planlanması, gündem maddelerinin hazırlanması ve toplantı süreçlerinin takibi": "Planning board meetings, preparing agendas, and tracking meeting processes",
    "Kulüp faaliyetlerinin düzenli ve planlı bir şekilde yürütülmesine destek sağlamak": "Supporting the organized and structured delivery of club activities"
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
      /(^|[^\p{L}])(\d{1,2}\s+)?(OCAK|ŞUBAT|MART|NİSAN|MAYIS|HAZİRAN|TEMMUZ|AĞUSTOS|EYLÜL|EKİM|KASIM|ARALIK|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)(\s+\d{4})?(?=$|[^\p{L}])/giu,
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