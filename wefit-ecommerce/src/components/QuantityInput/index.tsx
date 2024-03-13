import { ButtonWrapper, QuantityContainer } from './styles'
import minusIcon from '../../assets/Icons/minusIcon.svg'
import plusIcon from '../../assets/Icons/plusIcon.svg'

export interface InputQuantityProps {
  value: number
  onIncrease: () => void
  onDecrease: () => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export function QuantityInput({
  value = 1,
  onIncrease,
  onDecrease,
  onChange,
}: InputQuantityProps) {
  return (
    <QuantityContainer>
      <ButtonWrapper onClick={onDecrease}>
        <img src={minusIcon} alt="Icone de subtrair" />
      </ButtonWrapper>
      <input type="text" readOnly value={value} onChange={onChange} />
      <ButtonWrapper onClick={onIncrease}>
        <img src={plusIcon} alt="Icone de somar" />
      </ButtonWrapper>
    </QuantityContainer>
  )
}
