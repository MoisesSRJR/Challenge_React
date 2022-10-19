import Container from './styles';

type ArticleProps = {
  button?: React.ReactNode;
  children?: React.ReactNode;
  marginBottom?: string;
  title: string;
};

export function Article({ button, children, marginBottom, title }: ArticleProps): JSX.Element {
  return (
    <Container data-testid="article-component" marginBottom={marginBottom}>
      <header className="article-header">
        <h3>{title}</h3>
        {button}
      </header>
      {children}
    </Container>
  );
}

Article.defaultProps = {
  button: undefined,
  children: undefined,
  marginBottom: undefined,
};
