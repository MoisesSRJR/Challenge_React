import styled from 'styled-components';
import colors from '../../styles/colors';

type ContainerProps = {
  marginBottom?: string;
};

const Container = styled.article<ContainerProps>`
  display: flex;
  flex-direction: column;
  flex: 1;

  & + article {
    margin-top: 2rem;
  }

  header.article-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '1rem')};
    max-height: 2.5rem;

    h3 {
      color: ${colors.gray800};
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.5rem;
    }

    .include {
      border: 1px solid #f47b38;
      color: #f47b38;
      border-radius: 15px;
      font-size: 14px;
      font-weight: 600;
      padding: 8px;
      cursor: pointer;
    }
  }

  @media (max-width: 1110px) {
    header.article-header {
      margin-right: 1rem;
    }
  }
`;

export default Container;
