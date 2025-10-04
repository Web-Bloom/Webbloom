import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface PortfolioPageProps {
  language: Language;
}

const projects = [
  {
    id: 1,
    title: 'Bella Italia Restaurant',
    category: 'restaurants',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: { en: 'Modern restaurant website with online reservation system', de: 'Moderne Restaurant-Website mit Online-Reservierungssystem' }
  },
  {
    id: 2,
    title: 'TechStart Solutions',
    category: 'corporate',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: { en: 'Corporate website for B2B software company', de: 'Corporate-Website für B2B-Softwareunternehmen' }
  },
  {
    id: 3,
    title: 'Fashion Boutique',
    category: 'ecommerce',
    image: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: { en: 'E-commerce platform for local fashion store', de: 'E-Commerce-Plattform für lokales Modegeschäft' }
  },
  {
    id: 4,
    title: 'Green Garden Café',
    category: 'restaurants',
    image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: { en: 'Organic café with menu showcase and location details', de: 'Bio-Café mit Menü-Präsentation und Standortdetails' }
  },
  {
    id: 5,
    title: 'Law Partners',
    category: 'corporate',
    image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: { en: 'Professional website for law firm', de: 'Professionelle Website für Anwaltskanzlei' }
  },
  {
    id: 6,
    title: 'Home Decor Shop',
    category: 'ecommerce',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: { en: 'Online store for home decoration items', de: 'Online-Shop für Wohnaccessoires' }
  },
];

export const PortfolioPage = ({ language }: PortfolioPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            {translations.portfolio.title[language]}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {translations.portfolio.subtitle[language]}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(['all', 'ecommerce', 'corporate', 'restaurants'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-cyan-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-cyan-400'
              }`}
            >
              {translations.portfolio.categories[category][language]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <button className="flex items-center space-x-2 bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description[language]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
