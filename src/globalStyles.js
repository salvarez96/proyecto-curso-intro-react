import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --very-dark-purple: #1a1b4b;
    --dark-purple: #292a73;
    --purple: #3e4491;
    --pastel-blue: #3a9efd;
    --orange: #f5a300;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Overpass', sans-serif;
    background: linear-gradient(90deg, var(--very-dark-purple), var(--dark-purple));
    color: white;
  }
`;