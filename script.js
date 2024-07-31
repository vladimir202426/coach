document.addEventListener('DOMContentLoaded', () => {
    const darkColors = [
        '#8B0000', '#2F4F4F', '#556B2F', '#8B4513',
        '#483D8B', '#2E8B57', '#4682B4', '#6A5ACD',
        '#7B68EE', '#8A2BE2', '#4B0082', '#9932CC'
    ];

    function getRandomDarkColor() {
        return darkColors[Math.floor(Math.random() * darkColors.length)];
    }

    function changeColors() {
        document.querySelectorAll('h2').forEach(h2 => {
            h2.style.color = getRandomDarkColor();
        });
    }

    setInterval(changeColors, 3000); // Cambia colores cada 3 segundos
});
