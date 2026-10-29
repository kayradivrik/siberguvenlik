const QUESTIONS = [
  // ==========================================
  // 1-2. HAFTA: SİBER GÜVENLİĞE GİRİŞ VE KAVRAMLAR (25 SORU)
  // ==========================================
  {
    id: 1,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "Siber güvenliğin temel hedefi ve korumayı amaçladığı başlıca tehditler arasında aşağıdakilerden hangisi yer almaz?",
    options: {
      a: "Bilgi ve sistemleri korumak",
      b: "Siber Terörizm",
      c: "Siber Savaş",
      d: "Siber Casusluk",
      e: "Donanım üretim maliyetlerini düşürmek"
    },
    answer: "e",
    explanation: "Siber güvenlik bilgi ve sistemleri korumayı; Siber Terörizm, Siber Savaş ve Siber Casusluk gibi başlıca tehditlerden korunmayı hedefler."
  },
  {
    id: 2,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "İdeolojik veya politik amaçları için bilgi teknolojilerini yıkıcı bir şekilde kullanarak bir ulusun ya da halkının gizli, siyasi, askeri veya altyapı varlıklarını hedef alan faaliyetlere ne ad verilir?",
    options: {
      a: "Siber Terörizm",
      b: "Siber Casusluk",
      c: "Beyaz Şapkalı Hacking",
      d: "Erişim Kontrolü",
      e: "Veri Modelleme"
    },
    answer: "a",
    explanation: "Siber teröristlerin ideolojik veya politik amaçları için bilgi teknolojilerini yıkıcı bir şekilde kullanmasına 'Siber Terörizm' denir."
  },
  {
    id: 3,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "2007 yılında Sovyet ordusunun II. Dünya Savaşı anısına diktiği 'Tallinn'in Bronz Askeri' adlı anıtın kaldırılması/yerinin değiştirilmesi sonrasında bakanlık ve banka ağları devasa DDoS atakları ile kullanılmaz hale getirilen ve sanal dünyada ilk ciddi 'internet savaşı'nın yaşandığı ülke hangisidir?",
    options: {
      a: "Estonya",
      b: "Gürcistan",
      c: "Ukrayna",
      d: "Güney Kore",
      e: "İran"
    },
    answer: "a",
    explanation: "2007 yılında Estonya'da bulunan 'Tallinn'in Bronz Askeri' anıtının kaldırılması sonrasında bakanlık ağları ve iki ana banka ağı devasa DDoS saldırılarıyla çökertilmiştir."
  },
  {
    id: 4,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "Ders notlarına göre Amerika Birleşik Devletleri'nde 2009 yılından bu yana bakanlık ağları, bankalar ve askeri kritik üslere yapılan siber saldırıların kaç kat arttığı açıklanmıştır?",
    options: {
      a: "17 kat",
      b: "5 kat",
      c: "10 kat",
      d: "25 kat",
      e: "50 kat"
    },
    answer: "a",
    explanation: "ABD'de 2009'dan bu yana bakanlık ağları, bankalar ve askeri kritik üslere yapılan siber saldırıların 17 kat arttığı açıklanmıştır."
  },
  {
    id: 5,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "Bir devletin, başka bir devletin bilgisayar sistemlerine veya ağlarına hasar vermek ya da kesinti yaratmak üzere gerçekleştirdiği sızma faaliyetlerine ne ad verilir?",
    options: {
      a: "Siber Savaş",
      b: "Siber Zorbalık",
      c: "Sosyal Mühendislik",
      d: "Kişisel Veri İhlali",
      e: "Çevrimiçi Kimlik Doğrulama"
    },
    answer: "a",
    explanation: "Bir devletin başka bir devletin bilgisayar sistemlerine veya ağlarına hasar vermek ya da kesinti yaratmak üzere gerçekleştirdiği sızma faaliyetlerine Siber Savaş denir."
  },
  {
    id: 6,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "Sahiplerinin izni olmaksızın stratejik, ekonomik, politik veya askeri avantaj elde etmek amacıyla kötü amaçlı yazılımlar kullanarak gizli bilgi (kullanıcı kimlik bilgileri, kredi kartı, kurum bilgileri vb.) edinmek için bilgi teknolojisi kullanmaya ne denir?",
    options: {
      a: "Siber Casusluk",
      b: "Siber Terörizm",
      c: "Erişim Kontrolü",
      d: "Veri Bütünlüğü",
      e: "Yedekleme"
    },
    answer: "a",
    explanation: "Sahiplerinin izni olmaksızın gizli bilgi edinmek ve stratejik/ekonomik/politik/askeri avantaj sağlamak için bilgi teknolojisi kullanmaya Siber Casusluk denir."
  },
  {
    id: 7,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "Kişisel veri kavramı ile ilgili aşağıdakilerden hangisi doğrudur?",
    options: {
      a: "Tanımlanabilen yaşayan bir gerçek kişiye ait olan ve o kişiyle eşlenebilen tüm verilerdir.",
      b: "Sadece anonim istatistiksel verileri kapsar.",
      c: "Telefon numarası ve araç plakası kişisel veri kapsamına girmez.",
      d: "Yalnızca tüzel kişilerin (şirketlerin) iç süreçlerini ifade eder.",
      e: "Sadece internette paylaşılan takma adlardan ibarettir."
    },
    answer: "a",
    explanation: "Kişisel veri; ad, soyad, doğum tarihi/yeri, telefon numarası, plaka, pasaport numarası gibi yaşayan bir gerçek kişi ile eşlenebilen veya tanımlanabilen tüm verilerdir."
  },
  {
    id: 8,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "Bir internet kullanıcısının forumlar, oyun portalları (Steam, Origin, Twitch) ve sosyal ağlarda kullandığı 'Rumuz, Takma İsim, Nickname' gibi sosyal kimliğe ne ad verilir?",
    options: {
      a: "Çevrimiçi Kimlik",
      b: "Çevrimdışı Kimlik",
      c: "Kurumsal Veri",
      d: "Donanımsal Kimlik",
      e: "MAC Adresi"
    },
    answer: "a",
    explanation: "İnternet kullanıcısının çevrimiçi topluluklarda ve web sitelerinde kullandığı sosyal kimliğe (rumuz, nickname) Çevrimiçi Kimlik denir."
  },
  {
    id: 9,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "Yeni T.C. Kimlik Kartları (Çevrimdışı Kimlik) ile ilgili ders notlarında belirtilen özelliklerden hangisi doğrudur?",
    options: {
      a: "Eskiye oranla daha fazla unique (benzersiz) kod içerir, kart üzerindeki görünür kişisel veri daha azdır ve veriler çipteki ID üzerine kayıtlıdır.",
      b: "Eski kimliklere göre kart üzerinde çok daha fazla görünür kişisel veri yer alır.",
      c: "Anne kızlık soyadı kartın ön yüzünde büyük harflerle yer alır.",
      d: "Çip içermez, yalnızca barkod sistemiyle çalışır.",
      e: "Sadece çevrimiçi oyun platformlarında doğrulama için üretilmiştir."
    },
    answer: "a",
    explanation: "Yeni kimlikler eskiye oranla daha fazla unique kod içerir, görünür kişisel veri çok daha azdır ve veriler çipe kayıtlıdır; böylece anne kızlık soyadı gibi kolay bulunabilir kimlik bilgisi hırsızlığının önüne geçilir."
  },
  {
    id: 10,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "Aşağıdakilerden hangisi suçluların kişisel veriye ulaşmak için kullandığı yöntemlerden biri değildir?",
    options: {
      a: "Verileri SHA-256 ve AES ile şifreleyerek yedeklemek",
      b: "Sahte banka siteleri oluşturmak",
      c: "'Samsung Galaxy J8 Kazandınız' gibi sahte promosyon ve hediyeler sunmak",
      d: "Polis veya Maliye gibi devlet kuruluşlarına ait bir kamu çalışanı gibi davranmak",
      e: "Arama motorları ve sosyal medya hesaplarındaki paylaşımları takip etmek"
    },
    answer: "a",
    explanation: "Suçlular sahte banka siteleri, sahte promosyonlar, kamu çalışanı taklidi, arama motorları ve sosyal medya analizleri ile kişisel veriye ulaşmaya çalışırlar."
  },
  {
    id: 11,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "Kurumsal verinin ayırt edici 5 temel özelliği aşağıdakilerin hangisinde doğru olarak bir arada verilmiştir?",
    options: {
      a: "Entegre, Yedeklenebilir, Kaliteli, Ölçeklenebilir, Güvenli",
      b: "Dağınık, Yedeksiz, Karmaşık, Sabit, Halka Açık",
      c: "Geçici, Şifresiz, Anonim, Düşük Boyutlu, Tekil",
      d: "Sadece Donanımsal, Değiştirilemez, Çevrimdışı, Pahalı, Yavaş",
      e: "Kişisel, Sosyal, Rastgele, İndekslenmeyen, Kısıtlı"
    },
    answer: "a",
    explanation: "Kurumsal verinin ayırt edici özellikleri: Entegre, Yedeklenebilir, Kaliteli, Ölçeklenebilir ve Güvenli olmasıdır."
  },
  {
    id: 12,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "Kurum içerisinde bilgi güvenliği politikalarına rehberlik etmek ve bilginin korunumunu sağlamak için tasarlanan 'CIA TRIAD' modelinin üç temel unsuru nedir?",
    options: {
      a: "Confidentiality (Gizlilik), Integrity (Bütünlük), Availability (Kullanılabilirlik)",
      b: "Authentication (Kimlik Doğrulama), Authorization (Yetkilendirme), Accounting (İzleme)",
      c: "Control (Kontrol), Internet (İnternet), Application (Uygulama)",
      d: "Cyber (Siber), Information (Bilgi), Attack (Saldırı)",
      e: "Code (Kod), Injection (Enjeksiyon), Access (Erişim)"
    },
    answer: "a",
    explanation: "CIA Triad modeli: Confidentiality (Gizlilik), Integrity (Bütünlük) ve Availability (Kullanılabilirlik) olmak üzere 3 temel unsurdan oluşur."
  },
  {
    id: 13,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "CIA Triad modelinde gizliliği (Confidentiality) sağlamak amacıyla bilgisayara, ağa veya veritabanına yetkisiz erişimi engelleyen koruma şemasına ne ad verilir?",
    options: {
      a: "Erişim Kontrolü (Access Control)",
      b: "MD5 Hash Kontrolü",
      c: "Ağ Topolojisi",
      d: "SEO Poisoning",
      e: "ARP Broadcast"
    },
    answer: "a",
    explanation: "Gizliliği sağlamak için yetkisiz erişimi engelleyen koruma şemasına 'Erişim Kontrolü' denir."
  },
  {
    id: 14,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "Erişim Kontrolünde kullanılan 'AAA Konsepti' hangi 3 aşamadan oluşmaktadır?",
    options: {
      a: "Authentication (Kimlik Doğrulama), Authorization (Yetkilendirme), Accounting (Aktivite İzlenmesi)",
      b: "Availability (Kullanılabilirlik), Access (Erişim), Analysis (Analiz)",
      c: "Antivirus (Antivirüs), Application (Uygulama), Archive (Arşiv)",
      d: "Attack (Saldırı), Alert (Uyarı), Action (Aksiyon)",
      e: "Address (Adres), Algorithm (Algoritma), Account (Hesap)"
    },
    answer: "a",
    explanation: "AAA Konsepti: Authentication (Kimlik Doğrulama), Authorization (Yetkilendirme) ve Accounting (Aktivite İzlenmesi) aşamalarından oluşur."
  },
  {
    id: 15,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "CIA Triad modelinde 'Verinin tüm yaşam döngüsü boyunca tutarlılığını ve güvenilirliğini korumayı' içeren ve veri aktarımında 'MD5 Check / Hash kontrolü' ile doğrulanan unsur hangisidir?",
    options: {
      a: "Integrity (Bütünlük)",
      b: "Confidentiality (Gizlilik)",
      c: "Availability (Kullanılabilirlik)",
      d: "Accounting (Aktivite İzlenmesi)",
      e: "Authentication (Kimlik Doğrulama)"
    },
    answer: "a",
    explanation: "Integrity (Bütünlük), verinin yaşam döngüsü boyunca tutarlılığını korumayı içerir; bankalar için çok kritiktir ve aktarımda MD5 Check / Hash kontrolü buna örnektir."
  },
  {
    id: 16,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "CIA Triad modelinde bankalar, veri merkezleri (sunucular), telekomünikasyon şirketleri, çağrı merkezleri ve devlet daireleri gibi kurumlarda 'bilgi sistemlerinin ve hizmetlerin her zaman çalışır ve erişilebilir olmasını' ifade eden kavram hangisidir?",
    options: {
      a: "Availability (Kullanılabilirlik)",
      b: "Confidentiality (Gizlilik)",
      c: "Integrity (Bütünlük)",
      d: "Authorization (Yetkilendirme)",
      e: "Social Engineering (Sosyal Mühendislik)"
    },
    answer: "a",
    explanation: "Availability (Kullanılabilirlik), bilgi sistemlerinin ve hizmetlerin her zaman kullanılabilirliğini sağlamaktır."
  },
  {
    id: 17,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "Bir kurumda güvenlik ihlali yaşandığında yanıtlanması gereken temel sorular ve yapılması gerekenler hakkında aşağıdakilerden hangisi yanlıştır?",
    options: {
      a: "Güvenlik ihlali müşterileri etkilese bile itibar kaybı olmaması için müşterilerden gizlenmelidir.",
      b: "'Ne oldu?' sorusuna yanıt aranmalıdır.",
      c: "'Neler götürüldü?' sorusu tespit edilmelidir.",
      d: "'Sonuçlar neler?' sorusu analiz edilmelidir.",
      e: "'İhlalden sonra müşterinin yapması gereken bir şey var mı?' sorusu değerlendirilmeli ve müşteriye dokunan bir durum varsa acilen bilgilendirilmelidir."
    },
    answer: "a",
    explanation: "Güvenlik ihlalinin ardından müşterilere dokunan bir durum var ise müşterinin acilen bilgilendirilmesi gerekmektedir."
  },
  {
    id: 18,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "Kişisel kazançlar için bilgisayarların veya ağların güvenliğini ihlal eden, kredi kartı bilgilerini çalan, Botnet ağı yaratarak veya DDoS atakları yaparak sunucuları etkisiz hale getiren hacker grubu hangisidir?",
    options: {
      a: "Siyah Şapkalı Hacker (Black Hat)",
      b: "Beyaz Şapkalı Hacker (White Hat)",
      c: "Gri Şapkalı Hacker (Grey Hat)",
      d: "Test Developer",
      e: "Ağ Yöneticisi"
    },
    answer: "a",
    explanation: "Siyah Şapkalı Hackerlar (Black Hat) kişisel kazançlar için sistemlerin güvenliğini ihlal eder, veri çalar veya DDoS/Botnet saldırıları düzenler."
  },
  {
    id: 19,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "Siyah şapka ile Beyaz şapka arasında bir yerde yer alan; inandıkları amaçlar ve siyasi konular için hack yapabilen, iyi yaptıkları şeyler olduğu gibi kendi çıkarları için yaptıkları şeyler de bulunan hacker türü hangisidir?",
    options: {
      a: "Gri Şapkalı Hacker (Grey Hat)",
      b: "Beyaz Şapkalı Hacker (White Hat)",
      c: "Siyah Şapkalı Hacker (Black Hat)",
      d: "Donanım Uzmanı",
      e: "Sistem Analisti"
    },
    answer: "a",
    explanation: "Gri Şapkalı Hackerlar (Grey Hat), siyah ve beyaz şapka arasında yer alır; inandıkları amaçlar ve siyasi konular için veya kendi amaçları için açıkları kullanabilirler."
  },
  {
    id: 20,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "Kişilere veya kurumlara zararı olmayan, şirketlerin güvenlik açıklarını önceden bularak şirketlere bildiren ve olası hack olaylarının önüne geçen güvenlik uzmanlarına ne ad verilir?",
    options: {
      a: "Beyaz Şapkalı Hacker (White Hat)",
      b: "Siyah Şapkalı Hacker (Black Hat)",
      c: "Gri Şapkalı Hacker (Grey Hat)",
      d: "Siber Terörist",
      e: "Botnet Operatörü"
    },
    answer: "a",
    explanation: "Beyaz Şapkalı Hackerlar (White Hat) kurumlara zarar vermez, açıkları önceden bulup bildirerek olası saldırıların önüne geçerler."
  },
  {
    id: 21,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "Aşağıdakilerden hangisi kurumsal güvenliği tehdit eden bir 'İç Tehdit' (Internal Threat) örneğidir?",
    options: {
      a: "Kötü niyetli veya kızgın çalışanların kurum verisini dışarıya sızdırması ya da şirket içi kullanıcı hesaplarının çalınması",
      b: "Başka bir devletin uzaktan DDoS saldırısı düzenlemesi",
      c: "Kurum dışındaki bir hackerın sunucuya internet üzerinden SQL Injection yapması",
      d: "Rakip firmanın dış ağdan sunucu kaynak kodlarını çalması",
      e: "Açık kaynaklı bir CMS eklentisinde uzaktan dosya yükleme açığı çıkması"
    },
    answer: "a",
    explanation: "Şirket içi kullanıcı hesaplarının çalınması, kötü niyetli çalışanların veriyi dışarıya sızdırmak istemesi veya 'Kızgın Çalışanlar' iç tehditlere örnektir."
  },
  {
    id: 22,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "Rusya'nın 2008 yılında ABD'nin Irak ve Afganistan savaşlarını yürüten komuta merkezine sızmak için kullandığı yöntem aşağıdakilerden hangisidir?",
    options: {
      a: "Virüslü bir hafıza kartı (bellek)",
      b: "Sahte banka promosyon SMS'i",
      c: "Li-Fi ışık sinyalleri",
      d: "Kuantum bilgisayar saldırısı",
      e: "Wordpress eklenti açığı"
    },
    answer: "a",
    explanation: "Rusya 2008 yılında virüslü bir hafıza kartıyla ABD'nin Irak ve Afganistan savaşlarını yürüten komuta merkezine sızmıştır."
  },
  {
    id: 23,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "İran'ın nükleer programını hedef alan, kendi kendini kopyalayan ve öncelikle motorları ve sıcaklığı kontrol eden merkezi mantık kontrol birimi olan PLC'yi ele geçiren siber silah/virüs hangisidir?",
    options: {
      a: "STUXnet",
      b: "Nimda",
      c: "SQLSlammer",
      d: "Meltdown",
      e: "DriftNet"
    },
    answer: "a",
    explanation: "STUXnet virüsü, İran'ın nükleer tesislerinde motorları ve sıcaklığı kontrol eden merkezi mantık kontrol birimi olan PLC'yi ele geçirerek sistemi sabote etmiştir."
  },
  {
    id: 24,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "Rusya'nın 2007 ve 2008 yıllarında askeri müdahaleden hemen önce iletişim altyapısını siber saldırılarla çökerttiği ülke hangisidir?",
    options: {
      a: "Gürcistan",
      b: "Güney Kore",
      c: "Japonya",
      d: "Brezilya",
      e: "Fransa"
    },
    answer: "a",
    explanation: "Rusya, 2008'de Gürcistan'a saldırmadan hemen önce Gürcistan iletişim altyapısının çökertilmesinden sorumludur."
  },
  {
    id: 25,
    week: "1-2. Hafta · Siber Güvenliğe Giriş",
    question: "Ülkeler arası siber savaşlara hazırlıklı olabilmek için yapılması gerekenler arasında aşağıdakilerden hangisi yer almaz?",
    options: {
      a: "Tüm kritik askeri ve kamu sistemlerinde yalnızca yabancı ve kapalı kaynaklı işletim sistemlerini kullanmak",
      b: "Siber güvenlik için bütçe ve kaynak ayrılması",
      c: "Siber güvenlik uzmanlarımızın yetiştirilmesi",
      d: "Yerli donanım, yazılım, savaş uçakları ve tanklarımızın üretilmesi",
      e: "Kendi ulusal işletim sistemlerimizin üretilmesi"
    },
    answer: "a",
    explanation: "Siber savaşlara hazırlıklı olmak için bütçe/kaynak ayrılmalı, uzman yetiştirilmeli, kendi savunma sanayi araçlarımız, donanım/yazılımımız ve ulusal işletim sistemlerimiz üretilmelidir."
  },

  // ==========================================
  // 3-4. HAFTA: SİBER SALDIRILAR, KAVRAMLAR VE GİZLİLİK (25 SORU)
  // ==========================================
  {
    id: 26,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "Saldırganların sisteme sızmasını sağlayan zayıf noktalar olan güvenlik açıkları temelde hangi 2 ana gruba ayrılır?",
    options: {
      a: "Yazılım Güvenliği Açığı ve Donanım Güvenliği Açığı",
      b: "Yerel Açık ve Geniş Alan Açığı",
      c: "Seri Açık ve Paralel Açık",
      d: "Statik Açık ve Dinamik Açık",
      e: "Aktif Açık ve Pasif Açık"
    },
    answer: "a",
    explanation: "Güvenlik açıkları 1. Yazılım Güvenliği Açığı ve 2. Donanım Güvenliği Açığı olmak üzere iki çeşittir."
  },
  {
    id: 27,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "2018 yılında başta Intel işlemciler olmak üzere ARM (Telefon ve Tabletler) ve AMD işlemcilerde keşfedilen, saldırganların normal şartlarda erişim iznine sahip olmadıkları belleğe (RAM) erişerek bilgileri ele geçirmesine yol açan donanım güvenlik açıkları hangileridir?",
    options: {
      a: "Spectre ve Meltdown",
      b: "Nimda ve SQLSlammer",
      c: "XSS ve CSRF",
      d: "Stuxnet ve WannaCry",
      e: "EtterCap ve DriftNet"
    },
    answer: "a",
    explanation: "Spectre ve Meltdown, işlemci/kernel düzeyinde çıkan ve yetkisiz bellek (RAM) erişimine yol açan donanım güvenlik açıklarıdır."
  },
  {
    id: 28,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "Yazılım güvenlik açıkları (örneğin işletim sistemi açıkları) ve bunlara karşı alınacak önlemlerle ilgili aşağıdakilerden hangisi yanlıştır?",
    options: {
      a: "Kritik sistemlerde yazılımların öncelikle Alfa veya Beta sürümlerinin kurulması en güvenli yöntemdir.",
      b: "Yazılım açıkları yetkisiz erişimlere ve sistemin fidye yazılımlarına maruz kalmasına neden olabilir.",
      c: "Sistemin çalışmamasına veya çökmesine (Blue Screen of Death) yol açabilir.",
      d: "Korunmak için kullanılan sistemlerin güncel versiyonları yüklenmelidir.",
      e: "Kullanılan sistemlerin kararlı (stable) sürümleri tercih edilmelidir."
    },
    answer: "a",
    explanation: "Kritik sistemlerde yazılımların henüz test aşamasında olan Alfa veya Beta sürümlerinin kurulması kesinlikle doğru değildir; güncel ve kararlı sürümler yüklenmelidir."
  },
  {
    id: 29,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "Aşağıdakilerden hangisi ders notlarında belirtilen güvenlik açığı çeşitlerinden biri değildir?",
    options: {
      a: "İki Faktörlü Doğrulama (2FA)",
      b: "Buffer Taşması (Buffer Overflow)",
      c: "Doğrulanmamış/Doğrulanmış Girdi Problemleri",
      d: "Race Durumları (Race Conditions)",
      e: "Erişim Kontrol Problemleri ve Güvenlik Uygulamalarındaki Zafiyetler"
    },
    answer: "a",
    explanation: "Buffer taşması, girdi doğrulama sorunları, Race durumları, güvenlik uygulamalarındaki zafiyetler ve erişim kontrol problemleri güvenlik açığı çeşitleridir; 2FA ise bir güvenlik önlemidir."
  },
  {
    id: 30,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "Virüsler, solucanlar, truva atları, casus yazılımlar, reklam yazılımları, programları izinsiz şifreleyen yazılımlar ve Bitcoin Mining virüsleri gibi kötü niyetli yazılımların tümüne genel olarak ne ad verilir?",
    options: {
      a: "Malware (Malicious Software)",
      b: "Firewall (Güvenlik Duvarı)",
      c: "Firmware",
      d: "Freeware",
      e: "CMS (Content Management System)"
    },
    answer: "a",
    explanation: "Malicious Software (Malware), virüsler, solucanlar, truva atları, casus yazılımlar, fidye yazılımları ve kripto madencilik virüsleri gibi kötü amaçlı yazılımların tümüdür."
  },
  {
    id: 31,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "Aşağıdakilerden hangisi saldırganların sistemlere sızmak için kullandığı 'Sızma Yöntemleri' arasında yer almaz?",
    options: {
      a: "MAC adres filtrelemesi ile yetkisiz cihazları engellemek",
      b: "Sosyal Mühendislik",
      c: "Parola Keşfetme / Kırma (Kablosuz Ağlar)",
      d: "Phishing (Oltalama)",
      e: "Zafiyet taramasından faydalanma"
    },
    answer: "a",
    explanation: "Sosyal mühendislik, parola kırma, phishing (oltalama) ve zafiyet taramasından faydalanma başlıca sızma yöntemleridir."
  },
  {
    id: 32,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "Ders notlarında 'Denial of Service' (Hizmeti kesintiye uğratan saldırı tipleri) başlığı altında aşağıdaki üçlüden hangisi yer almaktadır?",
    options: {
      a: "DoS, DDoS (Distributed DoS), SEO Poisoning",
      b: "AES, TKIP, WPA2",
      c: "HTML, CSS, JavaScript",
      d: "LAN, MAN, WAN",
      e: "Authentication, Authorization, Accounting"
    },
    answer: "a",
    explanation: "Hizmeti kesintiye uğratan saldırı tipleri altında DoS, DDoS ve SEO Poisoning sıralanmıştır."
  },
  {
    id: 33,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "Solucan, Truva atı gibi çeşitli malware ve virüs örnekleri ile Phishing gibi birçok farklı metodun bir kombinasyonunu kullanarak farklı güvenlik açıklarına karşı gerçekleştirilen tehdit metoduna ne ad verilir?",
    options: {
      a: "Harmanlanmış Tehdit Metodu (Blended Threat)",
      b: "Tekil Paket Filtreleme",
      c: "Statik Analiz",
      d: "Çevrimdışı Kimlik Doğrulama",
      e: "Seri İletişim"
    },
    answer: "a",
    explanation: "Farklı güvenlik açıklarına karşı saldırıların ve zararlıların (solucan, truva atı, phishing vb.) bir kombinasyonunu kullanan yönteme Harmanlanmış Tehdit Metodu denir."
  },
  {
    id: 34,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "Siber tehditlerin etkisini azaltmak için yapılması gerekenlerle ilgili aşağıdakilerden hangisi doğrudur?",
    options: {
      a: "Yazılımsal ve donanımsal güncellemeleri aksatmamak ve şirketteki kullanıcıların sorunlarını dinlemek olası tehditleri engellemeye yardımcı olur.",
      b: "Güvenlik güncellemeleri sistemi yavaşlattığı için tamamen kapatılmalıdır.",
      c: "Şirket içindeki son kullanıcıların bildirdiği sorunlar güvenlik uzmanları tarafından dikkate alınmamalıdır.",
      d: "Kullanıcı tecrübesinin siber tehditleri engellemede hiçbir rolü yoktur.",
      e: "Yalnızca donanım güncellenmeli, işletim sistemi güncellenmemelidir."
    },
    answer: "a",
    explanation: "Yazılımsal ve donanımsal güncellemeleri aksatmamak, kullanıcıların sorunlarını dinlemek ve sistemi kullananların tecrübesi tehditleri engellemenin en önemli yollarıdır."
  },
  {
    id: 35,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "Son kullanıcı cihazlarındaki veriyi korumak için alınması gereken 3 temel önlem aşağıdakilerden hangisidir?",
    options: {
      a: "Firewall cihazını aktif tutmak, Anti-virüs (endpoint protection) yazılımı kullanmak, İşletim sistemlerini güncel tutmak",
      b: "Firewall'u kapatmak, Alfa sürüm işletim sistemi kurmak, her sitede aynı şifreyi kullanmak",
      c: "Bluetooth'u sürekli açık bırakmak, halka açık Wi-Fi kullanmak, güncellemeleri ertelemek",
      d: "Tarayıcıya bilinmeyen eklentiler kurmak, gizli soruları gerçek bilgilerle doldurmak, yedek almamak",
      e: "Sadece WEP şifreleme kullanmak, modemde tüm portları açmak, varsayılan şifreyi değiştirmemek"
    },
    answer: "a",
    explanation: "Son kullanıcı cihazlarında veriyi korumak için Firewall aktif tutulmalı, Anti-virüs (endpoint protection) kullanılmalı ve işletim sistemi güncel tutulmalıdır."
  },
  {
    id: 36,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "Kablosuz ağlardaki verileri korumak için son kullanıcıların alması gereken önlemler arasında aşağıdakilerden hangisi yer alır?",
    options: {
      a: "Güçlü şifreleme metotları kullanmak, herkese açık hot-spot noktalarında dikkatli olmak ve kullanımda değilken Bluetooth'u kapatmak",
      b: "Herkese açık hot-spot noktalarında internet bankacılığı işlemleri yapmak",
      c: "Bluetooth özelliğini 7/24 görünür ve açık tutmak",
      d: "Kablosuz ağ şifresini kaldırmak",
      e: "En kolay kırılan WEP şifreleme protokolünü tercih etmek"
    },
    answer: "a",
    explanation: "Kablosuz ağlarda güçlü şifreleme kullanılmalı, açık hot-spot noktalarında dikkatli olunmalı ve kullanılmadığında Bluetooth kapatılmalıdır."
  },
  {
    id: 37,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "Çevrimiçi hesaplarda güçlü ve kırılması zor parolalar oluşturmak için ders notlarında önerilen ideal karakter uzunluğu aralığı nedir?",
    options: {
      a: "12 - 16 karakter aralığında, sembol ve büyük-küçük harf içeren parolalar",
      b: "2 - 4 karakter aralığında sadece rakamlardan oluşan parolalar",
      c: "Sadece doğum yılından oluşan 4 haneli parolalar",
      d: "Her hesapta aynı olan 5 harfli ardışık kelimeler",
      e: "Ad ve soyad kombinasyonundan oluşan 6 karakterli parolalar"
    },
    answer: "a",
    explanation: "Firmaların minimum standartları genelde 6-8 karakter olsa da, güçlü ve kırılması zor parolalar için 12 - 16 karakter aralığında sembol, rakam ve büyük-küçük harf içeren parolalar üretilmelidir."
  },
  {
    id: 38,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "Güçlü parola oluşturma ilkelerine göre aşağıdakilerden hangisi yanlıştır?",
    options: {
      a: "Unutmamak için tüm çevrimiçi hesaplarda doğum tarihi ve isim içeren tek bir ortak parola kullanılmalıdır.",
      b: "Kişisel verileri içermeyen karmaşık parolalar oluşturulmalıdır.",
      c: "Her bir çevrimiçi hesap için farklı parolalar kullanılmalı veya hesabın önemine göre parola grupları oluşturulmalıdır.",
      d: "Büyük harf, küçük harf, sembol ve rakamlar bir arada kullanılmalıdır.",
      e: "Parola üretmek için Password Generator gibi yazılımlar kullanılabilir."
    },
    answer: "a",
    explanation: "Parolalar kişisel verileri içermemeli ve her hesap için farklı parolalar (veya önem derecesine göre parola grupları) kullanılmalıdır."
  },
  {
    id: 39,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "Veriyi korumak için ders notlarında verilen 3 genel öneri aşağıdakilerden hangisidir?",
    options: {
      a: "Verilerinizi şifreleyin, Yedek alın, Sileceğiniz zaman tümüyle yok edin",
      b: "Verileri şifresiz saklayın, Tek kopya halinde tutun, Geri dönüşüm kutusunda bırakın",
      c: "Verileri sosyal medyada paylaşın, Herkese açık bulutta tutun, Şifreleri tarayıcıya kaydedin",
      d: "Yalnızca yerel diskte şifresiz tutun, Güncellemeleri kapatın, Antivirüsü devre dışı bırakın",
      e: "Dosya izinlerini 777 yapın, Misafir hesabını aktif edin, Logları silin"
    },
    answer: "a",
    explanation: "Veriyi korumak için genel öneriler: 1. Verilerinizi şifreleyin, 2. Yedek alın, 3. Sileceğiniz zaman tümüyle yok edin."
  },
  {
    id: 40,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "Çevrimiçi hizmetleri ve web sitelerini kullanırken kullanıcıların bilgilendirilmesi ve onayının alınması konusunda 'Avrupa Birliği Zorunluluğu' olarak karşımıza çıkan unsur hangisidir?",
    options: {
      a: "Çerezler (Cookies)",
      b: "BIOS Güncellemesi",
      c: "MAC Adresi Değişimi",
      d: "Donanımsal Güvenlik Duvarı",
      e: "ARP Tablosu"
    },
    answer: "a",
    explanation: "Çevrimiçi hizmetlerde Kullanım Koşulları, Hizmet Şartları, Veri İlkeleri ve Çerezler (Avrupa Birliği Zorunluluğu) kabul etmemiz gereken yasal sözleşme ve zorunluluklardandır."
  },
  {
    id: 41,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "Kullanıcı şifresini girdikten sonra telefon veya ona ait bir cihaz üzerinden SMS, arama, mail veya Google Authenticator gibi yöntemlerle ikinci bir doğrulama yapılmasına ne ad verilir?",
    options: {
      a: "Two Factor Authentication (2 Faktörlü Doğrulama Metodu)",
      b: "Social Media Authentication",
      c: "SQL Injection",
      d: "Brute Force",
      e: "Single Sign-On (Tekli Oturum Açma)"
    },
    answer: "a",
    explanation: "Şifre girildikten sonra telefon/cihaz üzerinden SMS, mail veya Google Authenticator ile yapılan doğrulamaya Two Factor Authentication (2 Faktörlü Doğrulama) denir."
  },
  {
    id: 42,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "Sosyal medya güvenliğini sağlamak için ders notlarında önerilen tedbirlerden hangisi doğrudur?",
    options: {
      a: "Hesap kurtarma için kullanılan 'gizli sorulara' başkalarının tahmin edemeyeceği yanlış/farklı yanıtlar verilmeli ve Check-In yaparken ikamet adresi paylaşılmamalıdır.",
      b: "Doğum tarihi, doğum yeri ve tüm aile bireylerinin bilgileri herkese açık paylaşılmalıdır.",
      c: "Check-In yaparken evimizin tam ikamet adresi detaylıca yazılmalıdır.",
      d: "Gizli sorulara sosyal medyadan kolayca bulunabilecek gerçek anne kızlık soyadı yazılmalıdır.",
      e: "Bilinmeyen tüm üçüncü parti uygulamalara sosyal medya hesap erişimi verilmelidir."
    },
    answer: "a",
    explanation: "Sosyal medyada kişisel/ailevi bilgiler paylaşılmamalı, Check-In yaparken ikamet adresi verilmemeli ve gizli sorulara kolay tahmin edilmemesi için yanlış yanıtlar verilmelidir."
  },
  {
    id: 43,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "E-mail ve web tarayıcı (browser) güvenliğini sağlamak için aşağıdakilerden hangisi yapılmalıdır?",
    options: {
      a: "E-mailleri şifrelemek, güvenilmeyen yazılımcıların browser add-on (eklenti) yazılımlarını kullanmamak ve mümkünse in-private (gizli) modda gezinmek",
      b: "Kaynağı belirsiz tüm tarayıcı eklentilerini (add-on) yüklemek",
      c: "Ortak bilgisayarlarda şifreleri ve geçmiş kayıtları tarayıcıya kaydetmek",
      d: "E-mailleri her zaman şifresiz ve açık metin olarak göndermek",
      e: "Tarayıcı güvenlik uyarılarını devre dışı bırakmak"
    },
    answer: "a",
    explanation: "E-mailler şifrelenmeli, bilmediğimiz yazılımcıların browser add-on eklentileri kullanılmamalı ve şifre/kayıtların tutulmaması için mümkünse in-private mode kullanılmalıdır."
  },
  {
    id: 44,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "Tarayıcılarda 'In-Private Mode' (Gizli Sekme / Gizli Mod) kullanmanın temel avantajı nedir?",
    options: {
      a: "Oturum kapandığında şifreler, çerezler, geçmiş ve geçici dosyalar bilgisayarda tutulmaz/kaydedilmez.",
      b: "Bilgisayardaki donanım açıklarını (Meltdown/Spectre) fiziksel olarak onarır.",
      c: "İnternet hızını 100 kat artırır.",
      d: "Kuantum bilgisayarlara bağlanmayı sağlar.",
      e: "İşletim sisteminin lisansını otomatik yeniler."
    },
    answer: "a",
    explanation: "In-Private modda gezinirken tarayıcı verileri (şifreler, çerezler, geçmiş ve geçici kayıtlar) tüm gizli sekmeler kapatıldığında bilgisayarda tutulmaz."
  },
  {
    id: 45,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "Bir programın bellekte ayrılan alandan daha fazla veri yazmaya çalışması sonucu oluşan ve saldırganların sistemde yetkisiz kod çalıştırmasına olanak tanıyabilen güvenlik açığı hangisidir?",
    options: {
      a: "Buffer Taşması (Buffer Overflow)",
      b: "SEO Poisoning",
      c: "Hotspot Teknolojisi",
      d: "Li-Fi Spektrumu",
      e: "Çevrimdışı Kimlik"
    },
    answer: "a",
    explanation: "Buffer Taşması (Buffer Overflow), yazılım güvenlik açığı çeşitlerinden biridir ve bellek tamponunun taşmasıyla oluşur."
  },
  {
    id: 46,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "Saldırganların arama motoru optimizasyonu tekniklerini kötüye kullanarak zararlı web sitelerini arama sonuçlarında üst sıralara çıkarması yöntemine ne ad verilir?",
    options: {
      a: "SEO Poisoning",
      b: "ARP Poisoning",
      c: "MAC Filtering",
      d: "Two Factor Authentication",
      e: "MD5 Check"
    },
    answer: "a",
    explanation: "SEO Poisoning (Arama Motoru Optimizasyonu Zehirlemesi), kullanıcıları arama motoru sonuçları üzerinden zararlı sitelere çeken saldırı yöntemidir."
  },
  {
    id: 47,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "Kullanıcının bilgisayar kaynaklarını (CPU/GPU) izinsiz şekilde kripto para üretmek için kullanan zararlı yazılımlar hangi kategoriye örnektir?",
    options: {
      a: "Bitcoin Mining Virüsleri (Malware)",
      b: "Donanımsal Güvenlik Duvarı",
      c: "Beyaz Şapkalı Pentest Aracı",
      d: "Erişim Kontrol Şeması",
      e: "Açık Kaynaklı CMS"
    },
    answer: "a",
    explanation: "Ders notlarında Malware (Kötü Amaçlı Yazılım) çeşitlerine örnek olarak Bitcoin Mining Virüsleri verilmiştir."
  },
  {
    id: 48,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "Birden fazla ele geçirilmiş bilgisayarın (zombi/botnet) aynı anda tek bir hedef sisteme saldırarak hizmeti kesintiye uğratmasına ne ad verilir?",
    options: {
      a: "DDoS (Distributed Denial of Service)",
      b: "Phishing (Oltalama)",
      c: "In-Private Browsing",
      d: "Password Generator",
      e: "Check-In"
    },
    answer: "a",
    explanation: "Çok sayıda sistemden dağıtık olarak yapılan hizmet aksatma saldırısına DDoS (Distributed Denial of Service) denir."
  },
  {
    id: 49,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "Sahte e-postalar veya web siteleri aracılığıyla kullanıcıları kandırarak parola ve kredi kartı gibi hassas bilgilerini ele geçirmeyi amaçlayan sızma yöntemine ne ad verilir?",
    options: {
      a: "Phishing (Oltalama)",
      b: "Buffer Overflow",
      c: "Race Condition",
      d: "Endpoint Protection",
      e: "MD5 Control"
    },
    answer: "a",
    explanation: "Phishing (Oltalama), kullanıcıları sahte ileti ve sitelerle yemleyerek bilgilerini sızdırma yöntemidir."
  },
  {
    id: 50,
    week: "3-4. Hafta · Saldırılar ve Gizlilik",
    question: "Aşağıdakilerden hangisi 'Endpoint Protection' kavramının karşılığı olarak son kullanıcı cihazlarında veriyi korumak için kullanılır?",
    options: {
      a: "Anti-virüs yazılımı",
      b: "Torrent istemcisi",
      c: "Zararlı tarayıcı eklentisi",
      d: "Halka açık Wi-Fi noktası",
      e: "Beta sürüm işletim sistemi"
    },
    answer: "a",
    explanation: "Ders notlarında son kullanıcı cihazlarındaki veriyi korumak için 'Bir Anti-virüs yazılımı (endpoint protection) kullanın' maddesi yer almaktadır."
  },

  // ==========================================
  // 5. HAFTA: WEB VE MOBİL UYGULAMALARI GÜVENLİĞİ (25 SORU)
  // ==========================================
  {
    id: 51,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "Bir zamanlar web sitelerinde çok popüler olan ancak güvenlik açıkları, kaynakları verimsiz kullanışı ve HTML5'in gelişmesi nedeniyle 12 Ağustos 2012'de desteği durdurulan ve tarayıcılarda kapalı gelen teknoloji hangisidir?",
    options: {
      a: "Adobe Flash",
      b: "CSS3",
      c: "HTTPS",
      d: "JSON",
      e: "Wordpress"
    },
    answer: "a",
    explanation: "Adobe Flash uygulamasının güvenlik açıkları, kaynakları verimsiz kullanışı ve HTML yazılımının gelişmesiyle desteği durdurulmuş ve tarayıcılarda varsayılan olarak kapatılmıştır."
  },
  {
    id: 52,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "Google'ın Gmail uygulamasının 5 yıldan uzun süre (7 Temmuz 2009'a kadar) 'Beta' sürümünde kalmasının ders notlarında belirtilen temel nedenlerinden biri nedir?",
    options: {
      a: "Uygulamayı kullanan kişilerin tamamlanmamış beta yazılımda çıkabilecek sorunları kabul ederek kullanmasını sağlamak",
      b: "Gmail'in sadece yerel ağda (LAN) çalışması",
      c: "E-posta göndermek için henüz internet protokollerinin olmaması",
      d: "Google'ın alan adı satın alamaması",
      e: "Uygulamanın yalnızca Tor Browser üzerinden çalışması"
    },
    answer: "a",
    explanation: "Web uygulamaları test aşamasında Alfa veya Beta olarak yayınlanabilir; Gmail'in yıllarca beta kalmasının nedenlerinden biri kullanıcıların çıkabilecek sorunları kabul ederek kullanmasıdır."
  },
  {
    id: 53,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "Web tabanlı uygulama ve web sitelerinde güvenlik ne kadar üst seviyelere getirilse de hiçbir zaman 'tamamen güvenli' denilememesinin ve her zaman yeni bir güvenlik açığı oluşabilmesinin asıl nedeni nedir?",
    options: {
      a: "Yazılımların ve yazılım standartlarının sürekli gelişmesi",
      b: "İnternetin sadece askeri amaçla kullanılması",
      c: "Tüm web sitelerinin aynı şifreyi kullanması",
      d: "Bilgisayarlarda ağ kartı bulunmaması",
      e: "HTTPS protokolünün henüz icat edilmemiş olması"
    },
    answer: "a",
    explanation: "Web uygulamalarının hiçbir zaman tamamen güvenli sayılamamasının asıl nedeni yazılımların ve yazılım standartlarının sürekli gelişmesidir."
  },
  {
    id: 54,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "Penetrasyon testlerinde yazılımlarda aranan, sözcük anlamı 'böcek' olan ve internet ortamında 'sistem zayıflıklarını' ifade eden kavram nedir?",
    options: {
      a: "Bug",
      b: "Cookie",
      c: "Host",
      d: "Proxy",
      e: "Patch"
    },
    answer: "a",
    explanation: "Sözcük anlamı böcek olan 'bug', internet ortamında sistem zayıflıklarını ve yazılım hatalarını ifade etmektedir."
  },
  {
    id: 55,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "Büyük web tabanlı projelerde yazılımcılar görevlerine göre hangi iki gruba ayrılır?",
    options: {
      a: "Software Developer (Projeyi Yazan Yazılımcılar) ve Test Developer (Test Yazılımcıları)",
      b: "Black Hat ve Grey Hat",
      c: "Network Admin ve Modem Admin",
      d: "Donanım Üreticisi ve Kablo Operatörü",
      e: "Son Kullanıcı ve Ziyaretçi"
    },
    answer: "a",
    explanation: "Büyük web tabanlı projelerde yazılımcılar projeyi yazan yazılımcılar (Software Developer) ve test yazılımcıları (Test Developer) olarak ikiye ayrılır."
  },
  {
    id: 56,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "Kötü niyetli Bug Researcher'ların (Siyah şapkalıların) yeni bulunan karmaşık açıklar (örn. Meltdown ve Spectre) yerine ilk olarak sistemlerdeki 'en çok bilinen hataları' bulmayı hedeflemelerinin nedeni nedir?",
    options: {
      a: "Bilinen hatalar ile sistemi sabote etmek veya sistem açıklarını kullanmak çok daha kolaydır; yeni bulunan bir açığın kullanımı zaman alabilir.",
      b: "Yeni bulunan açıkların sistemlere hiçbir zararı yoktur.",
      c: "Bilinen hatalar sadece kuantum bilgisayarlarla çalışır.",
      d: "En çok bilinen hatalar sadece donanımsal güvenlik duvarlarında bulunur.",
      e: "Yeni açıkları bulmak tamamen yasaldır."
    },
    answer: "a",
    explanation: "Bilinen hatalar ile sistemi sabote etmek veya açıkları kullanmak çok daha kolaydır; yeni bulunan bir açığın (örn. Meltdown/Spectre) kullanımı hackerlar için zaman alabilir."
  },
  {
    id: 57,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "Web tabanlı yazılım projelerinde ve web sitelerinde veri iletişiminin güvenliği için alınması gereken en büyük önlemlerden biri olan güçlü şifreleme protokolleri hangileridir?",
    options: {
      a: "HTTPS, SSL, TLS",
      b: "HTTP, FTP, Telnet",
      c: "WEP, ARP, ICMP",
      d: "HTML, CSS, XML",
      e: "POST, GET, PUT"
    },
    answer: "a",
    explanation: "Web sitelerinde alınması gereken en büyük önlemlerden biri HTTPS, SSL, TLS gibi güçlü şifreleme algoritmalarını destekleyen protokollerin kullanımıdır."
  },
  {
    id: 58,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "Tam açılımı 'Structured Query Language Injection' olan ve web uygulamaları üzerinden yetkisiz olarak 'veritabanına' sızılmasını sağlayan yaygın güvenlik açığı hangisidir?",
    options: {
      a: "SQL Injection",
      b: "Cross Site Scripting (XSS)",
      c: "Cross Site Reference Forgery (CSRF)",
      d: "Remote File Include (RFI)",
      e: "ARP Spoofing"
    },
    answer: "a",
    explanation: "SQL Injection (Structured Query Language Injection), bir veritabanı güvenliği açığıdır ve yetkisiz olarak veritabanına sızılmasını sağlar."
  },
  {
    id: 59,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "Türkçe karşılığı 'Çapraz Kod Çalıştırma' olan, dinamik web uygulamalarında en çok POST ve GET metotlarının kullanıldığı arama alanları, galeri ve yorumlar gibi bölümlerde meydana gelen güvenlik açığı hangisidir?",
    options: {
      a: "Cross Site Scripting (XSS)",
      b: "SQL Injection",
      c: "Remote File Include (RFI)",
      d: "Brute Force",
      e: "DNS Spoofing"
    },
    answer: "a",
    explanation: "Cross Site Scripting (XSS), Çapraz Kod Çalıştırma anlamına gelir ve en çok POST/GET metotlarının kullanıldığı arama, galeri ve yorum alanlarında görülür."
  },
  {
    id: 60,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "Kısa adı XSRF veya CSRF olan, siteye entegre kod ('hostile linking') şeklinde çalışan ve ders notlarına göre en çok Opera tarayıcısında rastlandığı belirtilen web güvenliği açığı hangisidir?",
    options: {
      a: "Cross Site Reference Forgery (CSRF / XSRF)",
      b: "SQL Injection",
      c: "Buffer Overflow",
      d: "Remote File Include",
      e: "SSL Strip"
    },
    answer: "a",
    explanation: "Cross Site Reference Forgery (XSRF/CSRF), siteye entegre kod (hostile linking) şeklinde çalışır ve güncel bug listelerinde ilk sıralarda yer alır."
  },
  {
    id: 61,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "'Uzaktan dosya yükleme' anlamına gelen, saldırganların sunucuya izinsiz olarak 'Shell dosyaları' yükleyip sistemde 'safe mode off' yaparak sunucudaki tüm sitelere zarar verebildiği güvenlik açığı hangisidir?",
    options: {
      a: "Remote File Include (RFI)",
      b: "Cross Site Scripting (XSS)",
      c: "SQL Injection",
      d: "Social Media Authentication",
      e: "MAC Spoofing"
    },
    answer: "a",
    explanation: "Remote File Include (RFI), uzaktan dosya yükleme anlamına gelir; zararlı Shell dosyaları yüklenerek safe mode off yapılabilir ve sunucudaki tüm siteler etkilenebilir."
  },
  {
    id: 62,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "Web siteleri üzerinde hızlı bir şekilde dinamik sayfalar, yazılar ve içerikler oluşturmamızı sağlayan sistemlere ne ad verilir ve aşağıdakilerden hangisi açık kaynak kodlu (Open Source) popüler bir örneğidir?",
    options: {
      a: "CMS (Content Management System) - Wordpress, Joomla, Drupal, Magento, TYPO3",
      b: "Firewall - Norton, McAfee, NetBarrier",
      c: "Sniffer - Wireshark, DriftNet, EtterCap",
      d: "Topoloji - Bus, Star, Ring, Mesh",
      e: "Protokol - ARP, TCP, UDP, SSL"
    },
    answer: "a",
    explanation: "CMS (Content Management System - İçerik Yönetim Sistemi) dinamik içerik oluşturmayı sağlar; en önemlileri Wordpress, Joomla, Drupal, Magento ve TYPO3'tür."
  },
  {
    id: 63,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "Ders notlarına göre internet üzerindeki web sitelerinin yaklaşık yüzde kaçlık (% kaçlık) bir kısmında açık kaynak kodlu Wordpress yazılımı bulunmaktadır?",
    options: {
      a: "%32",
      b: "%4",
      c: "%10",
      d: "%75",
      e: "%96"
    },
    answer: "a",
    explanation: "Ders notlarına göre internetin %32'lik bir kısmında açık kaynak kodlu bir yazılım olan Wordpress web siteleri bulunmaktadır."
  },
  {
    id: 64,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "Wordpress web sitelerinin sürekli güncellenmesine rağmen hackerlar tarafından her zaman hedef olarak gösterilmesinin temel nedenleri nelerdir?",
    options: {
      a: "Açık kaynak kodlu olması, internetin büyük bir kısmında (%32) kullanılması ve kullanılan ekstra üçüncü parti eklentilerin barındırdığı açıklar",
      b: "HTTPS protokolünü hiçbir şekilde desteklememesi",
      c: "Sadece kuantum bilgisayarlarda çalışması",
      d: "Yalnızca statik HTML dosyalardan oluşması ve veritabanı kullanmaması",
      e: "Şifre kullanımına izin vermemesi"
    },
    answer: "a",
    explanation: "Wordpress'in açık kaynak kodlu olması, çok yaygın kullanılması ve kullanılan ekstra eklentiler yüzünden oluşan zafiyetler onu hackerlar için sürekli hedef haline getirir."
  },
  {
    id: 65,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "CMS (Wordpress vb.) web sitelerinde güvenliği sağlamak için alınması gereken önlemler arasında aşağıdakilerden hangisi yer almaz?",
    options: {
      a: "Hackerların sitenin güncel olduğunu görmesi için yazılım sürüm numarasını ana sayfada açıkça göstermek",
      b: "Sunucu, hosting, CMS yazılımı ve eklentileri güncel tutmak",
      c: "Veritabanı kullanıcı adı ve şifresini karmaşık yapmak",
      d: "FTP tarafında klasör izinlerini doğru vermek ve .HTACCESS dosyasını güvenli hale getirmek",
      e: "Yazılımın sürümlerini kapatmak/gizlemek (hackerlar hangi sürüm olduğunu görmemeli)"
    },
    answer: "a",
    explanation: "CMS güvenliği için yazılımın sürümleri kapatılmalıdır (gizlenmelidir); hackerlar hangi sürüm olduğunu görmemelidir."
  },
  {
    id: 66,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "Wordpress sitelerde sürüm bilgisini gizlemek için theme klasöründeki `function.php` dosyasına eklenen kod aşağıdakilerden hangisidir?",
    options: {
      a: "remove_action('wp_head', 'wp_generator');",
      b: "drop table wp_users;",
      c: "chmod 777 wp-config.php;",
      d: "safe_mode = off;",
      e: "allow_url_include = on;"
    },
    answer: "a",
    explanation: "Theme klasöründeki function.php dosyasına `remove_action('wp_head', 'wp_generator');` kodu yazılarak Wordpress sürümü gizlenebilir."
  },
  {
    id: 67,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "Wordpress güvenliği için önerilen ideal dosya ve klasör izinleri (CHMOD) aşağıdakilerin hangisinde doğru eşleştirilmiştir?",
    options: {
      a: "Klasörler (wp-includes, wp-admin, themes, plugins): 755 — Kritik Dosyalar (wp-config.php, .htaccess, wp-admin/index.php): 644",
      b: "Klasörler: 777 — Kritik Dosyalar: 777",
      c: "Klasörler: 644 — Kritik Dosyalar: 755",
      d: "Klasörler: 000 — Kritik Dosyalar: 999",
      e: "Klasörler: 444 — Kritik Dosyalar: 777"
    },
    answer: "a",
    explanation: "Wordpress'te wp-includes, wp-admin, themes, plugins klasör izinleri 755; wp-admin/index.php, wp-config.php ve .htaccess dosya izinleri ise 644 olmalıdır."
  },
  {
    id: 68,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "Aşağıdakilerden hangisi Wordpress yazılımları için kullanılan güvenlik eklentilerinden biri değildir?",
    options: {
      a: "TeraBIT Virus Maker",
      b: "Wordfence Security",
      c: "iThemes Security",
      d: "All In One WP Security & Firewall",
      e: "WPS Hide Login / BulletProof Security Pro"
    },
    answer: "a",
    explanation: "WPS Hide Login, Easy Hide Login, BulletProof Security Pro, Wordfence Security, iThemes Security, Acunetix WP Security ve All In One WP Security & Firewall Wordpress güvenlik eklentileridir. TeraBIT Virus Maker ise virüs oluşturma yazılımıdır."
  },
  {
    id: 69,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "Aşağıdakilerden hangisi Wordpress web sitelerinde güvenlik taraması yapmak için kullanılan çevrimiçi araçlardan (tool'lardan) biridir?",
    options: {
      a: "sitecheck.sucuri.net ve hackertarget.com/wordpress-security-scan",
      b: "DriftNet",
      c: "Spectre",
      d: "Stuxnet",
      e: "Nimda"
    },
    answer: "a",
    explanation: "sitecheck.sucuri.net, siteguarding.com/en/sitecheck, suip.biz ve hackertarget.com/wordpress-security-scan Wordpress güvenlik tarama araçlarıdır."
  },
  {
    id: 70,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "Sosyal medya hesaplarımız (Facebook, Twitter) veya popüler mail uygulamaları (Yahoo, Gmail) ile bir siteye, foruma veya uygulamaya otomatik bir şekilde üye olma / giriş yapma özelliğine ne ad verilir?",
    options: {
      a: "Social Media Authentication",
      b: "Remote File Include",
      c: "Cross Site Scripting",
      d: "ARP Poisoning",
      e: "Devre Seviyesi Filtreleme"
    },
    answer: "a",
    explanation: "Sosyal medya veya popüler mail hesapları ile bir siteye otomatik üye olma/giriş yapma işlemine 'Social Media Authentication' denir."
  },
  {
    id: 71,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "Güvenilir olmayan veya bilgileri kötüye kullanan bir sitede sosyal medya hesabımız ile otomatik giriş (Social Media Authentication) yaparsak aşağıdaki tehlikelerden hangisiyle karşılaşabiliriz?",
    options: {
      a: "Hesabımızda adımıza virüslü paylaşımlar yapılabilir, kişi listemize spam/fake mailler gönderilebilir ve sosyal medya hesabımız hacklenebilir.",
      b: "Bilgisayarımızın işlemcisi fiziksel olarak yanar.",
      c: "Modemimiz Li-Fi teknolojisine dönüşür.",
      d: "İnternet servis sağlayıcımız aboneliğimizi iptal eder.",
      e: "Sosyal medya hesabımız 2 faktörlü korumaya geçer."
    },
    answer: "a",
    explanation: "Güvenilmeyen sitelerde sosyal medya ile giriş yapıldığında; adımıza virüslü paylaşımlar yapılabilir, kişi listemize spam/fake mesajlar gönderilebilir ve hesabımız hacklenebilir."
  },
  {
    id: 72,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "Mobil uygulamalar ve güvenlik konusunda Apple (iOS) ve Android sistemlerle ilgili ders notlarında belirtilen ifadelerden hangisi doğrudur?",
    options: {
      a: "Apple güvenlik zafiyeti gördüğü 3. parti uygulamaları (örn. CIA uygulaması) marketten sıkça kaldırır; Android'de ise market dışından da uygulama yüklenebilmesi önemli bir güvenlik zafiyetidir.",
      b: "Android cihazlara uygulama marketi dışından hiçbir şekilde uygulama yüklenemez.",
      c: "Apple App Store'da hiçbir güvenlik kontrolü yapılmaz ve zararlı uygulamalar asla kaldırılmaz.",
      d: "Mobil uygulamaların internet kullanması güvenlik risklerini tamamen ortadan kaldırmıştır.",
      e: "Mobil cihazlarda hiçbir zaman kötü amaçlı yazılım çalışmaz."
    },
    answer: "a",
    explanation: "Apple 3. parti uygulamalarda zafiyet gördüğünde marketten kaldırmaktadır (Örn: CIA Uygulaması). Android sistemlere market dışından da uygulama yüklenebilmesi en önemli güvenlik zafiyetlerinden biridir."
  },
  {
    id: 73,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "Aşağıdakilerden hangisi Web Uygulamalarındaki 'Injection' (Enjeksiyon) açıkları arasında yer almaz?",
    options: {
      a: "Bluetooth Injection",
      b: "SQL Injection ve XML Injection",
      c: "Command Injection ve Code Injection",
      d: "HTML Injection ve Meta Tag Injection",
      e: "HTTP Header Injection / HTTP Response Splitting ve Template/CSV Injection"
    },
    answer: "a",
    explanation: "SQL, XML, CSV, Template, Text, Hyperlink, HTTP Header, Command, Code, HTML ve Meta Tag Injection web uygulamalarındaki Injection türleridir."
  },
  {
    id: 74,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "Bir saldırganın giriş formuna `' union select username, password from users--` gibi ifadeler yazarak veritabanındaki tüm kullanıcı adı ve parolaları çekmeye çalışması hangi saldırı türüdür?",
    options: {
      a: "SQL Injection",
      b: "DDoS",
      c: "DriftNet",
      d: "Li-Fi",
      e: "MAC Filtreleme"
    },
    answer: "a",
    explanation: "`union select username, password from users--` sorgusuyla veritabanından yetkisiz veri çekilmesi klasik bir SQL Injection saldırısıdır."
  },
  {
    id: 75,
    week: "5. Hafta · Web ve Mobil Güvenlik",
    question: "Cross Site Reference Forgery (CSRF / XSRF) saldırılarında saldırganın zararlı isteği bir bağlantıya/siteye entegre etmesine verilen diğer isim nedir?",
    options: {
      a: "Hostile Linking",
      b: "Safe Mode Off",
      c: "Broadcast Yayını",
      d: "Point-to-Point",
      e: "MD5 Check"
    },
    answer: "a",
    explanation: "XSRF/CSRF saldırılarında siteye entegre etme isminin diğer bir adı 'hostile linking' olarak bilinmektedir."
  },

  // ==========================================
  // 6. HAFTA: DEEP WEB KATMANLARI VE KALI LINUX (25 SORU)
  // ==========================================
  {
    id: 76,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "İnternetin buzdağı modeline göre Google, Facebook, Twitter gibi arama motorları tarafından görülebilen ve dizine kayıt edilebilen (indexlenen) 'Normal İnternet' (Surface/Visible Web) ile 'Derin İnternet' (Deep Web) oranları yaklaşık olarak nasıldır?",
    options: {
      a: "%4 Normal İnternet (Surface Web) — %96 Derin İnternet (Deep Web & Dark Web)",
      b: "%96 Normal İnternet — %4 Derin İnternet",
      c: "%50 Normal İnternet — %50 Derin İnternet",
      d: "%80 Normal İnternet — %20 Derin İnternet",
      e: "%100 Normal İnternet — %0 Derin İnternet"
    },
    answer: "a",
    explanation: "Görsellerde belirtildiği üzere internet içeriğinin yalnızca %4'ü Surface/Visible Web (Normal İnternet), %96'sı ise Deep Web (%90 Deep Web + %6 Dark Web) kısmındadır."
  },
  {
    id: 77,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "Deep Web (Derin İnternet) ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
    options: {
      a: "Arama motorları tarafından görüntülenemeyen, dizine kayıt edilmeyen ve rastgele alan adlarından oluşmuş bir sistemdir.",
      b: "Google ve Bing gibi standart arama motorlarında ilk sayfada çıkan `.com` ve `.net` uzantılı sitelerdir.",
      c: "Sadece e-devlet ve üniversite ana sayfalarından oluşur.",
      d: "Hiçbir katmanı bulunmayan tek düzlemli bir ağdır.",
      e: "Yalnızca mobil telefonlardan girilebilen sosyal medya siteleridir."
    },
    answer: "a",
    explanation: "Derin internet (Deep Web), arama motorları tarafından görüntülenemeyen ve rastgele alan adlarından oluşmuş bir sistemdir."
  },
  {
    id: 78,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "Ders notlarına göre eskiden 5 katmanlı olarak bilinen Deep Web'in günümüzde teknoloji ilerledikçe kaç katmandan oluştuğu öne sürülmektedir?",
    options: {
      a: "8 katman",
      b: "2 katman",
      c: "3 katman",
      d: "12 katman",
      e: "20 katman"
    },
    answer: "a",
    explanation: "Deep Web eskiden 5 katmanlı olarak bilinmekteydi; günümüzde 8 katmandan oluştuğu öne sürülmektedir."
  },
  {
    id: 79,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "Normal kullanıcıların arama motorları sayesinde ulaşabileceği; güvenlik kameraları, veritabanı dosyaları, DNS sorgulama, Whois bilgisi çekme ve mail hizmetleri gibi bilgilerin bulunduğu 'Katman 1' nasıl adlandırılır?",
    options: {
      a: "Surface Web",
      b: "Bergie Web",
      c: "Character Web",
      d: "Marianas Web",
      e: "The Primarch System"
    },
    answer: "a",
    explanation: "Katman 1 'Surface Web' olarak adlandırılır ve normal kullanıcıların arama motorları sayesinde ulaşabileceği katmandır."
  },
  {
    id: 80,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "Genellikle arama motorları tarafından indexlenmeyen, zararlı olarak algılanan veya arama motorlarının en son sayfalara attığı sitelerin yer aldığı ve 'normal tarayıcılardan ulaşılabilen son katman' olan Katman 2'nin adı nedir?",
    options: {
      a: "Bergie Web",
      b: "Surface Web",
      c: "Marianas Web",
      d: "The Fog / Virus Soup",
      e: "Closed Shell System (CSS)"
    },
    answer: "a",
    explanation: "Katman 2 'Bergie Web' olarak adlandırılır ve normal olarak standart tarayıcılardan ulaşılabilen son katmandır."
  },
  {
    id: 81,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "Derin internetin başladığı kısım olan 'Katman 3 (Deep Web)' kendi arasında hangi iki bölüme ayrılır?",
    options: {
      a: "Proxy Web (.onion uzantılı olmayan, Tor yüklemeden ulaşılabilen) ve Tor Browser kısmı (.onion uzantılı sitelerin yer aldığı kısım)",
      b: "Surface Web ve Visible Web",
      c: "Kuantum Web ve Primarch Web",
      d: "LAN ve WAN",
      e: "HTTP ve HTTPS"
    },
    answer: "a",
    explanation: "Katman 3 ikiye ayrılır: İlki Tor Browser yüklemeden ulaşılabilen (.onion uzantılı olmayan illegal siteler) Proxy Web, ikincisi ise .onion uzantılı sitelerin yer aldığı Tor Browser kısmıdır."
  },
  {
    id: 82,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "Katman 3'ün Tor Browser ile girilen kısmında bulunan sitelerin alan adı uzantısı nedir?",
    options: {
      a: ".onion",
      b: ".com",
      c: ".gov",
      d: ".edu",
      e: ".mil"
    },
    answer: "a",
    explanation: "Tor Browser ile ulaşılan Katman 3 (ve Katman 4'ün ilk kısmı) siteleri `.onion` uzantısına sahiptir."
  },
  {
    id: 83,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "'Character Web' olarak da adlandırılan ve ilk kısmına Tor Browser ile, ikinci kısmına ise özel cihaz ve özel router'lar aracılığıyla ulaşılabilen katman hangisidir?",
    options: {
      a: "Katman 4",
      b: "Katman 1",
      c: "Katman 2",
      d: "Katman 6",
      e: "Katman 8"
    },
    answer: "a",
    explanation: "Katman 4 'Character Web' olarak adlandırılır; ilk kısmına Tor Browser ile, ikinci kısmına (CSS) ise özel routerlar aracılığıyla ulaşılır."
  },
  {
    id: 84,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "Katman 4'ün ikinci kısmını oluşturan, ulaşmak için özel cihaz ve router'lara sahip olunması gereken 'Kapalı Kabuk/Kabul Sistemi'nin kısaltması ve adı nedir?",
    options: {
      a: "CSS (Closed Shell System)",
      b: "CMS (Content Management System)",
      c: "ARP (Address Resolution Protocol)",
      d: "DNS (Domain Name System)",
      e: "PLC (Programmable Logic Controller)"
    },
    answer: "a",
    explanation: "Katman 4'ün özel cihaz ve router gerektiren en tehlikeli kısmı CSS (Closed Shell System - Kapalı Kabul/Kabuk Sistemi) olarak adlandırılır."
  },
  {
    id: 85,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "Ders notlarına göre yapay zeka işlemcileri, Tesla'nın planları, gizli algoritmalar, HAARP projeleri ve süper bilgisayarlar gibi bilgilerin yer aldığı ve bilim insanlarının kendi tasarladıkları sistemlerle girdiği belirtilen katman hangisidir?",
    options: {
      a: "Katman 4 (Character Web / CSS)",
      b: "Katman 1 (Surface Web)",
      c: "Katman 2 (Bergie Web)",
      d: "Katman 7 (The Fog)",
      e: "Katman 8 (The Primarch System)"
    },
    answer: "a",
    explanation: "Bu içerikler ve bilim adamlarının kendi tasarladıkları sunucularla giriş yapması Katman 4 (Character Web / CSS) altında anlatılmaktadır."
  },
  {
    id: 86,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "Adını dünyanın en derin çukuru olan Mariana Çukuru'ndan alan, normal internet bağlantısı ve normal bilgisayarlarla ulaşılamayıp 'kuantum teknolojisi ile yapılmış süper bilgisayarlara' ihtiyaç duyulan Katman 5'in adı nedir?",
    options: {
      a: "Marianas Web",
      b: "Bergie Web",
      c: "Surface Web",
      d: "Proxy Web",
      e: "The Fog"
    },
    answer: "a",
    explanation: "Katman 5 'Marianas Web' olarak adlandırılır ve ulaşmak için kuantum teknolojisi ile yapılmış süper bilgisayarlara ihtiyaç olduğu belirtilir."
  },
  {
    id: 87,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "Ders notlarına göre sınırları belirli olmasına rağmen başı ve sonu belirli olmayan, hakkında herhangi bir bilgi edinilememiş ve 'en gelişmiş teknoloji olan kuantum teknolojisi ile bile erişim sağlanamamış' katman hangisidir?",
    options: {
      a: "Katman 6",
      b: "Katman 2",
      c: "Katman 3",
      d: "Katman 4",
      e: "Katman 5"
    },
    answer: "a",
    explanation: "Katman 6 hakkında bilgi edinilememiştir, sınırları belirlidir fakat başı ve sonu belirli değildir ve kuantum teknolojisi ile bile erişim sağlanamamıştır."
  },
  {
    id: 88,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "'The Fog' ya da 'Virus Soup' olarak adlandırılan ve insanların bu seviyeye ulaştıkları zaman bir üst seviyeye (8. katmana) ulaşılmaması için birbirleri ile savaşmaya başlayacakları söylenen katman hangisidir?",
    options: {
      a: "Katman 7",
      b: "Katman 1",
      c: "Katman 3",
      d: "Katman 5",
      e: "Katman 8"
    },
    answer: "a",
    explanation: "Katman 7, 'The Fog' ya da 'Virus Soup' olarak adlandırılır."
  },
  {
    id: 89,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "'The Primarch System' olarak adlandırılan, 2000'li yılların başında keşfedilen, internete tepkisiz olarak rastgele komutlar gönderen, 'Level 17 Quantum TR.001 Level Function Lock' kullandığı belirtilen ve 'İnternetin Patronu' olarak adlandırılan son katman hangisidir?",
    options: {
      a: "Katman 8",
      b: "Katman 2",
      c: "Katman 4",
      d: "Katman 5",
      e: "Katman 7"
    },
    answer: "a",
    explanation: "Katman 8 'The Primarch System' olarak adlandırılır, bilinen en son internet katmanıdır ve 'İnternetin Patronu' olarak da anılır."
  },
  {
    id: 90,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "Kali Linux işletim sistemi ile ilgili aşağıdakilerden hangisi yanlıştır?",
    options: {
      a: "Microsoft tarafından Windows çekirdeği üzerine 1995 yılında inşa edilmiş kapalı kaynaklı bir ofis sistemidir.",
      b: "Linux tabanlı, CD'den başlatma seçenekli bir güvenlik kontrol işletim sistemidir.",
      c: "BackTrack yapımcıları tarafından 2013 yılında oluşturulmuştur.",
      d: "Offensive Security Ltd. aracılığıyla Mati Aharoni, Devon Kearns ve Raphaël Hertzog tarafından geliştirilmekte ve finanse edilmektedir.",
      e: "İçerisinde çeşitli sızma testi (pentest / penetrasyon testi) araçları ile birlikte geldiği için siber güvenlik uzmanları tarafından tercih edilir."
    },
    answer: "a",
    explanation: "Kali Linux; Linux tabanlı, BackTrack yapımcıları (Mati Aharoni, Devon Kearns, Raphaël Hertzog) tarafından Offensive Security Ltd. aracılığıyla 2013'te oluşturulmuş bir güvenlik/pentest işletim sistemidir."
  },
  {
    id: 91,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "Kali Linux'un 2013 yılında oluşturulmadan önceki öncülü (ataları olan eski sürümü) hangi güvenlik işletim sistemidir?",
    options: {
      a: "BackTrack",
      b: "MS-DOS",
      c: "iOS",
      d: "Symbian",
      e: "Solaris"
    },
    answer: "a",
    explanation: "Kali Linux, BackTrack yapımcıları tarafından 2013 yılında oluşturulmuştur."
  },
  {
    id: 92,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "Siber güvenlik uzmanlarının sistemlerdeki güvenlik açıklarını tespit etmek amacıyla Kali Linux kullanarak gerçekleştirdikleri sızma testlerine ne ad verilir?",
    options: {
      a: "Pentest (Penetrasyon Testi)",
      b: "Bürokrasi Testi",
      c: "SEO Testi",
      d: "Check-In Testi",
      e: "Beta Sürüm Kabulü"
    },
    answer: "a",
    explanation: "Sızma testlerine 'pentest' veya 'penetrasyon testi' adı verilir."
  },
  {
    id: 93,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "Ders notlarına göre Deep Web'in hangi katmanları arası normal bilgisayar ve özel ağ/router bağlantılarıyla ulaşılabilen bölümü (yaklaşık 2/3'lük kısmı) oluşturur ve bundan sonraki katmanlara normal bilgisayar/ağ ile ulaşmak mümkün değildir?",
    options: {
      a: "Katman 1 – 4 arası",
      b: "Katman 5 – 8 arası",
      c: "Yalnızca Katman 1",
      d: "Katman 6 – 8 arası",
      e: "Yalnızca Katman 8"
    },
    answer: "a",
    explanation: "Slaytlarda Katman 1 - 4 arasının ilk ana bölümü kapsadığı, diğer katmanlara (5 ve üzeri) ulaşmanın normal bilgisayar ve ağ bağlantısı ile mümkün olmadığı belirtilmiştir."
  },
  {
    id: 94,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "Katman 3 ve Katman 4'ün ilk kısmındaki `.onion` uzantılı sitelere erişmek için kullanılan özel tarayıcı hangisidir?",
    options: {
      a: "Tor Browser",
      b: "Internet Explorer 6",
      c: "Adobe Flash Player",
      d: "Wireshark",
      e: "DriftNet"
    },
    answer: "a",
    explanation: "`.onion` uzantılı sitelere erişmek için Tor Browser kullanılır."
  },
  {
    id: 95,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "Kali Linux'u geliştiren ve finanse eden kuruluş aşağıdakilerden hangisidir?",
    options: {
      a: "Offensive Security Ltd.",
      b: "McAfee Labs",
      c: "Adobe Systems",
      d: "e-Bay Inc.",
      e: "Trendyol"
    },
    answer: "a",
    explanation: "Kali Linux, Offensive Security Ltd. aracılığıyla geliştirilmekte ve finanse edilmektedir."
  },
  {
    id: 96,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "Aşağıdakilerden hangisi Katman 1 (Surface Web) içerisinde yapılabilecek işlemlerden veya ulaşılabilecek bilgilerden biridir?",
    options: {
      a: "DNS sorgulama, Whois bilgisi çekme, mail hizmetleri ve açık güvenlik kameraları",
      b: "Level 17 Quantum TR.001 Level Function Lock kontrolü",
      c: "Kuantum bilgisayarlarla Marianas Web'e bağlanma",
      d: "The Fog (Virus Soup) katmanına erişim",
      e: ".onion uzantılı kiralık katil ve silah kaçakçılığı ağları"
    },
    answer: "a",
    explanation: "Katman 1 (Surface Web) üzerinde güvenlik kameraları, veritabanı dosyaları, DNS sorgulama, Whois bilgisi çekme ve mail hizmetleri gibi bilgiler yer alır."
  },
  {
    id: 97,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "Katman 3'ün Tor Browser yüklemeden, normal tarayıcılar ve vekil sunucular üzerinden ulaşılabilen, `.onion` uzantılı sitelerin olmadığı fakat illegal faaliyet sürdüren sitelerin yer aldığı alt bölümüne ne ad verilir?",
    options: {
      a: "Proxy Web",
      b: "Marianas Web",
      c: "Primarch Web",
      d: "Surface Web",
      e: "Closed Shell System"
    },
    answer: "a",
    explanation: "Katman 3'ün Tor Browser yüklemeden ulaşılabilen birinci kısmına 'Proxy Web' denir."
  },
  {
    id: 98,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "Ders notlarındaki Katman 5 (Marianas Web) slaytında kuantum bilgisayarlara örnek olarak görselde yer alan ve '100 Million Times Faster' olarak belirtilen sistem hangisidir?",
    options: {
      a: "Google D-Wave 2X Quantum Computer",
      b: "Intel Pentium 4",
      c: "ARM Cortex-M0",
      d: "Cisco 2600 Router",
      e: "Apple Macintosh 128K"
    },
    answer: "a",
    explanation: "Katman 5 slaytında kuantum teknolojisine örnek olarak 'Google D-Wave 2X Quantum Computer' yer almaktadır."
  },
  {
    id: 99,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "Herhangi bir hükümet veya örgüt tarafından bilinmeyen ve kontrol edilemeyen, Primarch sistemi tarafından kontrol edildiği söylenen Deep Web katmanı kaçıncı katmandır?",
    options: {
      a: "Katman 8",
      b: "Katman 1",
      c: "Katman 2",
      d: "Katman 3",
      e: "Katman 4"
    },
    answer: "a",
    explanation: "The Primarch System olarak adlandırılan ve hiçbir hükümet/örgüt tarafından bilinmeyen katman Katman 8'dir."
  },
  {
    id: 100,
    week: "6. Hafta · Deep Web ve Kali Linux",
    question: "Kali Linux'un siber güvenlik uzmanları ve hackerlar tarafından diğer Linux sürümlerine göre daha çok seçilmesinin en temel sebebi nedir?",
    options: {
      a: "İşletim sisteminin içerisinde hazır olarak çeşitli pentest (sızma testi) araçları ile birlikte gelmesi",
      b: "Sadece oyun oynamak için tasarlanmış olması",
      c: "İnternete bağlanmadan tüm web sitelerini indirebilmesi",
      d: "Hiçbir komut satırı (terminal) içermemesi",
      e: "Yalnızca mobil telefonlarda çalışması"
    },
    answer: "a",
    explanation: "Kali Linux'un seçilmesinin temel nedeni, işletim sisteminin çeşitli pentest (sızma testi) araçları ile hazır olarak gelmesidir."
  },

  // ==========================================
  // 7. HAFTA: AĞ GÜVENLİĞİ, FIREWALL VE AĞ SALDIRILARI (25 SORU)
  // ==========================================
  {
    id: 101,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "İki veya ikiden fazla bilgisayarın birbirleriyle iletişim halinde olmasına ne ad verilir ve eskiden sadece hangi alanda kullanılmaktaydı?",
    options: {
      a: "Network (Ağ) — Eskiden sadece askeri alanda kullanılmaktaydı.",
      b: "Firewall — Eskiden sadece eğlence alanında kullanılmaktaydı.",
      c: "CMS — Eskiden sadece bankacılıkta kullanılmaktaydı.",
      d: "Bluetooth — Eskiden sadece kıtalar arası iletişimde kullanılmaktaydı.",
      e: "Li-Fi — Eskiden sadece posta teşkilatında kullanılmaktaydı."
    },
    answer: "a",
    explanation: "Network, iki veya ikiden fazla bilgisayarın iletişim halinde olmasıdır; eskiden sadece askeri alanda kullanılmaktaydı, günümüzde ise askeri, devlet, ekonomi ve eğlence alanlarında kullanılmaktadır."
  },
  {
    id: 102,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "Ders notlarına göre şu an için toplam 11 adet ağ çeşidi bulunmakla birlikte, ağlar genel olarak hangi 3 ana gruba ayrılmaktadır?",
    options: {
      a: "Yerel Alan Ağları (LAN), Geniş Alan Ağları (WAN), Özel Sanal Ağlar (VPN)",
      b: "Seri Ağlar, Paralel Ağlar, Çapraz Ağlar",
      c: "HTTP Ağları, HTTPS Ağları, FTP Ağları",
      d: "Statik Ağlar, Dinamik Ağlar, Melez Ağlar",
      e: "Siyah Ağlar, Gri Ağlar, Beyaz Ağlar"
    },
    answer: "a",
    explanation: "Ağlar genel olarak 3'e ayrılır: Yerel alan ağları (LAN - yüksek hızda veri transferi), Geniş alan ağları (WAN - fiber optik veya uydu) ve Özel sanal ağlar (VPN)."
  },
  {
    id: 103,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "Bir ağı oluşturan cihazların fiziksel ve mantıksal yerleşimine 'Ağ Topolojisi' denir. Ders notlarına göre 'Şirketler (Data Center)' için kullanılan topoloji ile 'WAN (Maliyetli)' olarak belirtilen topoloji hangileridir?",
    options: {
      a: "Şirketler (Data Center): Ağaç Topolojisi (Tree) — WAN (Maliyetli): Örgü Topolojisi (Mesh)",
      b: "Şirketler: Halka (Ring) — WAN: Yol (Bus)",
      c: "Şirketler: Yol (Bus) — WAN: Yıldız (Star)",
      d: "Şirketler: Seri — WAN: Paralel",
      e: "Şirketler: PAN — WAN: LAN"
    },
    answer: "a",
    explanation: "Slaytta Ağaç Topolojisi (Tree) -> Şirketler (Data Center), Örgü Topolojisi (Mesh) -> WAN -> Maliyetli olarak belirtilmiştir."
  },
  {
    id: 104,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "Li-Fi ve Wi-Fi teknolojilerinin karşılaştırması ile ilgili aşağıdakilerden hangisi yanlıştır?",
    options: {
      a: "Li-Fi veri taşıyıcısı olarak radyo dalgalarını (2.4 GHz) kullanırken, Wi-Fi görünür ışığı (Yüzlerce Tera Hz) kullanır.",
      b: "Li-Fi hızı > 1 GB/s iken, Wi-Fi hızı yaklaşık 150 mb/s civarındadır.",
      c: "Li-Fi veri aktarım ortamı olarak ışığı (light) kullanır ve görünür ışık spektrumu radyo dalgalarından 10.000 kat daha fazladır.",
      d: "Li-Fi maliyet açısından Wi-Fi'ye göre daha ucuzdur (Cheaper) ve her ikisi de Point-to-Point topoloji kullanır.",
      e: "Işık duvarlardan geçemediği için Li-Fi, Wi-Fi'ye göre dışarıdan dinlenmeye karşı daha güvenlidir."
    },
    answer: "a",
    explanation: "Tam tersine; Li-Fi veri taşıyıcısı olarak ışığı (Yüzlerce Tera Hz) kullanır, Wi-Fi ise radyo spektrumunu (2.4 GHz) kullanır."
  },
  {
    id: 105,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "Kablolu ve kablosuz ağlarda güvenlik önlemleri kapsamında kafe, restoran, otel veya alışveriş merkezi gibi işletmelerin kesinlikle kullanması gereken teknoloji hangisidir?",
    options: {
      a: "Hotspot teknolojisi",
      b: "ARP Poisoning",
      c: "WEP şifreleme",
      d: "Evrensel (varsayılan) modem şifresi",
      e: "Tüm modem portlarını açık bırakma"
    },
    answer: "a",
    explanation: "Kafe, restoran, otel veya alışveriş merkezi gibi yerlerin kesinlikle hotspot teknolojisi kullanması gerekmektedir."
  },
  {
    id: 106,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "Halka açık kablosuz ağlarda ağ yöneticilerinin bilgisayara erişimi ve buna karşı alınacak önlemlerle ilgili aşağıdakilerden hangisi doğrudur?",
    options: {
      a: "Ağ yoluyla bağlandıklarında root erişimi yapamazlar ve sistem dosyalarının yer aldığı yere sızamazlar; ancak bilgileri ele geçirebilecekleri için halka açık ağlar yerine cep telefonu interneti veya LTE modemler tercih edilmelidir.",
      b: "Halka açık ağa bağlanıldığı anda ağ yöneticisi doğrudan root erişimi elde eder ve BIOS'u siler.",
      c: "Halka açık ağlarda kredi kartı ile alışveriş yapmak tamamen güvenlidir.",
      d: "Ortak ağlardaki bu tehlikeyi %100 engelleyen özel bir modem kablosu vardır.",
      e: "Halka açık ağlarda hiçbir ağ yöneticisi bulunmaz."
    },
    answer: "a",
    explanation: "Halka açık ağlarda ağ yöneticileri bilgisayara sızabilir ancak root erişimi yapamazlar ve sistem dosyalarına sızamazlar. Yine de tehlikeli olduğundan cep telefonu veya LTE modemler tercih edilmelidir."
  },
  {
    id: 107,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "Kablosuz ağ (Wireless) güvenliği ile ilgili aşağıdakilerden hangisi doğrudur?",
    options: {
      a: "WEP çok daha rahat kırılabilen bir şifreleme türüdür; daha yüksek güvenlik için WPA/WPA2, TKIP (Geçici Anahtar Bütünlüğü Protokolü), AES ve MAC adres filtrelemesi kullanılmalıdır.",
      b: "WEP şifreleme türü AES ve WPA2'den çok daha güvenlidir ve aslaırılamaz.",
      c: "MAC adres filtrelemesi ağdaki tüm şifrelemeyi devre dışı bırakır.",
      d: "Kablosuz ağ sinyalleri dinlenerek şifrelerin kırılması teknik olarak imkansızdır.",
      e: "TKIP ve AES birer ağ virüsü çeşididir."
    },
    answer: "a",
    explanation: "WEP rahat kırılabilen eski bir şifreleme türüdür. Yüksek düzey şifreleme için WPA/WPA2, TKIP ve AES kullanılmalı; ayrıca modem üzerinden MAC adres filtrelemesi yapılmalıdır."
  },
  {
    id: 108,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "Ağ trafiğini denetleyerek zararlı olmayan paketlerin geçmesine izin veren, zararlı paketleri bloklayan 'Güvenlik Duvarları (Firewall)' yapılarına göre hangi 2 gruba ayrılır?",
    options: {
      a: "Donanımsal Güvenlik Duvarları (Modem, Router vb.) ve Yazılımsal Güvenlik Duvarları (Norton, McAfee, NetBarrier vb.)",
      b: "Seri Güvenlik Duvarları ve Paralel Güvenlik Duvarları",
      c: "Kablolu Güvenlik Duvarları ve Li-Fi Güvenlik Duvarları",
      d: "Açık Kaynak Duvarlar ve Kapalı Kabuk Duvarlar",
      e: "Yerel Duvarlar ve Kıtalararası Duvarlar"
    },
    answer: "a",
    explanation: "Yapılarına göre güvenlik duvarları Yazılımsal (Norton, McAfee vb.) ve Donanımsal (Modem, Router vb.) olarak 2'ye ayrılır."
  },
  {
    id: 109,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "Güvenlik duvarları (Firewall) mimarilerine göre kaç gruba ayrılır ve aşağıdakilerden hangisi bu mimarilerden biri değildir?",
    options: {
      a: "5'e ayrılır — ARP Zehirleme Filtreleme bu mimarilerden biri değildir.",
      b: "5'e ayrılır — Proxy Destekli Güvenlik Duvarı",
      c: "5'e ayrılır — Devre Seviyesi Güvenlik Duvarı",
      d: "5'e ayrılır — Statik Paket Filtreleme ve Dinamik Paket Filtreleme",
      e: "5'e ayrılır — Melez (Hibrit) Filtreleme"
    },
    answer: "a",
    explanation: "Mimarilerine göre Güvenlik Duvarları 5'e ayrılır: 1. Proxy Destekli, 2. Devre Seviyesi, 3. Statik Paket Filtreleme, 4. Dinamik Paket Filtreleme, 5. Melez (Hibrit) Filtreleme."
  },
  {
    id: 110,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "İşlem başlangıç (kullanıcı) ve hedef (internet) arasında yer alan; sistemi açmak isteyen kullanıcının önce güvenlik duvarına iletildiği ve güvenlik duvarının iletiyi algıladığında isteği gerçekleştirdiği güvenlik duvarı mimarisi hangisidir?",
    options: {
      a: "Proxy Destekli Güvenlik Duvarları",
      b: "Statik Paket Filtreleme",
      c: "Yol Topolojisi",
      d: "SSL Strip",
      e: "DriftNet"
    },
    answer: "a",
    explanation: "Proxy Destekli Güvenlik Duvarları başlangıç (Users) ve hedef (Internet) arasında Proxy Server olarak görev yapar."
  },
  {
    id: 111,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "'Seçici' olarak da adlandırılabilen ve asıl amacı 'bir paketin talep doğrultusunda geçip geçmemesi' olan güvenlik duvarı mimarisi hangisidir?",
    options: {
      a: "Devre Seviyesi Güvenlik Duvarı",
      b: "Statik Paket Filtreleme Güvenlik Duvarı",
      c: "Dinamik Paket Filtreleme Güvenlik Duvarı",
      d: "Donanımsal Modem",
      e: "MAC Filtreleme"
    },
    answer: "a",
    explanation: "Devre Seviyesi Güvenlik Duvarı seçici olarak adlandırılır ve bir paketin talep doğrultusunda geçip geçmemesini denetler."
  },
  {
    id: 112,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "TCP/UDP kontrollerinden oluşan, gelen trafiği kontrol ederek aşırı yoğunluk yoksa paketi kabul eden, aşırı yoğunluk varsa paket geçişine izin vermeyen ve port ile IP bilgilerini saklayan güvenlik duvarı mimarisi hangisidir?",
    options: {
      a: "Statik Paket Filtreleme Güvenlik Duvarı",
      b: "Dinamik Paket Filtreleme Güvenlik Duvarı",
      c: "Devre Seviyesi Güvenlik Duvarı",
      d: "Proxy Destekli Güvenlik Duvarı",
      e: "Hotspot Güvenlik Duvarı"
    },
    answer: "a",
    explanation: "Statik Paket Filtreleme Güvenlik Duvarı TCP/UDP kontrollerinden oluşur, aşırı yoğunlukta geçişe izin vermez, port ve IP bilgilerini saklar."
  },
  {
    id: 113,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "Ek özellik olarak 'takip etme' özelliği bulunan, daha çok büyük şirketlerde şirket bilgisayarlarının verilerini takip etmek için kullanılan ve TCP protokolüne göre çalışan güvenlik duvarı mimarisi hangisidir?",
    options: {
      a: "Dinamik Paket Filtreleme Güvenlik Duvarı",
      b: "Statik Paket Filtreleme Güvenlik Duvarı",
      c: "Devre Seviyesi Güvenlik Duvarı",
      d: "WEP Filtreleme",
      e: "Yol (Bus) Filtreleme"
    },
    answer: "a",
    explanation: "Dinamik Paket Filtreleme Güvenlik Duvarı ek olarak takip etme özelliğine sahiptir, büyük şirketlerde kullanılır ve TCP protokolüne göre çalışır."
  },
  {
    id: 114,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "Farklı güvenlik duvarı mimarilerinin iki ya da daha fazlasını aynı anda barındıran güvenlik duvarı sistemlerine ne ad verilir?",
    options: {
      a: "Melez (Hibrit) Firewall'lar",
      b: "Tekil Firewall'lar",
      c: "Statik Firewall'lar",
      d: "Salt Okunur Firewall'lar",
      e: "Basit Modemler"
    },
    answer: "a",
    explanation: "Mimarilerin iki ya da daha fazlasını aynı anda barındıran sistemlere Melez (Hibrit) Firewall'lar denir."
  },
  {
    id: 115,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "İki sistem arasındaki veri trafiğine yönelik gerçekleştirilen 4 temel 'Ağ Saldırı Türü' aşağıdakilerin hangisinde doğru tanımlanmıştır?",
    options: {
      a: "Engelleme (trafiğin kesilmesi), Dinleme (trafiğin okunması), Değiştirme (trafiğin değiştirilmesi), Oluşturma (dış kaynaktan yeni trafik üretilmesi)",
      b: "Yedekleme, Şifreleme, Güncelleme, Formatlama",
      c: "Entegre, Kaliteli, Ölçeklenebilir, Güvenli",
      d: "LAN, MAN, WAN, PAN",
      e: "Bus, Star, Ring, Tree"
    },
    answer: "a",
    explanation: "Ağ saldırı türleri 4 tanedir: Engelleme (kesme), Dinleme (okuma), Değiştirme ve Oluşturma (yeni trafik üretme)."
  },
  {
    id: 116,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "Yerel ağda Ethernet kartlarının kullandığı MAC adresleri ile TCP/IP protokolünün kullandığı IP adreslerinin bit uzunlukları ve IP'si bilinen cihazın MAC adresini bulmak için kullanılan protokol hangisidir?",
    options: {
      a: "MAC adresi: 48 bit, IP adresi: 32 bit — Protokol: ARP (Address Resolution Protocol)",
      b: "MAC adresi: 32 bit, IP adresi: 48 bit — Protokol: HTTP",
      c: "MAC adresi: 16 bit, IP adresi: 128 bit — Protokol: FTP",
      d: "MAC adresi: 64 bit, IP adresi: 8 bit — Protokol: SMTP",
      e: "MAC adresi: 8 bit, IP adresi: 16 bit — Protokol: SSH"
    },
    answer: "a",
    explanation: "Ethernet ağ kartları 48 bitlik MAC adreslerini, TCP/IP ise 32 bitlik IP adresini kullanır. IP adresi bilinen ancak MAC adresi bilinmeyen cihazların tespiti için ARP (Adres Çözümleme Protokolü) kullanılır."
  },
  {
    id: 117,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "ARP (Adres Çözümleme Protokolü) işleyişinde MAC adresi bilinmeyen bir cihazın MAC adresini öğrenmek için ağdaki tüm makinelere gönderilen 'broadcast' mesajında hangi 3 bilgi bulunur?",
    options: {
      a: "Mesajı gönderen cihazın IP adresi, Mesajı gönderen cihazın MAC adresi, MAC adresi öğrenilmek istenen cihazın IP adresi",
      b: "Kullanıcının e-posta şifresi, Kredi kartı numarası, Anne kızlık soyadı",
      c: "Hedef cihazın MAC adresi, Hedefin işletim sistemi sürümü, Hedefin ekran çözünürlüğü",
      d: "Modemin WPA2 şifresi, DNS sunucu adı, Web tarayıcı geçmişi",
      e: "Sadece hedef cihazın MAC adresi"
    },
    answer: "a",
    explanation: "ARP broadcast mesajında 3 bilgi bulunur: 1. Gönderenin IP adresi, 2. Gönderenin MAC adresi, 3. MAC adresi öğrenilmek istenen cihazın IP adresi."
  },
  {
    id: 118,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "Aynı ağ üzerindeki bir hacker'ın ağdaki bilgisayarlara sahte paketler göndererek 'gateway'in (ağ geçidinin) artık kendisi olduğunu' belirtmesi ve cihazların trafiğini kendi üzerinden geçirerek dinlemesi saldırısına ne ad verilir?",
    options: {
      a: "ARP Spoofing / ARP Poisoning (ARP Zehirlemesi) ve MITM (Man in the Middle)",
      b: "SQL Injection",
      c: "Cross Site Scripting (XSS)",
      d: "Buffer Overflow",
      e: "Remote File Include"
    },
    answer: "a",
    explanation: "Saldırganın sahte ARP paketleriyle kendisini gateway olarak tanıtıp kurban ile ağ araçları arasına girerek trafiği dinlemesine ARP Poisoning / Spoofing ve MITM (Ortadaki Adam Saldırısı) denir."
  },
  {
    id: 119,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "Ortak ağlarda MITM (Man-in-the-middle / Ortadaki Adam) saldırıları ile paketlerin okunmasından korunmanın en temel yöntemi nedir?",
    options: {
      a: "HTTPS gibi şifrelenmiş protokoller üzerinden veri akışının sağlanması",
      b: "Tüm iletişimi şifresiz HTTP üzerinden yapmak",
      c: "ARP protokolünü bilgisayardan silmek",
      d: "Bilgisayarın MAC adresini 32 bite düşürmek",
      e: "Sadece halka açık şifresiz Wi-Fi ağlarına bağlanmak"
    },
    answer: "a",
    explanation: "MITM saldırısı şifrelenmemiş verileri görebilme ilkesine dayanır; korunma yöntemi ortak ağlarda HTTPS gibi şifrelenmiş protokoller üzerinden veri akışının sağlanmasıdır."
  },
  {
    id: 120,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "Eski ismi 'Ethereal' olan; Windows, Linux, MacOS ve Solaris'te çalışabilen, 750'nin üzerinde protokolü analiz edebilen ve ağ kartlarına gelip giden tüm trafiği yakalayıp analiz edebilen program hangisidir?",
    options: {
      a: "WireShark",
      b: "Wordpress",
      c: "Wordfence",
      d: "TeraBIT",
      e: "Stuxnet"
    },
    answer: "a",
    explanation: "Eski ismi Ethereal olan WireShark, ağ kartlarına gelip giden tüm trafiği ve 750'nin üzerinde protokolü analiz edebilen paket yakalama programıdır."
  },
  {
    id: 121,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "Kelime anlamı 'soymak' olan ve temel yaptığı iş 'bir HTTPS trafiği gördüğünde bunu şifresiz HTTP'li hale getirmek' olan saldırı yöntemi/aracı hangisidir?",
    options: {
      a: "SSL Strip",
      b: "SQL Injection",
      c: "MD5 Check",
      d: "Two Factor Authentication",
      e: "MAC Filtering"
    },
    answer: "a",
    explanation: "SSL Strip araçlarının temel yaptığı iş, şifreli bir HTTPS trafiği gördüğünde bunu şifresiz HTTP'li hale getirmektir."
  },
  {
    id: 122,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "Yerel ağ saldırılarında kurbanı farklı (sahte) bir web sayfasına yönlendirmek için kullanılan (localde çalışan bir phishing saldırısı gibi işleyen) ve Kali Linux üzerinde 'EtterCap' yazılımı ile gerçekleştirilen saldırı hangisidir?",
    options: {
      a: "DNS Spoofing",
      b: "Buffer Overflow",
      c: "Meltdown",
      d: "Li-Fi",
      e: "BSoD"
    },
    answer: "a",
    explanation: "DNS Spoofing ile saldırgan kurbanı farklı sayfaya yönlendirebilir; bunun için Kali Linux ve EtterCap yazılımı kullanılır."
  },
  {
    id: 123,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "Yerel veya internet ağı üzerinde hızlıca yayılabilen 'Ağ Virüsleri' kategorisinde tarihte en çok nam salmış iki virüs aşağıdakilerden hangisidir?",
    options: {
      a: "Nimda ve SQLSlammer (SQLSammer)",
      b: "Wireshark ve EtterCap",
      c: "Joomla ve Drupal",
      d: "TKIP ve AES",
      e: "Mati ve Devon"
    },
    answer: "a",
    explanation: "Ağ virüsleri kategorisinde tarihte en çok nam salmış iki virüs Nimda ve SQLSlammer (slaytta SQLSammer)'dır."
  },
  {
    id: 124,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "Kali Linux üzerinde çalışan ve 'hedef belirlenmiş kurbanın ziyaret ettiği sitelerdeki her türlü görselin (resmin) bir kopyasını saldırgana veren' ufak ve spesifik ağ dinleme yazılımı hangisidir?",
    options: {
      a: "DriftNet",
      b: "Wordfence",
      c: "Sucuri",
      d: "Google Authenticator",
      e: "D-Wave"
    },
    answer: "a",
    explanation: "DriftNet yazılımının özelliği, hedef belirlenmiş kurbanın ziyaret ettiği sitelerdeki her türlü görselin bir kopyasını bize vermesidir."
  },
  {
    id: 125,
    week: "7. Hafta · Ağ Güvenliği ve Saldırıları",
    question: "McAfee Labs istatistiklerine ve ders notlarına göre günümüzde halen en sık görülen ağ saldırıları arasında ilk sıralarda yer alan ve 'Wordlistler (kelime listeleri) ile şifre kırma' prensibine dayanan saldırı hangisidir?",
    options: {
      a: "Brute Force (ve Browser / DoS atakları)",
      b: "Li-Fi Işık Saldırısı",
      c: "Kuantum Primarch Saldırısı",
      d: "Anne Kızlık Soyadı Çipi",
      e: "Ağaç Topolojisi"
    },
    answer: "a",
    explanation: "Browser atakları, Brute Force (Wordlistler ile şifre kırma) ve Denial of Service (DoS) en sık görülen ağ saldırıları arasında ilk sıralarda yer almaktadır."
  }
];

// ============================================================================
// 🎯 SINAVDA EN ÇOK ÇIKMA İHTİMALİ OLAN NOKTA ATIŞI SORULAR (60 SORU)
// (Slaytlardaki sarı vurgulu tanımlar, 5 maddeli listeler ve Anahtar Kelimeler)
// ============================================================================
const EXAM_FOCUS_QUESTIONS = [
  // --- 1-2. HAFTA BANKO SINAV SORULARI ---
  {
    id: 101,
    week: "🎯 Sınav Favorisi · 1-2. Hafta",
    question: "Aşağıdakilerden hangisi slaytlarda 5 madde halinde verilen 'Kurumsal Verinin Ayırt Edici Özellikleri' arasında yer almaz?",
    options: {
      a: "Anonim ve Halka Açık",
      b: "Entegre",
      c: "Yedeklenebilir",
      d: "Kaliteli ve Ölçeklenebilir",
      e: "Güvenli"
    },
    answer: "a",
    explanation: "Slayt 19'da Kurumsal Verinin Ayırt Edici Özellikleri tam 5 madde olarak verilmiştir: 1. Entegre, 2. Yedeklenebilir, 3. Kaliteli, 4. Ölçeklenebilir, 5. Güvenli. (Tam 5 maddeli olduğu için sınavda 'Hangisi değildir?' sorusu olmaya en aday maddedir.)"
  },
  {
    id: 102,
    week: "🎯 Sınav Favorisi · 1-2. Hafta",
    question: "Slaytta sarı vurgu ile belirtilen; 'Sahiplerinin izni olmaksızın gizli bilgi edinmek için bilgi teknolojisi kullanma' olarak tanımlanan ve stratejik, ekonomik, politik veya askeri avantaj elde etmek amacıyla yapılan faaliyet hangisidir?",
    options: {
      a: "Siber Casusluk",
      b: "Siber Terörizm",
      c: "Siber Savaş",
      d: "Erişim Kontrolü",
      e: "Veri Bütünlüğü"
    },
    answer: "a",
    explanation: "Slayt 10'da sarı fosforlu vurgu ile 'SİBER CASUSLUK: Sahiplerinin izni olmaksızın gizli bilgi edinmek için bilgi teknolojisi kullanma' tanımı yer almaktadır."
  },
  {
    id: 103,
    week: "🎯 Sınav Favorisi · 1-2. Hafta",
    question: "Kurum içi güvenliği sağlamak için tasarlanan 'CIA TRIAD Modeli'nde yer alan 'Integrity (Bütünlük)' kavramının slaytta kalın harflerle belirtilen anahtar kelimesi ve örneği nedir?",
    options: {
      a: "Hash kontrolü — Anahtar Kelime: MD5 Check, MD5 Control",
      b: "Saldırı haritası — Anahtar Kelime: Cyber Threat Map",
      c: "Takma isim — Anahtar Kelime: Nickname Darth Vader",
      d: "Virüs üretimi — Anahtar Kelime: Virus Maker",
      e: "Uzaktan dosya — Anahtar Kelime: Safe Mode Off"
    },
    answer: "a",
    explanation: "Slayt 23'te Integrity (Bütünlük) altında: 'Örnek: Bir verinin bir yerden bir yere aktarımı hash kontrolü. Anahtar Kelime: MD5 Check, MD5 Control' ifadesi özellikle vurgulanmıştır."
  },
  {
    id: 104,
    week: "🎯 Sınav Favorisi · 1-2. Hafta",
    question: "CIA Triad modelinde 'Confidentiality (Gizlilik)' ilkesini sağlamak amacıyla bir bilgisayara, ağa veya veritabanına yetkisiz erişimi engelleyen koruma şemasına ne ad verilir ve bu şemanın 3 aşamalı konsepti (AAA) nedir?",
    options: {
      a: "Erişim Kontrolü — Authentication (Kimlik Doğrulama), Authorization (Yetkilendirme), Accounting (Aktivite İzlenmesi)",
      b: "Veri Modelleme — Availability, Integrity, Confidentiality",
      c: "Ağ Topolojisi — Bus, Star, Ring",
      d: "Sızma Testi — DoS, DDoS, SEO Poisoning",
      e: "Paket Filtreleme — Statik, Dinamik, Melez"
    },
    answer: "a",
    explanation: "Slayt 21 ve 22'de sarı vurgu ile bu koruma şemasına 'Erişim Kontrolü' dendiği ve AAA Konseptinin Authentication, Authorization ve Accounting'den oluştuğu belirtilmiştir."
  },
  {
    id: 105,
    week: "🎯 Sınav Favorisi · 1-2. Hafta",
    question: "Slaytta Siber Savaş konusunda sarı vurgu ile dikkat çekilen 'Anahtar Kelimeler' ve örnek siber saldırı haritası aşağıdakilerden hangisidir?",
    options: {
      a: "Anahtar Kelimeler: Cyber Threat Map, Cyber Attack Map (Norse / cybermap.kaspersky.com)",
      b: "Anahtar Kelimeler: MD5 Check, MD5 Control",
      c: "Anahtar Kelimeler: Virus Maker, TeraBIT",
      d: "Anahtar Kelimeler: Hostile Linking, Opera",
      e: "Anahtar Kelimeler: Safe Mode Off, Shell"
    },
    answer: "a",
    explanation: "Slayt 9'da sarı vurgu ile 'Anahtar Kelimeler: Cyber Threat Map, Cyber Attack Map' ve Kaspersky/Norse haritası verilmiştir."
  },
  {
    id: 106,
    week: "🎯 Sınav Favorisi · 1-2. Hafta",
    question: "Aşağıdakilerden hangisi 'Ülkeler arası Siber Savaşlara hazırlıklı olabilmek için yapılması gerekenler' slaytındaki 5 maddeden biri değildir?",
    options: {
      a: "Ulusal işletim sistemi yerine tamamen dışa bağımlı hazır yazılımlar kullanılması",
      b: "Siber Güvenlik için bütçe ve kaynak ayrılması",
      c: "Siber Güvenlik uzmanlarımızın yetiştirilmesi",
      d: "Kendi savaş uçaklarımızın, tanklarımızın, donanım ve yazılımımızın üretilmesi",
      e: "Kendi ulusal işletim sistemlerimizin üretilmesi"
    },
    answer: "a",
    explanation: "Slayt 41'de tam 5 madde yer alır: 1. Bütçe ve kaynak ayrılması, 2. Uzman yetiştirilmesi, 3. Kendi savaş uçaklarımızın/tanklarımızın üretilmesi, 4. Donanım ve yazılım üretilmesi, 5. Kendi ulusal işletim sistemlerimizin üretilmesi."
  },
  {
    id: 107,
    week: "🎯 Sınav Favorisi · 1-2. Hafta",
    question: "Hacker türleri (Siyah, Gri, Beyaz Şapkalı) ve Tehdit türleri (İç ve Dış Tehdit) ile ilgili aşağıdakilerden hangisi yanlıştır?",
    options: {
      a: "'Kızgın Çalışanlar' ve kötü niyetli çalışanların veriyi dışarı sızdırması 'Dış Tehdit'e örnektir.",
      b: "Siyah Şapkalı Hackerlar kişisel kazanç için kredi kartı çalar, Botnet ve DDoS saldırıları yapar.",
      c: "Gri Şapkalı Hackerlar inandıkları amaçlar ve siyasi konular için hack yapabilir, siyah ile beyaz şapka arasında yer alır.",
      d: "Beyaz Şapkalı Hackerlar şirketlerin güvenlik açıklarını önceden bularak şirketlere bildirir.",
      e: "Dışarıdan yapılan saldırılarla sunucudaki kaynak kodların veya veritabanının çalınması 'Dış Tehdit'tir."
    },
    answer: "a",
    explanation: "Slayt 30'da kalın harflerle 'Kızgın Çalışanlar İç Tehditlere örnektir' denilmiştir; Dış Tehdit değildir."
  },
  {
    id: 108,
    week: "🎯 Sınav Favorisi · 1-2. Hafta",
    question: "Tarihsel siber savaş ve saldırı örnekleriyle ilgili aşağıdaki eşleştirmelerden hangisi yanlıştır?",
    options: {
      a: "STUXnet Virüsü: Sadece web tarayıcılarındaki çerezleri silen basit bir reklam yazılımıdır.",
      b: "Estonya Saldırısı (2007): 'Tallinn'in Bronz Askeri' anıtının kaldırılması sonrası bakanlık ve banka ağlarına yapılan ilk ciddi sistematik DDoS/internet savaşıdır.",
      c: "STUXnet Virüsü: İran'ın nükleer programında motorları ve sıcaklığı kontrol eden merkezi mantık kontrol birimi olan PLC'yi ele geçiren kendi kendini kopyalayan yazılımdır.",
      d: "Rusya'nın ABD'ye Saldırısı (2008): Virüslü bir hafıza kartıyla ABD'nin Irak ve Afganistan savaşlarını yürüten komuta merkezine sızılmıştır.",
      e: "Gürcistan Saldırısı (2008): Rusya askeri saldırıdan hemen önce Gürcistan iletişim altyapısını çökertmiştir."
    },
    answer: "a",
    explanation: "STUXnet basit bir reklam yazılımı değil, İran'ın nükleer tesislerindeki PLC kontrol birimini ele geçiren siber savaş virüsüdür."
  },
  {
    id: 109,
    week: "🎯 Sınav Favorisi · 1-2. Hafta",
    question: "Slaytta sarı vurgu ile belirtilen 'Çevrimiçi Kimlik' ve 'Çevrim Dışı Kimlik' kavramları ile ilgili aşağıdakilerden hangisi doğrudur?",
    options: {
      a: "Çevrimiçi kimlik forum ve oyun portallarında kullanılan Rumuz/Nickname'dir; Çevrimdışı kimlik ise yeni T.C. Kimlik Kartları gibi çipli ve unique kodlu olup anne kızlık soyadı gibi kolay bulunabilir kimlik hırsızlığının önüne geçer.",
      b: "Yeni kimlik kartlarında çip yoktur ve eski kimliklere göre çok daha fazla görünür kişisel veri yer alır.",
      c: "Çevrimiçi kimlikler hiçbir zaman IP adresi, SMS, mail veya Google Authenticator ile doğrulanamaz.",
      d: "Araba plakası ve pasaport numarası kişisel veri sayılmaz.",
      e: "Kişisel veriye ulaşmanın en zor yolu sosyal medya hesapları ve arama motorlarıdır."
    },
    answer: "a",
    explanation: "Slayt 12 ve 13'te Çevrimiçi Kimlik (Rumuz/Nickname) ve Çevrimdışı Kimlik (Yeni çipli kimlik kartları ile anne kızlık soyadı hırsızlığının önlenmesi) sarı vurguyla anlatılmıştır."
  },
  {
    id: 110,
    week: "🎯 Sınav Favorisi · 1-2. Hafta",
    question: "CIA Triad modelinde; 'Verinin tüm yaşam döngüsü boyunca tutarlılığını ve güvenilirliğini korumayı içerir' şeklinde sarı vurguyla tanımlanan ve bankaların en çok önem verdiği (Facebook içinse o kadar önemli olmadığı belirtilen) kavram hangisidir?",
    options: {
      a: "Integrity (Bütünlük)",
      b: "Confidentiality (Gizlilik)",
      c: "Availability (Kullanılabilirlik)",
      d: "Accounting (Aktivite İzlenmesi)",
      e: "Authorization (Yetkilendirme)"
    },
    answer: "a",
    explanation: "Slayt 23'te sarı vurgu ile Integrity (Bütünlük) tanımlanmış; bankaların müşteri veri tutarlılığına en çok önem veren şirketlerden olduğu, Facebook içinse veri tutarlılığının önemli olmadığı örneği verilmiştir."
  },
  {
    id: 111,
    week: "🎯 Sınav Favorisi · 1-2. Hafta",
    question: "Bir kurumda güvenlik ihlali yaşandığında sorulması gereken 4 temel soru arasında aşağıdakilerden hangisi yer almaz?",
    options: {
      a: "İhlali müşterilerden nasıl gizleyebiliriz?",
      b: "Ne oldu?",
      c: "Neler götürüldü?",
      d: "Sonuçlar neler?",
      e: "İhlalden sonra müşterinin yapması gereken bir şey var mı?"
    },
    answer: "a",
    explanation: "Slayt 25'te Güvenlik İhlalleri altında 4 soru vardır: Ne oldu?, Neler götürüldü?, Sonuçlar neler?, İhlalden sonra müşterinin yapması gereken bir şey var mı? Müşteriye dokunan bir durum varsa acilen bilgilendirilmelidir."
  },
  {
    id: 112,
    week: "🎯 Sınav Favorisi · 1-2. Hafta",
    question: "Kurumsal veri kaybının sonuçlarına örnek olarak slaytta hangi iki büyük şirketin milyonlarca dolarlık finansal kayıpları gösterilmiştir?",
    options: {
      a: "Adobe ve e-Bay",
      b: "Steam ve Twitch",
      c: "Norton ve McAfee",
      d: "Intel ve AMD",
      e: "Joomla ve Drupal"
    },
    answer: "a",
    explanation: "Slayt 17'de Kurumsal Veri Kavramı Örnekleri olarak 'Adobe ve e-Bay örneğindeki gibi binlerce, milyonlarca dolarlık finansal kayıplara, hisse senetlerinin düşmesine ve şirketin batmasına neden olabilir' denilmiştir."
  },

  // --- 3-4. HAFTA BANKO SINAV SORULARI ---
  {
    id: 113,
    week: "🎯 Sınav Favorisi · 3-4. Hafta",
    question: "Aşağıdakilerden hangisi 3-4. Hafta slaytında 5 madde halinde sıralanan 'Güvenlik Açığı Çeşitleri' arasında yer almaz?",
    options: {
      a: "İki Faktörlü Doğrulama (Two Factor Authentication)",
      b: "Buffer Taşması",
      c: "Doğrulanmış Girdi",
      d: "Race Durumları",
      e: "Güvenlik Uygulamalarındaki Zafiyetler ve Erişim Kontrol Problemleri"
    },
    answer: "a",
    explanation: "Slayt 5'te Güvenlik Açığı Çeşitleri tam 5 madde olarak verilmiştir: 1. Buffer Taşması, 2. Doğrulanmış Girdi, 3. Race Durumları, 4. Güvenlik Uygulamalarındaki Zafiyetler, 5. Erişim Kontrol Problemleri."
  },
  {
    id: 114,
    week: "🎯 Sınav Favorisi · 3-4. Hafta",
    question: "Güvenlik açıkları temelde kaç çeşittir ve 2018 yılında Intel, ARM ve AMD işlemcilerde keşfedilen 'Meltdown ve Spectre' açıkları hangi gruba girer?",
    options: {
      a: "2 çeşittir (Yazılım ve Donanım Güvenliği Açığı) — Meltdown ve Spectre 'Donanım Güvenliği Açığı'dır.",
      b: "2 çeşittir — Meltdown ve Spectre 'Sosyal Medya Açığı'dır.",
      c: "5 çeşittir — Meltdown ve Spectre 'Web Tarayıcı Eklentisi'dir.",
      d: "3 çeşittir — Meltdown ve Spectre 'Ağ Topolojisi'dir.",
      e: "4 çeşittir — Meltdown ve Spectre 'Antivirüs Yazılımı'dır."
    },
    answer: "a",
    explanation: "Slayt 2 ve 3'te güvenlik açıklarının 1. Yazılım Güvenliği Açığı ve 2. Donanım Güvenliği Açığı olarak 2 çeşit olduğu; Meltdown ve Spectre'nin işlemci/kernel'de çıkan donanımsal açık olduğu ve yetkisiz bellek (RAM) erişimine yol açtığı belirtilmiştir."
  },
  {
    id: 115,
    week: "🎯 Sınav Favorisi · 3-4. Hafta",
    question: "Aşağıdakilerden hangisi slaytta 4 madde halinde verilen 'Sızma Yöntemleri' arasında yer almaz?",
    options: {
      a: "Verileri yedeklemek ve şifrelemek",
      b: "Sosyal Mühendislik",
      c: "Parola Keşfetme / Kırma (Kablosuz Ağlar)",
      d: "Phishing (Oltalama)",
      e: "Zafiyet taramasından faydalanma"
    },
    answer: "a",
    explanation: "Slayt 7'de Sızma Yöntemleri 4 maddedir: 1. Sosyal Mühendislik, 2. Parola Keşfetme/Kırma, 3. Phishing (Oltalama), 4. Zafiyet taramasından faydalanma."
  },
  {
    id: 116,
    week: "🎯 Sınav Favorisi · 3-4. Hafta",
    question: "'Farklı güvenlik açıklarına karşı saldırıların bir kombinasyonu kullanılarak gerçekleştirilen; Solucan, Truva atı gibi malware/virüs örnekleri ile Phishing gibi birçok farklı metodun bir arada kullanıldığı tehdit metodu' aşağıdakilerden hangisidir?",
    options: {
      a: "Harmanlanmış Tehdit Metodu",
      b: "Statik Paket Filtreleme",
      c: "Devre Seviyesi Güvenlik",
      d: "In-Private Browsing",
      e: "Two Factor Authentication"
    },
    answer: "a",
    explanation: "Slayt 9'da bu tanım 'Harmanlanmış Tehdit Metodu' başlığı altında birebir verilmiştir."
  },
  {
    id: 117,
    week: "🎯 Sınav Favorisi · 3-4. Hafta",
    question: "Slaytta 'Denial of Service (Hizmeti kesintiye uğratan saldırı tipleri)' başlığı altında verilen 3 saldırı tipi aşağıdakilerden hangisidir?",
    options: {
      a: "DoS, DDoS (Distributed DoS), SEO Poisoning",
      b: "SQL Injection, XSS, CSRF",
      c: "WEP, WPA, WPA2",
      d: "ARP, DNS, DHCP",
      e: "Bus, Star, Ring"
    },
    answer: "a",
    explanation: "Slayt 8'de hizmeti kesintiye uğratan saldırı tipleri olarak DoS, DDoS ve SEO Poisoning maddelenmiştir."
  },
  {
    id: 118,
    week: "🎯 Sınav Favorisi · 3-4. Hafta",
    question: "Yazılım güvenlik açıklarından korunmak için yapılması gerekenlerle ilgili slaytta vurgulanan önemli kural hangisidir?",
    options: {
      a: "Sistemlerin güncel veya kararlı (stable) versiyonları yüklenmeli; kritik sistemlerde yazılımların Alfa veya Beta sürümleri kesinlikle kurulmamalıdır.",
      b: "Kritik sunucularda her zaman ilk olarak Alfa sürümü kurulmalıdır.",
      c: "Mavi ekran (Blue Screen of Death) hatası almak sistemin güvenli olduğunu gösterir.",
      d: "İşletim sistemi güncellemeleri tamamen kapatılmalıdır.",
      e: "Güvenlik duvarı ve antivirüs yazılımları silinmelidir."
    },
    answer: "a",
    explanation: "Slayt 4'te 'Kullanılan sistemlerin güncel veya kararlı versiyonları yüklenmelidir. Ayrıca kritik sistemlerde yazılımların Alfa veya Beta sürümlerinin kurulması doğru değildir.' denmektedir."
  },
  {
    id: 119,
    week: "🎯 Sınav Favorisi · 3-4. Hafta",
    question: "Son kullanıcı cihazlarındaki veriyi ve kablosuz ağlardaki verileri korumak için yapılması gerekenler arasında aşağıdakilerden hangisi yer almaz?",
    options: {
      a: "Kullanımda değilken Bluetooth'u sürekli açık bırakmak ve halka açık hot-spot ağlarına koşulsuz güvenmek",
      b: "Firewall cihazını aktif tutmak",
      c: "Bir Anti-virüs yazılımı (endpoint protection) kullanmak",
      d: "İşletim sistemlerini güncel tutmak ve güçlü şifreleme metotları kullanmak",
      e: "Kullanımda değilken Bluetooth'u kapatmak"
    },
    answer: "a",
    explanation: "Slayt 11 ve 12'ye göre Firewall aktif tutulmalı, Anti-virüs (endpoint protection) kullanılmalı, işletim sistemi güncel tutulmalı, hot-spot noktalarında dikkatli olunmalı ve kullanımda değilken Bluetooth kapatılmalıdır."
  },
  {
    id: 120,
    week: "🎯 Sınav Favorisi · 3-4. Hafta",
    question: "Güçlü ve kırılması zor parolalar oluşturmak için slaytta belirtilen 4 kuraldan hangisi yanlıştır?",
    options: {
      a: "Parolalar sadece küçük harflerden oluşmalı ve en fazla 4 karakter olmalıdır.",
      b: "Karmaşık, kişisel verileri içermeyen güçlü parolalar oluşturulmalıdır.",
      c: "Her bir çevrimiçi hesap için farklı parolalar kullanılmalı veya hesabın önemine göre parola grupları oluşturulmalıdır.",
      d: "12 - 16 karakter aralığında sembol ve büyük-küçük harf içeren parolalar üretilmelidir.",
      e: "Password Generator gibi yazılımlar kullanılabilir."
    },
    answer: "a",
    explanation: "Slayt 14'te güçlü parolalar için 12-16 karakter aralığında sembol ve büyük-küçük harf içeren, kişisel veri barındırmayan, her hesap için farklı parolalar (veya Password Generator) önerilmiştir."
  },
  {
    id: 121,
    week: "🎯 Sınav Favorisi · 3-4. Hafta",
    question: "Çevrimiçi hizmetleri kullanırken kabul etmemiz gereken yasal sözleşme ve zorunluluklar arasında slaytta parantez içinde '(Avrupa Birliği Zorunluluğu)' olarak belirtilen madde hangisidir?",
    options: {
      a: "Çerezler (Avrupa Birliği Zorunluluğu)",
      b: "Donanım Garantisi",
      c: "Bitcoin Madenciliği Sözleşmesi",
      d: "Açık Kaynak Lisansı",
      e: "Modem Port İzinleri"
    },
    answer: "a",
    explanation: "Slayt 16'da kabul etmemiz gereken sözleşmeler: Kullanım Koşulları, Hizmet Şartları, Veri İlkeleri ve Çerezler (Avrupa Birliği Zorunluluğu) olarak sıralanmıştır."
  },
  {
    id: 122,
    week: "🎯 Sınav Favorisi · 3-4. Hafta",
    question: "Sosyal medya, e-mail ve tarayıcı güvenliği için slaytlarda verilen önerilerden hangisi doğrudur?",
    options: {
      a: "Sosyal medyada gizli sorulara yanlış yanıtlar verilmeli, Check-In yaparken ikamet adresi verilmemeli, e-mailler şifrelenmeli, bilinmeyen browser add-on eklentileri kullanılmamalı ve in-private mode'da gezinilmelidir.",
      b: "Gizli sorulara herkesin bildiği doğru yanıtlar verilmelidir.",
      c: "Check-In yaparken ev adresi ('Ahmet'in malikanesi' vb.) açıkça paylaşılmalıdır.",
      d: "Tarayıcıda her zaman bilinmeyen yazılımcıların add-on eklentileri kullanılmalıdır.",
      e: "In-private mode tüm şifreleri ve geçmişi kalıcı olarak masaüstüne kaydeder."
    },
    answer: "a",
    explanation: "Slayt 18 ve 19'da gizli sorulara yanlış yanıtlar verilmesi, Check-In'de ikamet adresi verilmemesi, e-maillerin şifrelenmesi, bilinmeyen add-on'ların kullanılmaması ve in-private mode (şifreler ve kayıtlar tutulmaz) maddeleri yer alır."
  },
  {
    id: 123,
    week: "🎯 Sınav Favorisi · 3-4. Hafta",
    question: "Veriyi korumak için genel öneriler slaytında yer alan 3 madde aşağıdakilerden hangisidir?",
    options: {
      a: "Verilerinizi şifreleyin, Yedek alın, Sileceğiniz zaman tümüyle yok edin",
      b: "Verileri paylaşın, Şifresiz saklayın, Geri dönüşüm kutusunda tutun",
      c: "Sadece bulutta tutun, Parola koymayın, Güncellemeleri kapatın",
      d: "Alfa sürüm kullanın, Bluetooth'u açın, Çerezleri silmeyin",
      e: "Portları açın, WEP kullanın, Hotspot kapatın"
    },
    answer: "a",
    explanation: "Slayt 15'te Veriyi Korumak İçin Genel Öneriler: 1. Verilerinizi Şifreleyin, 2. Yedek Alın, 3. Sileceğiniz zaman tümüyle yok edin."
  },
  {
    id: 124,
    week: "🎯 Sınav Favorisi · 3-4. Hafta",
    question: "Kullanıcı şifresini girdikten sonra telefon veya ona ait bir cihaz üzerinden SMS, arama, mail veya Google Authenticator ile doğrulama yapılmasına ne ad verilir?",
    options: {
      a: "Two Factor Authentication (2 Faktörlü Doğrulama Metodu)",
      b: "Social Media Authentication",
      c: "Hostile Linking",
      d: "Harmanlanmış Tehdit",
      e: "SQL Injection"
    },
    answer: "a",
    explanation: "Slayt 17'de bu yöntem 'Two Factor Authentication (2 Faktörlü Doğrulama Metodu)' olarak tanımlanmıştır."
  },

  // --- 5. HAFTA BANKO SINAV SORULARI ---
  {
    id: 125,
    week: "🎯 Sınav Favorisi · 5. Hafta",
    question: "Web uygulamalarındaki önemli ve popüler güvenlik açıkları arasında aşağıdaki 6 ana başlıktan hangisi yer almaz?",
    options: {
      a: "Two Factor Authentication (2FA)",
      b: "Injection (SQL, XML, CSV, Template, Command, Code, HTML, Meta Tag Injection vb.)",
      c: "Cross Site Scripting (XSS)",
      d: "Cross Site Reference Forgery (CSRF / XSRF)",
      e: "Remote File Include (RFI), Hizmet Aksatma Yöntemleri ve Brute Force"
    },
    answer: "a",
    explanation: "Slayt 11'de popüler web güvenlik açıkları: 1. Injection, 2. Cross Site Scripting, 3. Cross Site Reference Forgery, 4. Remote File Include, 5. Hizmet Aksatma Yöntemleri, 6. Brute Force olarak sıralanmıştır."
  },
  {
    id: 126,
    week: "🎯 Sınav Favorisi · 5. Hafta",
    question: "Slaytlarda anlatılan Web Güvenliği Açıkları (SQL Injection, XSS, CSRF, RFI) ile ilgili aşağıdaki bilgilerden hangisi yanlıştır?",
    options: {
      a: "SQL Injection sadece küçük sitelerde olur, büyük firma sitelerinde ve hazır sistemlerde asla bulunmaz.",
      b: "SQL Injection (Structured Query Language Injection) bir veritabanı güvenliği açığıdır ve yetkisiz olarak veritabanına sızılmasını sağlar.",
      c: "Cross Site Scripting (XSS) 'Çapraz Kod Çalıştırma' anlamına gelir; en çok POST ve GET metotlarının kullanıldığı arama, galeri ve yorum alanlarında görülür.",
      d: "Cross Site Reference Forgery (XSRF/CSRF) siteye entegre kod ('hostile linking') şeklinde çalışır ve bu açıkta kullanılan browser en çok Opera'dır.",
      e: "Remote File Include (RFI) 'uzaktan dosya yükleme' anlamına gelir; zararlı 'Shell dosyaları' yüklenerek sistemde 'safe mode off' yapılabilir."
    },
    answer: "a",
    explanation: "Slayt 13'te 'SQL Injection açıkları küçük sitelerden tutun büyük bir firma sitelerine kadar tüm sistemlerde olabilmektedir. Hazır sistemlerde de arayabilirsiniz.' denilmiştir."
  },
  {
    id: 127,
    week: "🎯 Sınav Favorisi · 5. Hafta",
    question: "Aşağıdakilerden hangisi slaytta 'İnternet üzerinde açık kaynak kodlu (Open Source) en önemli 5 CMS (Content Management System - İçerik Yönetim Sistemi)' arasında sayılmamıştır?",
    options: {
      a: "Wireshark",
      b: "Wordpress",
      c: "Joomla",
      d: "Drupal",
      e: "Magento ve TYPO3"
    },
    answer: "a",
    explanation: "Slayt 18'de en önemli açık kaynak kodlu CMS'ler: Wordpress, Joomla, Drupal, Magento ve TYPO3 olarak verilmiştir. Wireshark bir ağ analiz programıdır."
  },
  {
    id: 128,
    week: "🎯 Sınav Favorisi · 5. Hafta",
    question: "Wordpress ile ilgili slaytlarda verilen istatistik, kod ve dosya/klasör izinlerinden hangisi doğrudur?",
    options: {
      a: "İnternetin %32'sinde Wordpress bulunur; `function.php` içine `remove_action('wp_head', 'wp_generator');` yazılarak sürüm gizlenir; klasör izinleri 755, `wp-config.php` ve `.htaccess` dosya izinleri ise 644 olmalıdır.",
      b: "İnternetin %4'ünde Wordpress bulunur; tüm dosya ve klasör izinleri 777 olmalıdır.",
      c: "Wordpress kapalı kaynak kodlu ücretli bir yazılımdır ve eklenti desteklemez.",
      d: "Wordpress sitelerde sürüm numarası her zaman hackerların görebileceği şekilde açık bırakılmalıdır.",
      e: "Klasör izinleri 644, `wp-config.php` dosya izni ise 755 olmalıdır."
    },
    answer: "a",
    explanation: "Slayt 19, 22 ve 25'te Wordpress'in %32 paya sahip olduğu, `remove_action('wp_head', 'wp_generator');` ile sürümün gizlendiği, klasörlerin 755 ve kritik dosyaların (`wp-config.php`, `.htaccess`, `wp-admin/index.php`) 644 olması gerektiği belirtilmiştir."
  },
  {
    id: 129,
    week: "🎯 Sınav Favorisi · 5. Hafta",
    question: "Web uygulamalarının tarihçesi ve güvenliği ile ilgili slaytlarda verilen örneklerden hangisi doğrudur?",
    options: {
      a: "Adobe Flash uygulamasının güvenlik açıkları ve kaynakları verimsiz kullanışı nedeniyle 12 Ağustos 2012'de desteği durdurulmuştur; Gmail ise kullanıcıların çıkabilecek sorunları kabul ederek kullanması için 5 yıldan fazla (7 Temmuz 2009'a kadar) beta sürümünde kalmıştır.",
      b: "Adobe Flash günümüzde tüm tarayıcılarda açık ve zorunlu olarak gelmektedir.",
      c: "Bilgisayar ortamında sıfır güvenlik açığı ile tamamen güvenli bir web uygulaması geliştirmek mümkündür.",
      d: "Penetrasyon testlerinde aranan 'bug' kelimesi yüksek hızlı internet anlamına gelir.",
      e: "Kötü niyetli bug researcher'lar bilinen kolay hatalar yerine sadece kullanımı yıllar süren yeni açıkları tercih eder."
    },
    answer: "a",
    explanation: "Slayt 5 ve 6'da Flash desteğinin 12 Ağustos 2012'de durdurulduğu ve Gmail'in 5 yıldan uzun süre beta sürümünde kaldığı örnekleri verilmiştir."
  },
  {
    id: 130,
    week: "🎯 Sınav Favorisi · 5. Hafta",
    question: "Penetrasyon testlerinde aranan 'bug' kavramı ve büyük web projelerindeki yazılımcı rolleri hakkında aşağıdakilerden hangisi doğrudur?",
    options: {
      a: "Sözcük anlamı 'böcek' olan bug sistem zayıflıklarını ifade eder; yazılımcılar ise projeyi yazan 'Software Developer' ve test eden 'Test Developer' olarak ikiye ayrılır.",
      b: "Bug kelimesi şifreleme protokolü demektir; yazılımcılar sadece donanım üretir.",
      c: "Test Developer sadece grafik tasarım yapar, güvenlik testi yapmaz.",
      d: "Bug Researcher'ların tamamı kötü niyetli siyah şapkalı hackerlardır.",
      e: "Web sitelerinde HTTPS, SSL ve TLS kullanmak güvenlik açığına neden olur."
    },
    answer: "a",
    explanation: "Slayt 8'de bug kavramının sistem zayıflıklarını ifade ettiği ve büyük projelerde yazılımcıların Software Developer ve Test Developer olarak ikiye ayrıldığı belirtilmiştir."
  },
  {
    id: 131,
    week: "🎯 Sınav Favorisi · 5. Hafta",
    question: "Aşağıdakilerden hangisi slaytta listelenen 'Wordpress Güvenlik Eklentileri' arasında yer almaz?",
    options: {
      a: "EtterCap & DriftNet",
      b: "Wordfence Security & iThemes Security",
      c: "WPS Hide Login & Easy Hide Login",
      d: "BulletProof Security Pro",
      e: "Acunetix WP Security & All In One WP Security & Firewall"
    },
    answer: "a",
    explanation: "Slayt 24'te Wordpress güvenlik eklentileri: WPS Hide Login, Easy Hide Login, BulletProof Security Pro, Wordfence Security, iThemes Security, Acunetix WP Security ve All In One WP Security & Firewall olarak verilmiştir. EtterCap ve DriftNet ağ saldırı/dinleme araçlarıdır."
  },
  {
    id: 132,
    week: "🎯 Sınav Favorisi · 5. Hafta",
    question: "Web uygulamalarında 'Social Media Authentication' (Facebook, Twitter, Gmail, Yahoo ile otomatik üye olma) özelliğini güvenilir olmayan bir sitede kullandığımızda bizi bekleyen 3 tehlike arasında aşağıdakilerden hangisi yer alır?",
    options: {
      a: "Sosyal medya hesabımızda adımıza virüslü paylaşımlar yapılabilir, kişi listemize spam/fake mailler gönderilebilir ve sosyal medya hesabımız hacklenebilir.",
      b: "Bilgisayarımızın RAM belleği fiziksel olarak silinir.",
      c: "Sadece o web sitesinin rengi değişir, hesabımıza hiçbir etkisi olmaz.",
      d: "Modemimiz otomatik olarak MAC adres filtrelemesine geçer.",
      e: "Hesabımız otomatik olarak 2 faktörlü doğrulamaya (2FA) yükseltilir."
    },
    answer: "a",
    explanation: "Slayt 29'da güvenilir olmayan sitelerde sosyal medya ile giriş yapıldığında karşılaşılacak 3 sonuç birebir bu şekilde maddelenmiştir."
  },
  {
    id: 133,
    week: "🎯 Sınav Favorisi · 5. Hafta",
    question: "Mobil uygulamalar ve güvenlik slaytında Apple ve Android sistemler hakkında verilen kritik fark nedir?",
    options: {
      a: "Apple 3. parti uygulamalarda güvenlik zafiyeti gördüğünde uygulamayı marketten sıkça kaldırır (Örn: CIA Uygulaması); Android sistemlere ise uygulama marketi dışından da uygulama yüklenebilmesi en önemli güvenlik zafiyetlerinden biridir.",
      b: "Android cihazlara market dışından uygulama yüklemek imkansızdır, Apple cihazlara ise her yerden yüklenebilir.",
      c: "CIA Uygulaması Android tarafından geliştirilmiş bir antivirüs programıdır.",
      d: "Mobil uygulamaların internet kullanması güvenliği azaltmaktadır.",
      e: "Apple marketinde hiçbir güvenlik denetimi yapılmaz."
    },
    answer: "a",
    explanation: "Slayt 32'de Apple'ın zafiyet gördüğü uygulamaları marketten kaldırdığı (Örn: CIA Uygulaması) ve Android'de market dışından uygulama yüklenebilmesinin önemli bir güvenlik zafiyeti olduğu belirtilmiştir."
  },
  {
    id: 134,
    week: "🎯 Sınav Favorisi · 5. Hafta",
    question: "CMS web sitelerinde açıkları önlemek için yapılması gerekenler arasında aşağıdakilerden hangisi yanlıştır?",
    options: {
      a: "FTP tarafında tüm klasör izinlerini herkese açık (777) yapmak ve `.HTACCESS` dosyasını silmek",
      b: "Kullanılan sunucu, hosting yazılımı, CMS ve eklentileri güncel tutmak",
      c: "Yazılımın sürümlerini kapatmak (hackerlar hangi sürüm olduğunu görmemeli)",
      d: "Veritabanı kullanıcı adı ve şifresini karmaşık yapmak",
      e: "FTP klasör izinlerini doğru vermek, `.HTACCESS` dosyasını güvenli hale getirmek ve `sitecheck.sucuri.net` gibi tool'larla tarama yapmak"
    },
    answer: "a",
    explanation: "Slayt 22 ve 23'e göre FTP klasör izinleri doğru verilmeli (755/644) ve `.HTACCESS` dosyası güvenli hale getirilmelidir."
  },
  {
    id: 135,
    week: "🎯 Sınav Favorisi · 5. Hafta",
    question: "Remote File Include (RFI) açığında sunucuya izinsiz yüklenen 'Shell dosyaları' sistemde hangi güvenlik ayarını devre dışı bırakarak sunucudaki tüm siteleri etkileyebilir?",
    options: {
      a: "Safe Mode Off yapabilir",
      b: "In-Private Mode açabilir",
      c: "Two Factor Authentication başlatabilir",
      d: "Li-Fi modunu kapatabilir",
      e: "MD5 Check yapabilir"
    },
    answer: "a",
    explanation: "Slayt 17'de 'Shell olarak adlandırdığımız zararlı dosyalar sistemde safe mode off yapabilmektedir' ifadesi yer almaktadır."
  },
  {
    id: 136,
    week: "🎯 Sınav Favorisi · 5. Hafta",
    question: "Web tabanlı yazılım projelerinde ve web sitelerinde alınması gereken en büyük önlemlerden biri olan ve güçlü şifreleme algoritmalarının bileşimini destekleyen protokol üçlüsü hangisidir?",
    options: {
      a: "HTTPS, SSL, TLS",
      b: "HTTP, FTP, ARP",
      c: "WEP, SSID, MAC",
      d: "GET, POST, HEAD",
      e: "HTML, CSS, JS"
    },
    answer: "a",
    explanation: "Slayt 10'da kalın harflerle 'HTTPS, SSL, TLS gibi güçlü şifreleme algoritmalarını bileşimini destekleyen protokollerden birinin kullanımı' vurgulanmıştır."
  },

  // --- 6. HAFTA BANKO SINAV SORULARI ---
  {
    id: 137,
    week: "🎯 Sınav Favorisi · 6. Hafta",
    question: "Deep Web katmanlarının isimleri ve özellikleri ile ilgili aşağıdaki eşleştirmelerden hangisi yanlıştır?",
    options: {
      a: "Katman 2 (Bergie Web): Sadece kuantum bilgisayarlarla girilebilen en derin katmandır.",
      b: "Katman 1 (Surface Web): Normal kullanıcıların arama motorları sayesinde ulaşabildiği katmandır (DNS sorgulama, Whois, mail vb.).",
      c: "Katman 2 (Bergie Web): Arama motorları tarafından indexlenmeyen veya en son sayfalara atılan sitelerin yer aldığı, normal tarayıcılardan ulaşılabilen son katmandır.",
      d: "Katman 3 (Deep Web): Derin internetin başladığı kısımdır; Proxy Web (Tor yüklemeden ulaşılabilen) ve Tor Browser (.onion uzantılı) olarak ikiye ayrılır.",
      e: "Katman 4 (Character Web): İlk kısmına Tor Browser ile, ikinci kısmına (CSS - Closed Shell System) ise özel cihaz ve router'lar ile ulaşılır."
    },
    answer: "a",
    explanation: "Katman 2 (Bergie Web) normal tarayıcılardan ulaşılabilen son katmandır; kuantum bilgisayar gerektiren katman Katman 5 (Marianas Web)'dir."
  },
  {
    id: 138,
    week: "🎯 Sınav Favorisi · 6. Hafta",
    question: "Deep Web'in 5., 6., 7. ve 8. katmanları ile ilgili aşağıdakilerden hangisi yanlıştır?",
    options: {
      a: "Katman 8 (The Primarch System): Herkesin standart ev bilgisayarıyla ve Google üzerinden erişebildiği ilk katmandır.",
      b: "Katman 5 (Marianas Web): Adını Mariana Çukuru'ndan alır; ulaşmak için kuantum teknolojisi ile yapılmış süper bilgisayarlara (örn. Google D-Wave 2X) ihtiyaç vardır.",
      c: "Katman 6: Bilinen en tehlikeli katmandır, sınırları belirlidir fakat başı ve sonu belirli değildir; kuantum teknolojisi ile bile erişim sağlanamamıştır.",
      d: "Katman 7 (The Fog / Virus Soup): İnsanların bir üst seviyeye ulaşılmaması için birbirleri ile savaşmaya başlayacakları söylenen katmandır.",
      e: "Katman 8 (The Primarch System): 'İnternetin Patronu' olarak adlandırılır, 2000'li yılların başında keşfedilmiştir ve Level 17 Quantum TR.001 Level Function Lock kullanır."
    },
    answer: "a",
    explanation: "Katman 8 (The Primarch System) bilinen en son katmandır, hiçbir hükümet/örgüt tarafından bilinmez ve günümüz bilgisayarlarının baş edemeyeceği Level 17 Quantum TR.001 Level Function Lock kullanır."
  },
  {
    id: 139,
    week: "🎯 Sınav Favorisi · 6. Hafta",
    question: "Aşağıdakilerden hangisi slaytta Katman 4'ün Tor Browser ile ulaşılan ilk kısmında yer alan 5 tehlikeli içerik maddesinden biri değildir?",
    options: {
      a: "E-devlet ve üniversite ders kayıt sayfaları",
      b: "Devletlerin özel casusları",
      c: "Şikeli bahis maçları",
      d: "Milyon dolarlık şirketlerin gizli verileri",
      e: "Kiralık katiller, mafyalar ve kendilerine denek arayan doktorlar"
    },
    answer: "a",
    explanation: "Slayt 8'de Katman 4'ün ilk kısmındaki 5 madde: 1. Devletlerin özel casusları, 2. Şikeli bahis maçları, 3. Milyon dolarlık şirketlerin gizli verileri, 4. Kiralık katiller, mafyalar, 5. Kendilerine denek arayan doktorlar."
  },
  {
    id: 140,
    week: "🎯 Sınav Favorisi · 6. Hafta",
    question: "Katman 4'te yer alan 'CSS' kısaltmasının açılımı, Türkçe karşılığı ve erişim şekli nedir?",
    options: {
      a: "Closed Shell System (Kapalı Kabul/Kabuk Sistemi) — Özel cihaz ve özel router'lara sahip olunması gerekir.",
      b: "Cascading Style Sheets — Normal web tarayıcılarıyla erişilir.",
      c: "Cross Site Scripting — Arama motorları üzerinden erişilir.",
      d: "Content Security System — Sadece mobil telefonlarla erişilir.",
      e: "Cyber Security Server — Halka açık Wi-Fi ile erişilir."
    },
    answer: "a",
    explanation: "Slayt 14'te 'CSS (Closed Shell System): Bilinenler arasında en tehlikeli katmandır. Özel cihaz ve routerlara sahip olmanız gerekmektedir. Kapalı kabul sistemi olarak da adlandırılabilir.' denmektedir."
  },
  {
    id: 141,
    week: "🎯 Sınav Favorisi · 6. Hafta",
    question: "Kali Linux işletim sisteminin oluşturulma yılı, öncülü (eski adı), geliştirici şirketi ve kurucuları hangi seçenekte eksiksiz verilmiştir?",
    options: {
      a: "2013 yılında, BackTrack yapımcıları (Mati Aharoni, Devon Kearns, Raphaël Hertzog) tarafından Offensive Security Ltd. aracılığıyla oluşturulmuştur.",
      b: "2007 yılında, Estonya hükümeti tarafından Kaspersky aracılığıyla oluşturulmuştur.",
      c: "2018 yılında, Intel ve AMD tarafından Microsoft aracılığıyla oluşturulmuştur.",
      d: "2000 yılında, Primarch sistemi tarafından Google aracılığıyla oluşturulmuştur.",
      e: "2012 yılında, Adobe Flash yapımcıları tarafından Apple aracılığıyla oluşturulmuştur."
    },
    answer: "a",
    explanation: "Slayt 22'de bu bilgiler birebir yer almaktadır: 2013, BackTrack yapımcıları, Offensive Security Ltd., Mati Aharoni, Devon Kearns ve Raphaël Hertzog."
  },
  {
    id: 142,
    week: "🎯 Sınav Favorisi · 6. Hafta",
    question: "İnternetin yüzdelik dağılımı (Surface Web vs Deep Web) ve Deep Web'in katman sayısı hakkında aşağıdakilerden hangisi doğrudur?",
    options: {
      a: "Normal internet (Surface/Visible Web) %4, Deep Web ise %96'dır (%90 Deep Web + %6 Dark Web); eskiden 5 katmanlı bilinen Deep Web'in günümüzde 8 katmandan oluştuğu öne sürülmektedir.",
      b: "Normal internet %96, Deep Web %4'tür ve toplam 2 katmandan oluşur.",
      c: "Normal internet %50, Deep Web %50'dir ve 3 katmandan oluşur.",
      d: "Deep Web arama motorları tarafından tamamen indexlenen `.com` ve `.net` sitelerinden oluşur.",
      e: "Katman 1'den 8'e kadar tüm katmanlara standart tarayıcılarla girilebilir."
    },
    answer: "a",
    explanation: "Slayt 2, 3 ve 4'te Surface Web'in %4, Deep Web'in %96 olduğu ve eskiden 5 katmanlı bilinen Deep Web'in günümüzde 8 katmandan oluştuğu belirtilmiştir."
  },
  {
    id: 143,
    week: "🎯 Sınav Favorisi · 6. Hafta",
    question: "Normal olarak standart web tarayıcılardan (Tor veya özel router kullanmadan) ulaşılabilen SON Deep Web katmanı hangisidir?",
    options: {
      a: "Katman 2 (Bergie Web)",
      b: "Katman 1 (Surface Web)",
      c: "Katman 4 (Character Web)",
      d: "Katman 5 (Marianas Web)",
      e: "Katman 8 (The Primarch System)"
    },
    answer: "a",
    explanation: "Slayt 6'da Katman 2 (Bergie Web) için 'Bu katman normal olarak tarayıcılardan ulaşılabilen son katmandır' cümlesi yer almaktadır."
  },
  {
    id: 144,
    week: "🎯 Sınav Favorisi · 6. Hafta",
    question: "Katman 3'ün alt bölümleri olan 'Proxy Web' ile 'Tor Browser' kısmı arasındaki temel fark nedir?",
    options: {
      a: "Proxy Web'de `.onion` uzantılı siteler yoktur ve Tor Browser yüklemeden ulaşılabilir; Tor Browser kısmında ise `.onion` uzantılı siteler (hacklenen sunucular, kredi kartı bilgileri, veri tüccarları vb.) yer alır.",
      b: "Proxy Web sadece kuantum bilgisayarlarla çalışır, Tor Browser ise çalışmaz.",
      c: "Proxy Web'de sadece `.onion` uzantılı siteler bulunur.",
      d: "Her iki kısım da Google arama motorunda ilk sayfada çıkar.",
      e: "Tor Browser kısmına girmek için Level 17 Quantum işlemci gerekir."
    },
    answer: "a",
    explanation: "Slayt 7 ve 9'da Katman 3'ün Proxy Web (.onion olmayan, Tor yüklemeden ulaşılabilen) ve Tor Browser (.onion uzantılı siteler) olarak ikiye ayrıldığı açıklanmıştır."
  },
  {
    id: 145,
    week: "🎯 Sınav Favorisi · 6. Hafta",
    question: "Slaytta 'Bilinen en son internet katmanıdır ve İnternetin Patronu olarak da adlandırılmaktadır' şeklinde tanımlanan katman ve kullandığı işlemci gücü kilidi nedir?",
    options: {
      a: "Katman 8 (The Primarch System) — Level 17 Quantum TR.001 Level Function Lock",
      b: "Katman 7 (The Fog) — MD5 Check Lock",
      c: "Katman 5 (Marianas Web) — WPA2 TKIP Lock",
      d: "Katman 4 (Character Web) — Safe Mode Off",
      e: "Katman 2 (Bergie Web) — Dual Core Lock"
    },
    answer: "a",
    explanation: "Slayt 20 ve 21'de Katman 8 (The Primarch System) için 'Level 17 Quantum TR.001 Level Function Lock kullanmaktadır. Bilinen en son internet katmanıdır. İnternetin patronu olarak da adlandırılmaktadır.' denilmiştir."
  },
  {
    id: 146,
    week: "🎯 Sınav Favorisi · 6. Hafta",
    question: "Slaytta 'İçinde bulunacak bilgiler ile internet savaşlarının biteceği ve dünya üstünde yer alan tüm nükleer sistemleri çalıştırabileceği' söylenen Deep Web katmanı hangisidir?",
    options: {
      a: "Katman 5 (Marianas Web)",
      b: "Katman 1 (Surface Web)",
      c: "Katman 2 (Bergie Web)",
      d: "Katman 3 (Proxy Web)",
      e: "Katman 7 (Virus Soup)"
    },
    answer: "a",
    explanation: "Slayt 15, 16 ve 17'de bu ifadeler Katman 5 (Marianas Web) için kullanılmıştır."
  },
  {
    id: 147,
    week: "🎯 Sınav Favorisi · 6. Hafta",
    question: "Slaytta Katman 1 – 4 arasının Deep Web'in ne kadarlık bölümünü kapsadığı ve diğer katmanlara (5-8 arası) erişim durumu nasıl ifade edilmiştir?",
    options: {
      a: "Katman 1 – 4 arası Deep Web kısmının 2/3'lük (slaytta 3/2'lik) bölümünü kapsar; diğer katmanlara ulaşmak normal bilgisayar ve ağ bağlantısı ile mümkün değildir.",
      b: "Katman 1 – 4 arası sadece %1'lik bölümü kapsar.",
      c: "Diğer katmanlara (5-8 arası) her cep telefonundan normal internetle girilebilir.",
      d: "Katman 1 – 4 arasına kuantum bilgisayar olmadan girilemez.",
      e: "Katman 4'te hiçbir bilim adamı yer almaz."
    },
    answer: "a",
    explanation: "Slayt 12'de 'Katman 1 – 4 arası Deep Web kısmının 3/2'lik bölümünü kapsamaktadır. Diğer katmanlara ulaşmak normal bilgisayar ve ağ bağlantısı ile mümkün değildir.' ifadesi yer alır."
  },
  {
    id: 148,
    week: "🎯 Sınav Favorisi · 6. Hafta",
    question: "Kali Linux ile yapılan sızma testlerine verilen isim ve bu işletim sisteminin tercih edilme nedeni nedir?",
    options: {
      a: "Pentest (veya Penetrasyon Testi) — İşletim sisteminin çeşitli pentest araçları ile hazır olarak gelmesi",
      b: "SEO Testi — Arama motorlarında üst sıraya çıkması",
      c: "Donanım Testi — Sadece ekran kartı üretmesi",
      d: "Bürokrasi Testi — Mektup ve posta göndermesi",
      e: "Hotspot Testi — Kafelerde internet satması"
    },
    answer: "a",
    explanation: "Slayt 23'te Kali Linux ile sızma testleri (pentest veya penetrasyon testi) yapıldığı ve çeşitli pentest araçları ile geldiği için seçildiği belirtilmiştir."
  },

  // --- 7. HAFTA BANKO SINAV SORULARI ---
  {
    id: 149,
    week: "🎯 Sınav Favorisi · 7. Hafta",
    question: "Aşağıdakilerden hangisi slaytta 5 madde halinde verilen 'Mimarilerine Göre Güvenlik Duvarları (Firewall)' arasında yer almaz?",
    options: {
      a: "Halka (Ring) Seviyesi Filtreleme",
      b: "Proxy Destekli Güvenlik Duvarı",
      c: "Devre Seviyesi Güvenlik Duvarı",
      d: "Statik Paket Filtreleme Güvenlik Duvarı",
      e: "Dinamik Paket Filtreleme ve Melez (Hibrit) Filtreleme"
    },
    answer: "a",
    explanation: "Slayt 18'de Mimarilerine Göre Güvenlik Duvarları tam 5 maddedir: 1. Proxy Destekli, 2. Devre Seviyesi, 3. Statik Paket Filtreleme, 4. Dinamik Paket Filtreleme, 5. Melez Filtreleme. Halka (Ring) ise bir ağ topolojisidir."
  },
  {
    id: 150,
    week: "🎯 Sınav Favorisi · 7. Hafta",
    question: "Aşağıdakilerden hangisi slaytta 5 madde halinde verilen 'Ağ Topolojileri' arasında yer almaz?",
    options: {
      a: "Devre Topolojisi (Circuit)",
      b: "Yol Topolojisi (Bus)",
      c: "Yıldız Topolojisi (Star)",
      d: "Ağaç Topolojisi (Tree) -> Şirketler (Data Center)",
      e: "Halka Topolojisi (Ring) ve Örgü Topolojisi (Mesh) -> WAN -> Maliyetli"
    },
    answer: "a",
    explanation: "Slayt 6'da Ağ Topolojileri tam 5 madde olarak verilmiştir: 1. Yol (Bus), 2. Yıldız (Star), 3. Ağaç (Tree -> Şirketler/Data Center), 4. Halka (Ring), 5. Örgü (Mesh -> WAN/Maliyetli)."
  },
  {
    id: 151,
    week: "🎯 Sınav Favorisi · 7. Hafta",
    question: "Güvenlik duvarlarının (Firewall) 5 mimarisinin çalışma prensipleriyle ilgili aşağıdaki eşleştirmelerden hangisi yanlıştır?",
    options: {
      a: "Devre Seviyesi Güvenlik Duvarı: Sadece büyük şirketlerde çalışanların ekran görüntüsünü kaydetmek için kullanılır.",
      b: "Proxy Destekli: İşlem başlangıç (kullanıcı) ve hedef (internet) arasında yer alır; kullanıcı önce güvenlik duvarına iletilir.",
      c: "Devre Seviyesi: 'Seçici' olarak adlandırılır; asıl amacı bir paketin talep doğrultusunda geçip geçmemesidir.",
      d: "Statik Paket Filtreleme: TCP/UDP kontrollerinden oluşur, aşırı yoğunluk varsa paket geçişine izin vermez, port ve IP bilgilerini saklar.",
      e: "Dinamik Paket Filtreleme: Ek olarak 'takip etme' özelliği vardır, büyük şirketlerde bilgisayar verilerini takip etmek için kullanılır ve TCP protokolüne göre çalışır."
    },
    answer: "a",
    explanation: "Slayt 19-23'e göre Devre Seviyesi 'seçici' olarak adlandırılır ve talep doğrultusunda çalışır; büyük şirketlerde takip etme özelliğiyle kullanılan ise Dinamik Paket Filtrelemedir."
  },
  {
    id: 152,
    week: "🎯 Sınav Favorisi · 7. Hafta",
    question: "Aşağıdakilerden hangisi slaytta 4 ana başlıkta verilen 'Ağ Saldırı Türleri'nden biri değildir?",
    options: {
      a: "Yedekleme (İki sistem arasındaki verinin kopyalanıp korunması)",
      b: "Engelleme (İki sistem arasındaki veri trafiğinin kesilmesi)",
      c: "Dinleme (İki sistem arasındaki veri trafiğinin okunması)",
      d: "Değiştirme (İki sistem arasındaki veri trafiğinin değiştirilmesi)",
      e: "Oluşturma (Dışarıdaki bir kaynaktan yeni bir trafik oluşturulması)"
    },
    answer: "a",
    explanation: "Slayt 25'te Ağ Saldırı Türleri 4 maddedir: 1. Engelleme, 2. Dinleme, 3. Değiştirme, 4. Oluşturma."
  },
  {
    id: 153,
    week: "🎯 Sınav Favorisi · 7. Hafta",
    question: "ARP (Address Resolution Protocol) ile ilgili slaytlarda verilen sayısal değerler ve broadcast mesaj içeriği hangi seçenekte tam ve doğru verilmiştir?",
    options: {
      a: "MAC adresi 48 bit, IP adresi 32 bittir. Broadcast mesajında 3 bilgi bulunur: Gönderenin IP adresi, Gönderenin MAC adresi, MAC adresi öğrenilmek istenen cihazın IP adresi.",
      b: "MAC adresi 32 bit, IP adresi 48 bittir. Broadcast mesajında sadece hedef MAC adresi bulunur.",
      c: "MAC adresi 64 bit, IP adresi 128 bittir. Broadcast mesajında kullanıcı şifresi bulunur.",
      d: "ARP protokolü IP adresi bilinmeyen fakat MAC adresi bilinen cihazların şifresini kırmak için kullanılır.",
      e: "ARP sadece WAN ağlarında fiber optik uydular arasında çalışır."
    },
    answer: "a",
    explanation: "Slayt 27 ve 28'de Ethernet kartlarının 48 bitlik MAC adresi, TCP/IP'nin 32 bitlik IP adresi kullandığı; IP'si bilinen ancak MAC'i bilinmeyen cihaz için yapılan broadcast yayınında bu 3 bilginin bulunduğu belirtilmiştir."
  },
  {
    id: 154,
    week: "🎯 Sınav Favorisi · 7. Hafta",
    question: "Aşağıdakilerden hangisi slaytta 'ARP Spoof (ARP Aldatmaları / ARP Saldırıları)' başlığı altında verilen 3 örnek saldırıdan biridir?",
    options: {
      a: "DoS Attack (Denial of Service), MITM (Man in the Middle Attack), SSL Strip",
      b: "SQL Injection, XML Injection, CSV Injection",
      c: "Meltdown, Spectre, Stuxnet",
      d: "Wordfence, iThemes, Sucuri",
      e: "PAN, LAN, MAN"
    },
    answer: "a",
    explanation: "Slayt 26'da Arp saldırılarına örnek olarak 3 madde verilmiştir: 1. DOS attack, 2. MITM (Man in the Middle Attack), 3. SSL Strip."
  },
  {
    id: 155,
    week: "🎯 Sınav Favorisi · 7. Hafta",
    question: "Yerel ağ saldırılarında kullanılan araçlar ve kavramlarla ilgili aşağıdaki eşleştirmelerden hangisi doğrudur?",
    options: {
      a: "Wireshark (Eski adı Ethereal): 750+ protokolü analiz eder — SSL Strip: HTTPS trafiğini HTTP'ye çevirir — DNS Spoofing (EtterCap): Kurbanı farklı sayfaya yönlendirir — DriftNet: Kurbanın ziyaret ettiği sitelerdeki görsellerin kopyasını verir.",
      b: "Wireshark: Sadece resim kopyalar — DriftNet: HTTPS'i HTTP yapar — EtterCap: Antivirüs programıdır.",
      c: "SSL Strip: HTTP trafiğini HTTPS yapar — Nimda: Güvenlik duvarı yazılımıdır.",
      d: "Ethereal: Kali Linux'un eski adıdır — BackTrack: Wireshark'ın eski adıdır.",
      e: "TeraBIT Virus Maker: Kablosuz ağ şifreleme protokolüdür."
    },
    answer: "a",
    explanation: "Slayt 31-36 arasındaki tüm araç ve saldırı tanımları A şıkkında birebir doğru eşleştirilmiştir."
  },
  {
    id: 156,
    week: "🎯 Sınav Favorisi · 7. Hafta",
    question: "Yerel veya internet ağı üzerinde hızlıca yayılabilen 'Ağ Virüsleri' kategorisinde tarihte en çok nam salmış iki virüs ile virüs oluşturmak için incelenen yazılım/anahtar kelime hangisidir?",
    options: {
      a: "Meşhur Ağ Virüsleri: Nimda ve SQLSammer (SQLSlammer) — Yazılım/Keyword: .Bat formatlı virüsler ve TeraBIT Virus Maker (Virus Maker)",
      b: "Meşhur Ağ Virüsleri: Meltdown ve Spectre — Keyword: PLC",
      c: "Meşhur Ağ Virüsleri: Norton ve McAfee — Keyword: Endpoint",
      d: "Meşhur Ağ Virüsleri: TKIP ve AES — Keyword: Wireless",
      e: "Meşhur Ağ Virüsleri: Joomla ve Drupal — Keyword: CMS"
    },
    answer: "a",
    explanation: "Slayt 35'te tarihte en çok nam salmış iki ağ virüsünün Nimda ve SQLSammer olduğu, ayrıca .Bat formatlı virüsler ve TeraBIT Virus Maker (Keyword: Virus Maker) yazılımları belirtilmiştir."
  },
  {
    id: 157,
    week: "🎯 Sınav Favorisi · 7. Hafta",
    question: "Aşağıdakilerden hangisi 'Kablolu ve Kablosuz Ağlarda Güvenlik' slaytında verilen 5 önlemden biri değildir?",
    options: {
      a: "Modemde tüm portları açık bırakmak ve evrensel (varsayılan) modem şifresini hiç değiştirmemek",
      b: "Modem şifrelerini başka kişiler ile kullanmamak",
      c: "Kafe, restoran, otel veya alışveriş merkezi iseniz kesinlikle hotspot teknolojisi kullanmak",
      d: "Ortak ağlarda kredi kartı ile alışveriş yapmamak veya önemli bilgileri paylaşmamak",
      e: "Gerekmiyorsa modemde port açmamak/açık portları kapatmak ve Evrensel Modem Şifresini değiştirmek"
    },
    answer: "a",
    explanation: "Slayt 11'de bu 5 güvenlik kuralı maddelenmiştir; portlar kapatılmalı ve evrensel modem şifresi mutlaka değiştirilmelidir."
  },
  {
    id: 158,
    week: "🎯 Sınav Favorisi · 7. Hafta",
    question: "Halka açık kablosuz ağlarda ağ yöneticilerinin bilgisayara sızması durumunda erişim seviyesi nedir ve ortak ağlarda MITM saldırılarından korunma yöntemi nedir?",
    options: {
      a: "Ağ yoluyla bağlandıklarında 'root erişimi' yapamazlar ve sistem dosyalarının yer aldığı yere sızamazlar; MITM'den korunma yöntemi ise ortak ağlarda HTTPS gibi şifrelenmiş protokoller kullanmaktır.",
      b: "Halka açık ağ yöneticileri doğrudan 'root erişimi' yapar ve sistem dosyalarını siler; korunma yöntemi HTTP kullanmaktır.",
      c: "Halka açık ağlarda hiçbir tehlike yoktur.",
      d: "WEP şifrelemesi WPA2, TKIP ve AES'ten daha güvenlidir.",
      e: "MAC adres filtrelemesi sadece halka açık kafelerde müşterileri engellemek için kullanılır."
    },
    answer: "a",
    explanation: "Slayt 13'te 'root erişimi yapamazlar ve sistem dosyalarının yer aldığı yere sızma işlemi yapılamaz', Slayt 30'da ise MITM korunma yöntemi olarak 'ortak ağlarda HTTPS gibi şifrelenmiş protokoller üzerinden veri akışının sağlanması' belirtilmiştir."
  },
  {
    id: 159,
    week: "🎯 Sınav Favorisi · 7. Hafta",
    question: "Li-Fi ve Wi-Fi karşılaştırma tablosundaki 6 parametreye göre aşağıdaki bilgilerden hangisi yanlıştır?",
    options: {
      a: "Ağ Topolojisi (Network topology): Li-Fi Halka (Ring), Wi-Fi ise Ağaç (Tree) topolojisi kullanır.",
      b: "Hız (Speed): Li-Fi > 1 GB/s iken, Wi-Fi ~150 mb/s civarındadır.",
      c: "Veri Taşıma Ortamı: Li-Fi ışığı (light), Wi-Fi radyo spektrumunu kullanır.",
      d: "Spektrum Aralığı: Görünür ışık, radyo dalgalarından 10.000 kat daha fazla spektrum aralığına sahiptir.",
      e: "Maliyet ve Frekans: Li-Fi daha ucuzdur (Cheaper) ve Yüzlerce Tera Hz frekansta çalışır; Wi-Fi daha pahalıdır (Expensive) ve 2.4 GHz'de çalışır."
    },
    answer: "a",
    explanation: "Slayt 10'daki tabloya göre 5. satırda Network Topology parametresi hem Li-Fi hem de Wi-Fi için 'Point-to-Point' (Noktadan Noktaya) olarak verilmiştir."
  },
  {
    id: 160,
    week: "🎯 Sınav Favorisi · 7. Hafta",
    question: "Ağların kullanım alanları, iletişim çeşitleri ve sınıflandırılması ile ilgili aşağıdakilerden hangisi yanlıştır?",
    options: {
      a: "Ağlar arasında sadece tek yönlü analog iletişim vardır; seri ve paralel iletişim bulunmaz.",
      b: "Network eskiden sadece askeri alanda kullanılmaktaydı; günümüzde Askeri, Devlet, Ekonomi ve Eğlence olmak üzere 4 ana alanda kullanılır.",
      c: "Ağlar genel olarak 3'e ayrılır (LAN, WAN, VPN) fakat şu an için 11 adet ağ çeşidi bulunmaktadır.",
      d: "Ağlar arasında 'seri iletişim' ve 'paralel iletişim' olmak üzere iki çeşit iletişim bulunmaktadır.",
      e: "Yapılarına göre güvenlik duvarları Donanımsal (modem, router) ve Yazılımsal (Norton, McAfee) olarak 2'ye ayrılır."
    },
    answer: "a",
    explanation: "Slayt 6'da 'Ağlar arasında iki çeşit iletişim bulunmaktadır. Bunlar seri iletişim ve paralel iletişimdir.' denmektedir."
  }
];

// ============================================================================
// 🔥 ZOR VE ŞAŞIRTMALI (TUZAKLI / ÖNCÜLLÜ) SINAV SORULARI (30 SORU)
// (Birbirine çok benzeyen kavramlar, sayısal şaşırtmacalar ve I-II-III soruları)
// ============================================================================
const HARD_QUESTIONS = [
  {
    id: 201,
    week: "🔥 Zor & Tuzaklı · 7. Hafta",
    question: "DİKKAT (Sayısal Tuzak): ARP protokolü ve adresleme ile ilgili aşağıdaki ifadelerden hangisi doğrudur?\nI. Ethernet arayüzüne sahip ağ kartları haberleşmek için 32 bitlik MAC adresi kullanır.\nII. TCP/IP protokolü haberleşmek için 48 bitlik IP adresi kullanır.\nIII. Yerel ağda IP adresi bilinen ancak MAC adresi bilinmeyen cihazın tespiti için ARP broadcast yayını yapılır.",
    options: {
      a: "Yalnız III",
      b: "I ve II",
      c: "I ve III",
      d: "II ve III",
      e: "I, II ve III"
    },
    answer: "a",
    explanation: "ŞAŞIRTMACA: I ve II'de bit sayıları ters verilmiştir! Doğrusu: MAC adresi 48 bit, IP adresi ise 32 bittir. Sadece III. öncül doğrudur."
  },
  {
    id: 202,
    week: "🔥 Zor & Tuzaklı · 5. Hafta",
    question: "DİKKAT (İzin Tuzağı): Wordpress dosya ve klasör izinleri ile ilgili aşağıdakilerden hangisi doğrudur?\nI. `wp-admin/`, `wp-includes/`, `wp-content/themes/` ve `wp-content/plugins/` izinleri 755 olmalıdır.\nII. `wp-config.php`, `.htaccess` ve `wp-admin/index.php` izinleri 644 olmalıdır.\nIII. Sürüm gizlemek için `wp-config.php` dosyasına `safe_mode = off;` yazılır.",
    options: {
      a: "I ve II",
      b: "Yalnız I",
      c: "Yalnız III",
      d: "II ve III",
      e: "I, II ve III"
    },
    answer: "a",
    explanation: "ŞAŞIRTMACA: I ve II doğrudur (Klasörler 755, dosyalar 644). Ancak III yanlıştır: Sürüm gizlemek için theme klasöründeki `function.php` dosyasına `remove_action('wp_head', 'wp_generator');` yazılır (`safe_mode off` ise RFI/Shell saldırısının yaptığı şeydir)."
  },
  {
    id: 203,
    week: "🔥 Zor & Tuzaklı · 7. Hafta",
    question: "DİKKAT (Kavram Karşılaştırması): 'Statik Paket Filtreleme' ile 'Dinamik Paket Filtreleme' güvenlik duvarları arasındaki farklarla ilgili hangisi yanlıştır?",
    options: {
      a: "Statik paket filtreleme sadece TCP protokolüne göre çalışır ve büyük şirketlerde çalışanları takip etmek için kullanılır.",
      b: "Statik paket filtreleme TCP/UDP kontrollerinden oluşur ve aşırı yoğunluk varsa paket geçişine izin vermez.",
      c: "Statik paket filtrelemede port bilgileri ve IP bilgileri saklanır.",
      d: "Dinamik paket filtrelemede ek özellik olarak 'takip etme' özelliği bulunmaktadır.",
      e: "Dinamik paket filtreleme daha çok büyük şirketlerde kullanılır ve TCP protokolüne göre çalışır."
    },
    answer: "a",
    explanation: "ŞAŞIRTMACA: A şıkkındaki özellikler Statik değil, Dinamik Paket Filtrelemeye aittir! Statik olan TCP/UDP kontrolü ve yoğunluk kontrolü yapar; Dinamik olan ise TCP'ye göre çalışır ve büyük şirketlerde takip etme özelliği sunar."
  },
  {
    id: 204,
    week: "🔥 Zor & Tuzaklı · 5. Hafta",
    question: "DİKKAT (Web Açıkları Karşılaştırması): Aşağıdaki web güvenliği açıklarından hangisinin açıklaması YANLIŞ eşleştirilmiştir?",
    options: {
      a: "Cross Site Scripting (XSS): Uzaktan Shell dosyası yükleyerek sunucuda safe mode off yapma açığıdır.",
      b: "SQL Injection: Structured Query Language Injection olup veritabanına yetkisiz sızma açığıdır.",
      c: "Cross Site Reference Forgery (XSRF/CSRF): Siteye entegre kod ('hostile linking') şeklinde çalışır, en çok Opera tarayıcısında görülür.",
      d: "Remote File Include (RFI): Uzaktan zararlı Shell dosyaları yükleyerek sunucudaki tüm siteleri etkileyebilen açıktır.",
      e: "Social Media Authentication: Sosyal medya veya popüler mail hesaplarıyla sitelere otomatik üye olma özelliğidir."
    },
    answer: "a",
    explanation: "ŞAŞIRTMACA: Uzaktan Shell dosyası yükleyip safe mode off yapmak XSS değil, Remote File Include (RFI) açığıdır! XSS (Çapraz Kod Çalıştırma) dinamik web uygulamalarında POST/GET kullanılan arama, galeri ve yorum alanlarında görülür."
  },
  {
    id: 205,
    week: "🔥 Zor & Tuzaklı · 6. Hafta",
    question: "DİKKAT (Deep Web Katman Tuzağı): Deep Web katmanları ile ilgili aşağıdaki ifadelerden hangileri doğrudur?\nI. Normal tarayıcılardan (standart browserlardan) ulaşılabilen son katman Katman 2 (Bergie Web)'dir.\nII. Katman 3'ün Proxy Web kısmında `.onion` uzantılı siteler yer alır ve sadece Tor Browser ile girilir.\nIII. Katman 4 (Character Web) kendi içinde Tor Browser kısmı ve özel cihaz/router gerektiren CSS (Closed Shell System) olarak ikiye ayrılır.",
    options: {
      a: "I ve III",
      b: "Yalnız I",
      c: "I ve II",
      d: "II ve III",
      e: "I, II ve III"
    },
    answer: "a",
    explanation: "ŞAŞIRTMACA: II. öncül yanlıştır! Katman 3'ün Proxy Web kısmında `.onion` uzantılı siteler YOKTUR ve Tor Browser yüklemeden ulaşılabilir (`.onion` uzantılı siteler Katman 3'ün Tor Browser kısmındadır). I ve III doğrudur."
  },
  {
    id: 206,
    week: "🔥 Zor & Tuzaklı · 6. Hafta",
    question: "DİKKAT (Katman 5 vs Katman 6 vs Katman 8): Üst düzey Deep Web katmanları arasındaki farklarla ilgili aşağıdakilerden hangisi YANLIŞTIR?",
    options: {
      a: "Katman 6'ya Google D-Wave 2X kuantum bilgisayarları ile kolayca erişim sağlanmıştır ve başı ile sonu tamamen belirlidir.",
      b: "Katman 5 (Marianas Web) adını Mariana Çukuru'ndan alır ve ulaşmak için kuantum teknolojisi ile yapılmış süper bilgisayarlara ihtiyaç vardır.",
      c: "Katman 6'nın sınırları belirlidir fakat başı ve sonu belirli değildir; en gelişmiş teknoloji olan kuantum teknolojisi ile bile erişim sağlanamamıştır.",
      d: "Katman 7 (The Fog / Virus Soup) seviyesine ulaşan insanların bir üst seviyeye ulaşılmaması için birbirleriyle savaşmaya başlayacakları söylenir.",
      e: "Katman 8 (The Primarch System) bilinen en son katmandır, 'İnternetin Patronu' olarak adlandırılır ve Level 17 Quantum TR.001 Level Function Lock kullanır."
    },
    answer: "a",
    explanation: "ŞAŞIRTMACA: Slayt 18'e göre Katman 6'nın sınırları belirlidir fakat başı ve sonu belirli DEĞİLDİR ve en gelişmiş teknoloji olan kuantum teknolojisi ile bile erişim SAĞLANAMAMIŞTIR!"
  },
  {
    id: 207,
    week: "🔥 Zor & Tuzaklı · 7. Hafta",
    question: "DİKKAT (Araç İsimleri Tuzağı): Kali Linux ve ağ güvenliğinde kullanılan aşağıdaki araçlardan hangilerinin görevi DOĞRU verilmiştir?\nI. EtterCap: Yerel ağda DNS Spoofing yaparak kurbanı farklı sayfaya yönlendirmek için kullanılır.\nII. DriftNet: Kurbanın ziyaret ettiği sitelerdeki her türlü görselin (resmin) bir kopyasını verir.\nIII. SSL Strip: Şifresiz HTTP trafiğini şifreli HTTPS trafiğine dönüştürerek güvenliği artırır.",
    options: {
      a: "I ve II",
      b: "Yalnız I",
      c: "I ve III",
      d: "II ve III",
      e: "I, II ve III"
    },
    answer: "a",
    explanation: "ŞAŞIRTMACA: III. öncül tam tersidir! SSL Strip ('soymak'), şifreli bir HTTPS trafiği gördüğünde bunu şifresiz HTTP'li hale getirir. I ve II doğrudur."
  },
  {
    id: 208,
    week: "🔥 Zor & Tuzaklı · 1-2. Hafta",
    question: "DİKKAT (CIA Triad vs AAA Konsepti): Aşağıdakilerden hangisinde CIA Triad unsuru ile AAA Konsepti unsuru birbirine KARIŞTIRILMIŞTIR?",
    options: {
      a: "Availability (Kullanılabilirlik), Erişim Kontrolündeki AAA Konseptinin üçüncü aşamasıdır.",
      b: "Confidentiality (Gizlilik), CIA Triad modelinin bir unsurudur ve yetkisiz erişimi engelleyen şemaya Erişim Kontrolü denir.",
      c: "Integrity (Bütünlük), CIA Triad modelinin bir unsurudur ve MD5 Check / Hash kontrolü ile doğrulanır.",
      d: "Authentication (Kimlik Doğrulama) ve Authorization (Yetkilendirme), AAA Konseptinin ilk iki aşamasıdır.",
      e: "Accounting (Aktivite İzlenmesi), AAA Konseptinin üçüncü aşamasıdır."
    },
    answer: "a",
    explanation: "ŞAŞIRTMACA: Availability (Kullanılabilirlik) AAA Konseptinin değil, CIA Triad modelinin (Confidentiality, Integrity, Availability) bir unsurudur! AAA Konsepti: Authentication, Authorization ve Accounting'dir."
  },
  {
    id: 209,
    week: "🔥 Zor & Tuzaklı · 1-2. Hafta",
    question: "DİKKAT (Siber Terörizm vs Siber Savaş vs Siber Casusluk): Slaytlardaki tanımlara göre aşağıdakilerden hangisi YANLIŞTIR?",
    options: {
      a: "Siber Casuslukta temel amaç karşı devletin elektrik şebekesini DDoS ile çökertip kesinti yaratmaktır; bilgi çalınmaz.",
      b: "Siber Terörizmde ideolojik veya politik amaçlar için bilgi teknolojileri yıkıcı bir şekilde kullanılır.",
      c: "Siber Savaş, bir devletin başka bir devletin bilgisayar sistemlerine veya ağlarına hasar vermek ya da kesinti yaratmak üzere gerçekleştirdiği sızma faaliyetleridir.",
      d: "Siber Casusluk, sahiplerinin izni olmaksızın gizli bilgi edinmek için bilgi teknolojisi kullanmadır.",
      e: "Kızgın çalışanların kurum verisini sızdırması İç Tehdit, dışarıdan sunucu veritabanının çalınması Dış Tehdittir."
    },
    answer: "a",
    explanation: "ŞAŞIRTMACA: Siber Casusluğun tanımı 'Sahiplerinin izni olmaksızın gizli bilgi edinmek için bilgi teknolojisi kullanma'dır (kimlik, banka, kurum bilgileri vb.). Hasar vermek veya kesinti yaratmak Siber Savaşın tanımıdır."
  },
  {
    id: 210,
    week: "🔥 Zor & Tuzaklı · 7. Hafta",
    question: "DİKKAT (Topoloji Tuzağı): Slayt 6'da verilen Ağ Topolojileri ve kullanım yerleri ile ilgili aşağıdakilerden hangisi doğrudur?\nI. Ağaç Topolojisi (Tree) -> Şirketler (Data Center)\nII. Örgü Topolojisi (Mesh) -> WAN -> Maliyetli\nIII. Li-Fi ve Wi-Fi ağ topolojisi olarak Point-to-Point kullanır.",
    options: {
      a: "I, II ve III",
      b: "Yalnız I",
      c: "I ve II",
      d: "II ve III",
      e: "Yalnız III"
    },
    answer: "a",
    explanation: "Her üç öncül de 7. Hafta slaytlarında (Slayt 6 ve Slayt 10) birebir yer almaktadır ve tamamı doğrudur."
  },
  {
    id: 211,
    week: "🔥 Zor & Tuzaklı · 3-4. Hafta",
    question: "DİKKAT (Alfa/Beta Tuzağı): Yazılım sürümleri (Alfa ve Beta) ile ilgili 3-4. Hafta ve 5. Hafta slaytlarında verilen bilgilerden hangisi doğrudur?",
    options: {
      a: "Kritik sistemlerde (sunucu/işletim sistemi) Alfa veya Beta sürümlerinin kurulması doğru değildir; ancak web tabanlı uygulamalar yayınlanırken test aşamasında hataları görmek için Alfa veya Beta sürümleri yayınlanabilir (Gmail örneği).",
      b: "Hem kritik işletim sistemlerinde hem de askeri sunucularda sadece Alfa sürümleri kullanılmalıdır.",
      c: "Web tabanlı uygulamalarda test aşamasında asla Beta sürümü yayınlanamaz.",
      d: "Gmail hiçbir zaman Beta sürümü yayınlamamıştır.",
      e: "Alfa ve Beta sürümleri donanımsal güvenlik duvarı çeşitleridir."
    },
    answer: "a",
    explanation: "İki haftanın slaytlarını birleştiren harika bir sınav sorusu: 3-4. Hafta Slayt 4'te 'Kritik sistemlerde yazılımların Alfa veya Beta sürümlerinin kurulması doğru değildir', 5. Hafta Slayt 6'da ise 'Web tabanlı uygulamalarda gerekirse test aşamasında Alfa veya Beta sürümleri yayınlanabilir (Gmail örneği)' denmektedir."
  },
  {
    id: 212,
    week: "🔥 Zor & Tuzaklı · 7. Hafta",
    question: "DİKKAT (Halka Açık Ağ Tuzağı): Halka açık kablosuz ağlarda bir ağ yöneticisi bilgisayarımıza ağ yoluyla izinsiz bağlandığında aşağıdakilerden hangisini YAPAMAZ?",
    options: {
      a: "Root erişimi yapamaz ve sistem dosyalarının yer aldığı yere sızma işlemi yapamaz.",
      b: "Bilgisayara belli bir seviyeye kadar erişim sağlayamaz.",
      c: "Ağ trafiğini izleyemez.",
      d: "Şifrelenmemiş HTTP paketlerini göremez.",
      e: "Ağ yöneticisi olarak ağdaki cihazları göremez."
    },
    answer: "a",
    explanation: "7. Hafta Slayt 13'te özellikle vurgulanmıştır: 'Bilgisayarımıza ağ yoluyla bağlandıkları zaman root erişimi yapamazlar ve erişim belli seviyeye kadar sağlanmış olur. Sistem dosyalarının yer aldığı yere sızma işlemi yapılamaz.'"
  },
  {
    id: 213,
    week: "🔥 Zor & Tuzaklı · 7. Hafta",
    question: "DİKKAT (ARP Broadcast Tuzağı): Yerel ağda yapılan ARP broadcast yayınındaki mesajda aşağıdaki bilgilerden hangisi BULUNMAZ?",
    options: {
      a: "MAC adresi öğrenilmek istenen (hedef) cihazın MAC adresi",
      b: "Mesajı gönderen (kaynak) cihazın IP adresi",
      c: "Mesajı gönderen (kaynak) cihazın MAC adresi",
      d: "MAC adresi öğrenilmek istenen (hedef) cihazın IP adresi",
      e: "Kaynak IP ve Kaynak MAC bilgisi"
    },
    answer: "a",
    explanation: "ŞAŞIRTMACA: ARP broadcast yayını zaten hedef cihazın BİLİNMEYEN MAC adresini öğrenmek için yapılır (`Hedef MAC: ?`)! Dolayısıyla mesajda gönderenin IP'si, gönderenin MAC'i ve hedefin IP'si bulunur; hedefin MAC adresi henüz bilinmediği için bulunmaz."
  },
  {
    id: 214,
    week: "🔥 Zor & Tuzaklı · 7. Hafta",
    question: "DİKKAT (Eski İsim Tuzağı): Slaytlarda geçen 'Kali Linux' ve 'WireShark' yazılımlarının eski isimleri (öncülleri) hangi seçenekte doğru sırada verilmiştir?",
    options: {
      a: "Kali Linux'un öncülü: BackTrack — WireShark'ın eski ismi: Ethereal",
      b: "Kali Linux'un öncülü: Ethereal — WireShark'ın eski ismi: BackTrack",
      c: "Kali Linux'un öncülü: EtterCap — WireShark'ın eski ismi: DriftNet",
      d: "Kali Linux'un öncülü: Nimda — WireShark'ın eski ismi: SQLSammer",
      e: "Kali Linux'un öncülü: Solaris — WireShark'ın eski ismi: Norton"
    },
    answer: "a",
    explanation: "ŞAŞIRTMACA: B şıkkında isimler ters verilmiştir! Doğrusu: Kali Linux 2013'te BackTrack yapımcıları tarafından oluşturulmuştur; WireShark'ın eski ismi ise Ethereal'dır."
  },
  {
    id: 215,
    week: "🔥 Zor & Tuzaklı · 7. Hafta",
    question: "DİKKAT (Kablosuz Şifreleme Tuzağı): Kablosuz ağ (Wireless) şifreleme protokolleri ile ilgili aşağıdaki ifadelerden hangileri doğrudur?\nI. WEP şifreleme türü çok daha rahat kırılabilen bir şifreleme türüdür.\nII. WPA/WPA2, TKIP (Geçici Anahtar Bütünlüğü Protokolü) ve AES yüksek düzeyde şifreleme türleridir.\nIII. Modem üzerinden MAC adres filtrelemesi yapılarak sadece MAC adresi kayıtlı cihazlara erişim izni verilebilir.",
    options: {
      a: "I, II ve III",
      b: "Yalnız I",
      c: "I ve II",
      d: "II ve III",
      e: "Yalnız III"
    },
    answer: "a",
    explanation: "7. Hafta Slayt 15'te yer alan her üç ifade de tamamen doğrudur."
  },
  {
    id: 216,
    week: "🔥 Zor & Tuzaklı · 5. Hafta",
    question: "DİKKAT (Bug Researcher Tuzağı): 5. Hafta Slayt 9'a göre kötü niyetli Bug Researcher'ların (siyah şapkalıların) çalışma prensibi hakkında hangisi doğrudur?",
    options: {
      a: "İlk olarak sistemlerdeki 'en çok bilinen hataları' bulmayı hedeflerler; çünkü bilinen hatalar ile sistemi sabote etmek çok daha kolaydır, yeni bulunan bir açığın (örn. Meltdown ve Spectre) kullanımı ise zaman alabilir.",
      b: "Bilinen hatalarla hiç ilgilenmezler, yalnızca daha önce hiç kimsenin duymadığı donanım açıklarını kullanırlar.",
      c: "Meltdown ve Spectre açıklarını kullanmak bilinen basit hataları kullanmaktan çok daha kolay ve hızlıdır.",
      d: "Buldukları tüm açıkları ücretsiz olarak şirketlerin güvenlik departmanlarına bildirirler.",
      e: "Sadece statik HTML sitelerde bug ararlar."
    },
    answer: "a",
    explanation: "Slayt 9'da 'Kötü niyetli bug researcher'lar ilk olarak sistemlerdeki en çok bilinen hataları bulmayı hedefler... Yeni bulunan bir açığın kullanımı hackerlar için zaman alabilir. Örnek: Meltdown ve Spectre' denmektedir."
  },
  {
    id: 217,
    week: "🔥 Zor & Tuzaklı · 1-2. Hafta",
    question: "DİKKAT (Tarih ve Olay Eşleştirmesi): 1-2. Hafta ve 5. Hafta slaytlarında geçen yıllar ve olaylarla ilgili aşağıdaki eşleştirmelerden hangisi YANLIŞTIR?",
    options: {
      a: "2018: Adobe Flash uygulamasına desteğin durdurulduğu yıldır.",
      b: "2007: Estonya'da 'Tallinn'in Bronz Askeri' anıtı olayları sırasında ilk ciddi internet savaşının (DDoS) yaşandığı yıldır.",
      c: "2008: Rusya'nın virüslü bir hafıza kartıyla ABD komuta merkezine sızdığı ve Gürcistan iletişim altyapısını çökerttiği yıldır.",
      d: "2013: Kali Linux işletim sisteminin BackTrack yapımcıları tarafından oluşturulduğu yıldır.",
      e: "2016: Rusya'nın ABD Başkanlık seçimlerine müdahale ettiği (manipüle ettiği) yıldır."
    },
    answer: "a",
    explanation: "ŞAŞIRTMACA: Adobe Flash desteğinin durdurulduğu tarih 12 Ağustos 2012'dir! 2018 yılı ise Intel, ARM ve AMD işlemcilerde Spectre ve Meltdown donanım açıklarının keşfedildiği yıldır."
  },
  {
    id: 218,
    week: "🔥 Zor & Tuzaklı · 7. Hafta",
    question: "DİKKAT (Güvenlik Duvarı Mimarileri): 'Bir talep doğrultusunda çalışan, seçici olarak adlandırılabilen ve asıl amacı bir paketin talep doğrultusunda geçip geçmemesi olan' güvenlik duvarı mimarisi ile 'başlangıç ve hedef arasında yer alan' güvenlik duvarı mimarisi sırasıyla hangileridir?",
    options: {
      a: "Devre Seviyesi Güvenlik Duvarı — Proxy Destekli Güvenlik Duvarı",
      b: "Statik Paket Filtreleme — Dinamik Paket Filtreleme",
      c: "Melez Güvenlik Duvarı — Donanımsal Güvenlik Duvarı",
      d: "Dinamik Paket Filtreleme — Devre Seviyesi Güvenlik Duvarı",
      e: "Proxy Destekli Güvenlik Duvarı — Statik Paket Filtreleme"
    },
    answer: "a",
    explanation: "Slayt 19 ve 20'ye göre: Talep doğrultusunda çalışan ve 'seçici' olarak adlandırılan Devre Seviyesi Güvenlik Duvarıdır; başlangıç ve hedef arasında yer alan ise Proxy Destekli Güvenlik Duvarıdır."
  },
  {
    id: 219,
    week: "🔥 Zor & Tuzaklı · 5. Hafta",
    question: "DİKKAT (CMS ve Eklenti Tuzağı): Aşağıdakilerden hangisinde 'Açık Kaynaklı CMS Yazılımları' ile 'Wordpress Güvenlik Tarama Tool'ları' doğru eşleştirilmiştir?",
    options: {
      a: "CMS: Wordpress, Joomla, Drupal, Magento, TYPO3 — Güvenlik Tarama Tool'ları: sitecheck.sucuri.net, siteguarding.com, suip.biz, hackertarget.com",
      b: "CMS: Wordfence, iThemes, Acunetix — Güvenlik Tarama Tool'ları: Joomla, Drupal, Magento",
      c: "CMS: Wireshark, EtterCap, DriftNet — Güvenlik Tarama Tool'ları: Nimda, SQLSammer",
      d: "CMS: Norton, McAfee, NetBarrier — Güvenlik Tarama Tool'ları: Tor, Onion, Proxy",
      e: "CMS: HTML5, CSS3, jQuery — Güvenlik Tarama Tool'ları: POST, GET"
    },
    answer: "a",
    explanation: "ŞAŞIRTMACA: B şıkkındaki Wordfence, iThemes ve Acunetix birer CMS değil, Wordpress güvenlik eklentisidir! Açık kaynaklı 5 önemli CMS: Wordpress, Joomla, Drupal, Magento ve TYPO3'tür."
  },
  {
    id: 220,
    week: "🔥 Zor & Tuzaklı · 7. Hafta",
    question: "DİKKAT (Ağ Saldırı Türleri Tanım Tuzağı): Slayt 25'teki 4 temel ağ saldırı türünden 'Dinleme' ve 'Oluşturma' için aşağıdakilerden hangisi doğrudur?",
    options: {
      a: "Dinleme: İki sistem arasındaki veri trafiği okunabilir ve karşı tarafa aynı şekilde gönderilebilir — Oluşturma: Dışarıdaki bir kaynaktan yeni bir trafik oluşturulabilir.",
      b: "Dinleme: İki sistem arasındaki veri trafiği tamamen kesilir — Oluşturma: Mevcut paketler silinir.",
      c: "Dinleme: Sadece donanımsal arızaları onarır — Oluşturma: Yeni bir güvenlik duvarı kurar.",
      d: "Dinleme: Veri trafiğini şifreler — Oluşturma: Yedek alır.",
      e: "Dinleme ve Oluşturma birer ağ topolojisi çeşididir."
    },
    answer: "a",
    explanation: "Slayt 25'te 4 ağ saldırı türü: Engelleme (kesilebilir), Dinleme (okunabilir ve karşı tarafa aynı şekilde gönderilebilir), Değiştirme (değiştirilebilir) ve Oluşturma (dışarıdaki bir kaynaktan yeni bir trafik oluşturulabilir) olarak tanımlanmıştır."
  }
];



