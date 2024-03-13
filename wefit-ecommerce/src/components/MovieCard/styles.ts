import styled, { css } from 'styled-components'
import { ButtonContainer } from '../Button/styles'

interface ButtonCountProps {
  $active: boolean
}

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

  & > img {
    width: 9.1875rem;
    height: 11.75height;
  }

  & > h3 {
    font-size: ${({ theme }) => theme.textSizes['text-xs']};
    color: ${({ theme }) => theme.colors.title};
    font-weight: 700;
    line-height: normal;
  }

  & > span {
    color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.textSizes['text-m']};
    font-weight: 700;
    line-height: normal;
  }
`

export const ButtonCount = styled(ButtonContainer)<ButtonCountProps>`
  text-transform: uppercase;

  ${({ $active }) =>
    $active &&
    css`
      background-color: ${({ theme }) => theme.colors['button-active']};
      &:hover {
        background-color: ${({ theme }) => theme.colors['button-active']};
        transition: all 0.2s;
      }
    `}

  & > div {
    display: flex;
    gap: 0.21rem;
    justify-content: center;
    align-items: end;

    & > img {
      width: 0.85rem;
      height: 0.85rem;
      flex-shrink: 0;
    }

    & > span {
      color: ${({ theme }) => theme.colors['white']};
      font-size: ${({ theme }) => theme.textSizes['text-xs']};
      font-weight: 400;
    }
  }
`
