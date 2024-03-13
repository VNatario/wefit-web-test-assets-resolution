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

a{ 
  text-decoration: none;
  color: inherit;
}

button{
  cursor: pointer;
  border: none;
 }

 input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

    input[type='number']{
        -moz-appearance: textfield;
    }


`
