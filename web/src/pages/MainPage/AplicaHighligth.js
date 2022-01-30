import hljs from "highlight.js";

const linguagem = document.querySelector(".project__language--select");
const areaCodigo = document.querySelector(".code__wrapper");
const botao = document.querySelector(".main__button");

export function mudaLinguagem() {
  const codigo = { texto: areaCodigo.querySelector("code").innerText };
  areaCodigo.innerHTML = `<code class="text__editor hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>`;
  areaCodigo.querySelector("code").innerText = codigo.texto;
}

linguagem.addEventListener("change", () => {
  mudaLinguagem();
});

botao.addEventListener("click", () => {
  const codigo = areaCodigo.querySelector("code");
  hljs.highlightElement(codigo);
});
