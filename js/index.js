const objectToEncrypt = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const objectToDecrypt = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u",
};

const btnEncrypt = document.querySelector(".btn-encrypt");
const btnDecrypt = document.querySelector(".btn-decrypt");
const btnClear = document.querySelector(".btn-clear");
const btnCopy = document.querySelector(".btn-copy");

const inputMensaje = document.querySelector(".input-mensaje");
const panelBienvenida = document.querySelector(".bienvenida");
const panelResultado = document.querySelector(".resultado");
const nuevoMensaje = document.querySelector(".nuevo-mensaje");

inputMensaje.addEventListener("input", (event) => validCharacters(event));
btnEncrypt.addEventListener("click", () => encrypt());
btnDecrypt.addEventListener("click", () => dencrypt());
btnClear.addEventListener("click", () => clear());
btnCopy.addEventListener("click", () => copy());

const encrypt = () => {
  let newText = inputMensaje.value;
  if (!newText)
    return Swal.fire({
      icon: "warning",
      title: `<div style="font-family: 'Inter', sans-serif">Ingrese un mensaje para encriptar.</div>`,
      allowOutsideClick: false,
    });

  const characterArray = Array.from(newText);
  const newMessage = characterArray.map((char) => getCharacterToEncrypt(char));

  inputMensaje.value = "";
  nuevoMensaje.innerHTML = newMessage.join("");

  panelResultado.classList.remove("hide-element");
  panelBienvenida.classList.add("hide-element");
};

const getCharacterToEncrypt = (char) => {
  const newChar = objectToEncrypt[char];
  return !newChar ? char : newChar;
};

const dencrypt = () => {
  let newText = inputMensaje.value;
  if (!newText)
    return Swal.fire({
      icon: "warning",
      title: `<div style="font-family: 'Inter', sans-serif">Ingrese un mensaje para desencriptar.</div>`,
      allowOutsideClick: false,
    });

  Object.keys(objectToDecrypt).forEach((char) => {
    newText = replaceCharacterToDecrypt(newText, char, objectToDecrypt[char]);
  });

  inputMensaje.value = "";
  nuevoMensaje.innerHTML = newText;

  panelResultado.classList.remove("hide-element");
  panelBienvenida.classList.add("hide-element");
};

const replaceCharacterToDecrypt = (text, char, newValue) =>
  text.replace(new RegExp("\\" + char + "", "g"), newValue);

const clear = () => {
  nuevoMensaje.innerHTML = "";
  inputMensaje.value = "";
  panelBienvenida.classList.remove("hide-element");
  panelResultado.classList.add("hide-element");
};

const copy = () => {
  navigator.clipboard.writeText(nuevoMensaje.innerHTML);
  Toast.fire({
    icon: "success",
    title: `<div style="font-family: 'Inter', sans-serif">El mensaje fue copiado.</div>`,
  });
};
