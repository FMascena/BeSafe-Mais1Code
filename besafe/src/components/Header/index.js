import React from "react";
import { HeaderWrapper, Logo, AppName } from "./HeaderStyles";
import logoImage from "../../assets/logo.png";


const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={logoImage} alt="Logo do App" />
      <AppName>BeSafe</AppName>
    </HeaderWrapper>
  );
};

export default Header;




