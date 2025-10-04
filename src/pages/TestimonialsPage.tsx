import { Star, Quote } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface TestimonialsPageProps {
  language: Language;
}

const testimonials = [
  {
    id: 1,
    name: 'Maria Gonzalez',
    business: { en: 'Owner, Bella Italia', de: 'Inhaberin, Bella Italia' },
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: {
      en: 'WebBloom transformed our online presence! Our reservations increased by 40% in the first month. The team was professional and understood exactly what we needed.',
      de: 'WebBloom hat unsere Online-Präsenz transformiert! Unsere Reservierungen stiegen im ersten Monat um 40%. Das Team war professionell und verstand genau, was wir brauchten.',
    },
  },
  {
    id: 2,
    name: 'Stefan Klein',
    business: { en: 'CEO, TechStart Solutions', de: 'CEO, TechStart Solutions' },
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: {
      en: 'Outstanding work! They delivered a modern, professional website that perfectly represents our brand. The SEO optimization has brought us many new leads.',
      de: 'Hervorragende Arbeit! Sie lieferten eine moderne, professionelle Website, die unsere Marke perfekt repräsentiert. Die SEO-Optimierung hat uns viele neue Leads gebracht.',
    },
  },
  {
    id: 3,
    name: 'Lisa Schneider',
    business: { en: 'Founder, Fashion Boutique', de: 'Gründerin, Fashion Boutique' },
    image: 'https://images.pexels.com/photos/3184356/pexels-photo-3184356.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: {
      en: 'The e-commerce platform they built exceeded our expectations. Sales have doubled and our customers love the smooth shopping experience.',
      de: 'Die E-Commerce-Plattform, die sie erstellt haben, übertraf unsere Erwartungen. Die Verkäufe haben sich verdoppelt und unsere Kunden lieben das reibungslose Einkaufserlebnis.',
    },
  },
  {
    id: 4,
    name: 'Peter Hoffmann',
    business: { en: 'Owner, Green Garden Café', de: 'Inhaber, Green Garden Café' },
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: {
      en: 'Great experience from start to finish! They handled everything and made the process incredibly easy. Highly recommend for any small business.',
      de: 'Tolle Erfahrung von Anfang bis Ende! Sie kümmerten sich um alles und machten den Prozess unglaublich einfach. Sehr empfehlenswert für jedes kleine Unternehmen.',
    },
  },
  {
    id: 5,
    name: 'Dr. Julia Becker',
    business: { en: 'Partner, Law Partners', de: 'Partnerin, Law Partners' },
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: {
      en: 'Professional, reliable, and excellent results. Our new website has helped us attract better clients and establish our firm as industry leaders.',
      de: 'Professionell, zuverlässig und hervorragende Ergebnisse. Unsere neue Website hat uns geholfen, bessere Mandanten zu gewinnen und unsere Kanzlei als Branchenführer zu etablieren.',
    },
  },
  {
    id: 6,
    name: 'Anna Richter',
    business: { en: 'Owner, Home Decor Shop', de: 'Inhaberin, Home Decor Shop' },
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: {
      en: 'They turned my vision into reality! The online store is beautiful and functional. Customer support has been amazing even after launch.',
      de: 'Sie haben meine Vision in die Realität umgesetzt! Der Online-Shop ist schön und funktional. Der Kundensupport war auch nach dem Launch erstaunlich.',
    },
  },
];

export const TestimonialsPage = ({ language }: TestimonialsPageProps) => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            {translations.testimonials.title[language]}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {translations.testimonials.subtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-cyan-100" />

              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-cyan-100"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.business[language]}</p>
                  </div>
                </div>

                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.text[language]}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-cyan-50 rounded-2xl px-12 py-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">50+</div>
              <div className="text-gray-600">{language === 'en' ? 'Happy Clients' : 'Zufriedene Kunden'}</div>
            </div>
            <div className="w-px h-16 bg-cyan-200"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">4.9</div>
              <div className="text-gray-600">{language === 'en' ? 'Average Rating' : 'Durchschnittsbewertung'}</div>
            </div>
            <div className="w-px h-16 bg-cyan-200"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">100%</div>
              <div className="text-gray-600">{language === 'en' ? 'Satisfaction' : 'Zufriedenheit'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
