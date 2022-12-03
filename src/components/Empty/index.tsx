import { Link } from 'react-router-dom';
import emptyImg from '../../assets/empty.png';
import { Button } from '../Button';
import { Content, Title, EmptyCard, ContainerButton } from './styles';

export function Empty() {
  return (
      <EmptyCard>
        <Title>
          <span>Parece que não há nada por aqui :( </span>
        </Title>
        <Content>
          <img src={emptyImg} alt='cart empty' />
        </Content>
        <ContainerButton>
          <Link to='/'>
            <Button label='voltar' type='submit' width='180px' />
          </Link>
        </ContainerButton>
      </EmptyCard>
  );
}
