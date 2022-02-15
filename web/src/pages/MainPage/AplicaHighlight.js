import hljs from "highlight.js";

export async function aplicaHighlight(linguagem) {
  const areaCodigo = document.getElementById("code__wrapper");
  const codigo = document.getElementById("code").innerText;
  areaCodigo.innerHTML = `<code id="code" class="text__editor hljs ${linguagem}" contenteditable="true" aria-label="Editor de código"></code>`;
  areaCodigo.firstChild.textContent = codigo;

  const code = document.getElementById("code");
  hljs.highlightElement(code);
}
