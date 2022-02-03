import React from "react";
import Menu from "../menu/Menu";
import EditorCodigo from "./EditorCodigo";
import "./mainpage.css";

function Editor() {
  return (
    <main className="main">
      <Menu />
      <EditorCodigo />
    </main>
  );
}

export default Editor;
