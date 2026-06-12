import { state } from '../state.js';
import { input } from '../input.js'

export function updateClickToStart() {
    console.log('update running, clicked:', input.clicked);
    if (input.clicked) {
        state.gameState = 'mainmenu';
        document.documentElement.requestFullscreen();
    }
}

export function drawClickToStart(ctx) {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, state.width, state.height);
    ctx.fillStyle = '#fff';
    ctx.font = '24px Silkscreen';
    ctx.textAlign = 'center';
    ctx.fillText("Click to Begin", state.width/2, state.height/2)

}

