import styled from 'styled-components';
import colors from '../../styles/colors';

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

export const FinishCard = styled.div`
  background-color: ${colors.white};
  width: 100%;
  height: 532px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: ${colors.background};
  margin-top: 64px;

  @media (max-width: 768px) {
    width: 185px;
    justify-content: center;
    text-align: center;
  }
`;

export const Content = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: ${colors.background};
  margin-top: 32px;

  @media (max-width: 768px) {
    justify-content: center;
    img {
      width: 99%;
    }
  }
`;

export const ContainerButton = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: ${colors.background};
  margin-top: 32px;
`;
