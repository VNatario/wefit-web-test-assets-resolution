import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background-color: ${({ theme }) => theme.colors.background};
  position: sticky;
  top: 0;
  z-index: 1;

  h1 {
    font-size: ${({ theme }) => theme.textSizes['text-l']};
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export const CartOptions = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    text-align: right;

    h2 {
      @media screen and (max-width: 768px) {
        display: none;
      }
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
