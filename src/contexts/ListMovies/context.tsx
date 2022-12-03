/*eslint-disable */
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import api from '../../services/api';

interface MoviesProviderProps {
  children: React.ReactNode;
}

export interface Movies {
  id: number;
  title: string;
  price: number;
  image: string;
  qtd: number;
}

export interface CartDataProps {
  valueTotal: number;
  valueProduct: number;
}

interface MoviesContextData {
  getListMovies(): Promise<Movies[]>;
  moviesList: Movies[];
  AddedProduct(movieProduct: Movies): void;
  RemoveProduct(id: number): void;
  cartData: CartDataProps;
  moviesCart: Movies[];
  RemoveItem(id: number): void;
  AddedItem(id: number): void;
  loading: boolean;
}

const moviesContext = createContext<MoviesContextData>({} as MoviesContextData);

export function MoviesProvider({ children }: MoviesProviderProps) {
  const [loading, setLoading] = useState(false);

  const [moviesCart, setMoviesCart] = useState<Movies[]>(() => {
    const product = localStorage.getItem('WefitMovies');
    if (product) {
      return JSON.parse(product);
    }
    return [] as Movies[];
  });

  const [cartData, setCartData] = useState<CartDataProps>(() => {
    const total = localStorage.getItem('Wefit');
    if (total) {
      return JSON.parse(total);
    }
    return { valueTotal: 0, valueProduct: 0 };
  });

  function AddedProduct(movieProduct: Movies) {
    if (
      !moviesCart.some((item) => {
        return item.id === movieProduct.id;
      })
    ) {
      localStorage.setItem(
        'WefitMovies',
        JSON.stringify([...moviesCart, movieProduct])
      );
      setMoviesCart([...moviesCart, movieProduct]);
      const previousValue = cartData.valueTotal;
      const currentValue =
        previousValue + movieProduct.price * movieProduct.qtd || 0;

      localStorage.setItem(
        'Wefit',
        JSON.stringify({
          valueTotal: currentValue,
          valueProduct: moviesCart.length + 1,
        })
      );
      setCartData({
        valueTotal: Number(currentValue.toFixed(2)),
        valueProduct: moviesCart.length + 1,
      });
    }
  }

  function RemoveProduct(id: number) {
    const removeValue = moviesCart.filter((item) => item.id === id)[0]?.price;
    const previousValue = cartData.valueTotal;
    const currentValue = previousValue - removeValue;

    localStorage.setItem(
      'WefitMovies',
      JSON.stringify(moviesCart.filter((item) => item.id !== id))
    );
    setMoviesCart(moviesCart.filter((item) => item.id !== id));
    localStorage.setItem(
      'Wefit',
      JSON.stringify({
        valortotal: currentValue,
        totalprodutos: moviesCart.length - 1,
      })
    );
    setCartData({
      valueTotal: Number(currentValue.toFixed(2)),
      valueProduct: moviesCart.length - 1,
    });
  }

  function RemoveItem(id: number) {
    const remove = moviesCart;
    remove.forEach((item) => {
      if (item.id === id) {
        item.qtd = item.qtd -= 1;
        setCartData({
          ...cartData,
          valueTotal: cartData.valueTotal - Number(item.price),
        });
        localStorage.setItem(
          'Wefit',
          JSON.stringify({
            ...cartData,
            valueTotal: cartData.valueTotal - Number(item.price),
          })
        );
      }
    });

    localStorage.setItem('WefitMovies', JSON.stringify([...remove]));
    setMoviesCart([...remove]);
  }

  function AddedItem(id: number) {
    const added = moviesCart;
    added.forEach((item) => {
      if (item.id === id) {
        item.qtd = item.qtd += 1;
        setCartData({
          ...cartData,
          valueTotal: cartData.valueTotal + Number(item.price),
        });
        localStorage.setItem(
          'Wefit',
          JSON.stringify({
            ...cartData,
            valueTotal: cartData.valueTotal + Number(item.price),
          })
        );
      }
    });

    localStorage.setItem('WefitMovies', JSON.stringify([...added]));
    setMoviesCart([...added]);
  }

  const [moviesList, setMoviesList] = useState([] as Movies[]);
  async function getListMovies() {
    try {
      setLoading(true);
      const response = await api.get('http://localhost:3000/products');
      setMoviesList(response.data);
      return response.data;
    } catch (error) {
      return { error };
    } finally {
      setLoading(false);
    }
  }

  // Variaveis e funções
  const data = useMemo(() => {
    return {
      moviesList,
      moviesCart,
      cartData,
      setMoviesList,
      getListMovies,
      setMoviesCart,
      setCartData,
      AddedProduct,
      RemoveProduct,
      RemoveItem,
      AddedItem,
      loading,
    };
  }, [moviesList, moviesCart, cartData, loading]);

  return (
    <moviesContext.Provider value={data}>{children}</moviesContext.Provider>
  );
}

export function useMovies(): MoviesContextData {
  const context = useContext(moviesContext);
  if (!context) {
    throw new Error('useMovies must be used within a MoviesProvider');
  }
  return context;
}
