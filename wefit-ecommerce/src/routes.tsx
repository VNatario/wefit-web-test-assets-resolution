import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './pages/layouts/app'
import { Home } from './pages/Home'

import { Cart } from './pages/Cart'
import { Success } from './pages/Success'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <h1>Pagina não encontrada</h1>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/success',
        element: <Success />,
      },
    ],
  },
])
