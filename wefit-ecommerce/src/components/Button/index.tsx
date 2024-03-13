import { ButtonContainer } from './styles'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <ButtonContainer type="button" {...props}>
      {children}
    </ButtonContainer>
  )
}
