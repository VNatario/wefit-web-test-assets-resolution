import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  height: 20.25rem;

  img {
    width: 9.1875rem;
    height: 11.75height;
  }

  h3 {
    font-size: ${({ theme }) => theme.textSizes['text-xs']};
    color: ${({ theme }) => theme.colors.title};
    font-weight: 700;
    line-height: normal;
  }

  span {
    color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.textSizes['text-m']};
    font-weight: 700;
    line-height: normal;
  }
`
