import { ButtonCount, CardContainer } from './styles'
import addCartIcon from '../../assets/Icons/addCartIcon.svg'
import { MovieItem } from '../../pages/Home'

interface ButtonCountProps {
  active?: boolean
  movie: MovieItem
}
export function MovieCard({ active = false, movie }: ButtonCountProps) {
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
      <ButtonCount $active={active}>
        <div>
          <img
            src={addCartIcon}
            alt="Icone de carrinho de compras com sinal de soma"
          />
          <span>0</span>
        </div>
        Adicionar ao carrinho
      </ButtonCount>
    </CardContainer>
  )
}
