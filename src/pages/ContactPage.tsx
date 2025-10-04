import { Language } from '../types';
import { Contact } from '../components/Contact';

interface ContactPageProps {
  language: Language;
}

export const ContactPage = ({ language }: ContactPageProps) => {
  return (
    <div className="pt-20">
      <Contact language={language} />
    </div>
  );
};
