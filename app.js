/**
 * uemmet.de - İslami Cenaze Hizmetleri & Bestattungen
 * Interactive UI & Language Switching Engine
 */

// Language Data Translations (Turkish & German)
const translations = {
  tr: {
    topBarEmergency: "24/7 Acil Cenaze Hattı:",
    topBarLocation: "Tüm Almanya & Uluslararası Nakil",
    navHome: "Ana Sayfa",
    navServices: "Hizmetlerimiz",
    navChecklist: "Cenaze Anında",
    navCoverage: "Bölgelerimiz",
    navAbout: "Hakkımızda",
    navContact: "İletişim",
    navEmergencyBtn: "24/7 Acil Arama",

    heroBadge: "Almanya Geneli 7/24 İslami Cenaze Hizmetleri",
    heroTitle: "Acı Gününüzde Saygı ve Dualarla <span>Yanınızdayız</span>",
    heroSubtitle: "Almanya genelinde ve Türkiye'ye cenaze nakli, İslami usullere uygun yıkama, kefenleme, resmi evrak takibi ve defin organizasyonu.",
    heroCallBtn: "24/7 Acil Yardım Alın",
    heroGuideBtn: "Vefat Anında Ne Yapılmalı?",
    
    feat1: "İslami Usullere Tam Uygunluk",
    feat2: "Resmi Evrak & Konsolosluk Takibi",
    feat3: "7/24 Kesintisiz Destek",

    emergencyTitle: "Vefat Durumunda Hemen Bizi Arayın",
    emergencySubtitle: "Zaman kaybetmeden 24 saat ulaşılabilecek acil destek ekibimiz tüm işlemleri üstlenir.",
    emergencyBtn: "📞 Acil Arama Yap",

    servicesSub: "Eksiksiz & Güvenilir",
    servicesTitle: "Cenaze Hizmetlerimiz",
    servicesDesc: "Acınızı paylaşıyor, tüm dini vecibeleri ve hukuki süreçleri titizlikle yerine getiriyoruz.",

    service1Title: "İslami Yıkama & Kefenleme",
    service1Desc: "Tecrübeli din görevlileri ve bayan/bay gassallarımız eşliğinde İslami kurallara ve sünnete tam uygun yıkama ve kefenleme hizmeti.",
    service1Item1: "Bayan ve Erkek Gassal Seçeneği",
    service1Item2: "Helalleşme ve Dua Alanı",
    service1Item3: "Steril ve Hijyenik Ortam",

    service2Title: "Uluslararası Cenaze Nakli",
    service2Desc: "Almanya'nın her noktasından Türkiye'ye ve diğer ülkelere havayolu veya karayolu ile hızlı ve güvenli cenaze nakli.",
    service2Item1: "Konsolosluk & Uçak İzinleri",
    service2Item2: "Özel İklimlendirmeli Nakil Araçları",
    service2Item3: "Havaalanı Karşılama ve Teslimat",

    service3Title: "Resmi Evrak & Bürokratik Takip",
    service3Desc: "Alman makamları (Standesamt), ölüm belgesi (Sterbeurkunde), belediye ve konsolosluk işlemlerinin tamamı tarafımızca yürütülür.",
    service3Item1: "Ölüm Belgesi Çıkarılması",
    service3Item2: "Uluslararası Transit İzinleri",
    service3Item3: "Tüm Resmi Harç ve İşlemler",

    service4Title: "Almanya'da Defin Hizmetleri",
    service4Desc: "Almanya'daki Müslüman mezarlıklarında veya özel İslami parsellerde dini merasim ile defin organizasyonu.",
    service4Item1: "Mezarlık Yeri Temini",
    service4Item2: "Cenaze Namazı Organizasyonu",
    service4Item3: "Mezar Yapımı ve Bakımı",

    checklistSub: "Rehber & Adım Adım",
    checklistTitle: "Vefat Anında Ne Yapılmalı?",
    checklistDesc: "Yakınınızı kaybettiğiniz ilk andan itibaren izlemeniz gereken adımlar:",

    step1Title: "1. Doktor Çağrılması",
    step1Desc: "Evde vefat durumunda ilk olarak ev doktoru veya acil doktor (112) çağrılarak Ölüm Raporu (Sterbeurkunde) alınır.",

    step2Title: "2. uemmet.de Arama",
    step2Desc: "7/24 hizmet veren acil numaramızı arayarak konumunuzu bildirin. Ekibimiz anında harekete geçer.",

    step3Title: "3. Evrak Hazırlığı",
    step3Desc: "Müteveffanın Kimlik/Pasaport, Evlilik Cüzdanı ve Doğum Belgesi gibi evrakları hazırlanır.",

    step4Title: "4. Dini Vecibeler & Defin",
    step4Desc: "Cenaze nakil aracımızla alınarak yıkama, kefenleme, cenaze namazı ve defin/nakil işlemleri gerçekleştirilir.",

    coverageSub: "Hizmet Ağımız",
    coverageTitle: "Tüm Almanya ve Türkiye'ye Cenaze Nakli",
    coverageDesc: "Almanya'nın tüm eyalet ve şehirlerinden 24 saat içinde cenaze alımı ve işlemleri gerçekleştirilir.",
    coverageCardTitle: "Neden uemmet.de?",
    coverageCard1: "Yılların getirdiği tecrübe ve hassasiyet",
    coverageCard2: "Şeffaf ve net fiyat politikası",
    coverageCard3: "Almanca ve Türkçe tam rehberlik ve destek",
    coverageCard4: "24 Saat kesintisiz acil telefon hattı",

    faqSub: "Merak Edilenler",
    faqTitle: "Sıkça Sorulan Sorular",
    
    faqQ1: "Cenaze nakil süreci ne kadar sürer?",
    faqA1: "Alman makamlarından resmi evrakların (Sterbeurkunde ve Leichenpass) alınmasına müteakip genellikle 24 ila 48 saat içerisinde cenaze nakli tamamlanmaktadır.",

    faqQ2: "Cenaze yıkama ve kefenleme işlemleri kimler tarafından yapılır?",
    faqA2: "İslami usul ve esaslara uygun olarak tecrübeli bay ve bayan din görevlilerimiz (gassallarımız) gözetiminde titizlikle gerçekleştirilir.",

    faqQ3: "Cenaze fonu veya sigortası geçerli midir?",
    faqA3: "Evet, Almanya veya Türkiye menşeili tüm cenaze fonları ve sigortaları ile anlaşmalı çalışıyor ve süreci doğrudan fon ile koordine edebiliyoruz.",

    faqQ4: "Resmi evraklar için hangi belgeler gereklidir?",
    faqA4: "Müteveffanın Pasaportu/Kimliği, Nüfus Kayıt Örneği (veya Doğum Belgesi - Geburtsurkunde) ve varsa Evlilik Cüzdanı (Heiratsurkunde) gereklidir.",

    contactSub: "İletişim & Destek",
    contactTitle: "7/24 Bize Ulaşın",
    contactDesc: "Acil cenaze talepleri ve bilgi almak için günün her saati bizlere ulaşabilirsiniz.",

    formTitle: "Hızlı Bilgi & Geri Arama Formu",
    formDesc: "Formu doldurun, uzman ekibimiz 15 dakika içinde sizi arasın.",
    formName: "Adınız Soyadınız",
    formPhone: "Telefon Numaranız",
    formCity: "Bulunduğunuz Şehir (Almanya)",
    formMsg: "Mesajınız veya Notunuz (İsteğe Bağlı)",
    formSubmit: "Geri Arama Talebi Gönder",
    formSuccessMsg: "Talebiniz alınmıştır. Ekibimiz en kısa sürede sizi arayacaktır.",

    footerDesc: "Almanya genelinde İslami usullere uygun cenaze yıkama, evrak takibi, defin ve uluslararası cenaze nakil hizmetleri.",
    footerCopy: "© 2026 uemmet.de - İslami Cenaze Hizmetleri. Tüm hakları saklıdır."
  },
  de: {
    topBarEmergency: "24/7 Notfall-Hotline:",
    topBarLocation: "Ganz Deutschland & Internationale Überführung",
    navHome: "Startseite",
    navServices: "Leistungen",
    navChecklist: "Im Todesfall",
    navCoverage: "Regionen",
    navAbout: "Über uns",
    navContact: "Kontakt",
    navEmergencyBtn: "24/7 Notruf",

    heroBadge: "Islamische Bestattungen in ganz Deutschland 24/7",
    heroTitle: "In schweren Stunden <span>an Ihrer Seite</span>",
    heroSubtitle: "Islamische Waschung, Einkleidung, Behördengänge, Überführungen nach Deutschland/Türkei und Beisetzungen nach islamischen Riten.",
    heroCallBtn: "24/7 Notfall-Hilfe anfordern",
    heroGuideBtn: "Was tun im Todesfall?",

    feat1: "Einhaltung islamischer Riten",
    feat2: "Vollständige Behördengänge",
    feat3: "24/7 Erreichbarkeit & Hilfe",

    emergencyTitle: "Im Todesfall – Rufen Sie uns direkt an",
    emergencySubtitle: "Unser Notfallteam ist 24 Stunden erreichbar und übernimmt umgehend alle Schritte.",
    emergencyBtn: "📞 Jetzt anrufen",

    servicesSub: "Zuverlässig & Würdevoll",
    servicesTitle: "Unsere Bestattungsleistungen",
    servicesDesc: "Wir begleiten Sie in Ihrer Trauer und erledigen alle religiösen sowie behördlichen Formalitäten.",

    service1Title: "Islamische Waschung & Einkleidung",
    service1Desc: "Rituelle Waschung (Ghusl) und Einkleidung (Kafan) durch erfahrene muslimische Totengräber/innen nach traditionellen Vorgaben.",
    service1Item1: "Männliches & Weibliches Personal",
    service1Item2: "Raum für Abschied & Gebet",
    service1Item3: "Sterile & Hygienische Standards",

    service2Title: "Internationale Überführungen",
    service2Desc: "Schnelle und würdevolle Überführung von Verstorbenen aus Deutschland in die Türkei oder andere Länder per Flugzeug oder Fahrzeug.",
    service2Item1: "Konsulats- & Leichenpass-Genehmigung",
    service2Item2: "Klimatisierte Spezialfahrzeuge",
    service2Item3: "Flughafen-Abwicklung & Übergabe",

    service3Title: "Behördengänge & Formalitäten",
    service3Desc: "Beschaffung der Sterbeurkunde beim Standesamt, Abstimmung mit Friedhofsämtern und internationalen Behörden.",
    service3Item1: "Ausstellung der Sterbeurkunde",
    service3Item2: "Transit- & Zollpapiere",
    service3Item3: "Erledigung aller Gebühren & Anträge",

    service4Title: "Beisetzung in Deutschland",
    service4Desc: "Organisation von muslimischen Erdbestattungen auf islamischen Gräberfeldern in Deutschland.",
    service4Item1: "Beschaffung der Grabstätte",
    service4Item2: "Totengebet (Dschanāza)",
    service4Item3: "Grabgestaltung & -pflege",

    checklistSub: "Leitfaden",
    checklistTitle: "Was tun im Todesfall?",
    checklistDesc: "Schritt-für-Schritt-Anleitung für die ersten Stunden nach dem Hinschied:",

    step1Title: "1. Arzt benachrichtigen",
    step1Desc: "Bei einem Todesfall zu Hause muss umgehend der Hausarzt oder der Notarzt (112) zur Feststellung des Todes gerufen werden (Totenschein).",

    step2Title: "2. uemmet.de anrufen",
    step2Desc: "Rufen Sie unsere 24/7 Notfallnummer an. Unser Bestattungsteam leitet sofort alle Vorbereitungen ein.",

    step3Title: "3. Dokumente bereithalten",
    step3Desc: "Personalausweis/Reisepass, Geburtsurkunde und ggf. Heiratsurkunde des Verstorbenen bereitlegen.",

    step4Title: "4. Waschung & Überführung",
    step4Desc: "Überführung zur rituellen Waschung, Totengebet und anschließender Beisetzung oder Heimatüberführung.",

    coverageSub: "Unser Einzugsgebiet",
    coverageTitle: "Überführungen in ganz Deutschland & Weltweit",
    coverageDesc: "Abholung und Überführung des Verstorbenen aus allen Bundesländern innerhalb von 24 Stunden.",
    coverageCardTitle: "Warum uemmet.de?",
    coverageCard1: "Jahrelange Erfahrung und Pietät",
    coverageCard2: "Transparente Preise ohne versteckte Kosten",
    coverageCard3: "Zweisprachige Beratung (Deutsch & Türkisch)",
    coverageCard4: "24 Stunden erreichbare Notfall-Hotline",

    faqSub: "Fragen & Antworten",
    faqTitle: "Häufig gestellte Fragen",

    faqQ1: "Wie lange dauert eine Überführung?",
    faqA1: "Nach Ausstellung der behördlichen Dokumente (Sterbeurkunde & Leichenpass) erfolgt die Überführung in der Regel innerhalb von 24 bis 48 Stunden.",

    faqQ2: "Wer führt die rituelle Waschung durch?",
    faqA2: "Die Waschung erfolgt nach islamischen Vorschriften durch erfahrenes männliches oder weibliches Fachpersonal.",

    faqQ3: "Werden Sterbekassen und Versicherungen akzeptiert?",
    faqA3: "Ja, wir arbeiten mit allen deutschen und internationalen Sterbekassen zusammen und rechnen direkt ab.",

    faqQ4: "Welche Unterlagen werden benötigt?",
    faqA4: "Reisepass/Personalausweis, Geburtsurkunde sowie ggf. Heiratsurkunde des Verstorbenen.",

    contactSub: "Kontakt & Hilfe",
    contactTitle: "24/7 Erreichbar",
    contactDesc: "Im Notfall oder für Beratung sind wir jederzeit rund um die Uhr für Sie da.",

    formTitle: "Rückruf-Anforderung",
    formDesc: "Füllen Sie das Formular aus – wir rufen Sie innerhalb von 15 Minuten zurück.",
    formName: "Ihr Name",
    formPhone: "Ihre Telefonnummer",
    formCity: "Ihre Stadt (in Deutschland)",
    formMsg: "Nachricht / Anmerkung (Optional)",
    formSubmit: "Rückruf anfordern",
    formSuccessMsg: "Vielen Dank. Unser Team wird Sie umgehend zurückrufen.",

    footerDesc: "Islamische Bestattungen, Waschung, Behördengänge und Überführungen in ganz Deutschland und international.",
    footerCopy: "© 2026 uemmet.de - Islamische Bestattungen. Alle Rechte vorbehalten."
  }
};

let currentLang = 'tr';

// Update DOM elements with active language
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Update active state on language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Translate all marked elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Translate form inputs placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  localStorage.setItem('uemmet_lang', lang);
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Load saved language preference if exists
  const savedLang = localStorage.getItem('uemmet_lang') || 'tr';
  setLanguage(savedLang);

  // Language button listeners
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.target.dataset.lang;
      setLanguage(selectedLang);
    });
  });

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.className = navMenu.classList.contains('mobile-active') ? 'fas fa-times' : 'fas fa-bars';
      }
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-active');
        if (mobileToggle.querySelector('i')) {
          mobileToggle.querySelector('i').className = 'fas fa-bars';
        }
      });
    });
  }

  // FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all active FAQs
      faqItems.forEach(faq => faq.classList.remove('active'));
      
      // Open clicked if was not active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Modal Emergency Call Logic
  const modalOverlay = document.getElementById('emergencyModal');
  const openModalBtns = document.querySelectorAll('.trigger-modal');
  const closeModalBtn = document.getElementById('closeModal');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modalOverlay) {
        modalOverlay.classList.add('active');
      }
    });
  });

  if (closeModalBtn && modalOverlay) {
    closeModalBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }

  // Contact Form Submission Handler
  const contactForm = document.getElementById('callbackForm');
  const formResponse = document.getElementById('formResponse');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Show smooth success state
      if (formResponse) {
        const msg = translations[currentLang].formSuccessMsg || 'Talebiniz alınmıştır.';
        formResponse.innerHTML = `<div style="background: #dcfce7; color: #15803d; padding: 1rem; border-radius: 8px; font-weight: 600; text-align: center; margin-top: 1rem; border: 1px solid #bbf7d0;">✓ ${msg}</div>`;
        contactForm.reset();
        
        setTimeout(() => {
          formResponse.innerHTML = '';
        }, 8000);
      }
    });
  }
});
