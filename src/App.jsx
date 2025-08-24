import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <>
      <Router>
        
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          
          
        </Routes>
      </Router>
    </>
  )
}

export default App
