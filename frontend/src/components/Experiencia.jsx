import React from 'react';
import './experiencia.css';

const Experiencia = () => (
  <section id="experiencia" className="container my-5">
    <h2 className="text-center display-5 fw-bold mb-5 text-white">💼 Experiência Profissional</h2>

    <div className="exp-item">
      <h4>Thai Union</h4>
      <p className="cargo">Técnico de Suporte Nível 2 <span>(2024 - atual)</span></p>
      <p className="descricao">
        Responsável pelo suporte técnico presencial e remoto a utilizadores, manutenção e monitorização de servidores Windows e Linux, 
        gestão de redes (configuração de switches, routers e pontos de acesso), administração de Active Directory, DNS e DHCP. 
        Automatização de tarefas com scripts em PowerShell e Python, utilização de Docker para ambientes isolados, 
        resolução de problemas complexos de software e hardware, implementação de boas práticas de segurança e políticas de backup. 
        Apoio contínuo à infraestrutura de TI da empresa, garantindo estabilidade e desempenho dos sistemas.
      </p>
    </div>


    <div className="exp-item">
      <h4>JanelaDigital</h4>
      <p className="cargo">Helpdesk Nível 2 → SysAdmin Nível 1 <span>(2022 - 2024)</span></p>
      <p className="descricao">
        Iniciei como Helpdesk Nível 2, prestando suporte técnico avançado, instalação e configuração de sistemas, resolução de avarias em hardware, redes e software. 
        Evoluí para SysAdmin Nível 1, assumindo a administração de servidores Linux e Windows, gestão de utilizadores e permissões, 
        automação de tarefas com Bash e PowerShell, e manutenção de backups. 
        Atuei na monitorização da infraestrutura com Grafana, Prometheus e Zabbix, contribuí em projetos com Docker e Git, 
        e colaborei na implementação de práticas DevOps e melhorias de segurança da rede.
      </p>
    </div>


    <div className="exp-item">
      <h4>Createinfor</h4>
      <p className="cargo">Helpdesk Nível 1 <span>(2021 - 2022)</span></p>
      <p className="descricao">
        Iniciei a minha carreira em TI com foco em suporte técnico de primeiro nível a diversas empresas clientes. 
        Realizava diagnósticos e resolução de problemas em estações de trabalho, formatação e reinstalação de sistemas operativos, 
        configuração de contas e serviços em Office 365, apoio em backups locais e na cloud, e suporte remoto a utilizadores. 
        Aprendi a documentar procedimentos, lidar com múltiplos ambientes simultaneamente e a garantir um atendimento técnico eficaz e ágil. 
        Esta experiência foi essencial para desenvolver a minha base técnica e preparar-me para desafios mais avançados.
      </p>
    </div>

  </section>
);

export default Experiencia;
