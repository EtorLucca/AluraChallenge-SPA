import React from "react";
import { Button } from "@mui/material";
import "https://kit.fontawesome.com/389645fe7b.js";

function Repositories({ repositories, onDeleteRepo }) {
  return (
    <div className="repo">
      {repositories.map((repository) => (
        <div className="project" key={repository._id}>
          <div
            className="code__navegacao"
            style={{ backgroundColor: repository.color }}
          >
            <div className="code__navegacao--text">
              <div className="elipse__small red__small">
                <span className="none">.</span>
              </div>
              <div className="elipse__small yellow__small">
                <span className="none">.</span>
              </div>
              <div className="elipse__small green__small">
                <span className="none">.</span>
              </div>
              <div className="text__navegacao">
                <xmp>{repository.code}</xmp>
              </div>
            </div>
          </div>
          <div className="project__data">
            <div>
            <h2 className="projetos__titulo">{repository.nomeProjeto}</h2>
            <span className="projetos__descricao">{repository.descricao}</span>
            </div>
            <div>
              <Button
                className="btn-delete"
                color="warning"
                onClick={() => onDeleteRepo(repository)}
                size="small"
                variant="outlined"
              >
                Apagar
              </Button>
            </div>
          </div>
          <div className="projetos__chat">
            <div className="projetos__chat--modificador">
              <div className="projetos__comentarios">
                <i className="fas fa-comment"></i>
                <span className="contador__comentarios">9</span>
              </div>
              <div className="projetos__like">
                <i className="fas fa-heart"></i>
                <span className="contador__like">9</span>
              </div>
            </div>
            <div className="projetos__perfil">
              <img
                src="../../img/foto-perfil.png"
                alt="imagem perfil"
                className="header__perfil--img"
              />
              <span className="header__perfil--nome">{repository.user}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Repositories;
