import './scss/app.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar'
import { Home } from './pages/home/Home'
import { Browse } from './pages/browse/Browse'
import { Search } from './pages/search/Search'
import { About } from './pages/about/About'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/browse' element={<Browse />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App
