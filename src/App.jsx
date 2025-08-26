import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Login from './components/Login'
import Home from './components/Home'
import Attendance from './components/Attendance'
import Navbar from './components/Navbar'
import './App.css'



function App() {

  return (
    <>
      <Router>
        
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/attendance' element={<Attendance />}></Route>
          
          
        </Routes>
      </Router>
    </>
  )
}

export default App
