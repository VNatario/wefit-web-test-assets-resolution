import styled from 'styled-components'

export const RefreshContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: top;
  gap: 1.5rem;
  flex-direction: column;
  border-radius: 4px;
  height: 37.25rem;
  @media screen and (max-width: 768px) {
    height: auto;
    margin-inline: 1.5rem;
  }

  h2 {
    color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.textSizes['text-l']};
    font-weight: 700;
    text-align: center;
  }

  button {
    max-width: 10.8125rem;
  }
`
