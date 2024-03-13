import refreshImg from '../../assets/RefreshImg.svg'
import { Button } from '../Button'
import { RefreshContainer } from './styles'

export function Refresh() {
  return (
    <RefreshContainer>
      <h2>Parece que não há nada por aqui :(</h2>
      <img src={refreshImg} alt="" />
      <Button>Recarregar página</Button>
    </RefreshContainer>
  )
}
