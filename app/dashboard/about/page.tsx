"use client";
import { useState } from "react";

export default function AboutDashboard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/about', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    });

    if (response.ok) {
      setMessage("About atualizado com sucesso!");
      setTitle("");
      setContent("");
    } else {
      setMessage("Erro ao atualizar About.");
    }
  };

  return (
    <div>
      <h1>Dashboard - About</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Conteúdo:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
