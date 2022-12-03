import { render, screen } from '@testing-library/react';

import { Success } from '../..';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Success Page', () => {
  it('renders correctly', () => {
    render(<Success />);

    const successPage = screen?.getByTestId('success-page');

    expect(successPage).toBeInTheDocument();
  });
});
