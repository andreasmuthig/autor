
const hero = document.getElementById('hero');
hero.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    hero.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});
hero.addEventListener('mouseleave', () => {
    hero.style.transform = `rotateX(0deg) rotateY(0deg)`;
});
function scrollToGrid() {
    document.getElementById('grid').scrollIntoView({ behavior: 'smooth' });
}
function toggleTheme() {
    document.documentElement.classList.toggle('theme-dark');
    document.documentElement.classList.toggle('theme-light');
}
