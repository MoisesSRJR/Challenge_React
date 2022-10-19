import { render } from '@testing-library/react';
import { Article } from '../..';

describe('Article Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Article title="teste" />);

    expect(getByTestId('article-component')).toBeInTheDocument();
  });
});
