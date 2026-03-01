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