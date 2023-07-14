import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  #root,
  #root > div {
    height: 100vh;
   
  }
  body {
    margin: 0;
  }
  
::-webkit-scrollbar {
  display: none;
}
`;
