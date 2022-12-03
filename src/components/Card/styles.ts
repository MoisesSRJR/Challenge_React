import styled from 'styled-components';
import colors from '../../styles/colors';

export const Card = styled.div`
  background-color: ${colors.white};
  width: 295px;
  height: auto;
  border-radius: 4px;
  padding: 10px;
  margin: auto;
`;

export const ContainerImage = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 147px;
    height: 188px;
  }
`;

export const Description = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: ${colors.gray100};
  margin-top: 7px;
`;

export const Value = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: ${colors.background};
  margin-top: 2px;
`;

export const ContainerButton = styled.div`
  width: 100%;
  margin-top: 8px;
`;
