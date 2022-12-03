/*eslint-disable */
import { isMobile } from 'react-device-detect';
import { FaTrash } from 'react-icons/fa';
import { useMovies } from '../../contexts/ListMovies/context';
import { Button } from '../Button';
import { CountButton } from '../CountButton';
import {
  Count,
  FinalOrder,
  HeaderTable,
  List,
  Movie,
  PriceTotal,
  Products,
  Names,
  Total,
  Trash,
  ProductsMobile,
  ListMobile,
  Column,
  Row,
  SubTotal,
} from './styles';

interface TableProps {
  onClick?: Function;
}

export function Table({ onClick }: TableProps) {
  const { moviesCart, cartData, RemoveProduct } = useMovies();

  return (
    <>
      {!isMobile ? (
        <>
          <HeaderTable>
            <span className='product'>Produto</span>
            <span className='qtd'>qtd</span>
            <span className='sub'>Subtotal</span>
          </HeaderTable>
          <Products>
            {moviesCart?.map((item) => (
              <List key={item.id}>
                <Movie>
                  <img src={item.image} alt='movie' />
                </Movie>
                <Names>
                  <span className='name'>{item.title}</span>
                  <span className='price'>{new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(item.price)}</span>
                </Names>
                <Count>
                  <CountButton buttons={item} />
                </Count>
                <PriceTotal>
                  <span>
                    {' '}
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(item.qtd * item.price)}
                  </span>
                </PriceTotal>
                <Trash>
                  <FaTrash
                    size={18}
                    color='#009EDD'
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      RemoveProduct(item.id);
                    }}
                  />
                </Trash>
              </List>
            ))}
          </Products>
        </>
      ) : (
        <ProductsMobile>
          {moviesCart?.map((item) => (
            <ListMobile key={item.id}>
              <Movie>
                <img src={item.image} alt='movie' />
              </Movie>
              <Column>
                <span className='titleMobile'>{item.title}</span>
                <CountButton buttons={item} />
              </Column>
              <Column>
                <Row>
                  <span className='priceMobile'>{new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(item.price)}</span>
                  <FaTrash
                    size={18}
                    color='#009EDD'
                    onClick={() => {
                      RemoveProduct(item.id);
                    }}
                  />
                </Row>
                <SubTotal>
                  <span className='subTotal'>Subtotal</span>
                  <span className='priceMobile'>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(item.qtd * item.price)}
                  </span>
                </SubTotal>
              </Column>
            </ListMobile>
          ))}
        </ProductsMobile>
      )}
      <FinalOrder>
        <Button
          label='Finalizar pedido'
          type='submit'
          width='235px'
          onClick={() => {
            onClick?.();
          }}
        />
        <Total>
          <span>total</span>
          <span className='value'>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(cartData?.valueTotal)}
          </span>
        </Total>
      </FinalOrder>
    </>
  );
}
