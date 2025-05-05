import React from 'react';
import './Ferramentas.css';

const ferramentas = {
  Frontend: [
    { nome: 'HTML5', icon: 'fab fa-html5', dica: 'Linguagem de marcação para a web' },
    { nome: 'CSS3', icon: 'fab fa-css3-alt', dica: 'Estilo visual e layout responsivo' },
    { nome: 'JavaScript', icon: 'fab fa-js', dica: 'Lógica e interatividade no navegador' },
    { nome: 'React', icon: 'fab fa-react', dica: 'Framework moderno de UI' },
    { nome: 'Bootstrap', icon: 'fab fa-bootstrap', dica: 'Framework de componentes e design responsivo' }
  ],
  
  Backend: [
    { nome: 'Node.js', icon: 'fab fa-node', dica: 'Ambiente de execução JS no servidor' },
    { nome: 'MongoDB', icon: 'fas fa-database', dica: 'Base de dados NoSQL flexível' },
    { nome: 'Python', icon: 'fab fa-python', dica: 'Linguagem para scripts, APIs, IA' },
    { nome: 'Flask', icon: 'fas fa-fire', dica: 'Framework leve para APIs em Python' },
  ],
  DevOps: [
    { nome: 'Git', icon: 'fab fa-git-alt', dica: 'Controlo de versões' },
    { nome: 'Docker', icon: 'fab fa-docker', dica: 'Contenerização de apps' },
    { nome: 'Linux', icon: 'fab fa-linux', dica: 'Administração de sistemas' },
    { nome: 'NGINX', icon: 'fas fa-server', dica: 'Servidor web e proxy reverso' },
    { nome: 'Grafana', icon: 'fas fa-chart-line', dica: 'Dashboard e monitorização' },
    { nome: 'Prometheus', icon: 'fas fa-database', dica: 'Recolha e análise de métricas' }
  ]
  
};

const Ferramentas = () => (
  <section id="ferramentas" className="container my-5">
<h2
  className="text-center display-5 mb-5 fw-bold text-white"
  data-aos="fade-up"
  data-aos-duration="800"
>
  ⚙️ Tecnologias e Frameworks que uso
</h2>
    {Object.entries(ferramentas).map(([categoria, items], index) => (
      <div key={index} className="mb-5">
        <h4
            className={`categoria-titulo mb-4 ps-3 fw-bold text-uppercase display-6 ${
                categoria === 'Frontend'
                ? 'titulo-frontend'
                : categoria === 'Backend'
                ? 'titulo-backend'
                : 'titulo-devops'
            }`}
            >
            {categoria}
            </h4>

        <div className="row g-4">
          {items.map((f, i) => (
            <div
              key={i}
              className="col-6 col-md-3 text-center"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              title={f.dica}
            >
              <div className="ferramenta-item">
                <i className={`${f.icon} fa-2x`}></i>
                <div className="mt-2 small">{f.nome}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default Ferramentas;
