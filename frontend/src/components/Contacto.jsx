// src/components/Contacto.jsx
import React from 'react';

const Contacto = () => (
  <section id="contacto" className="container my-5">
    <h2 className="text-center mb-4">Contacto</h2>
    <div className="text-center mb-4">
      <p><strong>Email:</strong> andre.morgado@example.com</p>
      <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/andremorgado" target="_blank">linkedin.com/in/andremorgado</a></p>
      <p><strong>GitHub:</strong> <a href="https://github.com/Blacktouro" target="_blank">github.com/Blacktouro</a></p>
    </div>
    {/* Formulário (opcional) */}
    <form className="mx-auto" style={{ maxWidth: '500px' }}>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Nome" />
      </div>
      <div className="mb-3">
        <input type="email" className="form-control" placeholder="Email" />
      </div>
      <div className="mb-3">
        <textarea className="form-control" rows="4" placeholder="Mensagem"></textarea>
      </div>
      <button type="submit" className="btn btn-success w-100">Enviar Mensagem</button>
    </form>
  </section>
);

export default Contacto;
