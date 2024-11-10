// Check if GSAP and ScrollTrigger are loaded
console.log("GSAP type:", typeof gsap);
console.log("ScrollTrigger type:", typeof ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    // Ensure GSAP and ScrollTrigger are registered
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);

        console.log("GSAP and ScrollTrigger are ready to use!");

        // Menu Animation Setup
        const menuBtn = document.getElementById('menu-btn');
        const menuOverlay = document.getElementById('menu-overlay');
        const menuItems = document.querySelectorAll('.menu-content ul li');

        menuBtn.addEventListener('click', () => {
            if (menuOverlay.style.display === 'none' || menuOverlay.style.display === '') {
                menuOverlay.style.display = 'flex';
                gsap.fromTo(menuItems, 
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 }
                );
                menuBtn.textContent = '×';
            } else {
                gsap.to(menuItems, 
                    { opacity: 0, y: -20, duration: 0.5, stagger: 0.1, onComplete: () => {
                        menuOverlay.style.display = 'none';
                    }}
                );
                menuBtn.textContent = '☰';
            }
        });

        // Raindrop Animation Setup
        const raindropCount = 150;
        const raindropDuration = 3;
        const raindropDelay = 3;

        for (let i = 0; i < raindropCount; i++) {
            const rainDrop = document.createElement('div');
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
                duration: raindropDuration + Math.random() * 2,
                repeat: -1,
                delay: Math.random() * -raindropDelay,
                ease: "linear",
            });
        }

        // Lightning Animation Setup
        const lightningFlash = document.querySelector('.lightning-flash');
        const lightningDuration = 0.3;
        const lightningDelayMin = 5000;
        const lightningDelayMax = 15000;

        function triggerLightning() {
            if (Math.random() > 0.5) {
                lightningFlash.classList.add('top-center');
                lightningFlash.classList.remove('top-right');
            } else {
                lightningFlash.classList.add('top-right');
                lightningFlash.classList.remove('top-center');
            }

            lightningFlash.style.animation = `lightning ${lightningDuration}s ease-in-out`;
            lightningFlash.addEventListener('animationend', () => {
                lightningFlash.style.animation = '';
            });

            const nextLightning = Math.random() * (lightningDelayMax - lightningDelayMin) + lightningDelayMin;
            setTimeout(triggerLightning, nextLightning);
        }
        triggerLightning();

        

    } else {
        console.error("GSAP or ScrollTrigger is not loaded correctly.");
    }
});