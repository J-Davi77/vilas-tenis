// Animação de scroll
const animatedElems = document.querySelectorAll(".animated");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    },
    {
        threshold: 0.33,
    }
);

animatedElems.forEach((elem) => observer.observe(elem));

// Header responsivo com sidebar
const menuBtn = document.querySelector("#menu-btn");
const closeMenuBtn = document.querySelector("#sidebar-close-btn");
const overlay = document.querySelector("#sidebar-overlay");

function openMenu() {
    overlay.classList.add("show");
}

function closeMenu() {
    overlay.classList.remove("show");
}

menuBtn.addEventListener("click", openMenu);

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeMenu();
});

closeMenuBtn.addEventListener("click", closeMenu);

// Mostrar respostas

const faqItens = document.querySelectorAll(".faq-item");

faqItens.forEach(item => {
    item.querySelector(".faq-pergunta").addEventListener("click", () => {

        const EstaAtivo = item.classList.contains("active");

        faqItens.forEach(outroItem => {
            outroItem.classList.remove("active");
        });

        if (!EstaAtivo) {
            item.classList.add("active");
        }
    });
});