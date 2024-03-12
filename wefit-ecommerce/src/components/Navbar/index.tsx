import { CartOptions, NavbarContainer } from './styles'
import cartIcon from '../../assets/Icons/cartIcon.svg'

export function Navbar() {
  return (
    <NavbarContainer>
      <h1>WeMovies</h1>
      <CartOptions>
        <div>
          <h2>Meu Carrinho</h2>
          <span>0 itens</span>
        </div>
        <img src={cartIcon} alt="Icone de carrinho de compras" />
      </CartOptions>
    </NavbarContainer>
  )
}
