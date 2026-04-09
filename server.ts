// server.ts
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conexão com MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/carmen_sandiego';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Conectado ao MongoDB'))
  .catch(err => console.error('❌ Erro ao conectar ao MongoDB:', err));

// Schema do Usuário
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

// Middleware para Limpeza de Cache (Force Refresh)
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  res.set('Surrogate-Control', 'no-store');
  next();
});

app.options('*', (req, res) => {
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.status(200).end();
});

app.post('/api/register', async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  console.log('📥 Registro recebido:', req.body);

  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).send({ message: 'Todos os campos são obrigatórios.' });
  }

  if (password !== confirmPassword) {
    return res.status(400).send({ message: 'Passwords do not match.' });
  }

  try {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).send({ message: 'Usuário ou e-mail já cadastrado.' });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    console.log('✅ Usuário registrado no banco:', { username, email });
    return res.status(201).send({ message: 'Registration successful!' });
  } catch (error) {
    console.error('Erro no registro:', error);
    return res.status(500).send({ message: 'Erro interno no servidor.' });
  }
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  console.log('🔐 Tentativa de login:', req.body);

  try {
    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(400).send({ message: 'Nome de usuário ou senha incorretos.' });
    }

    console.log('✅ Login bem-sucedido.');
    return res.status(200).send({
      message: 'Login successful',
      user: { id: user._id, username: user.username },
      token: 'mock-token'
    });
  } catch (error) {
    console.error('Erro no login:', error);
    return res.status(500).send({ message: 'Erro interno no servidor.' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});

