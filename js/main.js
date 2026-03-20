import { tenisArr } from "../data-tenis.js";
// Renderização dos tênis
const formataPreco = (num) =>
    num.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

export function renderTenis(arr) {
    const tenisContainer = document.querySelector("#tenis-container");
    if (tenisContainer.innerHTML) return;
    arr.forEach((tenis) => {
        const modeloHtmlTenis = `
            <div class="tenis-card animated" id="${tenis.id}">
                <div class="tenis-img-container">
                <img
                    class="tenis-img"
                    src="/vilas-tenis/imgs/tenis/img-${tenis.id}.jpeg"
                    alt="${tenis.nome}"
                    loading="lazy"
                />
            </div>
            <div class="categorias">
                ${tenis.categorias
                    .map(
                        (cat) => `<span class="categoria"
                    >${cat}</span
                >`,
                    )
                    .join("")}
            </div>

            <div class="content">
                <div class="nome-container">
                    <h3 class="nome">${tenis.nome}</h3>
                    <span class="colorway">${tenis.colorway}</span>
                </div>

                <div class="preco-container">
                    <p class="preco-partida">A partir de:</p>

                    <span class="preco"> ${formataPreco(tenis.preco)} </span>
                </div>

                <button class="detalhes-btn primary">Ver produto</button>
            </div>
        </div>
        `;
        tenisContainer.insertAdjacentHTML("beforeend", modeloHtmlTenis);
    });
}

// Animação de scroll

window.addEventListener("DOMContentLoaded", () => {
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
        },
    );

    animatedElems.forEach((elem) => observer.observe(elem));
});

// Tela de detalhes de cada tênis
function getZapLink(nomeProduto) {
    const telefone = "5513978283454";
    const mensagem = `Olá! Tenho interesse no ${nomeProduto}.`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(
        mensagem,
    )}`;

    return url;
}

const voltarBtn = document.querySelector("#voltar-btn");
const detalhesOverlay = voltarBtn.parentElement;

function verDetalhes(id) {
    const tenis = tenisArr.find((tenis) => tenis.id == id);
    const url = getZapLink(tenis.nome);

    detalhesOverlay.querySelector("#detalhes-img-tenis").src =
        `/vilas-tenis/imgs/tenis/img-${id}.jpeg`;

    detalhesOverlay.querySelector("#detalhes-categorias").innerText =
        tenis.categorias.join(" / ");

    detalhesOverlay.querySelector("#nome-tenis").innerText = tenis.nome;

    detalhesOverlay.querySelector("#colorway").innerText = tenis.colorway;

    detalhesOverlay.querySelector(".preco").innerText = formataPreco(
        tenis.preco,
    );

    detalhesOverlay.querySelector("#tenis-desc").innerText = tenis.desc;

    detalhesOverlay.querySelector("#sizes").innerHTML = tenis.tamanhos
        .map((size) => `<span class="size">${size}</span>`)
        .join("");

    detalhesOverlay.querySelector("#zap-btn").href = url;

    detalhesOverlay.classList.add("show");
}
window.addEventListener("DOMContentLoaded", () => {
    const detalhesBtns = document.querySelectorAll(".detalhes-btn");
    detalhesBtns.forEach((btn) => {
        const id = btn.closest(".tenis-card").id;
        btn.addEventListener("click", () => {
            verDetalhes(id);
        });
    });
});

function closeOverlay() {
    detalhesOverlay.classList.remove("show");
}

voltarBtn.addEventListener("click", closeOverlay);

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
//
