import hljs from "highlight.js";

async function mudaLinguagem(){
  const linguagem = document.getElementById("project__language--select");
  const areaCodigo = document.getElementById("code__wrapper");
  const codigo = document.getElementById("code");
  areaCodigo.innerHTML = `<code class="text__editor hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>`;
  areaCodigo.firstChild.textContent = codigo.innerText;
}

export async function aplicaHighlight() {
  const codigo = document.getElementById("code");
  await mudaLinguagem();
  hljs.highlightElement(codigo);
}
