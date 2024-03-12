import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './pages/layouts/app'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <h1>Pagina não encontrada</h1>,
    children: [
      {
        path: '/',
        element: <h1>Home</h1>,
      },
      {
        path: '/cart',
        element: <h1>Carrinho</h1>,
      },
      {
        path: '/finished',
        element: <h1>Sucesso na compra</h1>,
      },
    ],
  },
])
