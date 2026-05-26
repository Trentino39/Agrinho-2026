// MENSAGEM

const btnMensagem =
document.getElementById("btnMensagem");

btnMensagem.addEventListener("click", () => {

  alert(
    "🌱 Cada pequena atitude ajuda a construir um futuro sustentável!"
  );

});

// CONTADORES

let arvores = 0;
let agua = 0;
let energia = 0;

const contadorArvores =
document.getElementById("contadorArvores");

const contadorAgua =
document.getElementById("contadorAgua");

const contadorEnergia =
document.getElementById("contadorEnergia");

document
.getElementById("btnArvore")
.addEventListener("click", () => {

  arvores++;

  contadorArvores.textContent = arvores;

});

document
.getElementById("btnAgua")
.addEventListener("click", () => {

  agua += 100;

  contadorAgua.textContent = agua;

});

document
.getElementById("btnEnergia")
.addEventListener("click", () => {

  energia += 50;

  contadorEnergia.textContent = energia;

});

// QUIZ

const resultadoQuiz =
document.getElementById("resultadoQuiz");

document
.querySelector(".correto")
.addEventListener("click", () => {

  resultadoQuiz.textContent =
  "✅ Correto! Reciclar ajuda o meio ambiente.";

  resultadoQuiz.style.color = "green";

});

document
.querySelectorAll(".errado")
.forEach(botao => {

  botao.addEventListener("click", () => {

    resultadoQuiz.textContent =
    "❌ Resposta incorreta. Pense na preservação ambiental.";

    resultadoQuiz.style.color = "red";

  });

});