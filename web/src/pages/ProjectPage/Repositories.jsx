import React from "react";

function Repositories({ repositories, onDeleteRepo }) {
  return (
    <>
      {repositories.map((repository) => (
        <div class="project" key={repository._id}>
          <div class="code__navegacao" style="background-color:${color};">
            <div class="code__navegacao--text">
              <div class="elipse__small red__small">
                <span class="none">.</span>
              </div>
              <div class="elipse__small yellow__small">
                <span class="none">.</span>
              </div>
              <div class="elipse__small green__small">
                <span class="none">.</span>
              </div>
              <div class="text__navegacao">
                <xmp>${code}</xmp>
              </div>
            </div>
          </div>
          <div>
            <h2 class="projetos__titulo">${nomeProjeto}</h2>
            <span class="projetos__descricao">${descricao}</span>
          </div>
          <div class="projetos__chat">
            <div class="projetos__chat--modificador">
              <div class="projetos__comentarios">
                <i class="fas fa-comment"></i>
                <span class="contador__comentarios">9</span>
              </div>
              <div class="projetos__like">
                <i class="fas fa-heart"></i>
                <span class="contador__like">9</span>
              </div>
            </div>
            <div class="projetos__perfil">
              <img
                src="./img/foto-perfil.png"
                alt="imagem perfil"
                class="header__perfil--img"
              />
              <span class="header__perfil--nome">@Étor</span>
            </div>
          </div>
          <button onClick={() => onDeleteRepo(repository)}>Apagar</button>
        </div>
      ))}
    </>
  );
}

export default Repositories;
