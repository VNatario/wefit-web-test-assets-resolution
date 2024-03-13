import { SuccessContainer } from './styles'
import SuccessImg from '../../assets/SuccessImg.svg'
import { Button } from '../../components/Button'

export function Success() {
  return (
    <SuccessContainer>
      <h2>Compra efetuada com sucesso!</h2>
      <img src={SuccessImg} alt="" />
      <Button>Voltar</Button>
    </SuccessContainer>
  )
}
