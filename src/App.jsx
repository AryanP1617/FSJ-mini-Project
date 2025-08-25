import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login'
import Home from './components/Home'
import './App.css'
import Landing from './components/Landing'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
