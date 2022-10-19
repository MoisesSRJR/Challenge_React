import { fireEvent, render, screen } from '@testing-library/react';

import { Home } from '../..';

const mockedOpenModal = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../contexts/ModalContext', () => ({
  useModal: () => ({
    openModal: mockedOpenModal,
    modalId: 'home',
    isModalOpen: true,
  }),
}));

describe('Home Page', () => {
  it('renders correctly', () => {
    render(<Home />);

    const homePage = screen.getByTestId('home-page');

    expect(homePage).toBeInTheDocument();
  });

  it('fire a event on click in button that opens a modal', () => {
    render(<Home />);

    const buttonOpenModal = screen.getByTestId('btn-open-modal');

    fireEvent.click(buttonOpenModal);

    expect(mockedOpenModal).toHaveBeenCalled();
  });
});
