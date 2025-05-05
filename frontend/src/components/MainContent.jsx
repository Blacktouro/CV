import React from 'react';
import { useTranslation } from 'react-i18next';

const MainContent = () => {
  const { t } = useTranslation();

  return (
    <main
      className="d-flex align-items-center"
      id="inicio"
      style={{
        backgroundImage: "url('/bg-tech.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '80px 0'
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* FOTO À ESQUERDA */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img src="/foto-andre.png" className="profile-img shadow" alt="André Morgado" style={{
              width: '240px',
              height: '240px',
              objectFit: 'cover',
              borderRadius: '50%',
              border: '4px solid #FF6A00',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            }} />
          </div>

          {/* TEXTO À DIREITA */}
          <div className="col-md-8 text-white">
            <h2 className="display-5 fw-bold">{t('main.ola')}</h2>
            <p className="lead">{t('main.descricao')}</p>
            <div className="mt-4">
              <a href="#projetos" className="btn btn-outline-light me-3">{t('main.verProjetos')}</a>
              <a href="#contacto" className="btn btn-laranja">{t('main.contactar')}</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
