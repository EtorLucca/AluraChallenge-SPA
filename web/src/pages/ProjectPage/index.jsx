import React, { useState, useEffect, useContext } from "react";
import "./projectpage.css";
import Nav from "../MainPage/Nav";
import Menu from "../menu/Menu";
import Search from "../MainPage/Search";
import Repositories from "../ProjectPage/Repositories";
import {
  getRepositories,
  destroyRepository,
} from "../../services/api";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

function ComunityPage() {
  const { user, logout } = useContext(AuthContext);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  const loadData = async(query = "") => {
    try {
      setLoading(true);
      const response = await getRepositories(user?.id, query);
      const result = await response.data.filter(project => project.nomeProjeto.toLowerCase().indexOf(query) !== -1);
      setRepositories(result);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoadingError(true);
    }
  };

  useEffect(() => {
      (async() => await loadData())();
  }, []);

  function handleLogout() {
    logout();
  }

  const handleSearch = async (query) => {
    await loadData(query);
  };

  const handleDeleteRepo = async (repository) => {
    await destroyRepository(repository.userId, repository._id);
    loadData();
  };

  if (loadingError) {
    <div className="loading">
      Erro ao carregar os dados de repositório. <Link to="/">Voltar</Link>
    </div>;
  }

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <div id="main">
      <Nav onLogout={handleLogout} />
      <Search onSearch={handleSearch} />
      <div id="index__container">
      <Menu/>
      <Repositories
        repositories={repositories}
        onDeleteRepo={handleDeleteRepo}
      />
      </div>
    </div>
  );
}

export default ComunityPage;
