import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  background-color: ${colors.background};
  max-width: 960px;
  height: 74px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  @media(max-width: 970px){
      width: 95%;
      margin: auto;
    }

  @media(max-width: 768px){
      width: 95%;
      margin: auto;
    }
`;

export const Title = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color:${colors.white};
`;

export const Cart = styled.div`
  width: 136px;
  height: 38px;
  display: flex;
  gap: 10px;
  display: flex;
  justify-content: end;

  .myCart{
    text-align: end;

    @media(max-width: 768px){
      display: flex;
      align-items: center;
    }
    

    p{
      margin-block-start: 0px;
      margin-block-end: 0px;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      color:${colors.white};

      @media(max-width: 768px){
      display: none;
    }
    }

    span{
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      color: ${colors.gray100};
    }
  }

  img{
    width: 30px;
    height: 26px;
    padding-top: 5px;
  }
`;