import styled from 'styled-components';
import colors from '../../styles/colors';

export const ContainerCountButton = styled.div`
  width: 100px;
  height: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 39px;
    border-radius: 4px;
    border: 1px solid ${colors.gray100};
    outline: none;
    padding-left: 10px;
  }
`;