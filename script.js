const animatedElems = document.querySelectorAll(".animated");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
}, {
    threshold: 0.33
});

animatedElems.forEach(elem => observer.observe(elem));
