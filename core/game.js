import { state } from './state.js';
import { updateMainMenu, drawMainMenu } from './scenes/mainmenu.js';
import { updateClickToStart, drawClickToStart } from './scenes/clicktostart.js';
import { input } from './input.js'

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

function update() {
    if (state.gameState === "clicktostart") {
        updateClickToStart();
    } else if (state.gameState === "mainmenu") {
        updateMainMenu();
    } else if (state.gameState === "paused") {
        // Handle paused logic
    }
}

function draw() {
    if (state.gameState === "clicktostart") {
        drawClickToStart(ctx);
    } else if (state.gameState === "mainmenu") {
        drawMainMenu(ctx);
    } else if (state.gameState === "paused") {
        // Handle paused logic
    }
}

function loop() {
    update();
    draw();
    input.clicked = false;
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

