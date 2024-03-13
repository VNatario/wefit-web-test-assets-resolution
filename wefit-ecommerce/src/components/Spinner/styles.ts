import styled, { keyframes } from 'styled-components'
import loader from '../../assets/Loader.png'

const rotateSpinner = keyframes`
  from{
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`

export const SpinnerContainer = styled.div`
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }

  margin: 2.5rem auto 0;
  width: 5.1875rem;
  height: 5.1875rem;
  background: url(${loader});
  animation: ${rotateSpinner} 1.5s linear infinite;
`
