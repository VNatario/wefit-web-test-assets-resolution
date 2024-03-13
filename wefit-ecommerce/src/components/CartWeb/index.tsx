import { TrashButton } from '../CartMobile/styles'
import trashIcon from '../../assets/Icons/trashIcon.svg'
import { QuantityInput } from '../QuantityInput'
import {
  CartContentWeb,
  FooterCart,
  MovieContent,
  Price,
  QuantityContainer,
  Subtotal,
  TotalPrice,
} from './styles'
import { Button } from '../Button'

export function CartWeb() {
  return (
    <CartContentWeb>
      <h3>PRODUTO</h3>
      <h3>QTD</h3>
      <h3>SUBTOTAL</h3>

      <>
        <MovieContent>
          <img src="https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png" />
          <div>
            <h4>Nome do Filme</h4>
            <p> R$ 29,99</p>
          </div>
        </MovieContent>

        <QuantityContainer>
          <QuantityInput />
        </QuantityContainer>

        <Subtotal>R$ 29,99</Subtotal>

        <TrashButton>
          <img src={trashIcon} alt="" />
        </TrashButton>
      </>

      <hr />

      <FooterCart>
        <Button>FINALIZAR PEDIDO</Button>
        <TotalPrice>
          <p>TOTAL</p>
          <span>R$ 29,90</span>
        </TotalPrice>
      </FooterCart>
    </CartContentWeb>
  )
}
