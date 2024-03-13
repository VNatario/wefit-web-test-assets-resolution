import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.button};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.textSizes['text-xs']};
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    gap: 0.21rem;
    justify-content: center;
    align-items: end;

    img {
      width: 0.85rem;
      height: 0.85rem;
      flex-shrink: 0;
    }

    span {
      color: ${({ theme }) => theme.colors['white']};
      font-size: ${({ theme }) => theme.textSizes['text-xs']};
      font-weight: 400;
    }
  }
`
