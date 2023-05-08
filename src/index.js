
//Variaveis pegando a entrada inserida para ser criptografada e descriptografada
const textCriptografar = document.getElementById("textCriptografar");
const buttonCriptografar = document.getElementById("buttonCriptografar");
const buttonDescriptografar = document.getElementById("buttonDescriptografar");

function criptografar(textCriptografar) {
  let tetx
  if (textCriptografar === e) {
  }
}

function criptografar(texto, chave) {
  let criptografado = "";
  for (let index = 0; index < texto.length; index++) {
    let letra = texto[index];
    if (letra.match(/[a-z]/i)) {
      let codigo = texto.charCodeAt(index);
      if (codigo >= 65 && codigo <= 90) {
        letra = String.fromCharCode(((codigo - 65 + chave) % 26) + 65);
      } else if (codigo >= 97 && codigo <= 122) {
        letra = String.fromCharCode(((codigo - 97 + chave) % 26) + 97);
      }
    }
    criptografado += letralll;
  }
  return criptografado;
}

function descriptografar(texto, chave) {
  return criptografar(texto, 26 - chave);
}

let textoOriginal = "exemplo de texto para criptografar";
let textoCriptografado = criptografar(textoOriginal, 3);
console.log(textoCriptografado);

let textoDescriptografado = descriptografar(textoCriptografado, 3);
console.log(textoDescriptografado);
