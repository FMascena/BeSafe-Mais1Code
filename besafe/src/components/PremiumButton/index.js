import React from "react";
import { SlDiamond } from "react-icons/sl";
import { ButtonStyles  } from "./ButtonSignUpStyles";

const PremiumButton = () => {
    return (
        <ButtonStyles>
            <SlDiamond />
          <span>Assinatura Premium</span>
        </ButtonStyles>
  );
}

export default PremiumButton;