import { ButtonCount, CardContainer } from './styles'
import addCartIcon from '../../assets/Icons/addCartIcon.svg'

interface ButtonCountProps {
  active?: boolean
}
export function MovieCard({ active = false }: ButtonCountProps) {
  return (
    <CardContainer>
      <img src="https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png" />
      <h3>Nome do Filme</h3>
      <span>R$ 20,99</span>
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
