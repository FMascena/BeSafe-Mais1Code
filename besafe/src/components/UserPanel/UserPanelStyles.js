import styled from 'styled-components';

export const StyledPage = styled.div`
  background-color: #171717;
  border-radius: 20px;
  margin: 10px;
  padding: 20px;
  min-height: 100vh;

 body {
  margin-top: 0;
  margin-bottom: 0;
  
 }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    margin-bottom: 10px;
    font-size: 14px; /* Decrease the font size for smaller screens */
  }

  li.special {
    margin-bottom: 50px; /* Adjust the margin for smaller screens */
  }

  li:last-child {
    margin-bottom: 0;
  }

  a {
    color: white;
    text-decoration: none;
    margin-left: 10px;
    font-weight: bold;
    font-size: 14px; /* Decrease the font size for smaller screens */
  }

  a:hover {
    text-decoration: none;
  }

  svg {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    /* Estilos para telas menores ou iguais a 768px */
    font-size: 12px; /* Reduzir o tamanho da fonte */
  }
`;
