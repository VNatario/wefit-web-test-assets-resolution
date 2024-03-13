import styled from 'styled-components'

export const CartContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  margin-inline: 1rem;
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  hr {
    margin: 1.31rem 0;
    border-top: 1px solid ${({ theme }) => theme.colors.subtitle};
  }
`
export const CartContainer = styled.div`
  & > div:not(:last-child) {
    margin-bottom: 2rem;
  }
`

export const SectionCard = styled.div`
  color: ${({ theme }) => theme.colors.subtitle};
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  & > img {
    width: 4rem;
    height: 5.125rem;
  }

  & > div:nth-child(2) {
    width: 100%;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
  }
`
export const DataMovie = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  & > h3 {
    color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.textSizes['text-s']};
    text-align: left;
  }
  & > div {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }
  div > span {
    color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.textSizes['text-m']};
    font-weight: 700;
    white-space: nowrap;
  }
`
export const TrashButton = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    width: 1rem;
    height: 1.125rem;
  }
`

export const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

export const Subtotal = styled.div`
  font-weight: 700;
  margin-right: 1rem;
  span {
    color: ${({ theme }) => theme.colors.subtitle};
    font-size: ${({ theme }) => theme.textSizes['text-xs']};
    text-align: right;
  }
  p {
    color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.textSizes['text-m']};
    text-align: right;
    white-space: nowrap;
  }
`

export const CartFooter = styled.footer`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
    margin-bottom: 1rem;

    @media screen and (min-width: 400px) {
    }
    span {
      font-size: ${({ theme }) => theme.textSizes['text-s']};
      color: ${({ theme }) => theme.colors.subtitle};
    }
    p {
      font-size: ${({ theme }) => theme.textSizes['text-xl']};
      color: ${({ theme }) => theme.colors.background};
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`
