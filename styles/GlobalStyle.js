import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

   ::-webkit-scrollbar{
     width:0.8rem;
     height: 0.5rem;
   }

   ::-webkit-scrollbar-thumb{
     background:green;
     border-radius:0.8rem;
   }

    ::-webkit-scrollbar-track{
     background:green;
   }

    body {
    background: ${props => props.theme.colors.background};
    color: salmon;
  
  }

img{
  width: 100%;
  max-width: 100%;
}
a{
  text-decoration:none;
}
ul{
  list-style:none;
}

`;

export default GlobalStyle;
