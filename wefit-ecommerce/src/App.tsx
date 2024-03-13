import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { CartContextProvider } from './contexts/CartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </ThemeProvider>
  )
}
