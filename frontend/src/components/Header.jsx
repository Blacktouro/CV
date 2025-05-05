import React from 'react';
import './header.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container">
        <a className="navbar-brand" href="#inicio">André Morgado</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item"><a className="nav-link" href="#inicio">{t('navbar.inicio')}</a></li>
            <li className="nav-item"><a className="nav-link" href="#experiencia">{t('navbar.experiencia')}</a></li>
            <li className="nav-item"><a className="nav-link" href="#projetos">{t('navbar.projetos')}</a></li>
            <li className="nav-item"><a className="nav-link" href="#contacto">{t('navbar.contacto')}</a></li>

            <li className="nav-item social-icon">
              <a href="https://github.com/Blacktouro" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </li>
            <li className="nav-item social-icon">
              <a href="https://www.linkedin.com/in/andremorgado-dev/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </li>
            <li className="nav-item social-icon">
              <a href="mailto:andremorgado@email.com"><FaEnvelope /></a>
            </li>

            {/* Botões de idioma */}
            <li className="nav-item ms-3">
              <button onClick={() => i18n.changeLanguage('pt')} className="btn btn-sm btn-outline-light me-1">PT</button>
              <button onClick={() => i18n.changeLanguage('en')} className="btn btn-sm btn-outline-light">EN</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Header;
