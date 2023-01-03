import React, { useContext } from "react";
import "./mainpage.css";
import Nav from "./Nav";
import EditorCodigo from "./EditorCodigo";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

function MainPage() {
  const { logout } = useContext(AuthContext);

  let navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  async function handleSearch() {
    navigate("/comunidade", {replace: false});
  };

  return (
    <div id="main">
      <Nav onLogout={handleLogout} />
      <Search onSearch={handleSearch} />
      <EditorCodigo />
    </div>
  );
}

export default MainPage;
