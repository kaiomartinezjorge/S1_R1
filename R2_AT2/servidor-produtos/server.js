const express = require('express');
const app = express();
const port = 3002;

const produtos = [
  { id: 1, nome: 'Smartphone', descricao: 'Smartphone de última geração', usuarioId: 1 },
  { id: 2, nome: 'Notebook', descricao: 'Notebook para trabalho e estudos', usuarioId: 2 }

];


app.get('/', (req, res) => {
  res.json({ projeto: 'Servidor de Produtos', produtos });
});

app.listen(port, () => {
  console.log(`Servidor de Produtos rodando na porta ${port}`);
});
