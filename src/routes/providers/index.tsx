import { ReactNode } from 'react';
import { MoviesProvider } from '../../contexts/ListMovies/context';

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps): JSX.Element {
  return <MoviesProvider>{children}</MoviesProvider>;
}
