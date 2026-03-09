const express = require('express');
const { Pool } = require('pg');
const path = require('path');

const app = express();
app.use(express.json());

// Conexão ao Banco via Variáveis de Ambiente
const pool = new Pool({
    host: process.env.DB_HOST || 'gv-db',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'mysecretpassword',
    database: process.env.DB_NAME || 'postgres',
    port: process.env.DB_PORT || 5432
});

// Middleware para Limpeza de Cache (Force Refresh)
app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    res.set('Surrogate-Control', 'no-store');
    next();
});

// Serviço Estático com Cache desabilitado para arquivos HTML/JS críticos
app.use(express.static(path.join(__dirname, 'build'), {
    etag: false,
    maxAge: '0',
    setHeaders: (res, path) => {
        if (path.endsWith('.html') || path.endsWith('.js')) {
            res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        }
    }
}));

// Rota de Login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username e password são obrigatórios' });
    }

    try {
        const result = await pool.query(
            'SELECT id, username, email FROM users WHERE username = $1 AND password = $2',
            [username, password]
        );

        if (result.rows.length > 0) {
            return res.status(200).json({
                message: 'Login successful',
                user: { id: result.rows[0].id, username: result.rows[0].username, email: result.rows[0].email }
            });
        } else {
            return res.status(401).json({ error: 'Usuário ou senha inválidos' });
        }
    } catch (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Erro interno no servidor' });
    }
});

// Rota de Registro
app.post('/api/register', async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'As senhas não coincidem' });
    }

    try {
        // Verifica se usuário já existe
        const userExists = await pool.query('SELECT id FROM users WHERE username = $1 OR email = $2', [username, email]);
        if (userExists.rows.length > 0) {
            return res.status(400).json({ message: 'Usuário ou e-mail já estão em uso' });
        }

        // Insere o novo usuário
        await pool.query(
            'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id',
            [username, email, password]
        );

        return res.status(201).json({ message: 'Registration successful!' });
    } catch (err) {
        console.error('Database error on register:', err);
        return res.status(500).json({ message: 'Erro interno no servidor' });
    }
});

// Fallback SPA - qualquer rota não-API retorna o index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Escuta de Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor pronto na porta ${PORT}`);
});
