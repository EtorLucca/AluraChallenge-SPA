import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import { AuthProvider, AuthContext } from "./contexts/auth";

function AppRoutes() {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if(loading){
        return <div className="loading">Carregando...</div>
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage/>} />
          <Route
            exact
            path="/editor"
            element={
              <Private>
                <MainPage />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default AppRoutes;
