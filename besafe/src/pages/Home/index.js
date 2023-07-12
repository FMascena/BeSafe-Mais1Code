import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Início</h1>
      <Link to={"/login"}>
        <button>Login</button>
      </Link>
      <Link to={"/cadastro"}>
        <button>Cadastro</button>
      </Link>
    </div>
  );
}

export default Home;