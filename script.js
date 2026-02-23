document.addEventListener('DOMContentLoaded', () => {
    console.log('GitHub Pages Test Site Loaded Successfully!');

    const bgGradient = document.querySelector('.background-gradient');
    const reposSection = document.querySelector('.repos');
    const exploreBtn = document.getElementById('btn-explore');

    // Mouse movement background effect
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;

        bgGradient.style.background = `
            radial-gradient(circle at ${x}% ${y}%, rgba(88, 166, 255, 0.15) 0%, transparent 40%),
            radial-gradient(circle at ${100 - x}% ${100 - y}%, rgba(188, 140, 255, 0.15) 0%, transparent 40%)
        `;
    });

    // Explore button scroll effect
    exploreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        reposSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
