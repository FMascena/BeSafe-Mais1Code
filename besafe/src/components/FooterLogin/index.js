import React from "react";
import { StyledFooterLogin, Button, Text } from "./FooterLoginStyles";

const FooterLogin = () => {
  return (
    <StyledFooterLogin>
      <Button>Criar nova conta</Button>
      <Text> © BeSafe </Text>
    </StyledFooterLogin>
  );
}

export default FooterLogin;

