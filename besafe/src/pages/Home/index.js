import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarContainer, SidebarButton } from "./HomeStyles"; 

import Header from "../../components/Header"; 
import PremiumButton from "../../components/PremiumButton"; 
import UserPanel from "../../components/UserPanel"; 

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
   
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    
    setSidebarOpen(false);
  };

  return (
    <div>
      <h1>Início</h1>
      <Link to={"/login"}>
        <button>Login</button>
      </Link>
      <Link to={"/cadastro"}>
        <button>Cadastro</button>
      </Link>
      <SidebarButton onClick={openSidebar}>Abrir Sidebar</SidebarButton>

      <SidebarContainer isOpen={isSidebarOpen}>
        <button onClick={closeSidebar}>Fechar Sidebar</button>
        <Header />
        <PremiumButton />
        <UserPanel />
      </SidebarContainer>
    </div>
  );
};

export default Home;
