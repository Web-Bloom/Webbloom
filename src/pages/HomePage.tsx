import { Language, PageRoute } from '../types';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Benefits } from '../components/Benefits';
import { About } from '../components/About';

interface HomePageProps {
  language: Language;
  onNavigate: (page: PageRoute) => void;
}

export const HomePage = ({ language, onNavigate }: HomePageProps) => {
  return (
    <>
      <Hero language={language} onNavigate={onNavigate} />
      <Services language={language} />
      <Benefits language={language} />
      <About language={language} />
    </>
  );
};
