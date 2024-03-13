import { Button } from '../Button'
import { CardContainer } from './styles'

export function MovieCard() {
  return (
    <CardContainer>
      <img src="https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png" />
      <h3>Nome do Filme</h3>
      <span>R$ 20,99</span>
      <Button />
    </CardContainer>
  )
}
