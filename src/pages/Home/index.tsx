import { useEffect} from 'react';
import { Cards, Header } from '../../components';
import { useMovies } from '../../contexts/ListMovies/context';
import { SpinnerContainer, SpinnerLoader } from '../../styles/global';
import { Fieldset } from './styles';

export function Home() {
  const { moviesList, getListMovies, loading } = useMovies();

  useEffect(() => {
    getListMovies();
  }, []);

  return (
    <div data-testid='home-page'>
      <Header />

      {loading ? (
        <SpinnerContainer>
          <SpinnerLoader />
        </SpinnerContainer>
      ) : (
        <Fieldset>
          {moviesList?.map((items) => (
            <Cards
              key={items.id}
              image={items.image}
              title={items.title}
              price={items.price}
              id={items.id}
              qtd={items.qtd}
            />
          ))}
        </Fieldset>
      )}
    </div>
  );
}
