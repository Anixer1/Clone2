// Simple Filtering Logic
const filterButtons = document.querySelectorAll('.filters button');
const animeCards = document.querySelectorAll('.anime-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active to clicked
        button.classList.add('active');

        const filterValue = button.innerText.toLowerCase();

        animeCards.forEach(card => {
            const title = card.querySelector('h3').innerText.toLowerCase();
            // Simple mock logic for demonstration
            // In a real app, this would check genre or type
            if(filterValue === 'all') {
                card.style.display = 'block';
            } else if (title.includes(filterValue)) {
                 card.style.display = 'block';
            } else {
                // Keep visible for demo purposes since we only have 4 static cards
                card.style.display = 'block'; 
            }
        });
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#000';
    } else {
        navbar.style.background = 'rgba(0,
