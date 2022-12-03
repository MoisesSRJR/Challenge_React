import styled from 'styled-components';
import colors from '../../styles/colors';

export const ContentEmpty = styled.div`
  background-color: ${colors.white};
  max-width: 960px;
  height: 532px;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;

  img {
    width: 447px;
    height: 255px;
  }

  @media(max-width: 768px){
      width: 95%;
      margin: auto;
      padding: 0;
      min-height: 450px;
    }
`;

export const ContentFinish = styled.div`
  background-color: ${colors.white};
  max-width: 960px;
  height: 532px;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;

  img {
    width: 260px;
    height: 265px;
  }

  @media(max-width: 768px){
      width: 95%;
      margin: auto;
      padding: 0;
      min-height: 450px;
    }
`;

export const Content = styled.div`
  background-color: ${colors.white};
  max-width: 912px;
  min-height: 246px;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  padding: 24px;
  margin-bottom: 40px;

  @media(max-width: 970px){
      width: 89%;
      margin: auto;
      padding: 24px;
      margin-bottom: 40px;
    }

  @media(max-width: 768px){
      width: 95%;
      margin: auto;
      padding: 0;
      min-height: auto;
      margin-bottom: 0px;
    }

`;

