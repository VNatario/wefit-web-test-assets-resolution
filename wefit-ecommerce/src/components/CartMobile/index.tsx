import { QuantityInput } from '../QuantityInput'
import {
  AmountContainer,
  CartContainer,
  CartContent,
  CartFooter,
  DataMovie,
  SectionCard,
  Subtotal,
  TrashButton,
} from './styles'
import trashIcon from '../../assets/Icons/trashIcon.svg'
import { Button } from '../Button'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { formatPrice } from '../../helpers'

export function CartMobile() {
  const {
    changeQuantity,
    removeCartItem,
    cartItemsTotal,
    finishOrder,
    cartItems,
  } = useCart()
  return (
    <CartContent>
      {cartItems.map((item) => (
        <CartContainer key={item.id}>
          <SectionCard>
            <img src={item.image} />
            <div>
              <DataMovie>
                <h3>{item.title}</h3>
                <div>
                  <span>{formatPrice(item.price)}</span>
                  <TrashButton onClick={() => removeCartItem(item.id)}>
                    <img src={trashIcon} />
                  </TrashButton>
                </div>
              </DataMovie>
              <AmountContainer>
                <QuantityInput
                  value={item.quantity}
                  onDecrease={() => changeQuantity(item.id, 'decrease')}
                  onIncrease={() => changeQuantity(item.id, 'increase')}
                />
                <Subtotal>
                  <span>SUBTOTAL</span>
                  <p>{formatPrice(item.price * item.quantity)}</p>
                </Subtotal>
              </AmountContainer>
            </div>
          </SectionCard>
        </CartContainer>
      ))}
      <hr />
      <CartFooter>
        <div>
          <span>TOTAL</span>
          <p>{formatPrice(cartItemsTotal)}</p>
        </div>
        <NavLink to="/success" onClick={() => finishOrder()}>
          <Button>FINALIZAR PEDIDO</Button>
        </NavLink>
      </CartFooter>
    </CartContent>
  )
}
