
document.addEventListener('DOMContentLoaded', () => {

    const heroText = document.querySelector('header p');
    const originalText = heroText.textContent;
    heroText.textContent = '';

    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            heroText.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };

    setTimeout(typeWriter, 500);


    const sections = document.querySelectorAll('section, .terminal-block');
    sections.forEach((s, idx) => {
        s.style.opacity = '0';
        s.style.transform = 'translateY(10px)';
        s.style.transition = 'all 0.5s ease-out';

        setTimeout(() => {
            s.style.opacity = '1';
            s.style.transform = 'translateY(0)';
            console.log(`TEARIUM_KERNEL: Loaded module 0x${(idx + 1).toString(16).toUpperCase()}`);
        }, 1000 + (idx * 200));
    });


    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });


    setInterval(() => {
        if (Math.random() > 0.95) {
            document.body.style.filter = 'hue-rotate(90deg) contrast(1.5)';
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 50);
        }
    }, 2000);
});
