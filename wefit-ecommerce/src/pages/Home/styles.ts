import styled from 'styled-components'

export const GridContainer = styled.div`
  padding: 0rem 1rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1.5rem;
  column-gap: 1rem;
`
