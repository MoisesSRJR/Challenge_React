import styled from 'styled-components';
import colors from '../../styles/colors';

export const Fieldset = styled.div`
  max-width: 960px;
  margin-top: 24px;
  display: grid;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  gap: 8px;

  @media(max-width: 970px){
      width: 95%;
      margin: auto;
    }

  @media(max-width: 768px){
      width: 95%;
      margin: auto;
    }
`;
