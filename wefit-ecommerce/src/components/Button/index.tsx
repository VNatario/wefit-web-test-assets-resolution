import { ButtonContainer } from './styles'
import addCartIcon from '../../assets/Icons/addCartIcon.svg'

export function Button() {
  return (
    <ButtonContainer type="button">
      <div>
        <img
          src={addCartIcon}
          alt="Icone de carrinho de compras com sinal de soma"
        />
        <span>0</span>
      </div>
      Adicionar ao carrinho
    </ButtonContainer>
  )
}
