var typed = new Typed('.texto', {
    strings:["Estudo Progamação", "Sou Web Developer", "Sou Backend Developer"],
    typeSpeed:100,
    backSpeed:80,
    backDelay:1000,
    loop:true
});

document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.carousel-item');
    const carouselSection = document.querySelector('#sobre');
    let currentItem = 0;
    let autoRotateInterval;

    function showItem(index, direction) {
        items[currentItem].classList.remove('active', 'slide-right', 'slide-left');
        
        currentItem = (index + items.length) % items.length;
        
        if (direction === 'right') {
            items[currentItem].classList.add('active', 'slide-right');
        } else if (direction === 'left') {
            items[currentItem].classList.add('active', 'slide-left');
        } else {
            items[currentItem].classList.add('active');
        }
    }

    document.querySelector('.carousel-prev').addEventListener('click', function () {
        stopAutoRotate();
        showItem(currentItem - 1, 'left');
        startAutoRotate();
    });

    document.querySelector('.carousel-next').addEventListener('click', function () {
        stopAutoRotate();
        showItem(currentItem + 1, 'right');
        startAutoRotate();
    });

    function startAutoRotate() {
        if (!autoRotateInterval) {
            autoRotateInterval = setInterval(function () {
                showItem(currentItem + 1, 'right');
            }, 15000);
        }
    }

    function stopAutoRotate() {
        clearInterval(autoRotateInterval);
        autoRotateInterval = null;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startAutoRotate();
            } else {
                stopAutoRotate();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(carouselSection);
});

document.querySelectorAll('.navbar a, .btn-box[href^="#"], .footer-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offsetTop = targetId === '#projetos' 
                ? targetElement.offsetTop - 50 
                : targetElement.offsetTop - 108;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

