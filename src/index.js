const textCriptografar = document.getElementById("textCriptografar");
const buttonCriptografar = document.getElementById("buttonCriptografar");
const buttonDescriptografar = document.getElementById("buttonDescriptografar");
const resultado = document.getElementById("resultado");
const divToHide = document.querySelector(".image-display");

//funçao para criptografia
function criptografar(texto) {
  let textoCriptografado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return textoCriptografado;
}

//funçao de descriptografia
function descriptografar(texto) {
  let textoDescriptografado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return textoDescriptografado;
}

//botao de criptografar
buttonCriptografar.addEventListener("click", () => {
  const texto = textCriptografar.value;

//verificando se o campo de texto nao esta vazio
  if (texto.trim() !== "") {
    const textoCriptografado = criptografar(texto);
    //atualizando a div com o resultado
    resultado.textContent = `Texto Criptografado: ${textoCriptografado}`;
    //propriedades de estilo para o resultado
    resultado.style.textAlign = "center";
    resultado.style.fontSize = "1.2rem";
    resultado.style.color = "#0A3871";
    resultado.style.backgroundColor = "#F1F1F1";
    resultado.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
    //escondendo a div de 'mensagem não encontrada'
    divToHide.style.display = "none";
  }
});


//botão de descriptografar
buttonDescriptografar.addEventListener("click", () => {
  const texto = textCriptografar.value;
  const textoDescriptografado = descriptografar(texto);
  resultado.textContent = `Texto Descriptografado: ${textoDescriptografado}`;
});
