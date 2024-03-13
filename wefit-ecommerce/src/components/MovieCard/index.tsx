import { ButtonCount, CardContainer } from './styles'
import addCartIcon from '../../assets/Icons/addCartIcon.svg'
import { MovieItem } from '../../pages/Home'
import { useCart } from '../../hooks/useCart'

interface ButtonCountProps {
  movie: MovieItem
}
export function MovieCard({ movie }: ButtonCountProps) {
  const { addCartItem, quantityMovieSelected } = useCart()
  function hanldeAddToCart() {
    const itemToAdd = {
      ...movie,
      quantity: 1,
    }
    addCartItem(itemToAdd)
  }

  return (
    <CardContainer>
      <img src={movie.image} />
      <h3>{movie.title}</h3>
      <span>
        {movie.price.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </span>
      <ButtonCount
        $active={quantityMovieSelected(movie.id) > 0}
        onClick={hanldeAddToCart}
      >
        <div>
          <img
            src={addCartIcon}
            alt="Icone de carrinho de compras com sinal de soma"
          />
          <span>{quantityMovieSelected(movie.id)}</span>
        </div>
        Adicionar ao carrinho
      </ButtonCount>
    </CardContainer>
  )
}
