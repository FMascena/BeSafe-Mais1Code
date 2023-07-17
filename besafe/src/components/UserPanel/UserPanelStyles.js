import styled from 'styled-components';

export const StyledPage = styled.div`
  background-color: #171717;
  border-radius: 20px;
  margin: 10px;
  padding: 20px;

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
  }

  li.special {
    margin-bottom: 100px;
  }

  li:last-child {
    margin-bottom: 0;
  }

  a {
    color: white;
    text-decoration: none;
    margin-left: 10px;
    font-weight:bold;
  }

  a:hover {
    text-decoration: none;
  }

  svg {
    font-weight:bold;
  }
`;
