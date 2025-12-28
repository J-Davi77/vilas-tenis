const animatedElems = document.querySelectorAll(".animated");
const modeloHtmlTenis = `<div class="tenis-card animated">
<div class="tenis-img-container">
                            <img
                                class="tenis-img"
                                src="imgs/tenis/img-1.jpeg"
                                alt="Nike Air Force 1"
                                loading="lazy"
                                />
                                </div>
                        <div class="content">
                            <div class="categorias">
                                <span class="categoria">Casual</span>
                                <span class="categoria">Clássicos</span>
                            </div>

                            <div class="nome-container">
                                <h3 class="nome">Nike Air Force 1</h3>
                                <span class="colorway">Triple White</span>
                            </div>

                            <div class="preco-container">
                                <p class="preco-partida">A partir de:</p>

                                <span class="preco">
                                    <span class="moeda">R$</span>
                                    299,99
                                </span>
                                </div>
                                
                                <div class="btn-container">
                                <button class="detalhes-btn primary">
                                Ver detalhes
                                </button>
                                <button class="favorito-btn secondary">
                                    Adicionar aos favoritos
                                    </button>
                                    </div>
                                    </div>
                    </div>`;
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

const tenisContainer = document.querySelector("#tenis-container");
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
closeMenuBtn.addEventListener('click', closeMenu);
