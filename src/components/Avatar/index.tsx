import Container from './styles';

type AvatarProps = {
  imageUrl?: string;
};

export function Avatar({ imageUrl }: AvatarProps): JSX.Element {
  return (
    <Container data-testid="avatar-component">
      {imageUrl ? <img src={imageUrl} alt="avatar" data-testid="image-avatar-component" /> : <p data-testid="paragraph-avatar-component">SG</p>}
    </Container>
  );
}

Avatar.defaultProps = {
  imageUrl: undefined,
};
