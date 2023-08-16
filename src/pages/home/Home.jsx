import { AnimatedPage } from '../../components/navbar/AnimatedPage'
import { useQuery } from 'react-query'
import axios from 'axios'
import '../../scss/home.scss'
import controllerImage from '../../assets/controller.png'

export const Home = () => {

  const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 1
  }

  const { data, isLoading } = useQuery(["game"], () => {
    return axios.get("https://www.cheapshark.com/api/1.0/deals").then((res) => res.data)
  })

  console.log(data)

  if (!isLoading) {
    return <div id='loading-controller'>
      <img
        src={controllerImage}
        alt="game controller image"
        id='loading-controller-image'
      />
    </div>
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
