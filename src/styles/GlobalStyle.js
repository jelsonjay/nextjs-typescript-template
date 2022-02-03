import { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';
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
     background:${({ theme }) => theme.primary};
     border-radius:0.1rem;
   }

    ::-webkit-scrollbar-track{
     background: ${({ theme }) => lighten(0.4, theme.primary)};
   }

    body {
    background: ${props => props.theme.background};
    color: #fafafa;
    font-family: 'Poppins', sans-serif;
    font-family: 'Roboto', sans-serif;
    font-family: 'Creepster', cursive;
  
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
button{
  cursor:pointer;
}
.container{
  width:100%;
  margin: 0 auto;
  max-width: 85rem;
  padding: 0 1rem;
  @media(max-width:1450px){
  max-width:70rem;
  }

  @media (max-width:1000px) {
    max-width:50rem;
  }

    @media (max-width:700px) {
    padding: 0 2rem;
  }


}
`;

export default GlobalStyle;
