/*eslint-disable */
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { Movies, useMovies } from '../../contexts/ListMovies/context';
import { ContainerCountButton } from './styles';

interface CountButtonProps {
  buttons: Movies;
}

export function CountButton({ buttons }: CountButtonProps) {
  const { AddedItem, RemoveItem } = useMovies();

  return (
    <ContainerCountButton>
      <AiOutlineMinusCircle
        style={{ cursor: 'pointer' }}
        size={18}
        color='#009EDD'
        onClick={() => {
          buttons.qtd >= 1 && RemoveItem(buttons.id);
        }}
      />
      <div>{buttons.qtd}</div>
      <AiOutlinePlusCircle
        style={{ cursor: 'pointer' }}
        size={18}
        color='#009EDD'
        onClick={() => {
          AddedItem(buttons.id);
        }}
      />
    </ContainerCountButton>
  );
}
