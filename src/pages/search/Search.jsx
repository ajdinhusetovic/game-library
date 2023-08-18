import { useState } from 'react'
import { AnimatedPage } from '../../components/navbar/AnimatedPage'
import '../../scss/search.scss'
import axios from 'axios'
import { useQuery } from 'react-query'

export const Search = () => {

  const [gameTitle, setGameTitle] = useState("")
  const [hasRefetched, setHasRefetched] = useState(false)

  const { data: game, isLoading, refetch, isFetching } = useQuery(["game"], async () => {
    return axios.get(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}`).then((res) => res.data)
  })

  const handleInput = (e) => {
    setGameTitle(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      refetch()
      setHasRefetched(true)
    }
  }

  if (isLoading) {
    return <h1>is Loading</h1>
  }

  if (isFetching) {
    return <h1>Loading...</h1>
  }

  return (
    <AnimatedPage>
      <div className='container'>
        <div className='input-wrapper'>
          <h2>Search for a specific title</h2>
          <input type="text" onChange={handleInput} onKeyDown={handleKeyDown} />
          <button onClick={refetch}>refetch</button>
        </div>

        <div className='games-wrapper'>
          {game.length > 0 ? (
            game.map((game) => {
              return (
                <>
                  <div className='search-game-card'>
                    <h2>{game.external}</h2>
                  </div>
                </>
              )
            })
          ) : (hasRefetched ? <p id='data-error'>No results found</p> : null)
          }
        </div>
      </div>
    </AnimatedPage>
  )
}
