import React, { useContext } from "react";
import "./styles.css";
import Nav from "./Nav";
import Editor from "./Editor";
import Search from "./Search";
// import { createRepository } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

function MainPage() {
  const { user, logout } = useContext(AuthContext);

  let navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  async function handleSearch() {
    navigate("/comunidade", {replace: false});
  };

  // const handleNewRepo = async ({ code, color, descricao, nomeProjeto }) => {
  //   try {
  //     await createRepository(user?.id, code, color, descricao, nomeProjeto);
  //     navigate("/comunidade", {replace: false});
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <div id="main">
      <Nav onLogout={handleLogout} />
      <Search onSearch={handleSearch} />
      <Editor />
    </div>
  );
}

export default MainPage;
