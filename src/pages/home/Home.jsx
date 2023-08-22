import { AnimatedPage } from '../../components/navbar/AnimatedPage'
import { useQuery } from 'react-query'
import axios from 'axios'
import '../../scss/home.scss'
import controllerImage from '../../assets/controller.png'
import { Spinner } from '../../components/navbar/Spinner'
import { GameCard } from '../../components/navbar/GameCard'

export const Home = () => {

  // fetching data
  const { data, isLoading } = useQuery(["game"], () => {
    return axios.get("https://www.cheapshark.com/api/1.0/deals").then((res) => res.data)
  })

  // loading screen
  if (isLoading) {
    return <Spinner />
  }

  return (
    <AnimatedPage>
      <div className='container home'>
        {data.map((game) => {
          return (
            <>
              <GameCard game={game}/>
            </>
          )
        })}
      </div>
    </AnimatedPage>
  )
}
