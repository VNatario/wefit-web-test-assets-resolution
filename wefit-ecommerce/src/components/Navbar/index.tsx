import { CartOptions, NavbarContainer } from './styles'
import cartIcon from '../../assets/Icons/cartIcon.svg'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Navbar() {
  const { cartQuantity } = useCart()

  return (
    <NavbarContainer>
      <NavLink to="/">
        <h1>WeMovies</h1>
      </NavLink>
      <CartOptions to="/cart">
        <div>
          <h2>Meu Carrinho</h2>
          <span>{cartQuantity || 0} itens</span>
        </div>
        <img src={cartIcon} alt="Icone de carrinho de compras" />
      </CartOptions>
    </NavbarContainer>
  )
}
