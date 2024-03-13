import { TrashButton } from '../CartMobile/styles'
import trashIcon from '../../assets/Icons/trashIcon.svg'
import { QuantityInput } from '../QuantityInput'
import {
  CartContentWeb,
  FooterCart,
  MovieContent,
  QuantityContainer,
  Subtotal,
  TotalPrice,
} from './styles'
import { Button } from '../Button'
import { NavLink } from 'react-router-dom'
import { formatPrice } from '../../helpers'
import { useCart } from '../../hooks/useCart'
import { Fragment } from 'react/jsx-runtime'

export function CartWeb() {
  const {
    changeQuantity,
    removeCartItem,
    cartItemsTotal,
    finishOrder,
    cartItems,
  } = useCart()

  return (
    <CartContentWeb>
      <h3>PRODUTO</h3>
      <h3>QTD</h3>
      <h3>SUBTOTAL</h3>

      {cartItems.map((item) => (
        <Fragment key={item.id}>
          <MovieContent>
            <img src={item.image} />
            <div>
              <h4>{item.title}</h4>
              <p>{formatPrice(item.price)}</p>
            </div>
          </MovieContent>

          <QuantityContainer>
            <QuantityInput
              value={item.quantity}
              onDecrease={() => changeQuantity(item.id, 'decrease')}
              onIncrease={() => changeQuantity(item.id, 'increase')}
            />
          </QuantityContainer>

          <Subtotal>{formatPrice(item.price * item.quantity)}</Subtotal>

          <TrashButton onClick={() => removeCartItem(item.id)}>
            <img src={trashIcon} alt="" />
          </TrashButton>
        </Fragment>
      ))}

      <hr />

      <FooterCart>
        <NavLink to="/success" onClick={() => finishOrder()}>
          <Button>FINALIZAR PEDIDO</Button>
        </NavLink>

        <TotalPrice>
          <p>TOTAL</p>
          <span>{formatPrice(cartItemsTotal)}</span>
        </TotalPrice>
      </FooterCart>
    </CartContentWeb>
  )
}
