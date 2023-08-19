import { useState } from 'react'
import { AnimatedPage } from '../../components/navbar/AnimatedPage'
import '../../scss/search.scss'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Accordion } from '../../components/navbar/Accordion'
import { BsSearch } from 'react-icons/bs'
import { Spinner } from '../../components/navbar/Spinner'

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
    if (e.key === "Enter" || e.key === "Go") {
      refetch()
      setHasRefetched(true)
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  if (isFetching) {
    return <Spinner />
  }
  return (
    <AnimatedPage>
      <div className='container'>
        <div className='input-wrapper'>
          <h2>Search for a specific title</h2>
          <div className='input-container'>
            <input type="text" onChange={handleInput} onKeyDown={handleKeyDown} />
            <span className="icon-container" onClick={refetch}><BsSearch /></span>
          </div>
        </div>

        <div className='games-wrapper'>
          {game && game.length > 0 ? (
            game.map((game) => {
              return (
                <>
                  <div className='search-game-card'>
                    <Accordion game={game} />
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
