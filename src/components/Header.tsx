import { Globe, Sparkles } from 'lucide-react';
import { Language, PageRoute } from '../types';
import { translations } from '../translations';

interface HeaderProps {
  language: Language;
  onLanguageToggle: () => void;
  onNavigate: (page: PageRoute) => void;
  currentPage: PageRoute;
}

export const Header = ({ language, onLanguageToggle, onNavigate, currentPage }: HeaderProps) => {
  const navItems: { key: PageRoute; label: keyof typeof translations.nav }[] = [
    { key: 'home', label: 'home' },
    { key: 'portfolio', label: 'portfolio' },
    { key: 'team', label: 'team' },
    { key: 'testimonials', label: 'testimonials' },
    { key: 'contact', label: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <Sparkles className="w-8 h-8 text-cyan-600 group-hover:text-cyan-700 transition-colors" />
            <span className="text-2xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">WebBloom</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => onNavigate(key)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  currentPage === key
                    ? 'text-cyan-600 bg-cyan-50'
                    : 'text-gray-700 hover:text-cyan-600 hover:bg-cyan-50/50'
                }`}
              >
                {translations.nav[label][language]}
              </button>
            ))}
          </nav>

          <button
            onClick={onLanguageToggle}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-semibold text-gray-700 uppercase">
              {language}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
