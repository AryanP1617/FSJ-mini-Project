import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/attendance' element={<Attendance />}></Route>
          
          
        </Routes>
      </Router>
    </>
  )
}

export default App
