const express = require('express');
const cors = require('cors');

const app = express();
const port = 7010;

// Middleware
app.use(cors());

// Rota: Informações do CV
app.get('/api/info', (req, res) => {
  res.json({
    nome: 'André Morgado',
    profissao: 'Fullstack Developer | DevOps | Segurança',
    email: 'andre@email.com'
  });
});

// Rota: Projetos
app.get('/api/projetos', (req, res) => {
  res.json([
    {
      nome: 'Plataforma Forex',
      descricao: 'Sistema de previsão de moedas com XGBoost e Docker.',
      link: 'https://pre-bolsa.duckdns.org'
    },
    {
      nome: 'Duopropag',
      descricao: 'Website de marketing com SEO e landing pages modernas.',
      link: 'https://duopropag.pt'
    },
    {
      nome: 'Currículo Online',
      descricao: 'CV interativo com React, Docker e NGINX.',
      link: 'https://pre-bolsa.duckdns.org'
    }
  ]);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor backend a correr na porta ${port}`);
});

