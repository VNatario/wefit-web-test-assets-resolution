import styled from 'styled-components'
import { CartContent } from '../CartMobile/styles'

export const CartContentWeb = styled(CartContent)`
  padding: 1.5rem;
  display: grid;
  align-items: center;
  row-gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr) 1.125rem;

  h3 {
    color: ${({ theme }) => theme.colors.subtitle};
    font-size: ${({ theme }) => theme.textSizes['text-s']};
    font-weight: 700;
  }
  hr {
    grid-column: 1/5;
    border-top: 1px solid ${({ theme }) => theme.colors['border-input']};
    margin: 0;
  }
`

export const MovieContent = styled.div`
  grid-column: 1/2;
  display: flex;
  gap: 1rem;
  img {
    width: 5.6875rem;
    height: 7.125rem;
  }

  & > div {
    color: ${({ theme }) => theme.colors.background};
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;

    h4 {
      font-size: ${({ theme }) => theme.textSizes['text-s']};
    }

    p {
      font-size: ${({ theme }) => theme.textSizes['text-m']};
    }
  }
`

export const QuantityContainer = styled.div`
  display: flex;
`

export const Subtotal = styled.p`
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.textSizes['text-m']};
  font-weight: 700;
`
export const FooterCart = styled.div`
  grid-column: 1/5;
  display: flex;
  justify-content: space-between;

  button {
    max-width: 10.8125rem;
  }
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  p {
    color: ${({ theme }) => theme.colors.subtitle};
    font-size: ${({ theme }) => theme.textSizes['text-s']};
  }

  span {
    color: ${({ theme }) => theme.colors['background']};
    font-size: ${({ theme }) => theme.textSizes['text-xl']};
  }
`
