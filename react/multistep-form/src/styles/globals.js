import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  --webkit-font-smoothing: antialiased;
  --moz-osx-font-smoothing: grayscale;
  color: #333;
  }
  
  body {
    font-family: 'Barlow', sans-serif;
    background-color: #f9fafc;
  }

  p {
    color: #777;
  }

  input,
  textarea {
    padding: 0.6rem;
    border: none;
    border-radius: 3px;
    box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
  }

  textarea {
    height: 120px;
  }
`;
