const snow = document.getElementById('snow');
const snowflakes = [];
function createSnowflake() {
    const el = document.createElement('span');
    el.innerHTML = '❄️';
    el.style.position = 'absolute';
    el.style.fontSize = (Math.random() * 18 + 14) + 'px';
    el.style.left = Math.random() * window.innerWidth + 'px';
    el.style.top = '-50px';
    el.style.color = '#fff';
    el.style.opacity = Math.random()*0.8+0.2;
    snow.appendChild(el);
    snowflakes.push({
        el, velY: Math.random()*2+1, velX: Math.random()*0.6-0.3
    });
}
setInterval(createSnowflake, 180);
function animateSnowflakes() {
    for (const f of snowflakes) {
        let top = parseFloat(f.el.style.top);
        let left = parseFloat(f.el.style.left);
        top += f.velY;
        left += f.velX;
        f.el.style.top = top + 'px';
        f.el.style.left = left + 'px';
        if (top > window.innerHeight) {
            f.el.remove();
        }
    }
}
setInterval(animateSnowflakes, 24);
