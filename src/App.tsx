import { useState } from 'react';
import { useLanguage } from './hooks/useLanguage';
import { PageRoute } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { TeamPage } from './pages/TeamPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  const { language, toggleLanguage } = useLanguage();
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage language={language} onNavigate={handleNavigate} />;
      case 'portfolio':
        return <PortfolioPage language={language} />;
      case 'team':
        return <TeamPage language={language} />;
      case 'testimonials':
        return <TestimonialsPage language={language} />;
      case 'contact':
        return <ContactPage language={language} />;
      default:
        return <HomePage language={language} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/30 relative">
      <AnimatedBackground />
      <Header
        language={language}
        onLanguageToggle={toggleLanguage}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />
      <main className="animate-fadeIn">
        {renderPage()}
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;
