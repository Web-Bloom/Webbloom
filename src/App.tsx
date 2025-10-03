import { useLanguage } from './hooks/useLanguage';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const { language, toggleLanguage } = useLanguage();

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const offset = section === 'hero' ? 0 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        language={language}
        onLanguageToggle={toggleLanguage}
        onNavigate={handleNavigate}
      />
      <Hero language={language} onNavigate={handleNavigate} />
      <Services language={language} />
      <Benefits language={language} />
      <About language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
