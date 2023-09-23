import styled from "styled-components";

export const ButtonStyles = styled.button`
  display: flex;
  align-items: center;
  padding: 18px 20px; /* Aumenta o espaçamento vertical e horizontal do botão */
  background-color: #0062BD;
  color: #ffffff; /* Cor do texto */
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold; /* Deixa o texto em negrito */
  width: 90vw; /* Ajusta a largura do botão em cerca de 70% da tela */
  height: 100px;
  margin-top: 100px;

  /* Ajuste para alinhar o texto à esquerda */
  span {
    text-align: left;
    font-size: 15px;
  }

  svg {
    margin-right: 20px;
    fill: #ffffff ;
    width: 24px; /* Ajuste o tamanho do ícone conforme necessário */
    height: 24px; /* Ajuste o tamanho do ícone conforme necessário */
  }

  &:hover {
    background-color: #0056b3; /* Azul mais claro */
  }

  @media (max-width: 768px) {
    /* Estilos para telas menores ou iguais a 768px */
    width: 100%; /* Preencher a largura da tela */
    height: 80px;
    margin-top: 50px;
  }
`;
