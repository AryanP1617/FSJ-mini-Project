import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import Landing from './components/Landing'
import Login from './components/Login'
import Home from './components/Home'
import Attendance from './components/Attendance'
import Signup from './components/Signup'
import './App.css'

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/attendance' element={<Attendance />}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
          </Routes>
        </Router>
      </UserProvider>
    </>
  )
}

export default App