import { state } from '../state.js';

export function updateMainMenu() {

}

export function drawMainMenu(ctx) {
    const grad = ctx.createLinearGradient(0, 0, 0, state.height);
    grad.addColorStop(0, '#000a14');
    grad.addColorStop(1, '#001a2e');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, state.width, state.height);
}