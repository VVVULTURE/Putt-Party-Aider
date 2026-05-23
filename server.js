const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const GameLogic = require('./gameLogic');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const game = new GameLogic();

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('addPlayer', (playerName) => {
        game.addPlayer(playerName);
        io.emit('updateGameState', game);
    });

    socket.on('startGame', () => {
        game.startGame();
        io.emit('updateGameState', game);
    });

    socket.on('nextHole', () => {
        game.nextHole();
        io.emit('updateGameState', game);
    });

    socket.on('applyPowerUp', (powerUp, playerId) => {
        game.applyPowerUp(powerUp, playerId);
        io.emit('updateGameState', game);
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
