import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import backgroundImg from '../assets/Fundo.png'

const GlobalStyles = createGlobalStyle`
  body{
    background-image: url(${backgroundImg});
  }

  
`;

export default GlobalStyles;
