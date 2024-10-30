// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Define o tempo de espera na tela de carregamento (em milissegundos)
    const loadingTime = 3000; // 3 segundos

    // Função para redirecionar para a tela de login
    setTimeout(() => {
        window.location.href = "login.html";
    }, loadingTime);
});
