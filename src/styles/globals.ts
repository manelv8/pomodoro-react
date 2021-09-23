import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  :root {
    --background:#E5E5E5;
    --blue-100:#B2B9FF;
    --blue-200:#5965E0;
    --blue-300:#4953B8;
    --green:#4CD62B;
    --red:#E83F5B;
    --black-600:#2E384D;
    --gray-200:#DCDDE0;
    --gray-600:#666666;
    --white: #ffffff;

  }

   @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
    
`

