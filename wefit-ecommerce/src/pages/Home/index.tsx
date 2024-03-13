import { useEffect, useState } from 'react'
import { MovieCard } from '../../components/MovieCard'
import { GridContainer } from './styles'
import { api } from '../../api'
import { Spinner } from '../../components/Spinner'

export interface MovieItem {
  id: number
  title: string
  price: number
  image: string
}
export function Home() {
  const [data, setData] = useState<MovieItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      try {
        const response = await api('/products')
        const jsonData = await response.json()
        setData(jsonData)
      } catch (err) {
        console.log(err)
      } finally {
        setInterval(() => setLoading(false), 2000)
      }
    }

    getData()
  }, [])
  return loading ? (
    <Spinner />
  ) : (
    <GridContainer>
      {data.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </GridContainer>
  )
}
