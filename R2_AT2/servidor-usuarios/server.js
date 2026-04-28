const express = require('express');
const app = express();
const port = 3001;

const usuarios = [
  { id: 1, nome: 'Maria', idade: 30, email: 'maria@gmail.com' },
  { id: 2, nome: 'joao', idade: 25, email: 'joao@gmail.com' },
];

app.get('/', (req, res) => {
  res.json({ projeto: 'Servidor de Usuários', usuarios });
});

app.listen(port, () => {
  console.log(`Servidor de Usuários rodando na porta ${port}`);
});
