import {Login }from '../src/login/Login.jsx'
import Profile from '../src/login/Profile.jsx'
import Home from './login/Home.jsx'
import './App.css'
import { Routes, Route} from 'react-router-dom'

function App() {
 

  return (
    <div>
      
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
    
      
    </div>
    

  )
}

export default App
