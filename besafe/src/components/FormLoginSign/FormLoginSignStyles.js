
import styled from "styled-components";

export const LoginPage = styled.div`
  background: #171717;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px; /* Adicione um espaçamento interno para dispositivos móveis */
  }
`;

export const LoginForm = styled.div`
  color: white;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  text-align: center;
  max-width: 513px;

  @media (max-width: 768px) {
    max-width: 90%; /* Reduza a largura máxima para 90% em dispositivos móveis */
  }
`;

export const Input = styled.input`
  background: #373B44;
  color: white;
  border: none;
  padding: 5px;
  margin: 5px 0;
  border-radius: 10px;
  width: 100%;
  height: 44px;

  &::placeholder {
    color: white;
  }

  @media (max-width: 768px) {
    margin: 10px 0; /* Aumente a margem para dispositivos móveis */
  }
`;

export const Button = styled.button`
  background: #0062BD;
  color: white;
  border: none;
  padding: 10px;
  margin-top: 10px;
  border-radius: 20px;
  width: 100%;
  height: 44px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 20px; 
  }
  
`;


