import { Link } from 'react-router-dom';
import vectorImg from '../../assets/Vector.png';
import { useMovies } from '../../contexts/ListMovies/context';
import { Cart, Container, Title } from './styles';

export function Header() {
  const { cartData } = useMovies();

  return (
    <Container>
      <Link to='/'>
        <Title>WeMovies</Title>
      </Link>

      <Link to='/cart'>
        <Cart>
          <div className='myCart'>
            <p>Meu Carrinho</p>
            <span>{cartData?.valueProduct || 0} Itens</span>
          </div>
          <img src={vectorImg} alt='icon' />
        </Cart>
      </Link>
    </Container>
  );
}
