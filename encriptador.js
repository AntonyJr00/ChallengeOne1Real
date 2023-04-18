const textarea = document.getElementById("textarea");
const encriptarButton = document.getElementById("buttonencriptar");
const desencriptarButton = document.getElementById("buttondesencriptar");
const resultado = document.getElementById("resultado");
const copiarButton = document.getElementById("buttoncopiar");
const cardResult = document.querySelector(".container-resp");
const cardNoResult = document.querySelector(".container-noresp");

textarea.addEventListener("input", () => {
  encriptarButton.addEventListener("click", () => {
    const textToEncriptar = textarea.value;
    function encriptador(msg = "") {
      if (typeof msg !== "string") return console.log("Texto no valido");
      msg = msg.toLowerCase();
      let veredicto = false;
      for (const letra of msg) {
        /^[a-z]+$/.test(msg) || letra === " "
          ? (veredicto = true)
          : (veredicto = false);
      }

      let letras = msg.split("");
      let newTexto = [];
      if (veredicto) {
        letras.forEach((vocal) => {
          vocal === "a"
            ? newTexto.push("ai")
            : vocal === "e"
            ? newTexto.push("enter")
            : vocal === "i"
            ? newTexto.push("imes")
            : vocal === "o"
            ? newTexto.push("ober")
            : vocal === "u"
            ? newTexto.push("ufat")
            : newTexto.push(vocal);
        });
      }
      return newTexto.join("");
    }

    let mensajeEncriptado = encriptador(textToEncriptar);

    if (mensajeEncriptado === "") {
      cardNoResult.style.display = "block";
      cardResult.style.display = "none";
    } else {
      cardNoResult.style.display = "none";
      cardResult.style.display = "flex";
    }

    resultado.textContent = mensajeEncriptado;
    return mensajeEncriptado;
  });

  desencriptarButton.addEventListener("click", () => {
    const textToDesencriptar = textarea.value;
    let textoToDesencriptar = desencriptador(textToDesencriptar);

    function desencriptador(msg = "") {
      if (typeof msg !== "string") return console.log("Texto no valido");

      msg = msg.toLowerCase();
      for (const letra of msg) {
        if (/^[a-z]+$/.test(msg) || letra === " ");
        else return console.log("Introduzca solo letras del abecedario");
      }

      let newMessage = msg.toLowerCase();
      const arrRegExp = [
        [/ai/, "a"],
        [/enter/, "e"],
        [/imes/, "i"],
        [/ober/, "o"],
        [/ufat/, "u"],
      ];

      for (let i = 0; i < arrRegExp.length; i++) {
        newMessage = newMessage.replace(
          new RegExp(arrRegExp[i][0], "g"),
          arrRegExp[i][1]
        );
      }
      console.log(newMessage);

      if (newMessage === "") {
        cardNoResult.style.display = "block";
        cardResult.style.display = "none";
      } else {
        cardNoResult.style.display = "none";
        cardResult.style.display = "flex";
      }
      return newMessage;
    }

    let mensajeDesencriptado = desencriptador(textoToDesencriptar);

    resultado.textContent = mensajeDesencriptado;
  });

  copiarButton.addEventListener("click", () => {
    let texto = resultado.textContent;
    navigator.clipboard.writeText(texto);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const textareas = document.getElementsByTagName("textarea");
  for (let i = 0; i < textareas.length; i++) {
    textareas[i].addEventListener("focus", function () {
      this.select();
    });
  }
});
