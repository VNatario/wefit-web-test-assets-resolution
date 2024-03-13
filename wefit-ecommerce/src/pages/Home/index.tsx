import { MovieCard } from '../../components/MovieCard'
import { Refresh } from '../../components/Refresh'
import { GridContainer } from './styles'

export function Home() {
  return (
    <GridContainer>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </GridContainer>
  )
}
