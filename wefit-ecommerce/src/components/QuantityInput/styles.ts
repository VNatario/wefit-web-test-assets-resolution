import styled from 'styled-components'

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6875rem;

  input {
    width: 100%;
    max-width: 3.875rem;
    height: 1.625rem;
    text-align: center;
    font-size: ${({ theme }) => theme.textSizes['text-s']};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.background};
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors['border-input']};
  }
`
export const ButtonWrapper = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 1.125rem;
    height: 1.125rem;
  }
`
