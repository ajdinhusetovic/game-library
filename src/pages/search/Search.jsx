import { AnimatedPage } from '../../components/navbar/AnimatedPage'
import '../../scss/search.scss'
import axios from 'axios'
import { useQuery } from 'react-query'

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
