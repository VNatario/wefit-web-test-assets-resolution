import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'
import { WrapperContainer } from './styles'

export function AppLayout() {
  return (
    <WrapperContainer>
      <Navbar />
      <Outlet />
    </WrapperContainer>
  )
}
