import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  font-family: "Open Sans", sans-serif;
}

body {
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.white}
}

button{
  cursor: pointer;
  border: none;
 }
`
