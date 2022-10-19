import { render } from '@testing-library/react';
import { random } from 'faker';
import { Avatar } from '../..';

describe('Avatar Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Avatar />);

    expect(getByTestId('avatar-component')).toBeInTheDocument();
  });

  it('have a paragraph if the imageUrl attribute is not provided', () => {
    const { getByTestId } = render(<Avatar />);

    expect(getByTestId('paragraph-avatar-component')).toBeInTheDocument();
  });

  it('have a image if the imageUrl attribute is provided', () => {
    const { getByTestId } = render(<Avatar imageUrl={random.image()} />);

    expect(getByTestId('image-avatar-component')).toBeInTheDocument();
  });
});
