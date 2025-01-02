// eslint-disable-next-line no-unused-vars
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import DashboradDriver from './pages/DashboradDriver'
const App = () => {
  return (
      
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboradDriver" element={<DashboradDriver/>} />
      

    </Routes>
    </BrowserRouter>
  )
}

export default App