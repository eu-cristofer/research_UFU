/**
 * Servidor Express para apresentações da dissertação
 * Diagnóstico de Falhas em Máquinas Rotativas
 */

const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../assets')));
app.use(express.json());

// Configuração do Reveal.js
app.use('/reveal', express.static(path.join(__dirname, '../node_modules/reveal.js')));

// Rotas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/defesa', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/defesa.html'));
});

app.get('/qualificacao', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/qualificacao.html'));
});

app.get('/progresso', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/progresso.html'));
});

// API para dados das apresentações
app.get('/api/slides/:presentation', (req, res) => {
    const presentation = req.params.presentation;
    const slidesPath = path.join(__dirname, `../slides/${presentation}.json`);
    
    try {
        const slides = require(slidesPath);
        res.json(slides);
    } catch (error) {
        res.status(404).json({ error: 'Apresentação não encontrada' });
    }
});

// WebSocket para controle remoto
io.on('connection', (socket) => {
    console.log('Cliente conectado:', socket.id);
    
    socket.on('slide-changed', (data) => {
        socket.broadcast.emit('slide-changed', data);
    });
    
    socket.on('presentation-started', (data) => {
        socket.broadcast.emit('presentation-started', data);
    });
    
    socket.on('disconnect', () => {
        console.log('Cliente desconectado:', socket.id);
    });
});

// Iniciar servidor
server.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📊 Apresentações disponíveis:`);
    console.log(`   - Defesa: http://localhost:${PORT}/defesa`);
    console.log(`   - Qualificação: http://localhost:${PORT}/qualificacao`);
    console.log(`   - Progresso: http://localhost:${PORT}/progresso`);
});

module.exports = app;
