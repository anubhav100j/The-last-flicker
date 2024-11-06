// script.js

// Get the elements
const menuBtn = document.getElementById('menu-btn');
const menuOverlay = document.getElementById('menu-overlay');
const menuItems = document.querySelectorAll('.menu-content ul li');

// Add click event to the menu button
menuBtn.addEventListener('click', () => {
    // Check if the menu is currently hidden
    if (menuOverlay.style.display === 'none' || menuOverlay.style.display === '') {
        // Show the menu overlay
        menuOverlay.style.display = 'flex';
        
        // Animate the menu items with a stagger effect
        gsap.fromTo(menuItems, 
            { opacity: 0, y: -20 },   // Start state (hidden, move up)
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 } // End state (visible, move down), with stagger
        );
        
        // Change icon to 'close'
        menuBtn.textContent = '×';
    } else {
        // Animate the menu items to disappear
        gsap.to(menuItems, 
            { opacity: 0, y: -20, duration: 0.5, stagger: 0.1, onComplete: () => {
                menuOverlay.style.display = 'none';  // Hide the overlay after animation
            }}
        );
        
        // Change icon back to menu
        menuBtn.textContent = '☰';
    }
});