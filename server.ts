// server.ts
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Banco de dados falso (memória)
const mockUsers = [
  { username: 'kami1', email: 'kami@email.com', password: 'senha123' }
];

app.options('*', (req, res) => {
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.status(200).end();
});

app.post('/register', (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  console.log('📥 Registro recebido:', req.body);

  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).send({ message: 'Todos os campos são obrigatórios.' });
  }

  if (password !== confirmPassword) {
    return res.status(400).send({ message: 'Passwords do not match.' });
  }

  const existingUser = mockUsers.find(user => user.username === username);
  const existingEmail = mockUsers.find(user => user.email === email);

  if (existingUser) {
    return res.status(400).send({ message: 'Username already registered.' });
  }

  if (existingEmail) {
    return res.status(400).send({ message: 'Email already registered.' });
  }

  mockUsers.push({ username, email, password });
  console.log('✅ Usuário mock registrado:', { username, email });
  return res.status(201).send({ message: 'User registered successfully' });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  console.log('🔐 Tentativa de login:', req.body);

  const user = mockUsers.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.status(400).send({ message: 'Nome de usuário ou senha incorretos.' });
  }

  console.log('✅ Login mock bem-sucedido.');
  return res.status(200).send({ message: 'Login bem-sucedido.', token: 'mock-token' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor mock rodando na porta ${PORT}`);
});
