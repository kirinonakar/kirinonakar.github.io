document.addEventListener('DOMContentLoaded', () => {
    console.log('GitHub Pages Test Site Loaded Successfully!');

    const bgGradient = document.querySelector('.background-gradient');
    const appsSection = document.getElementById('apps');
    const exploreBtn = document.getElementById('btn-explore');

    // Mouse movement background effect with smooth Lerp interpolation
    let currentX = 50;
    let currentY = 50;
    let targetX = 50;
    let targetY = 50;
    const ease = 0.05; // Lower values mean smoother, slower movement

    document.addEventListener('mousemove', (e) => {
        // Restrict gradient movement within a narrow range around the center (35% to 65%)
        targetX = 50 + (e.clientX / window.innerWidth - 0.5) * 30;
        targetY = 50 + (e.clientY / window.innerHeight - 0.5) * 30;
    });

    function animateBackground() {
        currentX += (targetX - currentX) * ease;
        currentY += (targetY - currentY) * ease;

        bgGradient.style.background = `
            radial-gradient(circle at ${currentX}% ${currentY}%, rgba(88, 166, 255, 0.08) 0%, transparent 60%),
            radial-gradient(circle at ${100 - currentX}% ${100 - currentY}%, rgba(188, 140, 255, 0.08) 0%, transparent 60%)
        `;

        requestAnimationFrame(animateBackground);
    }
    animateBackground();

    // Explore button scroll effect
    exploreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        appsSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
