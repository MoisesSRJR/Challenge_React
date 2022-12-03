import { render, screen } from '@testing-library/react';

import { Home } from '../..';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../../contexts/ListMovies/context', () => {
  return {
    useMovies: () => ({
      getListMovies:jest.fn(),
      
    }),
  };
});

describe('Home Page', () => {
  it('renders correctly', () => {
    render(<Home />);

    const homePage = screen.getByTestId('home-page');

    expect(homePage).toBeInTheDocument();
  });
});
