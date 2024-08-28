document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".newsletter");
    const emailInput = form.querySelector(".newsletter__input");
    const modal = document.getElementById("modal");
    const fecharModalBtn = document.getElementById("fechar-modal");

    // Garante que a modal esteja fechada quando a página carrega
    modal.close(); // Fecha a modal de forma explícita

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio do formulário
        const email = emailInput.value;
        if (validateEmail(email)) {
            emailInput.classList.remove("input-error");
            
            modal.showModal();
            emailInput.value = ""
        } else {
            emailInput.classList.add("input-error"); 
            alert("Por favor, insira um endereço de e-mail válido.");
        }
    });

    fecharModalBtn.addEventListener("click", function () {
        modal.close(); // Fecha a modal ao clicar em "Ok"
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]{2,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;
        return re.test(String(email).toLowerCase());
    }

    emailInput.addEventListener("input", function () {
        emailInput.classList.remove("input-error");
    });
});
