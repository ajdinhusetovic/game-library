import { useState } from 'react'
import { AnimatedPage } from '../../components/navbar/AnimatedPage'
import '../../scss/search.scss'
import axios from 'axios'
import { useQuery } from 'react-query'

export const Search = () => {

  const [gameTitle, setGameTitle] = useState("")

  const { data, isLoading, refetch } = useQuery(["game"], () => {
    return axios.get(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}`).then((res) => res.data)
  })

  const handleInput = (e) => {
    setGameTitle(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      refetch()
    }
  }

  console.log(data)


  return (
    <AnimatedPage>
      <div className='container'>
        <div className='input-wrapper'>
          <h2>Search for a specific title</h2>
          <input type="text" onChange={handleInput} onKeyDown={handleKeyDown}/>
          <button onClick={refetch}>refetch</button>
        </div>

        <div className='games-wrapper'>
          {data.map((game) => {
            return <h1>{game.external}</h1>
          })}
        </div>
      </div>
    </AnimatedPage>
  )
}
