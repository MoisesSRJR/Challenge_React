/*eslint-disable */
import { Button } from "../Button";
import {
  Card,
  ContainerButton,
  ContainerImage,
  Description,
  Title,
  Value,
} from "./styles";
import cartImg from "../../assets/cart.png";
import { useMovies } from "../../contexts/ListMovies/context";

interface CardsProps {
  image: string;
  title: string;
  price: number;
  id: number;
  qtd: number;
}

export function Cards({ image, title, price, id }: CardsProps) {
  const { AddedProduct, moviesCart } = useMovies();

  return (
    <Card>
      <ContainerImage>
        <img src={image} alt="Movies" />
      </ContainerImage>
      <Description>
        <Title>{title}</Title>
        <Value>{new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(price)}</Value>
      </Description>
      <ContainerButton>
        {!moviesCart.some((item) => item.id === id) && (
          <Button
            label="Adicionar ao carrinho"
            width="100%"
            type="submit"
            icon={<img src={cartImg} alt="icon" />}
            item={0}
            onClick={() => {
              AddedProduct({
                id,
                image,
                title,
                price,
                qtd: 1,
              });
            }}
          />
        )}

        {moviesCart.some((item) => item.id === id) && (
          <Button
            style={{backgroundColor:'#039B00'}}
            label="Item adicionado"
            width="100%"
            type="submit"
            icon={<img src={cartImg} alt="icon" />}
            item={1}
            onClick={() => {
              AddedProduct({
                id,
                image,
                title,
                price,
                qtd: 1,
              });
            }}
          />
        )}
      </ContainerButton>
    </Card>
  );
}

Cards.defaultProps = {
  image: undefined,
  title: "Movies Wefit",
  price: 0,
};
