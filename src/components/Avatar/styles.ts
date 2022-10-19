import styled from 'styled-components';
import colors from '../../styles/colors';

const Container = styled.div`
  vertical-align: middle;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 36px;
    height: 36px;
  }

  p {
    cursor: alias;
    font-weight: 600;
    font-size: 1.25rem;
    color: ${colors.orange500};
  }
`;

export default Container;
