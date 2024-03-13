import { CartMobile } from '../../components/CartMobile'
import { CartWeb } from '../../components/CartWeb'
import { useWindowWidth } from '../../hooks/useWindowWidth'

export function Cart() {
  const windowWidth = useWindowWidth()

  return windowWidth >= 768 ? <CartWeb /> : <CartMobile />
}
