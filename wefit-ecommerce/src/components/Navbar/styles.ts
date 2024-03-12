import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  h1 {
    font-size: ${({ theme }) => theme.textSizes['text-l']};
    font-weight: 700;
  }
`

export const CartOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    text-align: right;

    h2 {
      font-size: ${({ theme }) => theme.textSizes['text-s']};
      font-weight: 600;
    }

    span {
      color: ${({ theme }) => theme.colors.subtitle};
      font-size: ${({ theme }) => theme.textSizes['text-xs']};
      font-weight: 600;
    }
  }
`
