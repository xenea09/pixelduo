import { useState } from 'react';
import './styles/globals.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import { ImpressumContent, DatenschutzContent } from './data/legal';
import HeroSection from './sections/HeroSection';
import ProblemsSection from './sections/ProblemsSection';
import WhySection from './sections/WhySection';
import CompareSection from './sections/CompareSection';
import PricingSection from './sections/PricingSection';
import ProcessSection from './sections/ProcessSection';
import TeamSection from './sections/TeamSection';
import FaqSection from './sections/FaqSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemsSection />
        <WhySection />
        <CompareSection />
        <PricingSection />
        <ProcessSection />
        <TeamSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer
        onImpressum={() => setActiveModal('impressum')}
        onDatenschutz={() => setActiveModal('datenschutz')}
      />

      <Modal
        isOpen={activeModal === 'impressum'}
        onClose={() => setActiveModal(null)}
        title="Impressum"
      >
        <ImpressumContent />
      </Modal>

      <Modal
        isOpen={activeModal === 'datenschutz'}
        onClose={() => setActiveModal(null)}
        title="Datenschutzerklärung"
      >
        <DatenschutzContent />
      </Modal>
    </>
  );
}
