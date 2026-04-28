const express = require('express');
const app = express();
const port = 3003;

const pedidos = [
  { id: 1, usuarioId: 1, total: 50.0 },
  { id: 2, usuarioId: 2, total: 120.0 },
  { id: 3, usuarioId: 3, total: 200.0 }
];


app.get('/', (req, res) => {
  res.json({ projeto: 'Servidor de Pedidos', pedidos });
});

app.listen(port, () => {
  console.log(`Servidor de Pedidos rodando na porta ${port}`);
});
