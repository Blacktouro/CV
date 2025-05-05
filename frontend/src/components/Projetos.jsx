// src/components/Projetos.jsx
import React from 'react';

const Projetos = () => (
  <section id="projetos" className="container my-5">
    <h2 className="text-center mb-4">Projetos</h2>
    <div className="row">
      <div className="col-md-6 mb-4">
        <div className="card h-100 shadow">
          <img src="/projeto1.png" className="card-img-top" alt="Projeto 1" />
          <div className="card-body">
            <h5 className="card-title">Duopropag</h5>
            <p className="card-text">Website moderno para agência de marketing digital com serviços e SEO otimizado.</p>
            <a href="https://duopropag.pt" className="btn btn-primary" target="_blank">Ver Projeto</a>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-4">
        <div className="card h-100 shadow">
          <img src="/projeto2.png" className="card-img-top" alt="Projeto 2" />
          <div className="card-body">
            <h5 className="card-title">CorpoMente</h5>
            <p className="card-text">Landing page para clínica de estética com agendamento e visual elegante.</p>
            <a href="https://corpomente.pt" className="btn btn-primary" target="_blank">Ver Projeto</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projetos;
