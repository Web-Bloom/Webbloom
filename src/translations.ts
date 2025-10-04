import { Language } from './types';

interface Translations {
  nav: {
    home: Record<Language, string>;
    services: Record<Language, string>;
    portfolio: Record<Language, string>;
    team: Record<Language, string>;
    testimonials: Record<Language, string>;
    about: Record<Language, string>;
    contact: Record<Language, string>;
  };
  hero: {
    title: Record<Language, string>;
    subtitle: Record<Language, string>;
    cta: Record<Language, string>;
  };
  services: {
    title: Record<Language, string>;
    subtitle: Record<Language, string>;
    newWebsite: {
      title: Record<Language, string>;
      description: Record<Language, string>;
    };
    renewal: {
      title: Record<Language, string>;
      description: Record<Language, string>;
    };
    seo: {
      title: Record<Language, string>;
      description: Record<Language, string>;
    };
    hosting: {
      title: Record<Language, string>;
      description: Record<Language, string>;
    };
  };
  benefits: {
    title: Record<Language, string>;
    fast: {
      title: Record<Language, string>;
      description: Record<Language, string>;
    };
    affordable: {
      title: Record<Language, string>;
      description: Record<Language, string>;
    };
    support: {
      title: Record<Language, string>;
      description: Record<Language, string>;
    };
  };
  about: {
    title: Record<Language, string>;
    description: Record<Language, string>;
  };
  contact: {
    title: Record<Language, string>;
    subtitle: Record<Language, string>;
    name: Record<Language, string>;
    email: Record<Language, string>;
    message: Record<Language, string>;
    send: Record<Language, string>;
  };
  footer: {
    tagline: Record<Language, string>;
  };
  portfolio: {
    title: Record<Language, string>;
    subtitle: Record<Language, string>;
    categories: {
      all: Record<Language, string>;
      ecommerce: Record<Language, string>;
      corporate: Record<Language, string>;
      restaurants: Record<Language, string>;
    };
  };
  team: {
    title: Record<Language, string>;
    subtitle: Record<Language, string>;
  };
  testimonials: {
    title: Record<Language, string>;
    subtitle: Record<Language, string>;
  };
}

export const translations: Translations = {
  nav: {
    home: { en: 'Home', de: 'Startseite' },
    services: { en: 'Services', de: 'Leistungen' },
    portfolio: { en: 'Portfolio', de: 'Portfolio' },
    team: { en: 'Team', de: 'Team' },
    testimonials: { en: 'Testimonials', de: 'Referenzen' },
    about: { en: 'About', de: 'Über uns' },
    contact: { en: 'Contact', de: 'Kontakt' },
  },
  hero: {
    title: {
      en: 'Enhance Your Digital Presence',
      de: 'Verbessern Sie Ihre digitale Präsenz',
    },
    subtitle: {
      en: 'We help small local businesses become more visible and attract more customers through professional, modern websites.',
      de: 'Wir helfen kleinen lokalen Unternehmen, sichtbarer zu werden und mehr Kunden durch professionelle, moderne Websites zu gewinnen.',
    },
    cta: { en: 'Get Started', de: 'Jetzt starten' },
  },
  services: {
    title: { en: 'Our Services', de: 'Unsere Leistungen' },
    subtitle: {
      en: 'Professional web solutions tailored to your business needs',
      de: 'Professionelle Web-Lösungen, zugeschnitten auf Ihre Geschäftsbedürfnisse',
    },
    newWebsite: {
      title: { en: 'New Websites', de: 'Neue Websites' },
      description: {
        en: 'Launch your business online with a completely new, modern website designed to attract customers and grow your business.',
        de: 'Starten Sie Ihr Unternehmen online mit einer völlig neuen, modernen Website, die Kunden anzieht und Ihr Geschäft wachsen lässt.',
      },
    },
    renewal: {
      title: { en: 'Website Renewal', de: 'Website-Erneuerung' },
      description: {
        en: 'Modernize your existing website to keep up with the times and stay competitive in the digital landscape.',
        de: 'Modernisieren Sie Ihre bestehende Website, um mit der Zeit zu gehen und im digitalen Umfeld wettbewerbsfähig zu bleiben.',
      },
    },
    seo: {
      title: { en: 'Get Found Online', de: 'Online gefunden werden' },
      description: {
        en: 'Help customers discover your business when they search online. We optimize your website so you appear when people in your area look for services like yours.',
        de: 'Helfen Sie Kunden, Ihr Unternehmen zu finden, wenn sie online suchen. Wir optimieren Ihre Website, damit Sie erscheinen, wenn Menschen in Ihrer Umgebung nach Dienstleistungen wie Ihren suchen.',
      },
    },
    hosting: {
      title: { en: 'Simple Setup & Maintenance', de: 'Einfache Einrichtung & Wartung' },
      description: {
        en: 'No technical headaches. We handle your website address and keep everything running smoothly in the background, so you can focus on your business.',
        de: 'Keine technischen Kopfschmerzen. Wir kümmern uns um Ihre Webadresse und halten alles im Hintergrund am Laufen, damit Sie sich auf Ihr Geschäft konzentrieren können.',
      },
    },
  },
  benefits: {
    title: { en: 'Why Choose WebBloom?', de: 'Warum WebBloom wählen?' },
    fast: {
      title: { en: 'Fast Delivery', de: 'Schnelle Lieferung' },
      description: {
        en: 'We understand time is money. Get your website up and running quickly without compromising on quality.',
        de: 'Wir verstehen, dass Zeit Geld ist. Ihre Website wird schnell einsatzbereit sein, ohne Kompromisse bei der Qualität.',
      },
    },
    affordable: {
      title: { en: 'Affordable Pricing', de: 'Erschwingliche Preise' },
      description: {
        en: 'Professional websites at prices that make sense for small businesses. Quality doesn\'t have to break the bank.',
        de: 'Professionelle Websites zu Preisen, die für kleine Unternehmen Sinn machen. Qualität muss nicht teuer sein.',
      },
    },
    support: {
      title: { en: 'Full Support', de: 'Volle Unterstützung' },
      description: {
        en: 'We take over the heavy lifting. Focus on your business while we handle the technical details.',
        de: 'Wir übernehmen die schwere Arbeit. Konzentrieren Sie sich auf Ihr Geschäft, während wir uns um die technischen Details kümmern.',
      },
    },
  },
  about: {
    title: { en: 'About WebBloom', de: 'Über WebBloom' },
    description: {
      en: 'At WebBloom, we believe every local business deserves a strong digital presence. We specialize in creating beautiful, functional websites that help small businesses thrive online. Our mission is simple: make professional web design accessible and affordable for everyone.',
      de: 'Bei WebBloom glauben wir, dass jedes lokale Unternehmen eine starke digitale Präsenz verdient. Wir sind spezialisiert auf die Erstellung schöner, funktionaler Websites, die kleinen Unternehmen helfen, online erfolgreich zu sein. Unsere Mission ist einfach: professionelles Webdesign für alle zugänglich und erschwinglich zu machen.',
    },
  },
  contact: {
    title: { en: 'Get In Touch', de: 'Kontaktieren Sie uns' },
    subtitle: {
      en: 'Ready to enhance your digital presence? Let\'s talk about your project.',
      de: 'Bereit, Ihre digitale Präsenz zu verbessern? Lassen Sie uns über Ihr Projekt sprechen.',
    },
    name: { en: 'Your Name', de: 'Ihr Name' },
    email: { en: 'Your Email', de: 'Ihre E-Mail' },
    message: { en: 'Tell us about your business', de: 'Erzählen Sie uns von Ihrem Unternehmen' },
    send: { en: 'Send Message', de: 'Nachricht senden' },
  },
  footer: {
    tagline: {
      en: 'Enhancing digital presence for local businesses',
      de: 'Verbesserung der digitalen Präsenz für lokale Unternehmen',
    },
  },
  portfolio: {
    title: { en: 'Our Portfolio', de: 'Unser Portfolio' },
    subtitle: {
      en: 'Explore our recent projects and success stories',
      de: 'Entdecken Sie unsere neuesten Projekte und Erfolgsgeschichten',
    },
    categories: {
      all: { en: 'All Projects', de: 'Alle Projekte' },
      ecommerce: { en: 'E-Commerce', de: 'E-Commerce' },
      corporate: { en: 'Corporate', de: 'Corporate' },
      restaurants: { en: 'Restaurants', de: 'Restaurants' },
    },
  },
  team: {
    title: { en: 'Meet Our Team', de: 'Unser Team' },
    subtitle: {
      en: 'Passionate professionals dedicated to your success',
      de: 'Leidenschaftliche Profis, die sich Ihrem Erfolg widmen',
    },
  },
  testimonials: {
    title: { en: 'What Our Clients Say', de: 'Was unsere Kunden sagen' },
    subtitle: {
      en: 'Real feedback from businesses we\'ve helped grow',
      de: 'Echtes Feedback von Unternehmen, denen wir geholfen haben zu wachsen',
    },
  },
};
