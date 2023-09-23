
import styled from "styled-components";


export const LoginPage = styled.div`
 background: #171717;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled.div`
  
  color: white;
  padding: 20px;
  border-radius: 5px;
  width: 100%; /* Ocupa a largura total do contêiner pai */
  text-align: center;
  max-width: 513px; /* Define uma largura máxima para o formulário */
`;

export const Input = styled.input`
  background: #373B44;
  color: white;
  border: none; /* Remover a borda */
  padding: 5px;
  margin: 5px 0;
  border-radius: 10px;
  width: 100%;
  height: 44px;
  

  &::placeholder {
    color: white;
  }
`;

export const Button = styled.button`
  background: #0062BD;
  color: white;
  border: none; /* Remover a borda */
  padding: 10px;
  margin-top: 10px;
  border-radius: 20px;
  width: 100%;
  height: 44px;
  cursor: pointer;
  
`;

export const ForgotPasswordLink = styled.a`
  text-decoration: none;
  color: white;
  margin-top: 10px;
  width: 100%; /* Ocupa a largura total do contêiner pai */
  text-align: left;
`;

export const StyledFooterLogin = styled.div`
  background: #171717;
  text-align: center;
  padding: 20px;
`;

export const Text = styled.p`
  color: white;
  font-family: Inter;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.94px;
  
`;