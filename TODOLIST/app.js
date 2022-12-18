// function cadastraAtividade() {
//     if (input.value.length > 3) {
//         erro.style.display = "none";
//         criaAtividade();**
//     } else {
//         erro.style.display = "grid";
//         erro.innerHTML = `${input.value} não é uma atividade válida!`
//     }
//     limpaInput();
// }

// function limpaInput() {
//     input.value = "";
// }

// window.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") {
//         cadastraAtividade();
//     }
// });


//CRIANDO E ADICIONANADO ELEMENTOS
const titulo = document.createElement("h1");
titulo.textContent = "Olá Mundo";
titulo.classList.add("titulo");
//titulo.innerHTML = "To do list"; - Processamento mais devagar
const caixa = document.querySelector(".caixa");
const paletas_div = document.querySelector(".paletas_div");
caixa.insertBefore(titulo, paletas_div);