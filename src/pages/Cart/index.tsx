import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Empty, Header } from '../../components';
import { Table } from '../../components/Table';
import { useMovies } from '../../contexts/ListMovies/context';
import { Content, ContentEmpty, ContentFinish } from './styles';

export function CartPage() {
  const [ finish, setFinish ] = useState(false);
  const { cartData } = useMovies();
  const push = useNavigate();

  function handleFinish() {
    push('./success')
    window.location.reload();
    localStorage.clear()
  }

  return (
    <div data-testid='cart-page'>
      <Header />
      {!finish &&
        (cartData?.valueProduct === 0 ? (
          <ContentEmpty>
            <Empty />
          </ContentEmpty>
        ) : (
          <Content>
            <Table
              onClick={() => {
                handleFinish()
              }}
            />
          </Content>
        ))}
    </div>
  );
}
