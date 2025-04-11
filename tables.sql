CREATE TABLE paginas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(255) NOT NULL UNIQUE,
  titulo VARCHAR(255),
  descricao TEXT,
  imagem TEXT,
  criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
  atualizado_em DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO paginas (slug, titulo, descricao, imagem)
VALUES (
  'home',
  'Bem-vindo à página inicial!',
  'Essa é a descrição simples da home.',
  '/img/banner.jpg'
);
