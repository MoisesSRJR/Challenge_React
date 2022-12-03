import { render, screen } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';

import { CartPage } from '../..';

const mockedHistoryPush = jest.fn();
const mockNavigate = useNavigate as jest.Mock;
const mockedErrorToast = jest.fn();
const mockedSuccessToast = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
    useNavigate: () => mockNavigate,
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

describe('Cart Page', () => {
  it('renders correctly', () => {
    render(<CartPage />);

    const cartPage = screen?.getByTestId('cart-page');

    expect(cartPage).toBeInTheDocument();
  });
});
