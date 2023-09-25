import styled from "styled-components";

export const StyledFooterLogin = styled.div`
  background: #171717;
  text-align: center;
  padding: 20px;
`;

export const Button = styled.button`
  background: #171717;
  color: white;
  border: 2px solid #0062BD; /* Cor da borda atualizada */
  border-radius: 15px; /* Raio atualizado */
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  width: 513px; /* Largura atualizada */
  height: 44px; /* Altura atualizada */
  top: 526px; /* Posição superior atualizada */
  left: 38px; /* Posição esquerda atualizada */

  @media (max-width: 768px) {
    /* Define estilos específicos para dispositivos com largura máxima de 768px (tamanho de tela de celular típico) */
    width: 100%; /* Ocupa a largura total do contêiner pai */
    height: auto; /* Altura automática para ajustar o conteúdo */
    top: auto; /* Resetar a posição superior para a padrão */
    left: auto; /* Resetar a posição esquerda para a padrão */
    border-radius: 10px; /* Voltar ao raio padrão */
  }

  &:hover {
    background: #0062BD; /* Altera a cor de fundo ao passar o mouse */
    border-color: #171717; /* Altera a cor da borda ao passar o mouse */
  }

`;

export const Text = styled.p`
  color: white;
  font-family: Inter;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.94px;
`;
