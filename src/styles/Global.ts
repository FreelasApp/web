import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #7a8aff;
    --webkit-font-smoothing: antialiased;
  } 

  body, input, button {
    border-style: none;
    font-family: 'Public Sans', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    font-family: 'Public Sans', sans-serif;
  }

  button {
    cursor: pointer;
  }

  input:focus, button:focus, input:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  } 
`;
