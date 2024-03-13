import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.button};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.textSizes['text-xs']};
  font-weight: 700;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`
