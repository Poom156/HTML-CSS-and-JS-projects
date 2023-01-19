const blackwatch = document.getElementById('black');
blackwatch.addEventListener('click', blackwatchfunc);

const redwatch = document.getElementById('red');
redwatch.addEventListener('click', redwatchfunc);

const purplewatch = document.getElementById('purple');
purplewatch.addEventListener('click', purplewatchfunc);

const pinkwatch = document.getElementById('pink');
pinkwatch.addEventListener('click', pinkwatchfunc);

function blackwatchfunc() {
    document.getElementById('watch-display').src = "https://westride-watch-shop.pages.dev/image/black-watch.png";
}
function redwatchfunc() {
    document.getElementById('watch-display').src = "https://westride-watch-shop.pages.dev/image/red-watch.png";
}
function purplewatchfunc() {
    document.getElementById('watch-display').src = "https://westride-watch-shop.pages.dev/image/purple-watch.png";
}
function pinkwatchfunc() {
    document.getElementById('watch-display').src = "https://westride-watch-shop.pages.dev/image/pink-watch.png";
}
