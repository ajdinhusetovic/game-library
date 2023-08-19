import { AnimatedPage } from '../../components/navbar/AnimatedPage'
import { useQuery } from 'react-query'
import axios from 'axios'
import '../../scss/home.scss'
import controllerImage from '../../assets/controller.png'
import { Spinner } from '../../components/navbar/Spinner'

export const Home = () => {

  // animation
  const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 1
  }

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
              <div className='game-card'>
                <div><img src={game.thumb} width={200} /></div>
                <div className='title'><a href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`} className='game-link'>{game.title}</a></div>
                <div className='price'><span id='normal-price'>${game.normalPrice}</span> - <span id='sale-price'>${game.salePrice}</span></div>
                <div>Deal rating: {game.dealRating}</div>
              </div>
            </>
          )
        })}
      </div>
    </AnimatedPage>
  )
}
