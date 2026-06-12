import { state } from './state.js';
import { updateMainMenu, drawMainMenu } from './scenes/mainmenu.js';

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

function update() {
    if (state.gameState === "mainmenu") {
        updateMainMenu();
    } else if (state.gameState === "playing") {
        // Handle game logic
    } else if (state.gameState === "paused") {
        // Handle paused logic
    }
}

function draw() {
    ctx.fillStyle = '#000a14';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (state.gameState === "mainmenu") {
        drawMainMenu(ctx);
    } else if (state.gameState === "playing") {
        // Handle game logic
    } else if (state.gameState === "paused") {
        // Handle paused logic
    }
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

