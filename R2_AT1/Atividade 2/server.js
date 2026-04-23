const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
let tarefas = [];
let proximoId = 1;

app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

app.post("/tarefas", (req, res) => {
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ erro: "O nome da tarefa é obrigatório." });
  }

  const novaTarefa = {
    id: proximoId++,
    nome: nome,
  };

  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

app.delete("/tarefas/:id", (req, res) => {
  const { id } = req.params;

  const listaOriginalLength = tarefas.length;
  tarefas = tarefas.filter((t) => t.id !== parseInt(id));

  if (tarefas.length === listaOriginalLength) {
    return res.status(404).json({ erro: "Tarefa não encontrada." });
  }

  res.status(204).send(); 
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
