import { Mail, Linkedin, Twitter } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface TeamPageProps {
  language: Language;
}

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Schmidt',
    role: { en: 'Lead Designer', de: 'Lead Designer' },
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: {
      en: 'Passionate about creating beautiful, user-friendly designs that convert.',
      de: 'Leidenschaftlich für schöne, benutzerfreundliche Designs, die konvertieren.',
    },
  },
  {
    id: 2,
    name: 'Michael Weber',
    role: { en: 'Lead Developer', de: 'Lead Developer' },
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: {
      en: 'Building fast, scalable websites with modern technologies.',
      de: 'Erstellt schnelle, skalierbare Websites mit modernen Technologien.',
    },
  },
  {
    id: 3,
    name: 'Anna Müller',
    role: { en: 'SEO Specialist', de: 'SEO-Spezialistin' },
    image: 'https://images.pexels.com/photos/3184356/pexels-photo-3184356.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: {
      en: 'Helping businesses get found online through strategic optimization.',
      de: 'Hilft Unternehmen, online durch strategische Optimierung gefunden zu werden.',
    },
  },
  {
    id: 4,
    name: 'Thomas Fischer',
    role: { en: 'Project Manager', de: 'Projektmanager' },
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: {
      en: 'Ensuring smooth project delivery and client satisfaction.',
      de: 'Gewährleistet reibungslose Projektabwicklung und Kundenzufriedenheit.',
    },
  },
];

export const TeamPage = ({ language }: TeamPageProps) => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            {translations.team.title[language]}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {translations.team.subtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/90 via-cyan-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <button className="bg-white text-cyan-600 p-3 rounded-full hover:bg-cyan-50 transition-colors">
                      <Mail className="w-5 h-5" />
                    </button>
                    <button className="bg-white text-cyan-600 p-3 rounded-full hover:bg-cyan-50 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="bg-white text-cyan-600 p-3 rounded-full hover:bg-cyan-50 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-cyan-600 font-semibold mb-3">{member.role[language]}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio[language]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
