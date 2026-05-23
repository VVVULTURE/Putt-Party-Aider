const socket = io();

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

socket.on('updateGameState', (gameState) => {
    // Update the frontend with the new game state
    console.log(gameState);
});

function addPlayer(playerName) {
    socket.emit('addPlayer', playerName);
}

function startGame() {
    socket.emit('startGame');
}

function nextHole() {
    socket.emit('nextHole');
}

function applyPowerUp(powerUp, playerId) {
    socket.emit('applyPowerUp', powerUp, playerId);
}
