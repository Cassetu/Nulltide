export const input = {
    clicked: false,
    keys: {}
};

window.addEventListener('click', () => console.log('clicked'));
window.addEventListener('click', () => {
    input.clicked = true;
});