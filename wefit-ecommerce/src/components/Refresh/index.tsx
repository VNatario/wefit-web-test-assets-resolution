import { NavLink } from 'react-router-dom'
import refreshImg from '../../assets/RefreshImg.svg'
import { Button } from '../Button'
import { RefreshContainer } from './styles'

export function Refresh() {
  return (
    <RefreshContainer>
      <h2>Parece que não há nada por aqui :(</h2>
      <img src={refreshImg} alt="" />
      <NavLink to="/">
        <Button>Recarregar página</Button>
      </NavLink>
    </RefreshContainer>
  )
}
