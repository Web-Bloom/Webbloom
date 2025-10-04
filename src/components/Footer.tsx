import { Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface FooterProps {
  language: Language;
}

export const Footer = ({ language }: FooterProps) => {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-gray-900 text-white py-16 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-3 group">
            <Sparkles className="w-8 h-8 text-cyan-400 transition-transform duration-300 group-hover:rotate-12" />
            <span className="text-3xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              WebBloom
            </span>
          </div>
          <p className="text-gray-400 text-center text-lg">
            {translations.footer.tagline[language]}
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} WebBloom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
