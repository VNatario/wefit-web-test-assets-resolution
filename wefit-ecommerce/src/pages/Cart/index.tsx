import { CartMobile } from '../../components/CartMobile'
import { CartWeb } from '../../components/CartWeb'
import { Refresh } from '../../components/Refresh'
import { useCart } from '../../hooks/useCart'
import { useWindowWidth } from '../../hooks/useWindowWidth'

export function Cart() {
  const windowWidth = useWindowWidth()
  const { cartItems } = useCart()

  if (!cartItems.length) {
    return <Refresh />
  }

  return windowWidth >= 768 ? <CartWeb /> : <CartMobile />
}
