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

document.addEventListener("DOMContentLoaded", function () {
    // Create raindrops and animate them
    for (let i = 0; i < 150; i++) {
        let rainDrop = document.createElement('div');
        rainDrop.classList.add('raindrop');
        document.body.appendChild(rainDrop);

        gsap.set(rainDrop, {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight - window.innerHeight,
            opacity: 0.3 + Math.random() * 0.7,
            scale: 0.5 + Math.random() * 0.7,
        });

        gsap.to(rainDrop, {
            y: window.innerHeight + 100,
            duration: 3 + Math.random() * 2,
            repeat: -1,
            delay: Math.random() * -3,
            ease: "linear",
        });
    }
});
//Lightening effect at the start of the story.

document.addEventListener("DOMContentLoaded", function () {
    // Lightning flash element
    const lightningFlash = document.querySelector('.lightning-flash');

    // Function to trigger lightning
    function triggerLightning() {
        // Randomly assign top-center or top-right position
        if (Math.random() > 0.5) {
            lightningFlash.classList.add('top-center');
            lightningFlash.classList.remove('top-right');
        } else {
            lightningFlash.classList.add('top-right');
            lightningFlash.classList.remove('top-center');
        }

        // Apply the lightning animation to the element
        lightningFlash.style.animation = 'lightning 0.3s ease-in-out';

        // Remove the animation after it completes to allow re-triggering
        lightningFlash.addEventListener('animationend', () => {
            lightningFlash.style.animation = '';
        });

        // Trigger again after a random interval between 5 to 15 seconds
        const nextLightning = Math.random() * (15000 - 5000) + 5000;
        setTimeout(triggerLightning, nextLightning);
    }

    // Start the first lightning trigger
    triggerLightning();
});
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Fade in Frame 1
    gsap.fromTo("#frame1", 
        {
            opacity: 0,
            y: 100
        },
        {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#frame1",
                start: "top 80%", // Start animation when the frame enters the viewport
                toggleActions: "play none none reverse"
            }
        }
    );

    // Fade out Frame 1 and Fade in Frame 2 with Text Bubble
    gsap.fromTo("#frame2",
        {
            opacity: 0,
            y: 100
        },
        {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#frame2",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );

    // Make the Text Bubble Appear
    gsap.fromTo(".text-bubble", 
        {
            opacity: 0,
            scale: 0.8
        },
        {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.75)",
            scrollTrigger: {
                trigger: "#frame2",
                start: "top 80%", // Trigger when the frame is in the viewport
                toggleActions: "play none none reverse"
            }
        }
    );

    // Fade in Frame 3
    gsap.fromTo("#frame3",
        {
            opacity: 0,
            y: 100
        },
        {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#frame3",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// Animate text bubbles
if (textBubble) {
    gsap.fromTo(textBubble, 
        { opacity: 0, y: 20 },
        { 
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: frame,
                start: 'top center',
                end: 'bottom center',
                toggleActions: 'play none none reverse',
            }
        }
    );
}