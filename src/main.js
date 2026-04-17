import './style.css'

// 1. Translations Dictionary
const translations = {
  en: {
    top_banner: "<strong>Local Swiss Stock</strong> - 48h shipping with Swiss Post - No customs fees",
    nav_shop: "Shop",
    nav_story: "Our Story",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    hero_discount: "40% OFF",
    hero_title_1: "on the",
    hero_title_highlight: "Best Anti-gravity",
    hero_title_2: "Moon Lamp",
    hero_subtitle: "Magic in your room. Floats, rotates smoothly, and lights up your nights with authentic lunar detail.",
    hero_btn: "GET MY MOON - 40% OFF",
    hero_scarcity: "Offer ends soon. Limited stock.",
    badge_shipping: "Insured International Shipping",
    badge_warranty: "Official Warranty",
    badge_payment: "100% Secure Payment",
    swiss_trust_message: "Based in Switzerland. Every unit is tested and manually calibrated in our workshop before shipping via Swiss Post in 48h.",
    feature_title: "Designed to Inspire",
    feature_desc: "Infinity Shop's electromagnetic levitation technology allows the moon to float and spin silently in the air, creating a hypnotic focal point for any space.",
    feature_1: "High-precision 3D lunar printing",
    feature_2: "Silent magnetic levitation",
    feature_3: "Touch control for warm/cool light tones",
    shop_stock: "In stock only",
    shop_sort: "Sort by:",
    shop_sort_featured: "Featured",
    save_40: "Save 40%",
    save_30: "Save 30%",
    add_to_cart: "Add to Cart",
    add_to_cart_2: "Add to Cart",
    add_to_cart_3: "Add to Cart",
    product_3_name: "Premium Gift Pack",
    footer_desc: "Bringing magic to your everyday life.",
    footer_terms: "Terms of Service",
    footer_privacy: "Privacy Policy",
    footer_contact: "Contact",
    footer_copy: "© 2026 Infinity Shop. All rights reserved.",
    added_to_cart: "Added!"
  },
  de: {
    top_banner: "<strong>Lokaler Schweizer Bestand</strong> - 48h Versand mit der Schweizerischen Post - Keine Zollgebühren",
    nav_shop: "Shop",
    nav_story: "Unsere Geschichte",
    nav_faq: "FAQ",
    nav_contact: "Kontakt",
    hero_discount: "40% RABATT",
    hero_title_1: "auf die",
    hero_title_highlight: "beste Anti-Schwerkraft",
    hero_title_2: "Mondlampe",
    hero_subtitle: "Magie in deinem Zimmer. Schwebt, dreht sich sanft und erhellt deine Nächte mit authentischen Monddetails.",
    hero_btn: "HOL DIR DEINEN MOND - 40% RABATT",
    hero_scarcity: "Angebot endet bald. Begrenzter Bestand.",
    badge_shipping: "Versicherter internationaler Versand",
    badge_warranty: "Offizielle Garantie",
    badge_payment: "100% sichere Zahlung",
    swiss_trust_message: "Basierend in der Schweiz. Jedes Gerät wird manuell in unserer Werkstatt getestet und kalibriert, bevor es innerhalb von 48 Stunden mit der Schweizerischen Post versandt wird.",
    feature_title: "Entwickelt, um zu inspirieren",
    feature_desc: "Die elektromagnetische Schwebetechnologie von Infinity Shop ermöglicht es dem Mond, leise in der Luft zu schweben und sich zu drehen, wodurch ein hypnotischer Mittelpunkt für jeden Raum entsteht.",
    feature_1: "Hochpräziser 3D-Monddruck",
    feature_2: "Leises magnetisches Schweben",
    feature_3: "Touch-Steuerung für warme/kühle Lichttöne",
    shop_stock: "Nur auf Lager",
    shop_sort: "Sortieren nach:",
    shop_sort_featured: "Empfohlen",
    save_40: "Spare 40%",
    save_30: "Spare 30%",
    add_to_cart: "In den Warenkorb",
    add_to_cart_2: "In den Warenkorb",
    add_to_cart_3: "In den Warenkorb",
    product_3_name: "Premium-Geschenkpaket",
    footer_desc: "Wir bringen Magie in deinen Alltag.",
    footer_terms: "Nutzungsbedingungen",
    footer_privacy: "Datenschutzerklärung",
    footer_contact: "Kontakt",
    footer_copy: "© 2026 Infinity Shop. Alle Rechte vorbehalten.",
    added_to_cart: "Hinzugefügt!"
  },
  fr: {
    top_banner: "<strong>Stock Suisse Local</strong> - Expédition 48h avec La Poste Suisse - Sans frais de douane",
    nav_shop: "Boutique",
    nav_story: "Notre Histoire",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    hero_discount: "40% DE RÉDUCTION",
    hero_title_1: "sur la",
    hero_title_highlight: "meilleure",
    hero_title_2: "lampe lunaire anti-gravité",
    hero_subtitle: "La magie dans votre chambre. Flotte, tourne doucement et illumine vos nuits avec des détails lunaires authentiques.",
    hero_btn: "OBTENEZ VOTRE LUNE - 40% DE RÉDUCTION",
    hero_scarcity: "L'offre se termine bientôt. Stock limité.",
    badge_shipping: "Expédition internationale assurée",
    badge_warranty: "Garantie Officielle",
    badge_payment: "Paiement 100% sécurisé",
    swiss_trust_message: "Basé en Suisse. Chaque unité est testée et calibrée manuellement dans notre atelier avant d'être expédiée par La Poste Suisse en 48h.",
    feature_title: "Conçu pour inspirer",
    feature_desc: "La technologie de lévitation électromagnétique de Infinity Shop permet à la lune de flotter et de tourner silencieusement dans les airs, créant un point focal hypnotique pour n'importe quel espace.",
    feature_1: "Impression 3D lunaire haute précision",
    feature_2: "Lévitation magnétique silencieuse",
    feature_3: "Contrôle tactile des tons chauds/froids",
    shop_stock: "En stock seulement",
    shop_sort: "Trier par:",
    shop_sort_featured: "En vedette",
    save_40: "Économisez 40%",
    save_30: "Économisez 30%",
    add_to_cart: "Ajouter au panier",
    add_to_cart_2: "Ajouter au panier",
    add_to_cart_3: "Ajouter au panier",
    product_3_name: "Coffret Cadeau Premium",
    footer_desc: "Apporter de la magie à votre quotidien.",
    footer_terms: "Conditions d'utilisation",
    footer_privacy: "Politique de confidentialité",
    footer_contact: "Contact",
    footer_copy: "© 2026 Infinity Shop. Tous droits réservés.",
    added_to_cart: "Ajouté!"
  },
  it: {
    top_banner: "<strong>Stock Locale Svizzero</strong> - Spedizione 48h con La Posta Svizzera - Nessuna tassa doganale",
    nav_shop: "Negozio",
    nav_story: "La Nostra Storia",
    nav_faq: "FAQ",
    nav_contact: "Contatto",
    hero_discount: "SCONTO 40%",
    hero_title_1: "sulla",
    hero_title_highlight: "migliore Lampada",
    hero_title_2: "Lunare Antigravità",
    hero_subtitle: "Magia nella tua stanza. Fluttua, ruota dolcemente e illumina le tue notti con autentici dettagli lunari.",
    hero_btn: "OTTIENI LA TUA LUNA - SCONTO 40%",
    hero_scarcity: "L'offerta termina presto. Stock limitato.",
    badge_shipping: "Spedizione internazionale assicurata",
    badge_warranty: "Garanzia Ufficiale",
    badge_payment: "Pagamento sicuro al 100%",
    swiss_trust_message: "Basato in Svizzera. Ogni unità viene testata e calibrata manualmente nel nostro laboratorio prima della spedizione in 48 ore tramite La Posta Svizzera.",
    feature_title: "Progettato per Ispirare",
    feature_desc: "La tecnologia di levitazione elettromagnetica di Infinity Shop consente alla luna di fluttuare e girare silenziosamente nell'aria, creando un punto focale ipnotico per qualsiasi spazio.",
    feature_1: "Stampa 3D lunare ad alta precisione",
    feature_2: "Levitazione magnetica silenziosa",
    feature_3: "Controllo touch per luci calde/fredde",
    shop_stock: "Solo in stock",
    shop_sort: "Ordina per:",
    shop_sort_featured: "In primo piano",
    save_40: "Risparmia il 40%",
    save_30: "Risparmia il 30%",
    add_to_cart: "Aggiungi al carrello",
    add_to_cart_2: "Aggiungi al carrello",
    add_to_cart_3: "Aggiungi al carrello",
    product_3_name: "Confezione Regalo Premium",
    footer_desc: "Portare la magia nella tua vita di tutti i giorni.",
    footer_terms: "Termini di servizio",
    footer_privacy: "Politica sulla riservatezza",
    footer_contact: "Contatto",
    footer_copy: "© 2026 Infinity Shop. Tutti i diritti riservati.",
    added_to_cart: "Aggiunto!"
  }
};

// 2. State and Detection
const SUPPORTED_LANGS = ['en', 'de', 'fr', 'it'];
let currentLang = 'en';

function detectLanguage() {
  const browserLang = navigator.language.slice(0, 2).toLowerCase();
  if (SUPPORTED_LANGS.includes(browserLang)) {
    return browserLang;
  }
  return 'en'; // Default to English for everything else
}

// 3. Hydration Logic
function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = 'en';
  currentLang = lang;
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
  
  // Update Select Dropdown matching value
  const langSelect = document.getElementById('langSwitcher');
  if (langSelect) langSelect.value = lang;
  
  const texts = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (texts[key]) {
      // Use innerHTML for tags like <strong>
      el.innerHTML = texts[key];
    }
  });
}

// 4. Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Detect & Set
  const detected = detectLanguage();
  setLanguage(detected);
  
  // Bind Select Dropdown Event listener
  const langSelect = document.getElementById('langSwitcher');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }
});


// 5. Original UI Interactions
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Cart Button removed previously, replaced by Checkout logic
const buyBtn = document.getElementById('buy');
if (buyBtn) {
  buyBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const originalText = buyBtn.innerHTML;
    buyBtn.innerHTML = '<span style="opacity: 0.7;">Processing Secure Checkout...</span>';
    
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      
      if (data.url) {
        window.location.href = data.url; // Redirect cleanly to Stripe
      } else {
        alert('Payment Initialization Failed: ' + (data.error || 'Check Stripe Keys'));
        buyBtn.innerHTML = originalText;
      }
    } catch (err) {
      console.error(err);
      alert('Network Error: Make sure the Node backend (server.js) is running on port 3000.');
      buyBtn.innerHTML = originalText;
    }
  });
}
