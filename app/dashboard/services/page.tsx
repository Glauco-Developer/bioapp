"use client";
import { useState } from 'react';

export default function ServicesDashboard() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch('/api/services', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description }),
    });

    if (response.ok) {
      setMessage('Serviço criado com sucesso!');
    } else {
      setMessage('Erro ao criar serviço.');
    }
  };

  return (
    <div>
      <h1>Dashboard - Services</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome do Serviço:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
