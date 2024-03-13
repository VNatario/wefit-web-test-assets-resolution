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

export function CartMobile() {
  return (
    <CartContent>
      <CartContainer>
        <SectionCard>
          <img src="https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png" />
          <div>
            <DataMovie>
              <h3>Shang-chi</h3>
              <div>
                <span>R$ 29,99</span>
                <TrashButton>
                  <img src={trashIcon} />
                </TrashButton>
              </div>
            </DataMovie>
            <AmountContainer>
              <QuantityInput />
              <Subtotal>
                <span>SUBTOTAL</span>
                <p>R$ 29,99</p>
              </Subtotal>
            </AmountContainer>
          </div>
        </SectionCard>
      </CartContainer>

      <hr />
      <CartFooter>
        <div>
          <span>TOTAL</span>
          <p>R$ 29,90</p>
        </div>
        <Button>FINALIZAR PEDIDO</Button>
      </CartFooter>
    </CartContent>
  )
}
