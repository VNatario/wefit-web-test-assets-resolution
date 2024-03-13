import { SuccessContainer } from './styles'
import SuccessImg from '../../assets/SuccessImg.svg'
import { Button } from '../../components/Button'
import { NavLink } from 'react-router-dom'

export function Success() {
  return (
    <SuccessContainer>
      <h2>Compra efetuada com sucesso!</h2>
      <img src={SuccessImg} alt="" />
      <NavLink to="/">
        <Button type="button">Voltar</Button>
      </NavLink>
    </SuccessContainer>
  )
}
