import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Experiencia from './components/Experiencia';
import Projetos from './components/Projetos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Ferramentas from './components/Ferramentas';

import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt');
  };

  return (
    <div>
      {/* Botão fixo no topo direito para trocar idioma */}
      <button 
        onClick={toggleLanguage} 
        style={{ 
          position: 'fixed', top: 10, right: 10, zIndex: 1000, 
          padding: '8px 12px', borderRadius: '6px', border: 'none', 
          backgroundColor: '#01C0DB', color: '#fff', cursor: 'pointer'
        }}
      >
        {i18n.language === 'pt' ? 'English' : 'Português'}
      </button>

      <Header />
      <MainContent />
      <Ferramentas />
      <Experiencia />
      <Projetos />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
