import styled, { createGlobalStyle, keyframes } from 'styled-components';
import colors from './colors';

const GlobalStyles = createGlobalStyle`
  body{
    border: 0;
    margin:0;
    padding:0;
    box-sizing:border-box;
    background-color: ${colors.background};
    font-family: 'Open Sans', sans-serif;;
    
    a{
      text-decoration: none;
    }
  }
`;

export const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const SpinnerLoader = styled.div`
  position: relative;
  width: 55px;
  height: 55px;
  border-radius: 10rem;
  border: 3px solid ${colors.background};
  background: conic-gradient(
    from 90deg at 50% 50%,
    rgba(128, 128, 128, 0.0001) -46.17deg,
    #ffffff 313.55deg,
    rgba(128, 128, 128, 0.0001) 313.83deg,
    #ffffff 673.55deg
  );
  box-shadow: 0px 0px 100px -50px ${colors.background};
  animation: ${spinner} 1s linear infinite;
  ::before {
    position: absolute;
    content: '';
    background: ${colors.background};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    border-radius: 10rem;
    border: 3px solid ${colors.background};
    box-shadow: inset 0px 0px 100px -70px ${colors.background};
  }
`;

export default GlobalStyles;
