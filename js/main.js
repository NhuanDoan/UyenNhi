 document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. PRELOADER ---
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', function() {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // --- 2. MOBILE MENU ---
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    menuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // --- 3. CAROUSEL (SLIDER) ---
    const slider = document.querySelector('.carousel-slider');
    const slides = slider.querySelectorAll('.flex-shrink-0');
    const slideCount = slides.length;
    let currentSlide = 0;
    
    function showSlide(slideIndex) {
        if (slideIndex < 0) {
            currentSlide = slideCount - 1;
        } else if (slideIndex >= slideCount) {
            currentSlide = 0;
        } else {
            currentSlide = slideIndex;
        }
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    document.getElementById('next-slide').addEventListener('click', () => showSlide(currentSlide + 1));
    document.getElementById('prev-slide').addEventListener('click', () => showSlide(currentSlide - 1));
    setInterval(() => showSlide(currentSlide + 1), 5000);

    // --- 4. COUNTDOWN TIMER ---
    const countDownDate = new Date("Feb 22, 2026 00:00:00").getTime();
    const timerInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("d").innerText = days < 10 ? '0' + days : days;
        document.getElementById("h").innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById("m").innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById("s").innerText = seconds < 10 ? '0' + seconds : seconds;

        if (distance < 0) {
            clearInterval(timerInterval);
            document.getElementById("d").innerText = "00";
            document.getElementById("h").innerText = "00";
            document.getElementById("m").innerText = "00";
            document.getElementById("s").innerText = "00";
        }
    }, 1000);

    // --- 5. GALLERY MODAL (Lightbox) ---
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-image');
    const closeButton = document.getElementById('modal-close');
    document.querySelectorAll('.gallery-item img').forEach(item => {
        item.addEventListener('click', function() {
            modalImg.src = this.src;
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        });
    });
    closeButton.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    });
    modal.addEventListener('click', (e) => { 
        if (e.target === modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    });


    // --- 6. FALLING ICONS (Hoa & Tim) ---
    const iconContainer = document.getElementById("falling-icons");
    const icons = ["🌸", "💖", "✨", "🎉", "🎂"];
    
    function createFallingIcon() {
        const icon = document.createElement("div");
        icon.classList.add("falling-icon");
        icon.innerText = icons[Math.floor(Math.random() * icons.length)];
        
        icon.style.left = Math.random() * 100 + "vw";
        const duration = (Math.random() * 6 + 8) + "s";
        icon.style.animationDuration = duration;
        icon.style.animationDelay = (Math.random() * 4) + "s";
        
        iconContainer.appendChild(icon);
        setTimeout(() => {
            icon.remove();
        }, (parseFloat(duration) + parseFloat(icon.style.animationDelay)) * 1000);
    }
    setInterval(createFallingIcon, 400);

    // --- 7. MỚI: HIỆU ỨNG FADE-IN KHI CUỘN ---
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 }); 
    sections.forEach(section => {
        observer.observe(section);
    });
});