import { AnimatedPage } from '../../components/navbar/AnimatedPage'
import '../../scss/about.scss'

export const About = () => {
  return (
    <AnimatedPage>
      <div className='container'>
        <h1>About <span className='title-about'>GAME TAG</span></h1>
        <h3>Welcome to Game Tag!</h3>

        <h2>What We Offer</h2>
        <p>Gametag is a platform where you can discover and explore a curated collection of games. As a solo developer, my goal is to provide you with a simple and intuitive way to find new deals for games to enjoy.</p>

        <h2>Game Collection</h2>
        <p>Explore a handpicked selection of games across various genres, from action and adventure to strategy and simulation. Whether you're looking for the latest releases or hidden gems, Gametag has something for you.</p>

        <h2>Stay Updated</h2>
        <p>Stay up-to-date with the latest gaming deals and prices. I'm dedicated to maintaining an updated catalog of games so that you're always in the loop.</p>

        <h2>Contact</h2>
        <p>If you have any questions, game suggestions, or feedback, feel free to get in touch. You can reach me at <a href={`mailto:ahusetovic1@gmail.com`}>ahusetovic1@gmail.com</a></p>

        <p>Thank you for using Game Tag to enhance your gaming experience!</p>
      </div>
    </AnimatedPage >
  )
}
