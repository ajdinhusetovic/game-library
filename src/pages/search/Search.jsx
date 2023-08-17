import { AnimatedPage } from '../../components/navbar/AnimatedPage'
import '../../scss/search.scss'

export const Search = () => {
  return (
    <AnimatedPage>
      <div className='container'>
        <div className='input-wrapper'>
          <h2>Search for a specific title</h2>
          <input type="text" />
        </div>
      </div>
    </AnimatedPage>
  )
}
