import React from "react";
import { BsPerson } from "react-icons/bs";
import { TbMapSearch } from "react-icons/tb";
import { GiRadarSweep } from "react-icons/gi";
import { GoAlert } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { FiThumbsUp } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import { StyledPage  } from "./UserPanelStyles";

import PremiumButton from "../PremiumButton";







const UserPanel = () => {
  return (
   <StyledPage>
      <ul>
        <li>
          <BsPerson />
          <a href="/profile">Login e Conta</a>
        </li>
        <li>
          <TbMapSearch />
          <a href="/location">Mapas de Previsão</a>
        </li>
        <li>
          <GiRadarSweep />
          <a href="/sweep">Radar em tempo Real</a>
        </li>
        <li className="special">
          <GoAlert />
          <a href="/alerts">Avisos e Alertas</a>
        </li>
        <li >
          <IoSettingsOutline />
          <a href="/settings">Configurações</a>
        </li>
        <li>
          <FiThumbsUp />
          <a href="/thumbs-up">Avaliar nosso aplicativo</a>
        </li>
        <li>
          <AiOutlineMail />
          <a href="/mail">Contato e sugestões</a>
        </li>
        <li>
          <BsShare />
          <a href="/share">Compartilhe</a>               
        </li>
        <li>
        <PremiumButton/>
        </li>
      </ul>
      


      </StyledPage>


  );
};



export default UserPanel;

