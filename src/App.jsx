import './app.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar'
import { Home } from './pages/home/Home'
import { Browse } from './pages/browse/Browse'

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/browse' element={<Browse />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
