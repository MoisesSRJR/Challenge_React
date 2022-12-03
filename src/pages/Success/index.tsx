import { Link } from 'react-router-dom';
import finishImg from '../../assets/finishImg.png';
import { Button, Header } from '../../components';

import {
  Content,
  Title,
  FinishCard,
  ContainerButton,
  ContentFinish,
} from './styles';

export function Success() {
  return (
    <div data-testid='success-page'>
      <Header />
      <ContentFinish>
        <FinishCard>
          <Title>
            <span>Compra realizada com sucesso!</span>
          </Title>
          <Content>
            <img src={finishImg} alt='cart empty' />
          </Content>
          <ContainerButton>
            <Link to='/'>
              <Button label='voltar' type='submit' width='180px' />
            </Link>
          </ContainerButton>
        </FinishCard>
      </ContentFinish>
    </div>
  );
}
