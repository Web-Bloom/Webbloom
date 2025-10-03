import { Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface FooterProps {
  language: Language;
}

export const Footer = ({ language }: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <span className="text-2xl font-bold">WebBloom</span>
          </div>
          <p className="text-gray-400 text-center">
            {translations.footer.tagline[language]}
          </p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} WebBloom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
